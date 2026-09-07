(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;

const base=document.createElement('script');
base.src='mobile-stluxe-theme-base.js?v=20260907-photo-price-native-viewer';
base.onload=()=>{
  const tweakStyle=document.createElement('style');
  tweakStyle.id='stluxe-photo-price-tweak';
  tweakStyle.textContent=`
  @media(max-width:767px){
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
    #tn13Services .stl-price-open span{white-space:nowrap!important}
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
    @media(prefers-reduced-motion:reduce){#tn13Services .stl-price-open:after{animation:none!important}}

    #tn13Gallery .stl-gallery-tabs-sticky{
      position:-webkit-sticky!important;
      position:sticky!important;
      top:0!important;
      z-index:45!important;
      margin:26px -18px 0!important;
      padding:8px 18px 8px!important;
      background:rgba(36,33,39,.98)!important;
      -webkit-backdrop-filter:blur(14px) saturate(135%)!important;
      backdrop-filter:blur(14px) saturate(135%)!important;
      box-shadow:0 9px 24px rgba(0,0,0,.14)!important;
    }
    #tn13Gallery .stl-gallery-tabs-sticky .tn22-gallery-tabs{
      position:relative!important;
      top:auto!important;
      z-index:auto!important;
      margin-top:0!important;
      background:rgba(255,255,255,.025)!important;
      -webkit-backdrop-filter:none!important;
      backdrop-filter:none!important;
      box-shadow:none!important;
    }
    #tn13Gallery .stl-gallery-tabs-sticky + .tn22-gallery-grid{
      margin-top:0!important;
    }
    #tn13Visit .tn22-footer{
      height:auto!important;
      min-height:92px!important;
      padding:15px 24px 16px!important;
      display:flex!important;
      flex-direction:column!important;
      align-items:center!important;
      justify-content:center!important;
      gap:5px!important;
      text-align:center!important;
    }
    #tn13Visit .stl-tanem-mark{
      width:31px!important;
      height:31px!important;
      border:1px solid rgba(255,255,255,.34)!important;
      border-radius:9px!important;
      display:grid!important;
      place-items:center!important;
      color:#fff!important;
      font:600 20px/1 'Cormorant Garamond',Georgia,serif!important;
    }
    #tn13Visit .stl-tanem-credit{
      max-width:none!important;
      margin:0!important;
      text-align:center!important;
      color:rgba(255,255,255,.72)!important;
      font:500 10px/1.2 'Manrope',Arial,sans-serif!important;
      letter-spacing:.04em!important;
    }
    #tn13Visit .stl-tanem-credit strong{
      color:rgba(255,255,255,.92)!important;
      font-size:11.5px!important;
      font-weight:600!important;
    }
  }
  `;
  document.head.appendChild(tweakStyle);

  let attempts=0;
  const applyTweak=()=>{
    const card=document.querySelector('#tn13Services .stl-price-card');
    if(!card){if(attempts++<120)setTimeout(applyTweak,80);return}
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

  function applyTanemFooter(){
    const footer=document.querySelector('#tn13Visit .tn22-footer');
    if(!footer||footer.dataset.stlTanemCredit==='1')return;
    footer.dataset.stlTanemCredit='1';
    footer.innerHTML='<span class="stl-tanem-mark">T</span><span class="stl-tanem-credit">Создано в <strong>TANEM.ru</strong></span>';
  }

  function ensureStickyGalleryTabs(){
    const gallery=document.querySelector('#tn13Gallery');
    if(!gallery)return;
    const tabs=gallery.querySelector('.tn22-gallery-tabs');
    if(!tabs||tabs.parentElement?.classList.contains('stl-gallery-tabs-sticky'))return;
    const wrap=document.createElement('div');
    wrap.className='stl-gallery-tabs-sticky';
    tabs.parentNode.insertBefore(wrap,tabs);
    wrap.appendChild(tabs);
  }

  const themeMeta=document.querySelector('meta[name="theme-color"]');
  const LIGHT_THEME='#fafafa';
  const DARK_THEME='#242127';

  function syncGalleryChrome(){
    const gallery=document.querySelector('#tn13Gallery');
    const open=!!gallery?.classList.contains('open');
    if(themeMeta)themeMeta.setAttribute('content',open?DARK_THEME:LIGHT_THEME);
    document.documentElement.style.backgroundColor=open?DARK_THEME:LIGHT_THEME;
  }

  function bindGalleryChrome(){
    const gallery=document.querySelector('#tn13Gallery');
    if(!gallery)return;
    if(!gallery.dataset.stlGalleryChromeBound){
      gallery.dataset.stlGalleryChromeBound='1';
      new MutationObserver(syncGalleryChrome).observe(gallery,{attributes:true,attributeFilter:['class']});
    }
    syncGalleryChrome();
  }

  const PRICE_PAGES=Array.from({length:7},(_,i)=>({
    src:`stluxe_price_page_${i+1}.webp`,
    alt:`Прайс STLuxe, страница ${i+1}`
  }));

  let priceViewerActive=false;
  let priceIndex=0;

  function nativeParts(){
    const viewer=document.querySelector('.tn22-viewer');
    if(!viewer)return null;
    return {
      viewer,
      img:viewer.querySelector('.tn22-viewer-img'),
      count:viewer.querySelector('.tn22-viewer-count'),
      prev:viewer.querySelector('.tn22-prev'),
      next:viewer.querySelector('.tn22-next'),
      close:viewer.querySelector('.tn22-view-close')
    };
  }

  function paintPrice(index){
    const p=nativeParts();
    if(!p||!p.img)return;
    priceIndex=(index+PRICE_PAGES.length)%PRICE_PAGES.length;
    const item=PRICE_PAGES[priceIndex];
    p.img.src=item.src;
    p.img.alt=item.alt;
    p.img.style.transform='translate3d(0,0,0) scale(1)';
    if(p.count)p.count.textContent=`${String(priceIndex+1).padStart(2,'0')} из ${String(PRICE_PAGES.length).padStart(2,'0')}`;
    if(p.prev)p.prev.hidden=false;
    if(p.next)p.next.hidden=false;
  }

  function openPriceInNativeViewer(index){
    const p=nativeParts();
    if(!p)return;
    const oldCustom=document.querySelector('.stl-price-viewer');
    if(oldCustom)oldCustom.remove();
    priceViewerActive=true;
    paintPrice(index);
    p.viewer.classList.add('open');
    document.body.style.overflow='hidden';
  }

  function bindNativeControls(){
    const p=nativeParts();
    if(!p||p.viewer.dataset.stlPriceNativeBound)return;
    p.viewer.dataset.stlPriceNativeBound='1';

    if(p.prev)p.prev.addEventListener('click',e=>{
      if(!priceViewerActive)return;
      e.preventDefault();
      e.stopImmediatePropagation();
      paintPrice(priceIndex-1);
    },true);

    if(p.next)p.next.addEventListener('click',e=>{
      if(!priceViewerActive)return;
      e.preventDefault();
      e.stopImmediatePropagation();
      paintPrice(priceIndex+1);
    },true);

    let swipeStartX=null;
    let swipeStartY=null;
    p.viewer.addEventListener('touchstart',e=>{
      if(!priceViewerActive||e.touches.length!==1){swipeStartX=null;swipeStartY=null;return;}
      swipeStartX=e.touches[0].clientX;
      swipeStartY=e.touches[0].clientY;
    },{capture:true,passive:true});

    p.viewer.addEventListener('touchend',e=>{
      if(!priceViewerActive||swipeStartX===null||swipeStartY===null||!e.changedTouches.length)return;
      const dx=e.changedTouches[0].clientX-swipeStartX;
      const dy=e.changedTouches[0].clientY-swipeStartY;
      swipeStartX=null;
      swipeStartY=null;
      if(Math.abs(dx)<55||Math.abs(dx)<=Math.abs(dy)*1.15)return;
      e.preventDefault();
      e.stopImmediatePropagation();
      if(dx>0)paintPrice(priceIndex-1);
      else paintPrice(priceIndex+1);
    },{capture:true,passive:false});

    p.viewer.addEventListener('touchcancel',()=>{swipeStartX=null;swipeStartY=null;},{capture:true,passive:true});

    if(p.close)p.close.addEventListener('click',()=>{priceViewerActive=false},true);
    p.viewer.addEventListener('click',e=>{if(e.target===p.viewer)priceViewerActive=false},true);

    new MutationObserver(()=>{
      if(!p.viewer.classList.contains('open'))priceViewerActive=false;
    }).observe(p.viewer,{attributes:true,attributeFilter:['class']});
  }

  function bindPriceTiles(){
    applyTanemFooter();
    ensureStickyGalleryTabs();
    bindGalleryChrome();
    bindNativeControls();
    document.querySelectorAll('[data-stl-price-index]').forEach(tile=>{
      if(tile.dataset.stlNativeViewer==='1')return;
      tile.dataset.stlNativeViewer='1';
      tile.onclick=e=>{
        e.preventDefault();
        e.stopPropagation();
        openPriceInNativeViewer(Number(tile.dataset.stlPriceIndex)||0);
      };
    });
  }

  document.addEventListener('click',e=>{
    if(e.target.closest('[data-gi],[data-pi],.tn22-photo'))priceViewerActive=false;
  },true);

  const observer=new MutationObserver(bindPriceTiles);
  observer.observe(document.body,{childList:true,subtree:true});
  bindPriceTiles();

  const pricing=document.createElement('script');
  pricing.src='mobile-stluxe-pricing-grouped.js?v=20260907-grouped-price-v4';
  pricing.onload=()=>{
    const unified=document.createElement('script');
    unified.src='mobile-stluxe-pricing-unified.js?v=20260907-unified-price-v5';
    document.head.appendChild(unified);
  };
  document.head.appendChild(pricing);

  const heroGallery=document.createElement('script');
  heroGallery.src='mobile-stluxe-hero-gallery.js?v=20260907-hero-controls-v3';
  document.head.appendChild(heroGallery);
};
base.onerror=()=>console.error('STLuxe theme base failed to load');
document.head.appendChild(base);
})();