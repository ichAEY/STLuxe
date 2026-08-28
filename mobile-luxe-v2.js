(() => {
  if (!window.matchMedia('(max-width: 767px)').matches) return;

  const YANDEX = 'https://yandex.ru/navi/org/stluxe/51087098664?si=4x8mkunbkhugdwe7bkyfw55fh0';
  const PHONE = '+79163552222';
  const photos = [
    {src:'assets/images/salon-reception.webp', cat:'interior', alt:'Интерьер STLuxe'},
    {src:'assets/images/salon-nail-zone.webp', cat:'interior', alt:'Рабочая зона STLuxe'},
    {src:'assets/images/nails-pink.webp', cat:'nails', alt:'Маникюр STLuxe'},
    {src:'assets/images/nails-green.webp', cat:'nails', alt:'Дизайн ногтей STLuxe'},
    {src:'assets/images/nails-light.webp', cat:'nails', alt:'Маникюр STLuxe'},
    {src:'assets/images/hair-style.webp', cat:'hair', alt:'Работа с волосами STLuxe'}
  ];

  const services = [
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

  const reviews = [
    ['мария н.','Атмосфера в салоне благоприятная, красиво, стильно, уютно… Татьяна — мастер своего дела.'],
    ['Ольга К.','Отличная атмосфера, всё чисто, стерильно, приветливый персонал, всегда предлагают чай или кофе.'],
    ['Елизавета С.','Отличное обслуживание, все мастера вежливые и отлично выполняют бьюти-услуги! Салон чистый, стильный!'],
    ['Мама Рита','Прекрасный косметолог Мария. Умеет всё. Препараты качественные, новейшие. Очень советую мастера.']
  ];

  const icon = (name) => {
    const paths = {
      arrowLeft:'<path d="M15 18l-6-6 6-6"/><path d="M9 12h10"/>',
      share:'<path d="M12 3v12"/><path d="M8 7l4-4 4 4"/><path d="M5 11v8h14v-8"/>',
      heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
      pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
      clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      chevron:'<path d="M9 18l6-6-6-6"/>',
      phone:'<path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.9z"/>'
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || ''}</svg>`;
  };

  const style = document.createElement('style');
  style.id = 'stluxe-fresha-style';
  style.textContent = `
    @media(max-width:767px){
      html,body{margin:0!important;padding:0!important;background:#fff!important;color:#111!important;overflow-x:hidden!important;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text","Helvetica Neue",Arial,sans-serif!important;-webkit-font-smoothing:antialiased!important}
      body>*:not(#stluxe-fresha):not(script):not(style){display:none!important}
      #stluxe-fresha{display:block!important;width:100%;background:#fff;color:#111}
      #stluxe-fresha *{box-sizing:border-box}
      #stluxe-fresha button,#stluxe-fresha a{font:inherit;color:inherit}
      #stluxe-fresha button{cursor:pointer}
      #stluxe-fresha svg{display:block;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
      .fr-page{background:#fff;padding-bottom:100px}
      .fr-top{height:54px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;background:#fff}
      .fr-brand{font-size:21px;font-weight:600;letter-spacing:-.045em;text-decoration:none}
      .fr-yandex{font-size:13px;color:#555;text-decoration:none;border-bottom:1px solid #777;padding-bottom:2px;display:flex;align-items:center;gap:5px}
      .fr-yandex svg{width:13px;height:13px}
      .fr-media{position:relative;width:100vw;height:62vw;min-height:250px;max-height:350px;background:#eee;overflow:hidden}
      .fr-track{height:100%;display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}
      .fr-track::-webkit-scrollbar{display:none}
      .fr-slide{min-width:100%;height:100%;border:0;padding:0;background:#eee;scroll-snap-align:start}
      .fr-slide img{width:100%;height:100%;object-fit:cover;display:block}
      .fr-media-actions{position:absolute;inset:20px 18px auto;display:flex;justify-content:space-between;pointer-events:none}
      .fr-media-right{display:flex;gap:10px}
      .fr-round{pointer-events:auto;width:44px;height:44px;border:1px solid rgba(0,0,0,.08);border-radius:50%;background:rgba(255,255,255,.92);backdrop-filter:blur(12px);display:grid;place-items:center;box-shadow:0 2px 8px rgba(0,0,0,.06)}
      .fr-round svg{width:21px;height:21px;stroke-width:1.9}
      .fr-counter{position:absolute;right:18px;bottom:24px;min-width:50px;height:36px;padding:0 13px;border-radius:999px;background:rgba(20,20,20,.72);backdrop-filter:blur(8px);display:grid;place-items:center;color:#fff;font-size:14px;font-weight:600;letter-spacing:-.01em}
      .fr-hero{position:relative;z-index:3;margin-top:-22px;background:#fff;border-radius:30px 30px 0 0;padding:38px 30px 32px}
      .fr-title{margin:0 0 8px;font-size:38px;line-height:1.02;letter-spacing:-.055em;font-weight:700}
      .fr-type{margin:0 0 24px;font-size:18px;line-height:1.25;color:#777;font-weight:400}
      .fr-rating{display:flex;align-items:center;gap:8px;font-size:20px;margin-bottom:27px}
      .fr-star{width:22px;height:22px;display:grid;place-items:center;color:#f4b400;font-size:25px;line-height:1}
      .fr-rating strong{font-weight:650}.fr-rating span{color:#777}
      .fr-hours{display:flex;align-items:center;gap:10px;font-size:17px;line-height:1.35;margin-bottom:26px;color:#777}
      .fr-hours svg{width:21px;height:21px;flex:0 0 auto}
      .fr-state{font-weight:500}.fr-state.open{color:#17853d}.fr-state.closed{color:#a96520}
      .fr-address{display:flex;align-items:center;gap:14px;background:#f4f4f4;border-radius:18px;padding:19px 18px;text-decoration:none;color:#111;font-size:16px;line-height:1.42}
      .fr-address svg{width:24px;height:24px;flex:0 0 auto;stroke-width:2.1}
      .fr-section{padding:36px 30px 34px;border-top:1px solid #efefef;scroll-margin-top:20px}
      .fr-section:first-of-type{border-top:0}
      .fr-section h2{margin:0 0 19px;font-size:27px;line-height:1.1;letter-spacing:-.045em;font-weight:700}
      .fr-copy{margin:0;font-size:16px;line-height:1.58;color:#444}
      .fr-copy + .fr-copy{margin-top:12px}
      .fr-facts{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:22px}
      .fr-fact{background:#f5f5f5;border-radius:16px;padding:15px}.fr-fact strong{display:block;font-size:17px;font-weight:650}.fr-fact span{display:block;margin-top:3px;font-size:12px;color:#777;line-height:1.35}
      .fr-head{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;margin-bottom:18px}
      .fr-head h2{margin:0}.fr-link{border:0;background:none;padding:0 0 2px;border-bottom:1px solid #111;font-size:13px;white-space:nowrap}
      .fr-filters{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;margin:0 -30px 16px;padding:0 30px}.fr-filters::-webkit-scrollbar{display:none}
      .fr-filter{border:1px solid #dedede;background:#fff;border-radius:999px;padding:9px 14px;font-size:13px;white-space:nowrap;color:#666}.fr-filter.active{background:#111;color:#fff;border-color:#111}
      .fr-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.fr-photo{border:0;padding:0;background:#eee;border-radius:16px;overflow:hidden;aspect-ratio:1/1.12}.fr-photo img{width:100%;height:100%;object-fit:cover;display:block}.fr-photo[hidden]{display:none}
      .fr-services{display:grid;gap:10px}.fr-service{border:1px solid #e7e7e7;border-radius:18px;padding:17px;background:#fff}.fr-service-name{font-size:16px;line-height:1.38;font-weight:500}.fr-service-bottom{display:flex;align-items:flex-end;justify-content:space-between;gap:14px;margin-top:17px}.fr-price{font-size:15px;color:#555}.fr-reserve{border:1px solid #111;background:#fff;border-radius:999px;height:38px;padding:0 15px;font-size:13px;font-weight:600}.fr-more{width:100%;height:46px;margin-top:12px;border:1px solid #d8d8d8;border-radius:999px;background:#fff;font-size:14px}
      .fr-team{display:flex;gap:12px;overflow-x:auto;scrollbar-width:none;margin:0 -30px;padding:0 30px 4px}.fr-team::-webkit-scrollbar{display:none}.fr-person{min-width:154px;width:154px;border:0;background:none;padding:0;text-align:left}.fr-person-pic{height:190px;border-radius:17px;background:linear-gradient(145deg,#ececec,#f7f7f7);position:relative;overflow:hidden;display:grid;place-items:center}.fr-person-pic svg{width:78px;height:78px;fill:#c8c8c8;stroke:none}.fr-person-badge{position:absolute;left:9px;top:9px;background:rgba(255,255,255,.94);border-radius:999px;padding:5px 8px;font-size:10px;color:#555}.fr-person-name{font-size:14px;font-weight:600;margin-top:9px}.fr-person-role{font-size:12px;line-height:1.35;color:#777;margin-top:3px}
      .fr-reviews{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;margin:0 -30px;padding:0 30px 5px}.fr-reviews::-webkit-scrollbar{display:none}.fr-review{min-width:88%;scroll-snap-align:start;border:1px solid #e6e6e6;border-radius:18px;padding:18px}.fr-review-top{display:flex;justify-content:space-between;gap:12px;margin-bottom:12px;font-size:13px}.fr-review-stars{letter-spacing:1px}.fr-review p{margin:0;font-size:15px;line-height:1.55;color:#444}.fr-yreview{display:inline-block;margin-top:16px;font-size:13px;text-decoration:none;border-bottom:1px solid #111;padding-bottom:2px}
      .fr-visit{display:grid;gap:0;border-top:1px solid #eee}.fr-visit-row{display:flex;align-items:flex-start;gap:13px;padding:18px 0;border-bottom:1px solid #eee}.fr-visit-row svg{width:21px;height:21px;flex:0 0 auto}.fr-visit-row strong{display:block;font-size:14px;font-weight:600;margin-bottom:4px}.fr-visit-row span{display:block;font-size:14px;color:#666;line-height:1.45}.fr-visit-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}.fr-action{height:46px;border-radius:999px;border:1px solid #d9d9d9;background:#fff;display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:14px}.fr-action.black{background:#111;color:#fff;border-color:#111}
      .fr-footer{padding:26px 30px 122px;text-align:center;font-size:11px;color:#999}.fr-footer strong{display:block;color:#222;font-size:14px;margin-bottom:4px}
      .fr-bookbar{position:fixed;left:0;right:0;bottom:0;z-index:60;min-height:84px;padding:12px 20px calc(12px + env(safe-area-inset-bottom));background:rgba(255,255,255,.98);backdrop-filter:blur(16px);border-top:1px solid #e8e8e8;display:flex;align-items:center;justify-content:space-between;gap:18px;transform:translateY(120%);transition:transform .25s ease}
      .fr-bookbar.visible{transform:translateY(0)}.fr-book-copy{font-size:16px;color:#888;white-space:nowrap}.fr-book-button{height:52px;border:0;border-radius:999px;background:#111;color:#fff!important;padding:0 27px;font-size:16px;font-weight:650;white-space:nowrap}
      .fr-modal{position:fixed;inset:0;z-index:100;background:rgba(0,0,0,.45);display:none;align-items:flex-end;padding:10px}.fr-modal.open{display:flex}.fr-sheet{width:100%;max-height:86vh;overflow:auto;background:#fff;border-radius:26px;padding:22px}.fr-sheet-top{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}.fr-sheet h3{margin:0;font-size:23px;letter-spacing:-.035em}.fr-sheet p{font-size:14px;line-height:1.5;color:#666}.fr-close{width:38px;height:38px;border-radius:50%;border:1px solid #ddd;background:#fff;font-size:22px}.fr-sheet-actions{display:grid;gap:10px;margin-top:18px}.fr-sheet-actions a{height:48px;border-radius:999px;display:flex;align-items:center;justify-content:center;text-decoration:none;border:1px solid #ddd}.fr-sheet-actions a.black{background:#111;color:#fff;border-color:#111}
      .fr-gallery{position:fixed;inset:0;z-index:110;background:#050505;display:none;flex-direction:column}.fr-gallery.open{display:flex}.fr-gallery-top{height:64px;padding:0 16px;display:flex;align-items:center;justify-content:space-between;color:#fff}.fr-gallery-top button{width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#fff;font-size:21px}.fr-gallery-count{font-size:13px}.fr-gallery-stage{flex:1;display:flex;align-items:center;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none}.fr-gallery-stage::-webkit-scrollbar{display:none}.fr-gallery-item{min-width:100%;height:100%;scroll-snap-align:start;display:grid;place-items:center}.fr-gallery-item img{width:100%;max-height:88vh;object-fit:contain}.fr-gallery-tabs{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none;padding:10px 16px calc(12px + env(safe-area-inset-bottom));background:#050505}.fr-gallery-tabs::-webkit-scrollbar{display:none}.fr-gallery-tabs button{border:1px solid rgba(255,255,255,.3);background:transparent;color:#fff;border-radius:999px;padding:7px 11px;font-size:11px;white-space:nowrap}.fr-gallery-tabs button.active{background:#fff;color:#111;border-color:#fff}
    }
    @media(min-width:768px){#stluxe-fresha{display:none!important}}
  `;
  document.head.appendChild(style);

  const root = document.createElement('div');
  root.id = 'stluxe-fresha';
  root.innerHTML = `
    <div class="fr-page">
      <header class="fr-top">
        <a class="fr-brand" href="#fr-top">STLuxe</a>
        <a class="fr-yandex" href="${YANDEX}" target="_blank" rel="noopener">Яндекс Карты ${icon('chevron')}</a>
      </header>

      <section class="fr-media" id="fr-top">
        <div class="fr-track" id="frTrack">${photos.map((p,i)=>`<button class="fr-slide" data-index="${i}" type="button"><img src="${p.src}" alt="${p.alt}"></button>`).join('')}</div>
        <div class="fr-media-actions">
          <button class="fr-round" id="frBack" type="button" aria-label="Назад">${icon('arrowLeft')}</button>
          <div class="fr-media-right">
            <button class="fr-round" id="frShare" type="button" aria-label="Поделиться">${icon('share')}</button>
            <button class="fr-round" id="frHeart" type="button" aria-label="В избранное">${icon('heart')}</button>
          </div>
        </div>
        <div class="fr-counter" id="frCounter">1/${photos.length}</div>
      </section>

      <section class="fr-hero" id="frHero">
        <h1 class="fr-title">STLuxe</h1>
        <p class="fr-type">Салон красоты</p>
        <div class="fr-rating"><span class="fr-star">★</span><strong>4,9</strong><span>(86)</span></div>
        <div class="fr-hours">${icon('clock')}<span><span class="fr-state" id="frState">Закрыто</span> <span id="frStateTail">— открывается в 10:00</span></span></div>
        <a class="fr-address" href="${YANDEX}" target="_blank" rel="noopener">${icon('pin')}<span>Московская область, Ивантеевка, улица Победы, 16</span></a>
      </section>

      <section class="fr-section" id="frOverview">
        <h2>Общие сведения</h2>
        <p class="fr-copy">STLuxe — салон красоты в Ивантеевке с большим выбором услуг: ногтевой сервис, парикмахерские услуги, косметология, оформление бровей и ресниц, перманентный макияж и депиляция.</p>
        <div class="fr-facts"><div class="fr-fact"><strong>4,9</strong><span>рейтинг на Яндекс Картах</span></div><div class="fr-fact"><strong>70+</strong><span>услуг и направлений</span></div></div>
      </section>

      <section class="fr-section" id="frPortfolio">
        <div class="fr-head"><h2>Портфолио</h2><button class="fr-link" id="frOpenGallery" type="button">Все работы</button></div>
        <div class="fr-filters" id="frFilters">
          <button class="fr-filter active" data-filter="all">Все работы</button>
          <button class="fr-filter" data-filter="nails">Ногти</button>
          <button class="fr-filter" data-filter="hair">Волосы</button>
          <button class="fr-filter" data-filter="interior">Салон</button>
        </div>
        <div class="fr-grid" id="frGrid">${photos.slice(0,4).map((p,i)=>`<button class="fr-photo" type="button" data-category="${p.cat}" data-index="${i}"><img src="${p.src}" alt="${p.alt}"></button>`).join('')}</div>
      </section>

      <section class="fr-section" id="frServices">
        <div class="fr-head"><h2>Услуги</h2></div>
        <div class="fr-filters" id="frServiceFilters">
          <button class="fr-filter active" data-service="all">Все</button>
          <button class="fr-filter" data-service="nails">Ногти</button>
          <button class="fr-filter" data-service="hair">Волосы</button>
          <button class="fr-filter" data-service="face">Косметология</button>
          <button class="fr-filter" data-service="brows">Брови</button>
          <button class="fr-filter" data-service="lashes">Ресницы</button>
          <button class="fr-filter" data-service="depilation">Депиляция</button>
        </div>
        <div class="fr-services" id="frServicesList"></div>
        <button class="fr-more" id="frServicesMore" type="button">Посмотреть ещё</button>
      </section>

      <section class="fr-section" id="frTeam">
        <h2>Специалисты</h2>
        <div class="fr-team">
          ${[
            ['Nail-мастер','Маникюр · педикюр · наращивание'],
            ['Парикмахер-колорист','Стрижки · окрашивание · укладки'],
            ['Косметолог','Уход · чистки · пилинги'],
            ['Бровист / Lash-мастер','Брови · ресницы'],
            ['Мастер депиляции','Шугаринг · воск']
          ].map(([name,role])=>`<button class="fr-person" type="button" data-role="${name}"><span class="fr-person-pic"><span class="fr-person-badge">★ —</span><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M5 21c.4-4.2 2.8-6.5 7-6.5s6.6 2.3 7 6.5"/></svg></span><span class="fr-person-name">${name}</span><span class="fr-person-role">${role}</span></button>`).join('')}
        </div>
      </section>

      <section class="fr-section" id="frReviews">
        <div class="fr-head"><h2>Отзывы</h2><a class="fr-link" href="${YANDEX}" target="_blank" rel="noopener">Яндекс Карты</a></div>
        <div class="fr-reviews">${reviews.map(([name,text])=>`<article class="fr-review"><div class="fr-review-top"><strong>${name}</strong><span class="fr-review-stars">★★★★★</span></div><p>${text}</p></article>`).join('')}</div>
      </section>

      <section class="fr-section" id="frAbout">
        <h2>О салоне</h2>
        <p class="fr-copy">В STLuxe собраны несколько направлений красоты в одном месте. Клиент может выбрать услугу по задаче — от маникюра и окрашивания до косметологии, ресниц и депиляции.</p>
        <p class="fr-copy">На этой версии страницы мы показываем только подтверждённые данные салона. Персональные профили специалистов будут заполнены после получения информации о команде.</p>
      </section>

      <section class="fr-section" id="frVisit">
        <h2>Визит</h2>
        <div class="fr-visit">
          <div class="fr-visit-row">${icon('pin')}<div><strong>Адрес</strong><span>Московская область, Ивантеевка, улица Победы, 16</span></div></div>
          <div class="fr-visit-row">${icon('clock')}<div><strong>Часы работы</strong><span>Вт–Вс 10:00–20:00<br>Понедельник — выходной</span></div></div>
          <div class="fr-visit-row">${icon('phone')}<div><strong>Телефон</strong><span>+7 916 355-22-22</span></div></div>
        </div>
        <div class="fr-visit-actions"><a class="fr-action" href="${YANDEX}" target="_blank" rel="noopener">Маршрут</a><a class="fr-action black" href="tel:${PHONE}">Позвонить</a></div>
      </section>

      <footer class="fr-footer"><strong>STLuxe</strong><span>Цифровой офис на TANEM</span></footer>
    </div>

    <div class="fr-bookbar" id="frBookbar"><div class="fr-book-copy">Доступно 70+ услуг</div><button class="fr-book-button" id="frBookBtn" type="button">Забронировать</button></div>

    <div class="fr-modal" id="frModal"><div class="fr-sheet"><div class="fr-sheet-top"><div><h3 id="frModalTitle">Запись в STLuxe</h3><p id="frModalText">Онлайн-ссылка салона не указана, поэтому сейчас запись доступна через прямой контакт.</p></div><button class="fr-close" id="frModalClose" type="button">×</button></div><div class="fr-sheet-actions"><a class="black" href="tel:${PHONE}">Позвонить</a><a href="${YANDEX}" target="_blank" rel="noopener">Открыть Яндекс Карты</a></div></div></div>

    <div class="fr-gallery" id="frGallery"><div class="fr-gallery-top"><button id="frGalleryClose" type="button">×</button><span class="fr-gallery-count" id="frGalleryCount">1/${photos.length}</span><span style="width:40px"></span></div><div class="fr-gallery-stage" id="frGalleryStage">${photos.map((p,i)=>`<div class="fr-gallery-item" data-gindex="${i}"><img src="${p.src}" alt="${p.alt}"></div>`).join('')}</div><div class="fr-gallery-tabs" id="frGalleryTabs"><button class="active" data-gfilter="all">Все</button><button data-gfilter="nails">Ногти</button><button data-gfilter="hair">Волосы</button><button data-gfilter="interior">Салон</button></div></div>
  `;
  document.body.appendChild(root);

  const track = root.querySelector('#frTrack');
  const counter = root.querySelector('#frCounter');
  const slides = [...root.querySelectorAll('.fr-slide')];
  const updateCounter = () => {
    const index = Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
    counter.textContent = `${Math.min(index + 1, photos.length)}/${photos.length}`;
  };
  track.addEventListener('scroll', () => requestAnimationFrame(updateCounter), {passive:true});
  slides.forEach(slide => slide.addEventListener('click', () => openGallery(Number(slide.dataset.index))));

  root.querySelector('#frBack').addEventListener('click', () => {
    if (history.length > 1) history.back(); else window.scrollTo({top:0,behavior:'smooth'});
  });
  root.querySelector('#frShare').addEventListener('click', async () => {
    try { if (navigator.share) await navigator.share({title:'STLuxe',url:location.href}); else await navigator.clipboard.writeText(location.href); } catch(e) {}
  });
  root.querySelector('#frHeart').addEventListener('click', e => {
    e.currentTarget.classList.toggle('saved');
    e.currentTarget.style.background = e.currentTarget.classList.contains('saved') ? '#111' : 'rgba(255,255,255,.92)';
    e.currentTarget.style.color = e.currentTarget.classList.contains('saved') ? '#fff' : '#111';
  });

  const state = root.querySelector('#frState');
  const stateTail = root.querySelector('#frStateTail');
  const updateOpenState = () => {
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Moscow',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(now);
    const day = parts.find(p=>p.type==='weekday')?.value;
    const hour = Number(parts.find(p=>p.type==='hour')?.value || 0);
    const minute = Number(parts.find(p=>p.type==='minute')?.value || 0);
    const minutes = hour * 60 + minute;
    const isMonday = day === 'Mon';
    const isOpen = !isMonday && minutes >= 600 && minutes < 1200;
    state.textContent = isOpen ? 'Открыто' : 'Закрыто';
    state.className = `fr-state ${isOpen ? 'open' : 'closed'}`;
    if (isOpen) stateTail.textContent = '— закрывается в 20:00';
    else if (isMonday) stateTail.textContent = '— открывается во вторник в 10:00';
    else if (minutes < 600) stateTail.textContent = '— открывается в 10:00';
    else stateTail.textContent = '— открывается завтра в 10:00';
  };
  updateOpenState();
  setInterval(updateOpenState, 60000);

  const modal = root.querySelector('#frModal');
  const modalTitle = root.querySelector('#frModalTitle');
  const modalText = root.querySelector('#frModalText');
  const openBooking = (service='') => {
    modalTitle.textContent = service || 'Запись в STLuxe';
    modalText.textContent = service ? 'Для этой услуги сейчас доступна запись через прямой контакт салона.' : 'Онлайн-ссылка салона не указана, поэтому сейчас запись доступна через прямой контакт.';
    modal.classList.add('open'); document.body.style.overflow='hidden';
  };
  root.querySelector('#frBookBtn').addEventListener('click', () => openBooking());
  root.querySelector('#frModalClose').addEventListener('click', () => {modal.classList.remove('open');document.body.style.overflow='';});
  modal.addEventListener('click', e => {if(e.target===modal){modal.classList.remove('open');document.body.style.overflow='';}});

  const servicesList = root.querySelector('#frServicesList');
  const moreBtn = root.querySelector('#frServicesMore');
  let serviceFilter = 'all';
  let expanded = false;
  const renderServices = () => {
    const filtered = services.filter(s => serviceFilter === 'all' || s[0] === serviceFilter);
    const shown = expanded ? filtered : filtered.slice(0,6);
    servicesList.innerHTML = shown.map(s => `<article class="fr-service"><div class="fr-service-name">${s[1]}</div><div class="fr-service-bottom"><span class="fr-price">${s[2]}</span><button class="fr-reserve" type="button" data-book="${s[1].replace(/"/g,'&quot;')}">Забронировать</button></div></article>`).join('');
    servicesList.querySelectorAll('[data-book]').forEach(btn=>btn.addEventListener('click',()=>openBooking(btn.dataset.book)));
    moreBtn.style.display = filtered.length > 6 ? 'block' : 'none';
    moreBtn.textContent = expanded ? 'Свернуть' : 'Посмотреть ещё';
  };
  renderServices();
  moreBtn.addEventListener('click',()=>{expanded=!expanded;renderServices();});
  root.querySelectorAll('[data-service]').forEach(btn=>btn.addEventListener('click',()=>{
    root.querySelectorAll('[data-service]').forEach(x=>x.classList.remove('active')); btn.classList.add('active');
    serviceFilter=btn.dataset.service; expanded=false; renderServices();
  }));

  root.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    root.querySelectorAll('[data-filter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
    const f=btn.dataset.filter; root.querySelectorAll('.fr-photo').forEach(card=>card.hidden=f!=='all'&&photos[Number(card.dataset.index)].cat!==f);
  }));
  root.querySelectorAll('.fr-photo').forEach(card=>card.addEventListener('click',()=>openGallery(Number(card.dataset.index))));

  const gallery = root.querySelector('#frGallery');
  const galleryStage = root.querySelector('#frGalleryStage');
  const galleryCount = root.querySelector('#frGalleryCount');
  function openGallery(index=0){
    gallery.classList.add('open');document.body.style.overflow='hidden';
    setTimeout(()=>{galleryStage.scrollLeft=index*galleryStage.clientWidth;galleryCount.textContent=`${index+1}/${photos.length}`;},0);
  }
  root.querySelector('#frOpenGallery').addEventListener('click',()=>openGallery(0));
  root.querySelector('#frGalleryClose').addEventListener('click',()=>{gallery.classList.remove('open');document.body.style.overflow='';});
  galleryStage.addEventListener('scroll',()=>requestAnimationFrame(()=>{
    const i=Math.round(galleryStage.scrollLeft/Math.max(1,galleryStage.clientWidth));galleryCount.textContent=`${i+1}/${photos.length}`;
  }),{passive:true});
  root.querySelectorAll('[data-gfilter]').forEach(btn=>btn.addEventListener('click',()=>{
    root.querySelectorAll('[data-gfilter]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
    const f=btn.dataset.gfilter; const first=photos.findIndex(p=>f==='all'||p.cat===f); if(first>=0)galleryStage.scrollTo({left:first*galleryStage.clientWidth,behavior:'smooth'});
  }));

  root.querySelectorAll('.fr-person').forEach(card=>card.addEventListener('click',()=>openBooking(card.dataset.role)));

  const bookbar = root.querySelector('#frBookbar');
  const overview = root.querySelector('#frOverview');
  const about = root.querySelector('#frAbout');
  const syncBookbar = () => {
    const y = window.scrollY;
    const start = overview.getBoundingClientRect().top + y - 120;
    const stop = about.getBoundingClientRect().top + y - window.innerHeight * .45;
    bookbar.classList.toggle('visible', y >= start && y < stop);
  };
  window.addEventListener('scroll', syncBookbar, {passive:true});
  window.addEventListener('resize', syncBookbar);
  syncBookbar();
})();