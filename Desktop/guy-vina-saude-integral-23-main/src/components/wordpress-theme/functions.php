
<?php
/**
 * Tema Geisler Viana - Functions
 */

// Evitar acesso direto
if (!defined('ABSPATH')) {
    exit;
}

// Configurações do tema
add_action('after_setup_theme', function() {
    // Suporte a menus
    add_theme_support('menus');
    
    // Suporte a imagens destacadas
    add_theme_support('post-thumbnails');
    
    // Suporte a título dinâmico
    add_theme_support('title-tag');
    
    // Suporte a HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Registrar menu principal
    register_nav_menus(array(
        'primary' => 'Menu Principal',
    ));
});

// Carregar estilos e scripts
add_action('wp_enqueue_scripts', function() {
    // CSS do tema
    wp_enqueue_style('guyvina-style', get_stylesheet_uri());
    
    // Tailwind CSS
    wp_enqueue_style('tailwind', 'https://cdn.tailwindcss.com');
    
    // JavaScript do tema
    wp_enqueue_script('guyvina-script', get_template_directory_uri() . '/js/script.js', array(), '1.0.0', true);
});

// Configurar idioma
add_action('after_setup_theme', function() {
    // Definir o locale para Português
    setlocale(LC_ALL, 'pt_PT.utf8');
    
    // Carregar traduções (se aplicável)
    load_theme_textdomain('guyvina', get_template_directory() . '/languages');
});

// Remover alguns elementos padrão do WordPress
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

// Customizar excerpt
function guyvina_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'guyvina_excerpt_length');

// Adicionar classes CSS customizadas ao body
function guyvina_body_classes($classes) {
    $classes[] = 'font-inter';
    return $classes;
}
add_filter('body_class', 'guyvina_body_classes');
