(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const root=document.getElementById('stluxe-tanem-v13');
if(!root||document.getElementById('tn38About'))return;
const team=root.querySelector('#tn13Team');
if(!team)return;

const style=document.createElement('style');
style.id='tn40-about-style';
style.textContent=`
#tn38About{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;overflow:hidden!important}
.tn40-about{padding:68px 20px 76px}
.tn40-head{position:relative;padding-right:76px}
.tn40-kicker{margin:0;font:600 10px/1 'Manrope',Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#8d7d72}
.tn40-title{margin:26px 0 0;max-width:305px;font:400 49px/.92 'Cormorant Garamond',Georgia,serif;letter-spacing:-.045em;color:#171513}
.tn40-mark{position:absolute;right:0;top:0;width:62px;height:62px;border:1px solid rgba(111,91,78,.22);border-radius:50%;display:grid;place-items:center;font:400 29px/1 'Cormorant Garamond',Georgia,serif;color:#7f6a5d;background:rgba(255,255,255,.18)}
.tn40-visual{position:relative;margin-top:36px;border-radius:28px;overflow:hidden;background:#d7cec6;box-shadow:0 14px 35px rgba(49,38,31,.09)}
.tn40-visual img{display:block;width:100%;height:clamp(370px,49svh,430px);object-fit:cover;object-position:center 47%;filter:saturate(.86) contrast(.98)!important}
.tn40-rating{position:absolute;right:14px;bottom:14px;min-width:126px;height:76px;padding:0 17px;border-radius:999px;border:1px solid rgba(255,255,255,.88);background:rgba(248,244,238,.94);backdrop-filter:blur(14px);display:flex;align-items:center;gap:10px;box-shadow:0 8px 24px rgba(40,30,24,.10)}
.tn40-rating strong{font:400 38px/.8 'Cormorant Garamond',Georgia,serif;color:#171513}
.tn40-rating span{font:600 8.5px/1.2 'Manrope',Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#756a63}
.tn40-copywrap{margin-top:1px;padding:31px 14px 0}
.tn40-lead{margin:0;font:400 27px/1.14 'Cormorant Garamond',Georgia,serif;letter-spacing:-.025em;color:#201c19}
.tn40-copy{margin:23px 0 0;font:400 13px/1.68 'Manrope',Arial,sans-serif;color:#5a514b}
.tn40-facts{margin-top:30px;border-top:1px solid rgba(64,52,45,.16)}
.tn40-fact{min-height:60px;display:grid;grid-template-columns:42px minmax(0,1fr);align-items:center;border-bottom:1px solid rgba(64,52,45,.16)}
.tn40-fact b{font:400 17px/1 'Cormorant Garamond',Georgia,serif;color:#b08a62}
.tn40-fact span{font:500 12.5px/1.3 'Manrope',Arial,sans-serif;color:#2c2723}
@media(max-width:370px){.tn40-about{padding-left:18px;padding-right:18px}.tn40-title{font-size:44px;max-width:270px}.tn40-mark{width:56px;height:56px}.tn40-visual img{height:360px}.tn40-copywrap{padding-left:10px;padding-right:10px}.tn40-lead{font-size:25px}.tn40-copy{font-size:12.5px}}
`;
document.head.appendChild(style);

const about=document.createElement('section');
about.id='tn38About';
about.innerHTML=`<div class="tn40-about"><div class="tn40-head"><p class="tn40-kicker">О нас</p><h2 class="tn40-title">STLuxe — салон красоты в Ивантеевке</h2><span class="tn40-mark" aria-hidden="true">S</span></div><div class="tn40-visual"><img src="assets/images/salon-reception.webp" alt="Интерьер салона STLuxe" loading="lazy"><div class="tn40-rating"><strong>4,9</strong><span>рейтинг<br>салона</span></div></div><div class="tn40-copywrap"><p class="tn40-lead">Красота начинается с места, в котором вам комфортно.</p><p class="tn40-copy">В STLuxe работают мастера разных направлений, поэтому привычные процедуры можно получить в одном пространстве. Нам важны аккуратная работа, спокойная атмосфера и внимание к каждому гостю.</p><div class="tn40-facts"><div class="tn40-fact"><b>01</b><span>Мастера разных направлений</span></div><div class="tn40-fact"><b>02</b><span>Комфортная атмосфера</span></div><div class="tn40-fact"><b>03</b><span>Индивидуальный подход</span></div></div></div></div>`;
team.insertAdjacentElement('afterend',about);
})();
