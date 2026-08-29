(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const PHONE='+79163552222';
  const YANDEX='https://yandex.com/maps/org/beauty_salon_stluxe/51087098664/';
  const YANDEX_REVIEWS='https://yandex.com/maps/org/beauty_salon_stluxe/51087098664/reviews/';
  const ADDRESS='Ивантеевка, ул. Победы, 16';
  const RATING='4,9';
  const RATINGS_COUNT=125;

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

  const works=[
    {src:'assets/images/salon-reception.webp',cat:'salon',alt:'Интерьер STLuxe'},
    {src:'assets/images/salon-nail-zone.webp',cat:'salon',alt:'Зона маникюра STLuxe'},
    {src:'assets/images/nails-pink.webp',cat:'nails',alt:'Маникюр STLuxe'},
    {src:'assets/images/nails-green.webp',cat:'nails',alt:'Дизайн ногтей STLuxe'},
    {src:'assets/images/nails-light.webp',cat:'nails',alt:'Маникюр STLuxe'},
    {src:'assets/images/hair-style.webp',cat:'hair',alt:'Работа с волосами STLuxe'}
  ];

  // Только короткие фрагменты отзывов, ранее подтверждённых по карточке STLuxe в Яндекс Картах.
  const reviews=[
    {name:'Ольга К.',text:'Делаю хим завивку, в этом салоне никогда не отказывают, отличная атмосфера, все чисто стерильно, приветливый персонал.'},
    {name:'Мама Рита',text:'Прекрасный косметолог Мария. Умеет всё. Препараты качественные, новейшие. Очень советую мастера.'},
    {name:'Елизавета С.',text:'Отличное обслуживание, все мастера вежливые и отлично выполняют бьюти-услуги! Салон чистый, стильный!'},
    {name:'Оксана Семина',text:'Ногти - шедевр!!!'}
  ];

  const masters=[
    {id:'tatiana',name:'Татьяна',category:'Волосы · ногти',initial:'Т',about:'Татьяна — мастер STLuxe. В отзывах клиенты отдельно отмечают её работу с волосами и ногтями.',cats:['hair','nails']},
    {id:'maria',name:'Мария',category:'Косметология',initial:'М',about:'Мария — косметолог STLuxe. Клиенты отдельно рекомендуют её в отзывах о салоне.',cats:['face','brows','lashes']},
    {id:'alena',name:'Алёна',category:'Мастер',initial:'А',about:'Алёна — мастер STLuxe, которую клиенты отдельно рекомендуют в отзывах о салоне.',cats:[]},
    {id:'placeholder',name:'Мастер',category:'Категория уточняется',initial:'S',about:'Карточка подготовлена для ещё одного специалиста STLuxe.',cats:[]}
  ];

  const font=document.createElement('link');
  font.rel='stylesheet';
  font.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600&display=swap';
  document.head.appendChild(font);

  const css=document.createElement('style');
  css.id='stluxe-tanem-v13-style';
  css.textContent=`
  @media(max-width:767px){
    html,body{margin:0!important;padding:0!important;min-height:100%!important;background:#f6f1eb!important;color:#2f2926!important;overflow-x:hidden!important;-webkit-font-smoothing:antialiased!important;scrollbar-width:none}
    html::-webkit-scrollbar,body::-webkit-scrollbar{display:none}
    body>*:not(#stluxe-tanem-v13):not(script):not(style):not(link){display:none!important}
    #stluxe-tanem-v13{--ink:#2f2926;--soft:#6e625c;--paper:#f6f1eb;--paper2:#fbf8f4;--taupe:#8b7167;--taupe-dark:#715b53;--line:rgba(65,52,47,.13);display:block;width:100%;min-height:100dvh;overflow:clip;background:var(--paper);color:var(--ink);font-family:"Manrope",Arial,sans-serif;font-weight:400}
    #stluxe-tanem-v13 *{box-sizing:border-box}
    #stluxe-tanem-v13 button,#stluxe-tanem-v13 a{font:inherit;-webkit-tap-highlight-color:transparent;color:inherit}
    #stluxe-tanem-v13 button{cursor:pointer}
    .tn13-shell{width:min(100%,520px);margin:0 auto;padding-inline:clamp(16px,4.8vw,24px)}
    .tn13-kicker{margin:0;color:#9b7d72;font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase}
    .tn13-display{font-family:"Cormorant Garamond",Georgia,serif}

    .tn13-intro{position:fixed;z-index:500;inset:0;display:grid;place-items:center;background:radial-gradient(circle at 50% 42%,rgba(222,203,193,.38),transparent 37%),#f8f4ef;animation:tn13Intro 1.55s cubic-bezier(.22,.78,.25,1) both;pointer-events:none}
    .tn13-intro-inner{text-align:center;color:#493c37;transform:translateY(-2vh)}
    .tn13-intro-name{font:500 clamp(54px,16vw,72px)/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.045em}
    .tn13-intro-line{width:76px;height:1px;background:rgba(116,90,80,.48);margin:13px auto 10px}
    .tn13-intro-small{color:#927b72;font-size:9px;font-weight:600;letter-spacing:.24em;text-transform:uppercase}
    @keyframes tn13Intro{0%,72%{opacity:1}100%{opacity:0;visibility:hidden}}

    .tn13-hero{height:100svh;min-height:640px;background:#f8f4ee;overflow:hidden}
    .tn13-hero .tn13-shell{height:100%;display:flex;flex-direction:column;padding-bottom:max(12px,env(safe-area-inset-bottom))}
    .tn13-topbar{position:relative;z-index:40;display:flex;min-height:56px;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line)}
    .tn13-brand{font:600 clamp(25px,7vw,31px)/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em;text-decoration:none}
    .tn13-menu-wrap{position:relative}
    .tn13-menu-btn{width:44px;height:44px;border:1px solid rgba(76,59,52,.1);border-radius:50%;background:rgba(255,255,255,.42);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:0;backdrop-filter:blur(10px)}
    .tn13-menu-btn span{display:block;width:19px;height:1.5px;border-radius:999px;background:currentColor;transition:.24s ease}
    .tn13-menu-btn.open span:first-child{transform:translateY(6.5px) rotate(45deg)}.tn13-menu-btn.open span:nth-child(2){opacity:0}.tn13-menu-btn.open span:last-child{transform:translateY(-6.5px) rotate(-45deg)}
    .tn13-menu{position:absolute;z-index:60;top:calc(100% + 7px);right:0;width:min(74vw,270px);padding:8px 12px;border:1px solid rgba(75,56,49,.12);border-radius:18px;background:rgba(250,246,242,.97);box-shadow:0 20px 48px rgba(58,42,36,.16);backdrop-filter:blur(20px);display:none}
    .tn13-menu.open{display:grid;animation:tn13Menu .25s ease both}@keyframes tn13Menu{from{opacity:0;transform:translateY(-7px) scale(.97)}to{opacity:1;transform:none}}
    .tn13-menu a{display:flex;min-height:43px;align-items:center;gap:13px;border-bottom:1px solid rgba(75,56,49,.09);font:600 15px/1 "Cormorant Garamond",Georgia,serif;text-decoration:none}.tn13-menu a:last-child{border-bottom:0}.tn13-menu a span{color:#a48a80;font:600 8px/1 "Manrope",Arial,sans-serif;letter-spacing:.12em}

    .tn13-hero-content{padding:clamp(22px,4svh,36px) 0 0;flex:0 0 auto}
    .tn13-ticker{overflow:hidden;color:#9b7d72;mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)}
    .tn13-ticker-track{display:flex;width:max-content;animation:tn13Ticker 24s linear infinite}.tn13-ticker-track span{padding-right:30px;font-size:10px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap}@keyframes tn13Ticker{to{transform:translateX(-50%)}}
    .tn13-hero h1{max-width:390px;margin:17px 0 10px;font:500 clamp(45px,14.3vw,59px)/.89 "Cormorant Garamond",Georgia,serif;letter-spacing:-.045em}.tn13-hero h1 em{color:#8f7167;font-weight:500}
    .tn13-hero-copy{max-width:370px;margin:0;color:var(--soft);font-size:clamp(12px,3.45vw,13.5px);line-height:1.5}

    .tn13-visual{position:relative;flex:1 1 270px;min-height:255px;max-height:325px;margin:10px -5px 9px;overflow:visible}
    .tn13-visual-main{position:absolute;inset:3% 9% 3% 3%;border-radius:28px;overflow:hidden;background:#e8dfd7;box-shadow:0 18px 50px rgba(84,62,52,.11)}
    .tn13-visual-main img{width:100%;height:100%;object-fit:cover;display:block}
    .tn13-visual-small{position:absolute;right:0;bottom:7%;width:37%;height:44%;border:7px solid #f8f4ee;border-radius:24px;overflow:hidden;background:#ddd;box-shadow:0 12px 34px rgba(73,53,46,.15)}.tn13-visual-small img{width:100%;height:100%;object-fit:cover}
    .tn13-visual-label{position:absolute;left:5%;bottom:7%;z-index:2;padding:7px 11px;border-radius:999px;background:rgba(248,244,238,.88);backdrop-filter:blur(10px);font-size:9px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#765f57}

    .tn13-hero-bottom{flex:0 0 auto;margin-top:auto}
    .tn13-hero-actions{display:flex;align-items:center;gap:14px;margin:0 0 12px}
    .tn13-main-cta{display:inline-flex;min-height:46px;align-items:center;justify-content:center;border-radius:999px;background:var(--taupe-dark);color:#fff!important;padding:0 20px;text-decoration:none;font-size:12px;font-weight:600;letter-spacing:.02em;border:0}
    .tn13-quiet-link{font-size:11px;color:#7b6b64;text-decoration:none;border-bottom:1px solid rgba(83,67,60,.28);padding-bottom:3px}
    .tn13-stats{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--line);padding-top:11px}.tn13-stat{display:grid;gap:2px}.tn13-stat strong{font:500 22px/1 "Cormorant Garamond",Georgia,serif}.tn13-stat span{font-size:9px;color:#8b7b74;text-transform:uppercase;letter-spacing:.1em}

    .tn13-section{padding:58px 0 62px}.tn13-section-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;margin-bottom:22px}.tn13-section-head h2{margin:5px 0 0;font:500 clamp(38px,11vw,48px)/.93 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em}.tn13-section-note{max-width:145px;margin:0;color:#8a7b74;font-size:10px;line-height:1.45;text-align:right}
    .tn13-reveal{opacity:0;transform:translateY(18px);transition:opacity .75s ease,transform .75s cubic-bezier(.22,.78,.25,1)}.tn13-reveal.visible{opacity:1;transform:none}

    .tn13-portfolio{background:#f6f1eb}
    .tn13-feature{margin:0 -7px;display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0 7px}.tn13-feature::-webkit-scrollbar{display:none}.tn13-feature button{flex:0 0 86%;height:64vw;max-height:340px;border:0;padding:0;border-radius:24px;overflow:hidden;background:#e7ddd5;scroll-snap-align:center}.tn13-feature img{width:100%;height:100%;object-fit:cover}
    .tn13-work-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;margin-top:16px}.tn13-work-grid button{border:0;padding:0;aspect-ratio:1/1.18;border-radius:16px;overflow:hidden;background:#e5ddd7}.tn13-work-grid img{width:100%;height:100%;object-fit:cover}
    .tn13-gallery-btn{width:100%;margin-top:13px;min-height:48px;border:1px solid var(--line);border-radius:999px;background:transparent;display:flex;align-items:center;justify-content:space-between;padding:0 17px;font-size:12px;font-weight:600;color:#66564f}

    .tn13-services{background:#2f2926;color:#f7f2ec}.tn13-services .tn13-kicker{color:#c8aa9e}.tn13-services .tn13-section-note{color:#b9a9a2}.tn13-services .tn13-section-head{margin-bottom:28px}
    .tn13-tabs{display:flex;gap:8px;overflow-x:auto;margin:0 -24px 11px;padding:0 24px;scrollbar-width:none}.tn13-tabs::-webkit-scrollbar{display:none}.tn13-tab{border:1px solid rgba(255,255,255,.18);border-radius:999px;background:transparent;color:#d8cec8!important;padding:9px 13px;white-space:nowrap;font-size:11px}.tn13-tab.active{background:#f1e7df;color:#392f2b!important;border-color:#f1e7df}
    .tn13-service-list{border-top:1px solid rgba(255,255,255,.16)}.tn13-service-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;align-items:center;padding:17px 0;border-bottom:1px solid rgba(255,255,255,.14)}.tn13-service-name strong{display:block;font-size:13px;font-weight:500;line-height:1.35}.tn13-service-name small{display:none}.tn13-service-action{text-align:right}.tn13-service-action b{display:block;font:500 17px/1 "Cormorant Garamond",Georgia,serif}.tn13-service-action button{border:0;background:transparent;color:#d8b7aa!important;padding:6px 0 0;font-size:10.5px;border-bottom:1px solid rgba(216,183,170,.38)}
    .tn13-more{margin-top:17px;border:0;background:transparent;color:#d6c8c1!important;font-size:11px;padding:0;text-decoration:underline;text-underline-offset:5px}

    .tn13-team{background:#f3ece6}.tn13-team-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.tn13-master{position:relative;border:1px solid rgba(74,57,49,.1);background:rgba(255,255,255,.45);border-radius:24px;padding:16px;text-align:left;min-height:186px;overflow:hidden}.tn13-master-monogram{width:72px;height:72px;border-radius:50%;display:grid;place-items:center;background:#e2d6cf;color:#725d55;font:500 32px/1 "Cormorant Garamond",Georgia,serif;margin-bottom:22px}.tn13-master strong{display:block;font:500 25px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em}.tn13-master span{display:block;margin-top:5px;color:#83736c;font-size:10.5px;line-height:1.35}.tn13-master-arrow{position:absolute;right:15px;top:15px;font-size:18px;color:#8f776e}

    .tn13-reviews{background:#fbf8f4}.tn13-review-summary{display:flex;align-items:end;justify-content:space-between;text-decoration:none;border-bottom:1px solid var(--line);padding:0 0 18px;margin-bottom:21px}.tn13-review-summary strong{font:500 64px/.8 "Cormorant Garamond",Georgia,serif;letter-spacing:-.05em}.tn13-review-summary span{text-align:right;color:#8c766e;font-size:10px;line-height:1.7;letter-spacing:.08em;text-transform:uppercase}.tn13-review-viewport{overflow:hidden;margin:0 -24px}.tn13-review-track{display:flex;width:max-content;gap:10px;padding:0 24px;animation:tn13Reviews 125s linear infinite}.tn13-review-track.paused{animation-play-state:paused}@keyframes tn13Reviews{to{transform:translateX(-50%)}}
    .tn13-review-card{width:286px;min-height:178px;border:1px solid rgba(74,57,49,.1);border-radius:22px;background:#f5eee8;padding:18px;text-decoration:none}.tn13-review-stars{color:#9a796c;font-size:11px;letter-spacing:2px}.tn13-review-card blockquote{margin:17px 0 18px;font:500 22px/1.05 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em}.tn13-review-card small{color:#8b7b74;font-size:9.5px}

    .tn13-final{background:#8b7167;color:#fff;padding:62px 0 54px}.tn13-final .tn13-kicker{color:#ead8d0}.tn13-final h2{margin:8px 0 14px;font:500 clamp(42px,12vw,53px)/.9 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em}.tn13-final h2 em{color:#ead9d1;font-weight:500}.tn13-final-copy{margin:0 0 25px;max-width:370px;color:#ede2dd;font-size:12px;line-height:1.55}
    .tn13-final-actions{display:grid;gap:9px}.tn13-final-cta{height:52px;border:0;border-radius:999px;background:#f8f1eb;color:#503f39!important;display:flex;align-items:center;justify-content:space-between;padding:0 18px;text-decoration:none;font-size:12px;font-weight:600}.tn13-final-secondary-row{display:grid;grid-template-columns:1fr 1fr;gap:9px}.tn13-final-secondary{height:48px;border:1px solid rgba(255,255,255,.27);border-radius:999px;display:flex;align-items:center;justify-content:center;text-decoration:none;color:#fff!important;font-size:11px}.tn13-final-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,.22)}.tn13-final-facts strong{display:block;font:500 20px/1 "Cormorant Garamond",Georgia,serif}.tn13-final-facts small{display:block;margin-top:4px;color:#eadad3;font-size:8.5px;text-transform:uppercase;letter-spacing:.08em}
    .tn13-map{width:100%;height:210px;border:0;border-radius:22px;margin:23px 0 0;background:#ddd;filter:saturate(.6) contrast(.95)}
    .tn13-footer{background:#2f2926;color:#d8ccc6;padding:28px 0 36px;text-align:center;font-size:10px;letter-spacing:.08em;text-transform:uppercase}.tn13-footer strong{display:block;color:#fff;font:500 25px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:-.02em;text-transform:none;margin-bottom:7px}

    .tn13-sticky{position:fixed;z-index:180;left:14px;right:14px;bottom:calc(10px + env(safe-area-inset-bottom));display:flex;align-items:center;justify-content:space-between;gap:12px;padding:7px 7px 7px 15px;border:1px solid rgba(71,55,48,.12);border-radius:999px;background:rgba(248,244,239,.93);box-shadow:0 12px 38px rgba(56,40,34,.15);backdrop-filter:blur(18px);transform:translateY(150%);transition:transform .3s ease}.tn13-sticky.show{transform:none}.tn13-sticky span{font-size:10px;color:#81716a}.tn13-sticky strong{display:block;color:#3d332f;font-size:11px;font-weight:600}.tn13-sticky button{height:42px;border:0;border-radius:999px;background:#715b53;color:#fff!important;padding:0 18px;font-size:11px;font-weight:600}

    .tn13-overlay,.tn13-sheet{position:fixed;z-index:350;inset:0;display:none}.tn13-overlay.open{display:block;background:#f8f4ef;overflow:auto}.tn13-gallery-head{position:sticky;top:0;z-index:5;background:rgba(248,244,239,.94);backdrop-filter:blur(18px);padding:17px 20px 15px;border-bottom:1px solid var(--line)}.tn13-back{width:42px;height:42px;border:0;border-radius:50%;background:rgba(255,255,255,.5);font-size:20px}.tn13-gallery-title{font:500 39px/.95 "Cormorant Garamond",Georgia,serif;margin:17px 0 3px}.tn13-gallery-sub{font-size:10px;color:#907a71;letter-spacing:.12em;text-transform:uppercase}.tn13-gallery-tabs{display:flex;gap:8px;overflow:auto;padding:16px 20px;scrollbar-width:none}.tn13-gallery-tabs button{border:1px solid var(--line);border-radius:999px;background:transparent;padding:9px 13px;font-size:11px}.tn13-gallery-tabs button.active{background:#715b53;color:#fff!important}.tn13-gallery-list{display:grid;gap:12px;padding:0 20px 30px}.tn13-gallery-list img{width:100%;border-radius:20px;display:block}
    .tn13-sheet.open{display:flex;align-items:flex-end;background:rgba(37,29,26,.35)}.tn13-panel{width:100%;max-height:92vh;overflow:auto;background:#f8f4ef;border-radius:29px 29px 0 0;padding:26px 20px calc(26px + env(safe-area-inset-bottom));position:relative}.tn13-close{position:absolute;right:16px;top:16px;width:40px;height:40px;border:0;border-radius:50%;background:#eee4dd;font-size:20px}.tn13-master-hero{padding:20px 0 24px}.tn13-master-big{width:120px;height:120px;border-radius:50%;display:grid;place-items:center;background:#e3d7cf;color:#725d55;font:500 48px/1 "Cormorant Garamond",Georgia,serif}.tn13-master-title{font:500 42px/.95 "Cormorant Garamond",Georgia,serif;margin:19px 0 4px}.tn13-master-sub{color:#8a7770;font-size:11px}.tn13-master-about{padding:20px 0;border-top:1px solid var(--line);font-size:12px;line-height:1.58;color:#5f514b}.tn13-master-services{border-top:1px solid var(--line)}.tn13-master-service{display:flex;justify-content:space-between;gap:15px;padding:14px 0;border-bottom:1px solid var(--line);font-size:11px}.tn13-master-service b{font-weight:500}.tn13-master-service span{color:#8a7770}.tn13-sheet-cta{width:100%;height:50px;border:0;border-radius:999px;background:#715b53;color:#fff!important;margin-top:20px;font-size:12px;font-weight:600}
  }
  @media(min-width:768px){#stluxe-tanem-v13{display:none!important}}
  `;
  document.head.appendChild(css);

  const root=document.createElement('div');
  root.id='stluxe-tanem-v13';

  const serviceTabs=[['all','Все'],['nails','Ногти'],['hair','Волосы'],['face','Косметология'],['brows','Брови'],['depilation','Депиляция']];
  const galleryTabs=[['all','Все'],['salon','Салон'],['nails','Ногти'],['hair','Волосы']];

  root.innerHTML=`
    <div class="tn13-intro" id="tn13Intro"><div class="tn13-intro-inner"><div class="tn13-intro-name">STLuxe</div><div class="tn13-intro-line"></div><div class="tn13-intro-small">beauty salon · TANEM</div></div></div>

    <header class="tn13-hero" id="tn13Top">
      <div class="tn13-shell">
        <div class="tn13-topbar">
          <a class="tn13-brand" href="#tn13Top">STLuxe</a>
          <div class="tn13-menu-wrap">
            <button class="tn13-menu-btn" id="tn13MenuBtn" type="button" aria-label="Открыть меню"><span></span><span></span><span></span></button>
            <nav class="tn13-menu" id="tn13Menu">
              <a href="#tn13Portfolio"><span>01</span>Портфолио</a>
              <a href="#tn13Services"><span>02</span>Услуги и цены</a>
              <a href="#tn13Team"><span>03</span>Команда</a>
              <a href="#tn13Reviews"><span>04</span>Отзывы</a>
              <a href="#tn13Visit"><span>05</span>Визит и запись</a>
            </nav>
          </div>
        </div>

        <div class="tn13-hero-content">
          <div class="tn13-ticker"><div class="tn13-ticker-track"><span>Салон красоты · Ивантеевка · рейтинг 4,9 · ногти · волосы · косметология</span><span>Салон красоты · Ивантеевка · рейтинг 4,9 · ногти · волосы · косметология</span></div></div>
          <h1>Салон красоты <em>STLuxe</em></h1>
          <p class="tn13-hero-copy">Ногти, волосы, косметология и другие направления — в одном пространстве на улице Победы.</p>
        </div>

        <div class="tn13-visual" aria-label="Интерьер и работы STLuxe">
          <button class="tn13-visual-main" type="button" data-gallery="salon"><img src="assets/images/salon-reception.webp" alt="Интерьер STLuxe"></button>
          <button class="tn13-visual-small" type="button" data-gallery="nails"><img src="assets/images/nails-pink.webp" alt="Маникюр STLuxe"></button>
          <div class="tn13-visual-label">Ивантеевка · Победы, 16</div>
        </div>

        <div class="tn13-hero-bottom">
          <div class="tn13-hero-actions"><button class="tn13-main-cta" type="button" data-book>Записаться&nbsp; →</button><a class="tn13-quiet-link" href="#tn13Portfolio">Смотреть работы ↓</a></div>
          <div class="tn13-stats"><div class="tn13-stat"><strong>${RATING}</strong><span>рейтинг</span></div><div class="tn13-stat"><strong>${RATINGS_COUNT}</strong><span>оценок</span></div><div class="tn13-stat"><strong>${services.length}</strong><span>услуг</span></div></div>
        </div>
      </div>
    </header>

    <section class="tn13-section tn13-portfolio" id="tn13Portfolio">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Портфолио</p><h2>Пространство<br>и работы</h2></div><p class="tn13-section-note">Реальные фотографии из карточки STLuxe</p></div>
      </div>
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-feature">${works.slice(0,2).map(w=>`<button type="button" data-gallery="${w.cat}"><img src="${w.src}" alt="${w.alt}"></button>`).join('')}</div>
        <div class="tn13-work-grid">${works.slice(2,5).map(w=>`<button type="button" data-gallery="${w.cat}"><img src="${w.src}" alt="${w.alt}"></button>`).join('')}</div>
        <button class="tn13-gallery-btn" type="button" data-gallery="all"><span>Открыть всю галерею</span><span>→</span></button>
      </div>
    </section>

    <section class="tn13-section tn13-services" id="tn13Services">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Услуги и цены</p><h2>Выберите<br>услугу</h2></div><p class="tn13-section-note">Цена указана там, где она подтверждена</p></div>
        <div class="tn13-tabs" id="tn13ServiceTabs">${serviceTabs.map((t,i)=>`<button class="tn13-tab ${i===0?'active':''}" data-service-cat="${t[0]}" type="button">${t[1]}</button>`).join('')}</div>
        <div class="tn13-service-list" id="tn13ServiceList"></div>
        <button class="tn13-more" id="tn13More" type="button">Показать ещё услуги</button>
      </div>
    </section>

    <section class="tn13-section tn13-team" id="tn13Team">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Команда</p><h2>Мастера<br>STLuxe</h2></div><p class="tn13-section-note">Персональные страницы специалистов</p></div>
        <div class="tn13-team-grid">${masters.map(m=>`<button class="tn13-master" type="button" data-master="${m.id}"><span class="tn13-master-arrow">↗</span><div class="tn13-master-monogram">${m.initial}</div><strong>${m.name}</strong><span>${m.category}</span></button>`).join('')}</div>
      </div>
    </section>

    <section class="tn13-section tn13-reviews" id="tn13Reviews">
      <div class="tn13-shell tn13-reveal">
        <div class="tn13-section-head"><div><p class="tn13-kicker">Отзывы</p><h2>Что говорят<br>клиенты</h2></div></div>
        <a class="tn13-review-summary" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener"><strong>${RATING}</strong><span>★★★★★<br>Яндекс Карты →</span></a>
      </div>
      <div class="tn13-review-viewport" id="tn13ReviewViewport"><div class="tn13-review-track" id="tn13ReviewTrack">${reviews.concat(reviews).map(r=>`<a class="tn13-review-card" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener"><div class="tn13-review-stars">★★★★★</div><blockquote>«${r.text}»</blockquote><small>${r.name} · Яндекс Карты</small></a>`).join('')}</div></div>
    </section>

    <section class="tn13-final" id="tn13Visit">
      <div class="tn13-shell tn13-reveal">
        <p class="tn13-kicker">Визит и запись</p>
        <h2>Выберите удобный<br><em>способ записи</em></h2>
        <p class="tn13-final-copy">STLuxe находится в Ивантеевке на улице Победы, 16. Понедельник — выходной, со вторника по воскресенье салон работает с 10:00 до 20:00.</p>
        <div class="tn13-final-actions">
          <button class="tn13-final-cta" type="button" data-book><span>Записаться в STLuxe</span><span>→</span></button>
          <div class="tn13-final-secondary-row"><a class="tn13-final-secondary" href="tel:${PHONE}">Позвонить</a><a class="tn13-final-secondary" href="${YANDEX}" target="_blank" rel="noopener">Яндекс Карты</a></div>
        </div>
        <iframe class="tn13-map" loading="lazy" src="https://yandex.ru/map-widget/v1/?text=%D0%98%D0%B2%D0%B0%D0%BD%D1%82%D0%B5%D0%B5%D0%B2%D0%BA%D0%B0%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B%2C%2016&z=16" title="Карта STLuxe"></iframe>
        <div class="tn13-final-facts"><span><strong>10–20</strong><small>Вт–Вс</small></span><span><strong>4,9</strong><small>рейтинг</small></span><span><strong>17</strong><small>услуг</small></span></div>
      </div>
    </section>

    <footer class="tn13-footer"><div class="tn13-shell"><strong>STLuxe</strong>Цифровой офис TANEM.RU</div></footer>

    <div class="tn13-sticky" id="tn13Sticky"><span>Доступно <strong>${services.length} услуг</strong></span><button type="button" data-book>Записаться</button></div>

    <div class="tn13-overlay" id="tn13Gallery"><div class="tn13-gallery-head"><button class="tn13-back" id="tn13GalleryClose" type="button">←</button><div class="tn13-gallery-title">Галерея STLuxe</div><div class="tn13-gallery-sub">Салон · ногти · волосы</div></div><div class="tn13-gallery-tabs" id="tn13GalleryTabs"></div><div class="tn13-gallery-list" id="tn13GalleryList"></div></div>

    <div class="tn13-sheet" id="tn13MasterSheet"><div class="tn13-panel"><button class="tn13-close" id="tn13MasterClose" type="button">×</button><div id="tn13MasterBody"></div></div></div>
    <div class="tn13-sheet" id="tn13BookSheet"><div class="tn13-panel"><button class="tn13-close" id="tn13BookClose" type="button">×</button><p class="tn13-kicker">Запись</p><div class="tn13-master-title">STLuxe</div><div class="tn13-master-about">Онлайн-ссылка салона в карточке не указана. Для записи можно позвонить или открыть карточку STLuxe в Яндекс Картах.</div><a class="tn13-sheet-cta" style="display:flex;align-items:center;justify-content:center;text-decoration:none" href="tel:${PHONE}">Позвонить +7 916 355-22-22</a><a class="tn13-sheet-cta" style="display:flex;align-items:center;justify-content:center;text-decoration:none;background:#eee4dd;color:#57463f!important" href="${YANDEX}" target="_blank" rel="noopener">Открыть Яндекс Карты</a></div></div>
  `;
  document.body.appendChild(root);

  const $=(s,c=root)=>c.querySelector(s);const $$=(s,c=root)=>Array.from(c.querySelectorAll(s));

  const menuBtn=$('#tn13MenuBtn'),menu=$('#tn13Menu');
  menuBtn.addEventListener('click',()=>{menuBtn.classList.toggle('open');menu.classList.toggle('open')});
  $$('#tn13Menu a').forEach(a=>a.addEventListener('click',()=>{menuBtn.classList.remove('open');menu.classList.remove('open')}));
  document.addEventListener('pointerdown',e=>{if(!e.target.closest('.tn13-menu-wrap')){menuBtn.classList.remove('open');menu.classList.remove('open')}});

  let serviceCat='all',expanded=false;
  function renderServices(){const all=services.filter(s=>serviceCat==='all'||s[0]===serviceCat);const shown=expanded?all:all.slice(0,6);$('#tn13ServiceList').innerHTML=shown.map(s=>`<article class="tn13-service-row"><div class="tn13-service-name"><strong>${s[1]}</strong><small>${s[2]}</small></div><div class="tn13-service-action"><b>${s[2]}</b><button type="button" data-book>Записаться →</button></div></article>`).join('');const more=$('#tn13More');more.style.display=all.length>6?'block':'none';more.textContent=expanded?'Свернуть услуги':'Показать ещё '+Math.max(0,all.length-6)+' услуг';bindBook();}
  renderServices();
  $$('#tn13ServiceTabs [data-service-cat]').forEach(b=>b.addEventListener('click',()=>{serviceCat=b.dataset.serviceCat;expanded=false;$$('#tn13ServiceTabs .tn13-tab').forEach(x=>x.classList.toggle('active',x===b));renderServices()}));
  $('#tn13More').addEventListener('click',()=>{expanded=!expanded;renderServices()});

  let galleryCat='all';
  function renderGalleryTabs(){ $('#tn13GalleryTabs').innerHTML=galleryTabs.map(t=>`<button type="button" data-gallery-tab="${t[0]}" class="${galleryCat===t[0]?'active':''}">${t[1]}</button>`).join('');$$('#tn13GalleryTabs button').forEach(b=>b.addEventListener('click',()=>{galleryCat=b.dataset.galleryTab;renderGalleryTabs();renderGalleryList()})); }
  function renderGalleryList(){const arr=works.filter(w=>galleryCat==='all'||w.cat===galleryCat);$('#tn13GalleryList').innerHTML=arr.map(w=>`<img src="${w.src}" alt="${w.alt}">`).join('')}
  function openGallery(cat){galleryCat=galleryTabs.some(t=>t[0]===cat)?cat:'all';renderGalleryTabs();renderGalleryList();$('#tn13Gallery').classList.add('open');document.body.style.overflow='hidden'}
  $$('[data-gallery]').forEach(b=>b.addEventListener('click',()=>openGallery(b.dataset.gallery)));
  $('#tn13GalleryClose').addEventListener('click',()=>{$('#tn13Gallery').classList.remove('open');document.body.style.overflow=''});

  function openMaster(id){const m=masters.find(x=>x.id===id);if(!m)return;const ms=services.filter(s=>m.cats.includes(s[0]));$('#tn13MasterBody').innerHTML=`<div class="tn13-master-hero"><div class="tn13-master-big">${m.initial}</div><div class="tn13-master-title">${m.name}</div><div class="tn13-master-sub">Мастер · ${m.category}</div></div><div class="tn13-master-about">${m.about}</div><div class="tn13-master-services">${ms.length?ms.slice(0,6).map(s=>`<div class="tn13-master-service"><b>${s[1]}</b><span>${s[2]}</span></div>`).join(''):'<div class="tn13-master-about">Персональные услуги будут добавлены после подтверждения салоном.</div>'}</div><button class="tn13-sheet-cta" type="button" data-book>Записаться</button>`;$('#tn13MasterSheet').classList.add('open');document.body.style.overflow='hidden';bindBook();}
  $$('[data-master]').forEach(b=>b.addEventListener('click',()=>openMaster(b.dataset.master)));
  $('#tn13MasterClose').addEventListener('click',()=>{$('#tn13MasterSheet').classList.remove('open');document.body.style.overflow=''});

  function openBook(){ $('#tn13BookSheet').classList.add('open');document.body.style.overflow='hidden'; }
  function bindBook(){ $$('[data-book]').forEach(b=>{if(b.dataset.bound)return;b.dataset.bound='1';b.addEventListener('click',openBook)}); }
  bindBook();
  $('#tn13BookClose').addEventListener('click',()=>{$('#tn13BookSheet').classList.remove('open');document.body.style.overflow=''});
  $$('.tn13-sheet').forEach(s=>s.addEventListener('click',e=>{if(e.target===s){s.classList.remove('open');document.body.style.overflow=''}}));

  const reviewTrack=$('#tn13ReviewTrack'),reviewViewport=$('#tn13ReviewViewport');let resume;
  reviewViewport.addEventListener('pointerdown',()=>{clearTimeout(resume);reviewTrack.classList.add('paused')},{passive:true});
  const resumeReviews=()=>{clearTimeout(resume);resume=setTimeout(()=>reviewTrack.classList.remove('paused'),500)};
  reviewViewport.addEventListener('pointerup',resumeReviews,{passive:true});reviewViewport.addEventListener('pointercancel',resumeReviews,{passive:true});

  const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');reveal.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -8% 0px'});$$('.tn13-reveal').forEach(el=>reveal.observe(el));

  const sticky=$('#tn13Sticky'),hero=$('#tn13Top'),final=$('#tn13Visit');let raf=0;
  function scrollState(){raf=0;const heroDone=hero.getBoundingClientRect().bottom<=0;const finalNear=final.getBoundingClientRect().top<=window.innerHeight+70;sticky.classList.toggle('show',heroDone&&!finalNear)}
  window.addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(scrollState)},{passive:true});scrollState();

  document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#tn13Gallery').classList.remove('open');$('#tn13MasterSheet').classList.remove('open');$('#tn13BookSheet').classList.remove('open');document.body.style.overflow=''}});
})();