from pathlib import Path
import re

p=Path('mobile-stluxe-final-v22.js')
s=p.read_text()

services_css=r'''#tn13Services{margin:0!important;padding:0!important;background:#e9e2da!important;color:#171513!important;overflow:hidden!important;border-top:1px solid rgba(62,51,44,.07);border-bottom:1px solid rgba(62,51,44,.07)}.tn31-services{padding:43px 25px 40px}.tn31-services .tn22-kicker{color:#746c66}.tn31-services h2{margin:17px 0 0;font:500 50px/.92 'Cormorant Garamond',Georgia,serif;letter-spacing:-.035em;color:#171513;white-space:nowrap}.tn31-cats-wrap{position:relative;margin:26px -25px 0}.tn31-cats{display:flex;align-items:center;gap:25px;overflow-x:auto;overscroll-behavior-inline:contain;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:0 25px 10px;mask-image:linear-gradient(90deg,transparent 0,#000 18px,#000 calc(100% - 18px),transparent 100%);-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 18px,#000 calc(100% - 18px),transparent 100%)}.tn31-cats::-webkit-scrollbar{display:none}.tn31-cat{position:relative;flex:0 0 auto;height:31px;padding:0;border:0;background:transparent;color:#887e77;font:500 11px/1 'Manrope',Arial,sans-serif;white-space:nowrap}.tn31-cat.active{color:#171513;font-weight:650}.tn31-cat.active:after{content:'';position:absolute;left:0;right:0;bottom:1px;height:1px;background:#171513}.tn31-service-list{margin-top:20px;border-top:1px solid rgba(55,47,42,.18)}.tn31-service-row{min-height:82px;display:grid;grid-template-columns:minmax(0,1fr) 108px;gap:16px;align-items:center;border-bottom:1px solid rgba(55,47,42,.18)}.tn31-service-copy{min-width:0;padding:13px 0}.tn31-service-name{font:500 17px/1.14 'Cormorant Garamond',Georgia,serif;color:#171513;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.tn31-service-detail{display:block;margin-top:5px;font:400 9.5px/1.35 'Manrope',Arial,sans-serif;color:#81766f;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tn31-service-side{text-align:right;align-self:center}.tn31-service-price{font:600 21px/1 'Cormorant Garamond',Georgia,serif;color:#2d2825;white-space:nowrap}.tn31-service-book{display:inline-block;margin-top:7px;padding:0!important;border:0!important;background:transparent!important;box-shadow:none!important;color:#736860!important;font:500 9.5px/1 'Manrope',Arial,sans-serif!important;text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:3px;white-space:nowrap}.tn31-service-more{width:100%;height:48px;margin-top:22px;padding:0!important;border:1px solid #bbaeA5!important;border-radius:7px!important;background:rgba(255,255,255,.18)!important;color:#342f2b!important;display:flex;align-items:center;justify-content:center;gap:9px;box-shadow:none!important;font:500 12px/1 'Manrope',Arial,sans-serif!important}.tn31-service-more span:last-child{font-size:17px;line-height:1;color:#82756c}.tn31-service-more[hidden]{display:none!important}@media(max-width:370px){.tn31-services{padding-left:20px;padding-right:20px}.tn31-cats-wrap{margin-left:-20px;margin-right:-20px}.tn31-cats{padding-left:20px;padding-right:20px}.tn31-service-row{grid-template-columns:minmax(0,1fr) 100px;gap:12px}.tn31-services h2{font-size:46px}.tn31-service-name{font-size:16px}.tn31-service-price{font-size:20px}}'''

