/*!
 * WooCommerce Variation Gallery v1.1.10 
 * 
 * Author: Emran Ahmed ( emran.bd.08@gmail.com ) 
 * Date: 2018-10-20 22:06:34
 * Released under the GPLv3 license.
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
module.exports = __webpack_require__(7);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

jQuery(function ($) {
    Promise.resolve().then(function () {
        return __webpack_require__(2);
    }).then(function () {

        $('.woo-variation-gallery-wrapper').WooVariationGallery();

        // Ajax
        $(document).on('wc_variation_form', '.variations_form', function () {
            //    $('.woo-variation-gallery-wrapper').WooVariationGallery();
        });

        // Support for Jetpack's Infinite Scroll,
        $(document.body).on('post-load', function () {
            //    $('.woo-variation-gallery-wrapper').WooVariationGallery();
        });
    });
}); // end of jquery main wrapper

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ================================================================
// WooCommerce Variation Gallery
/*global wc_add_to_cart_variation_params, woo_variation_gallery_options */
// ================================================================

var WooVariationGallery = function ($) {

    var Default = {};

    var WooVariationGallery = function () {
        function WooVariationGallery(element, config) {
            _classCallCheck(this, WooVariationGallery);

            // Assign
            this._el = element;
            this._element = $(element);
            this._config = $.extend({}, Default, config);

            this.$product = this._element.closest('.product');
            this.$variations_form = this.$product.find('.variations_form');
            this.$target = this._element.parent();
            this.$slider = $('.woo-variation-gallery-slider', this._element);
            this.$thumbnail = $('.woo-variation-gallery-thumbnail-slider', this._element);
            this.thumbnail_columns = this._element.data('thumbnail_columns');
            this.product_id = this.$variations_form.data('product_id');
            this.is_variation_product = this.$variations_form.length > 0;
            this.initial_load = true;

            // Call
            this.defaultGallery();
            this.initVariationImagePreload();

            this.initEvents();

            this.initSlick();
            this.initZoom();
            this.initPhotoswipe();

            if (!this.is_variation_product) {
                this.imagesLoaded();
            }

            this.initVariationGallery();

            this._element.data('woo_variation_gallery', this);
            $(document).trigger('woo_variation_gallery_init', [this]);
        }

        _createClass(WooVariationGallery, [{
            key: 'init',
            value: function init() {
                var _this = this;

                return _.debounce(function () {
                    _this.initSlick();
                    _this.initZoom();
                    _this.initPhotoswipe();
                }, 500);
            }
        }, {
            key: 'dimension',
            value: function dimension() {

                //this._element.css('min-height', '0px');
                //this._element.css('min-width', '0px');

                //return _.debounce(() => {
                //this._element.css('min-height', this.$slider.height() + 'px');
                //this._element.css('min-width', this.$slider.width() + 'px');
                //}, 400);
            }
        }, {
            key: 'initEvents',
            value: function initEvents() {
                // $(window).on('resize', this.dimension());
                this._element.on('woo_variation_gallery_image_loaded', this.init());
            }
        }, {
            key: 'initSlick',
            value: function initSlick() {
                var _this2 = this;

                if (this.$slider.hasClass('slick-initialized')) {
                    this.$slider.slick('unslick');
                }

                this.$slider.off('init');
                this.$slider.off('beforeChange');
                this.$slider.off('afterChange');

                this._element.trigger('woo_variation_gallery_before_init', [this]);

                // Slider

                this.$slider.on('init', function (event) {
                    if (_this2.initial_load) {
                        _this2.initial_load = false;
                        // this._element.css('min-height', this.$slider.height() + 'px');
                    }
                }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    _this2.$thumbnail.find('.wvg-gallery-thumbnail-image').not('.slick-slide').removeClass('current-thumbnail');
                    _this2.$thumbnail.find('.wvg-gallery-thumbnail-image').not('.slick-slide').eq(nextSlide).addClass('current-thumbnail');
                }).on('afterChange', function (event, slick, currentSlide) {
                    _this2.stopVideo(_this2.$slider);
                    _this2.initZoomForTarget(currentSlide);
                }).slick();

                // Thumbnails

                this.$thumbnail.find('.wvg-gallery-thumbnail-image').not('.slick-slide').first().addClass('current-thumbnail');

                this.$thumbnail.find('.wvg-gallery-thumbnail-image').not('.slick-slide').each(function (index, el) {
                    $(el).find('div, img').on('click', function (event) {
                        event.preventDefault();
                        event.stopPropagation();
                        _this2.$slider.slick('slickGoTo', index);
                    });
                });

                _.delay(function () {
                    _this2._element.trigger('woo_variation_gallery_slider_slick_init', [_this2]);
                }, 1);

                _.delay(function () {
                    _this2.removeLoadingClass();
                }, 100);
            }
        }, {
            key: 'initZoomForTarget',
            value: function initZoomForTarget(currentSlide) {

                if (!woo_variation_gallery_options.enable_gallery_zoom) {
                    return;
                }

                var galleryWidth = this.$target.width(),
                    zoomEnabled = false,
                    zoomTarget = this.$slider.slick('getSlick').$slides.eq(currentSlide);

                $(zoomTarget).each(function (index, target) {
                    var image = $(target).find('img');

                    if (image.data('large_image_width') > galleryWidth) {
                        zoomEnabled = true;
                        return false;
                    }
                });

                // If zoom not included.
                if (!$().zoom) {
                    return;
                }

                // But only zoom if the img is larger than its container.
                if (zoomEnabled) {
                    var zoom_options = $.extend({
                        touch: false
                    }, wc_single_product_params.zoom_options);

                    if ('ontouchstart' in document.documentElement) {
                        zoom_options.on = 'click';
                    }

                    zoomTarget.trigger('zoom.destroy');
                    zoomTarget.zoom(zoom_options);
                }
            }
        }, {
            key: 'initZoom',
            value: function initZoom() {
                var currentSlide = this.$slider.slick('slickCurrentSlide');
                this.initZoomForTarget(currentSlide);
            }
        }, {
            key: 'initPhotoswipe',
            value: function initPhotoswipe() {
                var _this3 = this;

                if (!woo_variation_gallery_options.enable_gallery_lightbox) {
                    return;
                }

                this._element.off('click', '.woo-variation-gallery-trigger');
                this._element.off('click', '.wvg-gallery-image a');

                this._element.on('click', '.woo-variation-gallery-trigger', function (event) {
                    _this3.openPhotoswipe(event);
                });

                this._element.on('click', '.wvg-gallery-image a', function (event) {
                    _this3.openPhotoswipe(event);
                });
            }
        }, {
            key: 'openPhotoswipe',
            value: function openPhotoswipe(event) {
                var _this4 = this;

                event.preventDefault();

                if (typeof PhotoSwipe === 'undefined') {
                    return false;
                }

                var pswpElement = $('.pswp')[0],
                    items = this.getGalleryItems();

                var options = $.extend({
                    index: this.$slider.slick('slickCurrentSlide')
                }, wc_single_product_params.photoswipe_options);

                // Initializes and opens PhotoSwipe.

                var photoswipe = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);

                // Gallery starts closing
                photoswipe.listen('close', function () {
                    _this4.stopVideo(pswpElement);
                });

                photoswipe.listen('afterChange', function () {
                    _this4.stopVideo(pswpElement);
                });

                photoswipe.init();
            }
        }, {
            key: 'stopVideo',
            value: function stopVideo(element) {
                $(element).find('iframe, video').each(function () {
                    var tag = $(this).prop("tagName").toLowerCase();
                    if (tag === 'iframe') {
                        var src = $(this).attr('src');
                        $(this).attr('src', src);
                    }

                    if (tag === 'video') {
                        $(this)[0].pause();
                    }
                });
            }
        }, {
            key: 'addLoadingClass',
            value: function addLoadingClass() {
                this._element.addClass('loading-gallery');
            }
        }, {
            key: 'removeLoadingClass',
            value: function removeLoadingClass() {
                this._element.removeClass('loading-gallery');
            }
        }, {
            key: 'getGalleryItems',
            value: function getGalleryItems() {
                var $slides = this.$slider.slick('getSlick').$slides,
                    items = [];

                if ($slides.length > 0) {
                    $slides.each(function (i, el) {
                        var img = $(el).find('img, iframe, video');
                        var tag = $(img).prop("tagName").toLowerCase();

                        var src = void 0,
                            item = void 0;
                        switch (tag) {
                            case 'img':
                                var large_image_src = img.attr('data-large_image'),
                                    large_image_w = img.attr('data-large_image_width'),
                                    large_image_h = img.attr('data-large_image_height');
                                item = {
                                    src: large_image_src,
                                    w: large_image_w,
                                    h: large_image_h,
                                    title: img.attr('data-caption') ? img.attr('data-caption') : img.attr('title')
                                };
                                break;
                            case 'iframe':
                                src = img.attr('src');
                                item = {
                                    html: '<iframe class="wvg-lightbox-iframe" src="' + src + '" style="width: 100%; height: 100%; margin: 0;padding: 0; background-color: #000000" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
                                };
                                break;
                            case 'video':
                                src = img.attr('src');
                                item = {
                                    html: '<video class="wvg-lightbox-video" controls controlsList="nodownload" src="' + src + '" style="width: 100%; height: 100%; margin: 0;padding: 0; background-color: #000000"></video>'
                                };
                                break;
                        }

                        items.push(item);
                    });
                }
                return items;
            }
        }, {
            key: 'destroySlick',
            value: function destroySlick() {

                this.$slider.html('');
                this.$thumbnail.html('');

                if (this.$slider.hasClass('slick-initialized')) {
                    this.$slider.slick('unslick');
                }

                this._element.trigger('woo_variation_gallery_slick_destroy', [this]);
            }
        }, {
            key: 'defaultGallery',
            value: function defaultGallery() {
                var _this5 = this;

                if (this.is_variation_product) {
                    wp.ajax.send('wvg_get_default_gallery', {
                        data: {
                            product_id: this.product_id
                        },
                        success: function success(data) {
                            _this5._element.data('woo_variation_gallery_default', data);
                            _this5._element.trigger('woo_variation_default_gallery_loaded', _this5);
                        },
                        error: function error(e) {
                            _this5._element.data('woo_variation_gallery_default', []);
                            _this5._element.trigger('woo_variation_default_gallery_loaded', _this5);
                            console.error('Variation Gallery not available on variation id ' + _this5.product_id + '.');
                        }
                    });
                }
            }
        }, {
            key: 'initVariationImagePreload',
            value: function initVariationImagePreload() {
                var _this6 = this;

                //return;
                if (this.is_variation_product) {
                    wp.ajax.send('wvg_get_available_variation_images', {
                        data: {
                            product_id: this.product_id
                        },
                        success: function success(images) {
                            // console.log(data)
                            if (images.length > 1) {
                                _this6.imagePreload(images);
                            }
                            _this6._element.data('woo_variation_gallery_variation_images', images);
                        },
                        error: function error(e) {
                            _this6._element.data('woo_variation_gallery_variation_images', []);
                            console.error('Variation Gallery variations images not available on variation id ' + _this6.product_id + '.');
                        }
                    });
                }
            }
        }, {
            key: 'imagePreload',
            value: function imagePreload(images) {
                for (var i = 0; i < images.length; i++) {
                    try {

                        // Note: this won't work when chrome devtool is open and 'disable cache' is enabled within the network panel
                        var _img = new Image();
                        var _gallery = new Image();
                        var _full = new Image();
                        var _thumbnail = new Image();

                        _img.src = images[i].src;
                        _img.srcset = images[i].srcset;

                        _gallery.src = images[i].gallery_thumbnail_src;

                        _full.src = images[i].full_src;

                        _thumbnail.src = images[i].thumb_src;

                        // Append Content
                        /*let _img_src    = images[i].src;
                        let _img_srcset = images[i].srcset;
                         let _gallery_src   = images[i].gallery_thumbnail_src;
                        let _full_src      = images[i].full_src;
                        let _thumbnail_src = images[i].thumb_src;
                         let template = `<div style="display: none"><img aria-hidden="true" style="display: none" src="${_img_src}" srcset="${_img_srcset}" /><img style="display: none" src="${_gallery_src}" /><img style="display: none" src="${_thumbnail_src}" /><img style="display: none" src="${_full_src}" /></div>`;
                        $('body').append(template)*/
                    } catch (e) {
                        console.error(e);
                    }
                }
            }
        }, {
            key: 'initVariationGallery',
            value: function initVariationGallery() {
                var _this7 = this;

                // show_variation, found_variation

                this.$variations_form.on('show_variation', function (event, variation) {
                    _this7.addLoadingClass();
                    _this7.galleryInit(variation.variation_gallery_images);
                });

                if (woo_variation_gallery_options.gallery_reset_on_variation_change) {
                    this.$variations_form.on('reset_image', function (event) {
                        _this7.addLoadingClass();
                        _this7.galleryReset();
                    });
                } else {
                    this.$variations_form.on('click.wc-variation-form', '.reset_variations', function (event) {
                        _this7.addLoadingClass();
                        _this7.galleryReset();
                    });
                }
            }
        }, {
            key: 'galleryReset',
            value: function galleryReset() {
                var _this8 = this;

                var $default_gallery = this._element.data('woo_variation_gallery_default');

                if ($default_gallery && $default_gallery.length > 0) {
                    this.galleryInit($default_gallery);
                } else {
                    _.delay(function () {
                        _this8.removeLoadingClass();
                    }, 100);
                }
            }
        }, {
            key: 'galleryInit',
            value: function galleryInit(images) {
                var _this9 = this;

                var hasGallery = images.length > 1;

                this._element.trigger('before_woo_variation_gallery_init', [this, images]);

                this.destroySlick();

                var slider_inner_html = images.map(function (image) {
                    var template = wp.template('woo-variation-gallery-slider-template');
                    return template(image);
                }).join('');

                var thumbnail_inner_html = images.map(function (image) {
                    var template = wp.template('woo-variation-gallery-thumbnail-template');
                    return template(image);
                }).join('');

                if (hasGallery) {
                    this.$target.addClass('woo-variation-gallery-has-product-thumbnail');
                } else {
                    this.$target.removeClass('woo-variation-gallery-has-product-thumbnail');
                }

                this.$slider.html(slider_inner_html);

                if (hasGallery) {
                    this.$thumbnail.html(thumbnail_inner_html);
                } else {
                    this.$thumbnail.html('');
                }

                //this._element.trigger('woo_variation_gallery_init', [this, images]);

                _.delay(function () {
                    _this9.imagesLoaded();
                }, 1);

                //this._element.trigger('after_woo_variation_gallery_init', [this, images]);
            }
        }, {
            key: 'imagesLoaded',
            value: function imagesLoaded() {
                var _this10 = this;

                this._element.imagesLoaded().progress(function (instance, image) {
                    _this10._element.trigger('woo_variation_gallery_image_loading', [_this10]);
                }).done(function (instance) {
                    _this10._element.trigger('woo_variation_gallery_image_loaded', [_this10]);
                });
            }
        }], [{
            key: '_jQueryInterface',
            value: function _jQueryInterface(config) {
                return this.each(function () {
                    new WooVariationGallery(this, config);
                });
            }
        }]);

        return WooVariationGallery;
    }();

    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn['WooVariationGallery'] = WooVariationGallery._jQueryInterface;
    $.fn['WooVariationGallery'].Constructor = WooVariationGallery;
    $.fn['WooVariationGallery'].noConflict = function () {
        $.fn['WooVariationGallery'] = $.fn['WooVariationGallery'];
        return WooVariationGallery._jQueryInterface;
    };

    return WooVariationGallery;
}(jQuery);

