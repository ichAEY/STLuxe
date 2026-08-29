(function(){
  'use strict';
  if(!window.matchMedia || !window.matchMedia('(max-width:767px)').matches) return;
  const root=document.getElementById('stluxe-tanem-v13');
  if(!root) return;
  const section=root.querySelector('#tn13Team');
  if(!section) return;

  const oldButtons={};
  section.querySelectorAll('[data-master]').forEach(b=>oldButtons[b.dataset.master]=b);

  const masters=[
    {id:'tatiana',name:'Татьяна',role:'Мастер · волосы и ногти',initial:'Т'},
    {id:'maria',name:'Мария',role:'Мастер · косметология',initial:'М'},
    {id:'alena',name:'Алёна',role:'Мастер',initial:'А'},
    {id:'placeholder',name:'Мастер',role:'Категория уточняется',initial:'S'}
  ];

  const style=document.createElement('style');
  style.id='stluxe-team-v18-style';
  style.textContent=`
  @media(max-width:767px){
    #stluxe-tanem-v13 #tn13Team{margin:0!important;padding:0!important;min-height:693px!important;background:#f6f1e9!important;color:#171513!important;overflow:hidden!important}
    #stluxe-tanem-v13 #tn13Team .tn18-wrap{width:100%;min-height:693px;padding:40px 30px 22px}
    #stluxe-tanem-v13 #tn13Team .tn18-kicker{margin:0;font-family:"Manrope",Arial,sans-serif;font-size:10px;font-weight:500;line-height:1;letter-spacing:.42em;color:#746c66;text-transform:uppercase}
    #stluxe-tanem-v13 #tn13Team .tn18-title{margin:23px 0 0;font-family:"Cormorant Garamond",Georgia,serif;font-size:39px;font-weight:500;line-height:.95;letter-spacing:-.028em;color:#171513}
    #stluxe-tanem-v13 #tn13Team .tn18-grid{display:grid;grid-template-columns:1fr 1fr;column-gap:24px;row-gap:17px;margin-top:29px}
    #stluxe-tanem-v13 #tn13Team .tn18-master{min-width:0;padding:0!important;border:0!important;background:transparent!important;color:#171513!important;text-align:center!important;box-shadow:none!important}
    #stluxe-tanem-v13 #tn13Team .tn18-portrait{width:100%;aspect-ratio:153/162;border-radius:50% / 46%;display:grid;place-items:center;overflow:hidden;background:radial-gradient(circle at 46% 38%,#d9d1c9 0 20%,#c8beb5 54%,#b6aaa0 100%);border:1px solid rgba(61,51,45,.06)}
    #stluxe-tanem-v13 #tn13Team .tn18-portrait span{font-family:"Cormorant Garamond",Georgia,serif;font-size:54px;font-weight:500;line-height:1;color:rgba(55,46,41,.72);transform:translateY(-2px)}
    #stluxe-tanem-v13 #tn13Team .tn18-name{display:block!important;margin-top:13px!important;font-family:"Cormorant Garamond",Georgia,serif!important;font-size:20px!important;font-weight:500!important;line-height:1!important;letter-spacing:-.015em!important;color:#1c1917!important}
    #stluxe-tanem-v13 #tn13Team .tn18-role{display:block!important;margin-top:6px!important;min-height:23px;font-family:"Manrope",Arial,sans-serif!important;font-size:10px!important;font-weight:400!important;line-height:1.3!important;color:#857b74!important}
    #stluxe-tanem-v13 #tn13Team .tn18-all{display:flex;align-items:center;justify-content:center;gap:18px;margin-top:25px;font-family:"Cormorant Garamond",Georgia,serif;font-size:17px;font-weight:500;line-height:1;color:#191614}
    #stluxe-tanem-v13 #tn13Team .tn18-all i{font-style:normal;font-size:27px;line-height:.7;transform:translateY(-1px)}
    @media(max-width:360px){
      #stluxe-tanem-v13 #tn13Team .tn18-wrap{padding-left:24px;padding-right:24px}
      #stluxe-tanem-v13 #tn13Team .tn18-grid{column-gap:18px}
      #stluxe-tanem-v13 #tn13Team .tn18-title{font-size:36px}
    }
  }`;
  document.head.appendChild(style);

  section.innerHTML=`<div class="tn18-wrap">
    <p class="tn18-kicker">Наша команда</p>
    <h2 class="tn18-title">Мастера своего дела</h2>
    <div class="tn18-grid">${masters.map(m=>`<button class="tn18-master" type="button" data-tn18-master="${m.id}"><div class="tn18-portrait"><span>${m.initial}</span></div><strong class="tn18-name">${m.name}</strong><span class="tn18-role">${m.role}</span></button>`).join('')}</div>
    <div class="tn18-all">Смотреть всех мастеров <i>⟶</i></div>
  </div>`;

  section.querySelectorAll('[data-tn18-master]').forEach(btn=>btn.addEventListener('click',()=>{
    const old=oldButtons[btn.dataset.tn18Master];
    if(old) old.click();
  }));
})();
