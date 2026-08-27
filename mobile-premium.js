(() => {
  const MQ = '(max-width: 767px)';
  if (!window.matchMedia(MQ).matches) return;

  const yandexUrl = 'https://yandex.ru/navi/org/stluxe/51087098664?si=4x8mkunbkhugdwe7bkyfw55fh0';
  const phone = '+79163552222';
  const photos = [
    {src:'assets/images/salon-reception.webp', cat:'interior', alt:'Интерьер STLuxe'},
    {src:'assets/images/salon-nail-zone.webp', cat:'interior', alt:'Рабочая зона STLuxe'},
    {src:'assets/images/nails-pink.webp', cat:'nails', alt:'Маникюр STLuxe'},
    {src:'assets/images/nails-green.webp', cat:'nails', alt:'Дизайн ногтей STLuxe'},
    {src:'assets/images/nails-light.webp', cat:'nails', alt:'Маникюр STLuxe'},
    {src:'assets/images/hair-style.webp', cat:'hair', alt:'Работа с волосами STLuxe'}
  ];

  const originalServices = [...document.querySelectorAll('.service')].map(el => ({
    name: el.querySelector('.service-name')?.textContent.trim() || '',
    note: el.querySelector('.service-note')?.textContent.trim() || '',
    price: el.querySelector('.price')?.textContent.trim() || '',
    category: el.dataset.serviceCategory || 'all'
  })).filter(x => x.name);

  const originalReviews = [...document.querySelectorAll('.review-card')].slice(0,3).map(el => ({
    name: el.querySelector('.review-name')?.textContent.trim() || 'Клиент STLuxe',
    text: el.querySelector('.review-text')?.textContent.trim() || '',
  })).filter(x => x.text);

  const style = document.createElement('style');
  style.id = 'stluxe-mobile-premium-style';
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap');
    @media ${MQ} {
      html,body{margin:0!important;padding:0!important;background:#fff!important;color:#111!important;overflow-x:hidden!important}
      body{font-family:'Manrope',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif!important;font-weight:400!important;-webkit-font-smoothing:antialiased!important}
      body > *:not(#stluxe-mobile-premium):not(script):not(style){display:none!important}
      #stluxe-mobile-premium{display:block!important}
      #stluxe-mobile-premium *{box-sizing:border-box}
      #stluxe-mobile-premium button,#stluxe-mobile-premium a{font:inherit;color:inherit}
      #stluxe-mobile-premium button{cursor:pointer}
      #stluxe-mobile-premium img{display:block;width:100%}
      .sp-app{width:100%;background:#fff;padding-bottom:108px}
      .sp-pad{padding-left:18px;padding-right:18px}
      .sp-topbar{height:62px;display:flex;align-items:center;justify-content:space-between;padding:0 18px;background:#fff;position:relative;z-index:5}
      .sp-logo{font-size:16px;letter-spacing:-.025em;font-weight:500}
      .sp-yandex{display:flex;align-items:flex-end;gap:5px;font-size:12px;line-height:1.1;text-decoration:none;border-bottom:1px solid #151515;padding-bottom:3px;font-weight:400}
      .sp-yandex svg{width:13px;height:13px;stroke-width:1.5}

      .sp-gallery{position:relative;width:100vw;height:min(74vw,390px);overflow:hidden;background:#f0f0f0}
      .sp-gallery-track{height:100%;display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}
      .sp-gallery-track::-webkit-scrollbar{display:none}
      .sp-gallery-slide{border:0;padding:0;margin:0;min-width:100%;height:100%;scroll-snap-align:start;background:#f0f0f0}
      .sp-gallery-slide img{height:100%;object-fit:cover}
      .sp-count{position:absolute;right:13px;bottom:13px;min-width:38px;height:24px;padding:0 9px;border-radius:999px;background:rgba(10,10,10,.58);backdrop-filter:blur(10px);color:#fff;display:grid;place-items:center;font-size:10px;letter-spacing:.03em;font-weight:500}

      .sp-hero-card{position:relative;z-index:3;margin-top:-17px;background:#fff;border-radius:24px 24px 0 0;padding:25px 18px 19px}
      .sp-title{font-size:28px;line-height:1.08;letter-spacing:-.045em;font-weight:500;margin:0 0 7px}
      .sp-subtitle{font-size:13px;color:#686868;margin:0 0 13px;line-height:1.45;font-weight:400}
      .sp-rating{display:flex;align-items:center;gap:7px;font-size:13px;margin-bottom:13px;color:#1a1a1a}
      .sp-rating svg{width:15px;height:15px;fill:#111}
      .sp-status{font-size:12px;color:#5f5f5f;margin-bottom:14px}
      .sp-status strong{color:#151515;font-weight:500}
      .sp-address{display:flex;gap:10px;align-items:center;background:#f5f5f5;border-radius:16px;padding:12px 13px;font-size:12px;line-height:1.35;margin-bottom:16px;color:#2f2f2f}
      .sp-address svg{width:18px;height:18px;flex:0 0 auto;stroke:#111;stroke-width:1.5}
      .sp-hero-actions{display:grid;grid-template-columns:1fr 1fr;gap:9px}
      .sp-btn{height:46px;border-radius:999px;border:1px solid #d9d9d9;background:#fff;font-size:12px;font-weight:500;display:flex;align-items:center;justify-content:center;text-decoration:none;padding:0 15px}
      .sp-btn-black{background:#111;color:#fff!important;border-color:#111}

      .sp-nav-wrap{position:sticky;top:8px;z-index:30;padding:0 12px;margin:0 0 16px}
      .sp-nav{display:flex;gap:3px;overflow-x:auto;scrollbar-width:none;background:rgba(255,255,255,.94);backdrop-filter:blur(18px);border:1px solid #ececec;border-radius:999px;padding:5px;box-shadow:0 8px 28px rgba(0,0,0,.07)}
      .sp-nav::-webkit-scrollbar{display:none}
      .sp-nav button{border:0;background:transparent;border-radius:999px;white-space:nowrap;padding:8px 11px;font-size:10.5px;color:#666;font-weight:500}
      .sp-nav button.active{background:#111;color:#fff}

      .sp-section{padding:23px 18px 8px;scroll-margin-top:72px}
      .sp-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:15px;margin-bottom:14px}
      .sp-heading h2{margin:0;font-size:21px;line-height:1.15;letter-spacing:-.035em;font-weight:500}
      .sp-heading p{margin:5px 0 0;font-size:11px;color:#777;line-height:1.4}
      .sp-text-link{border:0;background:transparent;padding:0 0 2px;border-bottom:1px solid #111;font-size:10.5px;font-weight:500;white-space:nowrap}

      .sp-filters{display:flex;gap:7px;overflow-x:auto;scrollbar-width:none;margin:0 -18px 13px;padding:0 18px}
      .sp-filters::-webkit-scrollbar{display:none}
      .sp-filter{border:1px solid #dfdfdf;background:#fff;border-radius:999px;padding:8px 12px;white-space:nowrap;font-size:10.5px;color:#616161;font-weight:500}
      .sp-filter.active{background:#111;border-color:#111;color:#fff}
      .sp-portfolio{display:grid;grid-template-columns:1fr 1fr;gap:7px}
      .sp-work{border:0;padding:0;background:#eee;overflow:hidden;border-radius:14px;aspect-ratio:1/1.12;position:relative}
      .sp-work:first-child{grid-column:1/-1;aspect-ratio:1.62/1}
      .sp-work img{height:100%;object-fit:cover}
      .sp-work[hidden]{display:none}
      .sp-gallery-open{margin-top:11px;width:100%;height:43px;border:1px solid #ddd;border-radius:999px;background:#fff;font-size:11px;font-weight:500}

      .sp-service-tabs{display:flex;gap:7px;overflow-x:auto;scrollbar-width:none;margin:0 -18px 10px;padding:0 18px}
      .sp-service-tabs::-webkit-scrollbar{display:none}
      .sp-service-tabs button{border:0;background:#f4f4f4;border-radius:999px;padding:8px 11px;white-space:nowrap;font-size:10.5px;color:#5f5f5f;font-weight:500}
      .sp-service-tabs button.active{background:#111;color:#fff}
      .sp-service-list{border-top:1px solid #ececec}
      .sp-service{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:14px;align-items:center;padding:14px 0;border-bottom:1px solid #ececec}
      .sp-service-name{font-size:12.5px;line-height:1.42;color:#191919;font-weight:500}
      .sp-service-note{margin-top:4px;font-size:10px;line-height:1.35;color:#888}
      .sp-service-price{text-align:right;font-size:11.5px;font-weight:500;white-space:nowrap}
      .sp-service-pick{display:block;margin-top:5px;margin-left:auto;border:0;background:transparent;border-bottom:1px solid #111;padding:0 0 2px;font-size:9.5px;font-weight:500}
      .sp-more{width:100%;height:43px;margin-top:11px;border:1px solid #ddd;border-radius:999px;background:#fff;font-size:11px;font-weight:500}

      .sp-team{display:flex;gap:10px;overflow-x:auto;scrollbar-width:none;margin:0 -18px;padding:0 18px 4px}
      .sp-team::-webkit-scrollbar{display:none}
      .sp-person{min-width:142px;border:1px solid #e5e5e5;border-radius:18px;background:#fff;padding:13px;text-align:left}
      .sp-avatar{width:54px;height:54px;border-radius:50%;background:#f0f0f0;display:grid;place-items:center;margin-bottom:12px}
      .sp-avatar svg{width:27px;height:27px;fill:#aaa}
      .sp-person-title{font-size:12px;font-weight:500;margin-bottom:4px}
      .sp-person-note{font-size:9.5px;line-height:1.35;color:#888}

      .sp-review-summary{display:flex;align-items:center;justify-content:space-between;padding:14px 0;border-top:1px solid #ececec;border-bottom:1px solid #ececec;margin-bottom:8px}
      .sp-review-score{font-size:28px;letter-spacing:-.05em;font-weight:500}
      .sp-review-caption{font-size:10px;color:#777;margin-top:3px}
      .sp-review-card{padding:14px 0;border-bottom:1px solid #ececec}
      .sp-review-top{display:flex;justify-content:space-between;gap:10px;margin-bottom:7px;font-size:10.5px;font-weight:500}
      .sp-review-stars{letter-spacing:1px;font-size:9px}
      .sp-review-text{font-size:11.5px;line-height:1.55;color:#4a4a4a;margin:0}

      .sp-about{background:#f5f5f5;border-radius:18px;padding:16px;font-size:11.5px;line-height:1.6;color:#4a4a4a}
      .sp-visit{border-top:1px solid #ececec}
      .sp-visit-row{display:flex;gap:11px;align-items:flex-start;padding:13px 0;border-bottom:1px solid #ececec}
      .sp-visit-row svg{width:18px;height:18px;stroke:#111;stroke-width:1.5;flex:0 0 auto}
      .sp-visit-row strong{display:block;font-size:11px;font-weight:500;margin-bottom:3px}
      .sp-visit-row span{display:block;font-size:10.5px;color:#777;line-height:1.4}
      .sp-visit-actions{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin-top:13px}

      .sp-footer{padding:28px 18px 116px;text-align:center;font-size:9.5px;color:#8a8a8a}
      .sp-footer strong{display:block;color:#222;font-size:12px;font-weight:500;margin-bottom:5px}

      .sp-bookbar{position:fixed;left:12px;right:12px;bottom:max(10px,env(safe-area-inset-bottom));z-index:50;height:62px;border-radius:999px;background:rgba(255,255,255,.96);backdrop-filter:blur(20px);border:1px solid #e5e5e5;box-shadow:0 12px 34px rgba(0,0,0,.13);display:flex;align-items:center;justify-content:space-between;padding:7px 7px 7px 16px;gap:10px}
      .sp-bookbar-copy{min-width:0}
      .sp-bookbar-copy strong{display:block;font-size:10.5px;font-weight:500;white-space:nowrap}
      .sp-bookbar-copy span{display:block;margin-top:2px;font-size:9px;color:#888;white-space:nowrap}
      .sp-bookbar button{height:48px;border:0;border-radius:999px;background:#111;color:#fff;padding:0 20px;font-size:11px;font-weight:500}

      .sp-lightbox{position:fixed;inset:0;background:#050505;z-index:100;display:none;align-items:center;justify-content:center}
      .sp-lightbox.open{display:flex}
      .sp-lightbox img{width:100%;max-height:88vh;object-fit:contain}
      .sp-lightbox-close{position:absolute;top:max(16px,env(safe-area-inset-top));right:16px;width:40px;height:40px;border-radius:50%;border:1px solid rgba(255,255,255,.35);background:rgba(0,0,0,.35);color:#fff!important;font-size:23px;font-weight:400;line-height:1}

      .sp-sheet{position:fixed;inset:0;z-index:90;background:rgba(0,0,0,.38);display:none;align-items:flex-end;padding:10px}
      .sp-sheet.open{display:flex}
      .sp-sheet-card{width:100%;max-height:82vh;overflow:auto;background:#fff;border-radius:24px;padding:18px}
      .sp-sheet-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px}
      .sp-sheet-head h3{font-size:19px;letter-spacing:-.03em;font-weight:500;margin:0}
      .sp-sheet-head p{font-size:10.5px;line-height:1.45;color:#777;margin:5px 0 0}
      .sp-sheet-close{width:34px;height:34px;border-radius:50%;border:1px solid #ddd;background:#fff;font-size:18px}
      .sp-sheet-services{border-top:1px solid #eee;margin-top:12px}
      .sp-sheet-actions{display:grid;gap:8px;margin-top:15px}
    }
    @media (min-width:768px){#stluxe-mobile-premium{display:none!important}}
  `;
  document.head.appendChild(style);

  const root = document.createElement('div');
  root.id = 'stluxe-mobile-premium';
  root.innerHTML = `
    <div class="sp-app">
      <header class="sp-topbar">
        <a href="#sp-top" class="sp-logo">STLuxe</a>
        <a class="sp-yandex" href="${yandexUrl}" target="_blank" rel="noopener">Яндекс Карты
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M7 17 17 7M9 7h8v8"/></svg>
        </a>
      </header>

      <section id="sp-top">
        <div class="sp-gallery">
          <div class="sp-gallery-track" id="spGalleryTrack">
            ${photos.map((p,i)=>`<button class="sp-gallery-slide" type="button" data-index="${i}"><img src="${p.src}" alt="${p.alt}"></button>`).join('')}
          </div>
          <div class="sp-count" id="spCount">1/${photos.length}</div>
        </div>
        <div class="sp-hero-card">
          <h1 class="sp-title">STLuxe</h1>
          <p class="sp-subtitle">Салон красоты полного цикла · Ивантеевка</p>
          <div class="sp-rating">
            <svg viewBox="0 0 24 24"><path d="m12 2.8 2.77 5.62 6.2.9-4.49 4.37 1.06 6.18L12 16.96l-5.54 2.91 1.06-6.18-4.49-4.37 6.2-.9L12 2.8Z"/></svg>
            <span>4,9 (87)</span>
          </div>
          <div class="sp-status" id="spStatus"></div>
          <a class="sp-address" href="${yandexUrl}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg>
            <span>Московская область, Ивантеевка, улица Победы, 16</span>
          </a>
          <div class="sp-hero-actions">
            <a class="sp-btn" href="#sp-portfolio">Посмотреть работы</a>
            <button class="sp-btn sp-btn-black" type="button" data-book>Записаться</button>
          </div>
        </div>
      </section>

      <div class="sp-nav-wrap">
        <nav class="sp-nav" id="spNav">
          <button class="active" data-go="sp-top">Фото</button>
          <button data-go="sp-portfolio">Портфолио</button>
          <button data-go="sp-services">Услуги</button>
          <button data-go="sp-team">Специалисты</button>
          <button data-go="sp-reviews">Отзывы</button>
          <button data-go="sp-visit">Визит</button>
        </nav>
      </div>

      <section class="sp-section" id="sp-portfolio">
        <div class="sp-heading"><div><h2>Портфолио</h2><p>Работы и пространство STLuxe</p></div></div>
        <div class="sp-filters" id="spPortfolioFilters">
          <button class="sp-filter active" data-filter="all">Все работы</button>
          <button class="sp-filter" data-filter="nails">Ногти</button>
          <button class="sp-filter" data-filter="hair">Волосы</button>
          <button class="sp-filter" data-filter="interior">Салон</button>
        </div>
        <div class="sp-portfolio" id="spPortfolio">
          ${photos.map((p,i)=>`<button class="sp-work" data-cat="${p.cat}" data-index="${i}" type="button"><img src="${p.src}" alt="${p.alt}"></button>`).join('')}
        </div>
        <button class="sp-gallery-open" id="spGalleryOpen" type="button">Открыть галерею</button>
      </section>

      <section class="sp-section" id="sp-services">
        <div class="sp-heading"><div><h2>Услуги</h2><p>Основные направления салона</p></div></div>
        <div class="sp-service-tabs" id="spServiceTabs">
          <button class="active" data-service-filter="all">Все</button>
          <button data-service-filter="nails">Ногти</button>
          <button data-service-filter="hair">Волосы</button>
          <button data-service-filter="face">Косметология</button>
          <button data-service-filter="brows">Брови и ресницы</button>
          <button data-service-filter="depilation">Депиляция</button>
        </div>
        <div class="sp-service-list" id="spServiceList"></div>
        <button class="sp-more" id="spServicesMore" type="button">Посмотреть ещё</button>
      </section>

      <section class="sp-section" id="sp-team">
        <div class="sp-heading"><div><h2>Специалисты</h2><p>Персональные профили добавим после знакомства с командой</p></div></div>
        <div class="sp-team">
          ${[
            ['Nail-мастер','Маникюр · педикюр · дизайн'],
            ['Парикмахер-колорист','Стрижки · окрашивание · уход'],
            ['Косметолог','Чистки · пилинги · уход'],
            ['Бровист / Lash-мастер','Брови · ресницы'],
            ['Мастер депиляции','Шугаринг · воск']
          ].map(([title,note])=>`<button class="sp-person" type="button" data-role="${title}" data-note="${note}"><span class="sp-avatar"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M5 21c.4-4.2 2.8-6.5 7-6.5s6.6 2.3 7 6.5Z"/></svg></span><div class="sp-person-title">${title}</div><div class="sp-person-note">${note}</div></button>`).join('')}
        </div>
      </section>

      <section class="sp-section" id="sp-reviews">
        <div class="sp-heading"><div><h2>Отзывы</h2><p>Реальные отзывы из Яндекс Карт</p></div><a class="sp-text-link" href="${yandexUrl}" target="_blank" rel="noopener">Все отзывы</a></div>
        <div class="sp-review-summary"><div><div class="sp-review-score">4,9</div><div class="sp-review-caption">87 отзывов</div></div><div class="sp-review-stars">★★★★★</div></div>
        <div id="spReviewList"></div>
      </section>

      <section class="sp-section" id="sp-about">
        <div class="sp-heading"><div><h2>О салоне</h2></div></div>
        <div class="sp-about">STLuxe — салон красоты в Ивантеевке с несколькими направлениями: ногтевой сервис, волосы, косметология, брови и ресницы, депиляция и другие услуги. Персональные истории мастеров добавим после знакомства с командой.</div>
      </section>

      <section class="sp-section" id="sp-visit">
        <div class="sp-heading"><div><h2>Визит</h2><p>Всё необходимое перед посещением</p></div></div>
        <div class="sp-visit">
          <div class="sp-visit-row"><svg viewBox="0 0 24 24" fill="none"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg><div><strong>Адрес</strong><span>Московская область, Ивантеевка, ул. Победы, 16</span></div></div>
          <div class="sp-visit-row"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg><div><strong>График</strong><span>Вт–Вс 10:00–20:00 · Понедельник — выходной</span></div></div>
          <div class="sp-visit-row"><svg viewBox="0 0 24 24" fill="none"><path d="M7 3h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3c0 2-1 3-3 3C10 20 4 14 4 6c0-2 1-3 3-3Z"/></svg><div><strong>Телефон</strong><span>+7 916 355-22-22</span></div></div>
        </div>
        <div class="sp-visit-actions"><a class="sp-btn" href="${yandexUrl}" target="_blank" rel="noopener">Маршрут</a><a class="sp-btn sp-btn-black" href="tel:${phone}">Позвонить</a></div>
      </section>

      <footer class="sp-footer"><strong>STLuxe</strong>Цифровой офис на TANEM</footer>
    </div>

    <div class="sp-bookbar">
      <div class="sp-bookbar-copy"><strong>Доступно 70+ услуг</strong><span>Ногти · волосы · косметология и другое</span></div>
      <button type="button" data-book>Забронировать</button>
    </div>

    <div class="sp-lightbox" id="spLightbox"><button class="sp-lightbox-close" id="spLightboxClose" aria-label="Закрыть">×</button><img id="spLightboxImage" alt="STLuxe"></div>
    <div class="sp-sheet" id="spSheet"><div class="sp-sheet-card"><div class="sp-sheet-head"><div><h3 id="spSheetTitle">Запись в STLuxe</h3><p id="spSheetNote">Онлайн-ссылка салона пока не указана. Можно связаться по телефону.</p></div><button class="sp-sheet-close" id="spSheetClose" type="button">×</button></div><div class="sp-sheet-services" id="spSheetServices"></div><div class="sp-sheet-actions"><a class="sp-btn sp-btn-black" href="tel:${phone}">Позвонить в салон</a><a class="sp-btn" href="${yandexUrl}" target="_blank" rel="noopener">Открыть Яндекс Карты</a></div></div></div>
  `;
  document.body.appendChild(root);

  function statusText(){
    const moscow = new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Moscow'}));
    const day = moscow.getDay();
    const hour = moscow.getHours();
    if(day === 1) return '<strong>Закрыто</strong> — откроется во вторник в 10:00';
    if(hour < 10) return '<strong>Закрыто</strong> — откроется в 10:00';
    if(hour < 20) return '<strong>Открыто</strong> — до 20:00';
    if(day === 0) return '<strong>Закрыто</strong> — откроется во вторник в 10:00';
    return '<strong>Закрыто</strong> — откроется завтра в 10:00';
  }
  document.getElementById('spStatus').innerHTML = statusText();

  const track = document.getElementById('spGalleryTrack');
  const count = document.getElementById('spCount');
  let countRaf = 0;
  track.addEventListener('scroll',()=>{
    cancelAnimationFrame(countRaf);
    countRaf = requestAnimationFrame(()=>{
      const i = Math.max(0,Math.min(photos.length-1,Math.round(track.scrollLeft/track.clientWidth)));
      count.textContent = `${i+1}/${photos.length}`;
    });
  },{passive:true});

  const lightbox = document.getElementById('spLightbox');
  const lightboxImg = document.getElementById('spLightboxImage');
  function openPhoto(i){lightboxImg.src=photos[i].src;lightbox.classList.add('open');document.body.style.overflow='hidden'}
  function closePhoto(){lightbox.classList.remove('open');document.body.style.overflow=''}
  root.querySelectorAll('[data-index]').forEach(el=>el.addEventListener('click',()=>openPhoto(Number(el.dataset.index))));
  document.getElementById('spLightboxClose').addEventListener('click',closePhoto);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)closePhoto()});

  const portfolioFilters = [...root.querySelectorAll('#spPortfolioFilters .sp-filter')];
  portfolioFilters.forEach(btn=>btn.addEventListener('click',()=>{
    portfolioFilters.forEach(x=>x.classList.toggle('active',x===btn));
    const f=btn.dataset.filter;
    root.querySelectorAll('.sp-work').forEach(card=>{card.hidden = f!=='all' && card.dataset.cat!==f});
  }));
  document.getElementById('spGalleryOpen').addEventListener('click',()=>openPhoto(0));

  const services = originalServices.length ? originalServices : [
    {name:'Маникюр с покрытием',note:'Ногтевой сервис',price:'по записи',category:'nails'},
    {name:'Женский педикюр',note:'Ногтевой сервис',price:'по записи',category:'nails'},
    {name:'Стрижка и укладка',note:'Парикмахерский зал',price:'по записи',category:'hair'},
    {name:'Окрашивание волос',note:'Парикмахерский зал',price:'по записи',category:'hair'},
    {name:'Чистка лица',note:'Косметология',price:'по записи',category:'face'}
  ];
  const list = document.getElementById('spServiceList');
  let serviceFilter='all', expanded=false;
  function renderServices(){
    const filtered = services.filter(s=>serviceFilter==='all'||s.category===serviceFilter);
    const visible = expanded ? filtered : filtered.slice(0,6);
    list.innerHTML = visible.map(s=>`<div class="sp-service"><div><div class="sp-service-name">${s.name}</div><div class="sp-service-note">${s.note}</div></div><div class="sp-service-price">${s.price}<button class="sp-service-pick" type="button" data-service-book="${s.name.replace(/"/g,'&quot;')}">Записаться</button></div></div>`).join('');
    document.getElementById('spServicesMore').style.display = filtered.length>6 ? 'block':'none';
    document.getElementById('spServicesMore').textContent = expanded ? 'Свернуть':'Посмотреть ещё';
    list.querySelectorAll('[data-service-book]').forEach(b=>b.addEventListener('click',()=>openBooking(b.dataset.serviceBook)));
  }
  renderServices();
  document.getElementById('spServicesMore').addEventListener('click',()=>{expanded=!expanded;renderServices()});
  const serviceTabs=[...root.querySelectorAll('#spServiceTabs button')];
  serviceTabs.forEach(btn=>btn.addEventListener('click',()=>{
    serviceTabs.forEach(x=>x.classList.toggle('active',x===btn));
    serviceFilter=btn.dataset.serviceFilter;expanded=false;renderServices();
  }));

  const reviewList=document.getElementById('spReviewList');
  reviewList.innerHTML=(originalReviews.length?originalReviews:[
    {name:'Отзывы STLuxe',text:'Откройте Яндекс Карты, чтобы посмотреть актуальные отзывы клиентов салона.'}
  ]).map(r=>`<article class="sp-review-card"><div class="sp-review-top"><span>${r.name}</span><span class="sp-review-stars">★★★★★</span></div><p class="sp-review-text">${r.text}</p></article>`).join('');

  const sheet=document.getElementById('spSheet');
  const sheetTitle=document.getElementById('spSheetTitle');
  const sheetNote=document.getElementById('spSheetNote');
  const sheetServices=document.getElementById('spSheetServices');
  function openBooking(service){
    sheetTitle.textContent=service?service:'Запись в STLuxe';
    sheetNote.textContent='Онлайн-ссылка салона пока не указана. Для записи можно связаться с салоном по телефону.';
    sheetServices.innerHTML='';
    sheet.classList.add('open');document.body.style.overflow='hidden';
  }
  function openRole(title,note){
    sheetTitle.textContent=title;
    sheetNote.textContent='Профиль специалиста подготовлен как архитектура. Имя, фото, опыт и персональные работы добавим после получения данных команды.';
    const keywords = note.toLowerCase();
    const relevant=services.filter(s=>keywords.split(' · ').some(k=>s.name.toLowerCase().includes(k.split(' ')[0]))).slice(0,5);
    sheetServices.innerHTML=(relevant.length?relevant:services.slice(0,4)).map(s=>`<div class="sp-service"><div><div class="sp-service-name">${s.name}</div><div class="sp-service-note">${s.note}</div></div><div class="sp-service-price">${s.price}</div></div>`).join('');
    sheet.classList.add('open');document.body.style.overflow='hidden';
  }
  function closeSheet(){sheet.classList.remove('open');document.body.style.overflow=''}
  root.querySelectorAll('[data-book]').forEach(b=>b.addEventListener('click',()=>openBooking()));
  root.querySelectorAll('.sp-person').forEach(b=>b.addEventListener('click',()=>openRole(b.dataset.role,b.dataset.note)));
  document.getElementById('spSheetClose').addEventListener('click',closeSheet);
  sheet.addEventListener('click',e=>{if(e.target===sheet)closeSheet()});

  const navButtons=[...root.querySelectorAll('#spNav button')];
  navButtons.forEach(btn=>btn.addEventListener('click',()=>{
    const el=document.getElementById(btn.dataset.go);if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
  }));
  const sections=['sp-top','sp-portfolio','sp-services','sp-team','sp-reviews','sp-visit'].map(id=>document.getElementById(id));
  const obs=new IntersectionObserver(entries=>{
    const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible)return;
    navButtons.forEach(b=>b.classList.toggle('active',b.dataset.go===visible.target.id));
  },{rootMargin:'-25% 0px -60% 0px',threshold:[0,.2,.5]});
  sections.forEach(s=>s&&obs.observe(s));
})();
