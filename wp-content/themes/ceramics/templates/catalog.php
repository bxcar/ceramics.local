<?php
/**
 * Template Name: catalog
 */
get_header(); ?>
  
  <div class="page">
    <div class="content">
              <h1 class="page-title">Каталог</h1>
            <div class="page-content">

  <!--<div class="subnav subnav-tabs">
    <a class="item active" href="catalog.html">Все типы плитки</a>
          <a class="item" href="catalogdcf7.html?type=5">Коллекции</a>
          <a class="item" href="catalog10b0.html?type=1">керамогранит</a>
          <a class="item" href="catalog3de9.html?type=6">керамогранит 60х120</a>
          <a class="item" href="catalog0dab.html?type=2">мозаика</a>
          <a class="item" href="catalog728f.html?type=4">Мелкоформатная плитка</a>
      </div>-->

  <div class="tiles tiles-catalog">
      <?php
      $args = array(
          'post_type' => 'product',
          'product_cat' => 'catalog',
      );
      $query = new WP_Query($args);

      if ($query->have_posts()) {
          while ($query->have_posts()) {
              $query->the_post(); ?>
              <a href="<?php the_permalink(); ?>" class="item">
                  <div class="media">
                      <div class="image" style="background-image: url(<?php the_post_thumbnail_url(); ?>)"></div>
                      <div class="badges">
                          <?php if(get_field('promo') == 'yes') { ?>
                              <span class="badge-discount">Акция!</span>
                          <?php }?>
                                               </div>
                  </div>
                  <div class="props">
                      <div class="title"><?php the_title(); ?></div>
                      <div class="info">от <?php the_field('price_acf')?> &#x20CF; за м<sup>2</sup></div>
                  </div>
              </a>
          <?php }
      }
      wp_reset_postdata();
      ?>
    </div>

</div>
    </div>
  </div>
  <?php get_footer(); ?>