(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;

const SALON_IMAGES=[
  {src:'stluxe_reception.webp',alt:'Ресепшен STLuxe'},
  {src:'stluxe_interior.webp',alt:'Интерьер STLuxe'},
  {src:'salon.webp',alt:'Интерьер салона STLuxe'},
  {src:'salon2.webp',alt:'Интерьер салона STLuxe'},
  {src:'salon3.webp',alt:'Интерьер салона STLuxe'},
  {src:'salon4.webp',alt:'Интерьер салона STLuxe'},
  {src:'salon6.webp',alt:'Интерьер салона STLuxe'},
  {src:'salon7.webp',alt:'Интерьер салона STLuxe'},
  {src:'salon8.webp',alt:'Интерьер салона STLuxe'},
  {src:'salon9.webp',alt:'Интерьер салона STLuxe'},
  {src:'salon10.webp',alt:'Интерьер салона STLuxe'},
  {src:'salon11.webp',alt:'Интерьер салона STLuxe'},
  {src:'salon12.webp',alt:'Интерьер салона STLuxe'},
  {src:'salon13.webp',alt:'Интерьер салона STLuxe'},
  {src:'assets/images/salon-reception.webp',alt:'Интерьер STLuxe'}
];

const REVIEW_DATES={
  'мария н.':'16 марта 2025',
  'ольга к.':'5 февраля 2026',
  'оксана семина':'13 июня 2025',
  'мама рита':'6 мая 2025',
  'галина б.':'20 октября 2024',
  'юлия логинова':'12 сентября 2024',
  'олеся полянская':'28 февраля 2025',
  'наталья яровая':'17 мая 2024'
};

const polishStyle=document.createElement('style');
polishStyle.id='stluxe-gallery-final-polish';
polishStyle.textContent=`
@media(max-width:767px){
  .tn22-media .stl-hero-nav{
    position:absolute;
    z-index:7;
    top:calc(50% - 36px);
    transform:translateY(-50%);
    width:38px;
    height:52px;
    padding:0;
    border:0;
    background:transparent;
    color:#fff!important;
    display:grid;
    place-items:center;
    font:300 40px/1 Arial,sans-serif!important;
    text-shadow:0 2px 10px rgba(0,0,0,.48);
    opacity:.98;
  }
  .tn22-media .stl-hero-prev{left:7px}
  .tn22-media .stl-hero-next{right:7px}
  .tn22-media .stl-hero-nav:active{opacity:1;transform:translateY(-50%) scale(.94)}

  .tn23-section-nav{
    overflow-x:auto!important;
    overflow-y:hidden!important;
    touch-action:pan-x!important;
    overscroll-behavior-x:contain!important;
    overscroll-behavior-y:none!important;
    -webkit-overflow-scrolling:touch!important;
  }
  .tn23-section-nav button{touch-action:manipulation!important}

  #tn13Gallery{
    overscroll-behavior:contain!important;
    -webkit-overflow-scrolling:touch!important;
    touch-action:pan-y!important;
  }
  #tn13Gallery .tn22-gallery-tabs{
    overflow-y:hidden!important;
    touch-action:pan-x!important;
    overscroll-behavior-x:contain!important;
  }

  .tn22-viewer-frame .stl-viewer-gallery-btn{
    position:absolute;
    z-index:8;
    left:50%;
    bottom:-88px;
    transform:translateX(-50%);
    width:min(100%,300px);
    height:46px;
    border:1px solid rgba(255,255,255,.22);
    border-radius:13px;
    background:rgba(255,255,255,.10);
    -webkit-backdrop-filter:blur(12px);
    backdrop-filter:blur(12px);
    color:#fff!important;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:9px;
    font:600 12px/1 'Manrope',Arial,sans-serif!important;
    letter-spacing:.01em;
  }
  .tn22-viewer-frame .stl-viewer-gallery-btn:active{background:rgba(255,255,255,.16)}
  .tn22-viewer-frame .stl-viewer-gallery-btn[hidden]{display:none!important}

  .tn30-review-card .stl-review-details{
    display:flex;
    align-items:center;
    gap:7px;
    margin-top:4px;
    min-height:13px;
    font:500 9px/1.1 'Manrope',Arial,sans-serif!important;
    color:#8b858d!important;
    white-space:nowrap;
  }
  .tn30-review-card .stl-review-stars{
    color:#d9aa42!important;
    font-size:10px!important;
    letter-spacing:.07em;
  }
  .tn30-review-card .stl-review-dot{opacity:.45}
}
`;
if(!document.getElementById(polishStyle.id))document.head.appendChild(polishStyle);

function applyContentFixes(){
  const portfolioButton=document.querySelector('#tn13Portfolio .tn22-port-all');
  if(portfolioButton&&portfolioButton.textContent.trim()!=='Открыть галерею →'){
    portfolioButton.innerHTML='Открыть галерею <span>→</span>';
  }

  const navPop=document.querySelector('#tn13Top .tn22-navpop');
  if(navPop){
    const teamLink=navPop.querySelector('a[href="#tn13Team"]');
    let aboutLink=navPop.querySelector('a[href="#tn38About"]');
    if(teamLink){
      if(!aboutLink){
        aboutLink=document.createElement('a');
        aboutLink.href='#tn38About';
        aboutLink.textContent='О нас';
        aboutLink.addEventListener('click',()=>navPop.classList.remove('open'));
      }else{
        aboutLink.textContent='О нас';
      }
      if(teamLink.nextElementSibling!==aboutLink)teamLink.insertAdjacentElement('afterend',aboutLink);
    }
  }

  document.querySelectorAll('#tn13Services .tn31-service-row').forEach(row=>{
    const name=(row.querySelector('.tn31-service-name')?.textContent||'').trim();
    const detail=row.querySelector('.tn31-service-detail');
    if((name==='Стрижка простая / модельная'||name==='Стрижка мужская')&&detail&&(detail.textContent||'').trim()==='Мужская')detail.remove();
  });

  document.querySelectorAll('#tn13Reviews .tn30-review-card').forEach(card=>{
    const name=(card.querySelector('.tn30-review-name')?.textContent||'').trim();
    const meta=card.querySelector('.tn30-review-meta');
    if(!meta||meta.parentElement?.querySelector('.stl-review-details'))return;
    const date=REVIEW_DATES[name.toLowerCase()]||'';
    const details=document.createElement('span');
    details.className='stl-review-details';
    details.innerHTML=`<span class="stl-review-stars" aria-label="5 из 5">★★★★★</span>${date?`<span class="stl-review-dot">•</span><span>${date}</span>`:'<span class="stl-review-dot">•</span><span>Яндекс Карты</span>'}`;
    meta.insertAdjacentElement('afterend',details);
  });

  bindViewerGalleryButton();
  stabilizeGallery();
}

function categoryFromSrc(src){
  const value=String(src||'').toLowerCase();
  if(value.includes('salon')||value.includes('reception')||value.includes('interior'))return 'Салон';
  if(value.includes('hair'))return 'Волосы';
  if(value.includes('lash'))return 'Ресницы';
  return 'Ногти';
}

function closeStandaloneViewers(){
  document.querySelectorAll('.tn22-viewer.open').forEach(viewer=>{
    const close=viewer.querySelector('.tn22-view-close');
    if(close)close.click();
    else viewer.classList.remove('open');
  });
}

function openGalleryCategory(category){
  closeStandaloneViewers();
  const gallery=document.querySelector('#tn13Gallery');
  const selectCategory=()=>{
    const currentGallery=document.querySelector('#tn13Gallery');
    if(!currentGallery)return;
    const tab=[...currentGallery.querySelectorAll('[data-gcat]')].find(el=>(el.dataset.gcat||'')===category);
    if(tab&&!tab.classList.contains('active'))tab.click();
    currentGallery.scrollTop=0;
    document.body.style.overflow='hidden';
  };

  if(gallery?.classList.contains('open')){
    selectCategory();
    return;
  }

  const galleryButton=document.querySelector('#tn13Portfolio .tn22-port-all');
  if(galleryButton){
    galleryButton.click();
    requestAnimationFrame(()=>requestAnimationFrame(selectCategory));
  }
}

function bindViewerGalleryButton(){
  document.querySelectorAll('.tn22-viewer').forEach(viewer=>{
    if(viewer.classList.contains('stl-hero-viewer'))return;
    const frame=viewer.querySelector('.tn22-viewer-frame');
    const image=viewer.querySelector('.tn22-viewer-img');
    if(!frame||!image)return;

    let button=frame.querySelector('.stl-viewer-gallery-btn');
    if(!button){
      button=document.createElement('button');
      button.type='button';
      button.className='stl-viewer-gallery-btn';
      button.innerHTML='<span>Открыть галерею</span><span aria-hidden="true">→</span>';
      frame.appendChild(button);
      button.addEventListener('click',e=>{
        e.preventDefault();
        e.stopPropagation();
        openGalleryCategory(categoryFromSrc(image.getAttribute('src')||image.src));
      });
    }

    const sync=()=>{
      const src=image.getAttribute('src')||'';
      const price=/stluxe_price_page_/i.test(src);
      const galleryOpen=!!document.querySelector('#tn13Gallery.open');
      button.hidden=price||galleryOpen||!viewer.classList.contains('open');
    };

    if(!viewer.dataset.stlGalleryButtonWatch){
      viewer.dataset.stlGalleryButtonWatch='1';
      new MutationObserver(sync).observe(viewer,{attributes:true,attributeFilter:['class']});
      new MutationObserver(sync).observe(image,{attributes:true,attributeFilter:['src']});
      const gallery=document.querySelector('#tn13Gallery');
      if(gallery)new MutationObserver(sync).observe(gallery,{attributes:true,attributeFilter:['class']});
    }
    sync();
  });
}

function stabilizeGallery(){
  const gallery=document.querySelector('#tn13Gallery');
  if(!gallery||gallery.dataset.stlStableGallery==='1')return;
  gallery.dataset.stlStableGallery='1';
  new MutationObserver(()=>{
    const open=gallery.classList.contains('open');
    if(open){
      document.body.style.overflow='hidden';
    }else if(!document.querySelector('.tn22-viewer.open,.tn22-master-page.open')){
      document.body.style.overflow='';
    }
  }).observe(gallery,{attributes:true,attributeFilter:['class']});
}

const contentObserver=new MutationObserver(applyContentFixes);
contentObserver.observe(document.documentElement,{childList:true,subtree:true});
applyContentFixes();

let attempts=0;
function boot(){
  const hero=document.querySelector('#tn13Top');
  const oldMedia=hero?.querySelector('.tn22-media');
  if(!hero||!oldMedia){
    if(attempts++<160)setTimeout(boot,60);
    return;
  }
  if(hero.dataset.stlHeroGallery==='4')return;
  hero.dataset.stlHeroGallery='4';

  const media=document.createElement('div');
  media.className=oldMedia.className;
  media.setAttribute('role','button');
  media.setAttribute('tabindex','0');
  media.setAttribute('aria-label','Фотографии салона STLuxe');
  media.innerHTML=SALON_IMAGES.map((item,i)=>`<span class="tn22-slide${i===0?' active':''}"><img src="${item.src}" alt="${item.alt}" draggable="false"></span>`).join('')+`<span class="tn22-dots">${SALON_IMAGES.map((_,i)=>`<i class="${i===0?'active':''}"></i>`).join('')}</span><button class="stl-hero-nav stl-hero-prev" type="button" aria-label="Предыдущее фото">‹</button><button class="stl-hero-nav stl-hero-next" type="button" aria-label="Следующее фото">›</button>`;
  oldMedia.replaceWith(media);

  const slides=[...media.querySelectorAll('.tn22-slide')];
  const dots=[...media.querySelectorAll('.tn22-dots i')];
  const heroPrev=media.querySelector('.stl-hero-prev');
  const heroNext=media.querySelector('.stl-hero-next');
  let heroIndex=0;

  function setHero(index){
    heroIndex=(index+slides.length)%slides.length;
    slides.forEach((el,i)=>el.classList.toggle('active',i===heroIndex));
    dots.forEach((el,i)=>el.classList.toggle('active',i===heroIndex));
  }

  heroPrev.addEventListener('pointerdown',e=>e.stopPropagation());
  heroPrev.addEventListener('pointerup',e=>e.stopPropagation());
  heroNext.addEventListener('pointerdown',e=>e.stopPropagation());
  heroNext.addEventListener('pointerup',e=>e.stopPropagation());
  heroPrev.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();setHero(heroIndex-1);});
  heroNext.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();setHero(heroIndex+1);});

  let startX=0,startY=0,pointerId=null,moved=false;
  media.querySelectorAll('img').forEach(el=>el.draggable=false);
  media.addEventListener('pointerdown',e=>{
    if(e.target.closest('.stl-hero-nav'))return;
    startX=e.clientX;startY=e.clientY;pointerId=e.pointerId;moved=false;
    try{media.setPointerCapture(e.pointerId);}catch(_){}
  });
  media.addEventListener('pointermove',e=>{
    if(pointerId===null)return;
    if(Math.abs(e.clientX-startX)>10||Math.abs(e.clientY-startY)>10)moved=true;
  });
  media.addEventListener('pointerup',e=>{
    if(pointerId===null)return;
    const dx=e.clientX-startX;
    const dy=e.clientY-startY;
    try{media.releasePointerCapture(pointerId);}catch(_){}
    pointerId=null;
    if(Math.abs(dx)>42&&Math.abs(dx)>Math.abs(dy)*1.15){
      setHero(heroIndex+(dx<0?1:-1));
      return;
    }
    if(!moved)openGalleryCategory('Салон');
  });
  media.addEventListener('pointercancel',()=>{pointerId=null;moved=false;});
  media.addEventListener('keydown',e=>{
    if(e.target===media&&(e.key==='Enter'||e.key===' ')){
      e.preventDefault();
      openGalleryCategory('Салон');
    }
  });
}
boot();
})();