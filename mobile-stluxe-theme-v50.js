(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const style=document.createElement('style');
style.id='stluxe-theme-v50';
style.textContent=`
@media(max-width:767px){
/* v50 — Services + Team + Visit share one deep graphite-plum material. */
#tn13Services,
#tn13Visit{
  background:
    radial-gradient(420px 310px at 108% 8%,rgba(143,85,181,.19),transparent 67%),
    radial-gradient(300px 230px at -14% 88%,rgba(111,61,130,.10),transparent 72%),
    var(--v49-dark,#242127)!important;
  color:var(--v49-text,#f7f3f8)!important;
  border-top-color:rgba(255,255,255,.055)!important;
  border-bottom-color:rgba(255,255,255,.055)!important;
}

/* Services adapted to the same dark language as Team. */
#tn13Services .tn22-kicker{color:#aaa2ad!important}
#tn13Services .tn31-services h2,
#tn13Services .tn31-service-name,
#tn13Services .tn31-service-price{color:var(--v49-text,#f7f3f8)!important}
#tn13Services .tn31-service-detail{color:var(--v49-muted,#b9b2bd)!important}
#tn13Services .tn31-service-list,
#tn13Services .tn31-service-row{border-color:rgba(255,255,255,.10)!important}
#tn13Services .tn31-cat{
  background:rgba(255,255,255,.035)!important;
  border-color:rgba(255,255,255,.12)!important;
  color:#c9c1cc!important;
}
#tn13Services .tn31-cat.active{
  background:var(--v49-violet,#6f3d82)!important;
  border-color:var(--v49-violet,#6f3d82)!important;
  color:#fff!important;
}
#tn13Services .tn31-service-book{color:#c28fd1!important}
#tn13Services .tn31-service-more{
  background:rgba(255,255,255,.045)!important;
  border-color:rgba(255,255,255,.13)!important;
  color:#eee8f0!important;
}
#tn13Services .tn31-service-more span:last-child{color:#bfb6c2!important}

/* About returns to a light card. It is only slightly separated from its section. */
#tn38About .tn42-card{
  background:#ebe9ed!important;
  border-color:rgba(67,56,71,.10)!important;
  box-shadow:0 14px 34px rgba(43,35,47,.08)!important;
}
#tn38About .tn42-body{
  background:
    radial-gradient(250px 180px at 108% 0%,rgba(143,85,181,.055),transparent 72%),
    #ebe9ed!important;
}
#tn38About .tn42-lead{color:#211e23!important}
#tn38About .tn42-copy{color:#5c565f!important}
#tn38About .tn42-facts{border-top-color:rgba(60,52,64,.08)!important}
#tn38About .tn42-fact{
  background:#dfdce2!important;
  border-color:rgba(75,58,81,.09)!important;
  color:#2c282e!important;
  box-shadow:none!important;
}
#tn38About .tn42-fact b{color:#6f3d82!important}
#tn38About .tn42-fact span{color:#2c282e!important}

/* Contacts use the same dark background, with calm dark cards and violet accents. */
#tn13Visit{border-radius:0!important}
#tn13Visit .tn22-kicker{color:#aaa2ad!important}
#tn13Visit h2,
#tn13Visit .tn22-contact strong,
#tn13Visit .tn22-visit-head{color:var(--v49-text,#f7f3f8)!important}
#tn13Visit .tn22-contact{
  background:rgba(255,255,255,.045)!important;
  border-color:rgba(255,255,255,.11)!important;
  color:var(--v49-text,#f7f3f8)!important;
}
#tn13Visit .tn22-contact span{color:var(--v49-muted,#b9b2bd)!important}
#tn13Visit .tn22-contact svg{stroke:#c69bd2!important}
#tn13Visit .tn22-call{
  background:rgba(255,255,255,.035)!important;
  border-color:rgba(255,255,255,.13)!important;
  color:#f1ebf3!important;
}
#tn13Visit .tn22-route{
  background:var(--v49-violet,#6f3d82)!important;
  border-color:var(--v49-violet,#6f3d82)!important;
  color:#fff!important;
}
#tn13Visit .tn22-mapwrap{background:#302b34!important}
#tn13Visit .tn22-map-skeleton{
  background:linear-gradient(110deg,#302b34 10%,#3a343e 35%,#302b34 60%)!important;
  background-size:220% 100%!important;
  color:#b9b2bd!important;
}
#tn13Visit .tn22-status{border-color:rgba(255,255,255,.14)!important}
#tn13Visit .tn22-status.open{
  background:#2e4133!important;
  border-color:#4d6752!important;
  color:#a9d5b0!important;
}
#tn13Visit .tn22-status.closed{
  background:#493336!important;
  border-color:#65474b!important;
  color:#d59a9f!important;
}
#tn13Visit .tn22-footer{background:#1d1a20!important}

/* Hero live-status styling. */
.tn50-hero-status-sub{display:block}
.tn50-hero-status.open .tn50-hero-status-main{color:#3f8750!important}
.tn50-hero-status.closed .tn50-hero-status-main{color:#a45e64!important}
}
`;
document.head.appendChild(style);
})();
