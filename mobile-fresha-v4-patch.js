(function(){
  if(!window.matchMedia || !window.matchMedia('(max-width: 767px)').matches) return;
  function q(s,r){return (r||document).querySelector(s)}
  function qa(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))}
  var root=q('#stluxe-fresha'); if(!root) return;

  var css=document.createElement('style');
  css.id='stluxe-v4-polish';
  css.textContent=`
  @media(max-width:767px){
    #stluxe-fresha,#stluxe-fresha *{font-family:"Avenir Next","Helvetica Neue",Arial,sans-serif!important}
    .fr-page{padding-bottom:78px!important}
    .fr-top{height:50px!important;padding:0 18px!important}
    .fr-brand{font-size:17px!important;font-weight:400!important;letter-spacing:.02em!important;color:#777!important}
    .fr-yandex{font-size:12px!important;font-weight:300!important;color:#888!important;border-bottom-color:#aaa!important;letter-spacing:.01em!important}
    .fr-media{height:82vw!important;min-height:315px!important;max-height:430px!important}
    .fr-slide img{object-fit:cover!important;object-position:center 42%!important;transform:scale(1.035)}
    .fr-media-actions{display:none!important}
    .fr-counter{right:16px!important;bottom:42px!important;height:27px!important;min-width:42px!important;padding:0 10px!important;background:rgba(25,25,25,.52)!important;color:rgba(255,255,255,.92)!important;font-size:11px!important;font-weight:400!important;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}
    .fr-hero{margin-top:-25px!important;border-radius:30px 30px 0 0!important;padding:38px 24px 28px!important}
    .fr-title{font-size:34px!important;line-height:1.04!important;font-weight:500!important;letter-spacing:-.04em!important;margin-bottom:8px!important}
    .fr-type{font-size:18px!important;font-weight:300!important;color:#8a8a8a!important;margin-bottom:22px!important;letter-spacing:.005em!important}
    .fr-rating{font-size:18px!important;font-weight:400!important;margin-bottom:23px!important}.fr-rating strong{font-weight:500!important}.fr-rating span:last-child{font-weight:300!important}.fr-star{color:#f5b400!important;font-size:22px!important}
    .fr-hours{font-size:16px!important;font-weight:300!important;margin-bottom:22px!important;color:#777!important}.fr-hours svg{width:19px!important;height:19px!important}.fr-hours.opened svg{color:#18884b!important}.fr-hours.closedx svg{color:#c97424!important}.fr-state{font-weight:400!important}.fr-state.open{color:#18884b!important}.fr-state.closed{color:#c97424!important}
    .fr-address{font-size:12px!important;font-weight:300!important;line-height:1.45!important;color:#666!important;padding:14px 14px!important;border-radius:15px!important;background:#f3f3f2!important}.fr-address svg{width:18px!important;height:18px!important;color:#111!important}
    #frOverview{display:none!important}
    #frPortfolio{background:#f6f6f3!important;border-top:0!important;padding-top:31px!important}
    #frServices{background:#fff!important}
    #frTeam,#frReviews,#frAbout,#frVisit{background:#fbfbfa!important}
    .fr-section{padding:32px 20px 34px!important}
    .fr-section h2{font-size:25px!important;font-weight:500!important;letter-spacing:-.035em!important}
    .fr-head{margin-bottom:17px!important}.fr-head .fr-link{display:none!important}
    .fr-filters{margin:0 -20px 15px!important;padding:0 20px!important;gap:7px!important}.fr-filter{font-size:11px!important;font-weight:300!important;padding:8px 12px!important;border-color:#ddd!important;color:#777!important}.fr-filter.active{background:#111!important;color:#fff!important;border-color:#111!important}
    .fr-grid{display:grid!important;grid-template-columns:1.35fr 1fr 1fr!important;grid-template-rows:132px 132px!important;gap:7px!important}
    .fr-photo{aspect-ratio:auto!important;border-radius:14px!important}.fr-photo:nth-child(1){grid-column:1/2;grid-row:1/3}.fr-photo:nth-child(2){grid-column:2/4;grid-row:1}.fr-photo:nth-child(3){grid-column:2;grid-row:2}.fr-photo:nth-child(4){grid-column:3;grid-row:2}.fr-photo:nth-child(n+6){display:none!important}
    .fr-gallery-open-v4{width:100%;border:0;background:none;padding:17px 0 0;font-size:12px;font-weight:300;color:#333;text-decoration:underline;text-underline-offset:4px}
    .fr-services{gap:8px!important}.fr-service{position:relative!important;border:1px solid #e8e8e6!important;border-radius:16px!important;padding:15px 118px 14px 15px!important;min-height:86px!important;box-shadow:none!important}.fr-service-name{font-size:14px!important;font-weight:400!important;line-height:1.35!important}.fr-service-bottom{display:block!important;margin-top:12px!important}.fr-price{font-size:12px!important;font-weight:300!important;color:#777!important}.fr-reserve{position:absolute!important;right:13px!important;top:50%!important;transform:translateY(-50%)!important;border:0!important;background:#111!important;color:#fff!important;height:36px!important;padding:0 14px!important;font-size:11px!important;font-weight:300!important}.fr-more{font-size:12px!important;font-weight:300!important}
    #frTeam h2:after{content:""}.fr-team{gap:16px!important;margin:0 -20px!important;padding:0 20px 6px!important}.fr-person{min-width:92px!important;width:92px!important;text-align:center!important}.fr-person-pic{width:82px!important;height:82px!important;border-radius:50%!important;margin:0 auto!important;background:#ececea!important}.fr-person-pic svg{width:34px!important;height:34px!important}.fr-person-badge{left:50%!important;top:auto!important;bottom:-7px!important;transform:translateX(-50%)!important;background:#fff!important;border:1px solid #e8e8e6!important;padding:3px 7px!important;font-size:9px!important;white-space:nowrap!important}.fr-person-name{font-size:12px!important;font-weight:400!important;margin-top:13px!important}.fr-person-role{font-size:10px!important;font-weight:300!important;line-height:1.25!important;color:#888!important}
    #frReviews{padding-bottom:40px!important}.fr-review-stage{overflow:hidden;margin:0 -20px}.fr-review-strip{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:0 20px 5px}.fr-review-strip::-webkit-scrollbar{display:none}.fr-review-card-v4{min-width:86%;scroll-snap-align:start;background:#fff;border:1px solid #e9e9e6;border-radius:18px;padding:17px}.fr-review-head-v4{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}.fr-review-author{display:flex;align-items:center;gap:10px}.fr-avatar{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;font-size:11px;font-weight:500;color:#4b4b4b;background:#ebe3db}.fr-review-name{font-size:12px;font-weight:400}.fr-review-stars{color:#f5b400!important;font-size:12px;letter-spacing:1px}.fr-review-text-v4{margin:0;font-size:13px;line-height:1.5;color:#565656;font-weight:300}.fr-see-all{display:inline-block;margin-top:16px;border:0;background:none;padding:0;font-size:12px;font-weight:300;text-decoration:underline;text-underline-offset:4px;color:#222}
    .fr-reviews-modal{position:fixed;inset:0;z-index:130;background:rgba(0,0,0,.42);display:none;align-items:flex-end}.fr-reviews-modal.open{display:flex}.fr-reviews-sheet{width:100%;max-height:88vh;background:#fff;border-radius:28px 28px 0 0;padding:20px 18px calc(24px + env(safe-area-inset-bottom));overflow:auto}.fr-reviews-sheet-head{position:sticky;top:-20px;background:#fff;padding:3px 0 14px;display:flex;justify-content:space-between;align-items:center;z-index:2}.fr-reviews-sheet h3{margin:0;font-size:22px;font-weight:500}.fr-reviews-close{width:36px;height:36px;border-radius:50%;border:1px solid #ddd;background:#fff;font-size:20px}.fr-all-review{padding:15px 0;border-top:1px solid #eee}.fr-all-review:first-of-type{border-top:0}.fr-all-review .fr-review-text-v4{font-size:12.5px}
    #frAbout{position:relative;overflow:hidden}.fr-about-art{height:138px;margin:0 0 22px;border-radius:22px;background:linear-gradient(145deg,#f0eee8,#faf9f6);position:relative;overflow:hidden}.fr-orbit{position:absolute;border:1px solid rgba(50,50,50,.14);border-radius:50%;animation:orb 9s linear infinite}.fr-orbit.o1{width:180px;height:180px;left:-35px;top:-25px}.fr-orbit.o2{width:120px;height:120px;right:-12px;bottom:-18px;animation-duration:7s;animation-direction:reverse}.fr-orbit:after{content:"";position:absolute;width:8px;height:8px;border-radius:50%;background:#111;left:50%;top:-4px}.fr-about-word{position:absolute;inset:0;display:grid;place-items:center;font-size:22px;font-weight:300;letter-spacing:.08em;color:#3d3d3d}@keyframes orb{to{transform:rotate(360deg)}}
    .fr-hours-block,.fr-extra,.fr-map-block{padding:30px 20px;background:#fbfbfa;border-top:1px solid #ececea}.fr-hours-block h2,.fr-extra h2,.fr-map-block h2{margin:0 0 17px;font-size:24px;font-weight:500;letter-spacing:-.035em}.fr-hours-list{display:grid;gap:0}.fr-hours-row{display:flex;justify-content:space-between;padding:11px 0;border-bottom:1px solid #ececea;font-size:13px;font-weight:300}.fr-hours-row strong{font-weight:400}.fr-extra-card{background:#fff;border:1px solid #e9e9e6;border-radius:18px;padding:16px;font-size:12.5px;line-height:1.55;color:#626262;font-weight:300}.fr-map-frame{width:100%;height:250px;border:0;border-radius:19px;overflow:hidden;background:#eee}.fr-map-block{padding-bottom:18px!important}
    .fr-visit-actions{gap:8px!important}.fr-action{font-size:12px!important;font-weight:300!important;height:44px!important}.fr-footer{padding-bottom:90px!important}
    .fr-bookbar{min-height:76px!important;padding:10px 16px calc(10px + env(safe-area-inset-bottom))!important}.fr-book-copy{font-size:14px!important;font-weight:300!important}.fr-book-button{height:48px!important;font-size:14px!important;font-weight:400!important;padding:0 24px!important}
    .fr-gallery-tabs button.active{background:#fff!important;color:#111!important}.fr-gallery-tabs button{color:#fff!important}.fr-gallery-count{color:#fff!important}
  }`;
  document.head.appendChild(css);

  var hero=q('.fr-hours',root); var state=q('#frState',root); var tail=q('#frStateTail',root);
  function refreshStatus(){
    if(!hero||!state||!tail) return;
    var d=new Date(); var parts=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Moscow',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(d); var day='',hh=0,mm=0;
    for(var i=0;i<parts.length;i++){if(parts[i].type==='weekday')day=parts[i].value;if(parts[i].type==='hour')hh=parseInt(parts[i].value,10)||0;if(parts[i].type==='minute')mm=parseInt(parts[i].value,10)||0}
    var mins=hh*60+mm, mon=day==='Mon', open=!mon&&mins>=600&&mins<1200;
    state.textContent=open?'Открыто':'Закрыто'; state.className='fr-state '+(open?'open':'closed'); hero.classList.toggle('opened',open); hero.classList.toggle('closedx',!open);
    if(open) tail.textContent=' до 20:00'; else if(mon) tail.textContent=' · откроется во вторник в 10:00'; else if(mins<600) tail.textContent=' · откроется в 10:00'; else tail.textContent=' · откроется завтра в 10:00';
  }
  refreshStatus(); setInterval(refreshStatus,60000);

  var addr=q('.fr-address span',root); if(addr) addr.textContent='Россия, Московская область, Пушкинский городской округ, Ивантеевка, ул. Победы, д. 16, 1 этаж, 141284';

  var portfolio=q('#frPortfolio',root); if(portfolio){
    var headLink=q('.fr-head .fr-link',portfolio); if(headLink) headLink.remove();
    var grid=q('#frGrid',portfolio); if(grid){
      var srcs=['assets/images/salon-reception.webp','assets/images/nails-pink.webp','assets/images/hair-style.webp','assets/images/nails-green.webp','assets/images/nails-light.webp'];
      grid.innerHTML=srcs.map(function(src,i){return '<button class="fr-photo" type="button" data-index="'+i+'"><img src="'+src+'" alt="Работа STLuxe"></button>'}).join('');
      qa('.fr-photo',grid).forEach(function(el){el.addEventListener('click',function(){var b=q('#frOpenGallery',root); if(b)b.click()})});
    }
    var galleryBtn=document.createElement('button');galleryBtn.type='button';galleryBtn.className='fr-gallery-open-v4';galleryBtn.textContent='Открыть галерею';galleryBtn.addEventListener('click',function(){var b=q('#frOpenGallery',root);if(b)b.click()});portfolio.appendChild(galleryBtn);
  }

  var team=q('#frTeam',root); if(team){
    var h=q('h2',team); if(h)h.textContent='Команда';
    var row=q('.fr-team',team); if(row){
      var people=[['Татьяна','★ —','мастер широкого профиля'],['Мария','★ —','косметолог'],['Алёна','★ —','мастер салона'],['Nail-мастер','★ —','маникюр · педикюр'],['Бровист / Lash','★ —','брови · ресницы']];
      row.innerHTML=people.map(function(p){return '<button class="fr-person" type="button"><span class="fr-person-pic"><span class="fr-person-badge">'+p[1]+'</span><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M5 21c.4-4.2 2.8-6.5 7-6.5s6.6 2.3 7 6.5"/></svg></span><span class="fr-person-name">'+p[0]+'</span><span class="fr-person-role">'+p[2]+'</span></button>'}).join('');
    }
  }

  var reviews=[
    ['мария н.','Любимый салон: уютно, красиво, быстро и качественно. Особенно отмечает Татьяну.'],
    ['Оксана Семина','Ногти, кератин, окрашивание и стрижка — клиентка осталась в восторге.'],
    ['Дарья К.','Отмечает чистоту, аккуратный маникюр и внимательное отношение к пожеланиям.'],
    ['Виктория Булычева','Ходит с 2021 года; хвалит Татьяну, чистоту, уют и сервис.'],
    ['Александра Загоруйчук','Доверяет Татьяне волосы и отмечает красивый маникюр и комфорт салона.'],
    ['Елена Мельникова','Несколько лет посещает салон и стабильно довольна результатом и материалами.'],
    ['Оксана Земскова','Более десяти лет стрижётся у Татьяны и ценит стабильный результат.'],
    ['Ксения М.','Хвалит окрашивание, стрижки, педикюр и гостеприимный сервис.'],
    ['Иван Савин','Отмечает уют, качественные материалы, высокий уровень и отношение к клиентам.'],
    ['Маринка К.','Около десяти лет доверяет Татьяне стрижку и окрашивание.'],
    ['Мария Самсонова','Хвалит стильный чистый салон и аккуратную быструю работу.'],
    ['Марина Грибанова','Посещает салон с детьми; отмечает мастеров и доступные цены.'],
    ['Елизавета С.','Отмечает вежливость мастеров, чистоту и качественные бьюти-услуги.'],
    ['Юлия З','Ходит всей семьёй; ценит атмосферу, запись и работу Татьяны.'],
    ['Светлана М.','Хвалит качество сервиса и стойкость ногтевого покрытия.'],
    ['Луиза Е.','Не первый год стрижётся у Татьяны и довольна результатом.'],
    ['Елена Калинкина','Отмечает дизайн салона, атмосферу, кофе и качество работы.'],
    ['Светлана Семенова','Давно посещает салон ради стрижек, маникюра и педикюра.'],
    ['Мама Рита','Особенно рекомендует косметолога Марию и качество препаратов.'],
    ['Ирина Попова','Три года ходит к Татьяне и отдельно отмечает работу с волосами.']
  ];
  function initials(n){var p=n.replace(/[^A-Za-zА-Яа-яЁё ]/g,'').trim().split(/\s+/);return (p[0]?p[0][0]:'S')+(p[1]?p[1][0]:'')}
  var rs=q('#frReviews',root); if(rs){
    rs.innerHTML='<div class="fr-head"><h2>Отзывы</h2></div><div class="fr-review-stage"><div class="fr-review-strip" id="frReviewStrip"></div></div><button class="fr-see-all" type="button" id="frSeeAllReviews">Посмотреть все отзывы</button>';
    var strip=q('#frReviewStrip',rs); strip.innerHTML=reviews.slice(0,6).map(function(r,i){var hues=['#e9dfd4','#e0e7dc','#e2e0ea','#eee1e1','#e6e3d6','#dde6e8'];return '<article class="fr-review-card-v4"><div class="fr-review-head-v4"><div class="fr-review-author"><span class="fr-avatar" style="background:'+hues[i%hues.length]+'">'+initials(r[0])+'</span><span class="fr-review-name">'+r[0]+'</span></div><span class="fr-review-stars">★★★★★</span></div><p class="fr-review-text-v4">'+r[1]+'</p></article>'}).join('');
    var idx=0; setInterval(function(){if(!strip||document.hidden)return;var cards=qa('.fr-review-card-v4',strip);if(!cards.length)return;idx=(idx+1)%cards.length;strip.scrollTo({left:cards[idx].offsetLeft-20,behavior:'smooth'})},4200);
    var modal=document.createElement('div');modal.className='fr-reviews-modal';modal.id='frAllReviewsModal';modal.innerHTML='<div class="fr-reviews-sheet"><div class="fr-reviews-sheet-head"><h3>Отзывы клиентов</h3><button class="fr-reviews-close" type="button">×</button></div>'+reviews.map(function(r,i){var hues=['#e9dfd4','#e0e7dc','#e2e0ea','#eee1e1','#e6e3d6','#dde6e8'];return '<article class="fr-all-review"><div class="fr-review-head-v4"><div class="fr-review-author"><span class="fr-avatar" style="background:'+hues[i%hues.length]+'">'+initials(r[0])+'</span><span class="fr-review-name">'+r[0]+'</span></div><span class="fr-review-stars">★★★★★</span></div><p class="fr-review-text-v4">'+r[1]+'</p></article>'}).join('')+'</div>';document.body.appendChild(modal);
    q('#frSeeAllReviews',rs).addEventListener('click',function(){modal.classList.add('open');document.body.style.overflow='hidden'});q('.fr-reviews-close',modal).addEventListener('click',function(){modal.classList.remove('open');document.body.style.overflow=''});modal.addEventListener('click',function(e){if(e.target===modal){modal.classList.remove('open');document.body.style.overflow=''}});
  }

  var about=q('#frAbout',root); if(about){
    about.innerHTML='<h2>О салоне</h2><div class="fr-about-art"><div class="fr-orbit o1"></div><div class="fr-orbit o2"></div><div class="fr-about-word">STLuxe</div></div><p class="fr-copy">Салон объединяет ногтевой сервис, волосы, косметологию, брови и ресницы, перманентный макияж и депиляцию в одном пространстве.</p>';
  }

  var hours=document.createElement('section');hours.className='fr-hours-block';hours.id='frHours';hours.innerHTML='<h2>Время работы</h2><div class="fr-hours-list"><div class="fr-hours-row"><strong>Понедельник</strong><span>выходной</span></div>'+['Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'].map(function(d){return '<div class="fr-hours-row"><strong>'+d+'</strong><span>10:00–20:00</span></div>'}).join('')+'</div>';
  if(about) about.parentNode.insertBefore(hours,about);

  var extra=document.createElement('section');extra.className='fr-extra';extra.innerHTML='<h2>Как добраться</h2><div class="fr-extra-card">По отзывам клиентов, примерно в 3 минутах ходьбы находится остановка автобуса №316, а примерно в 5 минутах — железнодорожная платформа Детская. Возле салона также отмечают возможность припарковаться.</div>';
  if(about) about.parentNode.insertBefore(extra,about.nextSibling);

  var map=document.createElement('section');map.className='fr-map-block';map.innerHTML='<h2>На карте</h2><iframe class="fr-map-frame" loading="lazy" src="https://yandex.ru/map-widget/v1/?mode=search&text='+encodeURIComponent('STLuxe, Ивантеевка, улица Победы, 16')+'&z=16" allowfullscreen></iframe>';
  var visit=q('#frVisit',root); if(visit) visit.parentNode.insertBefore(map,visit);

  var bar=q('#frBookbar',root); if(bar){
    var stop=q('.fr-map-block',root)||q('#frVisit',root); function barSync(){if(!stop)return;var r=stop.getBoundingClientRect();bar.classList.toggle('visible',window.scrollY>260 && r.top>window.innerHeight*.8)} window.addEventListener('scroll',barSync,{passive:true});barSync();
  }
})();