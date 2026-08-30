from pathlib import Path

p=Path('mobile-stluxe-final-v22.js')
s=p.read_text()

# Hero: keep the approved card but softly dissolve its lower edge into portfolio.
old_card=".tn22-card{position:absolute;z-index:8;top:343px;left:15px;right:15px;bottom:0;height:auto;padding:20px;border-radius:13px 13px 0 0;background:linear-gradient(180deg,rgba(249,246,241,.985) 0%,rgba(249,246,241,.985) 78%,#f7f2eb 100%);box-shadow:0 -2px 18px rgba(47,37,31,.09),0 -1px 4px rgba(47,37,31,.05);text-align:center}"
new_card=old_card+".tn22-card:after{content:'';position:absolute;left:-15px;right:-15px;bottom:-1px;height:82px;background:linear-gradient(180deg,rgba(247,242,235,0) 0%,rgba(247,242,235,.55) 46%,#f7f2eb 88%);pointer-events:none}"
if old_card not in s:
    raise SystemExit('hero card style not found')
s=s.replace(old_card,new_card,1)

# Top section nav: same surface as sticky card, grey inactive labels, more individual clean sans.
old_nav=".tn23-section-nav{position:fixed;z-index:70;top:0;left:0;right:0;width:100%;height:48px;display:flex;align-items:stretch;overflow-x:auto;scrollbar-width:none;background:rgba(255,255,255,.98);border-bottom:1px solid #e7e4e1;box-shadow:0 3px 12px rgba(30,25,22,.035);transform:translateY(-110%);opacity:0;pointer-events:none;transition:transform .28s cubic-bezier(.22,.78,.25,1),opacity .2s ease;will-change:transform,opacity;scroll-behavior:smooth}.tn23-section-nav.visible{transform:translateY(0);opacity:1;pointer-events:auto}.tn23-section-nav::-webkit-scrollbar{display:none}.tn23-section-nav button{position:relative;flex:0 0 auto;min-width:82px;padding:0 11px;border:0;background:transparent;color:#5f5d5a;font:500 10.5px/1 'Manrope',Arial,sans-serif;white-space:nowrap}.tn23-section-nav button.active{color:#171513;font-weight:600}.tn23-section-nav button.active:after{content:'';position:absolute;left:12px;right:12px;bottom:-1px;height:3px;border-radius:3px 3px 0 0;background:#171513}"
new_nav=".tn23-section-nav{position:fixed;z-index:70;top:0;left:0;right:0;width:100%;height:48px;display:flex;align-items:stretch;overflow-x:auto;scrollbar-width:none;background:rgba(249,245,239,.96);border-bottom:1px solid rgba(61,49,43,.12);box-shadow:0 8px 26px rgba(48,36,30,.07);backdrop-filter:blur(18px);transform:translateY(-110%);opacity:0;pointer-events:none;transition:transform .28s cubic-bezier(.22,.78,.25,1),opacity .2s ease;will-change:transform,opacity;scroll-behavior:smooth}.tn23-section-nav.visible{transform:translateY(0);opacity:1;pointer-events:auto}.tn23-section-nav::-webkit-scrollbar{display:none}.tn23-section-nav button{position:relative;flex:0 0 auto;min-width:82px;padding:0 11px;border:0;background:transparent;color:#7b746f;font:500 11px/1 'Avenir Next',Avenir,-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;letter-spacing:.012em;white-space:nowrap}.tn23-section-nav button.active{color:#171513;font-weight:600}.tn23-section-nav button.active:after{content:'';position:absolute;left:12px;right:12px;bottom:-1px;height:3px;border-radius:3px 3px 0 0;background:#171513}"
if old_nav not in s:
    raise SystemExit('section nav style not found')
s=s.replace(old_nav,new_nav,1)

