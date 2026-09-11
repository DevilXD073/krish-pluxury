const glow=document.querySelector('.glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const obs=new IntersectionObserver(es=>es.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),Math.min(i*65,260));obs.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelector('.hamb')?.addEventListener('click',()=>{const n=document.querySelector('nav');n.classList.toggle('mobile');});
