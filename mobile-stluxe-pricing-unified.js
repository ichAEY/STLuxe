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
      font:400 11px/1.42 'Manrope',Arial,sans-serif!important;
      color:rgba(243,239,237,.54)!important;
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
      color:#f3efed!important;
      font:400 13.5px/1.35 'Manrope',Arial,sans-serif!important;
    }
    #tn13Services .stl-grouped-service .stl-price-variant span{
      min-width:0!important;
      color:#f3efed!important;
      white-space:normal!important;
    }
    #tn13Services .stl-grouped-service .stl-price-variant b{
      flex:0 0 auto!important;
      color:#fff!important;
      font:600 19px/1 'Cormorant Garamond',Georgia,serif!important;
      letter-spacing:.005em!important;
      white-space:nowrap!important;
    }
    #tn13Services .stl-grouped-service .stl-price-note{
      display:block!important;
      margin-top:11px!important;
      color:rgba(243,239,237,.58)!important;
      font:400 11px/1.45 'Manrope',Arial,sans-serif!important;
    }
    #tn13Services .stl-grouped-service .stl-price-note.stl-surcharge-note{
      margin-top:15px!important;
      padding-top:12px!important;
      border-top:1px solid rgba(255,255,255,.09)!important;
      text-align:center!important;
    }
    #tn13Services .stl-surcharge-brand{
      display:block!important;
      color:#f3efed!important;
      font:500 13px/1.35 'Manrope',Arial,sans-serif!important;
    }
    #tn13Services .stl-surcharge-price{
      display:block!important;
      margin-top:5px!important;
      color:#fff!important;
      font:650 15px/1.15 'Manrope',Arial,sans-serif!important;
      letter-spacing:.01em!important;
    }
    #tn13Services .stl-grouped-service .tn31-service-side{
      display:none!important;
    }
    #tn13Services .stl-single-head{
      display:grid!important;
      grid-template-columns:minmax(0,1fr) auto!important;
      align-items:center!important;
      gap:14px!important;
    }
    #tn13Services .stl-single-head .tn31-service-name{
      min-width:0!important;
      margin:0!important;
    }
    #tn13Services .stl-single-price{
      align-self:center!important;
      color:#fff!important;
      font:600 22px/1 'Cormorant Garamond',Georgia,serif!important;
      white-space:nowrap!important;
      letter-spacing:.005em!important;
    }
    #tn13Services .stl-brand-detail{
      margin-top:6px!important;
      color:rgba(243,239,237,.62)!important;
      font:500 11.5px/1.35 'Manrope',Arial,sans-serif!important;
    }
    @media(max-width:370px){
      #tn13Services .stl-single-head{gap:10px!important}
      #tn13Services .stl-single-head .tn31-service-name{font-size:20px!important}
      #tn13Services .stl-single-price{font-size:20px!important}
      #tn13Services .stl-grouped-service .stl-price-variant{font-size:12.5px!important}
      #tn13Services .stl-grouped-service .stl-price-variant b{font-size:18px!important}
    }
  }
  `;
  document.head.appendChild(style);
}

function addBrandDetail(copy,text){
  if(!text||copy.querySelector('.stl-brand-detail'))return;
  const brand=document.createElement('span');
  brand.className='tn31-service-detail stl-brand-detail';
  brand.textContent=text;
  const title=copy.querySelector('.tn31-service-name');
  if(title)title.insertAdjacentElement('afterend',brand);
}

function polishTitle(copy){
  const title=copy.querySelector('.tn31-service-name');
  if(!title)return;
  const raw=(title.textContent||'').trim();
  if(raw==='Кератиновое выпрямление чёлки Brazilian Blowout'){
    title.textContent='Кератиновое выпрямление чёлки';
    addBrandDetail(copy,'Brazilian Blowout');
  }else if(raw==='Кератиновое восстановление Brazilian Blowout'){
    title.textContent='Кератиновое восстановление';
    addBrandDetail(copy,'Brazilian Blowout');
  }
}

function polishNote(copy){
  const note=copy.querySelector('.stl-price-note');
  if(!note||note.dataset.stlPolishedNote==='1')return;
  const text=(note.textContent||'').trim();
  const i=text.indexOf(':');
  if(i>0&&text.slice(i+1).includes('+')){
    const brand=text.slice(0,i).trim();
    const amount=text.slice(i+1).trim().replace(/\.$/,'');
    note.classList.add('stl-surcharge-note');
    note.innerHTML=`<span class="stl-surcharge-brand">${brand}</span><b class="stl-surcharge-price">${amount}</b>`;
  }
  note.dataset.stlPolishedNote='1';
}

function unifyRows(){
  ensureStyle();
  document.querySelectorAll('#tn13Services .stl-grouped-service').forEach(row=>{
    if(row.dataset.stlUnifiedPrice==='2')return;
    const copy=row.querySelector('.tn31-service-copy');
    const side=row.querySelector('.tn31-service-side');
    if(!copy||!side)return;

    polishTitle(copy);

    const singlePrice=side.querySelector('.tn31-service-price');
    const variants=copy.querySelector('.stl-price-variants');
    const title=copy.querySelector('.tn31-service-name');

    if(singlePrice&&!variants&&title){
      const head=document.createElement('div');
      head.className='stl-single-head';
      copy.insertBefore(head,title);
      head.appendChild(title);
      const value=document.createElement('b');
      value.className='stl-single-price';
      value.textContent=(singlePrice.textContent||'').trim();
      head.appendChild(value);
    }

    polishNote(copy);
    side.querySelectorAll('.tn31-service-book').forEach(btn=>btn.remove());
    row.dataset.stlUnifiedPrice='2';
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