from pathlib import Path
import re
p=Path('mobile-stluxe-final-v22.js')
s=p.read_text()
old_css=".tn22-slide img{width:100%;height:100%;object-fit:cover;filter:none!important}"
new_css=".tn22-slide img{width:100%;height:100%;object-fit:cover;filter:none!important;pointer-events:none;-webkit-user-drag:none;user-select:none}"
if old_css not in s:
    raise SystemExit('hero image css marker missing')
s=s.replace(old_css,new_css,1)
old="""const heroMedia=hero.querySelector('.tn22-media');let heroStartX=0,heroMoved=false;
heroMedia.addEventListener('pointerdown',e=>{heroStartX=e.clientX;heroMoved=false});
heroMedia.addEventListener('pointermove',e=>{if(Math.abs(e.clientX-heroStartX)>12)heroMoved=true});
heroMedia.addEventListener('pointerup',e=>{const dx=e.clientX-heroStartX;if(Math.abs(dx)>42){setHeroSlide(slide+(dx<0?1:-1));return}if(!heroMoved)openGallery('Салон')});"""
new="""const heroMedia=hero.querySelector('.tn22-media');let heroStartX=0,heroMoved=false,heroPointer=null;
heroMedia.querySelectorAll('img').forEach(img=>img.draggable=false);
heroMedia.addEventListener('pointerdown',e=>{heroStartX=e.clientX;heroMoved=false;heroPointer=e.pointerId;try{heroMedia.setPointerCapture(e.pointerId)}catch(_){}});
heroMedia.addEventListener('pointermove',e=>{if(heroPointer!==null&&Math.abs(e.clientX-heroStartX)>12)heroMoved=true});
const finishHeroGesture=e=>{if(heroPointer===null)return;const dx=e.clientX-heroStartX;try{heroMedia.releasePointerCapture(heroPointer)}catch(_){}heroPointer=null;if(Math.abs(dx)>42){setHeroSlide(slide+(dx<0?1:-1));return}if(!heroMoved)openGallery('Салон')};
heroMedia.addEventListener('pointerup',finishHeroGesture);heroMedia.addEventListener('pointercancel',()=>{heroPointer=null;heroMoved=false});"""
if old not in s:
    raise SystemExit('hero gesture marker missing')
s=s.replace(old,new,1)
p.write_text(s)
i=Path('index.html')
h=i.read_text()
h2,n=re.subn(r'mobile-stluxe-final-v22\.js\?v=[^"\']+', 'mobile-stluxe-final-v22.js?v=20260830-v23c', h, count=1)
if n!=1:
    raise SystemExit('script tag missing')
i.write_text(h2)
print('hero swipe fixed')
