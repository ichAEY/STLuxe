(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;

const STYLE_ID='stluxe-unified-price-style';
function ensureStyle(){
  if(document.getElementById(STYLE_ID))return;
  const style=document.createElement('style');
  style.id=STYLE_ID;
  style.textContent=`
  @media(max-width:767px){
    #tn13Services .stl-grouped-service{
      display:block!important;
      min-height:0!important;
      padding:21px 0!important;
      border-bottom:1px solid rgba(255,255,255,.14)!important;
    }
    #tn13Services .stl-grouped-service .tn31-service-copy{
      width:100%!important;
      min-width:0!important;
      padding:0!important;
    }
    #tn13Services .stl-grouped-service .tn31-service-name{
      display:block!important;
      overflow:visible!important;
      -webkit-line-clamp:unset!important;
      font:600 22px/1.08 'Cormorant Garamond',Georgia,serif!important;
      color:#f3efed!important;
      letter-spacing:-.01em!important;
    }
    #tn13Services .stl-grouped-service .tn31-service-detail{
      display:block!important;
      margin-top:7px!important;
      font:400 11.5px/1.42 'Manrope',Arial,sans-serif!important;
      color:rgba(243,239,237,.58)!important;
      white-space:normal!important;
      overflow:visible!important;
      text-overflow:clip!important;
    }
    #tn13Services .stl-grouped-service .stl-price-variants{
      display:grid!important;
      gap:8px!important;
      margin-top:13px!important;
    }
    #tn13Services .stl-grouped-service .stl-price-variant{
      display:grid!important;
      grid-template-columns:minmax(0,1fr) auto!important;
      align-items:baseline!important;
      gap:14px!important;
      color:rgba(243,239,237,.62)!important;
      font:400 12.5px/1.35 'Manrope',Arial,sans-serif!important;
    }
    #tn13Services .stl-grouped-service .stl-price-variant span{
      min-width:0!important;
      white-space:normal!important;
    }
    #tn13Services .stl-grouped-service .stl-price-variant b{
      flex:0 0 auto!important;
      color:#f3efed!important;
      font:500 20px/1 'Cormorant Garamond',Georgia,serif!important;
      letter-spacing:.005em!important;
      white-space:nowrap!important;
    }
    #tn13Services .stl-grouped-service .stl-price-note{
      display:block!important;
      margin-top:10px!important;
      color:rgba(243,239,237,.48)!important;
      font:400 10.5px/1.45 'Manrope',Arial,sans-serif!important;
    }
    #tn13Services .stl-grouped-service .tn31-service-side{
      display:none!important;
    }
    #tn13Services .stl-grouped-service .stl-unified-single{
      margin-top:12px!important;
    }
  }
  `;
  document.head.appendChild(style);
}

function unifyRows(){
  ensureStyle();
  document.querySelectorAll('#tn13Services .stl-grouped-service').forEach(row=>{
    if(row.dataset.stlUnifiedPrice==='1')return;
    const copy=row.querySelector('.tn31-service-copy');
    const side=row.querySelector('.tn31-service-side');
    if(!copy||!side)return;

    const singlePrice=side.querySelector('.tn31-service-price');
    const variants=copy.querySelector('.stl-price-variants');
    const detail=copy.querySelector('.tn31-service-detail');

    if(singlePrice&&!variants){
      const block=document.createElement('div');
      block.className='stl-price-variants stl-unified-single';
      const line=document.createElement('div');
      line.className='stl-price-variant';
      const label=document.createElement('span');
      const value=document.createElement('b');
      label.textContent=(detail?.textContent||'').trim()||'Стоимость';
      value.textContent=(singlePrice.textContent||'').trim();
      line.append(label,value);
      block.appendChild(line);
      if(detail)detail.remove();
      copy.appendChild(block);
    }

    side.querySelectorAll('.tn31-service-book').forEach(btn=>btn.remove());
    row.dataset.stlUnifiedPrice='1';
  });
}

function boot(){
  const list=document.querySelector('#tn13Services .tn31-service-list');
  if(!list){setTimeout(boot,80);return;}
  unifyRows();
  const observer=new MutationObserver(()=>unifyRows());
  observer.observe(list,{childList:true,subtree:true});
}

boot();
})();