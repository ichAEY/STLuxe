/* STLuxe desktop build — hero block. Mobile bundle is intentionally untouched. */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(min-width:768px)').matches) return;

  const PHONE='+79163552222';
  const ADDRESS='Ивантеевка, ул. Победы, 16';

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
  `;
  document.body.appendChild(root);

  const bookBtn=document.getElementById('stdBookBtn');
  bookBtn.addEventListener('click',()=>{
    if(typeof window.openBooking==='function') window.openBooking();
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