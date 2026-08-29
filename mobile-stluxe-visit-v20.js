(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;
  const root=document.getElementById('stluxe-tanem-v13');
  if(!root) return;
  const section=root.querySelector('#tn13Visit');
  if(!section) return;
  const footer=root.querySelector('.tn13-footer');
  if(footer) footer.style.display='none';

  const PHONE='+79163552222';
  const YANDEX='https://yandex.com/maps/org/beauty_salon_stluxe/51087098664/';
  const bookSheet=root.querySelector('#tn13BookSheet');

  const style=document.createElement('style');
  style.id='stluxe-visit-v20-style';
  style.textContent=`
  @media(max-width:767px){
    #stluxe-tanem-v13 #tn13Visit{margin:0!important;padding:0!important;min-height:693px!important;background:#f6f1e9!important;color:#171513!important;overflow:hidden!important;border-radius:38px 38px 0 0!important}
    #stluxe-tanem-v13 #tn13Visit .tn20-wrap{width:100%;min-height:693px;padding:40px 30px 0;display:flex;flex-direction:column}
    #stluxe-tanem-v13 #tn13Visit .tn20-kicker{margin:0;font-family:"Manrope",Arial,sans-serif;font-size:10px;font-weight:500;line-height:1;letter-spacing:.42em;text-transform:uppercase;color:#746c66}
    #stluxe-tanem-v13 #tn13Visit .tn20-title{margin:23px 0 0;font-family:"Cormorant Garamond",Georgia,serif;font-size:46px;font-weight:500;line-height:.93;letter-spacing:-.035em;color:#171513}
    #stluxe-tanem-v13 #tn13Visit .tn20-info{display:grid;gap:22px;margin-top:34px}
    #stluxe-tanem-v13 #tn13Visit .tn20-row{display:grid;grid-template-columns:22px minmax(0,1fr);gap:12px;align-items:start}
    #stluxe-tanem-v13 #tn13Visit .tn20-icon{width:18px;height:18px;color:#8f837a;transform:translateY(1px)}
    #stluxe-tanem-v13 #tn13Visit .tn20-icon svg{width:100%;height:100%;display:block;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
    #stluxe-tanem-v13 #tn13Visit .tn20-main{font-family:"Cormorant Garamond",Georgia,serif;font-size:17px;font-weight:500;line-height:1.25;color:#22201d}
    #stluxe-tanem-v13 #tn13Visit .tn20-sub{display:block;margin-top:3px;font-family:"Manrope",Arial,sans-serif;font-size:10px;font-weight:400;line-height:1.35;color:#847b75}
    #stluxe-tanem-v13 #tn13Visit .tn20-map{width:100%;height:162px;border:0;border-radius:12px;margin-top:26px;background:#e7e2dc;filter:grayscale(.78) sepia(.08) saturate(.6) contrast(.92);overflow:hidden}
    #stluxe-tanem-v13 #tn13Visit .tn20-actions{display:grid;gap:12px;margin-top:26px}
    #stluxe-tanem-v13 #tn13Visit .tn20-btn{height:49px;border-radius:6px!important;display:flex;align-items:center;justify-content:center;text-decoration:none!important;font-family:"Cormorant Garamond",Georgia,serif!important;font-size:18px!important;font-weight:500!important;line-height:1!important;box-shadow:none!important}
    #stluxe-tanem-v13 #tn13Visit .tn20-call{border:1px solid rgba(51,44,39,.24)!important;background:transparent!important;color:#201c19!important}
    #stluxe-tanem-v13 #tn13Visit .tn20-book{border:1px solid #10100f!important;background:#10100f!important;color:#f5eee6!important}
    #stluxe-tanem-v13 #tn13Visit .tn20-footer{height:65px;margin:28px -30px 0;background:#10100f;color:#f2ece5;display:flex;align-items:center;justify-content:space-between;padding:0 30px}
    #stluxe-tanem-v13 #tn13Visit .tn20-footer strong{font-family:"Cormorant Garamond",Georgia,serif;font-size:22px;font-weight:500;line-height:1;letter-spacing:.02em}
    #stluxe-tanem-v13 #tn13Visit .tn20-footer span{max-width:180px;text-align:right;font-family:"Manrope",Arial,sans-serif;font-size:10px;font-weight:400;line-height:1.35;color:#cfc7c0}
    @media(max-width:360px){
      #stluxe-tanem-v13 #tn13Visit .tn20-wrap{padding-left:24px;padding-right:24px}
      #stluxe-tanem-v13 #tn13Visit .tn20-title{font-size:42px}
      #stluxe-tanem-v13 #tn13Visit .tn20-footer{margin-left:-24px;margin-right:-24px;padding-left:24px;padding-right:24px}
    }
  }`;
  document.head.appendChild(style);

  const pin=`<svg viewBox="0 0 24 24"><path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z"/><circle cx="12" cy="10" r="2.2"/></svg>`;
  const phone=`<svg viewBox="0 0 24 24"><path d="M7.3 3.5 10 7.3 8.2 9.1c1.5 3 3.8 5.3 6.8 6.8l1.8-1.8 3.8 2.7c.2.2.3.5.2.8-.5 1.8-2 3-3.9 3C10 20.6 3.4 14 3.4 7.1c0-1.9 1.2-3.4 3-3.9.3-.1.7 0 .9.3Z"/></svg>`;
  const clock=`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.2 1.8"/></svg>`;

  section.innerHTML=`<div class="tn20-wrap">
    <p class="tn20-kicker">Контакты</p>
    <h2 class="tn20-title">Ждём вас</h2>
    <div class="tn20-info">
      <div class="tn20-row"><div class="tn20-icon">${pin}</div><div><div class="tn20-main">Ивантеевка, ул. Победы, 16</div><span class="tn20-sub">Московская область</span></div></div>
      <div class="tn20-row"><div class="tn20-icon">${phone}</div><div class="tn20-main">+7 (916) 355-22-22</div></div>
      <div class="tn20-row"><div class="tn20-icon">${clock}</div><div class="tn20-main">Вт–Вс 10:00–20:00<span class="tn20-sub">Понедельник — выходной</span></div></div>
    </div>
    <iframe class="tn20-map" loading="lazy" src="https://yandex.ru/map-widget/v1/?text=%D0%98%D0%B2%D0%B0%D0%BD%D1%82%D0%B5%D0%B5%D0%B2%D0%BA%D0%B0%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B%2C%2016&z=16" title="Карта STLuxe"></iframe>
    <div class="tn20-actions"><a class="tn20-btn tn20-call" href="tel:${PHONE}">Позвонить</a><button class="tn20-btn tn20-book" id="tn20Book" type="button">Записаться онлайн</button></div>
    <div class="tn20-footer"><strong>TANEM</strong><span>Цифровой офис для салонов красоты</span></div>
  </div>`;

  section.querySelector('#tn20Book').addEventListener('click',()=>{
    if(bookSheet){bookSheet.classList.add('open');document.body.style.overflow='hidden';}
  });
})();
