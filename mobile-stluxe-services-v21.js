(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const root=document.getElementById('stluxe-tanem-v13');
  if(!root) return;
  const section=root.querySelector('#tn13Services');
  if(!section) return;

  const services=[
    {title:'Стрижка и укладка',price:'800 ₽',cat:'Волосы'},
    {title:'Вечерняя причёска',price:'1 500 ₽',cat:'Волосы'},
    {title:'Колорирование / шатуш / балаяж',price:'от 3 400 ₽',cat:'Волосы'},
    {title:'Маникюр с покрытием',price:'2 300 ₽',cat:'Ногти',desc:'Маникюр гигиенический + покрытие гель-лаком OPI, Luxio, EMI.'},
    {title:'Женский педикюр',price:'2 000 ₽',cat:'Педикюр'},
    {title:'Наращивание ногтей',price:'3 000 ₽',cat:'Ногти'},
    {title:'Биохимическая завивка',price:'от 2 000 ₽',cat:'Волосы'},
    {title:'Экспресс-педикюр',price:'1 500 ₽',cat:'Педикюр',extra:true},
    {title:'Мелирование и тонирование',price:'3 900 ₽',cat:'Волосы',extra:true},
    {title:'Коррекция и окрашивание бровей',price:'Цена по записи',cat:'Брови',extra:true},
    {title:'Окрашивание ресниц',price:'Цена по записи',cat:'Брови',extra:true},
    {title:'Чистка лица',price:'Цена по записи',cat:'Косметология',extra:true},
    {title:'Химический пилинг',price:'Цена по записи',cat:'Косметология',extra:true},
    {title:'Перманентный макияж',price:'Цена по записи',cat:'Косметология',extra:true},
    {title:'Шугаринг / восковая депиляция',price:'Цена по записи',cat:'Депиляция',extra:true}
  ];

  const categories=['Все','Волосы','Ногти','Педикюр','Брови','Косметология','Депиляция'];
  let active='Все';
  let expanded=false;

  const style=document.createElement('style');
  style.id='stluxe-services-v21-style';
  style.textContent=`
  @media(max-width:767px){
    #stluxe-tanem-v13 #tn13Services{
      width:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;
      background:radial-gradient(circle at 18% 18%,rgba(108,88,68,.09),transparent 30%),linear-gradient(180deg,#11100e 0%,#12110f 100%)!important;
      color:#f3eee7!important;position:relative!important;
    }
    #stluxe-tanem-v13 #tn13Services:before{display:none!important}
    #stluxe-tanem-v13 .tn21-wrap{width:100%;padding:34px 22px 28px;position:relative;z-index:1}
    #stluxe-tanem-v13 .tn21-kicker{margin:0;font-family:"Manrope",Arial,sans-serif;font-size:11px;font-weight:400;line-height:1;letter-spacing:.12em;color:rgba(243,238,231,.58)}
    #stluxe-tanem-v13 .tn21-title{margin:15px 0 0;font-family:"Cormorant Garamond",Georgia,serif;font-size:42px;font-weight:400;line-height:.92;letter-spacing:-.025em;color:#f5efe8}
    #stluxe-tanem-v13 .tn21-cats{display:flex;gap:8px;margin:24px -22px 0;padding:0 22px 4px;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x proximity;-webkit-overflow-scrolling:touch;scrollbar-width:none}
    #stluxe-tanem-v13 .tn21-cats::-webkit-scrollbar{display:none}
    #stluxe-tanem-v13 .tn21-cat{flex:0 0 auto;height:36px;padding:0 15px;border-radius:5px!important;border:1px solid rgba(219,190,155,.32)!important;background:transparent!important;color:#e9dfd4!important;box-shadow:none!important;font-family:"Manrope",Arial,sans-serif!important;font-size:11px!important;font-weight:400!important;white-space:nowrap;scroll-snap-align:start}
    #stluxe-tanem-v13 .tn21-cat.active{background:#ead8bf!important;border-color:#ead8bf!important;color:#17130f!important}
    #stluxe-tanem-v13 .tn21-list{margin-top:17px;border-top:1px solid rgba(243,238,231,.14)}
    #stluxe-tanem-v13 .tn21-row{display:grid;grid-template-columns:minmax(0,1fr) 94px;gap:14px;align-items:center;min-height:76px;padding:15px 0;border-bottom:1px solid rgba(243,238,231,.14)}
    #stluxe-tanem-v13 .tn21-main{min-width:0}
    #stluxe-tanem-v13 .tn21-name{font-family:"Cormorant Garamond",Georgia,serif;font-size:16px;font-weight:400;line-height:1.08;color:#f3eee7}
    #stluxe-tanem-v13 .tn21-desc{margin-top:7px;font-family:"Manrope",Arial,sans-serif;font-size:9.5px;font-weight:400;line-height:1.45;color:rgba(224,216,207,.58)}
    #stluxe-tanem-v13 .tn21-desc-text.collapsed{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
    #stluxe-tanem-v13 .tn21-more{display:inline;margin-left:5px;padding:0!important;border:0!important;background:none!important;color:#cfb18c!important;font-family:"Manrope",Arial,sans-serif!important;font-size:9.5px!important;font-weight:500!important;line-height:1!important;text-decoration:underline;text-underline-offset:2px}
    #stluxe-tanem-v13 .tn21-price{align-self:center;justify-self:end;text-align:right;font-family:"Cormorant Garamond",Georgia,serif;font-size:16px;font-weight:400;line-height:1.05;color:#e6c39a;white-space:normal}
    #stluxe-tanem-v13 .tn21-all{width:100%;height:46px;margin-top:21px;border-radius:5px!important;border:1px solid rgba(219,190,155,.42)!important;background:rgba(255,255,255,.015)!important;color:#eee4d9!important;display:flex;align-items:center;justify-content:center;gap:12px;box-shadow:none!important;font-family:"Manrope",Arial,sans-serif!important;font-size:11px!important;font-weight:500!important;letter-spacing:.02em}
    #stluxe-tanem-v13 .tn21-all .arrow{font-family:"Cormorant Garamond",Georgia,serif;font-size:20px;line-height:1;transform:translateY(-1px)}
    #stluxe-tanem-v13 .tn21-all.done{opacity:.62;pointer-events:none}
    @media(max-width:360px){
      #stluxe-tanem-v13 .tn21-wrap{padding-left:18px;padding-right:18px}
      #stluxe-tanem-v13 .tn21-cats{margin-left:-18px;margin-right:-18px;padding-left:18px;padding-right:18px}
      #stluxe-tanem-v13 .tn21-row{grid-template-columns:minmax(0,1fr) 86px;gap:10px}
      #stluxe-tanem-v13 .tn21-name,#stluxe-tanem-v13 .tn21-price{font-size:15px}
    }
  }`;
  document.head.appendChild(style);

  section.innerHTML=`<div class="tn21-wrap">
    <p class="tn21-kicker">Услуги</p>
    <h2 class="tn21-title">Наши<br>услуги</h2>
    <div class="tn21-cats" id="tn21Cats" aria-label="Категории услуг"></div>
    <div class="tn21-list" id="tn21List"></div>
    <button class="tn21-all" id="tn21All" type="button"><span>Посмотреть все услуги</span><span class="arrow">→</span></button>
  </div>`;

  const cats=section.querySelector('#tn21Cats');
  const list=section.querySelector('#tn21List');
  const allBtn=section.querySelector('#tn21All');

  function serviceVisible(s){
    if(active!=='Все' && s.cat!==active) return false;
    if(expanded || active!=='Все') return true;
    return !s.extra;
  }

  function row(s,index){
    const longDesc=s.desc && s.desc.length>54;
    return `<div class="tn21-row" data-index="${index}"><div class="tn21-main"><div class="tn21-name">${s.title}</div>${s.desc?`<div class="tn21-desc"><span class="tn21-desc-text${longDesc?' collapsed':''}">${s.desc}</span>${longDesc?`<button class="tn21-more" type="button" data-more="${index}">Ещё</button>`:''}</div>`:''}</div><div class="tn21-price">${s.price}</div></div>`;
  }

  function renderCats(){
    cats.innerHTML=categories.map(c=>`<button class="tn21-cat${c===active?' active':''}" type="button" data-cat="${c}">${c}</button>`).join('');
    cats.querySelectorAll('.tn21-cat').forEach(btn=>btn.addEventListener('click',()=>{
      active=btn.dataset.cat;
      renderCats();
      renderList();
      btn.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    }));
  }

  function renderList(){
    list.innerHTML=services.map((s,i)=>serviceVisible(s)?row(s,i):'').join('');
    list.querySelectorAll('.tn21-more').forEach(btn=>btn.addEventListener('click',()=>{
      const r=btn.closest('.tn21-row');
      const t=r && r.querySelector('.tn21-desc-text');
      if(t){t.classList.remove('collapsed');btn.remove();}
    }));
    allBtn.classList.toggle('done',expanded && active==='Все');
    allBtn.querySelector('span:first-child').textContent=(expanded && active==='Все')?'Все услуги показаны':'Посмотреть все услуги';
  }

  allBtn.addEventListener('click',()=>{
    expanded=true;
    active='Все';
    renderCats();
    renderList();
  });

  renderCats();
  renderList();
})();
