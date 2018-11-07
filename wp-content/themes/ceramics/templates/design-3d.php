<?php
/**
 * Template Name: design-3d
 */
get_header(); ?>


    <div class="page">
        <div class="content">
            <h1 class="page-title"><?php the_title(); ?></h1>
            <article>
                <div class="rich-content">
                    <?php the_field('desc'); ?>
                    <p></p>
                </div>
            </article>
            <div class="page-content">
                <div class="footnote-content">
                    <div class="form-actions">
                        <a href="javascript:void(0);" data-dialog="load" data-dialog-url="/design-3d/request"
                           class="btn btn-large btn-outline"><?php the_field('button_text'); ?></a>
                    </div>
                </div>

                <section>
                    <h2><?php the_field('section_title'); ?></h2>

                    <div class="tiles tiles-cases">

                        <?php if (get_field('project')) {
                            foreach (get_field('project') as $item) { ?>
                                <div class="item">
                                    <div class="media tabs-slider" data-tab-slider="yes">
                                        <div class="tab-pages">
                                            <div class="tab-pages-content">
                                                <?php if ($item['images']) {
                                                    foreach ($item['images'] as $item2) { ?>
                                                        <div class="image tab-page zoomable"
                                                             data-image-zoom="<?= $item2['big'] ?>"
                                                             data-image-zoom-size="1920x969" data-image-zoom-fade="yes"
                                                             data-image-zoom-gallery-id="case-7"
                                                             style="background-image: url(<?= $item2['medium'] ?>);">
                                                            &nbsp;
                                                        </div>
                                                    <?php }
                                                } ?>
                                            </div>
                                        </div>
                                        <div class="tab-items">
                                            <?php if ($item['images']) {
                                                foreach ($item['images'] as $item2) { ?>
                                                    <div class="image-preview tab"
                                                         style="background-image: url(<?= $item2['small'] ?>);">&nbsp;
                                                    </div>
                                                <?php }
                                            } ?>
                                        </div>
                                    </div>
                                    <div class="props">
                                        <div class="prop">
                                            <div class="prop-label">Коллекция</div>
                                            <div class="prop-value"><?= $item['collection'] ?></div>
                                        </div>
                                        <div class="prop">
                                            <div class="prop-label">Площадь комнаты</div>
                                            <div class="prop-value"><?= $item['room'] ?></div>
                                        </div>
                                    </div>
                                </div>
                            <?php }
                        } ?>
                    </div>
                </section>
            </div>
        </div>
    </div>
<?php get_footer(); ?>