from pathlib import Path
import re
import subprocess

TARGET = Path('mobile-stluxe-final-v22.js')
INDEX = Path('index.html')
OLD_REF = '35644a9482f0b843dc80e856b16e0c91fe5b84cd'

s = TARGET.read_text(encoding='utf-8')
old = subprocess.check_output(
    ['git', 'show', f'{OLD_REF}:mobile-stluxe-final-v22.js'],
    text=True,
)


def replace_block(text, pattern, replacement, label):
    match = re.search(pattern, text, re.S)
    if not match:
        raise SystemExit(f'{label} not found')
    return text[:match.start()] + replacement + text[match.end():]


services_css = """#tn13Services{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;overflow:hidden!important}.tn30-services{padding:43px 25px 40px}.tn30-services .tn22-kicker{color:#746c66}.tn30-services h2{width:220px;margin:17px 0 0;font:500 53px/.9 'Cormorant Garamond',Georgia,serif;letter-spacing:-.035em;color:#171513}.tn30-service-list{margin-top:35px;border-top:1px solid rgba(55,47,42,.18)}.tn30-service-row{min-height:86px;display:grid;grid-template-columns:minmax(0,1fr) 80px 101px;gap:9px;align-items:center;border-bottom:1px solid rgba(55,47,42,.18)}.tn30-service-name{min-width:0;font:500 17px/1.18 'Cormorant Garamond',Georgia,serif;color:#171513}.tn30-service-price{font:500 16px/1 'Cormorant Garamond',Georgia,serif;color:#49423d;white-space:nowrap}.tn30-service-book{width:101px;height:39px;padding:0!important;border:1px solid #4d4743!important;border-radius:5px!important;background:transparent!important;color:#171513!important;display:flex;align-items:center;justify-content:center;box-shadow:none!important;font:500 12px/1 'Manrope',Arial,sans-serif!important;white-space:nowrap}.tn30-service-more{width:100%;height:48px;margin-top:22px;padding:0!important;border:1px solid #c9bdb2!important;border-radius:7px!important;background:transparent!important;color:#403a36!important;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:none!important;font:500 12px/1 'Manrope',Arial,sans-serif!important}.tn30-service-more span:last-child{font-size:17px;line-height:1;color:#8b7d73}.tn30-service-more[hidden]{display:none!important}@media(max-width:370px){.tn30-services{padding-left:20px;padding-right:20px}.tn30-service-row{grid-template-columns:minmax(0,1fr) 72px 94px;gap:7px}.tn30-service-book{width:94px}.tn30-service-name{font-size:16px}.tn30-service-price{font-size:15px}}"""

reviews_css = """#tn13Reviews{margin:0!important;padding:0!important;background:radial-gradient(circle at 20% 12%,rgba(122,101,78,.065),transparent 31%),linear-gradient(180deg,#11100f 0%,#12110f 100%)!important;color:#f6f0e9!important;overflow:hidden!important}.tn30-reviews{padding:44px 0 46px}.tn30-reviews>.tn22-kicker,.tn30-reviews>h2{margin-left:24px;margin-right:24px}.tn30-reviews .tn22-kicker{color:#c8bdb4}.tn30-reviews h2{margin-top:16px;font:500 46px/.96 'Cormorant Garamond',Georgia,serif;letter-spacing:-.03em;color:#f7f1eb}.tn30-score{text-align:center;margin-top:43px}.tn30-score strong{display:block;font:500 84px/.82 'Cormorant Garamond',Georgia,serif;color:#fff}.tn30-stars{margin-top:20px;color:#d8ae67;font-size:27px;letter-spacing:6px}.tn30-count{margin-top:14px;font:400 13px/1 'Manrope',Arial,sans-serif;color:#d5cdc7}.tn30-review-stage{display:grid;gap:12px;margin:37px 21px 0;overflow:hidden;touch-action:pan-y;cursor:grab;user-select:none}.tn30-review-stage.dragging{cursor:grabbing}.tn30-lane{width:100%;overflow:hidden}.tn30-track{display:flex;width:100%;gap:12px;will-change:transform}.tn30-review-card{flex:0 0 100%;box-sizing:border-box;min-height:143px;padding:15px 16px 16px;border:1px solid rgba(255,255,255,.23);border-radius:12px;background:rgba(255,255,255,.024);text-decoration:none!important;color:#f5efe9!important}.tn30-review-head{display:grid;grid-template-columns:47px minmax(0,1fr);gap:12px;align-items:center}.tn30-review-avatar{width:45px;height:45px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#4b433d,#292623);border:1px solid rgba(215,174,103,.23);font:500 23px/1 'Cormorant Garamond',Georgia,serif;color:#f2e6d7}.tn30-review-name{display:block;font:500 20px/1 'Cormorant Garamond',Georgia,serif;color:#ead8c2}.tn30-review-meta{display:block;margin-top:5px;font:500 9px/1 'Manrope',Arial,sans-serif;letter-spacing:.09em;text-transform:uppercase;color:#968d86}.tn30-review-card p{margin:13px 0 0;font:400 13px/1.49 'Manrope',Arial,sans-serif;color:#eee7e1}.tn30-review-open{display:block;margin-top:11px;font:500 9.5px/1 'Manrope',Arial,sans-serif;color:#c6a271}.tn30-review-all{display:flex;align-items:center;justify-content:center;margin:28px 22px 0;height:46px;border:1px solid rgba(255,255,255,.28);border-radius:5px;color:#ead8c2!important;text-decoration:none!important;font:500 10.5px/1 'Manrope',Arial,sans-serif;letter-spacing:.17em;text-transform:uppercase}"""

