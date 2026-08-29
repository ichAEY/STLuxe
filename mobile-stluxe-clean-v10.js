(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const YANDEX='https://yandex.com/maps/org/beauty_salon_stluxe/51087098664/';
  const YANDEX_REVIEWS='https://yandex.com/maps/org/beauty_salon_stluxe/51087098664/reviews/';
  const PHONE='+79163552222';
  const ADDRESS='Московская область, Ивантеевка, ул. Победы, 16';

  const salonPhotos=[
    'assets/images/salon-reception.webp',
    'assets/images/salon-nail-zone.webp',
    'assets/images/yandex-gallery/stluxe-01.webp',
    'assets/images/yandex-gallery/stluxe-02.webp',
    'assets/images/yandex-gallery/stluxe-03.webp'
  ];

  const portfolioPhotos=[
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

  const reviews=[
    ['Галина Б.','Давно ходит в STLuxe, рекомендует Татьяну и Алёну и отдельно отмечает атмосферу и отношение к клиентам.'],
    ['Юлия Логинова','Хвалит профессиональную команду, продуманный интерьер и удобное расположение салона.'],
    ['Олеся Полянская','Называет салон уютным и стильным, рекомендует Татьяну и Алёну и отмечает результат работы.'],
    ['мария н.','Пришла по рекомендации и отдельно отметила атмосферу, интерьер и работу Татьяны.'],
    ['Ольга К.','Отмечает чистоту, стерильность, дружелюбную атмосферу и хороший сервис.'],
    ['Оксана Семина','Особенно хвалит Татьяну, маникюр, кератин, окрашивание и стрижку.'],
    ['Дарья К.','Пишет об уюте, чистоте, внимании к пожеланиям и стойком маникюре.'],
    ['Ольга Г.','Благодарит Татьяну за окрашивание и кератин.'],
    ['Лариса Ф.','Отмечает стильный чистый салон, сервис и аккуратный маникюр.'],
    ['Мама Рита','Рекомендует косметолога Марию и отмечает качество препаратов.'],
    ['Елизавета С.','Отмечает вежливых мастеров, чистоту и качественные услуги.']
  ];

  const masters=[
    {id:'tatiana',name:'Татьяна',role:'Мастер',category:'Волосы · ногти',initial:'Т',profile:'Татьяна — владелец STLuxe и мастер широкого профиля. В отзывах клиенты отмечают её работу с волосами и ногтями.',serviceCats:['hair','nails'],reviewNames:['Галина Б.','Олеся Полянская','мария н.','Оксана Семина','Ольга Г.']},
    {id:'maria',name:'Мария',role:'Мастер',category:'Косметология',initial:'М',profile:'Мария — косметолог STLuxe. Клиенты отдельно рекомендуют её косметологические услуги.',serviceCats:['face','brows','lashes'],reviewNames:['Мама Рита']},
    {id:'alena',name:'Алёна',role:'Мастер',category:'STLuxe',initial:'А',profile:'Алёна — мастер STLuxe, которую клиенты отдельно рекомендуют в отзывах о салоне.',serviceCats:[],reviewNames:['Галина Б.','Олеся Полянская']},
    {id:'visual',name:'Мастер',role:'Мастер',category:'Карточка для визуализации',initial:'М',profile:'Дополнительная карточка показывает, как будет выглядеть профиль ещё одного специалиста после подтверждения данных салоном.',serviceCats:[],reviewNames:[]}
  ];

  const icon={
    clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    pin:'<svg class="filled-pin" viewBox="0 0 24 24"><path d="M12 2a8 8 0 0 0-8 8c0 5.6 8 12 8 12s8-6.4 8-12a8 8 0 0 0-8-8Zm0 11.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Z"/></svg>',
    close:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    back:'<svg viewBox="0 0 24 24"><path d="M19 12H5m6-6-6 6 6 6"/></svg>',
    pause:'<svg viewBox="0 0 24 24"><path d="M9 6v12M15 6v12"/></svg>',
    play:'<svg viewBox="0 0 24 24"><path d="m9 6 9 6-9 6Z"/></svg>',
    phone:'<svg viewBox="0 0 24 24"><path d="M5 3h4l2 5-3 2c1.6 3.2 3.8 5.4 7 7l2-3 5 2v4c0 1.1-.9 2-2 2C10.6 22 2 13.4 2 4a2 2 0 0 1 2-2Z"/></svg>'
  };

  const css=document.createElement('style');
  css.id='stluxe-clean-v10-style';
  css.textContent=`
  @media(max-width:767px){
    html,body{margin:0!important;padding:0!important;background:#fff!important;color:#111!important;overflow-x:hidden!important;-webkit-font-smoothing:antialiased}
    body>*:not(#stluxe-clean-v10):not(script):not(style){display:none!important}
    #stluxe-clean-v10{display:block!important;width:100%;background:#fff;color:#111;font-family:"Roobert","Roobert Regular","Helvetica Neue",Arial,sans-serif;font-weight:400}
    #stluxe-clean-v10 *{box-sizing:border-box}
    #stluxe-clean-v10 button,#stluxe-clean-v10 a{font:inherit;color:inherit}
    #stluxe-clean-v10 button{cursor:pointer}
    #stluxe-clean-v10 svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
    #stluxe-clean-v10 .filled-pin{fill:#111;stroke:none}
    .fx-nav{height:62px;display:flex;align-items:stretch;overflow-x:auto;scrollbar-width:none;background:#fff;border-bottom:1px solid #e7e7e7;padding:0 18px;gap:28px;white-space:nowrap;position:relative}
    .fx-nav::-webkit-scrollbar{display:none}
    .fx-nav button{position:relative;flex:0 0 auto;border:0;background:transparent;padding:0;color:#777;font-size:16px;line-height:62px;font-weight:400}
    .fx-nav button.active{color:#111}.fx-nav button.active:after{content:"";position:absolute;left:0;right:0;bottom:0;height:5px;border-radius:6px 6px 0 0;background:#111}
    .fx-nav-sticky{position:fixed;left:0;right:0;top:0;z-index:180;transform:translateY(-102%);transition:transform .24s ease;box-shadow:0 2px 10px rgba(0,0,0,.04)}.fx-nav-sticky.show{transform:translateY(0)}
    .fx-hero-media{position:relative;background:#f3f3f3;overflow:hidden}.fx-hero-track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}.fx-hero-track::-webkit-scrollbar{display:none}
    .fx-hero-slide{min-width:100%;height:74vw;min-height:285px;max-height:395px;scroll-snap-align:start;border:0;padding:0;background:#eee}.fx-hero-slide img{width:100%;height:100%;object-fit:cover;display:block}
    .fx-counter{position:absolute;right:16px;bottom:14px;background:rgba(20,20,20,.58);color:#fff;border-radius:999px;padding:7px 10px;font-size:12px;backdrop-filter:blur(8px)}
    .fx-hero{position:relative;margin-top:-22px;background:#fff;border-radius:24px 24px 0 0;padding:24px 20px 24px;z-index:3}.fx-hero h1{font-size:34px;line-height:1.04;letter-spacing:-.04em;font-weight:400;margin:0 0 7px}.fx-hero .type{font-size:21px;line-height:1.15;color:#858585;font-weight:400;margin:0 0 18px}
    .fx-rating{display:flex;align-items:center;gap:7px;font-size:15px;margin-bottom:14px}.fx-rating .star{color:#f5b400;font-size:19px}.fx-rating .muted{color:#777}
    .fx-hours{display:flex;align-items:center;gap:8px;font-size:14px;margin-bottom:13px}.fx-hours svg{width:18px;height:18px}.fx-hours.open{color:#16884d}.fx-hours.closed{color:#c06d20}
    .fx-location{display:flex;gap:10px;align-items:flex-start;background:#f1f1f1;border-radius:14px;padding:13px 14px;font-size:13px;line-height:1.4;margin-bottom:22px}.fx-location svg{flex:0 0 auto;width:18px!important;height:18px!important;margin-top:1px}
    .fx-overview-title{font-size:18px;font-weight:500;margin:0 0 9px}.fx-overview-copy{font-size:14px;line-height:1.52;color:#404040;margin:0;transition:max-height .25s ease}.fx-overview-copy.clamped{max-height:66px;overflow:hidden;position:relative}.fx-overview-copy.clamped:after{content:"";position:absolute;left:0;right:0;bottom:0;height:27px;background:linear-gradient(transparent,#fff)}
    .fx-more{border:0;background:transparent;padding:9px 0 0;text-decoration:underline;text-underline-offset:4px;font-size:13px}.fx-hero-book{width:100%;height:52px;border:0;border-radius:999px;background:#0d0d0d!important;color:#fff!important;font-size:16px;margin-top:22px;font-weight:500}
    .fx-bookbar{position:fixed;left:0;right:0;bottom:0;z-index:170;background:#fff;border-top:1px solid #e8e8e8;padding:10px 18px calc(10px + env(safe-area-inset-bottom));display:flex;align-items:center;justify-content:space-between;gap:14px;transform:translateY(110%);transition:transform .25s ease}.fx-bookbar.show{transform:translateY(0)}.fx-bookbar.hide-visit{transform:translateY(110%)}.fx-bookbar .count{font-size:15px;color:#777}.fx-bookbar .count strong{color:#111;font-weight:500}.fx-bookbar button{height:48px;border:0;border-radius:999px;background:#0d0d0d!important;color:#fff!important;padding:0 24px;font-size:15px;font-weight:500}
    .fx-section{padding:42px 20px;border-top:1px solid #ededed;scroll-margin-top:70px}.fx-section h2{font-size:28px;line-height:1.08;letter-spacing:-.035em;font-weight:500;margin:0 0 20px}.fx-section-sub{font-size:14px;color:#777;margin:-10px 0 22px;line-height:1.5}
    .fx-gallery-preview{display:grid;grid-template-columns:1.2fr .8fr;grid-template-rows:150px 150px;gap:8px}.fx-gallery-preview button{border:0;padding:0;border-radius:18px;overflow:hidden;background:#eee}.fx-gallery-preview button:first-child{grid-row:1/3}.fx-gallery-preview img{width:100%;height:100%;object-fit:cover}.fx-open-gallery{width:100%;height:48px;border:1px solid #dadada;background:#fff;border-radius:999px;margin-top:14px;font-size:14px}
    .fx-service-tabs,.fx-work-tabs{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin:0 -20px 18px;padding:0 20px}.fx-service-tabs::-webkit-scrollbar,.fx-work-tabs::-webkit-scrollbar{display:none}.fx-pill{border:1px solid #ddd;background:#fff;border-radius:999px;padding:10px 15px;white-space:nowrap;font-size:13px;font-weight:400}.fx-pill.active{background:#111!important;color:#fff!important;border-color:#111}
    .fx-services{display:grid;gap:10px}.fx-service{border:1px solid #e2e2e2;border-radius:18px;padding:16px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center}.fx-service-name{font-size:16px;line-height:1.3;font-weight:400}.fx-service-price{font-size:14px;color:#777;margin-top:12px}.fx-service button{height:38px;border:1px solid #cfcfcf;background:#fff;border-radius:999px;padding:0 14px;font-size:13px}.fx-show-more{width:100%;height:46px;border:1px solid #dadada;background:#fff;border-radius:999px;margin-top:14px;font-size:14px}
    .fx-team{display:grid;grid-template-columns:repeat(2,1fr);gap:22px 14px}.fx-master{border:0;background:transparent;padding:0;text-align:center}.fx-avatar{width:112px;height:112px;border-radius:50%;background:#eee;display:grid;place-items:center;margin:0 auto 10px;font-size:32px;color:#555;font-weight:400}.fx-master-name{font-size:18px;font-weight:500}.fx-master-role{font-size:14px;margin-top:3px}.fx-master-cat{font-size:12px;color:#888;margin-top:3px}
    .fx-reviews-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}.fx-reviews-top h2{margin:0;display:flex;align-items:center;gap:8px}.fx-review-count{border:1px solid #ddd;border-radius:999px;padding:3px 8px;font-size:14px;color:#777;font-weight:400}.fx-reviews-all{border:0;background:transparent;color:#6c53ff;font-size:15px}.fx-score{padding:22px 0 26px;text-align:center}.fx-score-main{display:flex;align-items:center;justify-content:center;gap:16px}.fx-score-main .stars{font-size:28px;color:#f5b400;line-height:1}.fx-score-main strong{font-size:80px;letter-spacing:-.06em;font-weight:500}.fx-score-title{font-size:24px;font-weight:500;margin-top:4px}.fx-score-copy{font-size:15px;line-height:1.45;margin:8px auto 0;max-width:330px;color:#444}
    .fx-review-controls{display:flex;justify-content:flex-end;margin-bottom:10px}.fx-pause{width:40px;height:40px;border:1px solid #ddd;border-radius:50%;background:#fff;display:grid;place-items:center}.fx-pause svg{width:17px;height:17px}.fx-review-marquee{overflow:hidden;margin:0 -20px}.fx-review-track{display:flex;width:max-content;gap:10px;padding:0 20px;animation:fxMarquee 35s linear infinite}.fx-review-track.paused{animation-play-state:paused}@keyframes fxMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}.fx-review-card{width:285px;min-height:150px;border:1px solid #e1e1e1;border-radius:18px;padding:16px;background:#fff;text-align:left;text-decoration:none}.fx-review-name{font-size:14px;font-weight:500}.fx-review-stars{color:#f5b400;font-size:13px;margin:6px 0 9px}.fx-review-text{font-size:13px;line-height:1.5;color:#4d4d4d}
    .fx-work-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.fx-work-grid button{border:0;padding:0;border-radius:16px;overflow:hidden;background:#eee;aspect-ratio:1/1.12}.fx-work-grid img{width:100%;height:100%;object-fit:cover}
    .fx-visit-list{display:grid;gap:0}.fx-visit-row{display:grid;grid-template-columns:36px 1fr;gap:10px;padding:14px 0;border-bottom:1px solid #e9e9e9}.fx-visit-row svg{width:19px;height:19px;margin-top:2px}.fx-visit-row strong{font-size:14px;font-weight:500;display:block;margin-bottom:3px}.fx-visit-row span{font-size:13px;color:#666;line-height:1.45}.fx-map{width:100%;height:240px;border:0;border-radius:18px;margin-top:18px;background:#eee}.fx-visit-actions{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}.fx-visit-actions a{height:46px;border:1px solid #d9d9d9;border-radius:999px;display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:14px}.fx-visit-actions a:last-child{background:#111;color:#fff;border-color:#111}
    .fx-footer{border-top:1px solid #000;background:#101010;color:#fff;text-align:center;padding:34px 20px 44px;font-size:16px;font-weight:500;letter-spacing:.01em}
    .fx-overlay{position:fixed;inset:0;z-index:300;background:#fff;display:none;overflow:auto}.fx-overlay.open{display:block}.fx-gallery-head{position:sticky;top:0;background:#fff;z-index:2;padding:20px 20px 12px}.fx-gallery-head button{width:42px;height:42px;border:0;background:transparent;padding:8px}.fx-gallery-title{font-size:34px;line-height:1.05;font-weight:500;margin:22px 0 5px}.fx-gallery-sub{font-size:16px;color:#858585}.fx-gallery-tabs{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:20px}.fx-gallery-tabs::-webkit-scrollbar{display:none}.fx-gallery-tabs button{border:1px solid #ddd;border-radius:999px;background:#fff;padding:11px 16px;white-space:nowrap;font-size:14px}.fx-gallery-tabs button.active{background:#111;color:#fff;border-color:#111}.fx-gallery-list{padding:0 20px 30px;display:grid;gap:14px}.fx-gallery-list img{width:100%;border-radius:18px;display:block}
    .fx-master-sheet{position:fixed;inset:0;z-index:310;background:rgba(0,0,0,.28);display:none;align-items:flex-end}.fx-master-sheet.open{display:flex}.fx-master-panel{width:100%;height:93vh;background:#fff;border-radius:30px 30px 0 0;overflow:auto;position:relative;padding-bottom:100px}.fx-master-close{position:absolute;right:20px;top:20px;width:42px;height:42px;border:0;background:transparent}.fx-master-close svg{width:26px;height:26px}.fx-profile-hero{text-align:center;padding:52px 24px 28px}.fx-profile-avatar{width:160px;height:160px;border-radius:50%;background:#e8e8e8;display:grid;place-items:center;margin:0 auto 16px;font-size:48px;color:#555}.fx-profile-name{font-size:32px;font-weight:500}.fx-profile-role{font-size:18px;margin-top:8px}.fx-profile-location{font-size:16px;color:#888;margin-top:8px}.fx-profile-tabs{position:sticky;top:0;z-index:2;background:#fff;display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:12px 20px;border-bottom:1px solid #e7e7e7}.fx-profile-tabs::-webkit-scrollbar{display:none}.fx-profile-tabs button{border:1px solid #ddd;background:#fff;border-radius:999px;padding:10px 16px;white-space:nowrap;font-size:14px}.fx-profile-tabs button.active{background:#111;color:#fff;border-color:#111}.fx-profile-content{padding:26px 20px}.fx-profile-content h3{font-size:24px;font-weight:500;margin:0 0 18px}.fx-profile-content p{font-size:15px;line-height:1.55;margin:0;color:#333}.fx-profile-service{border:1px solid #dedede;border-radius:17px;padding:16px;margin-bottom:10px;display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center}.fx-profile-service strong{font-size:15px;font-weight:400}.fx-profile-service span{display:block;color:#888;font-size:13px;margin-top:9px}.fx-profile-service button{border:1px solid #d0d0d0;background:#fff;border-radius:999px;padding:9px 12px;font-size:13px}.fx-profile-book{position:fixed;left:20px;right:20px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:320;height:54px;border:0;border-radius:999px;background:#0d0d0d!important;color:#fff!important;font-size:16px;font-weight:500}
    .fx-book-sheet{position:fixed;inset:0;z-index:340;background:rgba(0,0,0,.35);display:none;align-items:flex-end}.fx-book-sheet.open{display:flex}.fx-book-panel{width:100%;background:#fff;border-radius:28px 28px 0 0;padding:22px 20px calc(24px + env(safe-area-inset-bottom))}.fx-book-panel h3{font-size:26px;font-weight:500;margin:0 0 8px}.fx-book-panel p{font-size:14px;line-height:1.5;color:#666;margin:0 0 18px}.fx-book-actions{display:grid;gap:8px}.fx-book-actions a{height:50px;border:1px solid #ddd;border-radius:999px;display:flex;align-items:center;justify-content:center;text-decoration:none}.fx-book-actions a:first-child{background:#111;color:#fff;border-color:#111}
  }
  @media(min-width:768px){#stluxe-clean-v10{display:none!important}}`;
  document.head.appendChild(css);

  const root=document.createElement('div');root.id='stluxe-clean-v10';
  const navItems=[['photos','Фотографии'],['overview','Общие сведения'],['services','Услуги'],['team','Команда'],['reviews','Отзывы'],['portfolio','Портфолио'],['visit','Визит'],['more','Еще']];
  function navHTML(cls){return '<nav class="fx-nav '+cls+'">'+navItems.map((n,i)=>'<button type="button" data-nav="'+n[0]+'" class="'+(i===0?'active':'')+'">'+n[1]+'</button>').join('')+'</nav>'}
  function heroSlides(){return salonPhotos.map((src,i)=>'<button class="fx-hero-slide" type="button" data-hero-index="'+i+'"><img src="'+src+'" alt="STLuxe — фотография салона '+(i+1)+'" onerror="this.onerror=null;this.src=\''+(i%2?'assets/images/salon-nail-zone.webp':'assets/images/salon-reception.webp')+'\'"></button>').join('')}

  root.innerHTML=`${navHTML('fx-nav-static')}${navHTML('fx-nav-sticky')}<main>
    <section id="photos" class="fx-hero-media"><div class="fx-hero-track" id="fxHeroTrack">${heroSlides()}</div><div class="fx-counter" id="fxHeroCounter">1 / 5</div></section>
    <section class="fx-hero" id="overview"><h1>STLuxe</h1><div class="type">Салон красоты</div><div class="fx-rating"><span class="star">★</span><span>4,9</span><span class="muted">125 оценок</span></div><div class="fx-hours" id="fxHours">${icon.clock}<span>Вт–Вс 10:00–20:00</span></div><div class="fx-location">${icon.pin}<span>${ADDRESS}</span></div><h2 class="fx-overview-title">Общие сведения</h2><p class="fx-overview-copy clamped" id="fxOverviewCopy">STLuxe — салон красоты в Ивантеевке. В салоне доступны маникюр и педикюр, парикмахерские услуги, косметология, оформление бровей и ресниц, перманентный макияж, шугаринг и восковая депиляция. Также в карточке салона отмечены предварительная запись, Wi‑Fi и подарочные сертификаты.</p><button class="fx-more" id="fxMoreOverview" type="button">Подробнее</button><button class="fx-hero-book" data-book type="button">Записаться</button></section>
    <section class="fx-section" id="services"><h2>Услуги</h2><div class="fx-service-tabs" id="fxServiceTabs"><button class="fx-pill active" data-service-cat="all">Все</button><button class="fx-pill" data-service-cat="nails">Ногти</button><button class="fx-pill" data-service-cat="hair">Волосы</button><button class="fx-pill" data-service-cat="face">Косметология</button><button class="fx-pill" data-service-cat="brows">Брови</button><button class="fx-pill" data-service-cat="depilation">Депиляция</button></div><div class="fx-services" id="fxServices"></div><button class="fx-show-more" id="fxServicesMore" type="button">Посмотреть ещё</button></section>
    <section class="fx-section" id="team"><h2>Команда</h2><p class="fx-section-sub">Нажмите на мастера, чтобы открыть профиль.</p><div class="fx-team">${masters.map(m=>`<button class="fx-master" type="button" data-master="${m.id}"><div class="fx-avatar">${m.initial}</div><div class="fx-master-name">${m.name}</div><div class="fx-master-role">${m.role}</div><div class="fx-master-cat">${m.category}</div></button>`).join('')}</div></section>
    <section class="fx-section" id="reviews"><div class="fx-reviews-top"><h2>Отзывы <span class="fx-review-count">87</span></h2><a class="fx-reviews-all" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener">Посмотреть все</a></div><div class="fx-score"><div class="fx-score-main"><span class="stars">★ ★</span><strong>4,9</strong><span class="stars">★ ★</span></div><div class="fx-score-title">Очень рекомендуют</div><div class="fx-score-copy">Клиенты отмечают атмосферу, чистоту, внимание мастеров и качество результата.</div></div><div class="fx-review-controls"><button class="fx-pause" id="fxPauseReviews" type="button" aria-label="Остановить ленту">${icon.pause}</button></div><div class="fx-review-marquee"><div class="fx-review-track" id="fxReviewTrack">${reviews.concat(reviews).map(r=>`<a class="fx-review-card" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener"><div class="fx-review-name">${r[0]}</div><div class="fx-review-stars">★★★★★</div><div class="fx-review-text">${r[1]}</div></a>`).join('')}</div></div></section>
    <section class="fx-section" id="portfolio"><h2>Портфолио</h2><div class="fx-work-tabs" id="fxWorkTabs"><button class="fx-pill active" data-work-cat="all">Все</button><button class="fx-pill" data-work-cat="nails">Ногти</button><button class="fx-pill" data-work-cat="hair">Волосы</button></div><div class="fx-work-grid" id="fxWorkGrid">${portfolioPhotos.map((p,i)=>`<button type="button" data-work-index="${i}" data-work-cat-card="${p.cat}"><img src="${p.src}" alt="${p.alt}"></button>`).join('')}</div></section>
    <section class="fx-section" id="visit"><h2>Визит</h2><div class="fx-visit-list"><div class="fx-visit-row">${icon.pin}<div><strong>Адрес</strong><span>${ADDRESS}</span></div></div><div class="fx-visit-row">${icon.clock}<div><strong>Время работы</strong><span>Понедельник — выходной<br>Вторник–воскресенье — 10:00–20:00</span></div></div><div class="fx-visit-row">${icon.phone}<div><strong>Телефон</strong><span>+7 916 355-22-22</span></div></div></div><iframe class="fx-map" loading="lazy" src="https://yandex.ru/map-widget/v1/?mode=search&text=${encodeURIComponent('STLuxe Ивантеевка улица Победы 16')}&z=16"></iframe><div class="fx-visit-actions"><a href="${YANDEX}" target="_blank" rel="noopener">Маршрут</a><a href="tel:${PHONE}">Позвонить</a></div></section>
    <footer class="fx-footer">Цифровой офис TANEM.RU</footer></main>
    <div class="fx-bookbar" id="fxBookbar"><div class="count"><strong>70+</strong> услуг</div><button type="button" data-book>Записаться</button></div>
    <div class="fx-overlay" id="fxGallery"><div class="fx-gallery-head"><button id="fxGalleryClose" type="button" aria-label="Назад">${icon.back}</button><div class="fx-gallery-title">Галерея изображений</div><div class="fx-gallery-sub">STLuxe</div></div><div class="fx-gallery-tabs" id="fxGalleryTabs"><button class="active" data-gallery-cat="venue">Заведение <span>5</span></button><button data-gallery-cat="nails">Ногти <span>3</span></button><button data-gallery-cat="hair">Волосы <span>1</span></button></div><div class="fx-gallery-list" id="fxGalleryList"></div></div>
    <div class="fx-master-sheet" id="fxMasterSheet"><div class="fx-master-panel"><button class="fx-master-close" id="fxMasterClose" type="button">${icon.close}</button><div id="fxMasterBody"></div></div><button class="fx-profile-book" type="button" data-book>Забронировать</button></div>
    <div class="fx-book-sheet" id="fxBookSheet"><div class="fx-book-panel"><h3>Запись в STLuxe</h3><p>Подтверждённой прямой ссылки на онлайн-запись у нас нет, поэтому сейчас можно связаться с салоном напрямую.</p><div class="fx-book-actions"><a href="tel:${PHONE}">Позвонить</a><a href="${YANDEX}" target="_blank" rel="noopener">Открыть Яндекс Карты</a></div></div></div>`;
  document.body.appendChild(root);

  let serviceCat='all',servicesExpanded=false;
  function renderServices(){const list=services.filter(s=>serviceCat==='all'||s[0]===serviceCat);const shown=servicesExpanded?list:list.slice(0,5);root.querySelector('#fxServices').innerHTML=shown.map(s=>`<article class="fx-service"><div><div class="fx-service-name">${s[1]}</div><div class="fx-service-price">${s[2]}</div></div><button type="button" data-book>Забронировать</button></article>`).join('');root.querySelector('#fxServicesMore').style.display=list.length>5?'block':'none';root.querySelector('#fxServicesMore').textContent=servicesExpanded?'Свернуть':'Посмотреть ещё'}
  renderServices();
  root.querySelector('#fxServiceTabs').addEventListener('click',e=>{const b=e.target.closest('[data-service-cat]');if(!b)return;root.querySelectorAll('#fxServiceTabs .fx-pill').forEach(x=>x.classList.remove('active'));b.classList.add('active');serviceCat=b.dataset.serviceCat;servicesExpanded=false;renderServices()});
  root.querySelector('#fxServicesMore').addEventListener('click',()=>{servicesExpanded=!servicesExpanded;renderServices()});
  root.querySelector('#fxMoreOverview').addEventListener('click',function(){root.querySelector('#fxOverviewCopy').classList.remove('clamped');this.remove()});

  const heroTrack=root.querySelector('#fxHeroTrack'),counter=root.querySelector('#fxHeroCounter');
  heroTrack.addEventListener('scroll',()=>requestAnimationFrame(()=>{const i=Math.round(heroTrack.scrollLeft/(heroTrack.clientWidth||1));counter.textContent=(Math.min(i+1,5))+' / 5'}),{passive:true});
  heroTrack.addEventListener('click',e=>{if(e.target.closest('[data-hero-index]'))openGallery('venue')});
  const gallery=root.querySelector('#fxGallery'),galleryList=root.querySelector('#fxGalleryList');
  function openGallery(cat){gallery.classList.add('open');document.body.style.overflow='hidden';renderGallery(cat||'venue')}
  function renderGallery(cat){root.querySelectorAll('#fxGalleryTabs button').forEach(b=>b.classList.toggle('active',b.dataset.galleryCat===cat));const arr=cat==='venue'?salonPhotos:portfolioPhotos.filter(p=>p.cat===cat).map(p=>p.src);galleryList.innerHTML=arr.map((src,i)=>`<img src="${src}" alt="STLuxe фото ${i+1}" onerror="this.onerror=null;this.src='assets/images/salon-reception.webp'">`).join('')}
  root.querySelector('#fxGalleryClose').addEventListener('click',()=>{gallery.classList.remove('open');document.body.style.overflow=''});root.querySelector('#fxGalleryTabs').addEventListener('click',e=>{const b=e.target.closest('[data-gallery-cat]');if(b)renderGallery(b.dataset.galleryCat)});
  root.querySelector('#fxWorkTabs').addEventListener('click',e=>{const b=e.target.closest('[data-work-cat]');if(!b)return;root.querySelectorAll('#fxWorkTabs .fx-pill').forEach(x=>x.classList.remove('active'));b.classList.add('active');const cat=b.dataset.workCat;root.querySelectorAll('#fxWorkGrid [data-work-cat-card]').forEach(card=>card.style.display=(cat==='all'||card.dataset.workCatCard===cat)?'':'none')});
  root.querySelector('#fxWorkGrid').addEventListener('click',e=>{const c=e.target.closest('[data-work-index]');if(c)openGallery(portfolioPhotos[Number(c.dataset.workIndex)||0].cat)});

  let reviewsPaused=false;root.querySelector('#fxPauseReviews').addEventListener('click',function(){reviewsPaused=!reviewsPaused;root.querySelector('#fxReviewTrack').classList.toggle('paused',reviewsPaused);this.innerHTML=reviewsPaused?icon.play:icon.pause});
  const masterSheet=root.querySelector('#fxMasterSheet'),masterBody=root.querySelector('#fxMasterBody');
  function masterTabHTML(m,tab){if(tab==='profile')return `<div class="fx-profile-content"><h3>Профиль</h3><p>${m.profile}</p></div>`;if(tab==='services'){const ms=services.filter(s=>m.serviceCats.includes(s[0]));return `<div class="fx-profile-content"><h3>Услуги</h3>${ms.length?ms.slice(0,7).map(s=>`<div class="fx-profile-service"><div><strong>${s[1]}</strong><span>${s[2]}</span></div><button type="button" data-book>Забронировать</button></div>`).join(''):'<p>Точный список услуг этого мастера будет добавлен после подтверждения салоном.</p>'}</div>`}if(tab==='portfolio')return `<div class="fx-profile-content"><h3>Портфолио</h3><p>Персональная привязка работ к мастеру пока не подтверждена. В основном разделе показаны реальные работы салона STLuxe.</p></div>`;const rs=reviews.filter(r=>m.reviewNames.includes(r[0]));return `<div class="fx-profile-content"><h3>Отзывы</h3>${rs.length?rs.map(r=>`<div class="fx-profile-service"><div><strong>${r[0]}</strong><span>${r[1]}</span></div></div>`).join(''):'<p>Персональные отзывы будут добавлены после подтверждения данных.</p>'}</div>`}
  function openMaster(id){const m=masters.find(x=>x.id===id);if(!m)return;masterBody.innerHTML=`<div class="fx-profile-hero"><div class="fx-profile-avatar">${m.initial}</div><div class="fx-profile-name">${m.name}</div><div class="fx-profile-role">${m.role}</div><div class="fx-profile-location">${m.category}</div></div><div class="fx-profile-tabs"><button class="active" data-master-tab="profile">Профиль</button><button data-master-tab="services">Услуги</button><button data-master-tab="portfolio">Портфолио</button><button data-master-tab="reviews">Отзывы</button></div><div id="fxMasterTabContent">${masterTabHTML(m,'profile')}</div>`;masterBody.dataset.master=id;masterSheet.classList.add('open');document.body.style.overflow='hidden'}
  root.querySelector('#team').addEventListener('click',e=>{const b=e.target.closest('[data-master]');if(b)openMaster(b.dataset.master)});root.querySelector('#fxMasterClose').addEventListener('click',()=>{masterSheet.classList.remove('open');document.body.style.overflow=''});masterBody.addEventListener('click',e=>{const b=e.target.closest('[data-master-tab]');if(!b)return;masterBody.querySelectorAll('[data-master-tab]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const m=masters.find(x=>x.id===masterBody.dataset.master);root.querySelector('#fxMasterTabContent').innerHTML=masterTabHTML(m,b.dataset.masterTab)});

  const stickyNav=root.querySelector('.fx-nav-sticky');
  function scrollToTarget(id){if(id==='more')id='visit';const el=root.querySelector('#'+id);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})}
  root.querySelectorAll('.fx-nav').forEach(nav=>nav.addEventListener('click',e=>{const b=e.target.closest('[data-nav]');if(b)scrollToTarget(b.dataset.nav)}));
  const watched=['photos','overview','services','team','reviews','portfolio','visit'];const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;root.querySelectorAll('.fx-nav button').forEach(b=>b.classList.toggle('active',b.dataset.nav===entry.target.id))})},{rootMargin:'-20% 0px -68% 0px',threshold:0});watched.forEach(id=>{const el=root.querySelector('#'+id);if(el)observer.observe(el)});
  const bookbar=root.querySelector('#fxBookbar'),hero=root.querySelector('#overview'),visit=root.querySelector('#visit');function updateFixed(){const heroBottom=hero.getBoundingClientRect().bottom,visitRect=visit.getBoundingClientRect();stickyNav.classList.toggle('show',heroBottom<=0);bookbar.classList.toggle('show',heroBottom<=window.innerHeight);bookbar.classList.toggle('hide-visit',visitRect.top<window.innerHeight&&visitRect.bottom>80)}window.addEventListener('scroll',updateFixed,{passive:true});updateFixed();
  const bookSheet=root.querySelector('#fxBookSheet');root.addEventListener('click',e=>{if(e.target.closest('[data-book]')){bookSheet.classList.add('open');document.body.style.overflow='hidden'}if(e.target===bookSheet){bookSheet.classList.remove('open');document.body.style.overflow=''}});
  function updateHours(){const el=root.querySelector('#fxHours');try{const parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Moscow',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());let day='',h=0,m=0;parts.forEach(p=>{if(p.type==='weekday')day=p.value;if(p.type==='hour')h=+p.value;if(p.type==='minute')m=+p.value});const mins=h*60+m,open=day!=='Mon'&&mins>=600&&mins<1200;el.classList.toggle('open',open);el.classList.toggle('closed',!open);el.querySelector('span').textContent=open?'Открыто до 20:00':(day==='Mon'||day==='Sun'&&mins>=1200?'Закрыто · откроется во вторник в 10:00':mins<600?'Закрыто · откроется сегодня в 10:00':'Закрыто · откроется завтра в 10:00')}catch(e){}}updateHours();setInterval(updateHours,60000);
})();