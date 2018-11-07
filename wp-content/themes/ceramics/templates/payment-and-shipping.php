<?php
/**
 * Template Name: payment-and-shipping
 */
get_header(); ?>

    <div class="page">
        <div class="content">
            <h1 class="page-title"><?php the_title(); ?></h1>
            <article>
                <div class="rich-content">
                    <?php
                    while (have_posts()) :
                        the_post();

                        the_content();

                    endwhile; // End of the loop.
                    ?>
                </div>
            </article>

        </div>
    </div>
<?php get_footer(); ?>