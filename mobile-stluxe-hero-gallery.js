(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;

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