(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const root=document.getElementById('stluxe-tanem-v13');
  if(!root) return;
  const hero=root.querySelector('#tn13Top');
  if(!hero) return;

  const style=document.createElement('style');
  style.id='stluxe-hero-v14-style';
  style.textContent=`
  @media(max-width:767px){
    #tn13Intro{display:none!important}
    #stluxe-tanem-v13 .tn13-hero{position:relative!important;height:694px!important;min-height:694px!important;background:#f5f0e9!important;overflow:hidden!important;padding:0!important}
    #stluxe-tanem-v13 .tn14-topbar{position:absolute;z-index:45;left:0;right:0;top:0;height:52px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;background:#f8f4ee;color:#171513}
    #stluxe-tanem-v13 .tn14-brand{font:500 22px/1 "Cormorant Garamond",Georgia,serif;letter-spacing:.13em;text-decoration:none;color:#171513!important;text-transform:uppercase}
    #stluxe-tanem-v13 .tn14-menu-wrap{position:relative}
    #stluxe-tanem-v13 .tn14-menu-btn{width:30px;height:30px;border:0!important;border-radius:0!important;background:transparent!important;display:flex;flex-direction:column;align-items:flex-end;justify-content:center;gap:5px;padding:0!important;box-shadow:none!important}
    #stluxe-tanem-v13 .tn14-menu-btn span{display:block;width:22px;height:1px;background:#171513;transition:transform .22s ease,opacity .18s ease}
    #stluxe-tanem-v13 .tn14-menu-btn.open span:first-child{transform:translateY(6px) rotate(45deg)}
    #stluxe-tanem-v13 .tn14-menu-btn.open span:nth-child(2){opacity:0}
    #stluxe-tanem-v13 .tn14-menu-btn.open span:last-child{transform:translateY(-6px) rotate(-45deg)}
    #stluxe-tanem-v13 .tn14-menu{position:absolute;z-index:80;top:37px;right:0;width:min(72vw,260px);padding:8px 12px;border:1px solid rgba(75,56,49,.12);border-radius:17px;background:rgba(250,246,242,.98);box-shadow:0 18px 42px rgba(58,42,36,.16);backdrop-filter:blur(18px);display:none}
    #stluxe-tanem-v13 .tn14-menu.open{display:grid}
    #stluxe-tanem-v13 .tn14-menu a{display:flex;min-height:42px;align-items:center;gap:12px;border-bottom:1px solid rgba(75,56,49,.09);font:600 15px/1 "Cormorant Garamond",Georgia,serif;text-decoration:none;color:#4c3d37!important}
    #stluxe-tanem-v13 .tn14-menu a:last-child{border-bottom:0}
    #stluxe-tanem-v13 .tn14-menu a span{color:#a48a80;font:600 8px/1 "Manrope",Arial,sans-serif;letter-spacing:.12em}

    #stluxe-tanem-v13 .tn14-photo{position:absolute;z-index:1;top:52px;left:0;width:100%;height:372px;border:0!important;padding:0!important;margin:0!important;background:#2b241f;overflow:hidden;border-radius:0!important}
    #stluxe-tanem-v13 .tn14-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center 50%;filter:grayscale(.68) sepia(.18) saturate(.70) brightness(.70) contrast(1.10)}
    #stluxe-tanem-v13 .tn14-photo:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(18,13,10,.03),rgba(32,22,16,.12));pointer-events:none}

    #stluxe-tanem-v13 .tn14-card{position:absolute;z-index:8;top:343px;left:21px;right:21px;height:291px;padding:20px 20px 19px;border-radius:13px;background:rgba(249,246,241,.985);box-shadow:0 10px 28px rgba(47,37,31,.10);text-align:center;color:#171513}
    #stluxe-tanem-v13 .tn14-title{margin:0;font:500 49px/.88 "Cormorant Garamond",Georgia,serif;letter-spacing:.18em;text-indent:.18em;text-transform:uppercase;color:#171513}
    #stluxe-tanem-v13 .tn14-subtitle{margin-top:12px;font-size:10.5px;line-height:1;letter-spacing:.38em;text-indent:.38em;text-transform:uppercase;color:#635d58;font-weight:500}
    #stluxe-tanem-v13 .tn14-ornament{display:flex;align-items:center;justify-content:center;gap:8px;margin:15px auto 14px;color:#bda388;height:10px}
    #stluxe-tanem-v13 .tn14-ornament:before,#stluxe-tanem-v13 .tn14-ornament:after{content:"";display:block;width:45px;height:1px;background:#bfa589}
    #stluxe-tanem-v13 .tn14-ornament i{font-style:normal;font-size:15px;line-height:1;transform:translateY(-1px)}
    #stluxe-tanem-v13 .tn14-copy{margin:0 auto;width:270px;max-width:100%;font-size:14px;line-height:1.38;font-weight:400;letter-spacing:-.012em;color:#33302d}
    #stluxe-tanem-v13 .tn14-cta{display:flex;width:246px;max-width:100%;height:49px;margin:18px auto 0;align-items:center;justify-content:center;border:0!important;border-radius:8px!important;background:#101010!important;color:#fff!important;font-family:"Manrope",Arial,sans-serif!important;font-size:15px!important;font-weight:400!important;text-decoration:none;box-shadow:none!important}
    #stluxe-tanem-v13 .tn14-link{display:inline-block;margin-top:17px;padding-bottom:1px;border-bottom:1px solid #25211f;color:#25211f!important;font-family:"Manrope",Arial,sans-serif;font-size:12.5px;line-height:1.15;text-decoration:none}

    #stluxe-tanem-v13 .tn14-ticker{position:absolute;z-index:7;left:0;right:0;top:645px;height:36px;border-top:1px solid #c9b9a8;border-bottom:1px solid #c9b9a8;overflow:hidden;background:#f4eee6;color:#766a61;display:flex;align-items:center}
    #stluxe-tanem-v13 .tn14-ticker-track{display:flex;width:max-content;align-items:center;animation:tn14Ticker 30s linear infinite;will-change:transform}
    #stluxe-tanem-v13 .tn14-ticker-track span{flex:0 0 auto;padding-right:22px;font-family:"Cormorant Garamond",Georgia,serif;font-size:10.5px;line-height:1;letter-spacing:.15em;text-transform:uppercase;white-space:nowrap}
    @keyframes tn14Ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  }
  `;
  document.head.appendChild(style);

  hero.innerHTML=`
    <div class="tn14-topbar">
      <a class="tn14-brand" href="#tn13Top">TANEM</a>
      <div class="tn14-menu-wrap">
        <button class="tn14-menu-btn" id="tn14MenuBtn" type="button" aria-label="Открыть меню"><span></span><span></span><span></span></button>
        <nav class="tn14-menu" id="tn14Menu" aria-label="Разделы сайта">
          <a href="#tn13Portfolio"><span>01</span>Портфолио</a>
          <a href="#tn13Services"><span>02</span>Услуги и цены</a>
          <a href="#tn13Team"><span>03</span>Команда</a>
          <a href="#tn13Reviews"><span>04</span>Отзывы</a>
          <a href="#tn13Visit"><span>05</span>Визит и запись</a>
        </nav>
      </div>
    </div>

    <button class="tn14-photo" id="tn14Photo" type="button" aria-label="Открыть фотографии салона">
      <img src="assets/images/salon-reception.webp" alt="Интерьер салона STLuxe">
    </button>

    <div class="tn14-card">
      <h1 class="tn14-title">STLuxe</h1>
      <div class="tn14-subtitle">Салон красоты</div>
      <div class="tn14-ornament" aria-hidden="true"><i>✦</i></div>
      <p class="tn14-copy">Место, где стиль становится<br>вашей естественной красотой.</p>
      <button class="tn14-cta" id="tn14Book" type="button">Записаться онлайн</button>
      <a class="tn14-link" href="#tn13Portfolio">Смотреть работы</a>
    </div>

    <div class="tn14-ticker" aria-hidden="true">
      <div class="tn14-ticker-track">
        <span>Красота ✦ Уверенность ✦ Стиль ✦ Красота ✦ Уверенность ✦ Стиль ✦ </span>
        <span>Красота ✦ Уверенность ✦ Стиль ✦ Красота ✦ Уверенность ✦ Стиль ✦ </span>
      </div>
    </div>
  `;

  const menuBtn=hero.querySelector('#tn14MenuBtn');
  const menu=hero.querySelector('#tn14Menu');
  menuBtn.addEventListener('click',()=>{menuBtn.classList.toggle('open');menu.classList.toggle('open')});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menuBtn.classList.remove('open');menu.classList.remove('open')}));
  document.addEventListener('pointerdown',e=>{if(!e.target.closest('.tn14-menu-wrap')){menuBtn.classList.remove('open');menu.classList.remove('open')}});

  hero.querySelector('#tn14Book').addEventListener('click',()=>{
    const sheet=root.querySelector('#tn13BookSheet');
    if(sheet){sheet.classList.add('open');document.body.style.overflow='hidden'}
  });

  hero.querySelector('#tn14Photo').addEventListener('click',()=>{
    const overlay=root.querySelector('#tn13Gallery');
    const tabs=root.querySelector('#tn13GalleryTabs');
    const list=root.querySelector('#tn13GalleryList');
    if(!overlay||!tabs||!list) return;
    tabs.innerHTML='<button class="active" type="button">Салон</button><button type="button">Ногти</button><button type="button">Волосы</button>';
    list.innerHTML='<img src="assets/images/salon-reception.webp" alt="Интерьер STLuxe"><img src="assets/images/salon-nail-zone.webp" alt="Зона маникюра STLuxe">';
    overlay.classList.add('open');document.body.style.overflow='hidden';
  });
})();