(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;

const style=document.createElement('style');
style.id='stluxe-theme-current';
style.textContent=`
@media(max-width:767px){
:root{
  --stl-white:#fafafa;
  --stl-white-soft:#f7f7f8;
  --stl-violet:#8f55b5;
  --stl-violet-deep:#4c285c;
  --stl-ink:#1b191d;
  --stl-yellow:#d9aa42;
  --stl-dark:#242127;
  --stl-dark-2:#2d2931;
  --stl-dark-3:#37313b;
  --stl-dark-text:#f7f3f8;
  --stl-dark-muted:#b9b2bd;
  --stl-dark-line:rgba(255,255,255,.11);
  --stl-dark-violet:#6f3d82;
  --stl-dark-violet-bright:#8d55a5;
}

html,body{background:var(--stl-white)!important}
#stluxe-tanem-v13{background:var(--stl-white)!important;color:var(--stl-ink)!important}

/* Hero + portfolio */
#stluxe-tanem-v13 .tn13-hero{
  background:
    radial-gradient(390px 250px at 112% 11%,rgba(145,78,184,.12),transparent 70%),
    radial-gradient(260px 190px at -12% 78%,rgba(161,101,197,.055),transparent 72%),
    linear-gradient(180deg,#fbfafb 0%,#fafafa 91%,#fafafa 100%)!important;
}
.tn22-top{
  background:
    radial-gradient(280px 160px at 108% -18%,rgba(147,80,185,.12),transparent 72%),
    #fbfafb!important;
}
.tn22-media:after{background:linear-gradient(180deg,rgba(250,250,250,0),#fafafa 96%)!important}
.tn22-card{
  background:
    radial-gradient(250px 170px at 112% 4%,rgba(151,84,190,.06),transparent 72%),
    linear-gradient(180deg,rgba(252,251,252,.985) 0%,rgba(252,251,252,.985) 81%,#fafafa 100%)!important;
}
.tn22-card:after{background:linear-gradient(180deg,rgba(250,250,250,0),rgba(250,250,250,.5) 48%,#fafafa 92%)!important}
#tn13Portfolio{
  background:
    radial-gradient(330px 230px at -14% 28%,rgba(150,82,190,.07),transparent 71%),
    #fafafa!important;
}

/* Shared interface accents */
.tn22-cta,#tn13Sticky button{background:var(--stl-violet-deep)!important;border-color:var(--stl-violet-deep)!important;color:#fff!important}
.tn23-section-nav{background:rgba(250,250,250,.96)!important;border-bottom-color:rgba(75,40,91,.09)!important}
.tn23-section-nav button.active:after{background:var(--stl-violet)!important}
.tn22-worklink{border-color:rgba(83,48,98,.18)!important;background:rgba(255,255,255,.4)!important}
#tn13Sticky{background:rgba(250,250,250,.96)!important;border-color:rgba(72,47,82,.10)!important}

/* Services */
#tn13Services{
  background:
    radial-gradient(420px 310px at 108% 8%,rgba(143,85,181,.19),transparent 67%),
    radial-gradient(300px 230px at -14% 88%,rgba(111,61,130,.10),transparent 72%),
    var(--stl-dark)!important;
  color:var(--stl-dark-text)!important;
  border-top-color:rgba(255,255,255,.055)!important;
  border-bottom-color:rgba(255,255,255,.055)!important;
}
#tn13Services .tn22-kicker{color:#aaa2ad!important}
#tn13Services .tn31-services h2,
#tn13Services .tn31-service-name,
#tn13Services .tn31-service-price{color:var(--stl-dark-text)!important}
#tn13Services .tn31-service-detail{color:var(--stl-dark-muted)!important}
#tn13Services .tn31-service-list,
#tn13Services .tn31-service-row{border-color:rgba(255,255,255,.10)!important}
#tn13Services .tn31-cat{background:rgba(255,255,255,.035)!important;border-color:rgba(255,255,255,.12)!important;color:#c9c1cc!important}
#tn13Services .tn31-cat.active{background:var(--stl-dark-violet)!important;border-color:var(--stl-dark-violet)!important;color:#fff!important}
#tn13Services .tn31-service-book{color:#c28fd1!important}
#tn13Services .tn31-service-more{background:rgba(255,255,255,.045)!important;border-color:rgba(255,255,255,.13)!important;color:#eee8f0!important}
#tn13Services .tn31-service-more span:last-child{color:#bfb6c2!important}

/* About */
#tn38About{
  background:
    radial-gradient(430px 310px at 108% 18%,rgba(150,79,190,.155),transparent 67%),
    radial-gradient(300px 220px at -16% 84%,rgba(157,91,194,.06),transparent 73%),
    var(--stl-white-soft)!important;
}
#tn38About .tn42-kicker{color:#6f6971!important}
#tn38About .tn42-card{background:#ebe9ed!important;border-color:rgba(67,56,71,.10)!important;box-shadow:0 14px 34px rgba(43,35,47,.08)!important}
#tn38About .tn42-photo{background:#342338!important}
#tn38About .tn42-photo:after{content:'';position:absolute;inset:0;pointer-events:none;background:radial-gradient(280px 190px at 88% 12%,rgba(189,121,222,.18),transparent 70%)}
#tn38About .tn42-photo img{filter:brightness(1.17) saturate(1.08) contrast(.98)!important}
#tn38About .tn42-body{
  background:
    radial-gradient(250px 180px at 108% 0%,rgba(143,85,181,.055),transparent 72%),
    #ebe9ed!important;
}
#tn38About .tn42-lead{color:#211e23!important}
#tn38About .tn42-copy{color:#5c565f!important}
#tn38About .tn42-facts{border-top-color:rgba(60,52,64,.08)!important}
#tn38About .tn42-fact{background:#dfdce2!important;border-color:rgba(75,58,81,.09)!important;color:#2c282e!important;box-shadow:none!important}
#tn38About .tn42-fact b{color:var(--stl-dark-violet)!important}
#tn38About .tn42-fact span{color:#2c282e!important}
#tn38About .tn42-rating{background:rgba(62,35,72,.74)!important;border-color:rgba(255,255,255,.25)!important}
#tn38About .tn42-rating-star{color:#f0c45d!important}

/* Team */
#tn13Team{
  background:
    radial-gradient(420px 310px at 108% 8%,rgba(143,85,181,.19),transparent 67%),
    radial-gradient(300px 230px at -14% 88%,rgba(111,61,130,.10),transparent 72%),
    var(--stl-dark)!important;
  color:var(--stl-dark-text)!important;
  border-top-color:rgba(255,255,255,.055)!important;
  border-bottom-color:rgba(255,255,255,.055)!important;
}
#tn13Team .tn22-kicker,#tn13Team .tn42-team-hint{color:#aaa2ad!important}
#tn13Team .tn22-team h2,#tn13Team .tn22-master-name{color:var(--stl-dark-text)!important}
#tn13Team .tn22-master-role{color:var(--stl-dark-muted)!important}
#tn13Team .tn22-master-circle{
  background:radial-gradient(circle at 42% 30%,rgba(255,255,255,.07),transparent 45%),linear-gradient(145deg,#3c3641,#302b34)!important;
  color:#cbbfd0!important;border:1px solid rgba(255,255,255,.085)!important;box-shadow:inset 0 1px 0 rgba(255,255,255,.035)!important;
}
#tn13Team .tn22-master-circle svg{opacity:.92!important}

/* Reviews */
#tn13Reviews{
  background:
    radial-gradient(390px 270px at 111% 8%,rgba(150,80,190,.12),transparent 69%),
    radial-gradient(270px 210px at -14% 84%,rgba(166,102,200,.05),transparent 73%),
    #fafafa!important;
  border-top:1px solid rgba(31,28,34,.055)!important;
  border-bottom:1px solid rgba(31,28,34,.055)!important;
}
.tn30-reviews .tn22-kicker{color:#6f6a71!important}
.tn30-stars{color:var(--stl-yellow)!important}
.tn30-review-card{background:rgba(245,244,247,.88)!important;border-color:rgba(69,61,73,.105)!important}
.tn30-review-avatar{background:#e4e2e7!important;color:#504a52!important}
.tn30-review-meta{color:#88828a!important}
.tn30-review-all{background:#f1f0f3!important;border-color:rgba(67,58,71,.14)!important}

/* Contacts */
#tn13Visit{
  background:
    radial-gradient(420px 310px at 108% 8%,rgba(143,85,181,.19),transparent 67%),
    radial-gradient(300px 230px at -14% 88%,rgba(111,61,130,.10),transparent 72%),
    var(--stl-dark)!important;
  color:var(--stl-dark-text)!important;
  border-radius:0!important;
  border-top-color:rgba(255,255,255,.055)!important;
  border-bottom-color:rgba(255,255,255,.055)!important;
}
#tn13Visit .tn22-kicker{color:#aaa2ad!important}
#tn13Visit h2,#tn13Visit .tn22-contact strong,#tn13Visit .tn22-visit-head{color:var(--stl-dark-text)!important}
#tn13Visit .tn22-contact{background:rgba(255,255,255,.045)!important;border-color:rgba(255,255,255,.11)!important;color:var(--stl-dark-text)!important}
#tn13Visit .tn22-contact span{color:var(--stl-dark-muted)!important}
#tn13Visit .tn22-contact svg{stroke:#c69bd2!important}
#tn13Visit .tn22-call{background:rgba(255,255,255,.035)!important;border-color:rgba(255,255,255,.13)!important;color:#f1ebf3!important}
#tn13Visit .tn22-route{background:var(--stl-dark-violet)!important;border-color:var(--stl-dark-violet)!important;color:#fff!important}
#tn13Visit .tn22-mapwrap{background:#302b34!important}
#tn13Visit .tn22-map-skeleton{background:linear-gradient(110deg,#302b34 10%,#3a343e 35%,#302b34 60%)!important;background-size:220% 100%!important;color:var(--stl-dark-muted)!important}
#tn13Visit .tn22-status{border-color:rgba(255,255,255,.14)!important}
#tn13Visit .tn22-status.open{background:#2e4133!important;border-color:#4d6752!important;color:#a9d5b0!important}
#tn13Visit .tn22-status.closed{background:#493336!important;border-color:#65474b!important;color:#d59a9f!important}
#tn13Visit .tn22-footer{background:#1d1a20!important}

/* Live hero status */
.tn50-hero-status-sub{display:block}
.tn50-hero-status.open .tn50-hero-status-main{color:#3f8750!important}
.tn50-hero-status.closed .tn50-hero-status-main{color:#a45e64!important}

/* Master profile */
.tn22-master-page{
  background:
    radial-gradient(430px 310px at 106% 0%,rgba(143,85,181,.18),transparent 68%),
    radial-gradient(300px 220px at -14% 80%,rgba(111,61,130,.08),transparent 72%),
    var(--stl-dark)!important;
  color:var(--stl-dark-text)!important;
}
.tn22-master-page .tn22-back,.tn22-master-page .tn22-master-brand{color:var(--stl-dark-text)!important}
.tn22-master-page .tn22-profile-circle{
  background:radial-gradient(circle at 42% 31%,rgba(255,255,255,.075),transparent 43%),linear-gradient(145deg,#3d3742,#2f2a33)!important;
  color:#cbbfd0!important;border:1px solid rgba(255,255,255,.085)!important;box-shadow:0 14px 34px rgba(0,0,0,.16)!important;
}
.tn22-master-page .tn22-profile h1{color:var(--stl-dark-text)!important}
.tn22-master-page .tn22-profile-role{color:var(--stl-dark-muted)!important}
.tn22-master-page .tn22-salon-rating{color:#d8d1da!important}
.tn22-master-page .tn22-salon-rating b{color:#e0ad43!important}
.tn22-master-page .tn22-master-tabs{gap:7px!important}
.tn22-master-page .tn22-master-tabs button{background:rgba(255,255,255,.035)!important;border-color:var(--stl-dark-line)!important;color:#c6bec9!important}
.tn22-master-page .tn22-master-tabs button.active{background:var(--stl-dark-violet)!important;border-color:var(--stl-dark-violet)!important;color:#fff!important}
.tn22-master-page .tn22-master-content h3{color:var(--stl-dark-text)!important}
.tn22-master-page .tn22-master-about{color:#d0c9d2!important}
.tn22-master-page .tn22-master-service{border-bottom-color:rgba(255,255,255,.09)!important}
.tn22-master-page .tn22-master-service b{color:#f0ebf2!important}
.tn22-master-page .tn22-master-service span{color:#d9d0dc!important}
.tn22-master-page .tn22-master-review{background:#302b34!important;border-color:rgba(255,255,255,.09)!important}
.tn22-master-page .tn22-master-review strong{color:var(--stl-dark-text)!important}
.tn22-master-page .tn22-master-review p{color:#c9c1cc!important}
.tn22-master-page .tn22-master-book{background:linear-gradient(180deg,var(--stl-dark-violet-bright),var(--stl-dark-violet))!important;color:#fff!important;box-shadow:0 14px 36px rgba(73,37,88,.34)!important}

/* Full gallery */
#tn13Gallery{
  background:
    radial-gradient(430px 300px at 108% 2%,rgba(143,85,181,.17),transparent 68%),
    radial-gradient(320px 230px at -12% 92%,rgba(111,61,130,.08),transparent 72%),
    var(--stl-dark)!important;
  color:var(--stl-dark-text)!important;
}
#tn13Gallery .tn22-gallery-back,#tn13Gallery .tn22-gallery-title strong{color:var(--stl-dark-text)!important}
#tn13Gallery .tn22-gallery-title span,#tn13Gallery .tn23-gallery-empty{color:var(--stl-dark-muted)!important}
#tn13Gallery .tn22-gallery-tabs{border-color:rgba(255,255,255,.11)!important;background:rgba(255,255,255,.025)!important}
#tn13Gallery .tn22-gallery-tab{color:#c6bec9!important;background:transparent!important}
#tn13Gallery .tn22-gallery-tab.active{background:var(--stl-dark-violet)!important;color:#fff!important}
#tn13Gallery .tn22-gallery-tile{background:#302b34!important;box-shadow:0 8px 22px rgba(0,0,0,.12)!important}
}
`;

document.head.appendChild(style);
const meta=document.querySelector('meta[name="theme-color"]');
if(meta)meta.setAttribute('content','#fafafa');
})();

