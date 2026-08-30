(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const root=document.getElementById('stluxe-tanem-v13');
if(!root||document.getElementById('tn38About'))return;
const services=root.querySelector('#tn13Services');
if(!services)return;

const style=document.createElement('style');
style.id='tn42-about-style';
style.textContent=`
#tn38About{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;overflow:hidden!important}
.tn42-about{padding:40px 18px 58px}
.tn42-kicker{margin:0 3px 18px;font:600 10px/1 'Manrope',Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#88786e}
.tn42-card{max-width:500px;margin:0 auto;border:1px solid rgba(66,55,49,.11);border-radius:27px;overflow:hidden;background:#eee7df;box-shadow:0 14px 34px rgba(47,37,31,.08)}
.tn42-photo{position:relative;height:238px;background:#171513;overflow:hidden}
.tn42-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center center;filter:none!important}
.tn42-rating{position:absolute;left:12px;bottom:12px;height:32px;padding:0 10px;border:1px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(18,17,16,.72);backdrop-filter:blur(10px);display:flex;align-items:center;gap:6px;color:#fff;box-shadow:0 5px 14px rgba(0,0,0,.13)}
.tn42-rating-star{font-size:11px;line-height:1;color:#d6ad6b}
.tn42-rating strong{font:600 13px/1 'Manrope',Arial,sans-serif;color:#fff}
.tn42-rating span{font:500 7.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.035em;color:rgba(255,255,255,.7)}
.tn42-body{padding:24px 18px 18px}
.tn42-lead{margin:0;font:400 27px/1.08 'Cormorant Garamond',Georgia,serif;letter-spacing:-.032em;color:#1d1a18}
.tn42-copy{margin:17px 0 0;font:400 12.8px/1.62 'Manrope',Arial,sans-serif;color:#58504a}
.tn42-facts{display:grid;gap:8px;margin-top:22px}
.tn42-fact{min-height:54px;display:flex;align-items:center;padding:0 15px;border:1px solid rgba(64,52,45,.09);border-radius:14px;background:rgba(255,255,255,.78);box-shadow:0 4px 12px rgba(50,39,32,.035);font:500 12.5px/1.3 'Manrope',Arial,sans-serif;color:#292521}
@media(max-width:370px){.tn42-about{padding-left:14px;padding-right:14px}.tn42-photo{height:218px}.tn42-body{padding-left:16px;padding-right:16px}.tn42-lead{font-size:25px}.tn42-copy{font-size:12.3px}}
`;
document.head.appendChild(style);

const about=document.createElement('section');
about.id='tn38About';
about.innerHTML=`<div class="tn42-about"><p class="tn42-kicker">О нас</p><div class="tn42-card"><div class="tn42-photo"><img src="assets/images/stluxe-about-logo.webp" alt="STLuxe" loading="lazy"><div class="tn42-rating"><span class="tn42-rating-star">★</span><strong>4,9</strong><span>рейтинг салона</span></div></div><div class="tn42-body"><p class="tn42-lead">Мы сделали STLuxe местом, где можно спокойно доверить свою красоту мастеру.</p><p class="tn42-copy">Нам важно, чтобы вам было комфортно на каждом этапе: мы внимательно относимся к пожеланиям, ценим аккуратную работу и собираем в одном пространстве мастеров разных направлений.</p><div class="tn42-facts"><div class="tn42-fact">Мастера разных направлений</div><div class="tn42-fact">Комфортная атмосфера</div><div class="tn42-fact">Индивидуальный подход</div></div></div></div></div>`;
services.insertAdjacentElement('afterend',about);
})();
