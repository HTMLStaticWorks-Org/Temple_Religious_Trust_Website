
const body=document.body,menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
if(menu&&nav)menu.addEventListener('click',()=>{let open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰';});
const theme=document.querySelector('[data-theme-toggle]');if(localStorage.getItem('temple-theme'))body.dataset.theme=localStorage.getItem('temple-theme');
if(theme)theme.addEventListener('click',()=>{let t=body.dataset.theme==='dark'?'light':'dark';body.dataset.theme=t;localStorage.setItem('temple-theme',t);theme.textContent=t==='dark'?'☀':'◐';});
const rtl=document.querySelector('[data-rtl-toggle]');if(rtl)rtl.addEventListener('click',()=>{let on=body.dir!=='rtl';body.dir=on?'rtl':'ltr';rtl.textContent=on?'LTR':'RTL';});
document.querySelectorAll('form[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();let t=f.querySelector('.toast');if(t){t.textContent='Thank you. This demo has captured your details locally for display only. Connect a secure booking or payment service before launch.';t.classList.add('show')}f.reset()}));
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
