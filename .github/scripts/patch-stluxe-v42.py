from pathlib import Path
import re

MAIN = Path('mobile-stluxe-final-v22.js')
INDEX = Path('index.html')

s = MAIN.read_text()

def replace_once(old, new, label):
    global s
    if old not in s:
        raise SystemExit(f'anchor not found: {label}')
    s = s.replace(old, new, 1)

# Hero: remove decorative separator, keep the work button inside the first block,
# and shorten the visual gap before portfolio.
replace_once(
    "#stluxe-tanem-v13 .tn13-hero{height:820px!important;min-height:820px!important;",
    "#stluxe-tanem-v13 .tn13-hero{height:744px!important;min-height:744px!important;",
    'hero height'
)
replace_once(
    ".tn22-sub{margin-top:12px;font:500 10.5px/1 'Manrope',Arial,sans-serif;",
    ".tn22-sub{margin:12px 0 17px;font:500 10.5px/1 'Manrope',Arial,sans-serif;",
    'hero subtitle spacing'
)
replace_once(
    '<div class=\\"tn22-sub\\">Салон красоты</div><div class=\\"tn22-orn\\">✦</div><p class=\\"tn22-copy\\">',
    '<div class=\\"tn22-sub\\">Салон красоты</div><p class=\\"tn22-copy\\">',
    'hero ornament'
)
replace_once(
    ".tn22-port{padding:36px 24px 34px}",
    ".tn22-port{padding:22px 24px 34px}",
    'portfolio top gap'
)

# Make the animated sticky booking button a little longer.
replace_once(
    "#tn13Sticky button{position:relative;overflow:hidden;height:46px!important;border-radius:999px!important;background:#171513!important;color:#fff!important;padding:0 19px!important;font:600 12px/1 'Manrope',Arial,sans-serif!important}",
    "#tn13Sticky button{position:relative;overflow:hidden;height:46px!important;min-width:142px!important;border-radius:999px!important;background:#171513!important;color:#fff!important;padding:0 24px!important;font:600 12px/1 'Manrope',Arial,sans-serif!important}",
    'sticky booking width'
)

# Replace invented specialists with three explicit placeholders only.
masters_pattern = re.compile(r"const MASTERS=\[\n\{id:'tatiana'.*?\n\];", re.S)
masters_new = """const MASTERS=[
{id:'master1',name:'Мастер 1',role:'Косметолог',about:'Информация о мастере пока не добавлена.',cats:[],work:[],reviewNames:[]},
{id:'master2',name:'Мастер 2',role:'Мастер маникюра',about:'Информация о мастере пока не добавлена.',cats:[],work:[],reviewNames:[]},
{id:'master3',name:'Мастер 3',role:'Мастер волос',about:'Информация о мастере пока не добавлена.',cats:[],work:[],reviewNames:[]}
];
const MASTER_AVATAR='<svg viewBox=\"0 0 64 64\" aria-hidden=\"true\"><circle cx=\"32\" cy=\"23\" r=\"11\" fill=\"currentColor\"></circle><path d=\"M12 56c2.7-11.4 10-17 20-17s17.3 5.6 20 17\" fill=\"currentColor\"></path></svg>';"""
s, n = masters_pattern.subn(masters_new, s, count=1)
if n != 1:
    raise SystemExit('anchor not found: masters array')

