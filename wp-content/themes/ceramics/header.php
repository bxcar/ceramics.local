<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ceramics
 */

?>
<!DOCTYPE html>
<html lang="ru">

<!-- Mirrored from finezza-ceramics.ru/ by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 05 Nov 2018 10:48:08 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <title>Finezza Ceramics</title>
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Finezza Ceramics" />
    <meta property="og:description" />

    <link rel="stylesheet" type="text/css" href="<?= get_template_directory_uri(); ?>/assets/app_css-3a32ea9076c5c0a3e6cff6735441f0e1959a.css?9d0aa439bf87e2732e04d3f8edc54086">
    <script type="text/javascript" src="<?= get_template_directory_uri(); ?>/assets/core_js-94af696b208f02ccb899bdb4d272f149a14e.js?c76175d4b6c160c1badc918d4cf6c65d"></script>
    <script type="text/javascript" src="<?= get_template_directory_uri(); ?>/assets/photoswipe_js-e57c8edd9ffda0860f55a649b0f9a30559d8.js?b256213fd1d3a8aaa4d4b81f7eafc976"></script>
    <script type="text/javascript" src="<?= get_template_directory_uri(); ?>/assets/app_js-7637d6366a438ddb00001a3e0e106312795f.js?1781d2f74e82854e366eeb211ef02f77"></script>
<?php wp_head(); ?>
</head>

<body class="section-frontpage page-frontpage-index">

<header class="main">
    <div class="page-content">
        <div class="menu-btn" data-menu="yes" data-menu-menu-selector=".main-menu .items"></div>
        <a href="index.html" class="logo"></a>
        <nav class="main-menu">
            <div class="items">
                <!--
               --><span class="item"><a href="catalog.html">Каталог</a></span><!--
     --><!--
       --><span class="item"><a href="shops.html">Адреса магазинов</a></span><!--
     --><!--
       --><span class="item"><a href="design-3d.html">Дизайн-проект в 3D</a></span><!--
     --><!--
       --><span class="item"><a href="payment-and-shipping.html">Оплата и доставка</a></span><!--
     --><!--
       --><span class="item"><a href="promo.html">Акции</a></span><!--
     -->      </div>
        </nav>
    </div>
</header>