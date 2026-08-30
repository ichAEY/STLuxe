(function(){
'use strict';
if(!window.matchMedia||!window.matchMedia('(max-width:767px)').matches)return;
const style=document.createElement('style');
style.id='stluxe-theme-v44';
style.textContent=`
@media(max-width:767px){
:root{--stl-ivory:#f7f2eb;--stl-greige:#e8e1de;--stl-mauve:#f0eaee;--stl-mauve-2:#e9e3e8;--stl-plum:#2b1b2c;--stl-ink:#171417}
html,body{background:var(--stl-ivory)!important}
#stluxe-tanem-v13{background:var(--stl-ivory)!important;color:var(--stl-ink)!important}

/* Hero and portfolio stay visually continuous. */
#stluxe-tanem-v13 .tn13-hero{background:linear-gradient(180deg,#f8f4ee 0%,#f8f4ee 90%,var(--stl-ivory) 100%)!important}
.tn22-top{background:#f8f4ee!important}
.tn22-media:after{background:linear-gradient(180deg,rgba(248,244,238,0),#f8f4ee 96%)!important}
.tn22-card{background:linear-gradient(180deg,rgba(249,246,241,.985) 0%,rgba(249,246,241,.985) 80%,var(--stl-ivory) 100%)!important}
.tn22-card:after{background:linear-gradient(180deg,rgba(247,242,235,0) 0%,rgba(247,242,235,.5) 48%,var(--stl-ivory) 92%)!important}
#tn13Portfolio{background:var(--stl-ivory)!important}

/* Deep plum reads almost black and quietly connects to the salon. */
.tn22-cta,#tn13Sticky button,.tn22-route,.tn31-cat.active{background:var(--stl-plum)!important;border-color:var(--stl-plum)!important}
.tn22-worklink{border-color:rgba(62,39,59,.22)!important;background:rgba(255,255,255,.18)!important}
.tn23-section-nav{background:rgba(248,243,238,.96)!important;border-bottom-color:rgba(54,35,51,.10)!important}
.tn23-section-nav button.active:after{background:var(--stl-plum)!important}

/* Separate the major sections without making the page look striped. */
#tn13Services{background:var(--stl-greige)!important;border-color:rgba(56,38,53,.07)!important}
#tn38About{background:var(--stl-mauve)!important}
#tn13Team{background:#f8f3ed!important}
#tn13Reviews{background:var(--stl-mauve-2)!important;border-color:rgba(56,38,53,.07)!important}
#tn13Visit{background:#f5efe9!important}

/* About. */
#tn38About .tn42-kicker{color:#746870!important}
#tn38About .tn42-card{background:#ece4e8!important;border-color:rgba(57,38,54,.11)!important}
#tn38About .tn42-body{background:#ece4e8!important}
#tn38About .tn42-fact{background:rgba(255,252,249,.84)!important;border-color:rgba(57,38,54,.08)!important}
#tn38About .tn42-rating{background:rgba(29,18,29,.74)!important}
#tn38About .tn42-rating-star{color:#e9dee7!important}

/* Services. */
.tn31-services .tn22-kicker{color:#70666d!important}
.tn31-cat{border-color:rgba(55,36,52,.16)!important;color:#665d63!important}
.tn31-service-list,.tn31-service-row{border-color:rgba(55,36,52,.14)!important}
.tn31-service-book{color:#5c4058!important}
.tn31-service-more{border-color:rgba(55,36,52,.20)!important;background:rgba(255,255,255,.16)!important}

/* Team. */
.tn22-master-circle{background:linear-gradient(145deg,#ebe5e7,#dcd4d9)!important;color:#948990!important}
.tn22-master-role,.tn42-team-hint{color:#776d74!important}

/* Reviews — no gold. */
.tn30-reviews .tn22-kicker{color:#70656d!important}
.tn30-stars{color:#5a3b55!important}
.tn30-review-card{background:rgba(255,255,255,.38)!important;border-color:rgba(55,36,52,.12)!important}
.tn30-review-avatar{background:#d9d0d7!important;color:#4e424b!important}
.tn30-review-all{border-color:rgba(55,36,52,.16)!important;background:rgba(255,255,255,.17)!important}

/* Visit. */
.tn22-contact{background:rgba(255,255,255,.58)!important;border-color:rgba(55,36,52,.10)!important}
.tn22-contact svg{stroke:#6c5968!important}
.tn22-mapwrap{background:#e7dfe3!important}
.tn22-map-skeleton{background:linear-gradient(110deg,#e5dde1 10%,#f1ebee 35%,#e5dde1 60%)!important;background-size:220% 100%!important}
.tn22-footer{background:#1d171d!important}
#tn13Sticky{background:rgba(248,243,238,.96)!important;border-color:rgba(55,36,52,.10)!important}
}
`;
document.head.appendChild(style);
const meta=document.querySelector('meta[name="theme-color"]');
if(meta)meta.setAttribute('content','#f7f2eb');
})();
