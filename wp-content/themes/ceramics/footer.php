<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package ceramics
 */

?>
<footer class="main">
    <div class="page-content">
        <div class="column-layout">
            <div class="column">
                Тел. <a style="color: black"><?php the_field('footer_phone', 'option')?></a><br/>
                Почта: <a href="mailto:<?php the_field('footer_email', 'option')?>"><?php the_field('footer_email', 'option')?></a><span class="action"><a href="javascript:void(0);" data-dialog="load" data-dialog-url="/feedback">Обратная связь</a></span>
            </div>
            <div class="column">
                <a href="http://proxima.agency/" class="developed-by">
                    Разработка сайта            <strong>Proxima.agency</strong>
                </a>
            </div>
        </div>
    </div>
</footer>

<div class="cart-action">
    <div class="page-content">
        <a href="/cart" id="cart-btn" class="btn btn-rounded">
            <span class="icon icon-cart"></span><span class="text"> Корзина</span>
            <span id="cart-counter" class="counter"></span>
        </a>
    </div>
</div>

<div id="pswp" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">

        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <button class="pswp__button pswp__button--share" title="Share"></button>
                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                        <div class="pswp__preloader__cut">
                            <div class="pswp__preloader__donut"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

        </div>
    </div>
</div>


<?php wp_footer(); ?>
</body>

</html>