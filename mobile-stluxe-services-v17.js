(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const root=document.getElementById('stluxe-tanem-v13');
  if(!root) return;
  const section=root.querySelector('#tn13Services');
  if(!section) return;

  const featured=[
    {title:'Стрижка и укладка',price:'800 ₽'},
    {title:'Вечерняя причёска',price:'1 500 ₽'},
    {title:'Колорирование / шатуш / балаяж',price:'от 3 400 ₽'},
    {title:'Маникюр с покрытием',price:'1 700 ₽'},
    {title:'Женский педикюр',price:'2 000 ₽'},
    {title:'Наращивание ногтей',price:'3 000 ₽'},
    {title:'Биохимическая завивка',price:'от 2 000 ₽'}
  ];

  const extra=[
    {title:'Экспресс-педикюр',price:'1 500 ₽'},
    {title:'Мелирование и тонирование',price:'3 900 ₽'},
    {title:'Коррекция и окрашивание бровей',price:'Цена по записи'},
    {title:'Окрашивание ресниц',price:'Цена по записи'},
    {title:'Чистка лица',price:'Цена по записи'},
    {title:'Химический пилинг',price:'Цена по записи'},
    {title:'Перманентный макияж',price:'Цена по записи'}
  ];

  const style=document.createElement('style');
  style.id='stluxe-services-v17-style';
  style.textContent=`
  @media(max-width:767px){
    #stluxe-tanem-v13 #tn13Services{
      width:100%!important;
      margin:0!important;
      padding:0!important;
      background:
        radial-gradient(circle at 18% 28%,rgba(121,101,80,.12),transparent 27%),
        radial-gradient(circle at 78% 68%,rgba(105,88,70,.10),transparent 31%),
        linear-gradient(180deg,#11100e 0%,#12110f 100%)!important;
      color:#f3eee7!important;
      overflow:hidden!important;
      position:relative!important;
    }
    #stluxe-tanem-v13 #tn13Services:before{
      content:"";position:absolute;inset:0;pointer-events:none;opacity:.32;
      background-image:
        repeating-radial-gradient(circle at 20% 35%,rgba(255,255,255,.018) 0 1px,transparent 1px 4px),
        linear-gradient(100deg,transparent 0 28%,rgba(255,255,255,.014) 43%,transparent 58% 100%);
      mix-blend-mode:screen;
    }
    #stluxe-tanem-v13 .tn17-wrap{
      width:100%;min-height:693px;padding:38px 27px 0;position:relative;z-index:1;
    }
    #stluxe-tanem-v13 .tn17-top{
      height:34px;display:flex;align-items:center;justify-content:space-between;gap:16px;
    }
    #stluxe-tanem-v13 .tn17-kicker{
      font-family:"Manrope",Arial,sans-serif;font-size:12px;font-weight:400;line-height:1;
      letter-spacing:.07em;color:rgba(243,238,231,.62);white-space:nowrap;
    }
    #stluxe-tanem-v13 .tn17-full{
      width:163px;height:34px;border:1px solid rgba(243,238,231,.42)!important;border-radius:4px!important;
      background:rgba(0,0,0,.06)!important;color:#f3eee7!important;padding:0 13px!important;
      display:flex;align-items:center;justify-content:space-between;gap:8px;box-shadow:none!important;
      font-family:"Cormorant Garamond",Georgia,serif!important;font-size:13px!important;font-weight:400!important;
      line-height:1!important;white-space:nowrap;
    }
    #stluxe-tanem-v13 .tn17-full .arrow{font-size:19px;line-height:1;transform:translateY(-1px)}
    #stluxe-tanem-v13 .tn17-title{
      margin:10px 0 0;font-family:"Cormorant Garamond",Georgia,serif;font-size:40px;font-weight:400;
      line-height:.93;letter-spacing:-.025em;color:#f5efe8;
    }
    #stluxe-tanem-v13 .tn17-list{margin-top:25px}
    #stluxe-tanem-v13 .tn17-row{
      height:74px;display:grid;grid-template-columns:minmax(0,1fr) 82px 90px;gap:8px;align-items:center;
      border-bottom:1px solid rgba(243,238,231,.16);
    }
    #stluxe-tanem-v13 .tn17-row:last-child{border-bottom:0}
    #stluxe-tanem-v13 .tn17-name,
    #stluxe-tanem-v13 .tn17-price,
    #stluxe-tanem-v13 .tn17-book{
      font-family:"Cormorant Garamond",Georgia,serif;
      color:#f3eee7;
    }
    #stluxe-tanem-v13 .tn17-name{
      min-width:0;font-size:14px;font-weight:400;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
    }
    #stluxe-tanem-v13 .tn17-price{
      font-size:14px;font-weight:400;line-height:1;text-align:left;white-space:nowrap;color:rgba(243,238,231,.91);
    }
    #stluxe-tanem-v13 .tn17-book{
      width:90px;height:35px;border-radius:4px!important;padding:0!important;display:flex;align-items:center;justify-content:center;
      font-size:13px!important;font-weight:400!important;line-height:1!important;box-shadow:none!important;
    }
    #stluxe-tanem-v13 .tn17-row:nth-child(odd) .tn17-book{
      border:1px solid #060606!important;background:#060606!important;color:#f5efe8!important;
    }
    #stluxe-tanem-v13 .tn17-row:nth-child(even) .tn17-book{
      border:1px solid rgba(243,238,231,.52)!important;background:transparent!important;color:#f5efe8!important;
    }
    #stluxe-tanem-v13 .tn17-extra{display:none}
    #stluxe-tanem-v13 .tn17-wrap.expanded .tn17-extra{display:grid}
    #stluxe-tanem-v13 .tn17-wrap.expanded{padding-bottom:20px}
    @media(max-width:360px){
      #stluxe-tanem-v13 .tn17-wrap{padding-left:22px;padding-right:22px}
      #stluxe-tanem-v13 .tn17-row{grid-template-columns:minmax(0,1fr) 75px 84px;gap:6px}
      #stluxe-tanem-v13 .tn17-book{width:84px}
      #stluxe-tanem-v13 .tn17-name,#stluxe-tanem-v13 .tn17-price{font-size:13px}
      #stluxe-tanem-v13 .tn17-full{width:156px}
    }
  }`;
  document.head.appendChild(style);

  section.innerHTML=`
    <div class="tn17-wrap" id="tn17Wrap">
      <div class="tn17-top">
        <div class="tn17-kicker">Услуги</div>
        <button class="tn17-full" id="tn17Full" type="button"><span>Смотреть полный прайс</span><span class="arrow">→</span></button>
      </div>
      <h2 class="tn17-title">Наши<br>услуги</h2>
      <div class="tn17-list" id="tn17List"></div>
    </div>`;

  const wrap=section.querySelector('#tn17Wrap');
  const list=section.querySelector('#tn17List');
  const full=section.querySelector('#tn17Full');
  let expanded=false;

  function openBook(service){
    const sheet=root.querySelector('#tn13BookSheet');
    if(!sheet) return;
    const text=sheet.querySelector('.tn13-master-about');
    if(text) text.textContent=`Вы выбрали: ${service}. Для записи можно позвонить в STLuxe или открыть карточку салона в Яндекс Картах.`;
    sheet.classList.add('open');
    document.body.style.overflow='hidden';
  }

  function row(s,extraRow=false,index=0){
    return `<div class="tn17-row${extraRow?' tn17-extra':''}"><div class="tn17-name">${s.title}</div><div class="tn17-price">${s.price}</div><button class="tn17-book" type="button" data-service="${s.title}" aria-label="Записаться на ${s.title}">Записаться</button></div>`;
  }

  function render(){
    list.innerHTML=featured.map((s,i)=>row(s,false,i)).join('')+extra.map((s,i)=>row(s,true,featured.length+i)).join('');
    list.querySelectorAll('.tn17-book').forEach(btn=>btn.addEventListener('click',()=>openBook(btn.dataset.service)));
  }

  full.addEventListener('click',()=>{
    expanded=!expanded;
    wrap.classList.toggle('expanded',expanded);
    full.querySelector('span:first-child').textContent=expanded?'Скрыть прайс':'Смотреть полный прайс';
    full.querySelector('.arrow').textContent=expanded?'←':'→';
  });

  render();
})();
