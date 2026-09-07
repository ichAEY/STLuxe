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
      padding:21px 0 22px!important;
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
      max-width:calc(100% - 88px)!important;
      font:600 22px/1.08 'Cormorant Garamond',Georgia,serif!important;
      color:#f3efed!important;
      letter-spacing:-.01em!important;
    }
    #tn13Services .stl-grouped-service .tn31-service-detail{
      display:block!important;
      margin-top:8px!important;
      font:400 11px/1.42 'Manrope',Arial,sans-serif!important;
      color:rgba(243,239,237,.54)!important;
      white-space:normal!important;
      overflow:visible!important;
      text-overflow:clip!important;
    }
    #tn13Services .stl-grouped-service .stl-price-variants{
      display:grid!important;
      gap:8px!important;
      margin-top:17px!important;
    }
    #tn13Services .stl-grouped-service .tn31-service-detail + .stl-price-variants{
      margin-top:15px!important;
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
      margin-top:9px!important;
      color:rgba(243,239,237,.58)!important;
      font:400 11px/1.45 'Manrope',Arial,sans-serif!important;
    }
    #tn13Services .stl-grouped-service .stl-price-note.stl-surcharge-note{
      width:100%!important;
      margin:18px auto 1px!important;
      padding:0!important;
      border:0!important;
      text-align:center!important;
    }
    #tn13Services .stl-surcharge-brand{
      display:block!important;
      color:rgba(243,239,237,.68)!important;
      font:500 11.5px/1.35 'Manrope',Arial,sans-serif!important;
    }
    #tn13Services .stl-surcharge-price{
      display:block!important;
      margin:5px 0 0!important;
      color:#fff!important;
      font:600 12px/1.25 'Manrope',Arial,sans-serif!important;
      letter-spacing:.01em!important;
      white-space:nowrap!important;
    }
    #tn13Services .stl-grouped-service .tn31-service-side{
      display:none!important;
    }
    #tn13Services .stl-single-head{
      display:grid!important;
      grid-template-columns:minmax(0,1fr) auto!important;
      align-items:center!important;
      gap:18px!important;
    }
    #tn13Services .stl-single-head .tn31-service-name{
      min-width:0!important;
      max-width:none!important;
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
      margin-top:7px!important;
      color:rgba(243,239,237,.62)!important;
      font:500 11.5px/1.4 'Manrope',Arial,sans-serif!important;
    }
    #tn13Services .stl-single-head + .stl-brand-detail,
    #tn13Services .stl-single-head + .tn31-service-detail{
      margin-top:9px!important;
    }
    @media(max-width:370px){
      #tn13Services .stl-single-head{gap:12px!important}
      #tn13Services .stl-single-head .tn31-service-name{font-size:20px!important}
      #tn13Services .stl-single-price{font-size:20px!important}
      #tn13Services .stl-grouped-service .stl-price-variant{font-size:12.5px!important}
      #tn13Services .stl-grouped-service .stl-price-variant b{font-size:18px!important}
      #tn13Services .stl-surcharge-brand{font-size:10.8px!important}
      #tn13Services .stl-surcharge-price{font-size:11.4px!important}
    }
  }
  `;
  document.head.appendChild(style);
}

function directDetail(copy){
  return [...copy.children].find(el=>el.classList?.contains('tn31-service-detail')&&!el.classList.contains('stl-brand-detail'))||null;
}

function addSubDetail(copy,text){
  if(!text)return;
  let sub=copy.querySelector('.stl-brand-detail');
  if(!sub){
    sub=document.createElement('span');
    sub.className='tn31-service-detail stl-brand-detail';
    const title=copy.querySelector('.tn31-service-name');
    if(title)title.insertAdjacentElement('afterend',sub);
  }
  sub.textContent=text;
}

function setTitleAndSub(copy,titleText,subText){
  const title=copy.querySelector('.tn31-service-name');
  if(!title)return;
  title.textContent=titleText;
  addSubDetail(copy,subText);
}

function polishTitle(copy){
  const title=copy.querySelector('.tn31-service-name');
  if(!title)return;
  const raw=(title.textContent||'').trim();

  const exact={
    'Кератиновое выпрямление чёлки Brazilian Blowout':['Кератиновое выпрямление чёлки','Brazilian Blowout'],
    'Кератиновое восстановление Brazilian Blowout':['Кератиновое восстановление','Brazilian Blowout'],
    'Прикорневая биохимия BustUp New':['Прикорневая биохимия','Bust Up New'],
    'Мужской педикюр гигиенический':['Мужской педикюр','гигиенический'],
    'Маникюр с покрытием гель-лаком OPI / EMI / Luxio':['Маникюр с покрытием','гель-лак OPI, EMI, Luxio'],
    'Экспресс-маникюр с покрытием гель-лаком OPI / EMI / Luxio':['Экспресс-маникюр','с покрытием гель-лаком OPI, EMI, Luxio'],
    'Маникюр с покрытием лаком OPI / EMI / CND Vinylux':['Маникюр с покрытием','лак OPI, EMI, CND Vinylux'],
    'Экспресс-маникюр с покрытием лаком OPI / EMI / CND Vinylux':['Экспресс-маникюр','с покрытием лаком OPI, EMI, CND Vinylux'],
    'Маникюр + Smoothing Gel System EMI / Luxio / OPI':['Маникюр + укрепление','Smoothing Gel System · EMI, Luxio, OPI'],
    'Педикюр с покрытием гель-лаком OPI / Luxio / EMI':['Педикюр с покрытием','гель-лак OPI, Luxio, EMI'],
    'Экспресс-педикюр с покрытием гель-лаком OPI / Luxio / EMI':['Экспресс-педикюр','с покрытием гель-лаком OPI, Luxio, EMI'],
    'Педикюр с покрытием лаком OPI / EMI / CND Vinylux':['Педикюр с покрытием','лак OPI, EMI, CND Vinylux'],
    'Экспресс-педикюр с покрытием лаком OPI / EMI / CND Vinylux':['Экспресс-педикюр','с покрытием лаком OPI, EMI, CND Vinylux'],
    'SPA-педикюр OPI без покрытия':['SPA-педикюр','OPI · без покрытия'],
    'Стрижка простая / модельная':['Стрижка мужская','простая или модельная'],
    'Стрижка под машинку / насадками':['Стрижка под машинку','с насадками'],
    'Креативные полоски / рисунки':['Креативные полоски и рисунки',''],
    'Экспресс-лечение перхоти Londa / Barex':['Экспресс-лечение перхоти','Londa, Barex'],
    'Лечебная маска для волос':['Лечебная маска для волос',''],
    'Дизайн — френч / обратный френч / лунки / кошачий глаз':['Дизайн ногтей','френч, лунки, кошачий глаз'],
    'Художественная роспись / аэрография':['Роспись и аэрография','1 ноготь']
  };

  if(exact[raw]){
    setTitleAndSub(copy,exact[raw][0],exact[raw][1]);
    return;
  }

  if(raw.startsWith('Экспресс-')&&raw.includes(' с покрытием ')){
    const i=raw.indexOf(' с покрытием ');
    setTitleAndSub(copy,raw.slice(0,i),raw.slice(i+1).replace(/\s+\/\s+/g,', '));
    return;
  }

  if(raw.length>43&&/\b(OPI|EMI|Luxio|Vinylux|Barex|Matrix|Londa|Selective|Brazilian Blowout)\b/i.test(raw)){
    const brandMatch=raw.match(/^(.*?)(?:\s+[-—]?\s*)((?:OPI|EMI|Luxio|CND Vinylux|Vinylux|Barex|Matrix|Londa|Selective|Brazilian Blowout)(?:\s*[\/,]\s*(?:OPI|EMI|Luxio|CND Vinylux|Vinylux|Barex|Matrix|Londa|Selective|Brazilian Blowout))*)$/i);
    if(brandMatch){
      setTitleAndSub(copy,brandMatch[1].trim(),brandMatch[2].replace(/\s*[\/]\s*/g,', '));
    }
  }
}

function polishExistingDetail(copy){
  const detail=directDetail(copy);
  if(!detail)return;
  const raw=(detail.textContent||'').trim();
  const replacements={
    'Наклейки, стразы, фольга, конфетти, слюда, втирка, глиттер и др. · 1 ноготь':'Наклейки, стразы, фольга и другой декор · 1 ноготь',
    'Мальчики / девочки до 7 лет':'Мальчики и девочки до 7 лет',
    'Детская / подростковая':'Детская или подростковая',
    'Детское / подростковое':'Детское или подростковое',
    'Selective / Matrix':'Selective, Matrix',
    'Barex / Matrix / Brazilian Blowout':'Barex, Matrix, Brazilian Blowout'
  };
  if(replacements[raw])detail.textContent=replacements[raw];
}

function replaceSlashSeparators(text){
  return String(text||'').replace(/\s+\/\s+/g,' | ');
}

function polishSeparators(copy){
  copy.querySelectorAll('.stl-price-variant span,.stl-price-variant b').forEach(el=>{
    const next=replaceSlashSeparators(el.textContent);
    if(next!==el.textContent)el.textContent=next;
  });
}

function polishNote(copy){
  const note=copy.querySelector('.stl-price-note');
  if(!note||note.dataset.stlPolishedNote==='2')return;
  const text=(note.textContent||'').trim();
  const i=text.indexOf(':');
  if(i>0&&text.slice(i+1).includes('+')){
    const amount=replaceSlashSeparators(text.slice(i+1).trim().replace(/\.$/,''));
    note.classList.add('stl-surcharge-note');
    note.innerHTML=`<span class="stl-surcharge-brand">Permesse, Wella, Matrix и L'Oréal</span><b class="stl-surcharge-price">${amount}</b>`;
  }else{
    note.textContent=replaceSlashSeparators(text);
  }
  note.dataset.stlPolishedNote='2';
}

