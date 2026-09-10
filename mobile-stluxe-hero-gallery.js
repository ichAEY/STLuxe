(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;

function visitIcon(type){
  if(type==='phone'){
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92Z"/></svg>';
  }
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"/><path d="M8 9h8M8 13h5"/></svg>';
}

let iconTries=0;
function fixVisitIcons(){
  const visit=document.querySelector('#tn13Visit');
  const contacts=visit?[...visit.querySelectorAll('.tn22-contact')]:[];
  const phone=contacts.find(el=>(el.getAttribute('href')||'').startsWith('tel:'));
  const whatsapp=contacts.find(el=>(el.querySelector('strong')?.textContent||'').trim()==='WhatsApp');
  const max=contacts.find(el=>(el.querySelector('strong')?.textContent||'').trim()==='MAX');
  if(!phone||!whatsapp||!max){
    if(iconTries++<100)setTimeout(fixVisitIcons,50);
    return;
  }
  [[phone,'phone'],[whatsapp,'message'],[max,'message']].forEach(([item,type])=>{
    if(item.dataset.stlSimpleVisitIcon===type)return;
    const first=item.firstElementChild;
    if(first)first.outerHTML=visitIcon(type);
    else item.insertAdjacentHTML('afterbegin',visitIcon(type));
    item.dataset.stlSimpleVisitIcon=type;
  });
}
fixVisitIcons();

const stable=document.createElement('script');
stable.src='mobile-stluxe-hero-gallery-stable.js?v=20260907-stability-fix1';
stable.onload=()=>{
  let tries=0;
  const fixMenu=()=>{
    const nav=document.querySelector('#tn13Top .tn22-navpop');
    const team=nav?.querySelector('a[href="#tn13Team"]');
    const about=nav?.querySelector('a[href="#tn38About"]');
    if(!nav||!team||!about){
      if(tries++<80)setTimeout(fixMenu,50);
      return;
    }
    if((about.textContent||'').trim()!=='О нас')about.textContent='О нас';
    if(team.nextElementSibling!==about)team.insertAdjacentElement('afterend',about);
  };
  fixMenu();
};
stable.onerror=()=>console.error('STLuxe stable gallery script failed to load');
document.head.appendChild(stable);
})();