# Team: one horizontal row, partial next card visible, neutral messenger-style avatar.
replace_once(
    ".tn22-team{padding:42px 28px 38px}",
    ".tn22-team{padding:42px 28px 38px;overflow:hidden}",
    'team container'
)
replace_once(
    ".tn22-team-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px 22px;margin-top:30px}",
    ".tn22-team-grid{display:flex;gap:14px;margin:30px -28px 0;padding:0 52px 8px 28px;overflow-x:auto;overscroll-behavior-inline:contain;-webkit-overflow-scrolling:touch;scroll-snap-type:x proximity;scrollbar-width:none}.tn22-team-grid::-webkit-scrollbar{display:none}",
    'team row'
)
replace_once(
    ".tn22-master-card{border:0;background:none;padding:0;text-align:center;color:#171513}",
    ".tn22-master-card{flex:0 0 136px;scroll-snap-align:start;border:0;background:none;padding:0;text-align:center;color:#171513}",
    'team card width'
)
replace_once(
    ".tn22-master-circle{width:100%;aspect-ratio:1/1;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 45% 35%,#e4ddd5,#cfc5bc 60%,#b8aaa0);overflow:hidden}.tn22-master-circle span{font:500 56px/1 'Cormorant Garamond',Georgia,serif;color:#6b5d55}",
    ".tn22-master-circle{width:100%;aspect-ratio:1/1;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,#e9e3dc,#d7cec6);overflow:hidden;color:#9b9088}.tn22-master-circle svg{width:62px;height:62px}",
    'team avatar'
)
replace_once(
    ".tn22-team-all{width:100%;height:48px;margin-top:26px;border:1px solid rgba(54,44,39,.18);border-radius:10px;background:transparent;font:500 13px/1 'Manrope',Arial,sans-serif;color:#1b1815}",
    ".tn22-team-all{display:none!important}.tn42-team-hint{margin-top:8px;text-align:right;font:500 9px/1 'Manrope',Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#8a7f78}.tn42-team-hint span{display:inline-block;margin-left:5px;font-size:14px;vertical-align:-1px}",
    'team hint'
)

team_pattern = re.compile(r"const team=\$\('#tn13Team'\);team\.innerHTML=`.*?`;\nconst teamSheet=", re.S)
team_new = """const team=$('#tn13Team');team.innerHTML=`<div class=\"tn22-team\"><p class=\"tn22-kicker\">Наша команда</p><h2>Мастера своего дела</h2><div class=\"tn22-team-grid\">${MASTERS.map(m=>`<button class=\"tn22-master-card\" type=\"button\" data-mid=\"${m.id}\"><span class=\"tn22-master-circle\">${MASTER_AVATAR}</span><strong class=\"tn22-master-name\">${m.name}</strong><span class=\"tn22-master-role\">${m.role}</span></button>`).join('')}</div><div class=\"tn42-team-hint\">Листайте <span>→</span></div></div>`;
const teamSheet="""
s, n = team_pattern.subn(team_new, s, count=1)
if n != 1:
    raise SystemExit('anchor not found: team render')

sheet_pattern = re.compile(r"const teamSheet=document\.createElement\('div'\);.*?\n\n// MASTER PAGE", re.S)
sheet_new = """const teamSheet=document.createElement('div');teamSheet.className='tn22-team-sheet';root.appendChild(teamSheet);

// MASTER PAGE"""
s, n = sheet_pattern.subn(sheet_new, s, count=1)
if n != 1:
    raise SystemExit('anchor not found: team sheet')

# Master page: no useless menu, no duplicate description under rating.
replace_once(
    '<div class=\\"tn22-master-top\\"><button class=\\"tn22-back\\" type=\\"button\\">←</button><div class=\\"tn22-master-brand\\">STLUXE</div><button class=\\"tn22-master-menu\\" type=\\"button\\">☰</button></div>',
    '<div class=\\"tn22-master-top\\"><button class=\\"tn22-back\\" type=\\"button\\">←</button><div class=\\"tn22-master-brand\\">STLUXE</div><span class=\\"tn42-master-spacer\\" aria-hidden=\\"true\\"></span></div>',
    'master top menu'
)
replace_once(
    ".tn22-back,.tn22-master-menu{width:40px;height:40px;border:0;background:none;font-size:27px}.tn22-master-menu{font-size:22px}",
    ".tn22-back{width:40px;height:40px;border:0;background:none;font-size:27px}.tn42-master-spacer{width:40px;height:40px;display:block}",
    'master top css'
)
replace_once(
    ".tn22-profile-circle span{font:500 64px/1 'Cormorant Garamond',Georgia,serif;color:#65584f}",
    ".tn22-profile-circle{color:#9b9088}.tn22-profile-circle svg{width:72px;height:72px}",
    'master avatar css'
)

