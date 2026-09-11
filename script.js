const glow=document.querySelector('.glow');document.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%5)*70+'ms';observer.observe(el)});
document.getElementById('year').textContent=new Date().getFullYear();
const palette=document.getElementById('palette');function togglePalette(v){palette.classList.toggle('open',v)}document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();togglePalette(true)}if(e.key==='Escape')togglePalette(false)});palette.addEventListener('click',e=>{if(e.target===palette)togglePalette(false)});document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>{togglePalette(false);document.querySelector(b.dataset.go)?.scrollIntoView({behavior:'smooth'})});
const hero=document.querySelector('.hero');document.addEventListener('pointermove',e=>{if(!hero)return;const x=(e.clientX/innerWidth-.5)*2,y=(e.clientY/innerHeight-.5)*2;hero.querySelector('.terminal').style.transform=`perspective(900px) rotateY(${x*-5}deg) rotateX(${y*2}deg) translateY(${Math.abs(y)*-2}px)`});


// Lightweight animated developer/code-rain background — no external library required.
(() => {
  const canvas = document.getElementById('codeRain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const chars = '01{}[]<>/\\$#@=+-_*;:()const let var npm git java node.js async await API HTTP discord';
  let w, h, cols, drops, font = 12;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    w = canvas.clientWidth = innerWidth; h = canvas.clientHeight = innerHeight;
    canvas.width = w*dpr; canvas.height = h*dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    cols = Math.ceil(w/font); drops = Array.from({length:cols},()=>Math.random()*-80);
  };
  const draw = () => {
    ctx.fillStyle='rgba(5,5,6,.095)'; ctx.fillRect(0,0,w,h);
    ctx.font=`${font}px JetBrains Mono, monospace`;
    for(let i=0;i<cols;i++){
      const x=i*font, y=drops[i]*font;
      const c=chars[Math.floor(Math.random()*chars.length)];
      const bright=Math.random()>.88;
      ctx.fillStyle=bright?'rgba(255,82,107,.72)':'rgba(255,41,71,.24)';
      ctx.fillText(c,x,y);
      drops[i] += Math.random()*.8+.25;
      if(y>h && Math.random()>.975) drops[i]=Math.random()*-30;
    }
    requestAnimationFrame(draw);
  };
  addEventListener('resize',resize,{passive:true}); resize(); draw();
})();

// Tiny terminal typing loop for extra developer atmosphere.
(() => {
  const el=document.querySelector('.term-body .caret');
  if(!el)return;
  const states=['_','▌','_','▌','_']; let i=0;
  setInterval(()=>{el.textContent=states[i++%states.length]},420);
})();
