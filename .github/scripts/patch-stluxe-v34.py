from pathlib import Path

p=Path('mobile-stluxe-final-v22.js')
s=p.read_text()

repls=[
("#stluxe-tanem-v13 .tn13-hero{height:690px!important;min-height:690px!important;padding:0!important;background:linear-gradient(180deg,#f8f4ee 0%,#f8f4ee 90%,#f7f2eb 100%)!important;position:relative!important;overflow:hidden!important}",
 "#stluxe-tanem-v13 .tn13-hero{height:690px!important;min-height:690px!important;padding:0!important;background:linear-gradient(180deg,#f8f4ee 0%,#f8f4ee 70%,#f7f2eb 100%)!important;position:relative!important;overflow:hidden!important}"),
(".tn22-card{position:absolute;z-index:8;top:343px;left:15px;right:15px;bottom:0;height:auto;padding:20px;border-radius:13px 13px 0 0;background:linear-gradient(180deg,rgba(249,246,241,.985) 0%,rgba(249,246,241,.985) 78%,#f7f2eb 100%);box-shadow:0 -2px 18px rgba(47,37,31,.09),0 -1px 4px rgba(47,37,31,.05);text-align:center}",
 ".tn22-card{position:absolute;z-index:8;top:343px;left:15px;right:15px;bottom:0;height:auto;padding:20px;border-radius:13px 13px 0 0;background:linear-gradient(180deg,rgba(249,246,241,.985) 0%,rgba(249,246,241,.985) 55%,#f7f2eb 100%);box-shadow:0 -10px 22px -20px rgba(47,37,31,.35);text-align:center}"),
(".tn22-worklink{display:inline-flex;align-items:center;gap:7px;margin-top:12px;color:#25211f;text-decoration:none;font:500 12.5px/1 'Manrope',Arial,sans-serif}",
 ".tn22-worklink{display:flex;width:246px;max-width:100%;height:38px;margin:10px auto 0;align-items:center;justify-content:center;gap:7px;border:1px solid rgba(67,57,51,.11);border-radius:6px;background:#efeae4;color:#393430;text-decoration:none;font:500 11.5px/1 -apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif}"),
("#tn13Portfolio{margin:0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;min-height:860px!important}",
 "#tn13Portfolio{margin:-1px 0 0!important;padding:0!important;background:#f7f2eb!important;color:#171513!important;min-height:860px!important}"),
(".tn31-cat{position:relative;flex:0 0 auto;height:35px;padding:0 15px;border:1px solid rgba(67,57,51,.18);border-radius:999px;background:transparent;color:#655d57;font:500 10.5px/1 'Manrope',Arial,sans-serif;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease}",
 ".tn31-cat{position:relative;flex:0 0 auto;height:35px;padding:0 15px;border:1px solid rgba(67,57,51,.18);border-radius:999px;background:transparent;color:#655d57;font:500 11px/1 -apple-system,BlinkMacSystemFont,'SF Pro Text','Helvetica Neue',Arial,sans-serif;letter-spacing:-.01em;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease}"),
(".tn31-service-price{font:500 18px/1 'Cormorant Garamond',Georgia,serif;letter-spacing:.01em;color:#514943;white-space:nowrap}",
 ".tn31-service-price{font:500 22px/1 -apple-system,BlinkMacSystemFont,'SF Pro Display','Helvetica Neue',Arial,sans-serif;letter-spacing:-.025em;color:#111;white-space:nowrap;animation:tn34PriceShine 5.6s ease-in-out infinite}@keyframes tn34PriceShine{0%,72%,100%{color:#111;opacity:1}81%{color:#7a716a;opacity:.78}89%{color:#111;opacity:1}}@media(prefers-reduced-motion:reduce){.tn31-service-price{animation:none}}")
]
for old,new in repls:
    if old not in s:
        raise SystemExit('expected style not found: '+old[:80])
    s=s.replace(old,new,1)

# Keep the small-screen price size proportional to the larger base price.
old_small='.tn31-service-price{font-size:17px}}'
new_small='.tn31-service-price{font-size:20px}}'
if old_small not in s:
    raise SystemExit('small-screen price style not found')
s=s.replace(old_small,new_small,1)

p.write_text(s)

idx=Path('index.html')
h=idx.read_text()
old='mobile-stluxe-final-v22.js?v=20260830-v33-hero-noticker-activepill'
new='mobile-stluxe-final-v22.js?v=20260830-v34-seam-worklink-price'
if old not in h:
    raise SystemExit('v33 cache key not found')
idx.write_text(h.replace(old,new,1))
