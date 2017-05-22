<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php bloginfo('name'); ?> | <?php is_front_page() ? bloginfo('description') : wp_title(''); ?></title>

    <link rel="shortcut icon" href="<?php bloginfo('stylesheet_directory'); ?>/imgs/favicon.png" type="image/png"/>

    <!--[if lte IE 9 ]>
    <script>
        alert('Browser version is too old and site will not be displayed correctly. Please, upgrade your browser.');
    </script>
    <![endif]-->

    <?php wp_enqueue_script("jquery"); ?>

    <?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>


<header>

    <div class="container">
        <div class="navbar-head">
            <a class="logo" href="/">
                Logo
            </a>
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
                <div class="animate-burger">
                    <span class="top"></span>
                    <span class="middle"></span>
                    <span class="bottom"></span>
                </div>
            </button>
        </div>

        <div class="navbar-collapse collapse" id="navbar">

            <?php
            wp_nav_menu(array(
                    'menu' => 'Main nav',
                    'container' => '',
                    'menu_class' => 'nav nav-left navbar-nav'
                )
            );
            ?>
        </div>
    </div>

</header>