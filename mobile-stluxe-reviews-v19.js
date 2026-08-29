(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;
  const root=document.getElementById('stluxe-tanem-v13');
  if(!root) return;
  const section=root.querySelector('#tn13Reviews');
  if(!section) return;

  const YANDEX_REVIEWS='https://yandex.com/maps/org/beauty_salon_stluxe/51087098664/reviews/';
  const reviews=[
    {name:'Ольга К.',initial:'О',text:'Делаю хим завивку, в этом салоне никогда не отказывают, отличная атмосфера, все чисто стерильно, приветливый персонал.'},
    {name:'Мама Рита',initial:'М',text:'Прекрасный косметолог Мария. Умеет всё. Препараты качественные, новейшие. Очень советую мастера.'},
    {name:'Елизавета С.',initial:'Е',text:'Отличное обслуживание, все мастера вежливые и отлично выполняют бьюти-услуги! Салон чистый, стильный!'}
  ];

  const style=document.createElement('style');
  style.id='stluxe-reviews-v19-style';
  style.textContent=`
  @media(max-width:767px){
    #stluxe-tanem-v13 #tn13Reviews{margin:0!important;padding:0!important;min-height:693px!important;background:#10100f!important;color:#f2ece4!important;overflow:hidden!important}
    #stluxe-tanem-v13 #tn13Reviews .tn19-wrap{width:100%;min-height:693px;padding:22px 22px 18px}
    #stluxe-tanem-v13 #tn13Reviews .tn19-kicker{margin:0;font-family:"Manrope",Arial,sans-serif;font-size:9px;font-weight:500;line-height:1;letter-spacing:.42em;text-transform:uppercase;color:#cbbbae}
    #stluxe-tanem-v13 #tn13Reviews .tn19-title{margin:15px 0 0;font-family:"Cormorant Garamond",Georgia,serif;font-size:36px;font-weight:500;line-height:.94;letter-spacing:-.025em;color:#f4eee7}
    #stluxe-tanem-v13 #tn13Reviews .tn19-score{text-align:center;margin-top:12px}
    #stluxe-tanem-v13 #tn13Reviews .tn19-score strong{display:block;font-family:"Cormorant Garamond",Georgia,serif;font-size:65px;font-weight:500;line-height:.8;letter-spacing:-.05em;color:#f7f1eb}
    #stluxe-tanem-v13 #tn13Reviews .tn19-stars{margin-top:10px;font-size:22px;line-height:1;letter-spacing:4px;color:#d9b56f}
    #stluxe-tanem-v13 #tn13Reviews .tn19-count{margin-top:8px;font-family:"Manrope",Arial,sans-serif;font-size:11px;font-weight:400;line-height:1;color:#d4ccc5}
    #stluxe-tanem-v13 #tn13Reviews .tn19-list{display:grid;gap:9px;margin-top:15px}
    #stluxe-tanem-v13 #tn13Reviews .tn19-card{display:grid;grid-template-columns:42px minmax(0,1fr);column-gap:13px;min-height:136px;padding:13px 14px;border:1px solid rgba(255,255,255,.22);border-radius:10px;text-decoration:none!important;background:rgba(255,255,255,.015);color:#f3ede6!important}
    #stluxe-tanem-v13 #tn13Reviews .tn19-avatar{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#38342f;color:#efe5d9;font-family:"Cormorant Garamond",Georgia,serif;font-size:20px;line-height:1}
    #stluxe-tanem-v13 #tn13Reviews .tn19-name{display:flex;align-items:center;gap:10px;min-width:0}
    #stluxe-tanem-v13 #tn13Reviews .tn19-name strong{font-family:"Cormorant Garamond",Georgia,serif;font-size:17px;font-weight:500;line-height:1;color:#eadbca}
    #stluxe-tanem-v13 #tn13Reviews .tn19-meta{font-family:"Manrope",Arial,sans-serif;font-size:9px;line-height:1;color:#7f7974;white-space:nowrap}
    #stluxe-tanem-v13 #tn13Reviews .tn19-card-stars{margin-top:5px;font-size:12px;line-height:1;letter-spacing:2px;color:#d9b56f}
    #stluxe-tanem-v13 #tn13Reviews .tn19-text{grid-column:2;margin:7px 0 0;font-family:"Manrope",Arial,sans-serif;font-size:10px;font-weight:400;line-height:1.55;color:#e5dfd8}
    #stluxe-tanem-v13 #tn13Reviews .tn19-all{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:13px;color:#cfbfae;text-decoration:none!important;font-family:"Manrope",Arial,sans-serif;font-size:9px;font-weight:500;line-height:1;letter-spacing:.35em;text-transform:uppercase}
    #stluxe-tanem-v13 #tn13Reviews .tn19-all i{font-style:normal;font-size:20px;letter-spacing:0}
    @media(max-width:360px){
      #stluxe-tanem-v13 #tn13Reviews .tn19-wrap{padding-left:18px;padding-right:18px}
      #stluxe-tanem-v13 #tn13Reviews .tn19-title{font-size:34px}
      #stluxe-tanem-v13 #tn13Reviews .tn19-text{font-size:9.5px}
    }
  }`;
  document.head.appendChild(style);

  section.innerHTML=`<div class="tn19-wrap">
    <p class="tn19-kicker">Отзывы</p>
    <h2 class="tn19-title">Что говорят о нас</h2>
    <div class="tn19-score"><strong>4,9</strong><div class="tn19-stars">★★★★★</div><div class="tn19-count">86 отзывов на Яндекс Картах</div></div>
    <div class="tn19-list">${reviews.map(r=>`<a class="tn19-card" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener"><div class="tn19-avatar">${r.initial}</div><div><div class="tn19-name"><strong>${r.name}</strong><span class="tn19-meta">Яндекс Карты</span></div><div class="tn19-card-stars">★★★★★</div></div><p class="tn19-text">${r.text}</p></a>`).join('')}</div>
    <a class="tn19-all" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener">Смотреть все отзывы <i>⟶</i></a>
  </div>`;
})();
