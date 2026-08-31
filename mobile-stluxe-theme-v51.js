(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const style=document.createElement('style');
style.id='stluxe-theme-v51';
style.textContent=`
@media(max-width:767px){
/* v51: full-screen gallery follows the current STLuxe dark visual language. Photos stay untouched. */
#tn13Gallery{
  background:
    radial-gradient(430px 300px at 108% 2%,rgba(143,85,181,.17),transparent 68%),
    radial-gradient(320px 230px at -12% 92%,rgba(111,61,130,.08),transparent 72%),
    #242127!important;
  color:#f7f3f8!important;
}
#tn13Gallery .tn22-gallery-back{
  color:#f7f3f8!important;
}
#tn13Gallery .tn22-gallery-title strong{
  color:#f7f3f8!important;
}
#tn13Gallery .tn22-gallery-title span{
  color:#b9b2bd!important;
}
#tn13Gallery .tn22-gallery-tabs{
  border-color:rgba(255,255,255,.11)!important;
  background:rgba(255,255,255,.025)!important;
}
#tn13Gallery .tn22-gallery-tab{
  color:#c6bec9!important;
  background:transparent!important;
}
#tn13Gallery .tn22-gallery-tab.active{
  background:#6f3d82!important;
  color:#fff!important;
}
#tn13Gallery .tn23-gallery-empty{
  color:#b9b2bd!important;
}
#tn13Gallery .tn22-gallery-tile{
  background:#302b34!important;
  box-shadow:0 8px 22px rgba(0,0,0,.12)!important;
}
}
`;
document.head.appendChild(style);
})();
