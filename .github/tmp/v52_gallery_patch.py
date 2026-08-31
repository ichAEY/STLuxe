from pathlib import Path
import re

p=Path('mobile-stluxe-final-v22.js')
s=p.read_text()
start=s.index('const GALLERY={')
end=s.index('const REVIEW_DATA=[', start)
block="""const GALLERY={
'Салон':[
 {src:'salon.webp',alt:'Интерьер салона STLuxe'},
 {src:'salon2.webp',alt:'Интерьер салона STLuxe'},
 {src:'salon3.webp',alt:'Интерьер салона STLuxe'},
 {src:'salon4.webp',alt:'Интерьер салона STLuxe'},
 {src:'salon6.webp',alt:'Интерьер салона STLuxe'},
 {src:'salon7.webp',alt:'Интерьер салона STLuxe'},
 {src:'salon8.webp',alt:'Интерьер салона STLuxe'},
 {src:'salon9.webp',alt:'Интерьер салона STLuxe'},
 {src:'salon10.webp',alt:'Интерьер салона STLuxe'},
 {src:'salon11.webp',alt:'Интерьер салона STLuxe'},
 {src:'salon12.webp',alt:'Интерьер салона STLuxe'},
 {src:'salon13.webp',alt:'Интерьер салона STLuxe'},
 {src:'assets/images/salon-reception.webp',alt:'Интерьер STLuxe'}
],
'Ногти':[
 {src:'nails.webp',alt:'Маникюр STLuxe'},
 {src:'nails2.webp',alt:'Маникюр STLuxe'},
 {src:'nails3.webp',alt:'Маникюр STLuxe'},
 {src:'nails4.webp',alt:'Маникюр STLuxe'},
 {src:'nails5.webp',alt:'Маникюр STLuxe'},
 {src:'nails6.webp',alt:'Маникюр STLuxe'},
 {src:'nails7.webp',alt:'Маникюр STLuxe'},
 {src:'nails8.webp',alt:'Маникюр STLuxe'},
 {src:'nails9.webp',alt:'Маникюр STLuxe'},
 {src:'nails10.webp',alt:'Маникюр STLuxe'},
 {src:'nails11.webp',alt:'Маникюр STLuxe'},
 {src:'nails12.webp',alt:'Маникюр STLuxe'},
 {src:'assets/images/nails-pink.webp',alt:'Маникюр STLuxe'},
 {src:'assets/images/nails-green.webp',alt:'Дизайн ногтей STLuxe'},
 {src:'assets/images/nails-light.webp',alt:'Маникюр STLuxe'}
],
'Волосы':[
 {src:'hair.webp',alt:'Работа с волосами STLuxe'},
 {src:'hair2.webp',alt:'Работа с волосами STLuxe'},
 {src:'hair3.webp',alt:'Работа с волосами STLuxe'},
 {src:'hair4.webp',alt:'Работа с волосами STLuxe'},
 {src:'hair5.webp',alt:'Работа с волосами STLuxe'},
 {src:'hair6.webp',alt:'Работа с волосами STLuxe'},
 {src:'hair7.webp',alt:'Работа с волосами STLuxe'},
 {src:'hair8.webp',alt:'Работа с волосами STLuxe'}
],
'Ресницы':[
 {src:'res.webp',alt:'Работа с ресницами STLuxe'}
]};
const PORTFOLIO=[
 {src:'hair.webp',alt:'Работа с волосами STLuxe'},
 {src:'nails2.webp',alt:'Маникюр STLuxe'},
 {src:'res.webp',alt:'Работа с ресницами STLuxe'},
 {src:'hair5.webp',alt:'Работа с волосами STLuxe'},
 {src:'nails7.webp',alt:'Маникюр STLuxe'},
 {src:'hair8.webp',alt:'Работа с волосами STLuxe'},
 {src:'nails10.webp',alt:'Маникюр STLuxe'}
];
"""
p.write_text(s[:start]+block+s[end:])

idx=Path('index.html')
h=idx.read_text()
h=re.sub(r'mobile-stluxe-final-v22\.js\?v=[^\"]+', 'mobile-stluxe-final-v22.js?v=20260831-v52-gallery-assets', h, count=1)
idx.write_text(h)
