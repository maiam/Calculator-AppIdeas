(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function H(f){const b=document.querySelector(".view");var i=0,s=0,e="=";function o(){return i}function r(){return s}function c(){return e}function u(t,n){n?i=i*10+parseFloat(t):i=t,console.log("PN: "+i)}function l(t){s=parseFloat(t),console.log("SN: "+s)}function d(t){e=t,console.log("UOp: "+e)}function a(t){b.value=t,console.log("View: "+b.value)}function p(){u(-1*o())}function m(){u(o()/100)}function v(){u(0,!1),l(0),d("="),a(0)}function h(t){return!isNaN(t.innerHTML)}function g(t){let n=t.innerHTML;return n==="+"||n==="-"||n==="x"||n==="/"||n==="="}function y(t,n){return t/n}function L(t,n){return t*n}function N(t,n){return t-n}function w(t,n){return t+n}function M(t){let n=0;return t==="+"&&(n=w(r(),o())),t==="-"&&(n=N(r(),o())),t==="x"&&(n=L(r(),o())),t==="/"&&(n=y(r(),o())),n}f.forEach(t=>{t.addEventListener("click",()=>{if(h(t)&&(u(t.innerHTML,!0),a(o())),g(t)){if(r()===0||c()==="=")l(o()),u(0,!1);else if(c()!="="){let n=M(c());u(0,!1),l(n),a(n)}d(t.innerHTML)}t.innerHTML==="AC"&&v(),t.innerHTML==="+/-"&&(p(),a(o())),t.innerHTML==="%"&&(m(),a(o())),t.innerHTML})})}document.querySelector("#app").innerHTML=`
  <header class="l-header">
  <h1>**under construction**</h1>
  </header>

  <main class="l-main" role="application">
  <section class="app">
    <div class="row">
      <input class="view" type="number" value="0" disabled>
    </div>
    <div class="row">
      <button class="btn btn-2 btn-2b">AC</button>
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
`;H(document.querySelectorAll(".btn"));