(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;

const PRICE_PAGES=Array.from({length:7},(_,i)=>`stluxe_price_page_${i+1}.webp`);
const PRICE_NAMES=['Парикмахерские услуги','Осветление и окрашивание','Уход за волосами','Мужские и детские','Маникюр','Педикюр','Наращивание ногтей'];
let priceMode=false,paintingPrice=false;

const featureStyle=document.createElement('style');
featureStyle.id='stluxe-price-feature';
featureStyle.textContent=`
@media(max-width:767px){
#tn13Services .stl-price-card{position:relative;overflow:hidden;margin-top:28px;padding:24px 22px 22px;border:1px solid rgba(255,255,255,.12);border-radius:15px;background:radial-gradient(210px 160px at 104% 4%,rgba(143,85,181,.20),transparent 70%),rgba(255,255,255,.025);box-shadow:inset 0 1px 0 rgba(255,255,255,.025)}
#tn13Services .stl-price-card:after{content:'';position:absolute;right:-62px;top:18px;width:190px;height:150px;pointer-events:none;opacity:.52;background:radial-gradient(ellipse at 30% 50%,rgba(141,78,169,.27),transparent 58%),radial-gradient(ellipse at 66% 36%,rgba(111,61,130,.20),transparent 55%);transform:rotate(-18deg);filter:blur(2px)}
#tn13Services .stl-price-title{position:relative;z-index:1;margin:0;color:#f7f3f8;font:500 40px/.95 'Cormorant Garamond',Georgia,serif;letter-spacing:-.03em}
#tn13Services .stl-price-copy{position:relative;z-index:1;margin:10px 0 0;color:#aFA7b2;font:400 11.5px/1.45 'Manrope',Arial,sans-serif}
#tn13Services .stl-price-actions{position:relative;z-index:1;display:grid;grid-template-columns:minmax(0,1fr) 104px;gap:10px;margin-top:20px}
#tn13Services .stl-price-open,#tn13Services .stl-price-pdf{height:62px;border-radius:13px;font:500 13px/1 'Manrope',Arial,sans-serif;display:flex;align-items:center;justify-content:center;gap:10px}
#tn13Services .stl-price-open{border:1px solid rgba(190,139,211,.30);background:linear-gradient(135deg,#8d45b4,#77369d);color:#fff!important;box-shadow:0 10px 28px rgba(82,39,100,.25)}
#tn13Services .stl-price-pdf{border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.035);color:#eee8f0!important}
#tn13Services .stl-price-open svg,#tn13Services .stl-price-pdf svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
#tn13Services .stl-price-open .stl-price-arrow{font-size:23px;line-height:1;margin-left:2px}
#tn13Gallery.stl-price-mode .tn22-gallery-grid{grid-template-columns:1fr!important;gap:14px!important;margin-top:18px!important}
#tn13Gallery .stl-price-tile{position:relative;display:block;width:100%;padding:0;border:0;border-radius:12px;overflow:hidden;background:#f5efe8!important;box-shadow:0 10px 30px rgba(0,0,0,.18)!important;aspect-ratio:auto!important}
#tn13Gallery .stl-price-tile img{display:block;width:100%;height:auto!important;object-fit:contain!important;background:#f8f4ef}
#tn13Gallery .stl-price-badge{position:absolute;right:10px;bottom:10px;min-width:42px;height:28px;padding:0 9px;border-radius:999px;background:rgba(29,26,32,.82);backdrop-filter:blur(8px);color:#fff;display:flex;align-items:center;justify-content:center;font:500 10px/1 'Manrope',Arial,sans-serif}
#tn13Gallery .stl-price-caption{position:absolute;left:10px;bottom:10px;max-width:68%;padding:7px 9px;border-radius:9px;background:rgba(29,26,32,.78);backdrop-filter:blur(8px);color:#eee8f0;font:500 9px/1.25 'Manrope',Arial,sans-serif}
.stl-price-viewer{position:fixed;z-index:260;inset:0;display:none;align-items:center;justify-content:center;padding:54px 16px 52px;background:rgba(17,14,19,.95);backdrop-filter:blur(10px)}
.stl-price-viewer.open{display:flex}
.stl-price-viewer img{max-width:100%;max-height:100%;object-fit:contain;border-radius:10px;background:#f8f4ef;box-shadow:0 20px 70px rgba(0,0,0,.36)}
.stl-price-viewer .stl-pv-close{position:absolute;top:max(12px,env(safe-area-inset-top));right:14px;width:42px;height:42px;border:1px solid rgba(255,255,255,.18);border-radius:50%;background:rgba(255,255,255,.07);color:#fff;font-size:25px}
.stl-price-viewer .stl-pv-nav{position:absolute;top:50%;transform:translateY(-50%);width:38px;height:58px;border:0;background:rgba(28,24,31,.64);color:#fff;font-size:35px;border-radius:12px}
.stl-price-viewer .stl-pv-prev{left:4px}.stl-price-viewer .stl-pv-next{right:4px}
.stl-price-viewer .stl-pv-count{position:absolute;left:50%;bottom:max(14px,env(safe-area-inset-bottom));transform:translateX(-50%);padding:8px 12px;border-radius:999px;background:rgba(255,255,255,.09);color:#fff;font:500 11px/1 'Manrope',Arial,sans-serif}
}
`;
document.head.appendChild(featureStyle);

const EYE='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></svg>';
const DOWNLOAD='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14"/></svg>';

function ensureViewer(){
  let viewer=document.querySelector('.stl-price-viewer');
  if(viewer)return viewer;
  viewer=document.createElement('div');viewer.className='stl-price-viewer';
  viewer.innerHTML='<button class="stl-pv-close" type="button" aria-label="Закрыть">×</button><button class="stl-pv-nav stl-pv-prev" type="button" aria-label="Предыдущая">‹</button><img alt="Прайс STLuxe"><button class="stl-pv-nav stl-pv-next" type="button" aria-label="Следующая">›</button><div class="stl-pv-count"></div>';
  document.body.appendChild(viewer);
  let index=0;const img=viewer.querySelector('img'),count=viewer.querySelector('.stl-pv-count');
  const paint=()=>{img.src=PRICE_PAGES[index];img.alt=`Прайс STLuxe, страница ${index+1}`;count.textContent=`${index+1} / ${PRICE_PAGES.length}`};
  viewer.openAt=i=>{index=Math.max(0,Math.min(PRICE_PAGES.length-1,i));paint();viewer.classList.add('open');document.body.style.overflow='hidden'};
  viewer.querySelector('.stl-pv-close').onclick=()=>{viewer.classList.remove('open');if(!document.querySelector('#tn13Gallery.open'))document.body.style.overflow=''};
  viewer.querySelector('.stl-pv-prev').onclick=()=>{index=(index-1+PRICE_PAGES.length)%PRICE_PAGES.length;paint()};
  viewer.querySelector('.stl-pv-next').onclick=()=>{index=(index+1)%PRICE_PAGES.length;paint()};
  return viewer;
}

function renderPriceGallery(){
  const gallery=document.querySelector('#tn13Gallery');if(!gallery||!gallery.classList.contains('open'))return;
  const tabs=gallery.querySelector('.tn22-gallery-tabs'),grid=gallery.querySelector('.tn22-gallery-grid');if(!tabs||!grid)return;
  paintingPrice=true;
  let tab=tabs.querySelector('[data-stl-price-tab]');
  if(!tab){tab=document.createElement('button');tab.type='button';tab.className='tn22-gallery-tab';tab.dataset.stlPriceTab='1';tab.textContent='Прайс';tabs.appendChild(tab)}
  tab.onclick=()=>{priceMode=true;renderPriceGallery()};
  tabs.querySelectorAll('[data-gcat]').forEach(b=>{if(!b.dataset.stlPriceBound){b.dataset.stlPriceBound='1';b.addEventListener('click',()=>{priceMode=false})}});
  tabs.querySelectorAll('.tn22-gallery-tab').forEach(b=>b.classList.toggle('active',b===tab));
  gallery.classList.add('stl-price-mode');grid.classList.remove('salon');grid.classList.add('stl-price-grid');
  grid.innerHTML=PRICE_PAGES.map((src,i)=>`<button class="stl-price-tile" type="button" data-stl-price-index="${i}"><img src="${src}" loading="${i?'lazy':'eager'}" alt="Прайс STLuxe, страница ${i+1}"><span class="stl-price-caption">${PRICE_NAMES[i]}</span><span class="stl-price-badge">${i+1} / 7</span></button>`).join('');
  grid.querySelectorAll('[data-stl-price-index]').forEach(b=>b.onclick=()=>ensureViewer().openAt(+b.dataset.stlPriceIndex));
  requestAnimationFrame(()=>{tab.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});paintingPrice=false});
}

