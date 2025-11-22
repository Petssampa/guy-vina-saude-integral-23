
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
            <!-- Logo -->
            <a href="<?php echo home_url(); ?>" class="flex items-center">
                <img src="/lovable-uploads/5bab21ce-5602-4b23-b2ab-29784f72b3e6.png" alt="<?php bloginfo('name'); ?>" class="h-16 w-auto">
            </a>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-8">
                <a href="<?php echo home_url(); ?>" class="text-gray-700 hover:text-bronze hover:border-b-2 hover:border-bronze transition-all duration-300 pb-1">Home</a>
                <a href="<?php echo home_url('/sobre'); ?>" class="text-gray-700 hover:text-bronze hover:border-b-2 hover:border-bronze transition-all duration-300 pb-1">Sobre</a>
                <a href="<?php echo home_url('/projetos'); ?>" class="text-gray-700 hover:text-bronze hover:border-b-2 hover:border-bronze transition-all duration-300 pb-1">Projetos</a>
                <a href="<?php echo home_url('/blog'); ?>" class="text-gray-700 hover:text-bronze hover:border-b-2 hover:border-bronze transition-all duration-300 pb-1">Blog</a>
                <a href="<?php echo home_url('/contato'); ?>" class="text-gray-700 hover:text-bronze hover:border-b-2 hover:border-bronze transition-all duration-300 pb-1">Contato</a>
            </nav>

            <!-- Mobile Menu Button -->
            <button class="md:hidden" onclick="toggleMobileMenu()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>
        </div>

        <!-- Mobile Navigation -->
        <nav id="mobile-menu" class="md:hidden pb-4 hidden">
            <div class="flex flex-col space-y-2">
                <a href="<?php echo home_url(); ?>" class="text-gray-700 hover:text-bronze transition-colors duration-300 py-2">Home</a>
                <a href="<?php echo home_url('/sobre'); ?>" class="text-gray-700 hover:text-bronze transition-colors duration-300 py-2">Sobre</a>
                <a href="<?php echo home_url('/projetos'); ?>" class="text-gray-700 hover:text-bronze transition-colors duration-300 py-2">Projetos</a>
                <a href="<?php echo home_url('/blog'); ?>" class="text-gray-700 hover:text-bronze transition-colors duration-300 py-2">Blog</a>
                <a href="<?php echo home_url('/contato'); ?>" class="text-gray-700 hover:text-bronze transition-colors duration-300 py-2">Contato</a>
            </div>
        </nav>
    </div>
</header>

<main>