# Service prices: slightly larger and clearly black, no animation.
old_price=".tn31-service-price{font:500 18px/1 'Cormorant Garamond',Georgia,serif;letter-spacing:.01em;color:#514943;white-space:nowrap}"
new_price=".tn31-service-price{font:500 20px/1 'Cormorant Garamond',Georgia,serif;letter-spacing:.005em;color:#171513;white-space:nowrap}"
if old_price not in s:
    raise SystemExit('service price style not found')
s=s.replace(old_price,new_price,1)
old_small=".tn31-service-price{font-size:17px}}"
new_small=".tn31-service-price{font-size:19px}}"
if old_small not in s:
    raise SystemExit('small service price style not found')
s=s.replace(old_small,new_small,1)

# Sticky booking button: same style, only make it pill-shaped.
old_sticky="#tn13Sticky button{position:relative;overflow:hidden;height:46px!important;border-radius:13px!important;background:#171513!important;color:#fff!important;padding:0 19px!important;font:600 12px/1 'Manrope',Arial,sans-serif!important}"
new_sticky="#tn13Sticky button{position:relative;overflow:hidden;height:46px!important;border-radius:999px!important;background:#171513!important;color:#fff!important;padding:0 19px!important;font:600 12px/1 'Manrope',Arial,sans-serif!important}"
if old_sticky not in s:
    raise SystemExit('sticky button style not found')
s=s.replace(old_sticky,new_sticky,1)

