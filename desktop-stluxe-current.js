/* STLuxe desktop build — hero block. Mobile bundle is intentionally untouched. */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(min-width:768px)').matches) return;

  const PHONE='+79163552222';
  const ADDRESS='Ивантеевка, ул. Победы, 16';
  const PORTFOLIO=[
    {src:'hair.webp',alt:'Работа с волосами STLuxe'},
    {src:'nails2.webp',alt:'Маникюр STLuxe'},
    {src:'res.webp',alt:'Работа с ресницами STLuxe'},
    {src:'hair5.webp',alt:'Работа с волосами STLuxe'},
    {src:'nails7.webp',alt:'Маникюр STLuxe'},
    {src:'hair8.webp',alt:'Работа с волосами STLuxe'},
    {src:'nails10.webp',alt:'Маникюр STLuxe'}
  ];
  const DESKTOP_GALLERY=[
    'salon.webp','salon2.webp','salon3.webp','salon4.webp','salon6.webp','salon7.webp','salon8.webp','salon9.webp','salon10.webp','salon11.webp','salon12.webp','salon13.webp',
    'nails.webp','nails2.webp','nails3.webp','nails4.webp','nails5.webp','nails6.webp','nails7.webp','nails8.webp','nails9.webp','nails10.webp','nails11.webp','nails12.webp',
    'hair.webp','hair2.webp','hair3.webp','hair4.webp','hair5.webp','hair6.webp','hair7.webp','hair8.webp',
    'res.webp'
  ];

  const font=document.createElement('link');
  font.rel='stylesheet';
  font.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Manrope:wght@400;500;600;700&display=swap';
  document.head.appendChild(font);

  const css=document.createElement('style');
  css.id='stluxe-desktop-v1-style';
  css.textContent=`
    @media(min-width:768px){
      html,body{margin:0!important;padding:0!important;background:#fff!important;color:#17171a!important;overflow-x:hidden}
      body>main.shell,body>.booking-island{display:none!important}

      #stluxe-desktop-v1{
        --purple:#5b0b6f;
        --purple2:#6d177f;
        --ink:#17171a;
        --muted:#6d6b73;
        --line:#ecebee;
        display:block;
        width:100%;
        min-height:100vh;
        background:#fff;
        color:var(--ink);
        font-family:"Manrope",Arial,sans-serif;
        -webkit-font-smoothing:antialiased;
      }
      #stluxe-desktop-v1 *{box-sizing:border-box}
      #stluxe-desktop-v1 a,#stluxe-desktop-v1 button{font:inherit;color:inherit}
      #stluxe-desktop-v1 a{text-decoration:none}
      #stluxe-desktop-v1 button{cursor:pointer}

      .std-header{
        height:98px;
        width:100%;
        display:flex;
        align-items:center;
        position:relative;
        z-index:20;
        padding:0 46px;
        border-bottom:0;
        background:
          radial-gradient(380px 160px at 12% 0%,rgba(143,85,181,.12),transparent 72%),
          linear-gradient(180deg,#2a2630 0%,#28242d 100%);
      }
      .std-nav{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        display:flex;
        align-items:center;
        gap:38px;
        white-space:nowrap;
      }
      .std-nav a{
        font-size:16px;
        font-weight:600;
        line-height:1;
        color:#f7f3f8!important;
        text-shadow:0 1px 10px rgba(0,0,0,.18);
        transition:opacity .18s ease;
      }
      .std-nav a:hover{opacity:.55}
      .std-phone{
        margin-left:auto;
        width:auto;
        height:54px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:12px;
        border-radius:0;
        background:transparent;
        color:#fff!important;
        box-shadow:none;
        font-size:21px;
        font-weight:800;
        letter-spacing:.01em;
        text-shadow:none;
      }
      .std-phone svg{width:23px;height:23px;flex:0 0 23px}

      .std-hero{
        display:grid;
        grid-template-columns:50% 50%;
        height:calc(100svh - 81px);
        min-height:690px;
        margin:-17px 0 0;
        background:#242127;
      }
      .std-hero-copy{
        min-width:0;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:0 34px 40px;
        background:
          radial-gradient(520px 360px at 8% 86%,rgba(111,61,130,.15),transparent 72%),
          radial-gradient(520px 360px at 98% 10%,rgba(143,85,181,.20),transparent 68%),
          linear-gradient(180deg,#27232b 0%,#242127 100%);
      }
      .std-copy-inner{
        width:min(100%,520px);
        transform:translateY(-4px);
        text-align:center;
      }
      .std-logo{
        margin:0;
        font-family:"Cormorant Garamond",Georgia,serif;
        font-size:78px;
        line-height:.88;
        font-weight:500;
        letter-spacing:.18em;
        text-indent:.18em;
        text-transform:uppercase;
        text-align:center;
        color:#f7f3f8;
      }
      .std-logo-sub{
        margin:15px 0 45px;
        font-family:"Manrope",Arial,sans-serif;
        font-size:13px;
        line-height:1;
        font-weight:500;
        letter-spacing:.38em;
        text-indent:.38em;
        text-align:center;
        color:#b9b2bd;
        text-transform:uppercase;
        white-space:nowrap;
      }
      .std-tagline{
        margin:0 0 42px;
        max-width:500px;
        font-family:"Manrope",Arial,sans-serif;
        font-size:27px;
        line-height:1.38;
        font-weight:400;
        letter-spacing:0;
        color:#f1edf3;
        text-align:center;
        margin-left:auto;
        margin-right:auto;
      }

      .std-meta{
        display:grid;
        grid-template-columns:1fr 1px 1.33fr;
        gap:24px;
        align-items:center;
        justify-content:center;
        margin-bottom:40px;
      }
      .std-meta-divider{width:1px;height:65px;background:rgba(255,255,255,.15)}
      .std-meta-item{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:15px;
        min-width:0;
      }
      .std-meta-icon{
        width:64px;
        height:64px;
        flex:0 0 64px;
        display:grid;
        place-items:center;
        border:1px solid rgba(255,255,255,.18);
        border-radius:50%;
        background:rgba(255,255,255,.045);
        color:#f7f3f8;
      }
      .std-meta-icon svg{width:28px;height:28px}
      .std-meta-text{
        min-width:0;
        font-size:17px;
        line-height:1.45;
        letter-spacing:-.025em;
        color:#ddd6e0;
        text-align:center;
      }
      .std-status-main{display:block;color:#a45e64;font-weight:500}
      .std-status-sub{display:block;color:#d3ccd6}
      .std-address{display:block;color:#eee9f0}

      .std-actions{display:grid;gap:20px}
      .std-btn{
        width:100%;
        height:73px;
        border-radius:10px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:22px;
        font-size:27px;
        font-weight:700;
        border:1px solid rgba(255,255,255,.20);
        background:rgba(255,255,255,.035);
        color:#f7f3f8;
        transition:transform .15s ease,box-shadow .15s ease,opacity .15s ease;
      }
      .std-btn:not(.std-btn-primary){color:#fff!important}
      .std-sparkles{color:#fff!important}
      .std-btn:hover{transform:translateY(-1px)}
      .std-btn:active{transform:translateY(0)}
      .std-btn-primary{
        position:relative;
        overflow:hidden;
        border-color:transparent;
        color:#fff!important;
        background:linear-gradient(105deg,#5e2f70 0%,#6f3d82 55%,#5e2f70 100%);
        box-shadow:0 5px 16px rgba(86,16,105,.12);
      }
      .std-btn-primary:after{
        content:'';
        position:absolute;
        top:-35%;
        bottom:-35%;
        left:-34%;
        width:24%;
        pointer-events:none;
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.34),transparent);
        transform:skewX(-22deg);
        animation:stdBookShine 4.2s ease-in-out infinite;
      }
      @keyframes stdBookShine{
        0%,68%{left:-34%}
        100%{left:132%}
      }
      @media(prefers-reduced-motion:reduce){.std-btn-primary:after{animation:none!important}}
      .std-btn-primary:hover{box-shadow:0 8px 20px rgba(86,16,105,.18)}
      .std-btn svg{width:28px;height:28px;flex:0 0 28px}
      .std-sparkles{
        width:29px;height:29px;position:relative;display:inline-grid;place-items:center;font-size:29px;line-height:1
      }

      .std-hero-photo{
        position:relative;
        min-width:0;
        height:100%;
        margin:0;
        overflow:hidden;
        background:#eee;
      }
      .std-hero-photo img{
        width:100%;
        height:100%;
        object-fit:cover;
        object-position:center center;
        display:block;
      }

      .std-portfolio{
        position:relative;
        overflow:hidden;
        min-height:auto;
        padding:46px 42px 46px;
        background:
          radial-gradient(560px 360px at 5% 8%,rgba(145,103,191,.085),transparent 72%),
          radial-gradient(560px 360px at 96% 94%,rgba(145,103,191,.075),transparent 72%),
          radial-gradient(420px 280px at 52% 104%,rgba(145,103,191,.035),transparent 76%),
          #fbfbfb;
        color:#17171a;
      }
      .std-portfolio-inner{
        width:min(100%,1452px);
        max-width:none;
        margin:0 auto;
      }
      .std-portfolio-head{
        width:auto;
        margin:0;
        padding:0;
        text-align:center;
      }
      .std-portfolio-kicker{
        margin:0;
        font:600 12px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.31em;
        text-transform:uppercase;
        color:#66636a;
      }
      .std-portfolio-title{
        margin:20px 0 0;
        font:500 76px/.92 "Cormorant Garamond",Georgia,serif;
        letter-spacing:-.045em;
        color:#171518;
      }
      .std-portfolio-copy{
        width:min(100%,760px);
        max-width:760px;
        margin:20px auto 0;
        font:400 17px/1.45 "Manrope",Arial,sans-serif;
        color:#77747b;
        white-space:normal;
        text-align:center;
      }
      .std-portfolio-grid{
        display:grid;
        grid-template-columns:330px repeat(3,minmax(0,1fr));
        grid-template-rows:276px 304px;
        gap:12px;
        margin-top:28px;
        padding:0;
      }
      .std-work{
        border:0;
        padding:0;
        border-radius:13px;
        overflow:hidden;
        background:#e7e4e8;
        box-shadow:none;
      }
      .std-work:first-child{grid-row:1 / span 2}
      .std-work img{
        width:100%;
        height:100%;
        object-fit:cover;
        display:block;
        transition:transform .35s cubic-bezier(.2,.7,.2,1);
      }
      .std-work:hover img{transform:scale(1.018)}
      .std-portfolio-more{
        width:516px;
        max-width:calc(100% - 84px);
        height:76px;
        margin:42px auto 0;
        padding:0 28px;
        border:1px solid #d8cbe8;
        border-radius:13px;
        background:linear-gradient(180deg,#f6f0fc 0%,#efe5fa 100%);
        color:#2a2530;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:18px;
        font:500 18px/1 "Manrope",Arial,sans-serif;
        position:static;
        left:auto;
        box-shadow:0 8px 22px rgba(120,84,156,.08);
        transition:background .18s ease,transform .18s ease,box-shadow .18s ease;
      }
      .std-portfolio-more:hover{
        background:linear-gradient(180deg,#f8f3fd 0%,#f2e8fb 100%);
        transform:translateY(-1px);
        box-shadow:0 10px 26px rgba(120,84,156,.12);
      }

      .std-gallery{
        position:fixed;
        inset:0;
        z-index:300;
        display:none;
        align-items:center;
        justify-content:center;
        padding:68px 72px 74px;
        background:rgba(18,16,20,.96);
        backdrop-filter:blur(9px);
      }
      .std-gallery.open{display:flex}
      .std-gallery-close{
        position:absolute;
        top:24px;
        right:28px;
        width:46px;
        height:46px;
        border:1px solid rgba(255,255,255,.17);
        border-radius:50%;
        background:rgba(255,255,255,.07);
        color:#fff!important;
        font-size:27px;
        line-height:1;
      }
      .std-gallery-stage{
        position:relative;
        width:min(100%,1120px);
        height:min(74vh,720px);
        display:grid;
        place-items:center;
      }
      .std-gallery-image{
        max-width:100%;
        max-height:100%;
        width:auto;
        height:auto;
        object-fit:contain;
        border-radius:12px;
        box-shadow:0 24px 80px rgba(0,0,0,.35);
      }
      .std-gallery-nav{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        width:52px;
        height:70px;
        border:0;
        background:transparent;
        color:#fff!important;
        font:300 52px/1 Arial,sans-serif!important;
        opacity:.82;
      }
      .std-gallery-nav:hover{opacity:1}
      .std-gallery-prev{left:-68px}
      .std-gallery-next{right:-68px}
      .std-gallery-count{
        position:absolute;
        left:50%;
        bottom:-39px;
        transform:translateX(-50%);
        color:rgba(255,255,255,.72);
        font:500 12px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.08em;
      }

      @media(max-width:1180px){
        .std-header{padding:0 30px}
        .std-nav{gap:22px}
        .std-phone{width:auto}
        .std-hero{grid-template-columns:50% 50%}
        .std-hero-copy{padding-inline:34px}
        .std-logo{font-size:64px}
        .std-logo-sub{font-size:11px;margin-left:0}
        .std-tagline{font-size:24px}
        .std-meta{gap:14px}
        .std-meta-icon{width:54px;height:54px;flex-basis:54px}
        .std-meta-text{font-size:15px}
      }
    }
  `;
  document.head.appendChild(css);

  const root=document.createElement('div');
  root.id='stluxe-desktop-v1';
  root.innerHTML=`
    <header class="std-header">
      <nav class="std-nav" aria-label="Основная навигация">
        <a href="#stluxeDesktopServices">Услуги</a>
        <a href="#stluxeDesktopPortfolio">Наши работы</a>
        <a href="#stluxeDesktopAbout">О нас</a>
        <a href="#stluxeDesktopReviews">Отзывы</a>
        <a href="#stluxeDesktopContacts">Контакты</a>
      </nav>
      <a class="std-phone" href="tel:${PHONE}" aria-label="Позвонить в STLuxe">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39Z" fill="currentColor"/></svg>
        <span>+7 916 355-22-22</span>
      </a>
    </header>

    <section class="std-hero" id="stluxeDesktopTop" aria-label="STLuxe">
      <div class="std-hero-copy">
        <div class="std-copy-inner">
          <h1 class="std-logo">STLUXE</h1>
          <div class="std-logo-sub">салон красоты</div>

          <p class="std-tagline">Место, где стиль становится<br>вашей естественной красотой.</p>

          <div class="std-meta">
            <div class="std-meta-item">
              <span class="std-meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.7v4.8l3 1.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="std-meta-text"><span class="std-status-main" id="stdStatusMain">Закрыто</span><span class="std-status-sub" id="stdStatusSub">до 10:00</span></span>
            </div>

            <span class="std-meta-divider" aria-hidden="true"></span>

            <a class="std-meta-item" href="https://yandex.ru/maps/?text=%D0%98%D0%B2%D0%B0%D0%BD%D1%82%D0%B5%D0%B5%D0%B2%D0%BA%D0%B0%2C%20%D1%83%D0%BB.%20%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B%2C%2016%20STLuxe" target="_blank" rel="noopener">
              <span class="std-meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.1" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </span>
              <span class="std-meta-text std-address">Ивантеевка,<br>ул. Победы, 16</span>
            </a>
          </div>

          <div class="std-actions">
            <button class="std-btn std-btn-primary" id="stdBookBtn" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 3.8v4.4M16 3.8v4.4M4 10h16M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17h.01M12 17h.01M16 17h.01" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              <span>Записаться</span>
            </button>
            <a class="std-btn" href="#stluxeDesktopPortfolio">
              <span class="std-sparkles" aria-hidden="true">✦</span>
              <span>Смотреть работы</span>
            </a>
          </div>
        </div>
      </div>

      <div class="std-hero-photo">
        <img src="stluxe_reception.webp" alt="Ресепшен STLuxe">
      </div>
    </section>

    <section class="std-portfolio" id="stluxeDesktopPortfolio" aria-labelledby="stluxeDesktopPortfolioTitle">
      <div class="std-portfolio-inner">
        <div class="std-portfolio-head">
          <p class="std-portfolio-kicker">Портфолио</p>
          <h2 class="std-portfolio-title" id="stluxeDesktopPortfolioTitle">Наши работы</h2>
          <p class="std-portfolio-copy">Вдохновляйтесь реальными результатами наших мастеров<br>и выбирайте свой идеальный образ.</p>
        </div>
        <div class="std-portfolio-grid">
          ${PORTFOLIO.map((item,i)=>`<button class="std-work" type="button" data-portfolio-index="${i}" aria-label="Открыть фотографию"><img src="${item.src}" alt="${item.alt}" loading="${i<4?'eager':'lazy'}"></button>`).join('')}
        </div>
        <button class="std-portfolio-more" id="stdOpenGallery" type="button">Открыть галерею <span aria-hidden="true">→</span></button>
      </div>
    </section>

    <div class="std-gallery" id="stdGallery" role="dialog" aria-modal="true" aria-label="Галерея STLuxe">
      <button class="std-gallery-close" id="stdGalleryClose" type="button" aria-label="Закрыть">×</button>
      <div class="std-gallery-stage">
        <button class="std-gallery-nav std-gallery-prev" id="stdGalleryPrev" type="button" aria-label="Предыдущее фото">‹</button>
        <img class="std-gallery-image" id="stdGalleryImage" src="" alt="Фотография STLuxe">
        <button class="std-gallery-nav std-gallery-next" id="stdGalleryNext" type="button" aria-label="Следующее фото">›</button>
        <span class="std-gallery-count" id="stdGalleryCount"></span>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  const bookBtn=document.getElementById('stdBookBtn');
  bookBtn.addEventListener('click',()=>{
    if(typeof window.openBooking==='function') window.openBooking();
  });

  const gallery=document.getElementById('stdGallery');
  const galleryImage=document.getElementById('stdGalleryImage');
  const galleryCount=document.getElementById('stdGalleryCount');
  let galleryIndex=0;

  function paintGallery(){
    galleryImage.src=DESKTOP_GALLERY[galleryIndex];
    galleryImage.alt='Фотография STLuxe';
    galleryCount.textContent=(galleryIndex+1)+' / '+DESKTOP_GALLERY.length;
  }
  function openDesktopGallery(src){
    const found=src?DESKTOP_GALLERY.indexOf(src):-1;
    galleryIndex=found>=0?found:0;
    paintGallery();
    gallery.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeDesktopGallery(){
    gallery.classList.remove('open');
    document.body.style.overflow='';
  }
  function moveDesktopGallery(step){
    galleryIndex=(galleryIndex+step+DESKTOP_GALLERY.length)%DESKTOP_GALLERY.length;
    paintGallery();
  }

  document.querySelectorAll('.std-work').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const item=PORTFOLIO[Number(btn.dataset.portfolioIndex)||0];
      openDesktopGallery(item.src);
    });
  });
  document.getElementById('stdOpenGallery').addEventListener('click',()=>openDesktopGallery());
  document.getElementById('stdGalleryClose').addEventListener('click',closeDesktopGallery);
  document.getElementById('stdGalleryPrev').addEventListener('click',()=>moveDesktopGallery(-1));
  document.getElementById('stdGalleryNext').addEventListener('click',()=>moveDesktopGallery(1));
  gallery.addEventListener('click',e=>{if(e.target===gallery)closeDesktopGallery()});
  document.addEventListener('keydown',e=>{
    if(!gallery.classList.contains('open'))return;
    if(e.key==='Escape')closeDesktopGallery();
    if(e.key==='ArrowLeft')moveDesktopGallery(-1);
    if(e.key==='ArrowRight')moveDesktopGallery(1);
  });

  function updateStatus(){
    const parts=new Intl.DateTimeFormat('en-GB',{
      timeZone:'Europe/Moscow',
      weekday:'short',
      hour:'2-digit',
      minute:'2-digit',
      hour12:false
    }).formatToParts(new Date());
    const weekday=parts.find(p=>p.type==='weekday')?.value||'Mon';
    const hour=Number(parts.find(p=>p.type==='hour')?.value||0);
    const minute=Number(parts.find(p=>p.type==='minute')?.value||0);
    const mins=hour*60+minute;
    const monday=weekday==='Mon';
    const sundayLate=weekday==='Sun'&&mins>=1200;
    const isOpen=!monday&&mins>=600&&mins<1200;
    const closedToTuesday=monday||sundayLate;
    const main=document.getElementById('stdStatusMain');
    const sub=document.getElementById('stdStatusSub');
    if(!main||!sub) return;
    main.textContent=isOpen?'Открыто':'Закрыто';
    sub.textContent=isOpen?'до 20:00':(closedToTuesday?'до вт 10:00':'до 10:00');
    main.style.color=isOpen?'#3f8750':'#a45e64';
  }
  updateStatus();
  setInterval(updateStatus,60000);
})();