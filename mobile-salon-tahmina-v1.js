(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  var YANDEX='https://yandex.ru/navi/org/stluxe/51087098664?si=4x8mkunbkhugdwe7bkyfw55fh0';
  var PHONE='+79163552222';
  var ADDRESS='Московская область, Ивантеевка, ул. Победы, 16';

  var photos=[
    {src:'assets/images/salon-reception.webp',cat:'salon',alt:'Интерьер STLuxe'},
    {src:'assets/images/nails-pink.webp',cat:'nails',alt:'Работа STLuxe — маникюр'},
    {src:'assets/images/hair-style.webp',cat:'hair',alt:'Работа STLuxe — волосы'},
    {src:'assets/images/nails-green.webp',cat:'nails',alt:'Работа STLuxe — дизайн ногтей'},
    {src:'assets/images/nails-light.webp',cat:'nails',alt:'Работа STLuxe — маникюр'},
    {src:'assets/images/salon-nail-zone.webp',cat:'salon',alt:'Рабочая зона STLuxe'}
  ];

  var services=[
    ['nails','Маникюр с покрытием гель-лака OPI, Luxio, EMI','1 700 ₽'],
    ['nails','Женский педикюр — аппаратный, обрезной или комбинированный','2 000 ₽'],
    ['nails','Экспресс-педикюр','1 500 ₽'],
    ['nails','Наращивание ногтей гелем + цветное верхнее покрытие','3 000 ₽'],
    ['hair','Стрижка и укладка — короткие волосы до 12 см','800 ₽'],
    ['hair','Утюжок — доплата при укладке, короткие волосы','300 ₽'],
    ['hair','Диффузор — доплата при укладке, короткие волосы','150 ₽'],
    ['hair','Вечерняя причёска — короткие волосы','1 500 ₽'],
    ['hair','Вечерняя причёска — средние волосы','1 500 ₽'],
    ['hair','Вечерняя причёска — длинные волосы','1 500 ₽'],
    ['hair','Биохимическая завивка Selective — короткие волосы','2 000 ₽'],
    ['hair','Биохимическая завивка Selective — средние волосы','2 400 ₽'],
    ['hair','Биохимическая завивка Selective — длинные волосы','2 900 ₽'],
    ['hair','Колорирование / шатуш / балаяж — короткие волосы','3 400 ₽'],
    ['hair','Колорирование / шатуш / балаяж — средние волосы','3 800 ₽'],
    ['hair','Колорирование / шатуш / балаяж — длинные волосы','4 500 ₽'],
    ['face','Чистка лица','Цена по записи'],
    ['face','Аппаратная чистка лица','Цена по записи'],
    ['face','Химический пилинг лица','Цена по записи'],
    ['face','Гликолевый пилинг','Цена по записи'],
    ['brows','Коррекция и окрашивание бровей','Цена по записи'],
    ['lashes','Окрашивание ресниц','Цена по записи'],
    ['lashes','Наращивание ресниц','Цена по записи'],
    ['other','Перманентный макияж','Цена по записи'],
    ['depilation','Шугаринг','Цена по записи'],
    ['depilation','Восковая депиляция','Цена по записи']
  ];

  var reviews=[
    ['мария н.','Первый визит по рекомендации. Отмечает уютную атмосферу, стильный интерьер и работу Татьяны.'],
    ['Ольга К.','Отмечает чистоту, стерильность, дружелюбную атмосферу и хороший сервис.'],
    ['Оксана Семина','Особенно хвалит работу Татьяны, маникюр, кератин, окрашивание и стрижку.'],
    ['Дарья К.','Пишет об уюте, чистоте, внимании к пожеланиям и стойком маникюре.'],
    ['Ольга Г.','Благодарит Татьяну за окрашивание и кератин.'],
    ['Лариса Ф.','Отмечает стильный чистый салон, чай и кофе и аккуратный маникюр.'],
    ['Галина Б.','Давно посещает салон и отдельно рекомендует Татьяну и Алёну.'],
    ['Мама Рита','Особенно рекомендует косметолога Марию и качество используемых препаратов.'],
    ['Елизавета С.','Отмечает вежливых мастеров, чистоту, стильный интерьер и качественные услуги.']
  ];

  function icon(name){
    var p={
      menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
      phone:'<path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.9z"/>',
      pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
      clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      arrow:'<path d="M5 12h14M14 7l5 5-5 5"/>',
      close:'<path d="M6 6l12 12M18 6L6 18"/>',
      nav:'<path d="M21 3L10 14"/><path d="M21 3l-7 18-4-7-7-4 18-7z"/>'
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">'+(p[name]||'')+'</svg>';
  }

  var style=document.createElement('style');
  style.id='stluxe-tahmina-mobile-style';
  style.textContent='\
  @media(max-width:767px){\
    html,body{margin:0!important;padding:0!important;background:#fbf8f4!important;color:#171513!important;overflow-x:hidden!important;-webkit-font-smoothing:antialiased!important}\
    body>*:not(#stluxe-tahmina-mobile):not(script):not(style){display:none!important}\
    #stluxe-tahmina-mobile{display:block!important;width:100%;background:#fbf8f4;color:#171513;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Text","Helvetica Neue",Arial,sans-serif}\
    #stluxe-tahmina-mobile *{box-sizing:border-box}\
    #stluxe-tahmina-mobile button,#stluxe-tahmina-mobile a{font:inherit;color:inherit}\
    #stluxe-tahmina-mobile svg{display:block;fill:none;stroke:currentColor;stroke-width:1.65;stroke-linecap:round;stroke-linejoin:round}\
    .tm-serif{font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,"Times New Roman",serif}\
    .tm-header{height:52px;padding:0 18px;display:grid;grid-template-columns:38px 1fr 38px;align-items:center;background:#fbf8f4}\
    .tm-brand{text-align:center;font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;font-size:27px;letter-spacing:-.035em;font-weight:400}\
    .tm-icon{width:36px;height:36px;border:0;background:transparent;padding:8px;display:grid;place-items:center}\
    .tm-icon.phone{border-radius:13px;background:#eee5db}.tm-icon svg{width:20px;height:20px}\
    .tm-hero-photo{height:75vw;min-height:292px;max-height:390px;width:100%;overflow:hidden;background:#eee}\
    .tm-hero-photo img{width:100%;height:100%;object-fit:cover;object-position:center center;display:block}\
    .tm-hero{position:relative;z-index:4;margin:-38px 0 0;background:#fbf8f4;padding:24px 20px calc(88px + env(safe-area-inset-bottom));border-radius:28px 28px 0 0;box-shadow:0 12px 32px rgba(75,55,39,.06);min-height:calc(100svh - 52px - clamp(292px,75vw,390px) + 38px);display:flex;flex-direction:column}\
    .tm-hero h1{font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text","Helvetica Neue",Arial,sans-serif;font-weight:700;font-size:37px;line-height:1.02;letter-spacing:-.055em;margin:0 0 5px;color:#171513}\
    .tm-sub{font-size:16px;line-height:1.35;color:#746d67;font-weight:400;margin:0 0 13px}\
    .tm-rating{display:flex;align-items:center;gap:8px;background:transparent;border:0;border-radius:0;padding:0;font-size:14px;margin:0 0 13px}\
    .tm-rating .star{color:#cda15d;font-size:19px;line-height:1}.tm-rating .muted{color:#827a73}.tm-divider{width:1px;height:18px;background:#ded4cb}\
    .tm-meta{display:flex;align-items:flex-start;gap:8px;font-size:13px;color:#746d67;line-height:1.4;margin-bottom:10px}.tm-meta svg{width:17px;height:17px;flex:0 0 auto;margin-top:1px}.tm-meta.open svg,.tm-meta.open strong{color:#2f9a63}.tm-meta.closed svg,.tm-meta.closed strong{color:#c57d34}.tm-meta strong{font-weight:500}.tm-location{display:flex;align-items:flex-start;gap:10px;background:#efefed;border-radius:16px;padding:13px 14px;margin:2px 0 0;font-size:12px;line-height:1.45;color:#171513;font-weight:500}.tm-location svg{width:18px;height:18px;flex:0 0 auto;margin-top:0;color:#1f1d1b}\
    .tm-primary{width:100%;height:54px;border:0;border-radius:17px;background:#171717!important;color:#fff!important;font-size:16px;font-weight:450;margin-top:auto;flex:0 0 auto}\
    .tm-service-jump{width:100%;border:0;background:transparent;padding:18px 0 4px;margin-top:auto;font-size:13px;color:#504943;text-align:center;letter-spacing:-.01em}\
    .tm-service-jump span{display:inline-block;margin-left:5px;font-size:15px}\
    .tm-bookbar-fixed{position:fixed;left:0;right:0;bottom:0;z-index:150;min-height:76px;padding:10px 18px calc(10px + env(safe-area-inset-bottom));background:rgba(251,248,244,.97);backdrop-filter:blur(18px) saturate(145%);border-top:1px solid rgba(220,211,202,.8);display:flex;align-items:center;justify-content:space-between;gap:16px;box-shadow:0 -8px 28px rgba(45,34,25,.06)}\
    .tm-bookbar-copy{display:flex;align-items:baseline;gap:5px;min-width:0;color:#6f6862}.tm-bookbar-copy strong{font-size:16px;color:#27231f;font-weight:650}.tm-bookbar-copy span{font-size:12px;white-space:nowrap}\
    .tm-bookbar-button{height:48px;border:0;border-radius:999px;background:#3d3b39!important;color:#fff!important;padding:0 23px;font-size:15px;font-weight:600;white-space:nowrap}\
    .tm-team-more{margin-top:22px;font-size:12px;color:#5f5750;text-align:center}.tm-team-more span{margin-left:5px}\
    .tm-secondary{width:100%;border:0;background:none;padding:17px 0 0;font-size:14px;color:#2f2925;text-decoration:underline;text-decoration-color:#c9a67b;text-underline-offset:6px}\
    .tm-section{padding:38px 20px 42px}.tm-section.white{background:#fff}.tm-section.soft{background:#f4eee8}\
    .tm-head{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;margin-bottom:20px}\
    .tm-title{font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;font-size:36px;line-height:1.05;letter-spacing:-.04em;font-weight:400;margin:0;color:#2a201a}\
    .tm-eyebrow{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#aa8f74;margin-bottom:8px}\
    .tm-small-link{border:0;background:none;padding:0;font-size:12px;color:#5e5751;text-decoration:underline;text-underline-offset:5px;text-decoration-color:#c7aa8c}\
    .tm-filters{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin:0 -20px 18px;padding:0 20px}.tm-filters::-webkit-scrollbar{display:none}\
    .tm-filter{border:1px solid #ddd3c9;background:rgba(255,255,255,.55);border-radius:999px;padding:9px 14px;font-size:12px;color:#6f675f;white-space:nowrap;font-weight:400}.tm-filter.active{background:#171717!important;color:#fff!important;border-color:#171717!important}\
    .tm-grid{display:grid;grid-template-columns:1.2fr 1fr;grid-template-rows:164px 132px 132px;gap:8px}\
    .tm-photo{border:0;padding:0;background:#e8e1da;border-radius:18px;overflow:hidden}.tm-photo img{width:100%;height:100%;object-fit:cover;display:block}.tm-photo:nth-child(1){grid-column:1/3;grid-row:1}.tm-photo:nth-child(2){grid-column:1;grid-row:2/4}.tm-photo:nth-child(3){grid-column:2;grid-row:2}.tm-photo:nth-child(4){grid-column:2;grid-row:3}.tm-photo:nth-child(n+5){display:none}\
    .tm-gallery-btn{width:100%;height:46px;border:1px solid #d8c9bb;border-radius:16px;background:transparent;margin-top:15px;font-size:13px;color:#4f463f}\
    .tm-services{display:grid;gap:10px}.tm-service{display:grid;grid-template-columns:minmax(0,1fr) auto;grid-template-rows:auto auto;column-gap:14px;row-gap:8px;align-items:center;min-height:100px;padding:17px;border:1px solid #eee4dc;border-radius:20px;background:#fff;box-shadow:0 8px 26px rgba(91,68,48,.035)}\
    .tm-service-name{grid-column:1;grid-row:1;font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;font-size:19px;line-height:1.18;font-weight:400;color:#2a201a;min-width:0}.tm-service-price{grid-column:1;grid-row:2;font-size:13px;color:#6f665f;margin-top:0}.tm-book-small{grid-column:2;grid-row:1/3;align-self:center;position:static;transform:none;height:38px;border:0;border-radius:999px;background:#44413f!important;color:#fff!important;padding:0 14px;font-size:11px;font-weight:500;white-space:nowrap}\
    .tm-more{width:100%;height:46px;border:1px solid #d8c9bb;border-radius:16px;background:transparent;margin-top:14px;font-size:13px;color:#4f463f}\
    .tm-team-copy{margin:8px 0 24px;color:#7b736d;font-size:14px;line-height:1.5}.tm-team{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}\
    .tm-person{text-align:center}.tm-avatar{width:92px;height:92px;border-radius:50%;margin:0 auto;background:linear-gradient(145deg,#eee4da,#fff);border:4px solid rgba(255,255,255,.72);box-shadow:0 7px 24px rgba(71,51,34,.08);display:grid;place-items:center;font-family:"Iowan Old Style",Georgia,serif;font-size:32px;color:#a78968}\
    .tm-person-name{font-family:"Iowan Old Style",Georgia,serif;font-size:20px;margin-top:12px;color:#2b211b}.tm-person-role{font-size:10.5px;line-height:1.35;color:#7a726b;margin-top:4px}\
    .tm-reviews-head{display:flex;align-items:center;gap:8px;margin:10px 0 22px;color:#7c746d;font-size:14px}.tm-reviews-head .star{color:#d6a648;font-size:20px}.tm-reviews-head strong{font-size:18px;color:#2b2520;font-weight:500}\
    .tm-review-wrap{overflow:hidden;margin:0 -20px}.tm-reviews{display:flex;gap:11px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0 20px 4px}.tm-reviews::-webkit-scrollbar{display:none}\
    .tm-review{min-width:92%;min-height:190px;scroll-snap-align:start;background:#fff;border:1px solid #eee5dc;border-radius:23px;padding:21px}.tm-review-top{display:flex;align-items:center;gap:11px;margin-bottom:14px}.tm-review-avatar{width:38px;height:38px;border-radius:50%;background:#efe5da;display:grid;place-items:center;font-family:"Iowan Old Style",Georgia,serif;font-size:17px;color:#7c654e}.tm-review-name{font-size:13px;font-weight:500;color:#2a2521}.tm-review-source{font-size:10px;color:#a09890;margin-top:2px}.tm-review p{margin:0;font-size:15px;line-height:1.58;color:#514b46}\
    .tm-all-reviews{width:100%;height:46px;border:1px solid #d8c9bb;border-radius:16px;background:transparent;margin-top:16px;font-size:13px}\
    .tm-visit-list{display:grid;gap:0;margin:22px 0}.tm-visit-row{display:grid;grid-template-columns:42px 1fr;gap:11px;align-items:start;padding:14px 0;border-bottom:1px solid #e4d9ce}.tm-visit-icon{width:38px;height:38px;border-radius:13px;background:#eee4da;display:grid;place-items:center}.tm-visit-icon svg{width:19px;height:19px}.tm-visit-row strong{display:block;font-size:13px;font-weight:500;margin:3px 0 3px}.tm-visit-row span{font-size:12px;line-height:1.45;color:#746d66}\
    .tm-map{width:100%;height:250px;border:0;border-radius:20px;background:#e9e1d9;display:block}\
    .tm-visit-actions{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:12px}.tm-action{height:46px;border-radius:15px;border:1px solid #d9cbbb;background:#fff;display:flex;align-items:center;justify-content:center;gap:7px;text-decoration:none;font-size:13px}.tm-action.black{background:#171717!important;color:#fff!important;border-color:#171717}.tm-action svg{width:17px;height:17px}\
    .tm-final{margin-top:20px;padding:24px 20px 20px;border-radius:24px;background:linear-gradient(135deg,#eee3d8,#faf7f2);position:relative;overflow:hidden}.tm-final:after{content:"";position:absolute;width:145px;height:145px;border:1px solid rgba(169,137,99,.3);border-radius:50%;right:-35px;top:-45px}.tm-final h3{font-family:"Iowan Old Style",Georgia,serif;font-weight:400;font-size:29px;line-height:1.08;margin:0 0 8px;color:#2b211b}.tm-final p{font-size:12px;line-height:1.5;color:#766e67;margin:0 0 17px;max-width:78%}.tm-final button{height:48px;border:0;border-radius:15px;background:#171717!important;color:#fff!important;padding:0 20px;font-size:13px;position:relative;z-index:2}\
    .tm-footer{text-align:center;padding:23px 20px 31px;background:#f4eee8;color:#9a9189;font-size:10px}.tm-footer strong{display:block;font-family:"Iowan Old Style",Georgia,serif;font-size:18px;font-weight:400;color:#433a33;margin-bottom:4px}\
    .tm-overlay{position:fixed;inset:0;z-index:200;background:rgba(20,16,13,.42);display:none;align-items:flex-end}.tm-overlay.open{display:flex}.tm-sheet{width:100%;max-height:88vh;overflow:auto;background:#fbf8f4;border-radius:28px 28px 0 0;padding:18px 18px calc(22px + env(safe-area-inset-bottom))}.tm-sheet-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}.tm-sheet-head h3{font-family:"Iowan Old Style",Georgia,serif;font-size:27px;font-weight:400;margin:0}.tm-close{width:38px;height:38px;border-radius:50%;border:1px solid #ded3c8;background:#fff;display:grid;place-items:center}.tm-close svg{width:17px;height:17px}.tm-sheet p{font-size:13px;line-height:1.5;color:#6f675f}.tm-sheet-actions{display:grid;gap:9px;margin-top:18px}.tm-sheet-actions a{height:48px;border-radius:15px;border:1px solid #d9cbbb;background:#fff;display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:13px}.tm-sheet-actions a.black{background:#171717!important;color:#fff!important;border-color:#171717}\
    .tm-gallery{position:fixed;inset:0;z-index:210;background:#0d0d0d;display:none;flex-direction:column}.tm-gallery.open{display:flex}.tm-gallery-top{height:62px;padding:0 15px;display:flex;align-items:center;justify-content:space-between;color:#fff}.tm-gallery-top button{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.28);background:rgba(255,255,255,.08);color:#fff;display:grid;place-items:center}.tm-gallery-top svg{width:17px;height:17px}.tm-gallery-stage{flex:1;display:flex;align-items:center;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}.tm-gallery-stage::-webkit-scrollbar{display:none}.tm-gallery-item{min-width:100%;height:100%;scroll-snap-align:start;display:grid;place-items:center}.tm-gallery-item img{width:100%;max-height:82vh;object-fit:contain}.tm-gallery-count{font-size:12px;color:#fff}.tm-gallery-filters{display:flex;gap:8px;overflow-x:auto;padding:10px 14px calc(12px + env(safe-area-inset-bottom));scrollbar-width:none}.tm-gallery-filters button{border:1px solid rgba(255,255,255,.35);background:transparent;color:#fff!important;border-radius:999px;padding:8px 12px;font-size:11px;white-space:nowrap}.tm-gallery-filters button.active{background:#fff!important;color:#111!important}\
    .tm-menu{display:grid;gap:0}.tm-menu button{height:52px;border:0;border-bottom:1px solid #e8ded4;background:transparent;text-align:left;font-family:"Iowan Old Style",Georgia,serif;font-size:22px}.tm-review-all{padding:15px 0;border-top:1px solid #e8ded4}.tm-review-all:first-of-type{border-top:0}.tm-review-all strong{display:block;font-size:13px;margin-bottom:5px}.tm-review-all p{margin:0;font-size:12.5px;line-height:1.5;color:#625b55}\
  }\
  @media(min-width:768px){#stluxe-tahmina-mobile{display:none!important}}';
  document.head.appendChild(style);

  var root=document.createElement('div');
  root.id='stluxe-tahmina-mobile';

  var portfolio='';
  for(var i=0;i<photos.length;i++) portfolio+='<button class="tm-photo" type="button" data-pindex="'+i+'"><img src="'+photos[i].src+'" alt="'+photos[i].alt+'"></button>';

  root.innerHTML='\
    <header class="tm-header">\
      <button class="tm-icon" id="tmMenuBtn" type="button" aria-label="Меню">'+icon('menu')+'</button>\
      <div class="tm-brand">STLuxe</div>\
      <a class="tm-icon phone" href="tel:'+PHONE+'" aria-label="Позвонить">'+icon('phone')+'</a>\
    </header>\
    <main>\
      <div class="tm-hero-photo"><img src="assets/images/salon-reception.webp" alt="Интерьер салона STLuxe"></div>\
      <section class="tm-hero" id="tmTop">\
        <h1>STLuxe</h1>\
        <p class="tm-sub">Салон красоты</p>\
        <div class="tm-rating"><span class="star">★</span><strong>4,9</strong><span class="tm-divider"></span><span class="muted">86 отзывов</span></div>\
        <div class="tm-meta" id="tmHoursRow">'+icon('clock')+'<span id="tmHoursText">Проверяем часы работы…</span></div>\
        <div class="tm-location">'+icon('pin')+'<span>'+ADDRESS+'</span></div>\
        <button class="tm-service-jump" id="tmToServices" type="button">Перейти к услугам <span>↓</span></button>\
      </section>\
\
      <section class="tm-section soft" id="tmWorks">\
        <div class="tm-head"><div><div class="tm-eyebrow">Портфолио</div><h2 class="tm-title">Наши работы</h2></div></div>\
        <div class="tm-filters" id="tmWorkFilters"><button class="tm-filter active" data-work="all">Все</button><button class="tm-filter" data-work="nails">Ногти</button><button class="tm-filter" data-work="hair">Волосы</button><button class="tm-filter" data-work="salon">Салон</button></div>\
        <div class="tm-grid" id="tmGrid">'+portfolio+'</div>\
        <button class="tm-gallery-btn" id="tmGalleryOpen" type="button">Открыть галерею</button>\
      </section>\
\
      <section class="tm-section white" id="tmServices">\
        <div class="tm-head"><div><div class="tm-eyebrow">Прайс</div><h2 class="tm-title">Услуги и цены</h2></div></div>\
        <div class="tm-filters" id="tmServiceFilters"><button class="tm-filter active" data-service="all">Все</button><button class="tm-filter" data-service="nails">Ногти</button><button class="tm-filter" data-service="hair">Волосы</button><button class="tm-filter" data-service="face">Косметология</button><button class="tm-filter" data-service="brows">Брови</button><button class="tm-filter" data-service="depilation">Депиляция</button></div>\
        <div class="tm-services" id="tmServiceList"></div>\
        <button class="tm-more" id="tmMore" type="button">Посмотреть ещё</button>\
      </section>\
\
      <section class="tm-section soft" id="tmTeam">\
        <div class="tm-eyebrow">STLuxe</div><h2 class="tm-title">Команда</h2>\
        <p class="tm-team-copy">Мастера, которых клиенты отдельно отмечают в отзывах о салоне.</p>\
        <div class="tm-team">\
          <article class="tm-person"><div class="tm-avatar">Т</div><div class="tm-person-name">Татьяна</div><div class="tm-person-role">мастер широкого профиля<br>владелец салона</div></article>\
          <article class="tm-person"><div class="tm-avatar">М</div><div class="tm-person-name">Мария</div><div class="tm-person-role">косметолог</div></article>\
          <article class="tm-person"><div class="tm-avatar">А</div><div class="tm-person-name">Алёна</div><div class="tm-person-role">мастер STLuxe</div></article>\
        </div>\
        <div class="tm-team-more">Посмотреть всю команду <span>→</span></div>\
      </section>\
\
      <section class="tm-section white" id="tmReviews">\
        <div class="tm-eyebrow">Мнение клиентов</div><h2 class="tm-title">Отзывы</h2>\
        <div class="tm-reviews-head"><span class="star">★</span><strong>4,9</strong><span>· 86 отзывов на Яндекс Картах</span></div>\
        <div class="tm-review-wrap"><div class="tm-reviews" id="tmReviewStrip"></div></div>\
        <button class="tm-all-reviews" id="tmAllReviews" type="button">Посмотреть все отзывы</button>\
      </section>\
\
      <section class="tm-section soft" id="tmVisit">\
        <div class="tm-eyebrow">Визит</div><h2 class="tm-title">Ждём вас в салоне</h2>\
        <div class="tm-visit-list">\
          <div class="tm-visit-row"><div class="tm-visit-icon">'+icon('pin')+'</div><div><strong>Адрес</strong><span>'+ADDRESS+'</span></div></div>\
          <div class="tm-visit-row"><div class="tm-visit-icon">'+icon('clock')+'</div><div><strong>Время работы</strong><span>Понедельник — выходной<br>Вторник–воскресенье — 10:00–20:00</span></div></div>\
          <div class="tm-visit-row"><div class="tm-visit-icon">'+icon('phone')+'</div><div><strong>Телефон</strong><span>+7 916 355-22-22</span></div></div>\
        </div>\
        <iframe class="tm-map" loading="lazy" src="https://yandex.ru/map-widget/v1/?mode=search&text='+encodeURIComponent('STLuxe Ивантеевка улица Победы 16')+'&z=16" allowfullscreen></iframe>\
        <div class="tm-visit-actions"><a class="tm-action" href="'+YANDEX+'" target="_blank" rel="noopener">'+icon('nav')+'Маршрут</a><a class="tm-action black" href="tel:'+PHONE+'">'+icon('phone')+'Позвонить</a></div>\
        <div class="tm-final"><h3>Красота начинается<br>с заботы о себе</h3><p>Выберите услугу и свяжитесь с салоном удобным способом.</p><button id="tmFinalBook" type="button">Записаться онлайн</button></div>\
      </section>\
    </main>\
    <div class="tm-bookbar-fixed" aria-label="Быстрая запись"><div class="tm-bookbar-copy"><strong>70+</strong><span>услуг доступно</span></div><button class="tm-bookbar-button" id="tmBottomBook" type="button">Записаться</button></div>\
    <footer class="tm-footer"><strong>STLuxe</strong><span>Цифровой офис на TANEM</span></footer>\
\
    <div class="tm-overlay" id="tmBooking"><div class="tm-sheet"><div class="tm-sheet-head"><h3>Запись в STLuxe</h3><button class="tm-close" data-close="tmBooking" type="button">'+icon('close')+'</button></div><p id="tmBookingText">В карточке салона нет подтверждённой ссылки на онлайн-запись. Сейчас можно связаться напрямую.</p><div class="tm-sheet-actions"><a class="black" href="tel:'+PHONE+'">Позвонить</a><a href="'+YANDEX+'" target="_blank" rel="noopener">Открыть Яндекс Карты</a></div></div></div>\
    <div class="tm-overlay" id="tmMenu"><div class="tm-sheet"><div class="tm-sheet-head"><h3>STLuxe</h3><button class="tm-close" data-close="tmMenu" type="button">'+icon('close')+'</button></div><div class="tm-menu"><button data-target="tmWorks">Работы</button><button data-target="tmServices">Услуги и цены</button><button data-target="tmTeam">Команда</button><button data-target="tmReviews">Отзывы</button><button data-target="tmVisit">Как нас найти</button></div></div></div>\
    <div class="tm-overlay" id="tmReviewModal"><div class="tm-sheet"><div class="tm-sheet-head"><h3>Отзывы клиентов</h3><button class="tm-close" data-close="tmReviewModal" type="button">'+icon('close')+'</button></div><div id="tmReviewAll"></div><div class="tm-sheet-actions"><a href="'+YANDEX+'" target="_blank" rel="noopener">Все отзывы на Яндекс Картах</a></div></div></div>\
    <div class="tm-gallery" id="tmGallery"><div class="tm-gallery-top"><button id="tmGalleryClose" type="button">'+icon('close')+'</button><span class="tm-gallery-count" id="tmGalleryCount">1/'+photos.length+'</span><span style="width:38px"></span></div><div class="tm-gallery-stage" id="tmGalleryStage"></div><div class="tm-gallery-filters"><button class="active" data-gcat="all">Все</button><button data-gcat="nails">Ногти</button><button data-gcat="hair">Волосы</button><button data-gcat="salon">Салон</button></div></div>';

  document.body.appendChild(root);

  function initials(n){
    var clean=n.replace(/[^A-Za-zА-Яа-яЁё ]/g,' ').trim().split(/\s+/);
    return ((clean[0]&&clean[0][0])||'S')+((clean[1]&&clean[1][0])||'');
  }

  var strip=root.querySelector('#tmReviewStrip');
  var loopReviews=reviews.slice(0,5);
  strip.innerHTML=loopReviews.concat(loopReviews).map(function(r){return '<article class="tm-review"><div class="tm-review-top"><div class="tm-review-avatar">'+initials(r[0])+'</div><div><div class="tm-review-name">'+r[0]+'</div><div class="tm-review-source">Яндекс Карты</div></div></div><p>'+r[1]+'</p></article>'}).join('');
  root.querySelector('#tmReviewAll').innerHTML=reviews.map(function(r){return '<article class="tm-review-all"><strong>'+r[0]+'</strong><p>'+r[1]+'</p></article>'}).join('');

  var reviewIndex=0,reviewBaseCount=loopReviews.length;
  window.setInterval(function(){
    if(document.hidden || !strip) return;
    var cards=strip.querySelectorAll('.tm-review');
    if(!cards.length) return;
    reviewIndex+=1;
    if(reviewIndex>=cards.length) reviewIndex=reviewBaseCount;
    try{strip.scrollTo({left:cards[reviewIndex].offsetLeft-20,behavior:'smooth'});}catch(e){strip.scrollLeft=cards[reviewIndex].offsetLeft-20;}
    if(reviewIndex>=reviewBaseCount){
      window.setTimeout(function(){
        reviewIndex=reviewIndex-reviewBaseCount;
        try{strip.scrollTo({left:cards[reviewIndex].offsetLeft-20,behavior:'auto'});}catch(e){strip.scrollLeft=cards[reviewIndex].offsetLeft-20;}
      },720);
    }
  },3300);

  var activeService='all',expanded=false;
  function renderServices(){
    var list=[];
    for(var j=0;j<services.length;j++) if(activeService==='all'||services[j][0]===activeService) list.push(services[j]);
    var limit=expanded?list.length:Math.min(5,list.length);
    var html='';
    for(var k=0;k<limit;k++) html+='<article class="tm-service"><div class="tm-service-name">'+list[k][1]+'</div><div class="tm-service-price">'+list[k][2]+'</div><button class="tm-book-small" type="button" data-book="'+list[k][1].replace(/"/g,'&quot;')+'">Забронировать</button></article>';
    root.querySelector('#tmServiceList').innerHTML=html;
    root.querySelector('#tmMore').style.display=list.length>5?'block':'none';
    root.querySelector('#tmMore').textContent=expanded?'Свернуть':'Посмотреть ещё';
  }
  renderServices();

  root.querySelector('#tmServiceFilters').addEventListener('click',function(e){
    var b=e.target.closest('button[data-service]'); if(!b) return;
    var all=this.querySelectorAll('.tm-filter'); for(var i=0;i<all.length;i++) all[i].classList.remove('active'); b.classList.add('active');
    activeService=b.getAttribute('data-service'); expanded=false; renderServices();
  });
  root.querySelector('#tmMore').addEventListener('click',function(){expanded=!expanded;renderServices();});

  function openOverlay(id){root.querySelector('#'+id).classList.add('open');document.body.style.overflow='hidden';}
  function closeOverlay(id){root.querySelector('#'+id).classList.remove('open');document.body.style.overflow='';}
  root.addEventListener('click',function(e){
    var c=e.target.closest('[data-close]'); if(c){closeOverlay(c.getAttribute('data-close'));return;}
    if(e.target.classList.contains('tm-overlay')){e.target.classList.remove('open');document.body.style.overflow='';return;}
    var book=e.target.closest('[data-book]'); if(book){root.querySelector('#tmBookingText').textContent='Вы выбрали: '+book.getAttribute('data-book')+'. В карточке салона нет подтверждённой ссылки на онлайн-запись, поэтому сейчас можно связаться напрямую.';openOverlay('tmBooking');return;}
  });
  root.querySelector('#tmBottomBook').addEventListener('click',function(){root.querySelector('#tmBookingText').textContent='В карточке салона нет подтверждённой ссылки на онлайн-запись. Сейчас можно связаться напрямую.';openOverlay('tmBooking');});
  root.querySelector('#tmToServices').addEventListener('click',function(){root.querySelector('#tmServices').scrollIntoView({behavior:'smooth',block:'start'});});
  root.querySelector('#tmFinalBook').addEventListener('click',function(){openOverlay('tmBooking');});
  root.querySelector('#tmMenuBtn').addEventListener('click',function(){openOverlay('tmMenu');});
  root.querySelector('#tmAllReviews').addEventListener('click',function(){openOverlay('tmReviewModal');});
  root.querySelector('#tmMenu').addEventListener('click',function(e){var b=e.target.closest('[data-target]');if(!b)return;var id=b.getAttribute('data-target');closeOverlay('tmMenu');window.setTimeout(function(){var el=root.querySelector('#'+id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});},80);});

  var workFilter='all';
  function renderPortfolio(){
    var cards=root.querySelectorAll('#tmGrid .tm-photo');
    for(var i=0;i<cards.length;i++){
      var idx=Number(cards[i].getAttribute('data-pindex'))||0;
      cards[i].style.display=(workFilter==='all'||photos[idx].cat===workFilter)?'':'none';
    }
  }
  root.querySelector('#tmWorkFilters').addEventListener('click',function(e){
    var b=e.target.closest('[data-work]');if(!b)return;
    var all=this.querySelectorAll('.tm-filter');for(var i=0;i<all.length;i++)all[i].classList.remove('active');b.classList.add('active');
    workFilter=b.getAttribute('data-work');renderPortfolio();
  });

  var gallery=root.querySelector('#tmGallery'),stage=root.querySelector('#tmGalleryStage'),galleryCount=root.querySelector('#tmGalleryCount');
  var galleryPhotos=photos.slice();
  function renderGallery(cat){
    galleryPhotos=photos.filter(function(p){return cat==='all'||p.cat===cat;});
    stage.innerHTML=galleryPhotos.map(function(p){return '<div class="tm-gallery-item"><img src="'+p.src+'" alt="'+p.alt+'"></div>'}).join('');
    stage.scrollLeft=0;galleryCount.textContent='1/'+galleryPhotos.length;
  }
  function openGallery(index){renderGallery('all');gallery.classList.add('open');document.body.style.overflow='hidden';window.setTimeout(function(){stage.scrollLeft=(index||0)*stage.clientWidth;galleryCount.textContent=((index||0)+1)+'/'+galleryPhotos.length;},30);}
  root.querySelector('#tmGalleryOpen').addEventListener('click',function(){openGallery(0);});
  root.querySelector('#tmGrid').addEventListener('click',function(e){var b=e.target.closest('[data-pindex]');if(b)openGallery(Number(b.getAttribute('data-pindex'))||0);});
  root.querySelector('#tmGalleryClose').addEventListener('click',function(){gallery.classList.remove('open');document.body.style.overflow='';});
  stage.addEventListener('scroll',function(){window.requestAnimationFrame(function(){var w=stage.clientWidth||1;var idx=Math.round(stage.scrollLeft/w);galleryCount.textContent=Math.min(idx+1,galleryPhotos.length)+'/'+galleryPhotos.length;});},{passive:true});
  root.querySelector('.tm-gallery-filters').addEventListener('click',function(e){var b=e.target.closest('[data-gcat]');if(!b)return;var all=this.querySelectorAll('button');for(var i=0;i<all.length;i++)all[i].classList.remove('active');b.classList.add('active');renderGallery(b.getAttribute('data-gcat'));});

  function updateHours(){
    var row=root.querySelector('#tmHoursRow'),txt=root.querySelector('#tmHoursText');
    try{
      var parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Moscow',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());
      var day='',hour=0,minute=0;
      for(var i=0;i<parts.length;i++){if(parts[i].type==='weekday')day=parts[i].value;if(parts[i].type==='hour')hour=parseInt(parts[i].value,10)||0;if(parts[i].type==='minute')minute=parseInt(parts[i].value,10)||0;}
      var mins=hour*60+minute,open=day!=='Mon'&&mins>=600&&mins<1200;
      row.classList.remove('open','closed');row.classList.add(open?'open':'closed');
      if(open){txt.innerHTML='<strong>Открыто до 20:00</strong>';return;}
      var next='';
      if(day==='Mon') next='откроется во вторник в 10:00';
      else if(mins<600){txt.innerHTML='<strong>Закрыто до 10:00</strong>';return;}
      else if(day==='Sun') next='откроется во вторник в 10:00';
      else next='откроется завтра в 10:00';
      txt.innerHTML='<strong>Закрыто</strong> · '+next;
    }catch(e){txt.textContent='Вт–Вс 10:00–20:00';}
  }
  updateHours();window.setInterval(updateHours,60000);
})();