render_tab_pattern = re.compile(r"function renderMasterTab\(\)\{.*?\}\nfunction openMaster", re.S)
render_tab_new = """function renderMasterTab(){const body=masterPage.querySelector('.tn22-master-content');if(!body||!currentMaster)return;if(currentMasterTab==='Профиль'){body.innerHTML=`<h3>О мастере</h3><p class=\"tn22-master-about\" style=\"text-align:left;margin:0\">${currentMaster.about}</p>`}else if(currentMasterTab==='Услуги'){const arr=SERVICES.filter(s=>currentMaster.cats.includes(s.cat)).slice(0,8);body.innerHTML=`<h3>Услуги</h3>${arr.length?arr.map(s=>`<div class=\"tn22-master-service\"><b>${s.title}</b><span>${s.price}</span></div>`).join(''):'<p class=\"tn22-master-about\" style=\"text-align:left;margin:0\">Пока нет данных об услугах.</p>'}`}else if(currentMasterTab==='Портфолио'){body.innerHTML=`<h3>Портфолио</h3><div class=\"tn22-master-works\">${currentMaster.work.length?currentMaster.work.map(src=>`<img src=\"${src}\" alt=\"Работа ${currentMaster.name}\">`).join(''):'<p class=\"tn22-master-about\" style=\"grid-column:1/-1;text-align:left;margin:0\">Пока нет фото.</p>'}</div>`}else{const rs=masterReviews(currentMaster);body.innerHTML=`<h3>Отзывы</h3>${rs.length?rs.map(r=>`<div class=\"tn22-master-review\"><strong>${r[0]}</strong><p>${r[1]}</p></div>`).join(''):'<p class=\"tn22-master-about\" style=\"text-align:left;margin:0\">Пока нет отзывов.</p>'}`}}
function openMaster"""
s, n = render_tab_pattern.subn(render_tab_new, s, count=1)
if n != 1:
    raise SystemExit('anchor not found: renderMasterTab')

open_master_pattern = re.compile(r"function openMaster\(id\)\{.*?\}\nteam\.querySelectorAll", re.S)
open_master_new = """function openMaster(id){currentMaster=MASTERS.find(m=>m.id===id);if(!currentMaster)return;currentMasterTab='Профиль';const b=masterPage.querySelector('.tn22-master-body');b.innerHTML=`<div class=\"tn22-profile\"><div class=\"tn22-profile-circle\">${MASTER_AVATAR}</div><h1>${currentMaster.name}</h1><div class=\"tn22-profile-role\">${currentMaster.role}</div><div class=\"tn22-salon-rating\"><b>★</b> 4,9 <span>рейтинг салона</span></div></div><div class=\"tn22-master-tabs\">${['Профиль','Услуги','Портфолио','Отзывы'].map(t=>`<button class=\"${t==='Профиль'?'active':''}\" type=\"button\" data-mtab=\"${t}\">${t}</button>`).join('')}</div><div class=\"tn22-master-content\"></div>`;b.querySelectorAll('[data-mtab]').forEach(x=>x.onclick=()=>{currentMasterTab=x.dataset.mtab;b.querySelectorAll('[data-mtab]').forEach(y=>y.classList.toggle('active',y===x));renderMasterTab()});renderMasterTab();teamSheet.classList.remove('open');masterPage.classList.add('open');document.body.style.overflow='hidden'}
team.querySelectorAll"""
s, n = open_master_pattern.subn(open_master_new, s, count=1)
if n != 1:
    raise SystemExit('anchor not found: openMaster')

