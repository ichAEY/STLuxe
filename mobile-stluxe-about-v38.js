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
#tn38About{margin:0!important;padding:38px 14px 42px!important;background:#e9e2da!important;color:#171513!important}
.tn38-about-card{max-width:500px;margin:0 auto;padding:28px 20px 20px;border-radius:28px;background:linear-gradient(180deg,#faf7f2 0%,#f7f1e9 100%);box-shadow:0 14px 34px rgba(47,37,31,.10),0 2px 8px rgba(47,37,31,.05);overflow:hidden}
.tn38-about-title{margin:0 0 23px;font:500 52px/.9 'Cormorant Garamond',Georgia,serif;letter-spacing:-.035em;color:#171513}
.tn38-about-photo{width:100%;height:250px;border-radius:19px;overflow:hidden;background:#ddd}
.tn38-about-photo img{width:100%;height:100%;object-fit:cover;display:block;filter:none!important}
.tn38-about-copy{margin:24px 2px 0;font:400 14px/1.55 'Manrope',Arial,sans-serif;color:#2e2a27}
.tn38-about-divider{height:1px;margin:24px 0 18px;background:rgba(174,139,92,.46)}
.tn38-about-points{display:grid;gap:8px}
.tn38-about-point{min-height:57px;padding:10px 13px;display:grid;grid-template-columns:36px minmax(0,1fr);align-items:center;gap:10px;border:1px solid rgba(174,139,92,.27);border-radius:13px;background:rgba(255,255,255,.18)}
.tn38-about-icon{width:32px;height:32px;display:grid;place-items:center;color:#b18443}
.tn38-about-icon svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:1.55;stroke-linecap:round;stroke-linejoin:round}
.tn38-about-point span:last-child{font:500 13px/1.2 'Manrope',Arial,sans-serif;color:#24201d}
.tn38-about-book{width:100%;height:52px;margin-top:17px;border:0;border-radius:12px;background:#151311;color:#d9b06e!important;display:flex;align-items:center;justify-content:center;gap:14px;font:500 14px/1 'Manrope',Arial,sans-serif}
.tn38-about-book b{font-size:21px;font-weight:400;line-height:1}
@media(max-width:370px){#tn38About{padding-left:10px!important;padding-right:10px!important}.tn38-about-card{padding-left:17px;padding-right:17px}.tn38-about-title{font-size:48px}.tn38-about-photo{height:226px}.tn38-about-copy{font-size:13px}}
`;
document.head.appendChild(style);

const about=document.createElement('section');
about.id='tn38About';
about.innerHTML=`<div class="tn38-about-card"><h2 class="tn38-about-title">О нас</h2><div class="tn38-about-photo"><img src="assets/images/salon-reception.webp" alt="Интерьер салона STLuxe"></div><p class="tn38-about-copy">STLuxe — пространство красоты и заботы о себе. Мы создаём образы, в которых вы чувствуете себя уверенно каждый день. Атмосфера уюта, премиальный сервис и внимание к деталям — всё для вашего идеального результата.</p><div class="tn38-about-divider"></div><div class="tn38-about-points"><div class="tn38-about-point"><span class="tn38-about-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20c-4.7-2.5-7-5.1-7-8.3 0-2.5 1.6-4.2 4-4.2 1.4 0 2.5.7 3 1.7.5-1 1.6-1.7 3-1.7 2.4 0 4 1.7 4 4.2 0 3.2-2.3 5.8-7 8.3Z"></path></svg></span><span>Комфортная атмосфера</span></div><div class="tn38-about-point"><span class="tn38-about-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.3 4.7 5.2.8-3.8 3.7.9 5.3-4.6-2.5-4.6 2.5.9-5.3-3.8-3.7 5.2-.8L12 3Z"></path></svg></span><span>Точная работа мастеров</span></div><div class="tn38-about-point"><span class="tn38-about-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.2"></circle><path d="M5.5 20c.6-4 2.8-6 6.5-6s5.9 2 6.5 6"></path></svg></span><span>Индивидуальный подход</span></div></div><button class="tn38-about-book" type="button"><span>Записаться онлайн</span><b>→</b></button></div>`;
team.insertAdjacentElement('afterend',about);
about.querySelector('.tn38-about-book').addEventListener('click',()=>{
  const booking=root.querySelector('.tn22-cta')||root.querySelector('#tn13Sticky button');
  if(booking)booking.click();
});
})();
