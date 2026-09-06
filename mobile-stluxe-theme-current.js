(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;

const base=document.createElement('script');
base.src='mobile-stluxe-theme-base.js?v=20260907-photo-price';
base.onload=()=>{
  const tweakStyle=document.createElement('style');
  tweakStyle.id='stluxe-photo-price-tweak';
  tweakStyle.textContent=`
  @media(max-width:767px){
    #tn13Services .stl-price-actions{
      display:block!important;
      margin-top:20px!important;
    }
    #tn13Services .stl-price-open{
      position:relative!important;
      overflow:hidden!important;
      width:100%!important;
      height:62px!important;
      padding:0 20px!important;
      border-radius:13px!important;
      display:flex!important;
      align-items:center!important;
      justify-content:center!important;
      gap:12px!important;
      white-space:nowrap!important;
      font:500 14px/1 'Manrope',Arial,sans-serif!important;
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
};
base.onerror=()=>console.error('STLuxe theme base failed to load');
document.head.appendChild(base);
})();