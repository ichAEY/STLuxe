(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;

  const root=document.getElementById('stluxe-tanem-v13');
  if(!root) return;
  const section=root.querySelector('#tn13Portfolio');
  if(!section) return;

  const style=document.createElement('style');
  style.id='stluxe-portfolio-v15-style';
  style.textContent=`
  @media(max-width:767px){
    #stluxe-tanem-v13 #tn13Portfolio{
      position:relative!important;
      width:100%!important;
      aspect-ratio:390/693!important;
      height:auto!important;
      min-height:0!important;
      margin:0!important;
      padding:0!important;
      overflow:hidden!important;
      background:#f7f2eb!important;
      color:#171513!important;
    }
    #stluxe-tanem-v13 .tn15-kicker{
      position:absolute;left:6.15%;top:3.75%;margin:0;
      font-family:"Manrope",Arial,sans-serif;
      font-size:clamp(9px,2.56vw,11px);font-weight:500;line-height:1;
      letter-spacing:.31em;text-transform:uppercase;color:#5e5854;
    }
    #stluxe-tanem-v13 .tn15-title{
      position:absolute;left:6.15%;top:8.45%;margin:0;
      font:500 clamp(42px,11.8vw,55px)/.88 "Cormorant Garamond",Georgia,serif;
      letter-spacing:-.035em;color:#171513;
    }
    #stluxe-tanem-v13 .tn15-grid{
      position:absolute;left:6.15%;right:6.15%;top:22.35%;
      display:grid;
      grid-template-columns:minmax(0,1fr) minmax(0,1fr);
      grid-template-rows:37.18vw 27.69vw 47.18vw;
      gap:1.28vw;
    }
    #stluxe-tanem-v13 .tn15-item{
      position:relative;display:block;width:100%;height:100%;padding:0!important;margin:0!important;
      border:0!important;border-radius:8px!important;overflow:hidden;background:#ded5cc!important;box-shadow:none!important;
    }
    #stluxe-tanem-v13 .tn15-item img{
      display:block;width:100%;height:100%;object-fit:cover;
      filter:saturate(.58) sepia(.12) brightness(.86) contrast(1.04);
    }
    #stluxe-tanem-v13 .tn15-a{grid-column:1;grid-row:1 / span 2}
    #stluxe-tanem-v13 .tn15-b{grid-column:2;grid-row:1}
    #stluxe-tanem-v13 .tn15-c{grid-column:2;grid-row:2}
    #stluxe-tanem-v13 .tn15-d{grid-column:1;grid-row:3}
    #stluxe-tanem-v13 .tn15-e{grid-column:2;grid-row:3}
    #stluxe-tanem-v13 .tn15-a img{object-position:center 45%}
    #stluxe-tanem-v13 .tn15-b img{object-position:center 50%}
    #stluxe-tanem-v13 .tn15-c img{object-position:center 50%}
    #stluxe-tanem-v13 .tn15-d img{object-position:center 50%}
    #stluxe-tanem-v13 .tn15-e img{object-position:center 50%}

    #stluxe-tanem-v13 .tn15-all{
      position:absolute;left:6.15%;top:91.55%;display:inline-flex;align-items:center;gap:12px;
      padding:0!important;margin:0!important;border:0!important;background:transparent!important;border-radius:0!important;
      color:#161412!important;text-decoration:none!important;
      font-family:"Manrope",Arial,sans-serif;font-size:clamp(13px,3.65vw,16px)!important;font-weight:500!important;line-height:1!important;
      box-shadow:none!important;
    }
    #stluxe-tanem-v13 .tn15-arrow{font-size:clamp(25px,7.2vw,31px);font-weight:300;line-height:.6;transform:translateY(-1px)}
  }
  `;
  document.head.appendChild(style);

  section.innerHTML=`
    <p class="tn15-kicker">Портфолио</p>
    <h2 class="tn15-title">Наши<br>работы</h2>

    <div class="tn15-grid" aria-label="Портфолио STLuxe">
      <button class="tn15-item tn15-a" type="button" data-tn15-gallery="hair"><img src="assets/images/hair-style.webp" alt="Работа с волосами STLuxe"></button>
      <button class="tn15-item tn15-b" type="button" data-tn15-gallery="salon"><img src="assets/images/salon-nail-zone.webp" alt="Интерьер STLuxe"></button>
      <button class="tn15-item tn15-c" type="button" data-tn15-gallery="nails"><img src="assets/images/nails-light.webp" alt="Маникюр STLuxe"></button>
      <button class="tn15-item tn15-d" type="button" data-tn15-gallery="nails"><img src="assets/images/nails-green.webp" alt="Дизайн ногтей STLuxe"></button>
      <button class="tn15-item tn15-e" type="button" data-tn15-gallery="nails"><img src="assets/images/nails-pink.webp" alt="Маникюр STLuxe"></button>
    </div>

    <button class="tn15-all" id="tn15All" type="button">Смотреть все работы <span class="tn15-arrow">→</span></button>
  `;

  const overlay=root.querySelector('#tn13Gallery');
  const tabs=root.querySelector('#tn13GalleryTabs');
  const list=root.querySelector('#tn13GalleryList');
  const allWorks=[
    ['assets/images/salon-reception.webp','Салон','Интерьер STLuxe'],
    ['assets/images/salon-nail-zone.webp','Салон','Зона маникюра STLuxe'],
    ['assets/images/hair-style.webp','Волосы','Работа с волосами STLuxe'],
    ['assets/images/nails-pink.webp','Ногти','Маникюр STLuxe'],
    ['assets/images/nails-green.webp','Ногти','Дизайн ногтей STLuxe'],
    ['assets/images/nails-light.webp','Ногти','Маникюр STLuxe']
  ];

  function openGallery(category='Все'){
    if(!overlay||!tabs||!list) return;
    const cats=['Все','Салон','Волосы','Ногти'];
    tabs.innerHTML=cats.map(c=>`<button type="button" class="${c===category?'active':''}" data-tn15-tab="${c}">${c}</button>`).join('');
    const render=(cat)=>{
      list.innerHTML=allWorks.filter(w=>cat==='Все'||w[1]===cat).map(w=>`<img src="${w[0]}" alt="${w[2]}">`).join('');
      tabs.querySelectorAll('[data-tn15-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tn15Tab===cat));
    };
    tabs.querySelectorAll('[data-tn15-tab]').forEach(b=>b.addEventListener('click',()=>render(b.dataset.tn15Tab)));
    render(category);
    overlay.classList.add('open');
    document.body.style.overflow='hidden';
  }

  section.querySelectorAll('[data-tn15-gallery]').forEach(btn=>btn.addEventListener('click',()=>{
    const map={salon:'Салон',hair:'Волосы',nails:'Ногти'};
    openGallery(map[btn.dataset.tn15Gallery]||'Все');
  }));
  section.querySelector('#tn15All').addEventListener('click',()=>openGallery('Все'));
})();