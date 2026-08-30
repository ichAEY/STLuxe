(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const root=document.getElementById('stluxe-tanem-v13');
if(!root||document.getElementById('tn38About'))return;
const team=root.querySelector('#tn13Team');
if(!team)return;

const style=document.createElement('style');
style.id='tn41-about-style';
style.textContent=`
#tn38About{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;overflow:hidden!important}
.tn41-about{padding:58px 18px 66px}
.tn41-head{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;margin-bottom:24px;padding:0 3px}
.tn41-headcopy{min-width:0}
.tn41-kicker{margin:0 0 13px;font:600 9.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.21em;text-transform:uppercase;color:#907d70}
.tn41-brand{margin:0;font:400 54px/.78 'Cormorant Garamond',Georgia,serif;letter-spacing:-.055em;color:#171513;white-space:nowrap}
.tn41-brand span{font-size:.56em;letter-spacing:-.035em}
.tn41-mark{flex:0 0 auto;width:42px;height:42px;border:1px solid rgba(122,101,86,.25);border-radius:50%;display:grid;place-items:center;font:400 20px/1 'Cormorant Garamond',Georgia,serif;color:#78675d;background:rgba(255,255,255,.22);margin-bottom:1px}
.tn41-card{max-width:500px;margin:0 auto;border:1px solid rgba(66,55,49,.10);border-radius:27px;overflow:hidden;background:#faf7f2;box-shadow:0 14px 34px rgba(47,37,31,.08)}
.tn41-photo{position:relative;height:238px;background:#171513;overflow:hidden}
.tn41-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center center;filter:none!important}
.tn41-rating{position:absolute;left:12px;bottom:12px;height:36px;padding:0 11px;border:1px solid rgba(255,255,255,.34);border-radius:999px;background:rgba(18,17,16,.72);backdrop-filter:blur(10px);display:flex;align-items:center;gap:7px;color:#fff;box-shadow:0 5px 14px rgba(0,0,0,.15)}
.tn41-rating-star{font-size:12px;line-height:1;color:#d6ad6b}
.tn41-rating strong{font:600 15px/1 'Manrope',Arial,sans-serif;color:#fff}
.tn41-rating span{font:500 8px/1 'Manrope',Arial,sans-serif;letter-spacing:.04em;color:rgba(255,255,255,.72)}
.tn41-body{padding:25px 21px 9px}
.tn41-lead{margin:0;font:400 30px/1.06 'Cormorant Garamond',Georgia,serif;letter-spacing:-.035em;color:#1d1a18}
.tn41-copy{margin:19px 0 0;font:400 13px/1.62 'Manrope',Arial,sans-serif;color:#58504a}
.tn41-facts{margin-top:24px;border-top:1px solid rgba(64,52,45,.15)}
.tn41-fact{min-height:55px;display:grid;grid-template-columns:34px minmax(0,1fr);align-items:center;gap:7px;border-bottom:1px solid rgba(64,52,45,.15)}
.tn41-fact b{font:400 16px/1 'Cormorant Garamond',Georgia,serif;color:#af875d}
.tn41-fact span{font:500 12px/1.3 'Manrope',Arial,sans-serif;color:#292521}
@media(max-width:370px){.tn41-about{padding-left:14px;padding-right:14px}.tn41-brand{font-size:50px}.tn41-mark{width:38px;height:38px;font-size:18px}.tn41-photo{height:218px}.tn41-body{padding-left:18px;padding-right:18px}.tn41-lead{font-size:27px}.tn41-copy{font-size:12.5px}}
`;
document.head.appendChild(style);

const about=document.createElement('section');
about.id='tn38About';
about.innerHTML=`<div class="tn41-about"><div class="tn41-head"><div class="tn41-headcopy"><p class="tn41-kicker">О нас</p><h2 class="tn41-brand">STL<span>ux</span></h2></div><span class="tn41-mark" aria-hidden="true">S</span></div><div class="tn41-card"><div class="tn41-photo"><img src="assets/images/stluxe-about-dark.svg" alt="STLux" loading="lazy"><div class="tn41-rating"><span class="tn41-rating-star">★</span><strong>4,9</strong><span>рейтинг салона</span></div></div><div class="tn41-body"><p class="tn41-lead">Красота начинается с места, в котором вам комфортно.</p><p class="tn41-copy">Мы создали STLuxe как пространство, где можно спокойно доверить свою красоту мастерам и получить результат без лишней суеты. Для нас важны комфорт, внимание к деталям и отношение, из-за которого хочется возвращаться.</p><div class="tn41-facts"><div class="tn41-fact"><b>01</b><span>Мастера разных направлений</span></div><div class="tn41-fact"><b>02</b><span>Комфортная атмосфера</span></div><div class="tn41-fact"><b>03</b><span>Индивидуальный подход</span></div></div></div></div></div>`;
team.insertAdjacentElement('afterend',about);
})();
