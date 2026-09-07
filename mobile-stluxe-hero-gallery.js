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

let attempts=0;
function boot(){
  const hero=document.querySelector('#tn13Top');
  const oldMedia=hero?.querySelector('.tn22-media');
  const nativeViewer=document.querySelector('.tn22-viewer');
  if(!hero||!oldMedia||!nativeViewer){
    if(attempts++<160)setTimeout(boot,60);
    return;
  }
  if(hero.dataset.stlHeroGallery==='1')return;
  hero.dataset.stlHeroGallery='1';

  const media=oldMedia.cloneNode(false);
  media.className=oldMedia.className;
  media.type='button';
  media.setAttribute('aria-label','Фотографии салона STLuxe');
  media.innerHTML=SALON_IMAGES.map((item,i)=>`<span class="tn22-slide${i===0?' active':''}"><img src="${item.src}" alt="${item.alt}" draggable="false"></span>`).join('')+`<span class="tn22-dots">${SALON_IMAGES.map((_,i)=>`<i class="${i===0?'active':''}"></i>`).join('')}</span>`;
  oldMedia.replaceWith(media);

  const slides=[...media.querySelectorAll('.tn22-slide')];
  const dots=[...media.querySelectorAll('.tn22-dots i')];
  let heroIndex=0;
  function setHero(index){
    heroIndex=(index+slides.length)%slides.length;
    slides.forEach((el,i)=>el.classList.toggle('active',i===heroIndex));
    dots.forEach((el,i)=>el.classList.toggle('active',i===heroIndex));
  }

  const viewer=nativeViewer.cloneNode(true);
  viewer.classList.remove('open');
  viewer.classList.add('stl-hero-viewer');
  viewer.dataset.stlHeroViewer='1';
  const frame=viewer.querySelector('.tn22-viewer-frame');
  const canvas=viewer.querySelector('.tn42-viewer-canvas');
  const img=viewer.querySelector('.tn22-viewer-img');
  const count=viewer.querySelector('.tn22-viewer-count');
  const prev=viewer.querySelector('.tn22-prev');
  const next=viewer.querySelector('.tn22-next');
  const close=viewer.querySelector('.tn22-view-close');
  const label=viewer.querySelector('.tn23-viewer-label');
  if(label)label.textContent='Фото STLuxe';
  nativeViewer.parentNode.appendChild(viewer);

  let viewerIndex=0;
  let scale=1,x=0,y=0;
  let sx=0,sy=0,panStartX=0,panStartY=0;
  let pinchStart=0,pinchBaseScale=1,hadPinch=false;
  const pinchDistance=e=>Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
  function clampPan(){
    if(scale<=1){x=0;y=0;return;}
    const maxX=(scale-1)*canvas.clientWidth*.5;
    const maxY=(scale-1)*canvas.clientHeight*.5;
    x=Math.max(-maxX,Math.min(maxX,x));
    y=Math.max(-maxY,Math.min(maxY,y));
  }
  function applyTransform(){clampPan();img.style.transform=`translate3d(${x}px,${y}px,0) scale(${scale})`;}
  function resetTransform(){scale=1;x=0;y=0;pinchStart=0;pinchBaseScale=1;applyTransform();}
  function paintViewer(){
    const item=SALON_IMAGES[viewerIndex];
    img.src=item.src;
    img.alt=item.alt;
    if(count)count.textContent=`${String(viewerIndex+1).padStart(2,'0')} из ${String(SALON_IMAGES.length).padStart(2,'0')}`;
    if(prev)prev.hidden=SALON_IMAGES.length<2;
    if(next)next.hidden=SALON_IMAGES.length<2;
    resetTransform();
  }
  function openViewer(index){
    viewerIndex=(index+SALON_IMAGES.length)%SALON_IMAGES.length;
    paintViewer();
    viewer.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeViewer(){
    viewer.classList.remove('open');
    resetTransform();
    document.body.style.overflow='';
  }
  if(prev)prev.onclick=()=>{viewerIndex=(viewerIndex-1+SALON_IMAGES.length)%SALON_IMAGES.length;paintViewer();};
  if(next)next.onclick=()=>{viewerIndex=(viewerIndex+1)%SALON_IMAGES.length;paintViewer();};
  if(close)close.onclick=closeViewer;
  viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer();});

  canvas.addEventListener('touchstart',e=>{
    if(e.touches.length===2){
      e.preventDefault();hadPinch=true;pinchStart=pinchDistance(e);pinchBaseScale=scale;
    }else if(e.touches.length===1){
      sx=e.touches[0].clientX;sy=e.touches[0].clientY;panStartX=x;panStartY=y;
    }
  },{passive:false});
  canvas.addEventListener('touchmove',e=>{
    if(e.touches.length===2&&pinchStart){
      e.preventDefault();scale=Math.max(1,Math.min(4,pinchBaseScale*(pinchDistance(e)/pinchStart)));if(scale<=1.01){scale=1;x=0;y=0;}applyTransform();
    }else if(e.touches.length===1&&scale>1){
      e.preventDefault();x=panStartX+(e.touches[0].clientX-sx);y=panStartY+(e.touches[0].clientY-sy);applyTransform();
    }
  },{passive:false});
  canvas.addEventListener('touchend',e=>{
    if(e.touches.length<2)pinchStart=0;
    if(e.touches.length===0){
      if(!hadPinch&&scale===1&&e.changedTouches.length){
        const dx=e.changedTouches[0].clientX-sx;
        const dy=e.changedTouches[0].clientY-sy;
        if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.15)(dx<0?next:prev)?.click();
      }
      hadPinch=false;
      if(scale<=1.01)resetTransform();
    }
  },{passive:false});

  let startX=0,startY=0,pointerId=null,moved=false;
  media.querySelectorAll('img').forEach(el=>el.draggable=false);
  media.addEventListener('pointerdown',e=>{
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
    if(!moved)openViewer(heroIndex);
  });
  media.addEventListener('pointercancel',()=>{pointerId=null;moved=false;});
}
boot();
})();