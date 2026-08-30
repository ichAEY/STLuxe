(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const style=document.createElement('style');
style.id='stluxe-theme-v47';
style.textContent=`
@media(max-width:767px){
:root{
  --stl-white:#fafafa;
  --stl-white-soft:#f7f7f8;
  --stl-gray:#eeeeF1;
  --stl-gray-2:#f2f1f4;
  --stl-gray-3:#e9e8ec;
  --stl-violet:#8f55b5;
  --stl-violet-soft:#a56bc7;
  --stl-violet-deep:#4c285c;
  --stl-ink:#1b191d;
  --stl-muted:#767178;
  --stl-yellow:#d9aa42;
}
html,body{background:var(--stl-white)!important}
#stluxe-tanem-v13{background:var(--stl-white)!important;color:var(--stl-ink)!important}

/* Hero + portfolio: one bright canvas, with purple only as reflected light. */
#stluxe-tanem-v13 .tn13-hero{
  background:
    radial-gradient(390px 250px at 112% 11%,rgba(145,78,184,.12),transparent 70%),
    radial-gradient(260px 190px at -12% 78%,rgba(161,101,197,.055),transparent 72%),
    linear-gradient(180deg,#fbfafb 0%,#fafafa 91%,#fafafa 100%)!important;
}
.tn22-top{
  background:
    radial-gradient(280px 160px at 108% -18%,rgba(147,80,185,.12),transparent 72%),
    #fbfafb!important;
}
.tn22-media:after{background:linear-gradient(180deg,rgba(250,250,250,0),#fafafa 96%)!important}
.tn22-card{
  background:
    radial-gradient(250px 170px at 112% 4%,rgba(151,84,190,.06),transparent 72%),
    linear-gradient(180deg,rgba(252,251,252,.985) 0%,rgba(252,251,252,.985) 81%,#fafafa 100%)!important;
}
.tn22-card:after{background:linear-gradient(180deg,rgba(250,250,250,0),rgba(250,250,250,.5) 48%,#fafafa 92%)!important}
#tn13Portfolio{
  background:
    radial-gradient(330px 230px at -14% 28%,rgba(150,82,190,.07),transparent 71%),
    #fafafa!important;
}

/* Purple is an interface accent, not a background fill. */
.tn22-cta,#tn13Sticky button,.tn31-cat.active,.tn22-route{background:var(--stl-violet-deep)!important;border-color:var(--stl-violet-deep)!important;color:#fff!important}
.tn23-section-nav{background:rgba(250,250,250,.96)!important;border-bottom-color:rgba(75,40,91,.09)!important}
.tn23-section-nav button.active:after{background:var(--stl-violet)!important}
.tn22-worklink{border-color:rgba(83,48,98,.18)!important;background:rgba(255,255,255,.4)!important}

/* Services: light neutral gray. No dots, no texture. */
#tn13Services{
  background:
    radial-gradient(380px 270px at 110% 12%,rgba(147,78,185,.12),transparent 69%),
    radial-gradient(280px 210px at -15% 86%,rgba(168,106,200,.055),transparent 72%),
    var(--stl-gray)!important;
  border-top:1px solid rgba(31,28,34,.055)!important;
  border-bottom:1px solid rgba(31,28,34,.055)!important;
}
.tn31-services .tn22-kicker{color:#706b72!important}
.tn31-cat{border-color:rgba(62,55,66,.15)!important;color:#666168!important;background:rgba(255,255,255,.12)!important}
.tn31-service-list,.tn31-service-row{border-color:rgba(50,46,53,.12)!important}
.tn31-service-book{color:#673b78!important}
.tn31-service-more{border-color:rgba(72,51,80,.17)!important;background:rgba(255,255,255,.30)!important}

/* About: bright white-gray, with one confident violet glow around the salon image. */
#tn38About{
  background:
    radial-gradient(430px 310px at 108% 18%,rgba(150,79,190,.155),transparent 67%),
    radial-gradient(300px 220px at -16% 84%,rgba(157,91,194,.06),transparent 73%),
    var(--stl-white-soft)!important;
}
#tn38About .tn42-kicker{color:#6f6971!important}
#tn38About .tn42-card{
  background:#efedf1!important;
  border-color:rgba(75,59,80,.10)!important;
  box-shadow:0 15px 36px rgba(45,34,48,.075)!important;
}
#tn38About .tn42-photo{background:#342338!important}
#tn38About .tn42-photo:after{
  content:'';position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(280px 190px at 88% 12%,rgba(189,121,222,.18),transparent 70%);
}
#tn38About .tn42-photo img{filter:brightness(1.17) saturate(1.08) contrast(.98)!important}
#tn38About .tn42-body{
  background:
    radial-gradient(250px 180px at 110% 0%,rgba(157,91,194,.075),transparent 70%),
    #efedf1!important;
}
#tn38About .tn42-lead{color:#201d22!important}
#tn38About .tn42-copy{color:#5b565d!important}
#tn38About .tn42-fact{
  background:#e4e1e7!important;
  border-color:rgba(76,54,83,.095)!important;
  box-shadow:none!important;
  color:#2b272d!important;
}
#tn38About .tn42-rating{background:rgba(62,35,72,.74)!important;border-color:rgba(255,255,255,.25)!important}
#tn38About .tn42-rating-star{color:#f0c45d!important}

/* Team: slightly deeper gray to clearly separate it from About. */
#tn13Team{
  background:
    radial-gradient(390px 280px at -15% 18%,rgba(153,84,190,.09),transparent 70%),
    radial-gradient(310px 230px at 112% 86%,rgba(169,108,201,.06),transparent 72%),
    var(--stl-gray-2)!important;
}
.tn22-master-circle{background:linear-gradient(145deg,#f0eff2,#dedce1)!important;color:#99949b!important}
.tn22-master-role,.tn42-team-hint{color:#777278!important}

/* Reviews: bright again; yellow rating stars restore the familiar rating language. */
#tn13Reviews{
  background:
    radial-gradient(390px 270px at 111% 8%,rgba(150,80,190,.12),transparent 69%),
    radial-gradient(270px 210px at -14% 84%,rgba(166,102,200,.05),transparent 73%),
    #fafafa!important;
  border-top:1px solid rgba(31,28,34,.055)!important;
  border-bottom:1px solid rgba(31,28,34,.055)!important;
}
.tn30-reviews .tn22-kicker{color:#6f6a71!important}
.tn30-stars{color:var(--stl-yellow)!important}
.tn30-review-card{background:rgba(245,244,247,.88)!important;border-color:rgba(69,61,73,.105)!important}
.tn30-review-avatar{background:#e4e2e7!important;color:#504a52!important}
.tn30-review-meta{color:#88828a!important}
.tn30-review-all{background:#f1f0f3!important;border-color:rgba(67,58,71,.14)!important}

/* Visit: light neutral contact section. No rounded section edges. */
#tn13Visit{
  background:
    radial-gradient(430px 300px at 110% 2%,rgba(146,76,184,.16),transparent 68%),
    radial-gradient(300px 220px at -15% 82%,rgba(169,106,200,.07),transparent 72%),
    var(--stl-gray-3)!important;
  color:var(--stl-ink)!important;
  border-radius:0!important;
  overflow:hidden!important;
}
#tn13Visit .tn22-kicker,#tn13Visit h2,#tn13Visit .tn22-contact strong,#tn13Visit .tn22-visit-head{color:var(--stl-ink)!important}
#tn13Visit .tn22-contact{background:rgba(255,255,255,.70)!important;border-color:rgba(59,51,63,.11)!important;color:var(--stl-ink)!important}
#tn13Visit .tn22-contact span{color:#777179!important}
#tn13Visit .tn22-contact svg{stroke:#76547f!important}
#tn13Visit .tn22-call{border-color:rgba(68,56,72,.17)!important;color:#2c272e!important;background:rgba(255,255,255,.45)!important}
#tn13Visit .tn22-route{background:var(--stl-violet-deep)!important;color:#fff!important}
#tn13Visit .tn22-mapwrap{background:#dddbe0!important}
#tn13Visit .tn22-map-skeleton{background:linear-gradient(110deg,#dedce1 10%,#eeeeF1 35%,#dedce1 60%)!important;background-size:220% 100%!important;color:#7f7981!important}
#tn13Visit .tn22-status{border-color:rgba(63,54,67,.18)!important}
#tn13Visit .tn22-footer{background:#403744!important}

/* Floating booking island stays clean and neutral. */
#tn13Sticky{background:rgba(250,250,250,.96)!important;border-color:rgba(72,47,82,.10)!important}
}
`;
document.head.appendChild(style);
const meta=document.querySelector('meta[name="theme-color"]');
if(meta)meta.setAttribute('content','#fafafa');
})();
