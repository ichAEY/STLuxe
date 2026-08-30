(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const style=document.createElement('style');
style.id='stluxe-theme-v49';
style.textContent=`
@media(max-width:767px){
:root{
  --v49-dark:#242127;
  --v49-dark-2:#2d2931;
  --v49-dark-3:#37313b;
  --v49-line:rgba(255,255,255,.11);
  --v49-text:#f7f3f8;
  --v49-muted:#b9b2bd;
  --v49-violet:#6f3d82;
  --v49-violet-bright:#8d55a5;
}

/* ABOUT: keep the section light, but turn the actual STLuxe story card into a confident dark object. */
#tn38About .tn42-card{
  background:
    radial-gradient(300px 220px at 105% 3%,rgba(143,85,181,.16),transparent 70%),
    var(--v49-dark-2)!important;
  border-color:rgba(87,69,93,.26)!important;
  box-shadow:0 18px 42px rgba(29,24,31,.18)!important;
}
#tn38About .tn42-body{
  background:
    radial-gradient(260px 190px at 108% 2%,rgba(143,85,181,.11),transparent 72%),
    var(--v49-dark-2)!important;
}
#tn38About .tn42-lead{color:var(--v49-text)!important}
#tn38About .tn42-copy{color:#c8c1cb!important}
#tn38About .tn42-facts{border-top-color:rgba(255,255,255,.09)!important}
#tn38About .tn42-fact{
  background:#39333d!important;
  border-color:rgba(255,255,255,.085)!important;
  color:var(--v49-text)!important;
  box-shadow:none!important;
}
#tn38About .tn42-fact b{color:#b887c7!important}
#tn38About .tn42-fact span{color:#f2edf4!important}

/* TEAM: genuinely dark, not medium gray. */
#tn13Team{
  background:
    radial-gradient(420px 310px at 108% 8%,rgba(143,85,181,.19),transparent 67%),
    radial-gradient(300px 230px at -14% 88%,rgba(111,61,130,.10),transparent 72%),
    var(--v49-dark)!important;
  color:var(--v49-text)!important;
  border-top-color:rgba(255,255,255,.055)!important;
  border-bottom-color:rgba(255,255,255,.055)!important;
}
#tn13Team .tn22-kicker{color:#aaa2ad!important}
#tn13Team .tn22-team h2{color:var(--v49-text)!important}
#tn13Team .tn22-master-name{color:var(--v49-text)!important}
#tn13Team .tn22-master-role{color:var(--v49-muted)!important}
#tn13Team .tn42-team-hint{color:#aaa2ad!important}
#tn13Team .tn22-master-circle{
  background:
    radial-gradient(circle at 42% 30%,rgba(255,255,255,.07),transparent 45%),
    linear-gradient(145deg,#3c3641,#302b34)!important;
  color:#cbbfd0!important;
  border:1px solid rgba(255,255,255,.085)!important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.035)!important;
}
#tn13Team .tn22-master-circle svg{opacity:.92!important}

/* MASTER PAGE: same dark design language as Team. */
.tn22-master-page{
  background:
    radial-gradient(430px 310px at 106% 0%,rgba(143,85,181,.18),transparent 68%),
    radial-gradient(300px 220px at -14% 80%,rgba(111,61,130,.08),transparent 72%),
    var(--v49-dark)!important;
  color:var(--v49-text)!important;
}
.tn22-master-page .tn22-back{color:var(--v49-text)!important}
.tn22-master-page .tn22-master-brand{color:var(--v49-text)!important}
.tn22-master-page .tn22-profile-circle{
  background:
    radial-gradient(circle at 42% 31%,rgba(255,255,255,.075),transparent 43%),
    linear-gradient(145deg,#3d3742,#2f2a33)!important;
  color:#cbbfd0!important;
  border:1px solid rgba(255,255,255,.085)!important;
  box-shadow:0 14px 34px rgba(0,0,0,.16)!important;
}
.tn22-master-page .tn22-profile h1{color:var(--v49-text)!important}
.tn22-master-page .tn22-profile-role{color:var(--v49-muted)!important}
.tn22-master-page .tn22-salon-rating{color:#d8d1da!important}
.tn22-master-page .tn22-salon-rating b{color:#e0ad43!important}
.tn22-master-page .tn22-master-tabs{
  gap:7px!important;
}
.tn22-master-page .tn22-master-tabs button{
  background:rgba(255,255,255,.035)!important;
  border-color:var(--v49-line)!important;
  color:#c6bec9!important;
}
.tn22-master-page .tn22-master-tabs button.active{
  background:var(--v49-violet)!important;
  border-color:var(--v49-violet)!important;
  color:#fff!important;
}
.tn22-master-page .tn22-master-content h3{color:var(--v49-text)!important}
.tn22-master-page .tn22-master-about{color:#d0c9d2!important}
.tn22-master-page .tn22-master-service{
  border-bottom-color:rgba(255,255,255,.09)!important;
}
.tn22-master-page .tn22-master-service b{color:#f0ebf2!important}
.tn22-master-page .tn22-master-service span{color:#d9d0dc!important}
.tn22-master-page .tn22-master-review{
  background:#302b34!important;
  border-color:rgba(255,255,255,.09)!important;
}
.tn22-master-page .tn22-master-review strong{color:var(--v49-text)!important}
.tn22-master-page .tn22-master-review p{color:#c9c1cc!important}
.tn22-master-page .tn22-master-book{
  background:linear-gradient(180deg,var(--v49-violet-bright),var(--v49-violet))!important;
  color:#fff!important;
  box-shadow:0 14px 36px rgba(73,37,88,.34)!important;
}
}
`;
document.head.appendChild(style);
})();
