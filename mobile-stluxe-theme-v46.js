(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const style=document.createElement('style');
style.id='stluxe-theme-v46';
style.textContent=`
@media(max-width:767px){
:root{
  --stl-base:#f6f0e8;
  --stl-hero:#f8f4ef;
  --stl-services:#eee4db;
  --stl-about:#e5dad2;
  --stl-about-card:#eadfd7;
  --stl-about-fact:#d9cbc5;
  --stl-team:#f5efe9;
  --stl-reviews:#ebe0d9;
  --stl-visit:#74635d;
  --stl-visit-card:#806f68;
  --stl-plum:#563552;
  --stl-plum-deep:#3f263d;
  --stl-violet:#8a57a0;
  --stl-ink:#1b1818;
  --stl-muted:#746965;
}
html,body{background:var(--stl-base)!important}
#stluxe-tanem-v13{background:var(--stl-base)!important;color:var(--stl-ink)!important}

/* Hero + portfolio remain one canvas. Violet is light, not a section color. */
#stluxe-tanem-v13 .tn13-hero{
  background:
    radial-gradient(320px 220px at 103% 17%,rgba(132,82,154,.115),transparent 72%),
    linear-gradient(180deg,var(--stl-hero) 0%,var(--stl-hero) 90%,var(--stl-base) 100%)!important;
}
.tn22-top{
  background:
    radial-gradient(250px 150px at 105% -15%,rgba(133,82,156,.105),transparent 75%),
    var(--stl-hero)!important;
}
.tn22-media:after{background:linear-gradient(180deg,rgba(248,244,239,0),var(--stl-hero) 96%)!important}
.tn22-card{
  background:
    radial-gradient(210px 150px at 108% 8%,rgba(133,82,156,.055),transparent 74%),
    linear-gradient(180deg,rgba(249,246,242,.985) 0%,rgba(249,246,242,.985) 80%,var(--stl-base) 100%)!important;
}
.tn22-card:after{background:linear-gradient(180deg,rgba(246,240,232,0) 0%,rgba(246,240,232,.48) 48%,var(--stl-base) 92%)!important}
#tn13Portfolio{
  background:
    radial-gradient(280px 210px at -12% 31%,rgba(132,82,154,.055),transparent 72%),
    var(--stl-base)!important;
}

/* Deep violet-plum is the interface accent. */
.tn22-cta,#tn13Sticky button,.tn31-cat.active{background:var(--stl-plum-deep)!important;border-color:var(--stl-plum-deep)!important;color:#fff!important}
.tn22-route{background:var(--stl-plum-deep)!important;color:#fff!important}
.tn23-section-nav{background:rgba(248,244,239,.96)!important;border-bottom-color:rgba(73,43,72,.10)!important}
.tn23-section-nav button.active:after{background:var(--stl-plum)!important}
.tn22-worklink{border-color:rgba(78,45,77,.18)!important;background:rgba(255,255,255,.13)!important}

/* Services: warm beige paper + dots + a soft violet light source. */
#tn13Services{
  background-color:var(--stl-services)!important;
  background-image:
    radial-gradient(270px 210px at -11% 18%,rgba(132,82,154,.105),transparent 72%),
    radial-gradient(230px 180px at 111% 84%,rgba(132,82,154,.06),transparent 73%),
    radial-gradient(circle,rgba(255,255,255,.47) .7px,transparent .8px)!important;
  background-size:auto,auto,10px 10px!important;
  border-top:1px solid rgba(57,43,39,.07)!important;
  border-bottom:1px solid rgba(57,43,39,.07)!important;
}
.tn31-services .tn22-kicker{color:#766862!important}
.tn31-cat{border-color:rgba(65,43,62,.16)!important;color:#675d59!important}
.tn31-service-list,.tn31-service-row{border-color:rgba(54,41,37,.14)!important}
.tn31-service-book{color:#684668!important}
.tn31-service-more{border-color:rgba(65,43,62,.18)!important;background:rgba(255,255,255,.15)!important}

/* About: brighter card, non-white facts and a visible but soft violet macro glow. */
#tn38About{
  background-color:var(--stl-about)!important;
  background-image:
    radial-gradient(340px 250px at 108% 14%,rgba(137,84,160,.16),transparent 68%),
    radial-gradient(260px 200px at -8% 82%,rgba(112,64,135,.075),transparent 72%)!important;
}
#tn38About .tn42-kicker{color:#756661!important}
#tn38About .tn42-card{
  background:linear-gradient(145deg,#eee4dc 0%,var(--stl-about-card) 68%,#e4d6d0 100%)!important;
  border-color:rgba(72,47,68,.10)!important;
  box-shadow:0 16px 38px rgba(71,48,63,.085)!important;
}
#tn38About .tn42-photo{background:#3b263f!important}
#tn38About .tn42-photo:after{
  content:'';position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(240px 160px at 88% 15%,rgba(178,116,203,.12),transparent 72%);
}
#tn38About .tn42-photo img{filter:brightness(1.13) saturate(1.04) contrast(.98)!important}
#tn38About .tn42-body{
  background:
    radial-gradient(220px 180px at 108% 5%,rgba(132,82,154,.065),transparent 70%),
    var(--stl-about-card)!important;
}
#tn38About .tn42-lead{color:#211b20!important}
#tn38About .tn42-copy{color:#5c504d!important}
#tn38About .tn42-fact{
  background:linear-gradient(180deg,#ddd0ca 0%,var(--stl-about-fact) 100%)!important;
  border-color:rgba(76,48,72,.10)!important;
  box-shadow:0 4px 12px rgba(71,48,63,.035)!important;
  color:#2d2528!important;
}
#tn38About .tn42-rating{background:rgba(63,38,61,.72)!important;border-color:rgba(255,255,255,.24)!important}
#tn38About .tn42-rating-star{color:#f2eaf3!important}

/* Team: clean ivory with a larger purple reflection, still mostly neutral. */
#tn13Team{
  background-color:var(--stl-team)!important;
  background-image:
    radial-gradient(330px 240px at 112% 10%,rgba(136,83,159,.105),transparent 72%),
    radial-gradient(230px 170px at -14% 88%,rgba(132,82,154,.045),transparent 74%)!important;
}
.tn22-master-circle{background:linear-gradient(145deg,#ebe3df,#ddd2cf)!important;color:#988b88!important}
.tn22-master-role,.tn42-team-hint{color:#786c68!important}

/* Reviews: warm neutral + a quiet violet halo + sparse texture. */
#tn13Reviews{
  background-color:var(--stl-reviews)!important;
  background-image:
    radial-gradient(300px 220px at -10% 12%,rgba(132,82,154,.09),transparent 72%),
    radial-gradient(230px 190px at 112% 78%,rgba(132,82,154,.055),transparent 72%),
    radial-gradient(circle,rgba(255,255,255,.25) .65px,transparent .75px)!important;
  background-size:auto,auto,16px 16px!important;
  border-top:1px solid rgba(57,43,39,.07)!important;
  border-bottom:1px solid rgba(57,43,39,.07)!important;
}
.tn30-reviews .tn22-kicker{color:#746760!important}
.tn30-stars{color:#68456c!important}
.tn30-review-card{background:rgba(255,252,249,.34)!important;border-color:rgba(69,45,66,.11)!important}
.tn30-review-avatar{background:#d9cdc9!important;color:#54464b!important}
.tn30-review-all{background:rgba(255,255,255,.13)!important;border-color:rgba(69,45,66,.15)!important}

/* Visit: dark beige, not black. Square section edge; violet only as reflected light. */
#tn13Visit{
  background-color:var(--stl-visit)!important;
  background-image:
    radial-gradient(360px 260px at 108% 0%,rgba(125,69,145,.18),transparent 69%),
    radial-gradient(280px 220px at -14% 72%,rgba(109,62,129,.09),transparent 73%)!important;
  color:#fbf6f2!important;
  border-radius:0!important;
  overflow:hidden!important;
}
#tn13Visit .tn22-kicker,#tn13Visit h2,#tn13Visit .tn22-contact strong,#tn13Visit .tn22-visit-head{color:#fbf6f2!important}
#tn13Visit .tn22-contact{background:rgba(255,248,242,.09)!important;border-color:rgba(255,245,239,.16)!important;color:#fbf6f2!important}
#tn13Visit .tn22-contact span{color:rgba(251,246,242,.70)!important}
#tn13Visit .tn22-contact svg{stroke:#eee1dc!important}
#tn13Visit .tn22-call{border-color:rgba(255,245,239,.24)!important;color:#fbf6f2!important;background:rgba(255,248,242,.045)!important}
#tn13Visit .tn22-route{background:#efe4dc!important;color:#3f302d!important}
#tn13Visit .tn22-mapwrap{background:#81706a!important}
#tn13Visit .tn22-map-skeleton{background:linear-gradient(110deg,#7a6963 10%,#8c7a73 35%,#7a6963 60%)!important;background-size:220% 100%!important;color:#eee1dc!important}
#tn13Visit .tn22-status{border-color:rgba(255,245,239,.28)!important}
#tn13Visit .tn22-footer{background:#594b47!important}

/* Floating booking remains neutral and readable above every background. */
#tn13Sticky{background:rgba(248,244,239,.96)!important;border-color:rgba(73,43,72,.10)!important}
}
`;
document.head.appendChild(style);
const meta=document.querySelector('meta[name="theme-color"]');
if(meta)meta.setAttribute('content','#f6f0e8');
})();
