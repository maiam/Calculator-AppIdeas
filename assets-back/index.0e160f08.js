(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const u of e.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&p(u)}).observe(document,{childList:!0,subtree:!0});function h(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerpolicy&&(e.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?e.credentials="include":o.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function p(o){if(o.ep)return;o.ep=!0;const e=h(o);fetch(o.href,e)}})();document.querySelector("#app").innerHTML=`
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
`;const g=document.querySelectorAll(".btn"),m=document.querySelector(".view");var b=0,l=0,f="=";function r(){return b}function i(){return l}function c(){return f}function s(t,n){n?b=b*10+parseFloat(t):b=t,console.log("PN: "+b)}function d(t){l=parseFloat(t),console.log("SN: "+l)}function v(t){f=t,console.log("UOp: "+f)}function a(t){m.value=t,console.log("View: "+m.value)}function y(){s(-1*r())}function L(){s(r()/100)}function N(){s(0,!1),d(0),v("="),a(0)}function w(t){return!isNaN(t.innerHTML)}function M(t){let n=t.innerHTML;return n==="+"||n==="-"||n==="x"||n==="/"||n==="="}function H(t,n){return t/n}function O(t,n){return t*n}function S(t,n){return t-n}function T(t,n){return t+n}function P(t){let n=0;return t==="+"&&(n=T(i(),r())),t==="-"&&(n=S(i(),r())),t==="x"&&(n=O(i(),r())),t==="/"&&(n=H(i(),r())),n}g.forEach(t=>{t.addEventListener("click",()=>{if(w(t)&&(s(t.innerHTML,!0),a(r())),M(t)){if(i()===0||c()==="=")d(r()),s(0,!1);else if(c()!="="){let n=P(c());s(0,!1),d(n),a(n)}v(t.innerHTML)}t.innerHTML==="AC"&&N(),t.innerHTML==="+/-"&&(y(),a(r())),t.innerHTML==="%"&&(L(),a(r())),t.innerHTML})});