reviews_css=r'''#tn13Reviews{margin:0!important;padding:0!important;background:radial-gradient(circle at 20% 12%,rgba(122,101,78,.065),transparent 31%),linear-gradient(180deg,#11100f 0%,#12110f 100%)!important;color:#f6f0e9!important;overflow:hidden!important}.tn30-reviews{padding:44px 0 46px}.tn30-reviews>.tn22-kicker,.tn30-reviews>h2{margin-left:24px;margin-right:24px}.tn30-reviews .tn22-kicker{color:#c8bdb4}.tn30-reviews h2{margin-top:16px;font:500 46px/.96 'Cormorant Garamond',Georgia,serif;letter-spacing:-.03em;color:#f7f1eb}.tn30-score{text-align:center;margin-top:43px}.tn30-score strong{display:block;font:500 84px/.82 'Cormorant Garamond',Georgia,serif;color:#fff}.tn30-stars{margin-top:20px;color:#d8ae67;font-size:27px;letter-spacing:6px}.tn30-count{margin-top:14px;font:400 13px/1 'Manrope',Arial,sans-serif;color:#d5cdc7}.tn30-review-stage{display:grid;gap:12px;margin:37px 0 0;overflow:hidden;touch-action:pan-y;cursor:grab;user-select:none}.tn30-review-stage.dragging{cursor:grabbing}.tn30-lane{width:100%;overflow:hidden}.tn30-track{display:flex;width:100%;gap:12px;will-change:transform}.tn30-review-card{flex:0 0 calc(100% - 52px);box-sizing:border-box;min-height:112px;padding:15px 16px 16px;border:1px solid rgba(255,255,255,.23);border-radius:12px;background:rgba(255,255,255,.024);text-decoration:none!important;color:#f5efe9!important}.tn30-review-head{display:grid;grid-template-columns:47px minmax(0,1fr);gap:12px;align-items:center}.tn30-review-avatar{width:45px;height:45px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#4b433d,#292623);border:1px solid rgba(215,174,103,.23);font:500 23px/1 'Cormorant Garamond',Georgia,serif;color:#f2e6d7}.tn30-review-name{display:block;font:500 20px/1 'Cormorant Garamond',Georgia,serif;color:#ead8c2}.tn30-review-meta{display:block;margin-top:5px;font:500 9px/1 'Manrope',Arial,sans-serif;letter-spacing:.09em;text-transform:uppercase;color:#968d86}.tn30-review-open{display:block;margin-top:17px;font:500 10px/1 'Manrope',Arial,sans-serif;color:#c6a271}.tn30-review-all{display:flex;align-items:center;justify-content:center;margin:28px 22px 0;height:46px;border:1px solid rgba(255,255,255,.28);border-radius:5px;color:#ead8c2!important;text-decoration:none!important;font:500 10.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.17em;text-transform:uppercase}'''

services_js=r'''// SERVICES
const serv=$('#tn13Services');let serviceCat='Волосы',servicesExpanded=false;
const SERVICE_CATS=[...new Set(SERVICES.map(s=>s.cat))];
serv.innerHTML=`<div class="tn31-services"><p class="tn22-kicker">Услуги</p><h2>Наши услуги</h2><div class="tn31-cats-wrap"><div class="tn31-cats"></div></div><div class="tn31-service-list"></div><button class="tn31-service-more" type="button"><span class="tn31-more-text"></span><span aria-hidden="true">↓</span></button></div>`;
const scats=serv.querySelector('.tn31-cats'),slist=serv.querySelector('.tn31-service-list'),sMore=serv.querySelector('.tn31-service-more');
function splitServiceTitle(raw){const parts=String(raw).split(' — ');const main=parts.shift()||raw;let detail=parts.join(' — ');if(!detail&&main.length>48){const m=main.match(/^(.*?)(\s\([^)]{5,}\)|\sBrazilian Blowout)$/i);if(m)return {main:m[1],detail:m[2].trim()}}return {main,detail}}
function serviceLine(s){const t=splitServiceTitle(s.title);return `<div class="tn31-service-row"><div class="tn31-service-copy"><div class="tn31-service-name">${t.main}</div>${t.detail?`<span class="tn31-service-detail">${t.detail}</span>`:''}</div><div class="tn31-service-side"><div class="tn31-service-price">${s.price}</div><button class="tn31-service-book" type="button" data-book-service>Записаться</button></div></div>`}
function serviceWord(n){const n10=n%10,n100=n%100;if(n10===1&&n100!==11)return 'услугу';if(n10>=2&&n10<=4&&(n100<12||n100>14))return 'услуги';return 'услуг'}
function revealCat(btn){const left=btn.offsetLeft-22,right=left+btn.offsetWidth+44;if(left<scats.scrollLeft)scats.scrollTo({left:Math.max(0,left),behavior:'smooth'});else if(right>scats.scrollLeft+scats.clientWidth)scats.scrollTo({left:right-scats.clientWidth,behavior:'smooth'})}
function renderServices(){scats.innerHTML=SERVICE_CATS.map(c=>`<button class="tn31-cat${c===serviceCat?' active':''}" type="button" data-scat="${c}">${c}</button>`).join('');scats.querySelectorAll('[data-scat]').forEach(b=>b.onclick=()=>{serviceCat=b.dataset.scat;servicesExpanded=false;renderServices();requestAnimationFrame(()=>revealCat(scats.querySelector(`[data-scat="${serviceCat}"]`)))});const arr=SERVICES.filter(s=>s.cat===serviceCat),shown=servicesExpanded?arr:arr.slice(0,7),remaining=Math.max(0,arr.length-7);slist.innerHTML=shown.map(serviceLine).join('');slist.querySelectorAll('[data-book-service]').forEach(b=>b.onclick=book);sMore.hidden=arr.length<=7;sMore.querySelector('.tn31-more-text').textContent=servicesExpanded?'Свернуть':`Показать ещё ${remaining} ${serviceWord(remaining)}`;sMore.querySelector('span:last-child').textContent=servicesExpanded?'↑':'↓'}
sMore.onclick=()=>{servicesExpanded=!servicesExpanded;renderServices()};renderServices();

'''

