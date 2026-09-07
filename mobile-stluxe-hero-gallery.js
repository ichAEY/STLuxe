(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;

function applyContentFixes(){
  const portfolioButton=document.querySelector('#tn13Portfolio .tn22-port-all');
  if(portfolioButton&&portfolioButton.textContent.trim()!=='Открыть галерею →'){
    portfolioButton.innerHTML='Открыть галерею <span>→</span>';
  }

  document.querySelectorAll('#tn13Services .tn31-service-row').forEach(row=>{
    const name=(row.querySelector('.tn31-service-name')?.textContent||'').trim();
    const detail=row.querySelector('.tn31-service-detail');
    if((name==='Стрижка простая / модельная'||name==='Стрижка мужская')&&detail&&(detail.textContent||'').trim()==='Мужская'){
      detail.remove();
    }
  });
}

const contentObserver=new MutationObserver(applyContentFixes);
contentObserver.observe(document.documentElement,{childList:true,subtree:true});
applyContentFixes();

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

const navStyle=document.createElement('style');
navStyle.id='stluxe-hero-gallery-nav';
navStyle.textContent=`
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
}
`;
if(!document.getElementById(navStyle.id))document.head.appendChild(navStyle);

let attempts=0;
function boot(){
  const hero=document.querySelector('#tn13Top');
  const oldMedia=hero?.querySelector('.tn22-media');
  if(!hero||!oldMedia){
    if(attempts++<160)setTimeout(boot,60);
    return;
  }
  if(hero.dataset.stlHeroGallery==='3')return;
  hero.dataset.stlHeroGallery='3';

  function openSalonGallery(){
    try{
      const pointerId=9876;
      oldMedia.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true,pointerId,clientX:100,clientY:100,pointerType:'touch',isPrimary:true}));
      oldMedia.dispatchEvent(new PointerEvent('pointerup',{bubbles:true,pointerId,clientX:100,clientY:100,pointerType:'touch',isPrimary:true}));
    }catch(_){
      const gallery=document.querySelector('#tn13Gallery');
      const salonTab=[...document.querySelectorAll('#tn13Gallery [data-gcat]')].find(el=>(el.dataset.gcat||'')==='Салон');
      if(salonTab)salonTab.click();
      if(gallery){gallery.classList.add('open');document.body.style.overflow='hidden';}
    }
  }

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
    if(!moved)openSalonGallery();
  });
  media.addEventListener('pointercancel',()=>{pointerId=null;moved=false;});
  media.addEventListener('keydown',e=>{if(e.target===media&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openSalonGallery();}});
}
boot();
})();