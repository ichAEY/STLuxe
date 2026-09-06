(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;

const base=document.createElement('script');
base.src='mobile-stluxe-theme-base.js?v=20260907-photo-price-zoom';
base.onload=()=>{
  const tweakStyle=document.createElement('style');
  tweakStyle.id='stluxe-photo-price-tweak';
  tweakStyle.textContent=`
  @media(max-width:767px){
    /* Compact photo-price card */
    #tn13Services .stl-price-card{
      margin-top:24px!important;
      padding:19px 20px 17px!important;
      border-radius:14px!important;
    }
    #tn13Services .stl-price-card:after{
      top:8px!important;
      width:172px!important;
      height:128px!important;
      opacity:.42!important;
    }
    #tn13Services .stl-price-title{
      font-size:34px!important;
      line-height:.95!important;
    }
    #tn13Services .stl-price-copy{
      margin-top:7px!important;
      font-size:11px!important;
      line-height:1.4!important;
    }
    #tn13Services .stl-price-actions{
      display:block!important;
      margin-top:15px!important;
    }
    #tn13Services .stl-price-open{
      position:relative!important;
      overflow:hidden!important;
      width:100%!important;
      height:54px!important;
      min-height:54px!important;
      padding:0 18px!important;
      border-radius:12px!important;
      display:flex!important;
      align-items:center!important;
      justify-content:center!important;
      gap:10px!important;
      white-space:nowrap!important;
      font:500 13.5px/1 'Manrope',Arial,sans-serif!important;
    }
    #tn13Services .stl-price-open svg{
      width:19px!important;
      height:19px!important;
      flex:0 0 auto!important;
    }
    #tn13Services .stl-price-open span{
      white-space:nowrap!important;
    }
    #tn13Services .stl-price-open:after{
      content:'';
      position:absolute;
      top:-35%;
      bottom:-35%;
      left:-38%;
      width:30%;
      pointer-events:none;
      background:linear-gradient(90deg,transparent,rgba(255,255,255,.30),transparent);
      transform:skewX(-22deg);
      animation:stlPhotoPriceShine 4.2s ease-in-out infinite;
    }
    @keyframes stlPhotoPriceShine{
      0%,70%{left:-38%}
      100%{left:132%}
    }
    @media(prefers-reduced-motion:reduce){
      #tn13Services .stl-price-open:after{animation:none!important}
    }

    /* Price photos open like the rest of the gallery */
    .stl-price-viewer{
      padding:22px!important;
      background:rgba(27,20,20,.90)!important;
      backdrop-filter:blur(9px)!important;
      touch-action:none!important;
      overscroll-behavior:contain!important;
    }
    .stl-price-viewer img{
      width:min(100%,520px)!important;
      max-width:100%!important;
      height:min(72dvh,640px)!important;
      max-height:72dvh!important;
      object-fit:contain!important;
      border-radius:14px!important;
      background:#151312!important;
      box-shadow:0 18px 54px rgba(0,0,0,.28)!important;
      transform:translate3d(0,0,0) scale(1);
      transform-origin:center center!important;
      will-change:transform!important;
      -webkit-user-drag:none!important;
      user-select:none!important;
      touch-action:none!important;
    }
    .stl-price-viewer .stl-pv-close{
      top:max(14px,env(safe-area-inset-top))!important;
      right:18px!important;
      width:42px!important;
      height:42px!important;
      border:1px solid rgba(255,255,255,.22)!important;
      border-radius:50%!important;
      background:rgba(255,255,255,.08)!important;
      color:#fff!important;
    }
    .stl-price-viewer .stl-pv-nav{
      width:30px!important;
      height:52px!important;
      border:0!important;
      border-radius:0!important;
      background:transparent!important;
      color:#fff!important;
      font-size:35px!important;
    }
    .stl-price-viewer .stl-pv-prev{left:8px!important}
    .stl-price-viewer .stl-pv-next{right:8px!important}
    .stl-price-viewer .stl-pv-count{
      bottom:max(14px,env(safe-area-inset-bottom))!important;
      padding:0!important;
      border-radius:0!important;
      background:transparent!important;
      color:#fff!important;
      font:500 10px/1 'Manrope',Arial,sans-serif!important;
    }
    .stl-price-zoom-hint{
      position:absolute;
      z-index:4;
      top:max(17px,env(safe-area-inset-top));
      left:18px;
      color:rgba(255,255,255,.65);
      font:400 10px/1 'Manrope',Arial,sans-serif;
      pointer-events:none;
    }
  }
  `;
  document.head.appendChild(tweakStyle);

  let attempts=0;
  const applyTweak=()=>{
    const card=document.querySelector('#tn13Services .stl-price-card');
    if(!card){
      if(attempts++<120)setTimeout(applyTweak,80);
      return;
    }
    const title=card.querySelector('.stl-price-title');
    if(title)title.textContent='Фото-прайс';

    const copy=card.querySelector('.stl-price-copy');
    if(copy)copy.textContent='Можно открыть и сохранить полный прайс';

    const arrow=card.querySelector('.stl-price-arrow');
    if(arrow)arrow.remove();

    const pdf=card.querySelector('.stl-price-pdf');
    if(pdf)pdf.remove();
  };
  applyTweak();

  function enhancePriceViewer(viewer){
    if(!viewer||viewer.dataset.zoomReady)return;
    viewer.dataset.zoomReady='1';
    const img=viewer.querySelector('img');
    const prev=viewer.querySelector('.stl-pv-prev');
    const next=viewer.querySelector('.stl-pv-next');
    if(!img)return;

    const hint=document.createElement('div');
    hint.className='stl-price-zoom-hint';
    hint.textContent='Увеличьте двумя пальцами';
    viewer.appendChild(hint);

    let scale=1,x=0,y=0;
    let pinchStart=0,pinchBase=1;
    let startX=0,startY=0,panX=0,panY=0;
    let hadPinch=false;
    let lastTap=0;

    const dist=e=>{
      const a=e.touches[0],b=e.touches[1];
      return Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
    };
    const clamp=()=>{
      if(scale<=1){x=0;y=0;return}
      const maxX=(scale-1)*Math.min(img.clientWidth,window.innerWidth)*.5;
      const maxY=(scale-1)*Math.min(img.clientHeight,window.innerHeight*.72)*.5;
      x=Math.max(-maxX,Math.min(maxX,x));
      y=Math.max(-maxY,Math.min(maxY,y));
    };
    const paint=()=>{
      clamp();
      img.style.transform=`translate3d(${x}px,${y}px,0) scale(${scale})`;
      if(prev)prev.style.opacity=scale>1?'0':'1';
      if(next)next.style.opacity=scale>1?'0':'1';
      if(prev)prev.style.pointerEvents=scale>1?'none':'auto';
      if(next)next.style.pointerEvents=scale>1?'none':'auto';
      hint.style.opacity=scale>1?'0':'1';
    };
    const reset=()=>{scale=1;x=0;y=0;pinchStart=0;pinchBase=1;paint()};

    new MutationObserver(reset).observe(img,{attributes:true,attributeFilter:['src']});
    new MutationObserver(()=>{if(viewer.classList.contains('open'))reset()}).observe(viewer,{attributes:true,attributeFilter:['class']});

    img.addEventListener('touchstart',e=>{
      if(e.touches.length===2){
        e.preventDefault();
        hadPinch=true;
        pinchStart=dist(e);
        pinchBase=scale;
      }else if(e.touches.length===1){
        startX=e.touches[0].clientX;
        startY=e.touches[0].clientY;
        panX=x;panY=y;
      }
    },{passive:false});

    img.addEventListener('touchmove',e=>{
      if(e.touches.length===2&&pinchStart){
        e.preventDefault();
        scale=Math.max(1,Math.min(4,pinchBase*(dist(e)/pinchStart)));
        if(scale<=1.01){scale=1;x=0;y=0}
        paint();
      }else if(e.touches.length===1&&scale>1){
        e.preventDefault();
        x=panX+(e.touches[0].clientX-startX);
        y=panY+(e.touches[0].clientY-startY);
        paint();
      }
    },{passive:false});

    img.addEventListener('touchend',e=>{
      if(e.touches.length<2)pinchStart=0;
      if(e.touches.length===0){
        const changed=e.changedTouches&&e.changedTouches[0];
        if(!hadPinch&&scale===1&&changed){
          const dx=changed.clientX-startX,dy=changed.clientY-startY;
          if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.15){
            (dx<0?next:prev)?.click();
          }
        }
        hadPinch=false;
        if(scale<=1.01)reset();
      }
    },{passive:false});

    img.addEventListener('dblclick',e=>{
      e.preventDefault();
      if(scale>1)reset();
      else{scale=2.2;x=0;y=0;paint()}
    });

    img.addEventListener('click',()=>{
      const now=Date.now();
      if(now-lastTap<320){
        if(scale>1)reset();
        else{scale=2.2;x=0;y=0;paint()}
      }
      lastTap=now;
    });
  }

  const watchViewer=new MutationObserver(()=>{
    const viewer=document.querySelector('.stl-price-viewer');
    if(viewer)enhancePriceViewer(viewer);
  });
  watchViewer.observe(document.body,{childList:true,subtree:true});
  const existingViewer=document.querySelector('.stl-price-viewer');
  if(existingViewer)enhancePriceViewer(existingViewer);
};
base.onerror=()=>console.error('STLuxe theme base failed to load');
document.head.appendChild(base);
})();