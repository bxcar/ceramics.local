<?php
/**
 * Template Name: checkout
 */
get_header(); ?>

    <div class="page">
        <div class="content">
            <h1 class="page-title">Оформление заказа</h1>
            <div class="page-content">
                <!--<div class="message-content">
                    В корзине ничего нет
                </div>-->
                <?php
                while ( have_posts() ) :
                    the_post();

                    the_content();

                endwhile; // End of the loop.
                ?>
            </div>

        </div>
    </div>
<?php get_footer(); ?>