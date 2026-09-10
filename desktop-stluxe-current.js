/* STLuxe desktop build — hero block. Mobile bundle is intentionally untouched. */
(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(min-width:768px)').matches) return;

  const PHONE='+79163552222';
  const ADDRESS='Ивантеевка, ул. Победы, 16';
  const PORTFOLIO=[
    {src:'hair.webp',alt:'Работа с волосами STLuxe'},
    {src:'nails2.webp',alt:'Маникюр STLuxe'},
    {src:'res.webp',alt:'Работа с ресницами STLuxe'},
    {src:'hair5.webp',alt:'Работа с волосами STLuxe'},
    {src:'nails7.webp',alt:'Маникюр STLuxe'},
    {src:'hair8.webp',alt:'Работа с волосами STLuxe'},
    {src:'nails10.webp',alt:'Маникюр STLuxe'}
  ];
  const DESKTOP_GALLERY=[
    'salon.webp','salon2.webp','salon3.webp','salon4.webp','salon6.webp','salon7.webp','salon8.webp','salon9.webp','salon10.webp','salon11.webp','salon12.webp','salon13.webp',
    'nails.webp','nails2.webp','nails3.webp','nails4.webp','nails5.webp','nails6.webp','nails7.webp','nails8.webp','nails9.webp','nails10.webp','nails11.webp','nails12.webp',
    'hair.webp','hair2.webp','hair3.webp','hair4.webp','hair5.webp','hair6.webp','hair7.webp','hair8.webp',
    'res.webp'
  ];
  const PRICE_PAGES=[
    'stluxe_price_page_1.webp',
    'stluxe_price_page_2.webp',
    'stluxe_price_page_3.webp',
    'stluxe_price_page_4.webp',
    'stluxe_price_page_5.webp',
    'stluxe_price_page_6.webp',
    'stluxe_price_page_7.webp'
  ];
  const SERVICE_DATA={"Стрижки и укладки":[["Стрижка и укладка","","",[["Короткие волосы","1 400 ₽"],["Средние волосы","1 600 ₽"],["Длинные волосы","2 000 ₽"]],""],["Стрижка чёлки","300 ₽","Без мытья головы",[],""],["Подравнивание","","Без мытья головы, укладки и стайлинга",[["Средние волосы","800 ₽"],["Длинные волосы","1 000 ₽"]],""],["Укладка волос 30–45 мин","","Без стрижки",[["Короткие волосы","700 ₽"],["Средние волосы","1 000 ₽"],["Длинные волосы","1 200 ₽"]],""],["Доплаты к укладке","","",[["Диффузор","+150 / +250 / +350 ₽"],["Начёс","+200 / +300 / +450 ₽"],["Утюжок","+300 / +500 / +700 ₽"],["Щипцы","+300 / +500 / +700 ₽"]],"Цены указаны для коротких / средних / длинных волос."],["Вечерняя причёска","1 500–3 500 ₽","",[],""],["Свадебная причёска","2 500–4 500 ₽","",[],""],["Пробная свадебная причёска","","",[["Короткие волосы","1 500–2 500 ₽"],["Средние волосы","2 500–3 500 ₽"],["Длинные волосы","3 500–4 500 ₽"]],""],["Плетение оригинальных косичек","","",[["1 элемент · 30 мин · средние","400 ₽"],["1 элемент · 30 мин · длинные","500 ₽"],["2 элемента · 60 мин · средние","600 ₽"],["2 элемента · 60 мин · длинные","750 ₽"],["3+ элемента · средние","900–1 200 ₽"],["3+ элемента · длинные","1 200–1 500 ₽"],["Мытьё и сушка · средние","+150 ₽"],["Мытьё и сушка · длинные","+250 ₽"]],""]],"Окрашивание":[["Окрашивание корней волос","","Londa / Barex",[["Короткие волосы","от 2 500 ₽"],["Средние волосы","от 3 300 ₽"],["Длинные волосы","от 3 700 ₽"]],"Permesse / Wella / Matrix / L’Oréal: +300 / +500 / +700 ₽."],["Окрашивание в 1 тон","","Londa / Barex",[["Короткие волосы","от 3 500 ₽"],["Средние волосы","от 4 000 ₽"],["Длинные волосы","от 4 800 ₽"]],"Permesse / Wella / Matrix / L’Oréal: +300 / +500 / +700 ₽."],["Смывка цвета","","",[["Короткие волосы","3 800 ₽"],["Средние волосы","4 600 ₽"],["Длинные волосы","5 500 ₽"]],""],["Блондирование корней + тонирование","","Londa / Barex",[["Короткие волосы","от 4 500 ₽"],["Средние волосы","от 5 500 ₽"],["Длинные волосы","от 6 000 ₽"]],"Permesse / Wella / Matrix / L’Oréal: +300 / +500 / +700 ₽."],["Блондирование + тонирование","","Londa / Barex",[["Короткие волосы","от 5 500 ₽"],["Средние волосы","от 6 500 ₽"],["Длинные волосы","от 7 000 ₽"]],"Permesse / Wella / Matrix / L’Oréal: +300 / +500 / +700 ₽."]],"Мелирование":[["Мелирование на фольге","","",[["Короткие волосы","от 4 500 ₽"],["Средние волосы","от 5 000 ₽"],["Длинные волосы","от 6 000 ₽"]],""],["Мелирование корней на фольге","","",[["Короткие волосы","от 4 000 ₽"],["Средние волосы","от 4 500 ₽"],["Длинные волосы","от 5 500 ₽"]],""],["Частичное мелирование до 10 прядей","","",[["Во время окрашивания · короткие","1 900 ₽"],["Во время окрашивания · средние","2 700 ₽"],["Во время окрашивания · длинные","3 500 ₽"],["Отдельно · короткие","2 000 ₽"],["Отдельно · средние","2 500 ₽"],["Отдельно · длинные","3 000 ₽"]],""],["Мелирование на фольге + тонирование","","Londa / Barex",[["Короткие волосы","от 6 000 ₽"],["Средние волосы","от 7 000 ₽"],["Длинные волосы","от 8 000 ₽"]],"Permesse / Wella / Matrix / L’Oréal: +300 / +500 / +700 ₽."],["Мелирование корней на фольге + тонирование","","Londa / Barex",[["Короткие волосы","от 5 000 ₽"],["Средние волосы","от 6 000 ₽"],["Длинные волосы","от 7 000 ₽"]],"Permesse / Wella / Matrix / L’Oréal: +300 / +500 / +700 ₽."],["Сложное колорирование 3-D / омбре / брондирование","","Londa / Barex",[["Короткие волосы","от 5 500 ₽"],["Средние волосы","от 6 500 ₽"],["Длинные волосы","от 8 000 ₽"]],"Permesse / Wella / Matrix / L’Oréal: +300 / +500 / +700 ₽."],["Шатуш / балаяж / рельефное окрашивание","","Londa / Barex",[["Короткие волосы","от 6 000 ₽"],["Средние волосы","от 7 000 ₽"],["Длинные волосы","от 9 000 ₽"]],"Permesse / Wella / Matrix / L’Oréal: +300 / +500 / +700 ₽."]],"Уход за волосами":[["Химическая завивка Londa","","",[["Короткие волосы","от 3 800 ₽"],["Средние волосы","от 4 000 ₽"],["Длинные волосы","от 5 000 ₽"]],""],["Биохимическая завивка Selective","","",[["Короткие волосы","от 4 000 ₽"],["Средние волосы","от 5 000 ₽"],["Длинные волосы","от 5 500 ₽"]],""],["Прикорневая биохимия BustUp New","2 500–4 500 ₽","",[],""],["Ламинирование волос Barex","","",[["Короткие волосы","3 000 ₽"],["Средние волосы","3 500 ₽"],["Длинные волосы","от 4 000 ₽"]],""],["Кератиновое восстановление Brazilian Blowout","","",[["Короткие волосы · 10 мл","от 5 000 ₽"],["Средние волосы · 17 мл","от 7 000 ₽"],["Длинные волосы · 25 мл","от 8 000 ₽"]],""],["Кератиновое выпрямление чёлки Brazilian Blowout","1 000 ₽","",[],""],["Экспресс-лечение повреждённых волос","","Selective / Matrix",[["Короткие волосы","500 ₽"],["Средние волосы","1 000 ₽"],["Длинные волосы","1 500 ₽"]],""],["Ботокс для волос Densi Fill Selective","","",[["Короткие волосы","1 200–1 500 ₽"],["Средние волосы","1 700–2 000 ₽"],["Длинные волосы","2 500–3 000 ₽"]],""],["Экспресс-лечение перхоти Londa / Barex","от 1 000 ₽","",[],""],["Лечебная маска для волос","","Barex / Matrix / Brazilian Blowout",[["Короткие волосы","400 ₽"],["Средние волосы","600 ₽"],["Длинные волосы","900 ₽"]],""],["Глазирование волос Matrix","","",[["Короткие волосы","1 700 ₽"],["Средние волосы","от 2 100 ₽"],["Длинные волосы","от 2 700 ₽"]],""]],"Мужчины и дети":[["Стрижка простая / модельная","","Мужская",[["Короткие волосы","1 000 ₽"],["Средние волосы","1 400 ₽"]],""],["Стрижка под машинку / насадками","800 ₽","",[],""],["Креативная имидж-стрижка","1 500 ₽","",[],""],["Креативные полоски / рисунки","от 200 ₽","",[],""],["Детская стрижка","600 ₽","Мальчики / девочки до 7 лет",[],""],["Подростковая стрижка","800 ₽","Мальчики 7–12 лет",[],""],["Подростковая стрижка","","Девочки 7–12 лет",[["Короткие волосы","1 200 ₽"],["Средние волосы","1 400 ₽"],["Длинные волосы","1 700 ₽"]],""],["Стрижка чёлки","250 ₽","Детская / подростковая",[],""],["Подравнивание","600 ₽","Детское / подростковое",[],""]],"Маникюр":[["Маникюр гигиенический","1 400 ₽","Аппаратный, обрезной или комбинированный",[],""],["Экспресс-маникюр","1 400 ₽","",[],""],["SPA-маникюр","1 700 ₽","Маникюр + пилинг + маска + лосьон + массаж",[],""],["Пилинг рук","200 ₽","",[],""],["Массаж рук","200 ₽","",[],""],["Полировка ногтей","200 ₽","",[],""],["Мужской маникюр гигиенический","1 500 ₽","",[],""],["Подростковый маникюр","1 000 ₽","До 12 лет",[],""],["Маникюр с покрытием гель-лаком OPI / EMI / Luxio","1 900 ₽","",[],""],["Экспресс-маникюр с покрытием гель-лаком OPI / EMI / Luxio","1 700 ₽","",[],""],["Маникюр с покрытием лаком OPI / EMI / CND Vinylux","1 700 ₽","",[],""],["Экспресс-маникюр с покрытием лаком OPI / EMI / CND Vinylux","1 500 ₽","",[],""],["Маникюр с лечебным покрытием","1 600 ₽","",[],""],["Экспресс-маникюр с лечебным покрытием","1 400 ₽","",[],""],["Покрытие ногтей гель-лаком без маникюра","1 200 ₽","",[],""],["Покрытие ногтей лаком без маникюра","1 000 ₽","Основа + лак + сушка",[],""],["Маникюр + Smoothing Gel System EMI / Luxio / OPI","","",[["Без цветного гель-лака","2 400 ₽"],["С цветным гель-лаком","2 600 ₽"]],""],["Ремонт натурального ногтя гелем","","",[["При маникюре · 1 ноготь","100 ₽"],["Без маникюра · 1 ноготь","500 ₽"]],""],["Снятие гель-лака","","",[["При маникюре","400 ₽"],["Без маникюра","800 ₽"]],""],["Дизайн — френч / обратный френч / лунки / кошачий глаз","600 ₽","",[],""],["Дизайн с использованием декора","от 50 ₽","Наклейки, стразы, фольга, конфетти, слюда, втирка, глиттер и др. · 1 ноготь",[],""],["Художественная роспись / аэрография","от 100 ₽","1 ноготь",[],""],["Стразы","от 10 ₽","1 шт.",[],""],["Парафинотерапия рук","1 500 ₽","",[],""]],"Педикюр":[["Педикюр","2 500 ₽","Аппаратный, обрезной или комбинированный",[],""],["Экспресс-педикюр","1 700 ₽","",[],""],["SPA-педикюр OPI без покрытия","3 200 ₽","Педикюр + скраб + пилинг + маска + лосьон + массаж",[],""],["Пилинг стоп","500 ₽","",[],""],["Массаж стоп","600 ₽","",[],""],["Полировка ногтей","400 ₽","",[],""],["Мужской педикюр гигиенический","3 000 ₽","",[],""],["Подростковый педикюр","1 700 ₽","До 12 лет",[],""],["Педикюр с покрытием гель-лаком OPI / Luxio / EMI","3 300 ₽","",[],""],["Экспресс-педикюр с покрытием гель-лаком OPI / Luxio / EMI","2 700 ₽","",[],""],["Педикюр с покрытием лаком OPI / EMI / CND Vinylux","2 900 ₽","",[],""],["Экспресс-педикюр с покрытием лаком OPI / EMI / CND Vinylux","2 500 ₽","",[],""],["Педикюр с лечебным покрытием","2 400 ₽","",[],""],["Экспресс-педикюр с лечебным покрытием","2 200 ₽","",[],""],["Покрытие ногтей гель-лаком без педикюра","1 200 ₽","",[],""],["Покрытие ногтей лаком без педикюра","1 000 ₽","Основа + лак + сушка",[],""],["Снятие гель-лака","","",[["При педикюре","400 ₽"],["Без педикюра","800 ₽"]],""],["Снятие лака","100 ₽","При педикюре",[],""],["Ремонт натурального ногтя","","",[["При педикюре","от 200 ₽"],["Без педикюра","от 300 ₽"]],""],["Дизайн — френч / обратный френч / лунки / кошачий глаз","400 ₽","",[],""],["Дизайн с использованием декора","от 50 ₽","Наклейки, стразы, фольга, конфетти, слюда, втирка, глиттер и др. · 1 ноготь",[],""],["Художественная роспись / аэрография","от 100 ₽","1 ноготь",[],""],["Стразы","от 10 ₽","1 шт.",[],""]],"Наращивание":[["Наращивание ногтей гелем","","",[["С цветным верхним покрытием","3 000 ₽"],["Без цветного покрытия","2 500 ₽"]],"Цены для длины 2/3 ногтевой пластины; длинные ногти +30%."],["Коррекция ногтей гелем","","",[["С цветным верхним покрытием","2 700 ₽"],["Без цветного покрытия","2 000 ₽"]],"Цены для длины 2/3 ногтевой пластины; длинные ногти +30%."],["Снятие искусственных ногтей","1 000 ₽","Без маникюра",[],""],["Ремонт 1 ногтя","","",[["При коррекции","200 ₽"],["Вне коррекции","250 ₽"]],""],["Наращивание 1 ногтя","","",[["При коррекции","250 ₽"],["Вне коррекции","300 ₽"]],""],["Дизайн — френч / обратный френч / лунки / кошачий глаз","500 ₽","",[],""],["Дизайн с использованием декора","от 50 ₽","Наклейки, стразы, фольга, конфетти, слюда, втирка, глиттер и др. · 1 ноготь",[],""],["Художественная роспись / аэрография","от 100 ₽","1 ноготь",[],""],["Стразы","от 10 ₽","1 шт.",[],""]]};
  const SERVICE_CATEGORIES=Object.keys(SERVICE_DATA);
  const TEAM_MASTERS=[
    {id:'master1',name:'Мастер 1',role:'Косметолог'},
    {id:'master2',name:'Мастер 2',role:'Мастер маникюра'},
    {id:'master3',name:'Мастер 3',role:'Мастер волос'},
    {id:'master4',name:'Мастер 4',role:'Мастер'}
  ];
  const TEAM_AVATAR='<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="23" r="11" fill="currentColor"></circle><path d="M12 56c2.7-11.4 10-17 20-17s17.3 5.6 20 17" fill="currentColor"></path></svg>';

  const font=document.createElement('link');
  font.rel='stylesheet';
  font.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Manrope:wght@400;500;600;700&display=swap';
  document.head.appendChild(font);

  const css=document.createElement('style');
  css.id='stluxe-desktop-v1-style';
  css.textContent=`
    @media(min-width:768px){
      html,body{margin:0!important;padding:0!important;background:#fff!important;color:#17171a!important;overflow-x:hidden}
      body>main.shell,body>.booking-island{display:none!important}

      #stluxe-desktop-v1{
        --purple:#5b0b6f;
        --purple2:#6d177f;
        --ink:#17171a;
        --muted:#6d6b73;
        --line:#ecebee;
        display:block;
        width:100%;
        min-height:100vh;
        background:#fff;
        color:var(--ink);
        font-family:"Manrope",Arial,sans-serif;
        -webkit-font-smoothing:antialiased;
      }
      #stluxe-desktop-v1 *{box-sizing:border-box}
      #stluxe-desktop-v1 a,#stluxe-desktop-v1 button{font:inherit;color:inherit}
      #stluxe-desktop-v1 a{text-decoration:none}
      #stluxe-desktop-v1 button{cursor:pointer}

      .std-header{
        height:98px;
        width:100%;
        display:flex;
        align-items:center;
        position:relative;
        z-index:20;
        padding:0 46px;
        border-bottom:0;
        background:
          radial-gradient(380px 160px at 12% 0%,rgba(143,85,181,.12),transparent 72%),
          linear-gradient(180deg,#2a2630 0%,#28242d 100%);
      }
      .std-nav{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        display:flex;
        align-items:center;
        gap:38px;
        white-space:nowrap;
      }
      .std-nav a{
        font-size:16px;
        font-weight:600;
        line-height:1;
        color:#f7f3f8!important;
        text-shadow:0 1px 10px rgba(0,0,0,.18);
        transition:opacity .18s ease;
      }
      .std-nav a:hover{opacity:.55}
      .std-phone{
        margin-left:auto;
        width:auto;
        height:54px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:12px;
        border-radius:0;
        background:transparent;
        color:#fff!important;
        box-shadow:none;
        font-size:21px;
        font-weight:800;
        letter-spacing:.01em;
        text-shadow:none;
      }
      .std-phone svg{width:23px;height:23px;flex:0 0 23px}

      .std-hero{
        display:grid;
        grid-template-columns:50% 50%;
        height:calc(100svh - 81px);
        min-height:690px;
        margin:-17px 0 0;
        background:#242127;
      }
      .std-hero-copy{
        min-width:0;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:0 34px 40px;
        background:
          radial-gradient(520px 360px at 8% 86%,rgba(111,61,130,.15),transparent 72%),
          radial-gradient(520px 360px at 98% 10%,rgba(143,85,181,.20),transparent 68%),
          linear-gradient(180deg,#27232b 0%,#242127 100%);
      }
      .std-copy-inner{
        width:min(100%,520px);
        transform:translateY(-4px);
        text-align:center;
      }
      .std-logo{
        margin:0;
        font-family:"Cormorant Garamond",Georgia,serif;
        font-size:78px;
        line-height:.88;
        font-weight:500;
        letter-spacing:.18em;
        text-indent:.18em;
        text-transform:uppercase;
        text-align:center;
        color:#f7f3f8;
      }
      .std-logo-sub{
        margin:15px 0 45px;
        font-family:"Manrope",Arial,sans-serif;
        font-size:13px;
        line-height:1;
        font-weight:500;
        letter-spacing:.38em;
        text-indent:.38em;
        text-align:center;
        color:#b9b2bd;
        text-transform:uppercase;
        white-space:nowrap;
      }
      .std-tagline{
        margin:0 0 42px;
        max-width:500px;
        font-family:"Manrope",Arial,sans-serif;
        font-size:27px;
        line-height:1.38;
        font-weight:400;
        letter-spacing:0;
        color:#f1edf3;
        text-align:center;
        margin-left:auto;
        margin-right:auto;
      }

      .std-meta{
        display:grid;
        grid-template-columns:1fr 1px 1.33fr;
        gap:24px;
        align-items:center;
        justify-content:center;
        margin-bottom:40px;
      }
      .std-meta-divider{width:1px;height:65px;background:rgba(255,255,255,.15)}
      .std-meta-item{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:15px;
        min-width:0;
      }
      .std-meta-icon{
        width:64px;
        height:64px;
        flex:0 0 64px;
        display:grid;
        place-items:center;
        border:1px solid rgba(255,255,255,.18);
        border-radius:50%;
        background:rgba(255,255,255,.045);
        color:#f7f3f8;
      }
      .std-meta-icon svg{width:28px;height:28px}
      .std-meta-text{
        min-width:0;
        font-size:17px;
        line-height:1.45;
        letter-spacing:-.025em;
        color:#ddd6e0;
        text-align:center;
      }
      .std-status-main{display:block;color:#a45e64;font-weight:500}
      .std-status-sub{display:block;color:#d3ccd6}
      .std-address{display:block;color:#eee9f0}

      .std-actions{display:grid;gap:20px}
      .std-btn{
        width:100%;
        height:73px;
        border-radius:10px;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:22px;
        font-size:27px;
        font-weight:700;
        border:1px solid rgba(255,255,255,.20);
        background:rgba(255,255,255,.035);
        color:#f7f3f8;
        transition:transform .15s ease,box-shadow .15s ease,opacity .15s ease;
      }
      .std-btn:not(.std-btn-primary){color:#fff!important}
      .std-sparkles{color:#fff!important}
      .std-btn:hover{transform:translateY(-1px)}
      .std-btn:active{transform:translateY(0)}
      .std-btn-primary{
        position:relative;
        overflow:hidden;
        border-color:transparent;
        color:#fff!important;
        background:linear-gradient(105deg,#5e2f70 0%,#6f3d82 55%,#5e2f70 100%);
        box-shadow:0 5px 16px rgba(86,16,105,.12);
      }
      .std-btn-primary:after{
        content:'';
        position:absolute;
        top:-35%;
        bottom:-35%;
        left:-34%;
        width:24%;
        pointer-events:none;
        background:linear-gradient(90deg,transparent,rgba(255,255,255,.34),transparent);
        transform:skewX(-22deg);
        animation:stdBookShine 4.2s ease-in-out infinite;
      }
      @keyframes stdBookShine{
        0%,68%{left:-34%}
        100%{left:132%}
      }
      @media(prefers-reduced-motion:reduce){.std-btn-primary:after{animation:none!important}}
      .std-btn-primary:hover{box-shadow:0 8px 20px rgba(86,16,105,.18)}
      .std-btn svg{width:28px;height:28px;flex:0 0 28px}
      .std-sparkles{
        width:29px;height:29px;position:relative;display:inline-grid;place-items:center;font-size:29px;line-height:1
      }

      .std-hero-photo{
        position:relative;
        min-width:0;
        height:100%;
        margin:0;
        overflow:hidden;
        background:#eee;
      }
      .std-hero-photo img{
        width:100%;
        height:100%;
        object-fit:cover;
        object-position:center center;
        display:block;
      }

      .std-portfolio{
        position:relative;
        overflow:hidden;
        min-height:auto;
        padding:46px 42px 46px;
        background:
          radial-gradient(520px 360px at -7% 108%,rgba(139,92,184,.115) 0%,rgba(139,92,184,.072) 30%,rgba(139,92,184,.028) 52%,transparent 74%),
          radial-gradient(520px 350px at 107% -8%,rgba(139,92,184,.105) 0%,rgba(139,92,184,.064) 30%,rgba(139,92,184,.024) 52%,transparent 74%),
          radial-gradient(900px 460px at 50% 50%,rgba(255,255,255,.52),transparent 78%),
          #fbfbfb;
        color:#17171a;
      }
      .std-portfolio:before,
      .std-portfolio:after{
        content:'';
        position:absolute;
        pointer-events:none;
        border-radius:50%;
        z-index:0;
        filter:blur(28px);
      }
      .std-portfolio:before{
        width:560px;
        height:420px;
        left:-210px;
        bottom:-165px;
        background:radial-gradient(circle,rgba(141,88,188,.22) 0%,rgba(141,88,188,.12) 38%,rgba(141,88,188,.04) 62%,transparent 78%);
      }
      .std-portfolio:after{
        width:560px;
        height:420px;
        right:-210px;
        top:-165px;
        background:radial-gradient(circle,rgba(141,88,188,.20) 0%,rgba(141,88,188,.11) 38%,rgba(141,88,188,.035) 62%,transparent 78%);
      }
      .std-portfolio-inner{
        position:relative;
        z-index:1;
        width:min(100%,1452px);
        max-width:none;
        margin:0 auto;
      }
      .std-portfolio-head{
        width:auto;
        margin:0;
        padding:0;
        text-align:center;
      }
      .std-portfolio-kicker{
        margin:0;
        font:600 12px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.31em;
        text-transform:uppercase;
        color:#66636a;
      }
      .std-portfolio-title{
        margin:20px 0 0;
        font:500 76px/.92 "Cormorant Garamond",Georgia,serif;
        letter-spacing:-.045em;
        color:#171518;
      }
      .std-portfolio-copy{
        width:min(100%,760px);
        max-width:760px;
        margin:20px auto 0;
        font:400 17px/1.45 "Manrope",Arial,sans-serif;
        color:#77747b;
        white-space:normal;
        text-align:center;
      }
      .std-portfolio-grid{
        display:grid;
        grid-template-columns:330px repeat(3,minmax(0,1fr));
        grid-template-rows:276px 304px;
        gap:12px;
        margin-top:28px;
        padding:0;
      }
      .std-work{
        border:0;
        padding:0;
        border-radius:13px;
        overflow:hidden;
        background:#e7e4e8;
        box-shadow:none;
      }
      .std-work:first-child{grid-row:1 / span 2}
      .std-work img{
        width:100%;
        height:100%;
        object-fit:cover;
        display:block;
        transition:transform .35s cubic-bezier(.2,.7,.2,1);
      }
      .std-work:hover img{transform:scale(1.018)}
      .std-portfolio-more{
        width:516px;
        max-width:calc(100% - 84px);
        height:76px;
        margin:42px auto 0;
        padding:0 28px;
        border:1px solid #d8cbe8;
        border-radius:13px;
        background:linear-gradient(180deg,#f6f0fc 0%,#efe5fa 100%);
        color:#2a2530;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:18px;
        font:500 18px/1 "Manrope",Arial,sans-serif;
        position:static;
        left:auto;
        box-shadow:0 8px 22px rgba(120,84,156,.08);
        transition:background .18s ease,transform .18s ease,box-shadow .18s ease;
      }
      .std-portfolio-more:hover{
        background:linear-gradient(180deg,#f8f3fd 0%,#f2e8fb 100%);
        transform:translateY(-1px);
        box-shadow:0 10px 26px rgba(120,84,156,.12);
      }

      .std-services{
        position:relative;
        overflow:hidden;
        min-height:900px;
        padding:54px 72px 58px;
        background:
          radial-gradient(420px 310px at 108% 8%,rgba(143,85,181,.19),transparent 67%),
          radial-gradient(300px 230px at -14% 88%,rgba(111,61,130,.10),transparent 72%),
          #242127;
        color:#f7f3f8;
      }
      .std-services-inner{
        width:min(100%,1215px);
        margin:0 auto;
        display:grid;
        grid-template-columns:minmax(0,.98fr) 1px minmax(0,1.12fr);
        gap:58px;
        align-items:start;
      }
      .std-services-divider{
        width:1px;
        min-height:770px;
        background:rgba(255,255,255,.16);
      }
      .std-services-left{min-width:0}
      .std-services-right{
        min-width:0;
        overflow:hidden;
      }
      .std-services-kicker{
        margin:0;
        font:600 12px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.31em;
        text-transform:uppercase;
        color:#bcb5c0;
      }
      .std-services-title{
        margin:17px 0 36px;
        font:500 67px/.92 "Cormorant Garamond",Georgia,serif;
        letter-spacing:-.035em;
        color:#fff;
      }
      .std-price-wrap{
        width:min(100%,530px);
      }
      .std-price-card{
        position:relative;
        width:100%;
        height:auto;
        border-radius:9px;
        overflow:hidden;
        background:#f0ece7;
        box-shadow:0 18px 50px rgba(0,0,0,.17);
      }
      .std-price-card img{
        width:100%;
        height:auto;
        display:block;
        object-fit:contain;
        background:#f4f0ea;
      }
      .std-price-count{
        position:absolute;
        top:14px;
        right:17px;
        z-index:2;
        padding:4px 8px;
        border-radius:999px;
        background:rgba(248,245,240,.82);
        color:#57515c;
        font:600 10px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.08em;
        backdrop-filter:blur(8px);
      }
      .std-price-arrow{
        position:absolute;
        z-index:3;
        top:50%;
        transform:translateY(-50%);
        width:44px;
        height:64px;
        border:0;
        background:transparent;
        color:#17151a!important;
        font:300 47px/1 Arial,sans-serif!important;
        text-shadow:0 1px 8px rgba(255,255,255,.55);
      }
      .std-price-prev{left:0}
      .std-price-next{right:0}
      .std-price-dots{
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:11px;
        margin-top:23px;
      }
      .std-price-dot{
        width:10px;
        height:10px;
        padding:0;
        border:0;
        border-radius:50%;
        background:rgba(255,255,255,.22);
      }
      .std-price-dot.active{
        background:#9749e3;
        box-shadow:0 0 13px rgba(151,73,227,.34);
      }
      .std-price-open{
        display:block;
        width:min(100%,390px);
        height:60px;
        margin:30px auto 0;
        border:1px solid rgba(190,139,211,.30);
        border-radius:999px;
        background:linear-gradient(135deg,#8d45b4,#77369d);
        color:#fff!important;
        box-shadow:0 10px 28px rgba(82,39,100,.25);
        font:500 16px/1 "Manrope",Arial,sans-serif;
        transition:background .18s ease,box-shadow .18s ease,transform .18s ease;
      }
      .std-price-open:hover{
        background:linear-gradient(135deg,#9550ba,#7e3ba2);
        box-shadow:0 12px 30px rgba(82,39,100,.30);
        transform:translateY(-1px);
      }

      .std-service-tabs{
        display:flex;
        flex-wrap:nowrap;
        align-items:center;
        gap:12px;
        width:calc(100% + max(0px,(100vw - 1215px)/2));
        margin:0 0 31px;
        padding:2px 44px 9px 10px;
        overflow-x:auto;
        overflow-y:hidden;
        overscroll-behavior-inline:contain;
        scrollbar-width:none;
        -webkit-overflow-scrolling:touch;
        cursor:grab;
        user-select:none;
        -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 25px,#000 calc(100% - 44px),transparent 100%);
        mask-image:linear-gradient(90deg,transparent 0,#000 25px,#000 calc(100% - 44px),transparent 100%);
      }
      .std-service-tabs::-webkit-scrollbar{display:none}
      .std-service-tabs.dragging{cursor:grabbing}
      .std-service-tab{
        min-height:43px;
        padding:0 24px;
        border:1px solid rgba(255,255,255,.16);
        border-radius:999px;
        background:transparent;
        color:#ded8e2!important;
        font:500 14px/1 "Manrope",Arial,sans-serif;
        white-space:nowrap;
        transition:background .18s ease,border-color .18s ease,color .18s ease,box-shadow .18s ease;
      }
      .std-service-tab.active{
        border-color:#6f3d82;
        background:#6f3d82;
        color:#fff!important;
        box-shadow:0 5px 20px rgba(111,61,130,.20);
      }
      .std-service-list{
        border-top:1px solid rgba(255,255,255,.12);
      }
      .std-service-row{
        padding:23px 3px 23px 5px;
        border-bottom:1px solid rgba(255,255,255,.13);
      }
      .std-service-head{
        display:grid;
        grid-template-columns:minmax(0,1fr) auto;
        gap:24px;
        align-items:baseline;
      }
      .std-service-name{
        font:500 27px/1.05 "Cormorant Garamond",Georgia,serif;
        color:#f6f2f7;
      }
      .std-service-price{
        font:600 27px/1 "Cormorant Garamond",Georgia,serif;
        color:#f7f3f8;
        white-space:nowrap;
      }
      .std-service-detail{
        display:block;
        margin-top:9px;
        font:400 15.5px/1.45 "Manrope",Arial,sans-serif;
        color:#b9b2bd;
      }
      .std-service-variants{
        display:grid;
        gap:8px;
        margin-top:13px;
      }
      .std-service-variant{
        display:grid;
        grid-template-columns:minmax(0,1fr) auto;
        gap:18px;
        align-items:baseline;
        font:400 15.5px/1.4 "Manrope",Arial,sans-serif;
        color:#c9c1cc;
      }
      .std-service-variant b{
        font:600 23px/1 "Cormorant Garamond",Georgia,serif;
        color:#f7f3f8;
        white-space:nowrap;
      }
      .std-service-note{
        display:block;
        margin-top:10px;
        font:400 13px/1.5 "Manrope",Arial,sans-serif;
        color:#aaa2ad;
      }
      .std-service-more{
        width:100%;
        height:57px;
        margin-top:20px;
        border:1px solid rgba(255,255,255,.15);
        border-radius:9px;
        background:rgba(255,255,255,.025);
        color:#e8e2ea!important;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:13px;
        font:500 14px/1 "Manrope",Arial,sans-serif;
      }
      .std-service-more:hover{background:rgba(255,255,255,.055)}
      .std-services-count{
        margin-top:17px;
        text-align:right;
        font:500 11px/1 "Manrope",Arial,sans-serif;
        color:#77707c;
        letter-spacing:.06em;
      }

      .std-price-viewer{
        position:fixed;
        inset:0;
        z-index:340;
        display:none;
        align-items:center;
        justify-content:center;
        padding:42px 88px 60px;
        background:rgba(16,14,18,.97);
        backdrop-filter:blur(10px);
      }
      .std-price-viewer.open{display:flex}
      .std-price-viewer-stage{
        position:relative;
        width:min(100%,1120px);
        height:min(86vh,820px);
        display:grid;
        place-items:center;
      }
      .std-price-viewer-img{
        max-width:100%;
        max-height:100%;
        width:auto;
        height:auto;
        object-fit:contain;
        border-radius:8px;
        box-shadow:0 24px 80px rgba(0,0,0,.35);
      }
      .std-price-viewer-close{
        position:absolute;
        top:22px;
        right:27px;
        width:46px;
        height:46px;
        border:1px solid rgba(255,255,255,.17);
        border-radius:50%;
        background:rgba(255,255,255,.07);
        color:#fff!important;
        font-size:27px;
        line-height:1;
      }
      .std-price-viewer-nav{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        width:54px;
        height:72px;
        border:0;
        background:transparent;
        color:#fff!important;
        font:300 54px/1 Arial,sans-serif!important;
      }
      .std-price-viewer-prev{left:-70px}
      .std-price-viewer-next{right:-70px}
      .std-price-viewer-count{
        position:absolute;
        left:50%;
        bottom:-37px;
        transform:translateX(-50%);
        color:rgba(255,255,255,.72);
        font:500 12px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.08em;
      }

      .std-about{
        position:relative;
        overflow:hidden;
        min-height:790px;
        padding:92px 64px 96px;
        background:
          radial-gradient(470px 340px at 108% 14%,rgba(150,79,190,.135),transparent 68%),
          radial-gradient(340px 250px at -12% 92%,rgba(157,91,194,.055),transparent 73%),
          #f7f7f8;
        color:#211e23;
      }
      .std-about-inner{
        width:min(100%,1405px);
        margin:0 auto;
      }
      .std-about-kicker{
        margin:0 0 27px;
        font:600 11px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.29em;
        text-transform:uppercase;
        color:#6f6971;
      }
      .std-about-grid{
        display:grid;
        grid-template-columns:minmax(0,635px) minmax(0,1fr);
        gap:44px;
        align-items:center;
      }
      .std-about-visual{
        position:relative;
        min-width:0;
        height:556px;
        border-radius:29px;
        overflow:hidden;
        background:#342338;
        box-shadow:0 18px 46px rgba(55,40,62,.10);
      }
      .std-about-visual:after{
        content:'';
        position:absolute;
        inset:0;
        pointer-events:none;
        background:radial-gradient(340px 230px at 88% 12%,rgba(189,121,222,.18),transparent 70%);
      }
      .std-about-visual img{
        width:100%;
        height:100%;
        display:block;
        object-fit:cover;
        object-position:center center;
        filter:brightness(1.17) saturate(1.08) contrast(.98);
      }
      .std-about-rating{
        position:absolute;
        z-index:2;
        left:29px;
        bottom:29px;
        height:72px;
        padding:0 25px;
        border:1px solid rgba(255,255,255,.25);
        border-radius:999px;
        background:rgba(62,35,72,.74);
        backdrop-filter:blur(12px);
        display:flex;
        align-items:center;
        gap:13px;
        color:#fff;
        box-shadow:0 8px 22px rgba(26,18,29,.16);
      }
      .std-about-rating-star{
        color:#f0c45d;
        font-size:25px;
        line-height:1;
      }
      .std-about-rating strong{
        font:600 25px/1 "Manrope",Arial,sans-serif;
        color:#fff;
      }
      .std-about-rating span{
        font:500 15px/1 "Manrope",Arial,sans-serif;
        color:rgba(255,255,255,.72);
        white-space:nowrap;
      }
      .std-about-copy{
        min-width:0;
        padding:6px 0 0;
      }
      .std-about-lead{
        margin:0;
        max-width:700px;
        font:500 55px/1.08 "Cormorant Garamond",Georgia,serif;
        letter-spacing:-.035em;
        color:#211e23;
      }
      .std-about-text{
        margin:36px 0 0;
        max-width:710px;
        font:400 20px/1.5 "Manrope",Arial,sans-serif;
        color:#5c565f;
      }
      .std-about-facts{
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:20px;
        margin-top:24px;
      }
      .std-about-fact{
        min-height:136px;
        padding:20px 18px;
        border:1px solid rgba(75,58,81,.09);
        border-radius:19px;
        background:#dfdce2;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        font:500 17px/1.35 "Manrope",Arial,sans-serif;
        color:#2c282e;
        box-shadow:none;
      }

      .std-team{
        position:relative;
        overflow:hidden;
        min-height:610px;
        padding:58px 49px 44px;
        background:
          radial-gradient(420px 310px at 108% 8%,rgba(143,85,181,.19),transparent 67%),
          radial-gradient(300px 230px at -14% 88%,rgba(111,61,130,.10),transparent 72%),
          #242127;
        color:#f7f3f8;
      }
      .std-team-inner{
        width:min(100%,1335px);
        margin:0 auto;
      }
      .std-team-kicker{
        margin:0;
        font:600 13px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.31em;
        text-transform:uppercase;
        color:#aaa2ad;
      }
      .std-team-title{
        margin:14px 0 0;
        font:500 52px/.92 "Cormorant Garamond",Georgia,serif;
        letter-spacing:-.035em;
        color:#f7f3f8;
      }
      .std-team-subtitle{
        margin:16px 0 0;
        font:400 14px/1.4 "Manrope",Arial,sans-serif;
        color:#aaa2ad;
      }
      .std-team-window{
        position:relative;
        width:100%;
        margin-top:32px;
        overflow:hidden;
      }
      .std-team-track{
        display:flex;
        align-items:flex-start;
        gap:58px;
        width:max-content;
        min-width:100%;
        overflow-x:auto;
        padding:0 0 10px;
        scrollbar-width:none;
        overscroll-behavior-inline:contain;
        -webkit-overflow-scrolling:touch;
        scroll-snap-type:x proximity;
      }
      .std-team-track::-webkit-scrollbar{display:none}
      .std-master{
        flex:0 0 230px;
        scroll-snap-align:start;
        margin:0;
        text-align:center;
        color:#f7f3f8;
      }
      .std-master-avatar{
        width:224px;
        height:224px;
        margin:0 auto;
        border-radius:50%;
        display:grid;
        place-items:center;
        color:#cbbfd0;
        background:
          radial-gradient(circle at 42% 30%,rgba(255,255,255,.07),transparent 45%),
          linear-gradient(145deg,#3c3641,#302b34);
        border:1px solid rgba(255,255,255,.085);
        box-shadow:inset 0 1px 0 rgba(255,255,255,.035),0 16px 42px rgba(0,0,0,.10);
      }
      .std-master-avatar svg{
        width:64px;
        height:64px;
        opacity:.92;
      }
      .std-master-name{
        display:block;
        margin-top:18px;
        font:500 27px/1 "Cormorant Garamond",Georgia,serif;
        color:#f7f3f8;
      }
      .std-master-role{
        display:block;
        margin-top:9px;
        font:400 12px/1.3 "Manrope",Arial,sans-serif;
        color:#b9b2bd;
      }
      .std-team-hint{
        margin-top:37px;
        display:flex;
        align-items:center;
        justify-content:flex-end;
        gap:12px;
        font:500 10px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.22em;
        text-transform:uppercase;
        color:#aaa2ad;
      }
      .std-team-hint span{
        font-size:22px;
        line-height:1;
        letter-spacing:0;
        transform:translateY(-1px);
      }

      .std-gallery{
        position:fixed;
        inset:0;
        z-index:300;
        display:none;
        align-items:center;
        justify-content:center;
        padding:68px 72px 74px;
        background:rgba(18,16,20,.96);
        backdrop-filter:blur(9px);
      }
      .std-gallery.open{display:flex}
      .std-gallery-close{
        position:absolute;
        top:24px;
        right:28px;
        width:46px;
        height:46px;
        border:1px solid rgba(255,255,255,.17);
        border-radius:50%;
        background:rgba(255,255,255,.07);
        color:#fff!important;
        font-size:27px;
        line-height:1;
      }
      .std-gallery-stage{
        position:relative;
        width:min(100%,1120px);
        height:min(74vh,720px);
        display:grid;
        place-items:center;
      }
      .std-gallery-image{
        max-width:100%;
        max-height:100%;
        width:auto;
        height:auto;
        object-fit:contain;
        border-radius:12px;
        box-shadow:0 24px 80px rgba(0,0,0,.35);
      }
      .std-gallery-nav{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        width:52px;
        height:70px;
        border:0;
        background:transparent;
        color:#fff!important;
        font:300 52px/1 Arial,sans-serif!important;
        opacity:.82;
      }
      .std-gallery-nav:hover{opacity:1}
      .std-gallery-prev{left:-68px}
      .std-gallery-next{right:-68px}
      .std-gallery-count{
        position:absolute;
        left:50%;
        bottom:-39px;
        transform:translateX(-50%);
        color:rgba(255,255,255,.72);
        font:500 12px/1 "Manrope",Arial,sans-serif;
        letter-spacing:.08em;
      }


      /* Compact team override */
      #stluxeDesktopTeam.std-team{
        min-height:0!important;
        padding:46px 70px 38px!important;
      }
      #stluxeDesktopTeam .std-team-inner{
        width:min(100%,1120px)!important;
      }
      #stluxeDesktopTeam .std-team-kicker{
        font-size:10px!important;
      }
      #stluxeDesktopTeam .std-team-title{
        margin-top:12px!important;
        font-size:46px!important;
      }
      #stluxeDesktopTeam .std-team-subtitle{
        margin-top:13px!important;
        font-size:13px!important;
      }
      #stluxeDesktopTeam .std-team-window{
        margin-top:26px!important;
      }
      #stluxeDesktopTeam .std-team-track{
        width:100%!important;
        min-width:0!important;
        gap:48px!important;
        justify-content:space-between!important;
        overflow-x:auto!important;
      }
      #stluxeDesktopTeam .std-master{
        flex:0 0 210px!important;
      }
      #stluxeDesktopTeam .std-master-avatar{
        width:200px!important;
        height:200px!important;
      }
      #stluxeDesktopTeam .std-master-avatar svg{
        width:58px!important;
        height:58px!important;
      }
      #stluxeDesktopTeam .std-master-name{
        margin-top:14px!important;
        font-size:25px!important;
      }
      #stluxeDesktopTeam .std-master-role{
        margin-top:7px!important;
        font-size:11px!important;
      }
      #stluxeDesktopTeam .std-team-hint{
        margin-top:18px!important;
        font-size:9px!important;
      }
      #stluxeDesktopTeam .std-team-hint span{
        font-size:19px!important;
      }

      @media(max-width:1180px){
        .std-header{padding:0 30px}
        .std-nav{gap:22px}
        .std-phone{width:auto}
        .std-hero{grid-template-columns:50% 50%}
        .std-hero-copy{padding-inline:34px}
        .std-logo{font-size:64px}
        .std-logo-sub{font-size:11px;margin-left:0}
        .std-tagline{font-size:24px}
        .std-meta{gap:14px}
        .std-meta-icon{width:54px;height:54px;flex-basis:54px}
        .std-meta-text{font-size:15px}
      }
    }
  `;
  document.head.appendChild(css);

  const root=document.createElement('div');
  root.id='stluxe-desktop-v1';
  root.innerHTML=`
    <header class="std-header">
      <nav class="std-nav" aria-label="Основная навигация">
        <a href="#stluxeDesktopServices">Услуги</a>
        <a href="#stluxeDesktopPortfolio">Наши работы</a>
        <a href="#stluxeDesktopAbout">О нас</a>
        <a href="#stluxeDesktopReviews">Отзывы</a>
        <a href="#stluxeDesktopContacts">Контакты</a>
      </nav>
      <a class="std-phone" href="tel:${PHONE}" aria-label="Позвонить в STLuxe">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39Z" fill="currentColor"/></svg>
        <span>+7 916 355-22-22</span>
      </a>
    </header>

    <section class="std-hero" id="stluxeDesktopTop" aria-label="STLuxe">
      <div class="std-hero-copy">
        <div class="std-copy-inner">
          <h1 class="std-logo">STLUXE</h1>
          <div class="std-logo-sub">салон красоты</div>

          <p class="std-tagline">Место, где стиль становится<br>вашей естественной красотой.</p>

          <div class="std-meta">
            <div class="std-meta-item">
              <span class="std-meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.7v4.8l3 1.8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
              <span class="std-meta-text"><span class="std-status-main" id="stdStatusMain">Закрыто</span><span class="std-status-sub" id="stdStatusSub">до 10:00</span></span>
            </div>

            <span class="std-meta-divider" aria-hidden="true"></span>

            <a class="std-meta-item" href="https://yandex.ru/maps/?text=%D0%98%D0%B2%D0%B0%D0%BD%D1%82%D0%B5%D0%B5%D0%B2%D0%BA%D0%B0%2C%20%D1%83%D0%BB.%20%D0%9F%D0%BE%D0%B1%D0%B5%D0%B4%D1%8B%2C%2016%20STLuxe" target="_blank" rel="noopener">
              <span class="std-meta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.1" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>
              </span>
              <span class="std-meta-text std-address">Ивантеевка,<br>ул. Победы, 16</span>
            </a>
          </div>

          <div class="std-actions">
            <button class="std-btn std-btn-primary" id="stdBookBtn" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="6" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 3.8v4.4M16 3.8v4.4M4 10h16M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17h.01M12 17h.01M16 17h.01" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              <span>Записаться</span>
            </button>
            <a class="std-btn" href="#stluxeDesktopPortfolio">
              <span class="std-sparkles" aria-hidden="true">✦</span>
              <span>Смотреть работы</span>
            </a>
          </div>
        </div>
      </div>

      <div class="std-hero-photo">
        <img src="stluxe_reception.webp" alt="Ресепшен STLuxe">
      </div>
    </section>

    <section class="std-portfolio" id="stluxeDesktopPortfolio" aria-labelledby="stluxeDesktopPortfolioTitle">
      <div class="std-portfolio-inner">
        <div class="std-portfolio-head">
          <p class="std-portfolio-kicker">Портфолио</p>
          <h2 class="std-portfolio-title" id="stluxeDesktopPortfolioTitle">Наши работы</h2>
          <p class="std-portfolio-copy">Вдохновляйтесь реальными результатами наших мастеров<br>и выбирайте свой идеальный образ.</p>
        </div>
        <div class="std-portfolio-grid">
          ${PORTFOLIO.map((item,i)=>`<button class="std-work" type="button" data-portfolio-index="${i}" aria-label="Открыть фотографию"><img src="${item.src}" alt="${item.alt}" loading="${i<4?'eager':'lazy'}"></button>`).join('')}
        </div>
        <button class="std-portfolio-more" id="stdOpenGallery" type="button">Открыть галерею <span aria-hidden="true">→</span></button>
      </div>
    </section>

    <section class="std-services" id="stluxeDesktopServices" aria-labelledby="stdServicesTitle">
      <div class="std-services-inner">
        <div class="std-services-left">
          <p class="std-services-kicker">Услуги</p>
          <h2 class="std-services-title" id="stdServicesTitle">Наши услуги</h2>
          <div class="std-price-wrap">
            <div class="std-price-card">
              <img id="stdPriceImage" src="${PRICE_PAGES[0]}" alt="Фото-прайс STLuxe, страница 1">
              <span class="std-price-count" id="stdPriceCount">1 / ${PRICE_PAGES.length}</span>
              <button class="std-price-arrow std-price-prev" id="stdPricePrev" type="button" aria-label="Предыдущая страница">‹</button>
              <button class="std-price-arrow std-price-next" id="stdPriceNext" type="button" aria-label="Следующая страница">›</button>
            </div>
            <div class="std-price-dots" id="stdPriceDots"></div>
            <button class="std-price-open" id="stdPriceOpen" type="button">Открыть фото-прайс</button>
          </div>
        </div>

        <span class="std-services-divider" aria-hidden="true"></span>

        <div class="std-services-right">
          <div class="std-service-tabs" id="stdServiceTabs"></div>
          <div class="std-service-list" id="stdServiceList"></div>
          <button class="std-service-more" id="stdServiceMore" type="button"><span id="stdServiceMoreText"></span><span id="stdServiceMoreArrow" aria-hidden="true">↓</span></button>
          <div class="std-services-count" id="stdServicesCount"></div>
        </div>
      </div>
    </section>

    <section class="std-about" id="stluxeDesktopAbout" aria-labelledby="stdAboutTitle">
      <div class="std-about-inner">
        <p class="std-about-kicker">О нас</p>
        <div class="std-about-grid">
          <div class="std-about-visual">
            <img src="assets/images/stluxe-about-logo.webp" alt="STLuxe" loading="lazy">
            <div class="std-about-rating">
              <span class="std-about-rating-star" aria-hidden="true">★</span>
              <strong>4,9</strong>
              <span>рейтинг салона</span>
            </div>
          </div>
          <div class="std-about-copy">
            <h2 class="std-about-lead" id="stdAboutTitle">Мы сделали STLuxe местом,<br>где можно спокойно доверить<br>свою красоту мастеру.</h2>
            <p class="std-about-text">Нам важно, чтобы вам было комфортно на каждом этапе: мы внимательно относимся к пожеланиям, ценим аккуратную работу и собираем в одном пространстве мастеров разных направлений.</p>
            <div class="std-about-facts">
              <div class="std-about-fact">Мастера разных<br>направлений</div>
              <div class="std-about-fact">Комфортная<br>атмосфера</div>
              <div class="std-about-fact">Индивидуальный<br>подход</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="std-team" id="stluxeDesktopTeam" aria-labelledby="stdTeamTitle">
      <div class="std-team-inner">
        <p class="std-team-kicker">Наша команда</p>
        <h2 class="std-team-title" id="stdTeamTitle">Мастера своего дела</h2>
        <p class="std-team-subtitle">Профессионалы, которые заботятся о вашей красоте.</p>

        <div class="std-team-window">
          <div class="std-team-track" id="stdTeamTrack">
            ${TEAM_MASTERS.map(master=>`
              <article class="std-master">
                <div class="std-master-avatar">${TEAM_AVATAR}</div>
                <strong class="std-master-name">${master.name}</strong>
                <span class="std-master-role">${master.role}</span>
              </article>
            `).join('')}
          </div>
        </div>

        <div class="std-team-hint" aria-hidden="true">Листайте <span>→</span></div>
      </div>
    </section>

    <div class="std-price-viewer" id="stdPriceViewer" role="dialog" aria-modal="true" aria-label="Фото-прайс STLuxe">
      <button class="std-price-viewer-close" id="stdPriceViewerClose" type="button" aria-label="Закрыть">×</button>
      <div class="std-price-viewer-stage">
        <button class="std-price-viewer-nav std-price-viewer-prev" id="stdPriceViewerPrev" type="button" aria-label="Предыдущая страница">‹</button>
        <img class="std-price-viewer-img" id="stdPriceViewerImage" src="" alt="Фото-прайс STLuxe">
        <button class="std-price-viewer-nav std-price-viewer-next" id="stdPriceViewerNext" type="button" aria-label="Следующая страница">›</button>
        <span class="std-price-viewer-count" id="stdPriceViewerCount"></span>
      </div>
    </div>

    <div class="std-gallery" id="stdGallery" role="dialog" aria-modal="true" aria-label="Галерея STLuxe">
      <button class="std-gallery-close" id="stdGalleryClose" type="button" aria-label="Закрыть">×</button>
      <div class="std-gallery-stage">
        <button class="std-gallery-nav std-gallery-prev" id="stdGalleryPrev" type="button" aria-label="Предыдущее фото">‹</button>
        <img class="std-gallery-image" id="stdGalleryImage" src="" alt="Фотография STLuxe">
        <button class="std-gallery-nav std-gallery-next" id="stdGalleryNext" type="button" aria-label="Следующее фото">›</button>
        <span class="std-gallery-count" id="stdGalleryCount"></span>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  const bookBtn=document.getElementById('stdBookBtn');
  bookBtn.addEventListener('click',()=>{
    if(typeof window.openBooking==='function') window.openBooking();
  });

  const gallery=document.getElementById('stdGallery');
  const galleryImage=document.getElementById('stdGalleryImage');
  const galleryCount=document.getElementById('stdGalleryCount');
  let galleryIndex=0;

  function paintGallery(){
    galleryImage.src=DESKTOP_GALLERY[galleryIndex];
    galleryImage.alt='Фотография STLuxe';
    galleryCount.textContent=(galleryIndex+1)+' / '+DESKTOP_GALLERY.length;
  }
  function openDesktopGallery(src){
    const found=src?DESKTOP_GALLERY.indexOf(src):-1;
    galleryIndex=found>=0?found:0;
    paintGallery();
    gallery.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeDesktopGallery(){
    gallery.classList.remove('open');
    document.body.style.overflow='';
  }
  function moveDesktopGallery(step){
    galleryIndex=(galleryIndex+step+DESKTOP_GALLERY.length)%DESKTOP_GALLERY.length;
    paintGallery();
  }

  document.querySelectorAll('.std-work').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const item=PORTFOLIO[Number(btn.dataset.portfolioIndex)||0];
      openDesktopGallery(item.src);
    });
  });
  document.getElementById('stdOpenGallery').addEventListener('click',()=>openDesktopGallery());
  document.getElementById('stdGalleryClose').addEventListener('click',closeDesktopGallery);
  document.getElementById('stdGalleryPrev').addEventListener('click',()=>moveDesktopGallery(-1));
  document.getElementById('stdGalleryNext').addEventListener('click',()=>moveDesktopGallery(1));
  gallery.addEventListener('click',e=>{if(e.target===gallery)closeDesktopGallery()});
  document.addEventListener('keydown',e=>{
    if(!gallery.classList.contains('open'))return;
    if(e.key==='Escape')closeDesktopGallery();
    if(e.key==='ArrowLeft')moveDesktopGallery(-1);
    if(e.key==='ArrowRight')moveDesktopGallery(1);
  });
  document.addEventListener('keydown',e=>{
    if(!priceViewer.classList.contains('open'))return;
    if(e.key==='Escape')closePriceViewer();
    if(e.key==='ArrowLeft')movePricePage(-1);
    if(e.key==='ArrowRight')movePricePage(1);
  });

  let pricePageIndex=0;
  const priceImage=document.getElementById('stdPriceImage');
  const priceCount=document.getElementById('stdPriceCount');
  const priceDots=document.getElementById('stdPriceDots');
  const priceViewer=document.getElementById('stdPriceViewer');
  const priceViewerImage=document.getElementById('stdPriceViewerImage');
  const priceViewerCount=document.getElementById('stdPriceViewerCount');

  function paintPricePages(){
    priceImage.src=PRICE_PAGES[pricePageIndex];
    priceImage.alt='Фото-прайс STLuxe, страница '+(pricePageIndex+1);
    priceCount.textContent=(pricePageIndex+1)+' / '+PRICE_PAGES.length;
    priceDots.innerHTML=PRICE_PAGES.map((_,i)=>'<button class="std-price-dot'+(i===pricePageIndex?' active':'')+'" type="button" data-price-dot="'+i+'" aria-label="Страница '+(i+1)+'"></button>').join('');
    priceDots.querySelectorAll('[data-price-dot]').forEach(btn=>btn.onclick=()=>{pricePageIndex=Number(btn.dataset.priceDot);paintPricePages();});
    if(priceViewer.classList.contains('open')){
      priceViewerImage.src=PRICE_PAGES[pricePageIndex];
      priceViewerCount.textContent=(pricePageIndex+1)+' / '+PRICE_PAGES.length;
    }
  }
  function movePricePage(step){
    pricePageIndex=(pricePageIndex+step+PRICE_PAGES.length)%PRICE_PAGES.length;
    paintPricePages();
  }
  function openPriceViewer(){
    priceViewerImage.src=PRICE_PAGES[pricePageIndex];
    priceViewerCount.textContent=(pricePageIndex+1)+' / '+PRICE_PAGES.length;
    priceViewer.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closePriceViewer(){
    priceViewer.classList.remove('open');
    document.body.style.overflow='';
  }
  document.getElementById('stdPricePrev').onclick=()=>movePricePage(-1);
  document.getElementById('stdPriceNext').onclick=()=>movePricePage(1);
  document.getElementById('stdPriceOpen').onclick=openPriceViewer;
  document.getElementById('stdPriceViewerClose').onclick=closePriceViewer;
  document.getElementById('stdPriceViewerPrev').onclick=()=>movePricePage(-1);
  document.getElementById('stdPriceViewerNext').onclick=()=>movePricePage(1);
  priceViewer.addEventListener('click',e=>{if(e.target===priceViewer)closePriceViewer();});
  paintPricePages();

  let activeServiceCategory=SERVICE_CATEGORIES[0];
  let desktopServicesExpanded=false;
  const serviceTabs=document.getElementById('stdServiceTabs');
  const serviceList=document.getElementById('stdServiceList');
  const serviceMore=document.getElementById('stdServiceMore');
  const serviceMoreText=document.getElementById('stdServiceMoreText');
  const serviceMoreArrow=document.getElementById('stdServiceMoreArrow');
  const servicesCount=document.getElementById('stdServicesCount');

  function desktopServiceWord(n){
    const n10=n%10,n100=n%100;
    if(n10===1&&n100!==11)return 'услугу';
    if(n10>=2&&n10<=4&&(n100<12||n100>14))return 'услуги';
    return 'услуг';
  }
  function desktopServiceRow(item){
    const title=item[0],price=item[1],detail=item[2],variants=item[3]||[],note=item[4];
    const variantsHtml=variants.length?'<div class="std-service-variants">'+variants.map(v=>'<div class="std-service-variant"><span>'+v[0]+'</span><b>'+v[1]+'</b></div>').join('')+'</div>':'';
    return '<div class="std-service-row"><div class="std-service-head"><div class="std-service-name">'+title+'</div>'+(price?'<div class="std-service-price">'+price+'</div>':'')+'</div>'+(detail?'<span class="std-service-detail">'+detail+'</span>':'')+variantsHtml+(note?'<span class="std-service-note">'+note+'</span>':'')+'</div>';
  }
  function renderDesktopServices(){
    serviceTabs.innerHTML=SERVICE_CATEGORIES.map(cat=>'<button class="std-service-tab'+(cat===activeServiceCategory?' active':'')+'" type="button" data-service-category="'+cat+'">'+cat+'</button>').join('');
    serviceTabs.querySelectorAll('[data-service-category]').forEach(btn=>btn.onclick=()=>{
      activeServiceCategory=btn.dataset.serviceCategory;
      desktopServicesExpanded=false;
      renderDesktopServices();
    });
    const all=SERVICE_DATA[activeServiceCategory]||[];
    const shown=desktopServicesExpanded?all:all.slice(0,5);
    serviceList.innerHTML=shown.map(desktopServiceRow).join('');
    const remaining=Math.max(0,all.length-5);
    serviceMore.hidden=all.length<=5;
    serviceMoreText.textContent=desktopServicesExpanded?'Свернуть':('Показать ещё '+remaining+' '+desktopServiceWord(remaining));
    serviceMoreArrow.textContent=desktopServicesExpanded?'↑':'↓';
    const total=SERVICE_CATEGORIES.reduce((sum,cat)=>sum+(SERVICE_DATA[cat]?.length||0),0);
    servicesCount.textContent='Все категории · '+total+' позиций';
  }
  serviceMore.onclick=()=>{desktopServicesExpanded=!desktopServicesExpanded;renderDesktopServices();};
  renderDesktopServices();

  let tabsDragging=false,tabsStartX=0,tabsStartScroll=0;
  serviceTabs.addEventListener('pointerdown',e=>{
    if(e.target.closest('button'))return;
    tabsDragging=true;
    tabsStartX=e.clientX;
    tabsStartScroll=serviceTabs.scrollLeft;
    serviceTabs.classList.add('dragging');
    serviceTabs.setPointerCapture?.(e.pointerId);
  });
  serviceTabs.addEventListener('pointermove',e=>{
    if(!tabsDragging)return;
    serviceTabs.scrollLeft=tabsStartScroll-(e.clientX-tabsStartX);
  });
  const endTabsDrag=()=>{tabsDragging=false;serviceTabs.classList.remove('dragging');};
  serviceTabs.addEventListener('pointerup',endTabsDrag);
  serviceTabs.addEventListener('pointercancel',endTabsDrag);
  serviceTabs.addEventListener('wheel',e=>{
    if(Math.abs(e.deltaY)<=Math.abs(e.deltaX))return;
    const max=serviceTabs.scrollWidth-serviceTabs.clientWidth;
    if(max<=0)return;
    e.preventDefault();
    serviceTabs.scrollLeft+=e.deltaY;
  },{passive:false});

  function updateStatus(){
    const parts=new Intl.DateTimeFormat('en-GB',{
      timeZone:'Europe/Moscow',
      weekday:'short',
      hour:'2-digit',
      minute:'2-digit',
      hour12:false
    }).formatToParts(new Date());
    const weekday=parts.find(p=>p.type==='weekday')?.value||'Mon';
    const hour=Number(parts.find(p=>p.type==='hour')?.value||0);
    const minute=Number(parts.find(p=>p.type==='minute')?.value||0);
    const mins=hour*60+minute;
    const monday=weekday==='Mon';
    const sundayLate=weekday==='Sun'&&mins>=1200;
    const isOpen=!monday&&mins>=600&&mins<1200;
    const closedToTuesday=monday||sundayLate;
    const main=document.getElementById('stdStatusMain');
    const sub=document.getElementById('stdStatusSub');
    if(!main||!sub) return;
    main.textContent=isOpen?'Открыто':'Закрыто';
    sub.textContent=isOpen?'до 20:00':(closedToTuesday?'до вт 10:00':'до 10:00');
    main.style.color=isOpen?'#3f8750':'#a45e64';
  }
  updateStatus();
  setInterval(updateStatus,60000);
})();