# Gallery viewer: a real clipped photo canvas, correct index/total, swipe through the full set,
# pinch zoom + pan only inside the photo frame.
replace_once(
    ".tn22-viewer{position:fixed;z-index:180;inset:0;display:none;align-items:center;justify-content:center;padding:22px;background:rgba(27,20,20,.9);backdrop-filter:blur(9px)}",
    ".tn22-viewer{position:fixed;z-index:180;inset:0;display:none;align-items:center;justify-content:center;padding:22px;background:rgba(27,20,20,.9);backdrop-filter:blur(9px);touch-action:none;overscroll-behavior:contain}",
    'viewer overlay'
)
replace_once(
    ".tn22-viewer-frame{position:relative;width:min(100%,520px);height:min(82dvh,720px);background:transparent;overflow:visible;touch-action:none}",
    ".tn22-viewer-frame{position:relative;width:min(100%,520px);height:min(72dvh,640px);background:transparent;overflow:visible;touch-action:none}.tn42-viewer-canvas{position:absolute;inset:0;overflow:hidden;border-radius:14px;background:#151312;touch-action:none;box-shadow:0 18px 54px rgba(0,0,0,.28)}",
    'viewer frame'
)
replace_once(
    ".tn22-viewer-img{position:absolute;left:0;right:0;top:50%;width:100%;max-height:72%;transform:translateY(-50%);object-fit:contain;border-radius:10px;background:#151312;box-shadow:0 18px 54px rgba(0,0,0,.28);transform-origin:center center}",
    ".tn22-viewer-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#151312;transform:translate3d(0,0,0) scale(1);transform-origin:center center;will-change:transform;-webkit-user-drag:none;user-select:none}",
    'viewer image'
)
replace_once(
    '<div class=\\"tn22-viewer-top\\"><div class=\\"tn22-viewer-actions\\"><button class=\\"tn22-vbtn tn22-view-close\\" type=\\"button\\" aria-label=\\"Закрыть\\">×</button></div></div><img class=\\"tn22-viewer-img\\" alt=\\"\"><button class=\\"tn22-navbtn tn22-prev\\"',
    '<div class=\\"tn22-viewer-top\\"><div class=\\"tn22-viewer-actions\\"><button class=\\"tn22-vbtn tn22-view-close\\" type=\\"button\\" aria-label=\\"Закрыть\\">×</button></div></div><div class=\\"tn42-viewer-canvas\\"><img class=\\"tn22-viewer-img\\" alt=\\"\"></div><button class=\\"tn22-navbtn tn22-prev\\"',
    'viewer canvas html'
)

