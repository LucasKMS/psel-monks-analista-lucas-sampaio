<?php

define('DEFAULT_CARD_IMAGE', 'https://media.licdn.com/dms/image/v2/D4D0BAQHmt5xzLo3ZBQ/company-logo_200_200/company-logo_200_200/0/1721310455635/media_monks_brasil_logo?e=1749081600&v=beta&t=e7Z33CNTeUbWYpUf_h5DtN3WHdcxJTHhHvcoQQEpU1o');

function obter_cards_api() {
    $query = new WP_Query(array(
        'post_type'      => 'cards',
        'posts_per_page' => -1
    ));

    $cards = [];

    while ($query->have_posts()) {
        $query->the_post();
        $image_url = get_post_meta(get_the_ID(), 'image_url', true);
        
        $cards[] = array(
            'id'          => get_the_ID(),
            'title'       => get_the_title(),
            'description' => wp_strip_all_tags(get_the_content()), 
            'imageUrl'    => $image_url ?: DEFAULT_CARD_IMAGE
        );
    }

    return rest_ensure_response($cards);
}

add_action('rest_api_init', function () {
    register_rest_route('api', '/cards', array(
        'methods'  => 'GET',
        'callback' => 'obter_cards_api'
    ));
});

function inserir_card_api($request) {
    $params = $request->get_json_params();

    if (empty($params['title']) || empty($params['description'])) {
        return new WP_REST_Response(['message' => 'Título e descrição são obrigatórios'], 400);
    }

    $post_id = wp_insert_post(array(
        'post_title'   => sanitize_text_field($params['title']),
        'post_content' => sanitize_textarea_field($params['description']),
        'post_type'    => 'cards',
        'post_status'  => 'publish',
        'meta_input'   => array(
            'image_url' => isset($params['imageUrl']) && !empty($params['imageUrl']) 
                          ? sanitize_text_field($params['imageUrl']) 
                          : DEFAULT_CARD_IMAGE
        )
    ));

    if (is_wp_error($post_id)) {
        return new WP_REST_Response(['message' => 'Erro ao criar o card'], 500);
    }

    return new WP_REST_Response(['message' => 'Card criado com sucesso', 'id' => $post_id], 201);
}

add_action('rest_api_init', function () {
    register_rest_route('api', '/cards', array(
        'methods'  => 'POST',
        'callback' => 'inserir_card_api',
        'permission_callback' => '__return_true', 
    ));
});

function inserir_lead_api($request) {
    $params = $request->get_json_params();

    if (
        empty($params['nome']) ||
        empty($params['sobrenome']) ||
        empty($params['telefone']) ||
        empty($params['email'])
    ) {
        return new WP_REST_Response(['message' => 'Todos os campos são obrigatórios.'], 400);
    }

    $post_id = wp_insert_post(array(
        'post_type'   => 'leads',
        'post_status' => 'publish',
        'post_title'  => sanitize_text_field($params['nome'] . ' ' . $params['sobrenome']),
        'meta_input'  => array(
            'nome'     => sanitize_text_field($params['nome']),
            'sobrenome'=> sanitize_text_field($params['sobrenome']),
            'telefone' => sanitize_text_field($params['telefone']),
            'email'    => sanitize_email($params['email']),
        )
    ));

    if (is_wp_error($post_id)) {
        return new WP_REST_Response(['message' => 'Erro ao criar o lead.'], 500);
    }

    return new WP_REST_Response(['message' => 'Lead criado com sucesso', 'id' => $post_id], 201);
}

function obter_leads_api() {
    $query = new WP_Query(array(
        'post_type' => 'leads',
        'posts_per_page' => -1,
    ));

    $leads = [];

    while ($query->have_posts()) {
        $query->the_post();
        $leads[] = array(
            'id'        => get_the_ID(),
            'nome'      => get_post_meta(get_the_ID(), 'nome', true),
            'sobrenome' => get_post_meta(get_the_ID(), 'sobrenome', true),
            'telefone'  => get_post_meta(get_the_ID(), 'telefone', true),
            'email'     => get_post_meta(get_the_ID(), 'email', true),
        );
    }

    return rest_ensure_response($leads);
}

add_action('rest_api_init', function () {
    register_rest_route('api', '/leads', [
        'methods'  => 'POST',
        'callback' => 'inserir_lead_api',
        'permission_callback' => '__return_true',
    ]);

    register_rest_route('api', '/leads', [
        'methods'  => 'GET',
        'callback' => 'obter_leads_api'
    ]);
});

?>
