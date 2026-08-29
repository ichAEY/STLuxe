from pathlib import Path
import re
p=Path('mobile-stluxe-final-v22.js')
s=p.read_text()
old="""const sectionNav=document.createElement('nav');sectionNav.className='tn23-section-nav';sectionNav.innerHTML=[['tn13Portfolio','Портфолио'],['tn13Services','Услуги'],['tn13Team','Команда'],['tn13Reviews','Отзывы'],['tn13Visit','Визит']].map((x,i)=>`<button type=\"button\" data-section=\"${x[0]}\" class=\"${i===0?'active':''}\">${x[1]}</button>`).join('');hero.insertAdjacentElement('afterend',sectionNav);sectionNav.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.section)?.scrollIntoView({behavior:'smooth',block:'start'}));const navObs=new IntersectionObserver(entries=>{const hit=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!hit)return;const btn=sectionNav.querySelector(`[data-section=\"${hit.target.id}\"]`);if(!btn)return;sectionNav.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===btn));btn.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'})},{threshold:[.22,.45,.7],rootMargin:'-48px 0px -45% 0px'});['tn13Portfolio','tn13Services','tn13Team','tn13Reviews','tn13Visit'].forEach(id=>{const el=document.getElementById(id);if(el)navObs.observe(el)});"""
new="""const sectionIds=['tn13Portfolio','tn13Services','tn13Team','tn13Reviews','tn13Visit'];const sectionNav=document.createElement('nav');sectionNav.className='tn23-section-nav';sectionNav.innerHTML=[['tn13Portfolio','Портфолио'],['tn13Services','Услуги'],['tn13Team','Команда'],['tn13Reviews','Отзывы'],['tn13Visit','Визит']].map((x,i)=>`<button type=\"button\" data-section=\"${x[0]}\" class=\"${i===0?'active':''}\">${x[1]}</button>`).join('');hero.insertAdjacentElement('afterend',sectionNav);
let activeSection='tn13Portfolio',navRaf=0;
function setActiveSection(id){if(!id)return;activeSection=id;const btn=sectionNav.querySelector(`[data-section=\"${id}\"]`);if(!btn)return;sectionNav.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===btn));btn.scrollIntoView({behavior:'auto',inline:'center',block:'nearest'})}
sectionNav.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>{setActiveSection(b.dataset.section);document.getElementById(b.dataset.section)?.scrollIntoView({behavior:'smooth',block:'start'})});
function updateSectionNav(){navRaf=0;const line=sectionNav.getBoundingClientRect().bottom+2;let chosen=sectionIds[0];for(const id of sectionIds){const el=document.getElementById(id);if(!el)continue;const r=el.getBoundingClientRect();if(r.top<=line&&r.bottom>line){chosen=id;break}if(r.top<=line)chosen=id}if(chosen!==activeSection)setActiveSection(chosen)}
window.addEventListener('scroll',()=>{if(!navRaf)navRaf=requestAnimationFrame(updateSectionNav)},{passive:true});window.addEventListener('resize',updateSectionNav,{passive:true});requestAnimationFrame(updateSectionNav);"""
if old not in s:
    raise SystemExit('sticky nav marker missing')
s=s.replace(old,new,1)
p.write_text(s)
i=Path('index.html')
h=i.read_text()
h2,n=re.subn(r'mobile-stluxe-final-v22\.js\?v=[^"\']+', 'mobile-stluxe-final-v22.js?v=20260830-v23d', h, count=1)
if n!=1:
    raise SystemExit('script tag missing')
i.write_text(h2)
print('sticky navigation fixed')
