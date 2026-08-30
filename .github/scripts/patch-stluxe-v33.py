from pathlib import Path
import re

p = Path('mobile-stluxe-final-v22.js')
s = p.read_text()

# 1) Hero: remove ticker completely and make the STLuxe card reach the hero bottom
old_hero = "#stluxe-tanem-v13 .tn13-hero{height:690px!important;min-height:690px!important;padding:0!important;background:#f8f4ee!important;position:relative!important;overflow:hidden!important}"
new_hero = "#stluxe-tanem-v13 .tn13-hero{height:690px!important;min-height:690px!important;padding:0!important;background:linear-gradient(180deg,#f8f4ee 0%,#f8f4ee 90%,#f7f2eb 100%)!important;position:relative!important;overflow:hidden!important}"
if old_hero not in s:
    raise SystemExit('hero style not found')
s = s.replace(old_hero, new_hero, 1)

old_card = ".tn22-card{position:absolute;z-index:8;top:343px;left:15px;right:15px;height:326px;padding:20px;border-radius:13px;background:rgba(249,246,241,.985);box-shadow:0 5px 18px rgba(47,37,31,.13),0 1px 4px rgba(47,37,31,.07);text-align:center}"
new_card = ".tn22-card{position:absolute;z-index:8;top:343px;left:15px;right:15px;bottom:0;height:auto;padding:20px;border-radius:13px 13px 0 0;background:linear-gradient(180deg,rgba(249,246,241,.985) 0%,rgba(249,246,241,.985) 78%,#f7f2eb 100%);box-shadow:0 -2px 18px rgba(47,37,31,.09),0 -1px 4px rgba(47,37,31,.05);text-align:center}"
if old_card not in s:
    raise SystemExit('hero card style not found')
s = s.replace(old_card, new_card, 1)

# Remove ticker CSS entirely.
s, n = re.subn(r"\.tn22-ticker\{.*?@keyframes tn22Tick\{to\{transform:translateX\(-50%\)\}\}\n", "", s, count=1, flags=re.S)
if n != 1:
    raise SystemExit('ticker css not found')

# Remove ticker markup from the hero and its DOM relocation.
s, n = re.subn(r'<div class="tn22-ticker"><div>.*?</div></div>`;', '`;', s, count=1, flags=re.S)
if n != 1:
    raise SystemExit('ticker markup not found')
relocation = "const heroTicker=hero.querySelector('.tn22-ticker');if(heroTicker)hero.insertAdjacentElement('afterend',heroTicker);\n"
if relocation not in s:
    raise SystemExit('ticker relocation not found')
s = s.replace(relocation, "", 1)

# 2) Services: selected pill must always have readable white text.
old_active = ".tn31-cat.active{background:#171513;color:#fff;border-color:#171513}"
new_active = ".tn31-cat.active{background:#171513!important;color:#fff!important;border-color:#171513!important}"
if old_active not in s:
    raise SystemExit('active service pill style not found')
s = s.replace(old_active, new_active, 1)

p.write_text(s)

# Cache bust only.
idx = Path('index.html')
h = idx.read_text()
old_ver = 'mobile-stluxe-final-v22.js?v=20260830-v32-pills-realreviews'
new_ver = 'mobile-stluxe-final-v22.js?v=20260830-v33-hero-noticker-activepill'
if old_ver not in h:
    raise SystemExit('expected v32 cache key not found')
idx.write_text(h.replace(old_ver, new_ver, 1))
