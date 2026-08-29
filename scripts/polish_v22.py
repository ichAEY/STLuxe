from pathlib import Path
import re

p = Path('mobile-stluxe-final-v22.js')
s = p.read_text(encoding='utf-8')

# 1. Service CTA must fit the right column cleanly.
s = s.replace('grid-template-columns:minmax(0,1fr) 106px', 'grid-template-columns:minmax(0,1fr) 104px')
s = re.sub(
    r"\.tn22-book-mini\{[^}]*\}",
    ".tn22-book-mini{width:104px;height:31px;margin-top:9px;padding:0 4px;border:1px solid rgba(238,214,185,.35);border-radius:8px;background:#171411;color:#fff!important;font:500 9.5px/1 'Manrope',Arial,sans-serif;white-space:nowrap}",
    s,
    count=1,
)

# 2. TANEM.ru must stay white on the dark footer despite legacy strong rules.
s = re.sub(
    r"\.tn22-footer strong\{[^}]*\}",
    ".tn22-footer strong{font:500 23px/1 'Cormorant Garamond',Georgia,serif;color:#fff!important}",
    s,
    count=1,
)

# 3. Floating booking copy must be one line: “Доступно 190 услуг”.
s = re.sub(
    r"#tn13Sticky strong\{[^}]*\}",
    "#tn13Sticky strong{display:block;margin:0;font:600 14px/1 'Manrope',Arial,sans-serif!important;color:#191613!important;white-space:nowrap}",
    s,
    count=1,
)
s = s.replace(
    "sticky.innerHTML=`<span>Доступно<strong>${SERVICES.length} услуг</strong></span><button type=\"button\">Записаться</button>`;",
    "sticky.innerHTML=`<strong>Доступно ${SERVICES.length} услуг</strong><button type=\"button\">Записаться</button>`;",
)

# 4. Make the new top hamburger functional with a compact TANEM navigation popover.
if '.tn22-navpop{' not in s:
    marker = '.tn22-menu i:nth-child(2){width:17px}'
    nav_css = marker + ".tn22-navpop{position:absolute;z-index:60;top:46px;right:12px;width:196px;padding:7px 12px;border:1px solid rgba(70,55,48,.12);border-radius:15px;background:rgba(250,247,242,.98);box-shadow:0 16px 40px rgba(45,34,29,.16);backdrop-filter:blur(18px);display:none}.tn22-navpop.open{display:grid}.tn22-navpop a{min-height:40px;display:flex;align-items:center;border-bottom:1px solid rgba(70,55,48,.08);font:500 14px/1 'Cormorant Garamond',Georgia,serif;color:#211d1a!important;text-decoration:none}.tn22-navpop a:last-child{border-bottom:0}"
    if marker not in s:
        raise SystemExit('menu CSS marker missing')
    s = s.replace(marker, nav_css, 1)

if 'const menuButton=hero.querySelector' not in s:
    marker = "hero.querySelector('.tn22-cta').addEventListener('click',book);"
    nav_js = marker + "\nconst menuButton=hero.querySelector('.tn22-menu');\nconst navPop=document.createElement('nav');navPop.className='tn22-navpop';navPop.innerHTML='<a href=\"#tn13Portfolio\">Портфолио</a><a href=\"#tn13Services\">Услуги и цены</a><a href=\"#tn13Team\">Команда</a><a href=\"#tn13Reviews\">Отзывы</a><a href=\"#tn13Visit\">Контакты</a>';hero.querySelector('.tn22-top').appendChild(navPop);menuButton.addEventListener('click',e=>{e.stopPropagation();navPop.classList.toggle('open')});navPop.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navPop.classList.remove('open')));document.addEventListener('pointerdown',e=>{if(!e.target.closest('.tn22-top'))navPop.classList.remove('open')});"
    if marker not in s:
        raise SystemExit('hero JS marker missing')
    s = s.replace(marker, nav_js, 1)

p.write_text(s, encoding='utf-8')

# Cache key: keep exactly one consolidated v22 script and advance it to v22c.
i = Path('index.html')
h = i.read_text(encoding='utf-8')
h = re.sub(
    r'<script defer src="mobile-stluxe-final-v22\.js\?v=[^"]+"></script>',
    '',
    h,
)
base = '<script defer src="mobile-stluxe-tanem-v13.js?v=20260829-0418"></script>'
new = '<script defer src="mobile-stluxe-final-v22.js?v=20260829-v22c"></script>'
if base not in h:
    raise SystemExit('v13 base marker missing')
h = h.replace(base, base + '\n' + new, 1)
i.write_text(h, encoding='utf-8')