function polishSticky(){
  document.querySelectorAll('.availability strong,.tn13-sticky strong').forEach(el=>{
    const text=(el.textContent||'').trim();
    const m=text.match(/(\d+)\s+услуг\b/i);
    if(!m)return;
    const next=`Доступно ${m[1]} услуг`;
    if(text!==next)el.textContent=next;
    if(el.dataset.stlStickyWatch!=='1'){
      el.dataset.stlStickyWatch='1';
      new MutationObserver(()=>{
        const current=(el.textContent||'').trim();
        const match=current.match(/(\d+)\s+услуг\b/i);
        if(!match)return;
        const value=`Доступно ${match[1]} услуг`;
        if(current!==value)el.textContent=value;
      }).observe(el,{childList:true,characterData:true,subtree:true});
    }
  });
}

function unifyRows(){
  ensureStyle();
  document.querySelectorAll('#tn13Services .stl-grouped-service').forEach(row=>{
    if(row.dataset.stlUnifiedPrice==='4')return;
    const copy=row.querySelector('.tn31-service-copy');
    const side=row.querySelector('.tn31-service-side');
    if(!copy||!side)return;

    polishTitle(copy);
    polishExistingDetail(copy);
    polishSeparators(copy);

    const singlePrice=side.querySelector('.tn31-service-price');
    const variants=copy.querySelector('.stl-price-variants');
    const title=copy.querySelector('.tn31-service-name');

    if(singlePrice&&!variants&&title&&!copy.querySelector('.stl-single-head')){
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
    row.dataset.stlUnifiedPrice='4';
  });
  polishSticky();
}

function boot(){
  const list=document.querySelector('#tn13Services .tn31-service-list');
  if(!list){setTimeout(boot,80);return;}
  unifyRows();
  polishSticky();
  const observer=new MutationObserver(()=>unifyRows());
  observer.observe(list,{childList:true,subtree:true});
}

boot();
})();
