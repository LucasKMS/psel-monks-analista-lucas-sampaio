<?php
function registrar_custom_post_types() {
    register_post_type('cards', array(
        'labels' => array(
            'name'          => __('Cards'),
            'singular_name' => __('Card')
        ),
        'public'       => true,
        'has_archive'  => true,
        'supports'     => array('title', 'editor'),
        'show_in_rest' => true,
    ));

    register_post_type('leads', array(
        'labels' => array(
            'name'          => __('Leads'),
            'singular_name' => __('Lead')
        ),
        'public'       => true,
        'has_archive'  => false,
        'supports'     => array('title'),
        'show_in_rest' => true,
    ));
}

add_action('init', 'registrar_custom_post_types');
