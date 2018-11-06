<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ceramics
 */

get_header();
?>
    <div class="page">
        <div class="content">
            <div class="swiper-box" data-swiper="yes" data-swiper-autoplay="5">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" style="background-image: url(<?= get_template_directory_uri(); ?>/_/files/featured/finezza_banners_4_2-8cf5abeb8662866fb6d3e249f52a6871-b6141665057c0e15d0b1e8d47a908afe-thumb-1120x400-crop.png)"><a href="catalog0dab.html?type=2"></a></div>
                        <div class="swiper-slide" style="background-image: url(<?= get_template_directory_uri(); ?>/_/files/featured/finezza_banners_-8472eac34cea3f25b9579120c12d673b-34bca1d5b4c4dc5205a1c2b6972dcc44-thumb-1120x400-crop.png)"><a href="payment-and-shipping.html"></a></div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="swiper-action-next"></div>
                <div class="swiper-action-prev"></div>
            </div>
            <div class="page-content">

                <div class="main-text-content">
                    <h1>Finezza ceramics</h1>

                    <div class="text">
                        <div class="rich-content">
                            <p>Керамическая плитка Finezza ceramics производится на современном европейском оборудовании. Благодаря новейшим технологиям нам удалось добиться высокого качества плитки. Вся продукция изготавливается из белой глины и является ректифицированной. Плитку можно укладывать бесшовным способом.</p>
                        </div>    </div>
                </div>

            </div>
        </div>
    </div>
<?php
get_footer();
