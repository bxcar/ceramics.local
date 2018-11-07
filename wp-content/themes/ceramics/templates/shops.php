<?php
/**
 * Template Name: shops
 */
get_header(); ?>
  
  <div class="page">
    <div class="content">
              <h1 class="page-title">Адреса магазинов</h1>
            <div class="page-content">

  <div class="tiles tiles-shops">
  <!--
     --><div class="item">
      <div class="media">
        <a href="shops/11.html" class="image" style="background-image: url(<?= get_template_directory_uri(); ?>/_/files/shops/dexpo_sait122-a187170e7daac8f641075a44c0074b56-9189276eb77de547af155f332c5f9f58-thumb-328x160-crop.png)">&nbsp;</a>
      </div>
      <div class="props shop-info">
        <div class="title"><a href="shops/11.html">Оптовые продажи / Офис</a></div>
        <div class="subtitle">С 9.00 - 18.00 ПН-ПТ</div>
        <div class="actions">
          <a href="javascript:void(0);" data-map-trigger="55.68027056864813,37.5152146865075">На карте</a>
        </div>
        <div class="contacts">
          <div><a href="mailto:stroysklad1@mail.ru">stroysklad1@mail.ru</a></div>
          <div><a href="tel:+74950231515">+7 (495) 023-15-15</a></div>
        </div>
      </div>
    </div><!--
--><!--
     --><div class="item">
      <div class="media">
        <a href="shops/12.html" class="image" style="background-image: url(<?= get_template_directory_uri(); ?>/_/files/shops/magazin_kashirskiy_dvor-91775741f04ee37bf2f479d421fcf44e-fb605a48fb7af6e656d7ef23422767b5-thumb-328x160-crop.jpeg)">&nbsp;</a>
      </div>
      <div class="props shop-info">
        <div class="title"><a href="shops/12.html">Розничные продажи / ТК «Каширский двор»</a></div>
        <div class="subtitle">10.00 - 20.00 Ежедневно</div>
        <div class="actions">
          <a href="javascript:void(0);" data-map-trigger="55.66480405392872,37.632054517196615">На карте</a>
        </div>
        <div class="contacts">
          <div><a href="mailto:kd@urbanyst.ru">kd@urbanyst.ru</a></div>
          <div><a href="tel:+79166303807">+7 (916) 630-38-07</a></div>
        </div>
      </div>
    </div><!--
-->  </div>

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