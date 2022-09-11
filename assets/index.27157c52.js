(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const e of t.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&s(e)}).observe(document,{childList:!0,subtree:!0});function b(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=b(n);fetch(n.href,t)}})();function l(a){var o=0,b=document.querySelector(".view");a.forEach(t=>{t.addEventListener("click",()=>{if(isNaN(t.innerHTML))console.log(t.innerHTML),console.log(o);else{let e=t.innerHTML;if(b.value==="0.0")b.value=e;else{let r=parseFloat(b.value);b.value=r*10+parseFloat(e)}}switch(t.innerHTML){case'AC<span hidden="">C</span>':s("0.0"),o=0;break;case"=":let e=n(parseFloat(b.value),o);s(e);break}t.innerHTML==="+"&&(o=parseFloat(b.value),s("0.0"))})});function s(t){b.value=t}function n(t,e){return t+e}}document.querySelector("#app").innerHTML=`
  <header class="l-header">
  <h1>**under construction**</h1>
  </header>

  <main class="l-main" role="application">
  <section class="app">
    <div class="row">
      <input class="view" type="number" value="0.0">
    </div>
    <div class="row">
      <button class="btn btn-2 btn-2b">AC<span hidden>C</span></button>
      <button class="btn btn-2 btn-2b">+/-</button>
      <button class="btn btn-2 btn-2b">%</button>
      <button class="btn btn-2 btn-2b">/</button>
    </div>
    <div class="row">
      <button class="btn btn-2 btn-2b">7</button>
      <button class="btn btn-2 btn-2b">8</button>
      <button class="btn btn-2 btn-2b">9</button>
      <button class="btn btn-2 btn-2b">x</button>
    </div>
    <div class="row">
      <button class="btn btn-2 btn-2b">4</button>
      <button class="btn btn-2 btn-2b btn-2 btn-2btn">5</button>
      <button class="btn btn-2 btn-2b">6</button>
      <button class="btn btn-2 btn-2b">-</button>
    </div>
    <div class="row">
      <button class="btn btn-2 btn-2b">1</button>
      <button class="btn btn-2 btn-2b">2</button>
      <button class="btn btn-2 btn-2b">3</button>
      <button class="btn btn-2 btn-2b">+</button>
    </div>
    <div class="row">
      <button class="btn btn-2 btn-2b btn-xl">0</button>
      <button class="btn btn-2 btn-2b">.</button>
      <button class="btn btn-2 btn-2b">=</button>
    </div>
  </section>
  </main>

  <footer class="l-footer">
  <h4 class="caption">calculator-appideas</h4>
  <h4 class="caption">by @<a href="">maiam</a></h4>
  </footer>
`;l(document.querySelectorAll(".btn"));
