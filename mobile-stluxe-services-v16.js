(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const root=document.getElementById('stluxe-tanem-v13');
  if(!root) return;
  const section=root.querySelector('#tn13Services');
  if(!section) return;

  const services=[
    {cat:'nails',title:'Маникюр с покрытием',price:'1 700 ₽'},
    {cat:'nails',title:'Женский педикюр',price:'2 000 ₽'},
    {cat:'nails',title:'Экспресс-педикюр',price:'1 500 ₽'},
    {cat:'nails',title:'Наращивание ногтей',price:'3 000 ₽'},
    {cat:'hair',title:'Стрижка и укладка',price:'800 ₽'},
    {cat:'hair',title:'Вечерняя причёска',price:'1 500 ₽'},
    {cat:'hair',title:'Биохимическая завивка Selective',price:'от 2 000 ₽'},
    {cat:'hair',title:'Колорирование / шатуш / балаяж',price:'от 3 400 ₽'},
    {cat:'brows',title:'Коррекция и окрашивание бровей',price:'Цена по записи'},
    {cat:'brows',title:'Окрашивание ресниц',price:'Цена по записи'},
    {cat:'brows',title:'Наращивание ресниц',price:'Цена по записи'},
    {cat:'cosmo',title:'Чистка лица',price:'Цена по записи'},
    {cat:'cosmo',title:'Аппаратная чистка лица',price:'Цена по записи'},
    {cat:'cosmo',title:'Химический пилинг лица',price:'Цена по записи'},
    {cat:'cosmo',title:'Перманентный макияж',price:'Цена по записи'},
    {cat:'cosmo',title:'Шугаринг',price:'Цена по записи'},
    {cat:'cosmo',title:'Восковая депиляция',price:'Цена по записи'}
  ];

  const style=document.createElement('style');
  style.id='stluxe-services-v16-style';
  style.textContent=`
  @media(max-width:767px){
    #stluxe-tanem-v13 #tn13Services{
      width:100%!important;
      margin:0!important;
      padding:0!important;
      background:#faf6f0!important;
      color:#171513!important;
      overflow:hidden!important;
    }
    #stluxe-tanem-v13 .tn16-wrap{
      width:100%;
      min-height:693px;
      padding:28px 20px 18px;
    }
    #stluxe-tanem-v13 .tn16-ornament{
      height:18px;display:flex;align-items:center;justify-content:center;gap:13px;color:#b59675;
      margin:0 0 10px;
    }
    #stluxe-tanem-v13 .tn16-ornament:before,#stluxe-tanem-v13 .tn16-ornament:after{
      content:"";width:51px;height:1px;background:#d7c0a6;
    }
    #stluxe-tanem-v13 .tn16-ornament span{font:500 16px/1 "Cormorant Garamond",Georgia,serif;transform:translateY(-1px)}
    #stluxe-tanem-v13 .tn16-title{
      margin:0;text-align:center;font:500 35px/.98 "Cormorant Garamond",Georgia,serif;letter-spacing:-.035em;color:#171513;
    }
    #stluxe-tanem-v13 .tn16-tabs{
      display:flex;align-items:center;gap:12px;margin:29px 0 27px;overflow:hidden;padding:0 4px;
    }
    #stluxe-tanem-v13 .tn16-tab{
      flex:0 0 auto;height:31px;padding:0!important;border:1px solid #ddcbb9!important;border-radius:8px!important;
      background:rgba(255,255,255,.30)!important;color:#3d3935!important;
      font-family:"Manrope",Arial,sans-serif!important;font-size:11.5px!important;font-weight:400!important;line-height:1!important;
      box-shadow:none!important;white-space:nowrap;
    }
    #stluxe-tanem-v13 .tn16-tab:nth-child(1){width:41px}
    #stluxe-tanem-v13 .tn16-tab:nth-child(2){width:51px}
    #stluxe-tanem-v13 .tn16-tab:nth-child(3){width:60px}
    #stluxe-tanem-v13 .tn16-tab:nth-child(4){width:52px}
    #stluxe-tanem-v13 .tn16-tab:nth-child(5){width:87px}
    #stluxe-tanem-v13 .tn16-tab.active{background:#eadbc9!important;border-color:#eadbc9!important;color:#211e1b!important}
    #stluxe-tanem-v13 .tn16-list{display:grid;gap:9px}
    #stluxe-tanem-v13 .tn16-card{
      min-height:88px;border:1px solid #eadfd3;border-radius:11px;background:rgba(255,255,255,.66);
      padding:14px 15px 12px;display:grid;grid-template-rows:auto 1fr;box-shadow:0 4px 16px rgba(89,65,51,.025);
    }
    #stluxe-tanem-v13 .tn16-name{
      margin:0 0 8px;max-width:100%;font:500 24px/.94 "Cormorant Garamond",Georgia,serif;letter-spacing:-.03em;color:#171513;
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
    }
    #stluxe-tanem-v13 .tn16-row{display:flex;align-items:end;justify-content:space-between;gap:12px;min-height:34px}
    #stluxe-tanem-v13 .tn16-price{
      font-family:"Manrope",Arial,sans-serif;font-size:14px;font-weight:500;line-height:1.1;color:#1d1a18;white-space:nowrap;
    }
    #stluxe-tanem-v13 .tn16-book{
      flex:0 0 auto;width:116px;height:33px;border:0!important;border-radius:8px!important;background:#111!important;color:#fff!important;
      padding:0!important;display:flex;align-items:center;justify-content:center;box-shadow:none!important;
      font-family:"Manrope",Arial,sans-serif!important;font-size:12.5px!important;font-weight:400!important;line-height:1!important;
    }
    #stluxe-tanem-v13 .tn16-more{
      width:100%;height:35px;margin:14px 0 0;border:1px solid #dfccb8!important;border-radius:11px!important;background:transparent!important;
      color:#6f6963!important;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:none!important;
      font-family:"Manrope",Arial,sans-serif!important;font-size:13px!important;font-weight:400!important;
    }
    #stluxe-tanem-v13 .tn16-more span{color:#c29d73;font-size:21px;line-height:1;transform:translateY(-1px)}
  }
  `;
  document.head.appendChild(style);

  section.classList.add('tn16-services');
  section.innerHTML=`
    <div class="tn16-wrap">
      <div class="tn16-ornament" aria-hidden="true"><span>✦</span></div>
      <h2 class="tn16-title">Услуги и цены</h2>
      <div class="tn16-tabs" id="tn16Tabs" aria-label="Категории услуг">
        <button class="tn16-tab active" data-cat="all" type="button">Все</button>
        <button class="tn16-tab" data-cat="nails" type="button">Ногти</button>
        <button class="tn16-tab" data-cat="hair" type="button">Волосы</button>
        <button class="tn16-tab" data-cat="brows" type="button">Брови</button>
        <button class="tn16-tab" data-cat="cosmo" type="button">Косметология</button>
      </div>
      <div class="tn16-list" id="tn16List"></div>
      <button class="tn16-more" id="tn16More" type="button">Посмотреть ещё <span>→</span></button>
    </div>
  `;

  const list=section.querySelector('#tn16List');
  const more=section.querySelector('#tn16More');
  let current='all';
  let expanded=false;

  function filtered(){
    if(current!=='all') return services.filter(s=>s.cat===current);
    const featured=[services[0],services[1],services[4],services[8],services[11]];
    return featured.concat(services.filter(s=>!featured.includes(s)));
  }
  function render(){
    const items=filtered();
    const visible=expanded?items:items.slice(0,5);
    list.innerHTML=visible.map(s=>`<article class="tn16-card"><div class="tn16-name">${s.title}</div><div class="tn16-row"><div class="tn16-price">${s.price}</div><button class="tn16-book" type="button" data-service="${s.title}">Забронировать</button></div></article>`).join('');
    more.style.display=items.length>5?'flex':'none';
    more.firstChild.nodeValue=expanded?'Свернуть ':'Посмотреть ещё ';
    bindBooks();
  }

  function openBook(service){
    const sheet=root.querySelector('#tn13BookSheet');
    if(!sheet) return;
    const text=sheet.querySelector('.tn13-master-about');
    if(text){text.textContent=`Вы выбрали: ${service}. Онлайн-ссылка салона в карточке не указана. Для записи можно позвонить или открыть карточку STLuxe в Яндекс Картах.`}
    sheet.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function bindBooks(){list.querySelectorAll('.tn16-book').forEach(btn=>btn.addEventListener('click',()=>openBook(btn.dataset.service)))}

  section.querySelectorAll('.tn16-tab').forEach(tab=>tab.addEventListener('click',()=>{
    current=tab.dataset.cat;expanded=false;
    section.querySelectorAll('.tn16-tab').forEach(x=>x.classList.toggle('active',x===tab));
    render();
  }));
  more.addEventListener('click',()=>{expanded=!expanded;render()});
  render();
})();