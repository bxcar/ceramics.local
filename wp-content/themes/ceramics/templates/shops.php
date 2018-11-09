<?php
/**
 * Template Name: shops
 */
get_header(); ?>
  
  <div class="page">
    <div class="content">
              <h1 class="page-title"><?php the_title(); ?></h1>
            <div class="page-content">

  <div class="tiles tiles-shops">
      <?php if (get_field('shops')) {
          foreach (get_field('shops') as $item) { ?>
              <div class="item">
                  <div class="media">
                      <a target="<?= $item['link']['target'] ?>" href="<?= $item['link']['url'] ?>" class="image" style="background-image: url(<?= $item['img'] ?>)">&nbsp;</a>
                  </div>
                  <div class="props shop-info">
                      <div class="title"><a target="<?= $item['link']['target'] ?>" href="<?= $item['link']['url'] ?>"><?= $item['title'] ?></a></div>
                      <div class="subtitle"><?= $item['time'] ?></div>
                      <div class="actions">
                          <a href="javascript:void(0);" data-map-trigger="<?= $item['coords'] ?>">На карте</a>
                      </div>
                      <div class="contacts">
                          <div><a href="mailto:stroysklad1@mail.ru"><?= $item['email'] ?></a></div>
                          <div><a href="tel:+74950231515"><?= $item['phone'] ?></a></div>
                      </div>
                  </div>
              </div>
          <?php }
      } ?>
  </div>

  <section id="map">
    <h2>На карте</h2>

    <script type="text/javascript">
      window.mapPoints = [{"id":11,"address":"\u041e\u043f\u0442\u043e\u0432\u044b\u0435 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \/ \u041e\u0444\u0438\u0441","point":"55.68027056864813,37.5152146865075","working_time":"\u0421 9.00 - 18.00 \u041f\u041d-\u041f\u0422","phone":"+7 (495) 023-15-15","email":"stroysklad1@mail.ru","url":"\/shops\/11"},{"id":12,"address":"\u0420\u043e\u0437\u043d\u0438\u0447\u043d\u044b\u0435 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \/ \u0422\u041a \u00ab\u041a\u0430\u0448\u0438\u0440\u0441\u043a\u0438\u0439 \u0434\u0432\u043e\u0440\u00bb","point":"55.66480405392872,37.632054517196615","working_time":"10.00 - 20.00 \u0415\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u043e","phone":"+7 (916) 630-38-07","email":"kd@urbanyst.ru","url":"\/shops\/12"}];
    </script>

    <div class="map-content">
      <div class="map" data-map="window.mapPoints">
        <div class="static-map-overlay">
          <span class="btn btn-filled-white btn-large">Открыть карту</span>
        </div>
      </div>
    </div>
  </section>

</div>
    </div>
  </div>
<?php get_footer(); ?>