(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const style=document.createElement('style');
style.id='stluxe-theme-v48';
style.textContent=`
@media(max-width:767px){
/* v48: only darken the three requested sections. Keep v47 structure/colors elsewhere. */
#tn13Services,
#tn13Team,
#tn13Visit{
  background:
    radial-gradient(380px 270px at 110% 10%,rgba(143,85,181,.105),transparent 69%),
    radial-gradient(280px 210px at -15% 88%,rgba(165,107,199,.045),transparent 72%),
    #d9d9de!important;
  border-top:1px solid rgba(31,28,34,.065)!important;
  border-bottom:1px solid rgba(31,28,34,.065)!important;
}

/* Services stay functional: violet active category and booking actions remain untouched. */
#tn13Services .tn31-cat:not(.active){background:rgba(250,250,252,.28)!important}
#tn13Services .tn31-service-more{background:rgba(250,250,252,.30)!important}

/* Team uses the same darker gray as services. */
#tn13Team .tn22-master-circle{
  background:linear-gradient(145deg,#ececf0,#cfcfd5)!important;
}

/* Contacts use the same gray base, with light readable cards. */
#tn13Visit{color:#1b191d!important;border-radius:0!important}
#tn13Visit .tn22-kicker,
#tn13Visit h2,
#tn13Visit .tn22-contact strong,
#tn13Visit .tn22-visit-head{color:#1b191d!important}
#tn13Visit .tn22-contact{
  background:rgba(250,250,252,.66)!important;
  border-color:rgba(59,51,63,.12)!important;
  color:#1b191d!important;
}
#tn13Visit .tn22-contact span{color:#6f6971!important}
#tn13Visit .tn22-contact svg{stroke:#76547f!important}
#tn13Visit .tn22-call{
  background:rgba(250,250,252,.40)!important;
  border-color:rgba(68,56,72,.18)!important;
  color:#2c272e!important;
}
#tn13Visit .tn22-mapwrap{background:#cfcfd4!important}
#tn13Visit .tn22-map-skeleton{
  background:linear-gradient(110deg,#d2d2d7 10%,#e1e1e5 35%,#d2d2d7 60%)!important;
  background-size:220% 100%!important;
  color:#716c74!important;
}

/* Closed status: muted red, not burgundy. Wording remains unchanged. */
#tn13Visit .tn22-status.closed{
  background:#ead9da!important;
  border-color:#cba9ab!important;
  color:#98565a!important;
}
}
`;
document.head.appendChild(style);
})();
