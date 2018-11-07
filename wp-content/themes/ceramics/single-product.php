<?php get_header(); ?>

    <div class="page">
        <div class="content">
            <div class="swiper-box swiper-box-narrow" data-swiper="yes">
                <div class="swiper-container">
                    <?php wc_print_notices(); ?>
                    <div class="swiper-wrapper">
                        <?php if (get_field('gallery')) {
                            foreach (get_field('gallery') as $item) { ?>
                                <div class="swiper-slide" style="background-image: url(<?= $item['img'] ?>)"><a
                                            href="javascript:void(0);" data-image-zoom="<?= $item['img'] ?>"
                                            data-image-zoom-size="2000x1670" data-image-zoom-fade="yes"
                                            data-image-zoom-gallery-id="collection-108"
                                            data-image-zoom-parent-selector=".swiper-slide"
                                            data-image-zoom-check-parent-selector=".swiper-slide:not(.swiper-slide-duplicate)"
                                            data-image-zoom-gallery-selector-prefix=".swiper-slide:not(.swiper-slide-duplicate) "></a>
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
                <h1 class="page-title"><?php the_title(); ?></h1>
                <div class="subnav">
                    <a href="/catalog" class="item active"><span class="icon icon-back"></span> к коллекциям</a>
                </div>
                <div class="grid">
                    <?php
                    $product_id = get_the_ID(); // ID of parent product
                    $product = get_product($product_id);
                    $children = $product->get_children();

                    foreach ($children as $item) {
                        $_product = wc_get_product( $item );
                        $size = $_product->get_attribute( 'Size' );
                        ?>
                        <div class="item">
                            <div class="media">
                                <img src="<?= get_the_post_thumbnail_url($item); ?>"
                                     alt="3-1D63538" class="zoomable"
                                     data-image-zoom="<?= get_template_directory_uri(); ?>/files/tiles/3-1d63538_(33x60)-ee94e4f6c52b4f1a07dea142001eee59-a3e16d289f81806737e0ba24f40caaa6.jpg"
                                     data-image-zoom-size="1000x2000"/>
                            </div>
                            <div class="props">
                                <div class="title"><?= get_the_title($item)?></div>
                                <div class="size"><?= $size ?></div>
                                <div class="price">
                                    <?php if($_product->get_sale_price()) { ?>
                                        <div class="note"><strike><?= $_product->get_regular_price(); ?> &#x20CF;</strike>/м<sup>2</sup></div>
                                        <div class="value red"><?= $_product->get_sale_price(); ?> &#x20CF;/м<sup>2</sup></div>
                                    <?php } else { ?>
                                        <div class="value"><?= $_product->get_regular_price(); ?> &#x20CF;/м<sup>2</sup></div>
                                    <?php }?>
                                </div>
                                <div class="actions">
                                    <span class="btn btn-filled btn-to-cart" data-add-to-cart="66">
                                      <span class="icon icon-cart"></span> <span class="text">
                                            <?php
                                            echo apply_filters( 'woocommerce_loop_add_to_cart_link',
                                                sprintf( '<a style="color: rgba(255, 255, 255, 0.5);" href="%s" rel="nofollow" data-product_id="%s" data-product_sku="%s" class=" button %s product_type_%s">В корзину</a>',
                                                    esc_url( $_product->add_to_cart_url() ),
                                                    esc_attr( $item ),
                                                    esc_attr( $_product->get_sku() ),
                                                    $product->is_purchasable() ? 'add_to_cart_button' : '',
                                                    esc_attr( $_product->product_type ),
                                                    esc_html( $_product->add_to_cart_text() )
                                                ),
                                                $product );?>
<!--                                        <span class="not-in-cart">в корзину</span>-->
<!--                                        <span class="in-cart">в корзине</span>-->
                                      </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    <?php }
                    ?>
                </div>
                <div class="footnote-content">
                    <div class="form-actions">
                        <a href="javascript:void(0);" data-dialog="load" data-dialog-url="/design-3d/request"
                           class="btn btn-large btn-outline">Заказать дизайн-проект</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
<?php get_footer(); ?>