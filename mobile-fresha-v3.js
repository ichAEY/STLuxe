(function () {
  'use strict';

  if (!window.matchMedia || !window.matchMedia('(max-width: 767px)').matches) return;

  var YANDEX = 'https://yandex.ru/navi/org/stluxe/51087098664?si=4x8mkunbkhugdwe7bkyfw55fh0';
  var PHONE = '+79163552222';

  var photos = [
    {src:'assets/images/salon-reception.webp', cat:'interior', alt:'Интерьер STLuxe'},
    {src:'assets/images/salon-nail-zone.webp', cat:'interior', alt:'Рабочая зона STLuxe'},
    {src:'assets/images/nails-pink.webp', cat:'nails', alt:'Маникюр STLuxe'},
    {src:'assets/images/nails-green.webp', cat:'nails', alt:'Дизайн ногтей STLuxe'},
    {src:'assets/images/nails-light.webp', cat:'nails', alt:'Маникюр STLuxe'},
    {src:'assets/images/hair-style.webp', cat:'hair', alt:'Работа с волосами STLuxe'}
  ];

  var services = [
    ['nails','Маникюр с покрытием гель-лака OPI, Luxio, EMI','1 700 ₽'],
    ['nails','Женский педикюр — аппаратный, обрезной или комбинированный','2 000 ₽'],
    ['nails','Экспресс-педикюр — аппаратный, обрезной или комбинированный','1 500 ₽'],
    ['nails','Наращивание ногтей гелем + цветное верхнее покрытие','3 000 ₽'],
    ['hair','Стрижка и укладка — короткие волосы до 12 см','800 ₽'],
    ['hair','Утюжок — доплата при укладке, короткие волосы','300 ₽'],
    ['hair','Диффузор — доплата при укладке, короткие волосы','150 ₽'],
    ['hair','Вечерняя причёска — короткие волосы до 12 см','1 500 ₽'],
    ['hair','Вечерняя причёска — средние волосы до 30 см','1 500 ₽'],
    ['hair','Вечерняя причёска — длинные волосы от 31 см','1 500 ₽'],
    ['hair','Биохимическая завивка Selective — короткие волосы','2 000 ₽'],
    ['hair','Биохимическая завивка Selective — средние волосы','2 400 ₽'],
    ['hair','Биохимическая завивка Selective — длинные волосы','2 900 ₽'],
    ['hair','Колорирование / шатуш / балаяж Londa / Barex — короткие волосы','3 400 ₽'],
    ['hair','Колорирование / шатуш / балаяж Londa / Barex — средние волосы','3 800 ₽'],
    ['hair','Колорирование / шатуш / балаяж Londa / Barex — длинные волосы','4 500 ₽'],
    ['hair','Частичное мелирование до 10 прядей при окрашивании — короткие волосы','700 ₽'],
    ['hair','Частичное мелирование до 10 прядей при окрашивании — длинные волосы','1 500 ₽'],
    ['hair','Мелирование на фольге и тонирование Londa / Barex — длинные волосы','3 900 ₽'],
    ['face','Чистка лица','Цена по записи'],
    ['face','Аппаратная чистка лица','Цена по записи'],
    ['face','Гальваническая чистка лица','Цена по записи'],
    ['face','Пилинг лица','Цена по записи'],
    ['face','Химический пилинг лица','Цена по записи'],
    ['face','Гликолевый пилинг','Цена по записи'],
    ['face','Салициловый пилинг','Цена по записи'],
    ['brows','Коррекция и окрашивание бровей','Цена по записи'],
    ['lashes','Окрашивание ресниц','Цена по записи'],
    ['lashes','Наращивание ресниц','Цена по записи'],
    ['lashes','Голливудское наращивание ресниц','Цена по записи'],
    ['other','Перманентный макияж','Цена по записи'],
    ['depilation','Шугаринг','Цена по записи'],
    ['depilation','Восковая депиляция','Цена по записи'],
    ['depilation','Эпиляция','Цена по записи']
  ];

  var reviews = [
    ['мария н.','Атмосфера в салоне благоприятная, красиво, стильно, уютно… Татьяна — мастер своего дела.'],
    ['Ольга К.','Отличная атмосфера, всё чисто, стерильно, приветливый персонал, всегда предлагают чай или кофе.'],
    ['Елизавета С.','Отличное обслуживание, все мастера вежливые и отлично выполняют бьюти-услуги! Салон чистый, стильный!'],
    ['Мама Рита','Прекрасный косметолог Мария. Умеет всё. Препараты качественные, новейшие. Очень советую мастера.']
  ];

  function svg(name) {
    var p = {
      arrow:'<path d="M15 18l-6-6 6-6"/><path d="M9 12h10"/>',
      share:'<path d="M12 3v12"/><path d="M8 7l4-4 4 4"/><path d="M5 11v8h14v-8"/>',
      heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
      pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
      clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      chevron:'<path d="M9 18l6-6-6-6"/>',
      phone:'<path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.9z"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (p[name] || '') + '</svg>';
  }

  var style = document.createElement('style');
  style.id = 'stluxe-fresha-v3-style';
  style.textContent = '\
  @media (max-width:767px){\
    html,body{margin:0!important;padding:0!important;background:#fff!important;color:#111!important;overflow-x:hidden!important;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Helvetica Neue",Arial,sans-serif!important;-webkit-font-smoothing:antialiased!important}\
    body>*:not(#stluxe-fresha-v3):not(script):not(style){display:none!important}\
    #stluxe-fresha-v3{display:block!important;width:100%;background:#fff;color:#111}\
    #stluxe-fresha-v3 *{box-sizing:border-box}\
    #stluxe-fresha-v3 button,#stluxe-fresha-v3 a{font:inherit;color:inherit}\
    #stluxe-fresha-v3 svg{display:block;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}\
    .fv-page{background:#fff;padding-bottom:100px}\
    .fv-top{height:50px;padding:0 18px;display:flex;align-items:center;justify-content:space-between;background:#fff}\
    .fv-brand{font-size:19px;font-weight:600;letter-spacing:-.035em;text-decoration:none}\
    .fv-yandex{display:flex;align-items:center;gap:4px;font-size:12px;color:#555;text-decoration:none;border-bottom:1px solid #777;padding-bottom:2px}\
    .fv-yandex svg{width:12px;height:12px}\
    .fv-media{position:relative;width:100vw;height:64vw;min-height:250px;max-height:340px;background:#eee;overflow:hidden}\
    .fv-track{height:100%;display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}\
    .fv-track::-webkit-scrollbar{display:none}\
    .fv-slide{min-width:100%;height:100%;border:0;padding:0;background:#eee;scroll-snap-align:start}\
    .fv-slide img{width:100%;height:100%;object-fit:cover;display:block}\
    .fv-media-actions{position:absolute;left:16px;right:16px;top:16px;display:flex;justify-content:space-between;pointer-events:none}\
    .fv-media-right{display:flex;gap:9px}\
    .fv-round{pointer-events:auto;width:42px;height:42px;border:1px solid rgba(0,0,0,.08);border-radius:50%;background:rgba(255,255,255,.94);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);display:grid;place-items:center;box-shadow:0 2px 9px rgba(0,0,0,.06)}\
    .fv-round svg{width:20px;height:20px}\
    .fv-counter{position:absolute;right:16px;bottom:24px;min-width:44px;height:31px;padding:0 11px;border-radius:999px;background:rgba(20,20,20,.74);color:#fff;display:grid;place-items:center;font-size:12px;font-weight:600}\
    .fv-hero{position:relative;z-index:3;margin-top:-20px;background:#fff;border-radius:28px 28px 0 0;padding:29px 24px 27px}\
    .fv-title{margin:0 0 7px;font-size:31px;line-height:1.04;letter-spacing:-.045em;font-weight:650}\
    .fv-type{margin:0 0 21px;font-size:15px;color:#777;line-height:1.3}\
    .fv-rating{display:flex;align-items:center;gap:7px;font-size:17px;margin-bottom:23px}\
    .fv-star{color:#f5b500;font-size:22px;line-height:1}\
    .fv-rating strong{font-weight:650}.fv-rating span{color:#777}\
    .fv-hours{display:flex;align-items:center;gap:9px;font-size:15px;line-height:1.4;margin-bottom:22px;color:#777}\
    .fv-hours svg{width:19px;height:19px;flex:0 0 auto}\
    .fv-state{font-weight:500}.fv-state.open{color:#17853d}.fv-state.closed{color:#a96520}\
    .fv-address{display:flex;align-items:center;gap:12px;background:#f4f4f4;border-radius:17px;padding:16px 16px;text-decoration:none;color:#111;font-size:14px;line-height:1.42}\
    .fv-address svg{width:21px;height:21px;flex:0 0 auto;stroke-width:2}\
    .fv-section{padding:31px 24px;border-top:1px solid #efefef}\
    .fv-section h2{margin:0 0 16px;font-size:24px;line-height:1.12;letter-spacing:-.035em;font-weight:650}\
    .fv-copy{margin:0;font-size:15px;line-height:1.58;color:#444}\
    .fv-copy+.fv-copy{margin-top:11px}\
    .fv-head{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;margin-bottom:16px}\
    .fv-head h2{margin:0}\
    .fv-link{border:0;background:none;padding:0 0 2px;border-bottom:1px solid #111;font-size:12px;white-space:nowrap}\
    .fv-filters{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin:0 -24px 15px;padding:0 24px}\
    .fv-filters::-webkit-scrollbar{display:none}\
    .fv-filter{border:1px solid #ddd;background:#fff;border-radius:999px;padding:8px 13px;font-size:12px;white-space:nowrap;color:#666}\
    .fv-filter.active{background:#111;color:#fff;border-color:#111}\
    .fv-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}\
    .fv-photo{border:0;padding:0;background:#eee;border-radius:14px;overflow:hidden;aspect-ratio:1/1.12}\
    .fv-photo img{width:100%;height:100%;object-fit:cover;display:block}\
    .fv-photo[hidden]{display:none}\
    .fv-services{display:grid;gap:9px}\
    .fv-service{border:1px solid #e7e7e7;border-radius:17px;padding:15px 15px 14px;background:#fff}\
    .fv-service-name{font-size:14px;line-height:1.42;font-weight:500}\
    .fv-service-bottom{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;margin-top:14px}\
    .fv-price{font-size:13px;color:#555}\
    .fv-reserve{border:1px solid #111;background:#fff;border-radius:999px;height:35px;padding:0 13px;font-size:12px;font-weight:600}\
    .fv-more{width:100%;height:43px;margin-top:11px;border:1px solid #d8d8d8;border-radius:999px;background:#fff;font-size:13px}\
    .fv-team{display:flex;gap:11px;overflow-x:auto;scrollbar-width:none;margin:0 -24px;padding:0 24px 3px}\
    .fv-team::-webkit-scrollbar{display:none}\
    .fv-person{min-width:145px;width:145px;border:0;background:none;padding:0;text-align:left}\
    .fv-person-pic{height:176px;border-radius:15px;background:#f0f0f0;position:relative;overflow:hidden;display:grid;place-items:center}\
    .fv-person-pic svg{width:68px;height:68px;fill:#c8c8c8;stroke:none}\
    .fv-badge{position:absolute;left:8px;top:8px;background:rgba(255,255,255,.94);border-radius:999px;padding:5px 8px;font-size:9px;color:#555}\
    .fv-person-name{display:block;font-size:13px;font-weight:600;margin-top:8px}\
    .fv-person-role{display:block;font-size:11px;color:#777;margin-top:3px;line-height:1.35}\
    .fv-reviews{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;margin:0 -24px;padding:0 24px 4px}\
    .fv-reviews::-webkit-scrollbar{display:none}\
    .fv-review{min-width:88%;scroll-snap-align:start;border:1px solid #e6e6e6;border-radius:17px;padding:16px}\
    .fv-review-top{display:flex;justify-content:space-between;gap:10px;margin-bottom:10px;font-size:12px}\
    .fv-review-stars{letter-spacing:1px}\
    .fv-review p{margin:0;font-size:14px;line-height:1.55;color:#444}\
    .fv-visit{border-top:1px solid #eee}\
    .fv-visit-row{display:flex;align-items:flex-start;gap:12px;padding:16px 0;border-bottom:1px solid #eee}\
    .fv-visit-row svg{width:20px;height:20px;flex:0 0 auto}\
    .fv-visit-row strong{display:block;font-size:13px;font-weight:600;margin-bottom:3px}\
    .fv-visit-row span{display:block;font-size:13px;color:#666;line-height:1.45}\
    .fv-visit-actions{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:16px}\
    .fv-action{height:44px;border-radius:999px;border:1px solid #d9d9d9;background:#fff;display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:13px}\
    .fv-action.black{background:#111;color:#fff!important;border-color:#111}\
    .fv-footer{padding:24px 24px 120px;text-align:center;font-size:11px;color:#999}\
    .fv-footer strong{display:block;color:#222;font-size:13px;margin-bottom:4px}\
    .fv-bookbar{position:fixed;left:0;right:0;bottom:0;z-index:60;min-height:82px;padding:11px 18px calc(11px + env(safe-area-inset-bottom));background:rgba(255,255,255,.98);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);border-top:1px solid #e8e8e8;display:flex;align-items:center;justify-content:space-between;gap:14px;transition:transform .22s ease}\
    .fv-bookbar.hidden{transform:translateY(120%)}\
    .fv-book-copy{font-size:15px;color:#888;white-space:nowrap}\
    .fv-book-button{height:50px;border:0;border-radius:999px;background:#111;color:#fff!important;padding:0 23px;font-size:15px;font-weight:650;white-space:nowrap}\
    .fv-modal{position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.45);display:none;align-items:flex-end;padding:10px}\
    .fv-modal.open{display:flex}\
    .fv-sheet{width:100%;background:#fff;border-radius:24px;padding:20px}\
    .fv-sheet-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}\
    .fv-sheet h3{margin:0;font-size:21px}.fv-sheet p{font-size:13px;line-height:1.5;color:#666}\
    .fv-close{width:36px;height:36px;border-radius:50%;border:1px solid #ddd;background:#fff;font-size:21px}\
    .fv-sheet-actions{display:grid;gap:9px;margin-top:16px}\
    .fv-sheet-actions a{height:46px;border-radius:999px;display:flex;align-items:center;justify-content:center;text-decoration:none;border:1px solid #ddd;font-size:13px}\
    .fv-sheet-actions a.black{background:#111;color:#fff!important;border-color:#111}\
    .fv-gallery{position:fixed;inset:0;z-index:110;background:#050505;display:none;flex-direction:column}\
    .fv-gallery.open{display:flex}\
    .fv-gallery-top{height:60px;padding:0 14px;display:flex;align-items:center;justify-content:space-between;color:#fff}\
    .fv-gallery-top button{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-size:20px}\
    .fv-gallery-stage{flex:1;display:flex;align-items:center;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}\
    .fv-gallery-stage::-webkit-scrollbar{display:none}\
    .fv-gallery-item{min-width:100%;height:100%;scroll-snap-align:start;display:grid;place-items:center}\
    .fv-gallery-item img{width:100%;max-height:86vh;object-fit:contain}\
    .fv-gallery-tabs{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:9px 14px calc(11px + env(safe-area-inset-bottom));background:#050505}\
    .fv-gallery-tabs button{border:1px solid rgba(255,255,255,.3);background:transparent;color:#fff;border-radius:999px;padding:7px 11px;font-size:11px;white-space:nowrap}\
    .fv-gallery-tabs button.active{background:#fff;color:#111;border-color:#fff}\
  }\
  @media(min-width:768px){#stluxe-fresha-v3{display:none!important}}';
  document.head.appendChild(style);

  var root = document.createElement('div');
  root.id = 'stluxe-fresha-v3';

  var photoSlides = '';
  var galleryItems = '';
  var i;
  for (i = 0; i < photos.length; i++) {
    photoSlides += '<button class="fv-slide" type="button" data-index="' + i + '"><img src="' + photos[i].src + '" alt="' + photos[i].alt + '"></button>';
    galleryItems += '<div class="fv-gallery-item"><img src="' + photos[i].src + '" alt="' + photos[i].alt + '"></div>';
  }

  var portfolio = '';
  for (i = 0; i < 4; i++) {
    portfolio += '<button class="fv-photo" type="button" data-index="' + i + '" data-category="' + photos[i].cat + '"><img src="' + photos[i].src + '" alt="' + photos[i].alt + '"></button>';
  }

  var teamData = [
    ['Nail-мастер','Маникюр · педикюр · наращивание'],
    ['Парикмахер-колорист','Стрижки · окрашивание · укладки'],
    ['Косметолог','Уход · чистки · пилинги'],
    ['Бровист / Lash-мастер','Брови · ресницы'],
    ['Мастер депиляции','Шугаринг · воск']
  ];
  var team = '';
  for (i = 0; i < teamData.length; i++) {
    team += '<button class="fv-person" type="button" data-role="' + teamData[i][0] + '"><span class="fv-person-pic"><span class="fv-badge">★ —</span><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M5 21c.4-4.2 2.8-6.5 7-6.5s6.6 2.3 7 6.5"/></svg></span><span class="fv-person-name">' + teamData[i][0] + '</span><span class="fv-person-role">' + teamData[i][1] + '</span></button>';
  }

  var reviewHtml = '';
  for (i = 0; i < reviews.length; i++) {
    reviewHtml += '<article class="fv-review"><div class="fv-review-top"><strong>' + reviews[i][0] + '</strong><span class="fv-review-stars">★★★★★</span></div><p>' + reviews[i][1] + '</p></article>';
  }

  root.innerHTML = '\
    <div class="fv-page">\
      <header class="fv-top">\
        <a class="fv-brand" href="#fv-top">STLuxe</a>\
        <a class="fv-yandex" href="' + YANDEX + '" target="_blank" rel="noopener">Яндекс Карты ' + svg('chevron') + '</a>\
      </header>\
      <section class="fv-media" id="fv-top">\
        <div class="fv-track" id="fvTrack">' + photoSlides + '</div>\
        <div class="fv-media-actions"><button class="fv-round" id="fvBack" type="button">' + svg('arrow') + '</button><div class="fv-media-right"><button class="fv-round" id="fvShare" type="button">' + svg('share') + '</button><button class="fv-round" id="fvHeart" type="button">' + svg('heart') + '</button></div></div>\
        <div class="fv-counter" id="fvCounter">1/' + photos.length + '</div>\
      </section>\
      <section class="fv-hero">\
        <h1 class="fv-title">STLuxe</h1>\
        <p class="fv-type">Салон красоты</p>\
        <div class="fv-rating"><span class="fv-star">★</span><strong>4,9</strong><span>(86)</span></div>\
        <div class="fv-hours">' + svg('clock') + '<span><span class="fv-state closed" id="fvState">Закрыто</span> <span id="fvStateTail">— открывается в 10:00</span></span></div>\
        <a class="fv-address" href="' + YANDEX + '" target="_blank" rel="noopener">' + svg('pin') + '<span>Московская область, Ивантеевка, улица Победы, 16</span></a>\
      </section>\
      <section class="fv-section" id="fvOverview"><h2>Общие сведения</h2><p class="fv-copy">STLuxe — салон красоты в Ивантеевке. Здесь собраны ногтевой сервис, парикмахерские услуги, косметология, оформление бровей и ресниц, перманентный макияж и депиляция.</p></section>\
      <section class="fv-section" id="fvPortfolio"><div class="fv-head"><h2>Портфолио</h2><button class="fv-link" id="fvOpenGallery" type="button">Все работы</button></div><div class="fv-filters" id="fvFilters"><button class="fv-filter active" data-filter="all">Все работы</button><button class="fv-filter" data-filter="nails">Ногти</button><button class="fv-filter" data-filter="hair">Волосы</button><button class="fv-filter" data-filter="interior">Салон</button></div><div class="fv-grid">' + portfolio + '</div></section>\
      <section class="fv-section" id="fvServices"><div class="fv-head"><h2>Услуги</h2></div><div class="fv-filters"><button class="fv-filter active" data-service="all">Все</button><button class="fv-filter" data-service="nails">Ногти</button><button class="fv-filter" data-service="hair">Волосы</button><button class="fv-filter" data-service="face">Косметология</button><button class="fv-filter" data-service="brows">Брови</button><button class="fv-filter" data-service="lashes">Ресницы</button><button class="fv-filter" data-service="depilation">Депиляция</button></div><div class="fv-services" id="fvServicesList"></div><button class="fv-more" id="fvServicesMore" type="button">Посмотреть ещё</button></section>\
      <section class="fv-section"><h2>Специалисты</h2><div class="fv-team">' + team + '</div></section>\
      <section class="fv-section"><div class="fv-head"><h2>Отзывы</h2><a class="fv-link" href="' + YANDEX + '" target="_blank" rel="noopener">Яндекс Карты</a></div><div class="fv-reviews">' + reviewHtml + '</div></section>\
      <section class="fv-section" id="fvAbout"><h2>О салоне</h2><p class="fv-copy">В STLuxe несколько направлений красоты объединены в одном пространстве. Клиент может выбрать услугу по задаче — от маникюра и окрашивания до косметологии, ресниц и депиляции.</p><p class="fv-copy">Персональные профили специалистов будут заполнены после получения подтверждённой информации о команде.</p></section>\
      <section class="fv-section" id="fvVisit"><h2>Визит</h2><div class="fv-visit"><div class="fv-visit-row">' + svg('pin') + '<div><strong>Адрес</strong><span>Московская область, Ивантеевка, улица Победы, 16</span></div></div><div class="fv-visit-row">' + svg('clock') + '<div><strong>Часы работы</strong><span>Вт–Вс 10:00–20:00<br>Понедельник — выходной</span></div></div><div class="fv-visit-row">' + svg('phone') + '<div><strong>Телефон</strong><span>+7 916 355-22-22</span></div></div></div><div class="fv-visit-actions"><a class="fv-action" href="' + YANDEX + '" target="_blank" rel="noopener">Маршрут</a><a class="fv-action black" href="tel:' + PHONE + '">Позвонить</a></div></section>\
      <footer class="fv-footer"><strong>STLuxe</strong><span>Цифровой офис на TANEM</span></footer>\
    </div>\
    <div class="fv-bookbar" id="fvBookbar"><div class="fv-book-copy">Доступно 70+ услуг</div><button class="fv-book-button" id="fvBookBtn" type="button">Забронировать</button></div>\
    <div class="fv-modal" id="fvModal"><div class="fv-sheet"><div class="fv-sheet-top"><div><h3 id="fvModalTitle">Запись в STLuxe</h3><p>Онлайн-ссылка салона не указана, поэтому сейчас запись доступна через прямой контакт.</p></div><button class="fv-close" id="fvModalClose" type="button">×</button></div><div class="fv-sheet-actions"><a class="black" href="tel:' + PHONE + '">Позвонить</a><a href="' + YANDEX + '" target="_blank" rel="noopener">Открыть Яндекс Карты</a></div></div></div>\
    <div class="fv-gallery" id="fvGallery"><div class="fv-gallery-top"><button id="fvGalleryClose" type="button">×</button><span id="fvGalleryCount">1/' + photos.length + '</span><span style="width:38px"></span></div><div class="fv-gallery-stage" id="fvGalleryStage">' + galleryItems + '</div><div class="fv-gallery-tabs"><button class="active" data-gfilter="all">Все</button><button data-gfilter="nails">Ногти</button><button data-gfilter="hair">Волосы</button><button data-gfilter="interior">Салон</button></div></div>';

  document.body.appendChild(root);

  var track = root.querySelector('#fvTrack');
  var counter = root.querySelector('#fvCounter');
  var slides = root.querySelectorAll('.fv-slide');
  function updateCounter() {
    var w = track.clientWidth || 1;
    var idx = Math.round(track.scrollLeft / w);
    if (idx < 0) idx = 0;
    if (idx >= photos.length) idx = photos.length - 1;
    counter.textContent = (idx + 1) + '/' + photos.length;
  }
  track.addEventListener('scroll', function () { window.requestAnimationFrame(updateCounter); }, {passive:true});

  var gallery = root.querySelector('#fvGallery');
  var galleryStage = root.querySelector('#fvGalleryStage');
  var galleryCount = root.querySelector('#fvGalleryCount');
  function openGallery(index) {
    if (typeof index !== 'number') index = 0;
    gallery.classList.add('open');
    document.body.style.overflow = 'hidden';
    window.setTimeout(function () {
      galleryStage.scrollLeft = index * galleryStage.clientWidth;
      galleryCount.textContent = (index + 1) + '/' + photos.length;
    }, 0);
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', function () { openGallery(Number(this.getAttribute('data-index'))); });
  }

  root.querySelector('#fvBack').addEventListener('click', function () {
    if (window.history.length > 1) window.history.back(); else window.scrollTo(0,0);
  });

  root.querySelector('#fvShare').addEventListener('click', function () {
    if (navigator.share) {
      navigator.share({title:'STLuxe',url:window.location.href}).catch(function () {});
    } else {
      window.prompt('Скопируйте ссылку', window.location.href);
    }
  });

  root.querySelector('#fvHeart').addEventListener('click', function () {
    var saved = this.getAttribute('data-saved') === '1';
    this.setAttribute('data-saved', saved ? '0' : '1');
    this.style.background = saved ? 'rgba(255,255,255,.94)' : '#111';
    this.style.color = saved ? '#111' : '#fff';
  });

  var state = root.querySelector('#fvState');
  var stateTail = root.querySelector('#fvStateTail');
  function updateOpenState() {
    try {
      var parts = new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Moscow',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());
      var day = '', hour = 0, minute = 0, j;
      for (j = 0; j < parts.length; j++) {
        if (parts[j].type === 'weekday') day = parts[j].value;
        if (parts[j].type === 'hour') hour = Number(parts[j].value || 0);
        if (parts[j].type === 'minute') minute = Number(parts[j].value || 0);
      }
      var mins = hour * 60 + minute;
      var monday = day === 'Mon';
      var open = !monday && mins >= 600 && mins < 1200;
      state.textContent = open ? 'Открыто' : 'Закрыто';
      state.className = 'fv-state ' + (open ? 'open' : 'closed');
      if (open) stateTail.textContent = '— закрывается в 20:00';
      else if (monday) stateTail.textContent = '— открывается во вторник в 10:00';
      else if (mins < 600) stateTail.textContent = '— открывается в 10:00';
      else stateTail.textContent = '— открывается завтра в 10:00';
    } catch (e) {
      state.textContent = 'Часы работы';
      state.className = 'fv-state';
      stateTail.textContent = '— Вт–Вс 10:00–20:00';
    }
  }
  updateOpenState();
  window.setInterval(updateOpenState,60000);

  var modal = root.querySelector('#fvModal');
  function openBooking() { modal.classList.add('open'); document.body.style.overflow='hidden'; }
  root.querySelector('#fvBookBtn').addEventListener('click', openBooking);
  root.querySelector('#fvModalClose').addEventListener('click', function () { modal.classList.remove('open'); document.body.style.overflow=''; });
  modal.addEventListener('click', function (e) { if (e.target === modal) { modal.classList.remove('open'); document.body.style.overflow=''; } });

  var servicesList = root.querySelector('#fvServicesList');
  var more = root.querySelector('#fvServicesMore');
  var serviceFilter = 'all';
  var expanded = false;
  function renderServices() {
    var filtered = [], k;
    for (k = 0; k < services.length; k++) if (serviceFilter === 'all' || services[k][0] === serviceFilter) filtered.push(services[k]);
    var limit = expanded ? filtered.length : Math.min(6, filtered.length);
    var html = '';
    for (k = 0; k < limit; k++) {
      html += '<article class="fv-service"><div class="fv-service-name">' + filtered[k][1] + '</div><div class="fv-service-bottom"><span class="fv-price">' + filtered[k][2] + '</span><button class="fv-reserve" type="button">Забронировать</button></div></article>';
    }
    servicesList.innerHTML = html;
    var reserveButtons = servicesList.querySelectorAll('.fv-reserve');
    for (k = 0; k < reserveButtons.length; k++) reserveButtons[k].addEventListener('click', openBooking);
    more.style.display = filtered.length > 6 ? 'block' : 'none';
    more.textContent = expanded ? 'Свернуть' : 'Посмотреть ещё';
  }
  renderServices();
  more.addEventListener('click', function () { expanded = !expanded; renderServices(); });

  var serviceBtns = root.querySelectorAll('[data-service]');
  for (i = 0; i < serviceBtns.length; i++) {
    serviceBtns[i].addEventListener('click', function () {
      var all = root.querySelectorAll('[data-service]'), j;
      for (j = 0; j < all.length; j++) all[j].classList.remove('active');
      this.classList.add('active'); serviceFilter = this.getAttribute('data-service'); expanded = false; renderServices();
    });
  }

  var filterBtns = root.querySelectorAll('[data-filter]');
  for (i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener('click', function () {
      var all = root.querySelectorAll('[data-filter]'), j;
      for (j = 0; j < all.length; j++) all[j].classList.remove('active');
      this.classList.add('active');
      var f = this.getAttribute('data-filter');
      var cards = root.querySelectorAll('.fv-photo');
      for (j = 0; j < cards.length; j++) cards[j].hidden = f !== 'all' && cards[j].getAttribute('data-category') !== f;
    });
  }

  var photoCards = root.querySelectorAll('.fv-photo');
  for (i = 0; i < photoCards.length; i++) photoCards[i].addEventListener('click', function () { openGallery(Number(this.getAttribute('data-index'))); });
  root.querySelector('#fvOpenGallery').addEventListener('click', function () { openGallery(0); });
  root.querySelector('#fvGalleryClose').addEventListener('click', function () { gallery.classList.remove('open'); document.body.style.overflow=''; });
  galleryStage.addEventListener('scroll', function () {
    window.requestAnimationFrame(function () {
      var w = galleryStage.clientWidth || 1;
      var idx = Math.round(galleryStage.scrollLeft / w);
      if (idx < 0) idx = 0;
      if (idx >= photos.length) idx = photos.length - 1;
      galleryCount.textContent = (idx + 1) + '/' + photos.length;
    });
  }, {passive:true});

  var gBtns = root.querySelectorAll('[data-gfilter]');
  for (i = 0; i < gBtns.length; i++) {
    gBtns[i].addEventListener('click', function () {
      var all = root.querySelectorAll('[data-gfilter]'), j;
      for (j = 0; j < all.length; j++) all[j].classList.remove('active');
      this.classList.add('active');
      var f = this.getAttribute('data-gfilter');
      var first = 0;
      if (f !== 'all') {
        for (j = 0; j < photos.length; j++) { if (photos[j].cat === f) { first = j; break; } }
      }
      galleryStage.scrollLeft = first * galleryStage.clientWidth;
    });
  }

  var persons = root.querySelectorAll('.fv-person');
  for (i = 0; i < persons.length; i++) persons[i].addEventListener('click', openBooking);

  var bookbar = root.querySelector('#fvBookbar');
  var about = root.querySelector('#fvAbout');
  function syncBookbar() {
    var aboutTop = about.getBoundingClientRect().top;
    if (aboutTop < window.innerHeight * 0.78) bookbar.classList.add('hidden'); else bookbar.classList.remove('hidden');
  }
  window.addEventListener('scroll', syncBookbar, {passive:true});
  window.addEventListener('resize', syncBookbar);
  syncBookbar();
}());