reviews_js=r'''// REVIEWS
const reviews=$('#tn13Reviews');
const REVIEW_SHOWCASE=REVIEW_DATA.slice(0,15);
const reviewInitial=n=>([...String(n).trim()][0]||'S').toUpperCase();
const reviewCard=r=>`<a class="tn30-review-card" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener"><div class="tn30-review-head"><span class="tn30-review-avatar">${reviewInitial(r[0])}</span><span><strong class="tn30-review-name">${r[0]}</strong><span class="tn30-review-meta">Реальный отзыв · Яндекс Карты</span></span></div><span class="tn30-review-open">Читать оригинальный отзыв на Яндекс Картах →</span></a>`;
const reviewLanes=[0,1,2].map(row=>REVIEW_SHOWCASE.filter((_,i)=>i%3===row));
reviews.innerHTML=`<div class="tn30-reviews"><p class="tn22-kicker">Отзывы</p><h2>Что говорят о нас</h2><div class="tn30-score"><strong>4,9</strong><div class="tn30-stars">★★★★★</div><div class="tn30-count">86 отзывов на Яндекс Картах</div></div><div class="tn30-review-stage">${reviewLanes.map((lane,i)=>{const loop=[lane[lane.length-1],...lane,lane[0]];return `<div class="tn30-lane" data-lane="${i}"><div class="tn30-track">${loop.map(reviewCard).join('')}</div></div>`}).join('')}</div><a class="tn30-review-all" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener">Смотреть все отзывы →</a></div>`;
const reviewStage=reviews.querySelector('.tn30-review-stage'),reviewTracks=[...reviews.querySelectorAll('.tn30-track')];
let reviewIndex=1,reviewPauseTimer=0,reviewMotionTimer=0,reviewDragging=false,reviewMoved=false,reviewSuppressClick=false,reviewStartX=0,reviewStartY=0,reviewDx=0;
const reviewGap=12,reviewDuration=500,reviewGroupCount=5;
function reviewMetrics(){const lane=reviews.querySelector('.tn30-lane'),card=reviews.querySelector('.tn30-review-card');if(!lane||!card)return {step:0,peek:0};const w=card.getBoundingClientRect().width;return {step:w+reviewGap,peek:(lane.clientWidth-w)/2}}
function paintReviewTracks(animated,drag=0){const {step,peek}=reviewMetrics();reviewTracks.forEach(t=>{t.style.transition=animated?`transform ${reviewDuration}ms cubic-bezier(.25,.72,.2,1)`:'none';t.style.transform=`translate3d(${peek-reviewIndex*step+drag}px,0,0)`})}
function scheduleReviews(){clearTimeout(reviewPauseTimer);reviewPauseTimer=setTimeout(()=>moveReviews(reviewIndex+1),4000)}
function normalizeReviewIndex(){if(reviewIndex===0){reviewIndex=reviewGroupCount;paintReviewTracks(false)}else if(reviewIndex===reviewGroupCount+1){reviewIndex=1;paintReviewTracks(false)}}
function moveReviews(next){clearTimeout(reviewPauseTimer);clearTimeout(reviewMotionTimer);reviewIndex=Math.max(0,Math.min(reviewGroupCount+1,next));paintReviewTracks(true);reviewMotionTimer=setTimeout(()=>{normalizeReviewIndex();scheduleReviews()},reviewDuration+30)}
requestAnimationFrame(()=>{paintReviewTracks(false);scheduleReviews()});
window.addEventListener('resize',()=>paintReviewTracks(false),{passive:true});
reviewStage.addEventListener('pointerdown',e=>{clearTimeout(reviewPauseTimer);clearTimeout(reviewMotionTimer);reviewDragging=true;reviewMoved=false;reviewDx=0;reviewStartX=e.clientX;reviewStartY=e.clientY;reviewStage.classList.add('dragging');paintReviewTracks(false);try{reviewStage.setPointerCapture(e.pointerId)}catch(_){}});
reviewStage.addEventListener('pointermove',e=>{if(!reviewDragging)return;const dx=e.clientX-reviewStartX,dy=e.clientY-reviewStartY;if(!reviewMoved&&Math.abs(dx)<6)return;if(!reviewMoved&&Math.abs(dy)>Math.abs(dx))return;reviewMoved=true;reviewDx=dx;paintReviewTracks(false,reviewDx)});
function finishReviewDrag(e){if(!reviewDragging)return;reviewDragging=false;reviewStage.classList.remove('dragging');try{reviewStage.releasePointerCapture(e.pointerId)}catch(_){}const {step}=reviewMetrics();if(reviewMoved&&Math.abs(reviewDx)>Math.min(70,step*.16))reviewIndex+=reviewDx<0?1:-1;reviewIndex=Math.max(0,Math.min(reviewGroupCount+1,reviewIndex));reviewSuppressClick=reviewMoved;reviewDx=0;paintReviewTracks(true);clearTimeout(reviewMotionTimer);reviewMotionTimer=setTimeout(()=>{normalizeReviewIndex();scheduleReviews()},reviewDuration+30)}
reviewStage.addEventListener('pointerup',finishReviewDrag);reviewStage.addEventListener('pointercancel',finishReviewDrag);reviewStage.addEventListener('click',e=>{if(reviewSuppressClick){e.preventDefault();e.stopPropagation();reviewSuppressClick=false}},true);

'''

