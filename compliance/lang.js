(function(){
var EU='bg es cs da de et el en fr ga hr it lv lt hu mt nl pl pt ro sk sl fi sv'.split(' ');
function p(x){return String(x).toLowerCase().split('-')[0]}
function pickLang(){var c='',i,L;
try{c=p(localStorage.getItem('pauhu.lang')||'')}catch(e){c=''}
if(c&&EU.indexOf(c)>-1)return c;
L=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||'en'];
for(i=0;i<L.length;i++){c=p(L[i]);if(EU.indexOf(c)>-1)return c}
return 'en'}
var g=pickLang(),eu=g.toUpperCase(),i,a=document.querySelectorAll('a[data-celex]');
for(i=0;i<a.length;i++){a[i].href=a[i].href.replace('/legal-content/EN/','/legal-content/'+eu+'/');var k=a[i].querySelector('span[data-eu]');if(k)k.textContent='(text, '+eu+')'}
a=document.querySelectorAll('a[data-fl]');
for(i=0;i<a.length;i++){var u=(g==='fi'||g==='sv'||g==='en')&&a[i].getAttribute('data-u-'+g);if(u){a[i].href=u;var s=a[i].querySelector('span.k');if(s)s.textContent='('+a[i].getAttribute('data-t-'+g)+')'}}
})();