/* harmony default export */ __webpack_exports__["default"] = (WooVariationGallery);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2Zyb250ZW5kLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDNiNTM3NjAwMWQ1YzYxY2JmNmQ5Iiwid2VicGFjazovLy9zcmMvanMvZnJvbnRlbmQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9Xb29WYXJpYXRpb25HYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL3NsaWNrLnNjc3M/MmMzMyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9mcm9udGVuZC5zY3NzPzJjM2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvdGhlbWUtc3VwcG9ydC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2JhY2tlbmQuc2Nzcz9iZjUwIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2d3cC1hZG1pbi5zY3NzP2FmZjMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2I1Mzc2MDAxZDVjNjFjYmY2ZDkiLCJqUXVlcnkoJCA9PiB7XG4gICAgaW1wb3J0KCcuL1dvb1ZhcmlhdGlvbkdhbGxlcnknKS50aGVuKCgpID0+IHtcblxuICAgICAgICAkKCcud29vLXZhcmlhdGlvbi1nYWxsZXJ5LXdyYXBwZXInKS5Xb29WYXJpYXRpb25HYWxsZXJ5KCk7XG5cbiAgICAgICAgLy8gQWpheFxuICAgICAgICAkKGRvY3VtZW50KS5vbignd2NfdmFyaWF0aW9uX2Zvcm0nLCAnLnZhcmlhdGlvbnNfZm9ybScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgJCgnLndvby12YXJpYXRpb24tZ2FsbGVyeS13cmFwcGVyJykuV29vVmFyaWF0aW9uR2FsbGVyeSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdXBwb3J0IGZvciBKZXRwYWNrJ3MgSW5maW5pdGUgU2Nyb2xsLFxuICAgICAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdwb3N0LWxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vICAgICQoJy53b28tdmFyaWF0aW9uLWdhbGxlcnktd3JhcHBlcicpLldvb1ZhcmlhdGlvbkdhbGxlcnkoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcbn0pOyAgLy8gZW5kIG9mIGpxdWVyeSBtYWluIHdyYXBwZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvZnJvbnRlbmQuanMiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBXb29Db21tZXJjZSBWYXJpYXRpb24gR2FsbGVyeVxuLypnbG9iYWwgd2NfYWRkX3RvX2NhcnRfdmFyaWF0aW9uX3BhcmFtcywgd29vX3ZhcmlhdGlvbl9nYWxsZXJ5X29wdGlvbnMgKi9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgV29vVmFyaWF0aW9uR2FsbGVyeSA9ICgoJCkgPT4ge1xuXG4gICAgY29uc3QgRGVmYXVsdCA9IHt9O1xuXG4gICAgY2xhc3MgV29vVmFyaWF0aW9uR2FsbGVyeSB7XG5cbiAgICAgICAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG5cblxuICAgICAgICAgICAgLy8gQXNzaWduXG4gICAgICAgICAgICB0aGlzLl9lbCAgICAgID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5fY29uZmlnICA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBjb25maWcpO1xuXG4gICAgICAgICAgICB0aGlzLiRwcm9kdWN0ICAgICAgICAgICAgID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KCcucHJvZHVjdCcpO1xuICAgICAgICAgICAgdGhpcy4kdmFyaWF0aW9uc19mb3JtICAgICA9IHRoaXMuJHByb2R1Y3QuZmluZCgnLnZhcmlhdGlvbnNfZm9ybScpO1xuICAgICAgICAgICAgdGhpcy4kdGFyZ2V0ICAgICAgICAgICAgICA9IHRoaXMuX2VsZW1lbnQucGFyZW50KCk7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIgICAgICAgICAgICAgID0gJCgnLndvby12YXJpYXRpb24tZ2FsbGVyeS1zbGlkZXInLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuJHRodW1ibmFpbCAgICAgICAgICAgPSAkKCcud29vLXZhcmlhdGlvbi1nYWxsZXJ5LXRodW1ibmFpbC1zbGlkZXInLCB0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJuYWlsX2NvbHVtbnMgICAgPSB0aGlzLl9lbGVtZW50LmRhdGEoJ3RodW1ibmFpbF9jb2x1bW5zJyk7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RfaWQgICAgICAgICAgID0gdGhpcy4kdmFyaWF0aW9uc19mb3JtLmRhdGEoJ3Byb2R1Y3RfaWQnKTtcbiAgICAgICAgICAgIHRoaXMuaXNfdmFyaWF0aW9uX3Byb2R1Y3QgPSAodGhpcy4kdmFyaWF0aW9uc19mb3JtLmxlbmd0aCA+IDApO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsX2xvYWQgICAgICAgICA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIENhbGxcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdEdhbGxlcnkoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFZhcmlhdGlvbkltYWdlUHJlbG9hZCgpO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRFdmVudHMoKTtcblxuICAgICAgICAgICAgdGhpcy5pbml0U2xpY2soKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFpvb20oKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBob3Rvc3dpcGUoKTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzX3ZhcmlhdGlvbl9wcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXNMb2FkZWQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pbml0VmFyaWF0aW9uR2FsbGVyeSgpO1xuXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmRhdGEoJ3dvb192YXJpYXRpb25fZ2FsbGVyeScsIHRoaXMpO1xuICAgICAgICAgICAgJChkb2N1bWVudCkudHJpZ2dlcignd29vX3ZhcmlhdGlvbl9nYWxsZXJ5X2luaXQnLCBbdGhpc10pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIF9qUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBuZXcgV29vVmFyaWF0aW9uR2FsbGVyeSh0aGlzLCBjb25maWcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaW5pdCgpIHtcbiAgICAgICAgICAgIHJldHVybiBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRTbGljaygpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFpvb20oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRQaG90b3N3aXBlKCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGltZW5zaW9uKCkge1xuXG4gICAgICAgICAgICAvL3RoaXMuX2VsZW1lbnQuY3NzKCdtaW4taGVpZ2h0JywgJzBweCcpO1xuICAgICAgICAgICAgLy90aGlzLl9lbGVtZW50LmNzcygnbWluLXdpZHRoJywgJzBweCcpO1xuXG4gICAgICAgICAgICAvL3JldHVybiBfLmRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgIC8vdGhpcy5fZWxlbWVudC5jc3MoJ21pbi1oZWlnaHQnLCB0aGlzLiRzbGlkZXIuaGVpZ2h0KCkgKyAncHgnKTtcbiAgICAgICAgICAgIC8vdGhpcy5fZWxlbWVudC5jc3MoJ21pbi13aWR0aCcsIHRoaXMuJHNsaWRlci53aWR0aCgpICsgJ3B4Jyk7XG4gICAgICAgICAgICAvL30sIDQwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0RXZlbnRzKCkge1xuICAgICAgICAgICAgLy8gJCh3aW5kb3cpLm9uKCdyZXNpemUnLCB0aGlzLmRpbWVuc2lvbigpKTtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQub24oJ3dvb192YXJpYXRpb25fZ2FsbGVyeV9pbWFnZV9sb2FkZWQnLCB0aGlzLmluaXQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0U2xpY2soKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRzbGlkZXIuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kc2xpZGVyLm9mZignaW5pdCcpO1xuICAgICAgICAgICAgdGhpcy4kc2xpZGVyLm9mZignYmVmb3JlQ2hhbmdlJyk7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIub2ZmKCdhZnRlckNoYW5nZScpO1xuXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJ3dvb192YXJpYXRpb25fZ2FsbGVyeV9iZWZvcmVfaW5pdCcsIFt0aGlzXSk7XG5cbiAgICAgICAgICAgIC8vIFNsaWRlclxuXG4gICAgICAgICAgICB0aGlzLiRzbGlkZXJcbiAgICAgICAgICAgICAgICAub24oJ2luaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5pdGlhbF9sb2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxfbG9hZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fZWxlbWVudC5jc3MoJ21pbi1oZWlnaHQnLCB0aGlzLiRzbGlkZXIuaGVpZ2h0KCkgKyAncHgnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdiZWZvcmVDaGFuZ2UnLCAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiR0aHVtYm5haWwuZmluZCgnLnd2Zy1nYWxsZXJ5LXRodW1ibmFpbC1pbWFnZScpLm5vdCgnLnNsaWNrLXNsaWRlJykucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdGh1bWJuYWlsJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHRodW1ibmFpbC5maW5kKCcud3ZnLWdhbGxlcnktdGh1bWJuYWlsLWltYWdlJykubm90KCcuc2xpY2stc2xpZGUnKS5lcShuZXh0U2xpZGUpLmFkZENsYXNzKCdjdXJyZW50LXRodW1ibmFpbCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm9uKCdhZnRlckNoYW5nZScsIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BWaWRlbyh0aGlzLiRzbGlkZXIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRab29tRm9yVGFyZ2V0KGN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc2xpY2soKTtcblxuICAgICAgICAgICAgLy8gVGh1bWJuYWlsc1xuXG4gICAgICAgICAgICB0aGlzLiR0aHVtYm5haWwuZmluZCgnLnd2Zy1nYWxsZXJ5LXRodW1ibmFpbC1pbWFnZScpLm5vdCgnLnNsaWNrLXNsaWRlJykuZmlyc3QoKS5hZGRDbGFzcygnY3VycmVudC10aHVtYm5haWwnKTtcblxuICAgICAgICAgICAgdGhpcy4kdGh1bWJuYWlsLmZpbmQoJy53dmctZ2FsbGVyeS10aHVtYm5haWwtaW1hZ2UnKS5ub3QoJy5zbGljay1zbGlkZScpLmVhY2goKGluZGV4LCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICQoZWwpLmZpbmQoJ2RpdiwgaW1nJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpY2soJ3NsaWNrR29UbycsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLmRlbGF5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50LnRyaWdnZXIoJ3dvb192YXJpYXRpb25fZ2FsbGVyeV9zbGlkZXJfc2xpY2tfaW5pdCcsIFt0aGlzXSk7XG4gICAgICAgICAgICB9LCAxKTtcblxuICAgICAgICAgICAgXy5kZWxheSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVMb2FkaW5nQ2xhc3MoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbml0Wm9vbUZvclRhcmdldChjdXJyZW50U2xpZGUpIHtcblxuICAgICAgICAgICAgaWYgKCF3b29fdmFyaWF0aW9uX2dhbGxlcnlfb3B0aW9ucy5lbmFibGVfZ2FsbGVyeV96b29tKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZ2FsbGVyeVdpZHRoID0gdGhpcy4kdGFyZ2V0LndpZHRoKCksXG4gICAgICAgICAgICAgICAgem9vbUVuYWJsZWQgID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgem9vbVRhcmdldCAgID0gdGhpcy4kc2xpZGVyLnNsaWNrKCdnZXRTbGljaycpLiRzbGlkZXMuZXEoY3VycmVudFNsaWRlKTtcblxuICAgICAgICAgICAgJCh6b29tVGFyZ2V0KS5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGltYWdlID0gJCh0YXJnZXQpLmZpbmQoJ2ltZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlLmRhdGEoJ2xhcmdlX2ltYWdlX3dpZHRoJykgPiBnYWxsZXJ5V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgem9vbUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIElmIHpvb20gbm90IGluY2x1ZGVkLlxuICAgICAgICAgICAgaWYgKCEkKCkuem9vbSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQnV0IG9ubHkgem9vbSBpZiB0aGUgaW1nIGlzIGxhcmdlciB0aGFuIGl0cyBjb250YWluZXIuXG4gICAgICAgICAgICBpZiAoem9vbUVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgem9vbV9vcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgICAgICAgICAgICAgICB0b3VjaCA6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSwgd2Nfc2luZ2xlX3Byb2R1Y3RfcGFyYW1zLnpvb21fb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHpvb21fb3B0aW9ucy5vbiA9ICdjbGljayc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgem9vbVRhcmdldC50cmlnZ2VyKCd6b29tLmRlc3Ryb3knKTtcbiAgICAgICAgICAgICAgICB6b29tVGFyZ2V0Lnpvb20oem9vbV9vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRab29tKCkge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRTbGlkZSA9IHRoaXMuJHNsaWRlci5zbGljaygnc2xpY2tDdXJyZW50U2xpZGUnKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdFpvb21Gb3JUYXJnZXQoY3VycmVudFNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRQaG90b3N3aXBlKCkge1xuXG4gICAgICAgICAgICBpZiAoIXdvb192YXJpYXRpb25fZ2FsbGVyeV9vcHRpb25zLmVuYWJsZV9nYWxsZXJ5X2xpZ2h0Ym94KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm9mZignY2xpY2snLCAnLndvby12YXJpYXRpb24tZ2FsbGVyeS10cmlnZ2VyJyk7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm9mZignY2xpY2snLCAnLnd2Zy1nYWxsZXJ5LWltYWdlIGEnKTtcblxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5vbignY2xpY2snLCAnLndvby12YXJpYXRpb24tZ2FsbGVyeS10cmlnZ2VyJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuUGhvdG9zd2lwZShldmVudClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50Lm9uKCdjbGljaycsICcud3ZnLWdhbGxlcnktaW1hZ2UgYScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlblBob3Rvc3dpcGUoZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBvcGVuUGhvdG9zd2lwZShldmVudCkge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mKFBob3RvU3dpcGUpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHBzd3BFbGVtZW50ID0gJCgnLnBzd3AnKVswXSxcbiAgICAgICAgICAgICAgICBpdGVtcyAgICAgICA9IHRoaXMuZ2V0R2FsbGVyeUl0ZW1zKCk7XG5cbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gJC5leHRlbmQoe1xuICAgICAgICAgICAgICAgIGluZGV4IDogdGhpcy4kc2xpZGVyLnNsaWNrKCdzbGlja0N1cnJlbnRTbGlkZScpXG4gICAgICAgICAgICB9LCB3Y19zaW5nbGVfcHJvZHVjdF9wYXJhbXMucGhvdG9zd2lwZV9vcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gSW5pdGlhbGl6ZXMgYW5kIG9wZW5zIFBob3RvU3dpcGUuXG5cbiAgICAgICAgICAgIGxldCBwaG90b3N3aXBlID0gbmV3IFBob3RvU3dpcGUocHN3cEVsZW1lbnQsIFBob3RvU3dpcGVVSV9EZWZhdWx0LCBpdGVtcywgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIC8vIEdhbGxlcnkgc3RhcnRzIGNsb3NpbmdcbiAgICAgICAgICAgIHBob3Rvc3dpcGUubGlzdGVuKCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BWaWRlbyhwc3dwRWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcGhvdG9zd2lwZS5saXN0ZW4oJ2FmdGVyQ2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcFZpZGVvKHBzd3BFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwaG90b3N3aXBlLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0b3BWaWRlbyhlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmZpbmQoJ2lmcmFtZSwgdmlkZW8nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFnID0gJCh0aGlzKS5wcm9wKFwidGFnTmFtZVwiKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0YWcgPT09ICdpZnJhbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcmMgPSAkKHRoaXMpLmF0dHIoJ3NyYycpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsIHNyYyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpWzBdLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRMb2FkaW5nQ2xhc3MoKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFkZENsYXNzKCdsb2FkaW5nLWdhbGxlcnknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbW92ZUxvYWRpbmdDbGFzcygpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQ2xhc3MoJ2xvYWRpbmctZ2FsbGVyeScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0R2FsbGVyeUl0ZW1zKCkge1xuICAgICAgICAgICAgbGV0ICRzbGlkZXMgPSB0aGlzLiRzbGlkZXIuc2xpY2soJ2dldFNsaWNrJykuJHNsaWRlcyxcbiAgICAgICAgICAgICAgICBpdGVtcyAgID0gW107XG5cbiAgICAgICAgICAgIGlmICgkc2xpZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkc2xpZGVzLmVhY2goZnVuY3Rpb24gKGksIGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSAkKGVsKS5maW5kKCdpbWcsIGlmcmFtZSwgdmlkZW8nKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhZyA9ICQoaW1nKS5wcm9wKFwidGFnTmFtZVwiKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcmMsIGl0ZW07XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdpbWcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXJnZV9pbWFnZV9zcmMgPSBpbWcuYXR0cignZGF0YS1sYXJnZV9pbWFnZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXJnZV9pbWFnZV93ICAgPSBpbWcuYXR0cignZGF0YS1sYXJnZV9pbWFnZV93aWR0aCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXJnZV9pbWFnZV9oICAgPSBpbWcuYXR0cignZGF0YS1sYXJnZV9pbWFnZV9oZWlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtICAgICAgICAgICAgICAgID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmMgICA6IGxhcmdlX2ltYWdlX3NyYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdyAgICAgOiBsYXJnZV9pbWFnZV93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoICAgICA6IGxhcmdlX2ltYWdlX2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlIDogaW1nLmF0dHIoJ2RhdGEtY2FwdGlvbicpID8gaW1nLmF0dHIoJ2RhdGEtY2FwdGlvbicpIDogaW1nLmF0dHIoJ3RpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaWZyYW1lJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmMgID0gaW1nLmF0dHIoJ3NyYycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgOiBgPGlmcmFtZSBjbGFzcz1cInd2Zy1saWdodGJveC1pZnJhbWVcIiBzcmM9XCIke3NyY31cIiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IG1hcmdpbjogMDtwYWRkaW5nOiAwOyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwXCIgZnJhbWVib3JkZXI9XCIwXCIgd2Via2l0QWxsb3dGdWxsU2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmMgID0gaW1nLmF0dHIoJ3NyYycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgOiBgPHZpZGVvIGNsYXNzPVwid3ZnLWxpZ2h0Ym94LXZpZGVvXCIgY29udHJvbHMgY29udHJvbHNMaXN0PVwibm9kb3dubG9hZFwiIHNyYz1cIiR7c3JjfVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgbWFyZ2luOiAwO3BhZGRpbmc6IDA7IGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBcIj48L3ZpZGVvPmBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVzdHJveVNsaWNrKCkge1xuXG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuaHRtbCgnJyk7XG4gICAgICAgICAgICB0aGlzLiR0aHVtYm5haWwuaHRtbCgnJyk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRzbGlkZXIuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKCd3b29fdmFyaWF0aW9uX2dhbGxlcnlfc2xpY2tfZGVzdHJveScsIFt0aGlzXSk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWZhdWx0R2FsbGVyeSgpIHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNfdmFyaWF0aW9uX3Byb2R1Y3QpIHtcbiAgICAgICAgICAgICAgICB3cC5hamF4LnNlbmQoJ3d2Z19nZXRfZGVmYXVsdF9nYWxsZXJ5Jywge1xuICAgICAgICAgICAgICAgICAgICBkYXRhICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZCA6IHRoaXMucHJvZHVjdF9pZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIDogKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuZGF0YSgnd29vX3ZhcmlhdGlvbl9nYWxsZXJ5X2RlZmF1bHQnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcignd29vX3ZhcmlhdGlvbl9kZWZhdWx0X2dhbGxlcnlfbG9hZGVkJywgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yICAgOiAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5kYXRhKCd3b29fdmFyaWF0aW9uX2dhbGxlcnlfZGVmYXVsdCcsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcignd29vX3ZhcmlhdGlvbl9kZWZhdWx0X2dhbGxlcnlfbG9hZGVkJywgdGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBWYXJpYXRpb24gR2FsbGVyeSBub3QgYXZhaWxhYmxlIG9uIHZhcmlhdGlvbiBpZCAke3RoaXMucHJvZHVjdF9pZH0uYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRWYXJpYXRpb25JbWFnZVByZWxvYWQoKSB7XG4gICAgICAgICAgICAvL3JldHVybjtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzX3ZhcmlhdGlvbl9wcm9kdWN0KSB7XG4gICAgICAgICAgICAgICAgd3AuYWpheC5zZW5kKCd3dmdfZ2V0X2F2YWlsYWJsZV92YXJpYXRpb25faW1hZ2VzJywge1xuICAgICAgICAgICAgICAgICAgICBkYXRhICAgIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZCA6IHRoaXMucHJvZHVjdF9pZFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIDogKGltYWdlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VQcmVsb2FkKGltYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50LmRhdGEoJ3dvb192YXJpYXRpb25fZ2FsbGVyeV92YXJpYXRpb25faW1hZ2VzJywgaW1hZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgICA6IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50LmRhdGEoJ3dvb192YXJpYXRpb25fZ2FsbGVyeV92YXJpYXRpb25faW1hZ2VzJywgW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVmFyaWF0aW9uIEdhbGxlcnkgdmFyaWF0aW9ucyBpbWFnZXMgbm90IGF2YWlsYWJsZSBvbiB2YXJpYXRpb24gaWQgJHt0aGlzLnByb2R1Y3RfaWR9LmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZVByZWxvYWQoaW1hZ2VzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogdGhpcyB3b24ndCB3b3JrIHdoZW4gY2hyb21lIGRldnRvb2wgaXMgb3BlbiBhbmQgJ2Rpc2FibGUgY2FjaGUnIGlzIGVuYWJsZWQgd2l0aGluIHRoZSBuZXR3b3JrIHBhbmVsXG4gICAgICAgICAgICAgICAgICAgIGxldCBfaW1nICAgICAgID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBfZ2FsbGVyeSAgID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBfZnVsbCAgICAgID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGh1bWJuYWlsID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgX2ltZy5zcmMgICAgPSBpbWFnZXNbaV0uc3JjO1xuICAgICAgICAgICAgICAgICAgICBfaW1nLnNyY3NldCA9IGltYWdlc1tpXS5zcmNzZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgX2dhbGxlcnkuc3JjID0gaW1hZ2VzW2ldLmdhbGxlcnlfdGh1bWJuYWlsX3NyYztcblxuICAgICAgICAgICAgICAgICAgICBfZnVsbC5zcmMgPSBpbWFnZXNbaV0uZnVsbF9zcmM7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RodW1ibmFpbC5zcmMgPSBpbWFnZXNbaV0udGh1bWJfc3JjO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIC8qbGV0IF9pbWdfc3JjICAgID0gaW1hZ2VzW2ldLnNyYztcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9pbWdfc3Jjc2V0ID0gaW1hZ2VzW2ldLnNyY3NldDtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgX2dhbGxlcnlfc3JjICAgPSBpbWFnZXNbaV0uZ2FsbGVyeV90aHVtYm5haWxfc3JjO1xuICAgICAgICAgICAgICAgICAgICBsZXQgX2Z1bGxfc3JjICAgICAgPSBpbWFnZXNbaV0uZnVsbF9zcmM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBfdGh1bWJuYWlsX3NyYyA9IGltYWdlc1tpXS50aHVtYl9zcmM7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlID0gYDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiBzcmM9XCIke19pbWdfc3JjfVwiIHNyY3NldD1cIiR7X2ltZ19zcmNzZXR9XCIgLz48aW1nIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIHNyYz1cIiR7X2dhbGxlcnlfc3JjfVwiIC8+PGltZyBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiBzcmM9XCIke190aHVtYm5haWxfc3JjfVwiIC8+PGltZyBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiBzcmM9XCIke19mdWxsX3NyY31cIiAvPjwvZGl2PmA7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQodGVtcGxhdGUpKi9cblxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpbml0VmFyaWF0aW9uR2FsbGVyeSgpIHtcblxuICAgICAgICAgICAgLy8gc2hvd192YXJpYXRpb24sIGZvdW5kX3ZhcmlhdGlvblxuXG4gICAgICAgICAgICB0aGlzLiR2YXJpYXRpb25zX2Zvcm0ub24oJ3Nob3dfdmFyaWF0aW9uJywgKGV2ZW50LCB2YXJpYXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZExvYWRpbmdDbGFzcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FsbGVyeUluaXQodmFyaWF0aW9uLnZhcmlhdGlvbl9nYWxsZXJ5X2ltYWdlcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHdvb192YXJpYXRpb25fZ2FsbGVyeV9vcHRpb25zLmdhbGxlcnlfcmVzZXRfb25fdmFyaWF0aW9uX2NoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHZhcmlhdGlvbnNfZm9ybS5vbigncmVzZXRfaW1hZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRMb2FkaW5nQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYWxsZXJ5UmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJHZhcmlhdGlvbnNfZm9ybS5vbignY2xpY2sud2MtdmFyaWF0aW9uLWZvcm0nLCAnLnJlc2V0X3ZhcmlhdGlvbnMnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRMb2FkaW5nQ2xhc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYWxsZXJ5UmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdhbGxlcnlSZXNldCgpIHtcbiAgICAgICAgICAgIGxldCAkZGVmYXVsdF9nYWxsZXJ5ID0gdGhpcy5fZWxlbWVudC5kYXRhKCd3b29fdmFyaWF0aW9uX2dhbGxlcnlfZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBpZiAoJGRlZmF1bHRfZ2FsbGVyeSAmJiAkZGVmYXVsdF9nYWxsZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbGxlcnlJbml0KCRkZWZhdWx0X2dhbGxlcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5kZWxheSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlTG9hZGluZ0NsYXNzKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2FsbGVyeUluaXQoaW1hZ2VzKSB7XG5cbiAgICAgICAgICAgIGxldCBoYXNHYWxsZXJ5ID0gaW1hZ2VzLmxlbmd0aCA+IDE7XG5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQudHJpZ2dlcignYmVmb3JlX3dvb192YXJpYXRpb25fZ2FsbGVyeV9pbml0JywgW3RoaXMsIGltYWdlc10pO1xuXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lTbGljaygpO1xuXG4gICAgICAgICAgICBsZXQgc2xpZGVyX2lubmVyX2h0bWwgPSBpbWFnZXMubWFwKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHdwLnRlbXBsYXRlKCd3b28tdmFyaWF0aW9uLWdhbGxlcnktc2xpZGVyLXRlbXBsYXRlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlKGltYWdlKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICAgICAgICBsZXQgdGh1bWJuYWlsX2lubmVyX2h0bWwgPSBpbWFnZXMubWFwKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wbGF0ZSA9IHdwLnRlbXBsYXRlKCd3b28tdmFyaWF0aW9uLWdhbGxlcnktdGh1bWJuYWlsLXRlbXBsYXRlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlKGltYWdlKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICAgICAgICBpZiAoaGFzR2FsbGVyeSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHRhcmdldC5hZGRDbGFzcygnd29vLXZhcmlhdGlvbi1nYWxsZXJ5LWhhcy1wcm9kdWN0LXRodW1ibmFpbCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kdGFyZ2V0LnJlbW92ZUNsYXNzKCd3b28tdmFyaWF0aW9uLWdhbGxlcnktaGFzLXByb2R1Y3QtdGh1bWJuYWlsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJHNsaWRlci5odG1sKHNsaWRlcl9pbm5lcl9odG1sKTtcblxuICAgICAgICAgICAgaWYgKGhhc0dhbGxlcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiR0aHVtYm5haWwuaHRtbCh0aHVtYm5haWxfaW5uZXJfaHRtbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiR0aHVtYm5haWwuaHRtbCgnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vdGhpcy5fZWxlbWVudC50cmlnZ2VyKCd3b29fdmFyaWF0aW9uX2dhbGxlcnlfaW5pdCcsIFt0aGlzLCBpbWFnZXNdKTtcblxuICAgICAgICAgICAgXy5kZWxheSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXNMb2FkZWQoKTtcbiAgICAgICAgICAgIH0sIDEpO1xuXG4gICAgICAgICAgICAvL3RoaXMuX2VsZW1lbnQudHJpZ2dlcignYWZ0ZXJfd29vX3ZhcmlhdGlvbl9nYWxsZXJ5X2luaXQnLCBbdGhpcywgaW1hZ2VzXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZXNMb2FkZWQoKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmltYWdlc0xvYWRlZCgpXG4gICAgICAgICAgICAgICAgLnByb2dyZXNzKChpbnN0YW5jZSwgaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKCd3b29fdmFyaWF0aW9uX2dhbGxlcnlfaW1hZ2VfbG9hZGluZycsIFt0aGlzXSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZG9uZSgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC50cmlnZ2VyKCd3b29fdmFyaWF0aW9uX2dhbGxlcnlfaW1hZ2VfbG9hZGVkJywgW3RoaXNdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqIGpRdWVyeVxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAqL1xuXG4gICAgJC5mblsnV29vVmFyaWF0aW9uR2FsbGVyeSddID0gV29vVmFyaWF0aW9uR2FsbGVyeS5falF1ZXJ5SW50ZXJmYWNlO1xuICAgICQuZm5bJ1dvb1ZhcmlhdGlvbkdhbGxlcnknXS5Db25zdHJ1Y3RvciA9IFdvb1ZhcmlhdGlvbkdhbGxlcnk7XG4gICAgJC5mblsnV29vVmFyaWF0aW9uR2FsbGVyeSddLm5vQ29uZmxpY3QgID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkLmZuWydXb29WYXJpYXRpb25HYWxsZXJ5J10gPSAkLmZuWydXb29WYXJpYXRpb25HYWxsZXJ5J107XG4gICAgICAgIHJldHVybiBXb29WYXJpYXRpb25HYWxsZXJ5Ll9qUXVlcnlJbnRlcmZhY2VcbiAgICB9O1xuXG4gICAgcmV0dXJuIFdvb1ZhcmlhdGlvbkdhbGxlcnk7XG5cbn0pKGpRdWVyeSk7XG5cbmV4cG9ydCBkZWZhdWx0IFdvb1ZhcmlhdGlvbkdhbGxlcnlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL1dvb1ZhcmlhdGlvbkdhbGxlcnkuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3Mvc2xpY2suc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvZnJvbnRlbmQuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Njc3MvdGhlbWUtc3VwcG9ydC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Nzcy9iYWNrZW5kLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zY3NzL2d3cC1hZG1pbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNDQTtBQUFBO0FBQUE7QUFrREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhEQTtBQUFBO0FBQUE7QUFDQTtBQTJEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkVBO0FBQUE7QUFBQTtBQXNFQTtBQUNBO0FBQ0E7QUF4RUE7QUFBQTtBQUFBO0FBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1SEE7QUFBQTtBQUFBO0FBQ0E7QUErSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbktBO0FBQUE7QUFBQTtBQXNLQTtBQUNBO0FBQ0E7QUF4S0E7QUFBQTtBQUFBO0FBMEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExTEE7QUFBQTtBQUFBO0FBNExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpOQTtBQUFBO0FBQUE7QUE0TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdk9BO0FBQUE7QUFBQTtBQTBPQTtBQUNBO0FBM09BO0FBQUE7QUFBQTtBQThPQTtBQUNBO0FBL09BO0FBQUE7QUFBQTtBQWtQQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQXZCQTtBQUNBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6UkE7QUFBQTtBQUFBO0FBQ0E7QUE0UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBclNBO0FBQUE7QUFBQTtBQXVTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQXpUQTtBQUFBO0FBQUE7QUEyVEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBO0FBL1VBO0FBQUE7QUFBQTtBQWtWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5YQTtBQUFBO0FBQUE7QUFxWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMVlBO0FBQUE7QUFBQTtBQTRZQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2WkE7QUFBQTtBQUFBO0FBeVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbGNBO0FBQUE7QUFBQTtBQW9jQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBNWNBO0FBQUE7QUFBQTtBQTZDQTtBQUNBO0FBQ0E7QUFDQTtBQWhEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBOGNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUNyZUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==