def repl(pattern,replacement,label):
    global s
    m=re.search(pattern,s,re.S)
    if not m: raise SystemExit(f'{label} not found')
    s=s[:m.start()]+replacement+s[m.end():]

repl(r"#tn13Services\{.*?(?=\n\n#tn13Team\{)",services_css,'services css')
repl(r"#tn13Reviews\{.*?(?=\n\n#tn13Visit\{)",reviews_css,'reviews css')
repl(r"// SERVICES\n.*?(?=// TEAM \+ TEAM SHEET)",services_js,'services js')
repl(r"// REVIEWS\n.*?(?=// VISIT)",reviews_js,'reviews js')

s=s.replace(".tn22-contact strong{display:block;font:500 15px/1.15 'Cormorant Garamond',Georgia,serif}",".tn22-contact strong{display:block;font:500 15px/1.15 'Cormorant Garamond',Georgia,serif;color:#171513!important}",1)
s=s.replace("border:1px solid #201c19;border-radius:999px", "border:1px solid #b8b0aa;border-radius:999px",1)
s=s.replace("<span class=\"tn22-status-text\"></span>${clock}", "${clock}<span class=\"tn22-status-text\"></span>",1)

p.write_text(s)

idx=Path('index.html')
h=idx.read_text()
old='mobile-stluxe-final-v22.js?v=20260830-v30-services-reviews-master'
new='mobile-stluxe-final-v22.js?v=20260830-v31-services-reviews-contacts'
if old not in h: raise SystemExit('cache key not found')
idx.write_text(h.replace(old,new,1))