services_js = r"""// SERVICES
const serv=$('#tn13Services');let servicesExpanded=false;
serv.innerHTML=`<div class="tn30-services"><p class="tn22-kicker">Услуги</p><h2>Наши услуги</h2><div class="tn30-service-list"></div><button class="tn30-service-more" type="button"><span class="tn30-more-text">Показать все услуги</span><span aria-hidden="true">↓</span></button></div>`;
const slist=serv.querySelector('.tn30-service-list'),sMore=serv.querySelector('.tn30-service-more');
function firstService(test){return SERVICES.find(test)}
const preferred=[
  firstService(s=>s.title.startsWith('Стрижка и укладка')),
  firstService(s=>s.title.startsWith('Окрашивание в 1 тон')),
  firstService(s=>s.cat==='Маникюр'),
  firstService(s=>s.cat==='Педикюр'),
  firstService(s=>s.cat==='Наращивание'),
  firstService(s=>s.cat==='Мужчинам'),
  firstService(s=>s.cat==='Детям')
].filter(Boolean);
for(const item of SERVICES){if(preferred.length>=7)break;if(!preferred.includes(item))preferred.push(item)}
function previewService(s){const parts=s.title.split(' — ');let price=s.price;if(parts.length>1&&!/^от\s/i.test(price))price=`от ${price}`;return {title:parts[0],price}}
function serviceLine(s){return `<div class="tn30-service-row"><div class="tn30-service-name">${s.title}</div><div class="tn30-service-price">${s.price}</div><button class="tn30-service-book" type="button" data-book-service>Записаться</button></div>`}
function renderServices(){const rows=servicesExpanded?SERVICES:preferred.map(previewService);slist.innerHTML=rows.map(serviceLine).join('');slist.querySelectorAll('[data-book-service]').forEach(b=>b.onclick=book);sMore.hidden=SERVICES.length<=7;sMore.querySelector('.tn30-more-text').textContent=servicesExpanded?'Свернуть':'Показать все услуги';sMore.querySelector('span:last-child').textContent=servicesExpanded?'↑':'↓'}
sMore.onclick=()=>{servicesExpanded=!servicesExpanded;renderServices()};renderServices();

"""

