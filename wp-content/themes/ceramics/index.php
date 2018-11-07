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
                        <?php if (get_field('slides')) {
                            foreach (get_field('slides') as $item) { ?>
                                <div class="swiper-slide" style="background-image: url(<?= $item['slide']; ?>)">
                                    <a target="<?= $item['link']['target']; ?>" href="<?= $item['link']['url']; ?>"></a>
                                </div>
                            <?php }
                        } ?>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="swiper-action-next"></div>
                <div class="swiper-action-prev"></div>
            </div>
            <div class="page-content">

                <div class="main-text-content">
                    <h1><?php the_field('title') ?></h1>

                    <div class="text">
                        <div class="rich-content">
                            <p><?php the_field('desc') ?></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
<?php
get_footer();