function ensurePriceTab(){
  const gallery=document.querySelector('#tn13Gallery');if(!gallery||!gallery.classList.contains('open'))return;
  const tabs=gallery.querySelector('.tn22-gallery-tabs');if(!tabs)return;
  let tab=tabs.querySelector('[data-stl-price-tab]');
  if(!tab){tab=document.createElement('button');tab.type='button';tab.className='tn22-gallery-tab';tab.dataset.stlPriceTab='1';tab.textContent='Прайс';tabs.appendChild(tab)}
  tab.onclick=()=>{priceMode=true;renderPriceGallery()};
  tabs.querySelectorAll('[data-gcat]').forEach(b=>{if(!b.dataset.stlPriceBound){b.dataset.stlPriceBound='1';b.addEventListener('click',()=>{priceMode=false;gallery.classList.remove('stl-price-mode')})}});
  if(priceMode)renderPriceGallery();
}

function openPriceGallery(){
  priceMode=true;
  const gallery=document.querySelector('#tn13Gallery');
  const openGalleryButton=document.querySelector('.tn22-port-all');
  if(openGalleryButton)openGalleryButton.click();
  else if(gallery){gallery.classList.add('open');document.body.style.overflow='hidden'}
  requestAnimationFrame(()=>requestAnimationFrame(renderPriceGallery));
}