viewer_pattern = re.compile(r"let viewerItems=\[\],viewerIndex=0;.*?\n\n// GALLERY", re.S)
viewer_new = """let viewerItems=[],viewerIndex=0; const vFrame=viewer.querySelector('.tn22-viewer-frame'),vCanvas=viewer.querySelector('.tn42-viewer-canvas'),vImg=viewer.querySelector('.tn22-viewer-img'),vCount=viewer.querySelector('.tn22-viewer-count'),vPrev=viewer.querySelector('.tn22-prev'),vNext=viewer.querySelector('.tn22-next');
let sx=0,sy=0,viewerScale=1,viewerX=0,viewerY=0,pinchStart=0,pinchBaseScale=1,panStartX=0,panStartY=0,gestureHadPinch=false;
const pinchDist=e=>Math.hypot(e.touches[0].clientX-e.touches[1].clientX,e.touches[0].clientY-e.touches[1].clientY);
function clampViewerPan(){if(viewerScale<=1){viewerX=0;viewerY=0;return}const maxX=(viewerScale-1)*vCanvas.clientWidth*.5,maxY=(viewerScale-1)*vCanvas.clientHeight*.5;viewerX=Math.max(-maxX,Math.min(maxX,viewerX));viewerY=Math.max(-maxY,Math.min(maxY,viewerY))}
function applyViewerTransform(){clampViewerPan();vImg.style.transform=`translate3d(${viewerX}px,${viewerY}px,0) scale(${viewerScale})`}
function resetViewerTransform(){viewerScale=1;viewerX=0;viewerY=0;pinchStart=0;pinchBaseScale=1;applyViewerTransform()}
function paintViewer(){const it=viewerItems[viewerIndex];if(!it)return;vImg.src=it.src;vImg.alt=it.alt||'';vCount.textContent=`${String(viewerIndex+1).padStart(2,'0')} из ${String(viewerItems.length).padStart(2,'0')}`;resetViewerTransform();vPrev.hidden=viewerItems.length<2;vNext.hidden=viewerItems.length<2;}
function openViewer(items,index=0){viewerItems=Array.isArray(items)?items:[];if(!viewerItems.length)return;viewerIndex=Math.max(0,Math.min(index,viewerItems.length-1));paintViewer();viewer.classList.add('open');document.body.style.overflow='hidden'}
function closeViewer(){viewer.classList.remove('open');resetViewerTransform();if(!$('#tn13Gallery').classList.contains('open')&&!masterPage.classList.contains('open'))document.body.style.overflow=''}
vPrev.onclick=()=>{viewerIndex=(viewerIndex-1+viewerItems.length)%viewerItems.length;paintViewer()};vNext.onclick=()=>{viewerIndex=(viewerIndex+1)%viewerItems.length;paintViewer()};viewer.querySelector('.tn22-view-close').onclick=closeViewer;viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer()});
vCanvas.addEventListener('touchstart',e=>{if(e.touches.length===2){e.preventDefault();gestureHadPinch=true;pinchStart=pinchDist(e);pinchBaseScale=viewerScale}else if(e.touches.length===1){sx=e.touches[0].clientX;sy=e.touches[0].clientY;panStartX=viewerX;panStartY=viewerY}},{passive:false});
vCanvas.addEventListener('touchmove',e=>{if(e.touches.length===2&&pinchStart){e.preventDefault();viewerScale=Math.max(1,Math.min(4,pinchBaseScale*(pinchDist(e)/pinchStart)));if(viewerScale<=1.01){viewerScale=1;viewerX=0;viewerY=0}applyViewerTransform()}else if(e.touches.length===1&&viewerScale>1){e.preventDefault();viewerX=panStartX+(e.touches[0].clientX-sx);viewerY=panStartY+(e.touches[0].clientY-sy);applyViewerTransform()}},{passive:false});
vCanvas.addEventListener('touchend',e=>{if(e.touches.length<2)pinchStart=0;if(e.touches.length===0){if(!gestureHadPinch&&viewerScale===1&&viewerItems.length>1&&e.changedTouches.length){const dx=e.changedTouches[0].clientX-sx,dy=e.changedTouches[0].clientY-sy;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy)*1.15)(dx<0?vNext:vPrev).click()}gestureHadPinch=false;if(viewerScale<=1.01)resetViewerTransform()}},{passive:false});

// GALLERY"""
s, n = viewer_pattern.subn(viewer_new, s, count=1)
if n != 1:
    raise SystemExit('anchor not found: viewer logic')

replace_once(
    "port.querySelectorAll('[data-pi]').forEach(b=>b.onclick=()=>openViewer([PORTFOLIO[+b.dataset.pi]],0));",
    "port.querySelectorAll('[data-pi]').forEach(b=>b.onclick=()=>openViewer(PORTFOLIO,+b.dataset.pi));",
    'portfolio viewer items'
)

MAIN.write_text(s)

# Force iOS/mobile browsers to pick up both changed scripts immediately.
idx = INDEX.read_text()
idx, n1 = re.subn(r'mobile-stluxe-final-v22\.js\?v=[^\"\']+', 'mobile-stluxe-final-v22.js?v=20260831-v42-structure-gallery', idx, count=1)
idx, n2 = re.subn(r'mobile-stluxe-about-v38\.js\?v=[^\"\']+', 'mobile-stluxe-about-v38.js?v=20260831-v42-about-card', idx, count=1)
if n1 != 1:
    raise SystemExit('main script cache-bust anchor not found')
if n2 != 1:
    raise SystemExit('about script cache-bust anchor not found')
INDEX.write_text(idx)