reviews_js = r"""// REVIEWS
const reviews=$('#tn13Reviews');
const REVIEW_SHOWCASE=REVIEW_DATA.slice(0,15);
const reviewInitial=n=>([...String(n).trim()][0]||'S').toUpperCase();
const reviewCard=r=>`<a class="tn30-review-card" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener"><div class="tn30-review-head"><span class="tn30-review-avatar">${reviewInitial(r[0])}</span><span><strong class="tn30-review-name">${r[0]}</strong><span class="tn30-review-meta">Яндекс Карты</span></span></div><p>${r[1]}</p><span class="tn30-review-open">Открыть отзыв на Яндекс Картах →</span></a>`;
const reviewLanes=[0,1,2].map(row=>REVIEW_SHOWCASE.filter((_,i)=>i%3===row));
reviews.innerHTML=`<div class="tn30-reviews"><p class="tn22-kicker">Отзывы</p><h2>Что говорят о нас</h2><div class="tn30-score"><strong>4,9</strong><div class="tn30-stars">★★★★★</div><div class="tn30-count">86 отзывов на Яндекс Картах</div></div><div class="tn30-review-stage">${reviewLanes.map((lane,i)=>{const loop=[lane[lane.length-1],...lane,lane[0]];return `<div class="tn30-lane" data-lane="${i}"><div class="tn30-track">${loop.map(reviewCard).join('')}</div></div>`}).join('')}</div><a class="tn30-review-all" href="${YANDEX_REVIEWS}" target="_blank" rel="noopener">Смотреть все отзывы →</a></div>`;
const reviewStage=reviews.querySelector('.tn30-review-stage'),reviewTracks=[...reviews.querySelectorAll('.tn30-track')];
let reviewIndex=1,reviewPauseTimer=0,reviewMotionTimer=0,reviewDragging=false,reviewMoved=false,reviewSuppressClick=false,reviewStartX=0,reviewStartY=0,reviewDx=0;
const reviewGap=12,reviewDuration=650,reviewGroupCount=5;
function reviewStep(){const lane=reviews.querySelector('.tn30-lane');return lane?lane.clientWidth+reviewGap:0}
function paintReviewTracks(animated,drag=0){const step=reviewStep();reviewTracks.forEach(t=>{t.style.transition=animated?`transform ${reviewDuration}ms cubic-bezier(.22,.72,.22,1)`:'none';t.style.transform=`translate3d(${-reviewIndex*step+drag}px,0,0)`})}
function scheduleReviews(){clearTimeout(reviewPauseTimer);reviewPauseTimer=setTimeout(()=>moveReviews(reviewIndex+1),4000)}
function normalizeReviewIndex(){if(reviewIndex===0){reviewIndex=reviewGroupCount;paintReviewTracks(false)}else if(reviewIndex===reviewGroupCount+1){reviewIndex=1;paintReviewTracks(false)}}
function moveReviews(next){clearTimeout(reviewPauseTimer);clearTimeout(reviewMotionTimer);reviewIndex=Math.max(0,Math.min(reviewGroupCount+1,next));paintReviewTracks(true);reviewMotionTimer=setTimeout(()=>{normalizeReviewIndex();scheduleReviews()},reviewDuration+30)}
requestAnimationFrame(()=>{paintReviewTracks(false);scheduleReviews()});
window.addEventListener('resize',()=>paintReviewTracks(false),{passive:true});
reviewStage.addEventListener('pointerdown',e=>{clearTimeout(reviewPauseTimer);clearTimeout(reviewMotionTimer);reviewDragging=true;reviewMoved=false;reviewDx=0;reviewStartX=e.clientX;reviewStartY=e.clientY;reviewStage.classList.add('dragging');paintReviewTracks(false);try{reviewStage.setPointerCapture(e.pointerId)}catch(_){}});
reviewStage.addEventListener('pointermove',e=>{if(!reviewDragging)return;const dx=e.clientX-reviewStartX,dy=e.clientY-reviewStartY;if(!reviewMoved&&Math.abs(dx)<6)return;if(!reviewMoved&&Math.abs(dy)>Math.abs(dx))return;reviewMoved=true;reviewDx=dx;paintReviewTracks(false,reviewDx)});
function finishReviewDrag(e){if(!reviewDragging)return;reviewDragging=false;reviewStage.classList.remove('dragging');try{reviewStage.releasePointerCapture(e.pointerId)}catch(_){}const step=reviewStep();if(reviewMoved&&Math.abs(reviewDx)>Math.min(70,step*.16))reviewIndex+=reviewDx<0?1:-1;reviewIndex=Math.max(0,Math.min(reviewGroupCount+1,reviewIndex));reviewSuppressClick=reviewMoved;reviewDx=0;paintReviewTracks(true);clearTimeout(reviewMotionTimer);reviewMotionTimer=setTimeout(()=>{normalizeReviewIndex();scheduleReviews()},reviewDuration+30)}
reviewStage.addEventListener('pointerup',finishReviewDrag);reviewStage.addEventListener('pointercancel',finishReviewDrag);reviewStage.addEventListener('click',e=>{if(reviewSuppressClick){e.preventDefault();e.stopPropagation();reviewSuppressClick=false}},true);

"""

s = replace_block(s, r"#tn13Services\{.*?(?=\n\n#tn13Team\{)", services_css, 'services css')
s = replace_block(s, r"#tn13Reviews\{.*?(?=\n\n#tn13Visit\{)", reviews_css, 'reviews css')

master_css_pattern = r"\.tn22-master-page\{.*?\.tn22-master-book\{[^}]*\}"
old_master_css = re.search(master_css_pattern, old, re.S)
if not old_master_css:
    raise SystemExit('old master css not found')
s = replace_block(s, master_css_pattern, old_master_css.group(0), 'current master css')

s = replace_block(s, r"// SERVICES\n.*?(?=// TEAM \+ TEAM SHEET)", services_js, 'services js')
master_js_pattern = r"// MASTER PAGE\n.*?(?=// REVIEWS)"
old_master_js = re.search(master_js_pattern, old, re.S)
if not old_master_js:
    raise SystemExit('old master js not found')
s = replace_block(s, master_js_pattern, old_master_js.group(0), 'current master js')
s = replace_block(s, r"// REVIEWS\n.*?(?=// VISIT)", reviews_js, 'reviews js')

TARGET.write_text(s, encoding='utf-8')

html = INDEX.read_text(encoding='utf-8')
html, count = re.subn(
    r'mobile-stluxe-final-v22\.js\?v=[^\"]+',
    'mobile-stluxe-final-v22.js?v=20260830-v30-services-reviews-master',
    html,
    count=1,
)
if count != 1:
    raise SystemExit('cache key not updated')
INDEX.write_text(html, encoding='utf-8')
