<?php
require_once get_template_directory() . '/inc/cardPostTypes.php';
require_once get_template_directory() . '/inc/endpoints.php';

add_action('init', function () {
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
});

?>
