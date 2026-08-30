(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const style=document.createElement('style');
style.id='stluxe-theme-v45';
style.textContent=`
@media(max-width:767px){
:root{
  --stl-base:#f7f2eb;
  --stl-hero:#f8f4ee;
  --stl-services:#eee6dd;
  --stl-about:#e4dbd3;
  --stl-about-card:#d2c5bc;
  --stl-about-fact:#e0d5cd;
  --stl-team:#f6f1eb;
  --stl-reviews:#eae1d9;
  --stl-plum:#261b25;
  --stl-plum-soft:#3c2939;
  --stl-ink:#1b1818;
  --stl-muted:#736965;
}
html,body{background:var(--stl-base)!important}
#stluxe-tanem-v13{background:var(--stl-base)!important;color:var(--stl-ink)!important}

/* 1 + 2 stay as one continuous canvas. */
#stluxe-tanem-v13 .tn13-hero{background:linear-gradient(180deg,var(--stl-hero) 0%,var(--stl-hero) 90%,var(--stl-base) 100%)!important}
.tn22-top{background:var(--stl-hero)!important}
.tn22-media:after{background:linear-gradient(180deg,rgba(248,244,238,0),var(--stl-hero) 96%)!important}
.tn22-card{background:linear-gradient(180deg,rgba(249,246,241,.985) 0%,rgba(249,246,241,.985) 80%,var(--stl-base) 100%)!important}
.tn22-card:after{background:linear-gradient(180deg,rgba(247,242,235,0) 0%,rgba(247,242,235,.50) 48%,var(--stl-base) 92%)!important}
#tn13Portfolio{background:var(--stl-base)!important}

/* One restrained accent instead of decorative gold/purple. */
.tn22-cta,#tn13Sticky button,.tn31-cat.active{background:var(--stl-plum)!important;border-color:var(--stl-plum)!important;color:#fff!important}
.tn22-route{background:var(--stl-plum)!important;color:#fff!important}
.tn23-section-nav{background:rgba(248,244,238,.96)!important;border-bottom-color:rgba(38,27,37,.09)!important}
.tn23-section-nav button.active:after{background:var(--stl-plum)!important}
.tn22-worklink{border-color:rgba(38,27,37,.18)!important;background:rgba(255,255,255,.12)!important}

/* Services: warm paper with a microscopic dot texture. */
#tn13Services{
  background-color:var(--stl-services)!important;
  background-image:radial-gradient(circle,rgba(255,255,255,.46) .7px,transparent .8px)!important;
  background-size:10px 10px!important;
  border-top:1px solid rgba(50,40,36,.07)!important;
  border-bottom:1px solid rgba(50,40,36,.07)!important;
}
.tn31-services .tn22-kicker{color:#756a63!important}
.tn31-cat{border-color:rgba(47,39,35,.15)!important;color:#675e58!important}
.tn31-service-list,.tn31-service-row{border-color:rgba(47,39,35,.14)!important}
.tn31-service-book{color:#5b4855!important}
.tn31-service-more{border-color:rgba(47,39,35,.19)!important;background:rgba(255,255,255,.13)!important}

/* About: layered stone tones, not white cards on a colored stripe. */
#tn38About{
  background-color:var(--stl-about)!important;
  background-image:radial-gradient(260px 190px at 108% 4%,rgba(61,38,57,.045),transparent 72%)!important;
}
#tn38About .tn42-kicker{color:#746963!important}
#tn38About .tn42-card{background:var(--stl-about-card)!important;border-color:rgba(47,37,34,.09)!important;box-shadow:0 14px 34px rgba(47,37,31,.07)!important}
#tn38About .tn42-body{background:var(--stl-about-card)!important}
#tn38About .tn42-lead{color:#1d1919!important}
#tn38About .tn42-copy{color:#554c48!important}
#tn38About .tn42-fact{background:var(--stl-about-fact)!important;border-color:rgba(47,37,34,.08)!important;box-shadow:none!important;color:#292321!important}
#tn38About .tn42-rating{background:rgba(29,22,28,.76)!important;border-color:rgba(255,255,255,.22)!important}
#tn38About .tn42-rating-star{color:#eee7e1!important}

/* Team: air and one nearly invisible plum light source. */
#tn13Team{
  background-color:var(--stl-team)!important;
  background-image:radial-gradient(300px 230px at 112% 4%,rgba(59,35,55,.045),transparent 72%)!important;
}
.tn22-master-circle{background:linear-gradient(145deg,#ebe5df,#ddd5ce)!important;color:#968b84!important}
.tn22-master-role,.tn42-team-hint{color:#786e68!important}

/* Reviews: warm greige with a quieter repeat of the dot motif. */
#tn13Reviews{
  background-color:var(--stl-reviews)!important;
  background-image:radial-gradient(circle,rgba(255,255,255,.25) .65px,transparent .75px)!important;
  background-size:16px 16px!important;
  border-top:1px solid rgba(50,40,36,.07)!important;
  border-bottom:1px solid rgba(50,40,36,.07)!important;
}
.tn30-reviews .tn22-kicker{color:#746962!important}
.tn30-stars{color:var(--stl-plum-soft)!important}
.tn30-review-card{background:rgba(255,255,255,.28)!important;border-color:rgba(49,39,35,.11)!important}
.tn30-review-avatar{background:#d8cec6!important;color:#514945!important}
.tn30-review-all{background:rgba(255,255,255,.12)!important;border-color:rgba(49,39,35,.15)!important}

/* Visit: the only fully dark section, echoing the salon without turning the site purple. */
#tn13Visit{background:var(--stl-plum)!important;color:#f8f2ed!important}
#tn13Visit .tn22-kicker,#tn13Visit h2,#tn13Visit .tn22-contact strong,#tn13Visit .tn22-visit-head{color:#f8f2ed!important}
#tn13Visit .tn22-contact{background:rgba(255,255,255,.055)!important;border-color:rgba(255,255,255,.12)!important;color:#f8f2ed!important}
#tn13Visit .tn22-contact span{color:rgba(248,242,237,.66)!important}
#tn13Visit .tn22-contact svg{stroke:#d9ced5!important}
#tn13Visit .tn22-call{border-color:rgba(255,255,255,.18)!important;color:#f8f2ed!important;background:rgba(255,255,255,.025)!important}
#tn13Visit .tn22-route{background:#f3ece6!important;color:#241b23!important}
#tn13Visit .tn22-mapwrap{background:#362a34!important}
#tn13Visit .tn22-map-skeleton{background:linear-gradient(110deg,#352a33 10%,#43353f 35%,#352a33 60%)!important;background-size:220% 100%!important;color:#cbbfc7!important}
#tn13Visit .tn22-status{border-color:rgba(255,255,255,.20)!important}
#tn13Visit .tn22-footer{background:#171216!important}

/* Floating booking island stays light so it remains functional above every section. */
#tn13Sticky{background:rgba(248,244,238,.96)!important;border-color:rgba(38,27,37,.10)!important}
}
`;
document.head.appendChild(style);
const meta=document.querySelector('meta[name="theme-color"]');
if(meta)meta.setAttribute('content','#f7f2eb');
})();
