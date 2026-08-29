(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const YANDEX='https://yandex.com/maps/org/beauty_salon_stluxe/51087098664/';
  const YANDEX_REVIEWS='https://yandex.com/maps/org/beauty_salon_stluxe/51087098664/reviews/';
  const PHONE='+79163552222';
  const ADDRESS='Московская область, Ивантеевка, ул. Победы, 16';
  const RATING='4,9';
  const RATINGS_COUNT=125;
  const REVIEWS_COUNT=86;

  const heroPhotos=[
    {src:'assets/images/salon-reception.webp',cat:'salon',alt:'Интерьер STLuxe'},
    {src:'assets/images/salon-nail-zone.webp',cat:'salon',alt:'Зона маникюра STLuxe'},
    {src:'assets/images/nails-pink.webp',cat:'nails',alt:'Маникюр STLuxe'},
    {src:'assets/images/nails-light.webp',cat:'nails',alt:'Маникюр STLuxe'},
    {src:'assets/images/hair-style.webp',cat:'hair',alt:'Работа с волосами STLuxe'}
  ];

  const galleryPhotos=[
    {src:'assets/images/salon-reception.webp',cat:'salon',alt:'Интерьер STLuxe'},
    {src:'assets/images/salon-nail-zone.webp',cat:'salon',alt:'Зона маникюра STLuxe'},
    {src:'assets/images/nails-pink.webp',cat:'nails',alt:'Маникюр STLuxe'},
    {src:'assets/images/nails-green.webp',cat:'nails',alt:'Дизайн ногтей STLuxe'},
    {src:'assets/images/nails-light.webp',cat:'nails',alt:'Маникюр STLuxe'},
    {src:'assets/images/hair-style.webp',cat:'hair',alt:'Работа с волосами STLuxe'}
  ];

  const services=[
    ['nails','Маникюр с покрытием гель-лака OPI, Luxio, EMI','1 700 ₽'],
    ['nails','Женский педикюр','2 000 ₽'],
    ['nails','Экспресс-педикюр','1 500 ₽'],
    ['nails','Наращивание ногтей гелем + цветное покрытие','3 000 ₽'],
    ['hair','Стрижка и укладка — короткие волосы до 12 см','800 ₽'],
    ['hair','Вечерняя причёска','1 500 ₽'],
    ['hair','Биохимическая завивка Selective','от 2 000 ₽'],
    ['hair','Колорирование / шатуш / балаяж','от 3 400 ₽'],
    ['face','Чистка лица','Цена по записи'],
    ['face','Аппаратная чистка лица','Цена по записи'],
    ['face','Химический пилинг лица','Цена по записи'],
    ['brows','Коррекция и окрашивание бровей','Цена по записи'],
    ['lashes','Окрашивание ресниц','Цена по записи'],
    ['lashes','Наращивание ресниц','Цена по записи'],
    ['other','Перманентный макияж','Цена по записи'],
    ['depilation','Шугаринг','Цена по записи'],
    ['depilation','Восковая депиляция','Цена по записи']
  ];

  // Дословные короткие отзывы из карточки STLuxe на Яндекс Картах.
  const reviews=[
    ['Ольга К.','Делаю хим завивку, в этом салоне никогда не отказывают, отличная атмосфера, все чисто стерильно, приветливый персонал, всегда предлагают чай \\кофе'],
    ['Олеся Полянская','Прекрасный, по домашнему, уютный и очень стильный салон. Замечательные мастера, рекомендую Татьяну и Алену. Приемлимые цены и шикарный результат. Спасибо❤️'],
    ['Мама Рита','Прекрасный косметолог Мария. Умеет всё. Препараты качественные, новейшие. Очень советую мастера.'],
    ['Елизавета С.','Отличное обслуживание, все мастера вежливые и отлично выполняют бьюти-услуги! Салон чистый, стильный!'],
    ['Луиза Е.','Спасибо большое Татьяне! Не первый год стригусь у этого мастера, всегда довольна результатом!'],
    ['Максим Румянцев','Отличный салон, с прекрасной атмосферой и персоналом! Услуги с визуальным сопровождением и с кофе(!), хорошие цены. Качество на высоте) Рекомендую!'],
    ['Надежда Капустина','Отличный салон! Посещаю регулярно, педикюр, стрижка и окрашивание волос, красивые ресницы, и всегда выхожу с прекрасным настроением!!!'],
    ['алексей солнцев','Являюсь постоянным клиентом уже больше 6 лет: большое спасибо мастеру Татьяне за идеальные стрижки! Данный салон рекомендую, так держать!'],
    ['Светлана Семенова','Замечательный салон уютная атмосфера мастера все высший класс очень давно мы у этого мастера и стрижемся и делаем маникюр и педикюры всегда всё замечательно']
  ];

  const masters=[
    {id:'tatiana',name:'Татьяна',role:'Мастер',category:'Волосы · ногти',initial:'Т',profile:'Татьяна — владелец STLuxe и мастер широкого профиля. В отзывах клиенты отдельно отмечают её работу с волосами и ногтями.',serviceCats:['hair','nails'],reviewNames:['Олеся Полянская','Луиза Е.','алексей солнцев']},
    {id:'maria',name:'Мария',role:'Мастер',category:'Косметология',initial:'М',profile:'Мария — косметолог STLuxe. В отзывах её отдельно рекомендуют как косметолога.',serviceCats:['face','brows','lashes'],reviewNames:['Мама Рита']},
    {id:'alena',name:'Алёна',role:'Мастер',category:'Категория уточняется',initial:'А',profile:'Алёна — мастер STLuxe, которую клиенты отдельно рекомендуют в отзывах о салоне.',serviceCats:[],reviewNames:['Олеся Полянская']},
    {id:'visual',name:'Мастер',role:'Мастер',category:'Категория уточняется',initial:'М',profile:'Карточка подготовлена для ещё одного специалиста. Имя, категория и фотография будут добавлены после подтверждения салоном.',serviceCats:[],reviewNames:[]}
  ];

  const icons={
    clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    pin:'<svg class="filled-pin" viewBox="0 0 24 24"><path d="M12 2a8 8 0 0 0-8 8c0 5.6 8 12 8 12s8-6.4 8-12a8 8 0 0 0-8-8Zm0 11.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Z"/></svg>',
    close:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    back:'<svg viewBox="0 0 24 24"><path d="M19 12H5m6-6-6 6 6 6"/></svg>',
    phone:'<svg viewBox="0 0 24 24"><path d="M5 3h4l2 5-3 2c1.6 3.2 3.8 5.4 7 7l2-3 5 2v4c0 1.1-.9 2-2 2C10.6 22 2 13.4 2 4a2 2 0 0 1 2-2Z"/></svg>',
    star:'<svg viewBox="0 0 24 24" class="star-svg"><path d="m12 2.7 2.7 5.47 6.03.88-4.36 4.25 1.03 6-5.4-2.84-5.4 2.84 1.03-6-4.36-4.25 6.03-.88L12 2.7Z"/></svg>'
  };

  const style=document.createElement('style');
  style.id='stluxe-clean-v11-style';
  style.textContent=`
  @media(max-width:767px){
    html,body{margin:0!important;padding:0!important;background:#fff!important;color:#111!important;overflow-x:hidden!important;-webkit-font-smoothing:antialiased!important}
    body>*:not(#stluxe-clean-v11):not(script):not(style){display:none!important}
    #stluxe-clean-v11{display:block!important;width:100%;background:#fff;color:#111;font-family:"Roobert","Roobert Regular","Helvetica Neue",Arial,sans-serif;font-weight:400}
    #stluxe-clean-v11 *{box-sizing:border-box}
    #stluxe-clean-v11 button,#stluxe-clean-v11 a{font:inherit;color:inherit}
    #stluxe-clean-v11 button{cursor:pointer}
    #stluxe-clean-v11 svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
    #stluxe-clean-v11 .filled-pin{fill:#111;stroke:none}
    #stluxe-clean-v11 .star-svg{fill:#f7b500;stroke:#f7b500}

    .v11-nav{height:52px;display:flex;align-items:stretch;overflow-x:auto;scrollbar-width:none;background:#fff;border-bottom:1px solid #e6e6e6;padding:0 14px;gap:18px;white-space:nowrap;position:relative;scroll-behavior:smooth}
    .v11-nav::-webkit-scrollbar{display:none}
    .v11-nav button{position:relative;flex:0 0 auto;border:0;background:transparent;padding:0;color:#8a8a8a;font-size:12.6px;line-height:52px;font-weight:400;letter-spacing:-.012em}
    .v11-nav button.active{color:#111}
    .v11-nav button.active:after{content:"";position:absolute;left:0;right:0;bottom:0;height:3.5px;border-radius:5px 5px 0 0;background:#111}
    .v11-nav-sticky{position:fixed;left:0;right:0;top:0;z-index:190;transform:translateY(-105%);transition:transform .24s ease;box-shadow:0 2px 10px rgba(0,0,0,.035)}
    .v11-nav-sticky.show{transform:translateY(0)}

    .v11-hero-media{position:relative;background:#eee;overflow:hidden}
    .v11-hero-track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}
    .v11-hero-track::-webkit-scrollbar{display:none}
    .v11-hero-slide{min-width:100%;height:76vw;min-height:292px;max-height:410px;scroll-snap-align:start;border:0;padding:0;background:#eee}
    .v11-hero-slide img{width:100%;height:100%;object-fit:cover;display:block}
    .v11-counter{position:absolute;right:14px;bottom:16px;background:rgba(20,20,20,.52);color:#fff;border-radius:999px;padding:6px 10px;font-size:11.5px;backdrop-filter:blur(9px)}

    .v11-overview{position:relative;z-index:3;margin-top:-58px;background:#fff;border-radius:26px 26px 0 0;padding:22px 20px 26px}
    .v11-overview h1{font-size:33px;line-height:1.04;letter-spacing:-.045em;font-weight:400;margin:0 0 4px}
    .v11-type{font-size:16px;line-height:1.2;color:#858585;font-weight:400;margin:0 0 16px}
    .v11-rating{display:flex;align-items:center;gap:7px;font-size:14px;margin-bottom:13px}
    .v11-rating .star-char{color:#f7b500;font-size:19px;line-height:1}
    .v11-rating .muted{color:#7c7c7c}
    .v11-hours{display:flex;align-items:center;gap:8px;font-size:13.5px;margin-bottom:12px}.v11-hours svg{width:17px!important;height:17px!important}
    .v11-hours.open{color:#16884d}.v11-hours.closed{color:#c06d20}
    .v11-location{display:flex;gap:10px;align-items:flex-start;background:#f0f0f0;border-radius:14px;padding:13px 14px;font-size:12.8px;line-height:1.42;margin-bottom:20px}
    .v11-location svg{flex:0 0 auto;width:18px!important;height:18px!important;margin-top:1px}
    .v11-overview-title{font-size:18px;font-weight:500;margin:0 0 8px}
    .v11-overview-copy{font-size:14px;line-height:1.52;color:#3f3f3f;margin:0}
    .v11-overview-copy.clamped{max-height:65px;overflow:hidden;position:relative}
    .v11-overview-copy.clamped:after{content:"";position:absolute;left:0;right:0;bottom:0;height:28px;background:linear-gradient(transparent,#fff)}
    .v11-more{border:0;background:transparent;padding:9px 0 0;text-decoration:underline;text-underline-offset:4px;font-size:13px;color:#333}

    .v11-section{padding:42px 20px;scroll-margin-top:64px;border-top:1px solid rgba(0,0,0,.035)}
    .v11-tone-gallery{background:#f7f4f0}
    .v11-tone-services{background:#fff}
    .v11-tone-team{background:#f3f5f5}
    .v11-tone-reviews{background:#faf7f2}
    .v11-tone-visit{background:#fff}
    .v11-section h2{font-size:28px;line-height:1.08;letter-spacing:-.035em;font-weight:500;margin:0 0 20px}
    .v11-section-sub{font-size:13.5px;color:#777;margin:-10px 0 22px;line-height:1.45}

    .v11-gallery-preview{display:grid;grid-template-columns:1.18fr .82fr;grid-template-rows:148px 148px;gap:8px}
    .v11-gallery-preview button{border:0;padding:0;border-radius:17px;overflow:hidden;background:#e7e7e7}
    .v11-gallery-preview button:first-child{grid-row:1/3}
    .v11-gallery-preview img{width:100%;height:100%;object-fit:cover;display:block}
    .v11-open-gallery{width:100%;height:46px;border:1px solid #d6d1cb;background:rgba(255,255,255,.72);border-radius:999px;margin-top:14px;font-size:13.5px}

    .v11-tabs{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin:0 -20px 18px;padding:0 20px}.v11-tabs::-webkit-scrollbar{display:none}
    .v11-pill{border:1px solid #dcdcdc;background:#fff;border-radius:999px;padding:9px 14px;white-space:nowrap;font-size:12.8px;font-weight:400}
    .v11-pill.active{background:#111!important;color:#fff!important;border-color:#111!important}
    .v11-services{display:grid;gap:10px}
    .v11-service{border:1px solid #e0e0e0;border-radius:17px;padding:15px 14px 15px 16px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center;background:#fff}
    .v11-service-name{font-size:15.5px;line-height:1.32;font-weight:400}
    .v11-service-price{font-size:13.5px;color:#747474;margin-top:9px}
    .v11-service-book{height:38px;border:0;background:#111!important;color:#fff!important;border-radius:999px;padding:0 14px;font-size:12.5px;font-weight:500;white-space:nowrap}
    .v11-show-more{width:100%;height:45px;border:1px solid #dadada;background:#fff;border-radius:999px;margin-top:13px;font-size:13.5px}

    .v11-team-head,.v11-reviews-head{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:24px}
    .v11-team-head h2,.v11-reviews-head h2{margin:0}
    .v11-team-all,.v11-reviews-all{border:0;background:transparent;padding:0;font-size:14px;color:#6d4cf6!important;text-decoration:none;white-space:nowrap}
    .v11-team-rail{display:flex;gap:22px;overflow-x:auto;scrollbar-width:none;margin:0 -20px;padding:0 20px 6px;scroll-snap-type:x proximity}.v11-team-rail::-webkit-scrollbar{display:none}
    .v11-team-card{width:126px;flex:0 0 126px;border:0;background:transparent;padding:0;text-align:center;scroll-snap-align:start}
    .v11-avatar-wrap{position:relative;width:116px;height:116px;margin:0 auto 18px}
    .v11-avatar{width:116px;height:116px;border-radius:50%;background:linear-gradient(145deg,#e9e9e9,#d9dddd);border:1px solid rgba(0,0,0,.06);display:grid;place-items:center;font-size:34px;font-weight:400;color:#646464}
    .v11-team-badge{position:absolute;left:50%;bottom:-13px;transform:translateX(-50%);height:33px;min-width:80px;padding:0 11px;border-radius:999px;background:#fff;border:1px solid #dedede;box-shadow:0 3px 10px rgba(0,0,0,.04);display:flex;align-items:center;justify-content:center;gap:5px;font-size:11.5px;font-weight:500;white-space:nowrap}
    .v11-team-badge .star{color:#f7b500;font-size:16px}
    .v11-team-name{font-size:17px;line-height:1.15;font-weight:500;margin-top:2px}
    .v11-team-role{font-size:13.5px;line-height:1.25;margin-top:5px;color:#333}
    .v11-team-cat{font-size:12.5px;line-height:1.25;margin-top:3px;color:#8a8a8a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

    .v11-review-count{border:1px solid #ddd;border-radius:999px;padding:3px 8px;font-size:13px;color:#777;font-weight:400;margin-left:6px}
    .v11-score{padding:4px 0 28px;text-align:center}
    .v11-score-visual{position:relative;width:260px;height:150px;margin:0 auto 5px;display:grid;place-items:center}
    .v11-score-number{font-size:76px;letter-spacing:-.065em;font-weight:500;line-height:1}
    .v11-score-star{position:absolute;color:#f7b500;line-height:1;text-shadow:0 1px 0 rgba(0,0,0,.03)}
    .v11-score-star.s1{font-size:30px;left:28px;top:18px}.v11-score-star.s2{font-size:42px;left:12px;top:67px}.v11-score-star.s3{font-size:24px;left:58px;bottom:8px}.v11-score-star.s4{font-size:31px;right:28px;top:19px}.v11-score-star.s5{font-size:42px;right:9px;top:70px}
    .v11-score-title{font-size:21px;font-weight:500;margin-top:1px}.v11-score-copy{font-size:13.5px;line-height:1.45;margin:7px auto 0;max-width:310px;color:#555}
    .v11-review-marquee{overflow:hidden;margin:0 -20px;touch-action:pan-y}
    .v11-review-track{display:flex;width:max-content;gap:10px;padding:0 20px;animation:v11Marquee 105s linear infinite;will-change:transform}
    .v11-review-track.paused{animation-play-state:paused}
    @keyframes v11Marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
    .v11-review-card{width:286px;min-height:154px;border:1px solid #dfdad4;border-radius:18px;padding:16px;background:#fff;text-align:left;text-decoration:none;box-shadow:0 3px 12px rgba(0,0,0,.025)}
    .v11-review-name{font-size:14px;font-weight:500}.v11-review-stars{color:#f7b500;font-size:13px;margin:6px 0 9px;letter-spacing:1px}.v11-review-text{font-size:13px;line-height:1.48;color:#454545}

    .v11-visit-list{display:grid}.v11-visit-row{display:grid;grid-template-columns:34px 1fr;gap:10px;padding:14px 0;border-bottom:1px solid #e9e9e9}.v11-visit-row svg{width:19px!important;height:19px!important;margin-top:2px}.v11-visit-row strong{font-size:14px;font-weight:500;display:block;margin-bottom:3px}.v11-visit-row span{font-size:13px;color:#666;line-height:1.45}
    .v11-map{width:100%;height:235px;border:0;border-radius:18px;margin-top:18px;background:#eee}
    .v11-visit-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}.v11-visit-actions a{height:46px;border:1px solid #d9d9d9;border-radius:999px;display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:13.5px}.v11-visit-actions a:last-child{background:#111!important;color:#fff!important;border-color:#111!important}

    .v11-bookbar{position:fixed;left:0;right:0;bottom:0;z-index:180;background:rgba(255,255,255,.97);backdrop-filter:blur(16px);border-top:1px solid #e6e6e6;padding:10px 18px calc(10px + env(safe-area-inset-bottom));display:flex;align-items:center;justify-content:space-between;gap:14px;transform:translateY(115%);transition:transform .28s ease}
    .v11-bookbar.show{transform:translateY(0)}.v11-bookbar.hide{transform:translateY(115%)}
    .v11-book-count{font-size:13.5px;color:#777;line-height:1.2;white-space:nowrap}.v11-book-count strong{color:#111;font-weight:500}
    .v11-bookbar button{height:47px;border:0;border-radius:999px;background:#0d0d0d!important;color:#fff!important;padding:0 24px;font-size:14.5px;font-weight:500;white-space:nowrap}

    .v11-footer{border-top:1px solid #000;background:#101010;color:#fff;text-align:center;padding:34px 20px 42px;font-size:16px;font-weight:500;letter-spacing:.01em}

    .v11-overlay{position:fixed;inset:0;z-index:310;background:#fff;display:none;overflow:auto}.v11-overlay.open{display:block}
    .v11-gallery-head{position:sticky;top:0;background:#fff;z-index:3;padding:17px 20px 10px;border-bottom:1px solid rgba(0,0,0,.04)}
    .v11-gallery-back{width:42px;height:42px;border:0;background:transparent;padding:8px}.v11-gallery-title{font-size:32px;line-height:1.05;font-weight:500;margin:18px 0 4px}.v11-gallery-sub{font-size:15px;color:#858585}
    .v11-gallery-tabs{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:18px 20px}.v11-gallery-tabs::-webkit-scrollbar{display:none}.v11-gallery-tabs button{border:1px solid #ddd;border-radius:999px;background:#fff;padding:10px 15px;white-space:nowrap;font-size:13px}.v11-gallery-tabs button.active{background:#111!important;color:#fff!important;border-color:#111!important}
    .v11-gallery-list{padding:0 20px 30px;display:grid;gap:13px}.v11-gallery-list img{width:100%;border-radius:17px;display:block}

    .v11-master-sheet,.v11-book-sheet{position:fixed;inset:0;z-index:320;background:rgba(0,0,0,.3);display:none;align-items:flex-end}.v11-master-sheet.open,.v11-book-sheet.open{display:flex}
    .v11-master-panel{width:100%;height:93vh;background:#fff;border-radius:29px 29px 0 0;overflow:auto;position:relative;padding-bottom:96px}
    .v11-master-close{position:absolute;right:18px;top:18px;width:42px;height:42px;border:0;background:transparent;padding:8px;z-index:5}
    .v11-profile-hero{text-align:center;padding:50px 24px 26px}.v11-profile-avatar{width:150px;height:150px;border-radius:50%;background:linear-gradient(145deg,#e9e9e9,#d9dddd);display:grid;place-items:center;margin:0 auto 15px;font-size:46px;color:#616161}.v11-profile-name{font-size:30px;font-weight:500}.v11-profile-role{font-size:17px;margin-top:7px}.v11-profile-cat{font-size:14px;color:#888;margin-top:6px}
    .v11-profile-tabs{position:sticky;top:0;z-index:4;background:#fff;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:12px 20px;border-bottom:1px solid #e7e7e7}.v11-profile-tabs::-webkit-scrollbar{display:none}.v11-profile-tabs button{border:1px solid #ddd;background:#fff;border-radius:999px;padding:10px 16px;white-space:nowrap;font-size:13.5px}.v11-profile-tabs button.active{background:#111!important;color:#fff!important;border-color:#111!important}
    .v11-profile-content{padding:25px 20px}.v11-profile-content h3{font-size:23px;font-weight:500;margin:0 0 17px}.v11-profile-content p{font-size:14px;line-height:1.55;margin:0;color:#333}.v11-profile-service{border:1px solid #dedede;border-radius:17px;padding:15px;margin-bottom:9px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center}.v11-profile-service strong{font-size:14.5px;font-weight:400}.v11-profile-service span{display:block;color:#888;font-size:12.5px;margin-top:8px}.v11-profile-service button{border:0;background:#111!important;color:#fff!important;border-radius:999px;padding:9px 12px;font-size:12.5px}
    .v11-profile-book{position:fixed;left:20px;right:20px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:330;height:53px;border:0;border-radius:999px;background:#0d0d0d!important;color:#fff!important;font-size:15px;font-weight:500}

    .v11-book-panel{width:100%;background:#fff;border-radius:28px 28px 0 0;padding:22px 20px calc(24px + env(safe-area-inset-bottom))}.v11-book-panel h3{font-size:25px;font-weight:500;margin:0 0 7px}.v11-book-panel p{font-size:13.5px;line-height:1.5;color:#666;margin:0 0 18px}.v11-book-actions{display:grid;gap:8px}.v11-book-actions a,.v11-book-actions button{height:49px;border:1px solid #ddd;border-radius:999px;display:flex;align-items:center;justify-content:center;text-decoration:none;background:#fff}.v11-book-actions a:first-child{background:#111!important;color:#fff!important;border-color:#111!important}
  }
  @media(min-width:768px){#stluxe-clean-v11{display:none!important}}
  `;
  document.head.appendChild(style);

  const root=document.createElement('div');
  root.id='stluxe-clean-v11';

  const navItems=[
    ['overview','Общие сведения'],
    ['gallery','Галерея'],
    ['services','Услуги'],
    ['team','Команда'],
    ['reviews','Отзывы'],
    ['visit','Визит']
  ];

  function navHTML(extra){
    return '<nav class="v11-nav '+extra+'">'+navItems.map((n,i)=>'<button type="button" data-nav="'+n[0]+'" class="'+(i===0?'active':'')+'">'+n[1]+'</button>').join('')+'</nav>';
  }

  function heroHTML(){
    return heroPhotos.map((p,i)=>'<button class="v11-hero-slide" type="button" data-gallery-open="'+p.cat+'" data-hero-index="'+i+'"><img src="'+p.src+'" alt="'+p.alt+'"></button>').join('');
  }

  function galleryPreviewHTML(){
    return galleryPhotos.slice(0,3).map(p=>'<button type="button" data-gallery-open="'+p.cat+'"><img src="'+p.src+'" alt="'+p.alt+'"></button>').join('');
  }

  function serviceTabsHTML(){
    return [
      ['all','Все'],['nails','Ногти'],['hair','Волосы'],['face','Косметология'],['brows','Брови'],['depilation','Депиляция']
    ].map((t,i)=>'<button type="button" class="v11-pill '+(i===0?'active':'')+'" data-service-cat="'+t[0]+'">'+t[1]+'</button>').join('');
  }

  function teamHTML(){
    return masters.map(m=>'<button class="v11-team-card" type="button" data-master="'+m.id+'"><div class="v11-avatar-wrap"><div class="v11-avatar">'+m.initial+'</div><div class="v11-team-badge"><span class="star">★</span><span>STLuxe</span></div></div><div class="v11-team-name">'+m.name+'</div><div class="v11-team-role">'+m.role+'</div><div class="v11-team-cat">'+m.category+'</div></button>').join('');
  }

  function reviewCardsHTML(){
    return reviews.concat(reviews).map(r=>'<a class="v11-review-card" href="'+YANDEX_REVIEWS+'" target="_blank" rel="noopener"><div class="v11-review-name">'+r[0]+'</div><div class="v11-review-stars">★★★★★</div><div class="v11-review-text">'+r[1]+'</div></a>').join('');
  }

  root.innerHTML=`
    ${navHTML('v11-nav-static')}
    ${navHTML('v11-nav-sticky')}
    <main>
      <section class="v11-hero-media" aria-label="Фотографии STLuxe">
        <div class="v11-hero-track" id="v11HeroTrack">${heroHTML()}</div>
        <div class="v11-counter" id="v11HeroCounter">1 / ${heroPhotos.length}</div>
      </section>

      <section class="v11-overview" id="overview">
        <h1>STLuxe</h1>
        <div class="v11-type">Салон красоты</div>
        <div class="v11-rating"><span class="star-char">★</span><span>${RATING}</span><span class="muted">${RATINGS_COUNT} оценок</span></div>
        <div class="v11-hours" id="v11Hours">${icons.clock}<span>Вт–Вс 10:00–20:00</span></div>
        <div class="v11-location">${icons.pin}<span>${ADDRESS}</span></div>
        <h2 class="v11-overview-title">Общие сведения</h2>
        <p class="v11-overview-copy clamped" id="v11OverviewCopy">STLuxe — салон красоты в Ивантеевке. В салоне доступны маникюр и педикюр, парикмахерские услуги, косметология, оформление бровей и ресниц, перманентный макияж, шугаринг и восковая депиляция. В карточке салона также отмечены предварительная запись, Wi‑Fi и подарочные сертификаты.</p>
        <button class="v11-more" id="v11More" type="button">Подробнее</button>
      </section>

      <section class="v11-section v11-tone-gallery" id="gallery">
        <h2>Портфолио</h2>
        <div class="v11-gallery-preview">${galleryPreviewHTML()}</div>
        <button class="v11-open-gallery" type="button" data-gallery-open="all">Открыть галерею</button>
      </section>

      <section class="v11-section v11-tone-services" id="services">
        <h2>Услуги</h2>
        <div class="v11-tabs" id="v11ServiceTabs">${serviceTabsHTML()}</div>
        <div class="v11-services" id="v11Services"></div>
        <button class="v11-show-more" id="v11ServicesMore" type="button">Посмотреть ещё</button>
      </section>

      <section class="v11-section v11-tone-team" id="team">
        <div class="v11-team-head"><h2>Команда</h2><button class="v11-team-all" id="v11TeamAll" type="button">Посмотреть все</button></div>
        <div class="v11-team-rail" id="v11TeamRail">${teamHTML()}</div>
      </section>

      <section class="v11-section v11-tone-reviews" id="reviews">
        <div class="v11-reviews-head"><h2>Отзывы <span class="v11-review-count">${REVIEWS_COUNT}</span></h2><a class="v11-reviews-all" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener">Посмотреть все</a></div>
        <div class="v11-score">
          <div class="v11-score-visual" aria-label="Рейтинг ${RATING}">
            <span class="v11-score-star s1">★</span><span class="v11-score-star s2">★</span><span class="v11-score-star s3">★</span><span class="v11-score-number">${RATING}</span><span class="v11-score-star s4">★</span><span class="v11-score-star s5">★</span>
          </div>
          <div class="v11-score-title">Очень рекомендуют</div>
          <div class="v11-score-copy">${REVIEWS_COUNT} отзывов клиентов на Яндекс Картах</div>
        </div>
        <div class="v11-review-marquee" id="v11ReviewMarquee"><div class="v11-review-track" id="v11ReviewTrack">${reviewCardsHTML()}</div></div>
      </section>

      <section class="v11-section v11-tone-visit" id="visit">
        <h2>Визит</h2>
        <div class="v11-visit-list">
          <div class="v11-visit-row">${icons.pin}<div><strong>Адрес</strong><span>${ADDRESS}</span></div></div>
          <div class="v11-visit-row">${icons.clock}<div><strong>Часы работы</strong><span>Понедельник — выходной<br>Вторник–воскресенье — 10:00–20:00</span></div></div>
          <div class="v11-visit-row">${icons.phone}<div><strong>Телефон</strong><span>+7 (916) 355-22-22</span></div></div>
        </div>
        <iframe class="v11-map" loading="lazy" src="https://yandex.ru/map-widget/v1/?text=%D0%98%D0%B2%D0%B0%D0%BD%D1%82%D0%B5%D0%B5%D0%B2%D0%BA%D0%B0%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B%2C%2016&z=16" title="Карта STLuxe"></iframe>
        <div class="v11-visit-actions"><a href="${YANDEX}" target="_blank" rel="noopener">Маршрут</a><a href="tel:${PHONE}">Позвонить</a></div>
      </section>
    </main>

    <footer class="v11-footer">Цифровой офис TANEM.RU</footer>

    <div class="v11-bookbar" id="v11Bookbar"><div class="v11-book-count">Доступно <strong>${services.length} услуг</strong></div><button type="button" data-book>Записаться</button></div>

    <div class="v11-overlay" id="v11Gallery">
      <div class="v11-gallery-head"><button class="v11-gallery-back" id="v11GalleryClose" type="button">${icons.back}</button><div class="v11-gallery-title">Галерея изображений</div><div class="v11-gallery-sub">STLuxe</div></div>
      <div class="v11-gallery-tabs" id="v11GalleryTabs"></div>
      <div class="v11-gallery-list" id="v11GalleryList"></div>
    </div>

    <div class="v11-master-sheet" id="v11MasterSheet"><div class="v11-master-panel" id="v11MasterPanel"><button class="v11-master-close" id="v11MasterClose" type="button">${icons.close}</button><div id="v11MasterBody"></div></div></div>

    <div class="v11-book-sheet" id="v11BookSheet"><div class="v11-book-panel"><h3>Запись в STLuxe</h3><p>Выберите удобный способ связи с салоном.</p><div class="v11-book-actions"><a href="tel:${PHONE}">Позвонить</a><a href="${YANDEX}" target="_blank" rel="noopener">Открыть Яндекс Карты</a><button type="button" id="v11BookClose">Закрыть</button></div></div></div>
  `;
  document.body.appendChild(root);

  const $=(s,c=root)=>c.querySelector(s);
  const $$=(s,c=root)=>Array.from(c.querySelectorAll(s));

  function setHours(){
    try{
      const parts=new Intl.DateTimeFormat('en-US',{timeZone:'Europe/Moscow',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());
      const obj={};parts.forEach(p=>obj[p.type]=p.value);
      const days={Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6,Sun:0};
      const day=days[obj.weekday];const mins=parseInt(obj.hour,10)*60+parseInt(obj.minute,10);
      const box=$('#v11Hours');const text=box.querySelector('span');
      const open=day!==1 && mins>=600 && mins<1200;
      box.classList.toggle('open',open);box.classList.toggle('closed',!open);
      if(open) text.textContent='Открыто до 20:00';
      else if(day!==1 && mins<600) text.textContent='Закрыто, откроется в 10:00';
      else text.textContent='Закрыто';
    }catch(e){}
  }
  setHours();

  const heroTrack=$('#v11HeroTrack');
  heroTrack.addEventListener('scroll',()=>{
    const i=Math.max(0,Math.min(heroPhotos.length-1,Math.round(heroTrack.scrollLeft/heroTrack.clientWidth)));
    $('#v11HeroCounter').textContent=(i+1)+' / '+heroPhotos.length;
  },{passive:true});

  $('#v11More').addEventListener('click',e=>{
    $('#v11OverviewCopy').classList.remove('clamped');e.currentTarget.remove();
  });

  let serviceCat='all';let servicesExpanded=false;
  function filteredServices(){return services.filter(s=>serviceCat==='all'||s[0]===serviceCat);}
  function renderServices(){
    const list=filteredServices();const shown=servicesExpanded?list:list.slice(0,6);
    $('#v11Services').innerHTML=shown.map((s,i)=>'<article class="v11-service"><div><div class="v11-service-name">'+s[1]+'</div><div class="v11-service-price">'+s[2]+'</div></div><button type="button" class="v11-service-book" data-book data-service="'+encodeURIComponent(s[1])+'">Забронировать</button></article>').join('');
    const more=$('#v11ServicesMore');more.style.display=list.length>6?'block':'none';more.textContent=servicesExpanded?'Свернуть':'Посмотреть ещё';bindBookButtons();
  }
  renderServices();
  $$('#v11ServiceTabs [data-service-cat]').forEach(btn=>btn.addEventListener('click',()=>{
    serviceCat=btn.dataset.serviceCat;servicesExpanded=false;$$('#v11ServiceTabs .v11-pill').forEach(x=>x.classList.toggle('active',x===btn));renderServices();
  }));
  $('#v11ServicesMore').addEventListener('click',()=>{servicesExpanded=!servicesExpanded;renderServices();});

  const galleryTabs=[['all','Все'],['salon','Салон'],['nails','Ногти'],['hair','Волосы']];
  let galleryCat='all';
  function renderGalleryTabs(){
    $('#v11GalleryTabs').innerHTML=galleryTabs.map(t=>'<button type="button" data-gallery-cat="'+t[0]+'" class="'+(t[0]===galleryCat?'active':'')+'">'+t[1]+'</button>').join('');
    $$('#v11GalleryTabs [data-gallery-cat]').forEach(b=>b.addEventListener('click',()=>{galleryCat=b.dataset.galleryCat;renderGalleryTabs();renderGalleryList();}));
  }
  function renderGalleryList(){
    const arr=galleryPhotos.filter(p=>galleryCat==='all'||p.cat===galleryCat);
    $('#v11GalleryList').innerHTML=arr.map(p=>'<img src="'+p.src+'" alt="'+p.alt+'">').join('');
  }
  function openGallery(cat){galleryCat=galleryTabs.some(t=>t[0]===cat)?cat:'all';renderGalleryTabs();renderGalleryList();$('#v11Gallery').classList.add('open');document.body.style.overflow='hidden';}
  $$('[data-gallery-open]').forEach(b=>b.addEventListener('click',()=>openGallery(b.dataset.galleryOpen)));
  $('#v11GalleryClose').addEventListener('click',()=>{$('#v11Gallery').classList.remove('open');document.body.style.overflow='';});

  const reviewTrack=$('#v11ReviewTrack');
  let reviewResumeTimer=null;
  function pauseReviews(){clearTimeout(reviewResumeTimer);reviewTrack.classList.add('paused');}
  function resumeReviews(){clearTimeout(reviewResumeTimer);reviewResumeTimer=setTimeout(()=>reviewTrack.classList.remove('paused'),500);}
  $('#v11ReviewMarquee').addEventListener('pointerdown',pauseReviews,{passive:true});
  $('#v11ReviewMarquee').addEventListener('pointerup',resumeReviews,{passive:true});
  $('#v11ReviewMarquee').addEventListener('pointercancel',resumeReviews,{passive:true});
  $('#v11ReviewMarquee').addEventListener('pointerleave',e=>{if(e.pointerType==='mouse') resumeReviews();},{passive:true});

  $('#v11TeamAll').addEventListener('click',()=>{$('#v11TeamRail').scrollTo({left:$('#v11TeamRail').scrollWidth,behavior:'smooth'});});

  function masterById(id){return masters.find(m=>m.id===id);}
  function masterServices(m){return services.filter(s=>m.serviceCats.includes(s[0]));}
  function masterReviews(m){return reviews.filter(r=>m.reviewNames.includes(r[0]));}
  function masterPortfolio(m){
    if(m.serviceCats.includes('hair')) return galleryPhotos.filter(p=>p.cat==='hair'||p.cat==='nails');
    if(m.serviceCats.includes('nails')) return galleryPhotos.filter(p=>p.cat==='nails');
    return [];
  }
  function masterTabContent(m,tab){
    if(tab==='profile') return '<div class="v11-profile-content"><h3>Профиль</h3><p>'+m.profile+'</p></div>';
    if(tab==='services'){
      const arr=masterServices(m);return '<div class="v11-profile-content"><h3>Услуги</h3>'+(arr.length?arr.map(s=>'<div class="v11-profile-service"><div><strong>'+s[1]+'</strong><span>'+s[2]+'</span></div><button type="button" data-book>Забронировать</button></div>').join(''):'<p>Услуги специалиста будут добавлены после подтверждения салоном.</p>')+'</div>';
    }
    if(tab==='portfolio'){
      const arr=masterPortfolio(m);return '<div class="v11-profile-content"><h3>Портфолио</h3>'+(arr.length?'<div class="v11-gallery-list" style="padding:0">'+arr.map(p=>'<img src="'+p.src+'" alt="'+p.alt+'">').join('')+'</div>':'<p>Персональное портфолио специалиста пока не подтверждено.</p>')+'</div>';
    }
    const arr=masterReviews(m);return '<div class="v11-profile-content"><h3>Отзывы</h3>'+(arr.length?arr.map(r=>'<a class="v11-review-card" style="display:block;width:100%;margin-bottom:10px" href="'+YANDEX_REVIEWS+'" target="_blank" rel="noopener"><div class="v11-review-name">'+r[0]+'</div><div class="v11-review-stars">★★★★★</div><div class="v11-review-text">'+r[1]+'</div></a>').join(''):'<p>Персональные отзывы специалиста пока не подтверждены.</p>')+'</div>';
  }
  function openMaster(id){
    const m=masterById(id);if(!m)return;
    $('#v11MasterBody').innerHTML='<div class="v11-profile-hero"><div class="v11-profile-avatar">'+m.initial+'</div><div class="v11-profile-name">'+m.name+'</div><div class="v11-profile-role">'+m.role+'</div><div class="v11-profile-cat">'+m.category+'</div></div><div class="v11-profile-tabs" id="v11ProfileTabs"><button class="active" data-profile-tab="profile">Профиль</button><button data-profile-tab="services">Услуги</button><button data-profile-tab="portfolio">Портфолио</button><button data-profile-tab="reviews">Отзывы</button></div><div id="v11ProfileContent">'+masterTabContent(m,'profile')+'</div><button class="v11-profile-book" type="button" data-book>Забронировать</button>';
    $$('#v11ProfileTabs [data-profile-tab]').forEach(b=>b.addEventListener('click',()=>{$$('#v11ProfileTabs button').forEach(x=>x.classList.toggle('active',x===b));$('#v11ProfileContent').innerHTML=masterTabContent(m,b.dataset.profileTab);bindBookButtons();}));
    $('#v11MasterSheet').classList.add('open');document.body.style.overflow='hidden';bindBookButtons();
  }
  $$('[data-master]').forEach(b=>b.addEventListener('click',()=>openMaster(b.dataset.master)));
  $('#v11MasterClose').addEventListener('click',()=>{$('#v11MasterSheet').classList.remove('open');document.body.style.overflow='';});
  $('#v11MasterSheet').addEventListener('click',e=>{if(e.target===$('#v11MasterSheet')){$('#v11MasterSheet').classList.remove('open');document.body.style.overflow='';}});

  function openBook(){
    $('#v11BookSheet').classList.add('open');document.body.style.overflow='hidden';
  }
  function bindBookButtons(){$$('[data-book]').forEach(b=>{if(b.dataset.bound)return;b.dataset.bound='1';b.addEventListener('click',openBook);});}
  bindBookButtons();
  $('#v11BookClose').addEventListener('click',()=>{$('#v11BookSheet').classList.remove('open');document.body.style.overflow='';});
  $('#v11BookSheet').addEventListener('click',e=>{if(e.target===$('#v11BookSheet')){$('#v11BookSheet').classList.remove('open');document.body.style.overflow='';}});

  const sectionIds=navItems.map(n=>n[0]);
  let activeSection='overview';
  function syncNavTo(id){
    if(!id||id===activeSection && $$('.v11-nav button.active').length===2) return;
    activeSection=id;
    $$('.v11-nav').forEach(nav=>{
      const buttons=$$('button[data-nav]',nav);
      buttons.forEach(b=>b.classList.toggle('active',b.dataset.nav===id));
      const active=buttons.find(b=>b.dataset.nav===id);
      if(active){
        const left=active.offsetLeft-(nav.clientWidth-active.offsetWidth)/2;
        nav.scrollTo({left:Math.max(0,left),behavior:'smooth'});
      }
    });
  }
  $$('.v11-nav button[data-nav]').forEach(btn=>btn.addEventListener('click',()=>{
    const el=root.querySelector('#'+btn.dataset.nav);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});
  }));

  const stickyNav=$('.v11-nav-sticky');const bookbar=$('#v11Bookbar');const overview=$('#overview');const visit=$('#visit');
  let ticking=false;
  function updateScrollState(){
    ticking=false;
    const marker=64;
    let current='overview';
    sectionIds.forEach(id=>{const el=root.querySelector('#'+id);if(el && el.getBoundingClientRect().top<=marker+18) current=id;});
    syncNavTo(current);
    const overviewBottom=overview.getBoundingClientRect().bottom;
    stickyNav.classList.toggle('show',overviewBottom<=0);
    const visitTop=visit.getBoundingClientRect().top;
    const passedMain=overviewBottom<=0;
    const inVisit=visitTop<=window.innerHeight-90;
    bookbar.classList.toggle('show',passedMain && !inVisit);
    bookbar.classList.toggle('hide',inVisit);
  }
  function onScroll(){if(!ticking){ticking=true;requestAnimationFrame(updateScrollState);}}
  window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll,{passive:true});updateScrollState();

  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){
      $('#v11Gallery').classList.remove('open');$('#v11MasterSheet').classList.remove('open');$('#v11BookSheet').classList.remove('open');document.body.style.overflow='';
    }
  });
})();