(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const root=document.getElementById('stluxe-tanem-v13');
if(!root||document.getElementById('tn38About'))return;
const team=root.querySelector('#tn13Team');
if(!team)return;

const style=document.createElement('style');
style.id='tn38-about-style';
style.textContent=`
#tn38About{margin:0!important;padding:0!important;background:#f8f5f1!important;color:#171513!important;overflow:hidden!important}
.tn39-about-photo{width:100%;height:clamp(420px,58svh,500px);overflow:hidden;background:#d9d0c7}
.tn39-about-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center 48%;filter:saturate(.78) contrast(.96)!important;transform:scale(1.015)}
.tn39-about-text{padding:76px 22px 72px}
.tn39-about-kicker{margin:0;font:500 9.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#887d75}
.tn39-about-title{max-width:340px;margin:34px 0 46px;font:400 47px/.92 'Cormorant Garamond',Georgia,serif;letter-spacing:-.045em;color:#171513}
.tn39-about-title em{font-weight:400;font-style:italic;color:#8c6b4e}
.tn39-about-body{display:grid;gap:34px}
.tn39-about-copy{margin:0;font:400 13.5px/1.66 'Manrope',Arial,sans-serif;color:#514a45}
.tn39-about-facts{margin:0;padding:0;list-style:none;border-top:1px solid rgba(66,55,49,.16)}
.tn39-about-facts li{min-height:58px;display:grid;grid-template-columns:28px minmax(0,1fr);align-items:center;gap:10px;border-bottom:1px solid rgba(66,55,49,.16);font:500 12px/1.3 'Manrope',Arial,sans-serif;color:#292521}
.tn39-about-facts b{font:400 17px/1 'Cormorant Garamond',Georgia,serif;color:#b08a62}
@media(max-width:370px){.tn39-about-photo{height:420px}.tn39-about-text{padding:68px 20px 64px}.tn39-about-title{font-size:43px;margin-bottom:40px}.tn39-about-copy{font-size:13px}}
`;
document.head.appendChild(style);

const about=document.createElement('section');
about.id='tn38About';
about.innerHTML=`<div class="tn39-about-photo"><img src="assets/images/salon-reception.webp" alt="Интерьер салона STLuxe" loading="lazy"></div><div class="tn39-about-text"><p class="tn39-about-kicker">О нас</p><h2 class="tn39-about-title">«Место, куда хочется <em>возвращаться</em> не только за результатом»</h2><div class="tn39-about-body"><p class="tn39-about-copy">STLuxe — пространство, где красота начинается с комфорта. Мы объединяем мастеров разных направлений, внимательно относимся к деталям и хотим, чтобы каждый визит оставлял приятное впечатление.</p><ul class="tn39-about-facts"><li><b>01</b><span>Комфортная атмосфера</span></li><li><b>02</b><span>Мастера разных направлений</span></li><li><b>03</b><span>Индивидуальный подход</span></li></ul></div></div>`;
team.insertAdjacentElement('afterend',about);
})();
