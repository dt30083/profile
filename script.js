// Theme toggle & year
(function(){
  const btn = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function getPref(){
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function apply(theme){
    if(theme==='light'){
      root.style.setProperty('--bg','#f7f8fc');
      root.style.setProperty('--card','#ffffff');
      root.style.setProperty('--ink','#0b0e13');
      root.style.setProperty('--muted','#4b5563');
      root.style.setProperty('--shadow','0 10px 30px rgba(0,0,0,.08)');
      document.body.style.background = 'linear-gradient(180deg,#f7f8fc 0%, #eef1f7 70%, #f7f8fc 100%)';
    }else{
      root.style.removeProperty('--bg'); // revert to defaults
      document.body.style.background = 'linear-gradient(180deg,#0b0e13 0%, #0e141d 70%, #0b0e13 100%)';
    }
    localStorage.setItem('theme', theme);
  }
  let current = getPref();
  apply(current);
  if (btn){
    btn.addEventListener('click', ()=>{
      current = (current==='dark'?'light':'dark');
      apply(current);
    });
  }
})();