# Section navigation behavior: Portfolio goes to hero; other buttons land precisely below fixed nav
# and keep their selected state while smooth scrolling.
old_js="""const sectionIds=['tn13Portfolio','tn13Services','tn13Team','tn13Reviews','tn13Visit'];const sectionNav=document.createElement('nav');sectionNav.className='tn23-section-nav';sectionNav.setAttribute('aria-hidden','true');sectionNav.innerHTML=[['tn13Portfolio','Портфолио'],['tn13Services','Услуги'],['tn13Team','Команда'],['tn13Reviews','Отзывы'],['tn13Visit','Визит']].map((x,i)=>`<button type=\"button\" data-section=\"${x[0]}\" class=\"${i===0?'active':''}\">${x[1]}</button>`).join('');hero.insertAdjacentElement('afterend',sectionNav);
let activeSection='tn13Portfolio',navRaf=0;
function revealActiveNavButton(btn){const navRect=sectionNav.getBoundingClientRect(),btnRect=btn.getBoundingClientRect(),pad=10;let delta=0;if(btnRect.right>navRect.right-pad)delta=btnRect.right-(navRect.right-pad);else if(btnRect.left<navRect.left+pad)delta=btnRect.left-(navRect.left+pad);if(Math.abs(delta)>1)sectionNav.scrollBy({left:delta,behavior:'smooth'})}
function setActiveSection(id){if(!id)return;activeSection=id;const btn=sectionNav.querySelector(`[data-section=\"${id}\"]`);if(!btn)return;sectionNav.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===btn));revealActiveNavButton(btn)}
sectionNav.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>{setActiveSection(b.dataset.section);document.getElementById(b.dataset.section)?.scrollIntoView({behavior:'smooth',block:'start'})});
function updateSectionNav(){navRaf=0;const heroPassed=hero.getBoundingClientRect().bottom<=0;sectionNav.classList.toggle('visible',heroPassed);sectionNav.setAttribute('aria-hidden',heroPassed?'false':'true');const line=(heroPassed?sectionNav.getBoundingClientRect().bottom:0)+2;let chosen=sectionIds[0];for(const id of sectionIds){const el=document.getElementById(id);if(!el)continue;const r=el.getBoundingClientRect();if(r.top<=line&&r.bottom>line){chosen=id;break}if(r.top<=line)chosen=id}if(chosen!==activeSection)setActiveSection(chosen)}
window.addEventListener('scroll',()=>{if(!navRaf)navRaf=requestAnimationFrame(updateSectionNav)},{passive:true});window.addEventListener('resize',updateSectionNav,{passive:true});requestAnimationFrame(updateSectionNav);"""
new_js="""const sectionIds=['tn13Portfolio','tn13Services','tn13Team','tn13Reviews','tn13Visit'];const sectionNav=document.createElement('nav');sectionNav.className='tn23-section-nav';sectionNav.setAttribute('aria-hidden','true');sectionNav.innerHTML=[['tn13Portfolio','Портфолио'],['tn13Services','Услуги'],['tn13Team','Команда'],['tn13Reviews','Отзывы'],['tn13Visit','Визит']].map((x,i)=>`<button type=\"button\" data-section=\"${x[0]}\" class=\"${i===0?'active':''}\">${x[1]}</button>`).join('');hero.insertAdjacentElement('afterend',sectionNav);
let activeSection='tn13Portfolio',navRaf=0,navTargetLock=null,navUnlockTimer=0;
function revealActiveNavButton(btn){const navRect=sectionNav.getBoundingClientRect(),btnRect=btn.getBoundingClientRect(),pad=10;let delta=0;if(btnRect.right>navRect.right-pad)delta=btnRect.right-(navRect.right-pad);else if(btnRect.left<navRect.left+pad)delta=btnRect.left-(navRect.left+pad);if(Math.abs(delta)>1)sectionNav.scrollBy({left:delta,behavior:'smooth'})}
function setActiveSection(id){if(!id)return;activeSection=id;const btn=sectionNav.querySelector(`[data-section=\"${id}\"]`);if(!btn)return;sectionNav.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===btn));revealActiveNavButton(btn)}
function scrollSectionFromNav(id){clearTimeout(navUnlockTimer);if(id==='tn13Portfolio'){navTargetLock=null;setActiveSection('tn13Portfolio');const top=Math.max(0,window.scrollY+hero.getBoundingClientRect().top);window.scrollTo({top,behavior:'smooth'});return}const el=document.getElementById(id);if(!el)return;navTargetLock=id;setActiveSection(id);const top=Math.max(0,window.scrollY+el.getBoundingClientRect().top-sectionNav.offsetHeight+1);window.scrollTo({top,behavior:'smooth'});navUnlockTimer=setTimeout(()=>{navTargetLock=null;updateSectionNav()},900)}
sectionNav.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>scrollSectionFromNav(b.dataset.section));
function updateSectionNav(){navRaf=0;const heroPassed=hero.getBoundingClientRect().bottom<=0;sectionNav.classList.toggle('visible',heroPassed);sectionNav.setAttribute('aria-hidden',heroPassed?'false':'true');if(!heroPassed){navTargetLock=null;clearTimeout(navUnlockTimer);if(activeSection!=='tn13Portfolio')setActiveSection('tn13Portfolio');return}if(navTargetLock){if(activeSection!==navTargetLock)setActiveSection(navTargetLock);return}const line=sectionNav.getBoundingClientRect().bottom+3;let chosen=sectionIds[0];for(const id of sectionIds){const el=document.getElementById(id);if(!el)continue;const r=el.getBoundingClientRect();if(r.top<=line&&r.bottom>line){chosen=id;break}if(r.top<=line)chosen=id}if(chosen!==activeSection)setActiveSection(chosen)}
window.addEventListener('scroll',()=>{if(!navRaf)navRaf=requestAnimationFrame(updateSectionNav)},{passive:true});window.addEventListener('resize',updateSectionNav,{passive:true});requestAnimationFrame(updateSectionNav);"""
if old_js not in s:
    raise SystemExit('section nav JS block not found')
s=s.replace(old_js,new_js,1)

p.write_text(s)

idx=Path('index.html')
h=idx.read_text()
old_ver='mobile-stluxe-final-v22.js?v=20260830-v35-rollback-to-v33'
new_ver='mobile-stluxe-final-v22.js?v=20260830-v36-nav-seam-price'
if old_ver not in h:
    raise SystemExit('v35 cache key not found')
idx.write_text(h.replace(old_ver,new_ver,1))