function printPrice(){
  const w=window.open('','_blank');if(!w)return;
  const pages=PRICE_PAGES.map(src=>`<img src="${src}" alt="Прайс STLuxe">`).join('');
  w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>Прайс STLuxe</title><style>html,body{margin:0;background:#fff}img{display:block;width:100%;height:auto;page-break-after:always}img:last-child{page-break-after:auto}@page{margin:0}</style></head><body>${pages}<script>window.onload=function(){setTimeout(function(){window.print()},250)}<\/script></body></html>`);
  w.document.close();
}

function initPriceFeature(){
  const services=document.querySelector('#tn13Services .tn31-services');
  if(!services){setTimeout(initPriceFeature,80);return}
  if(!services.querySelector('.stl-price-card')){
    const card=document.createElement('section');card.className='stl-price-card';
    card.innerHTML=`<h3 class="stl-price-title">Полный прайс</h3><p class="stl-price-copy">Можно открыть и сохранить полный прайс</p><div class="stl-price-actions"><button class="stl-price-open" type="button">${EYE}<span>Смотреть прайс</span><span class="stl-price-arrow">→</span></button><button class="stl-price-pdf" type="button">${DOWNLOAD}<span>PDF</span></button></div>`;
    const more=services.querySelector('.tn31-service-more');if(more)more.insertAdjacentElement('afterend',card);else services.appendChild(card);
    card.querySelector('.stl-price-open').onclick=openPriceGallery;card.querySelector('.stl-price-pdf').onclick=printPrice;
  }
  const gallery=document.querySelector('#tn13Gallery');
  if(gallery&&!gallery.dataset.stlPriceObserved){gallery.dataset.stlPriceObserved='1';new MutationObserver(()=>{if(!paintingPrice)requestAnimationFrame(ensurePriceTab)}).observe(gallery,{childList:true,subtree:true})}
}

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initPriceFeature,{once:true});else initPriceFeature();
})();