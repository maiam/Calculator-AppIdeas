(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))h(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&h(l)}).observe(document,{childList:!0,subtree:!0});function c(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function h(n){if(n.ep)return;n.ep=!0;const o=c(n);fetch(n.href,o)}})();document.querySelector("#app").innerHTML=`
  <header class="l-header">
  <h1>calculator</h1>
  </header>

  <main class="l-main" role="application">
  <section class="app">
    <div class="row">
      <input class="view true" type="text" value="0" disabled>
    </div>
    <div class="row">
      <button class="btn btn-2 btn-2b operator" dataset-key="operator" data-switch="unselected">AC</button>
      <button class="btn btn-2 btn-2b operator" dataset-key="operator" data-switch="unselected">+/-</button>
      <button class="btn btn-2 btn-2b operator" dataset-key="operator" data-switch="unselected">%</button>
      <button class="btn btn-2 btn-2b operator" dataset-key="operator" data-switch="unselected">/</button>
    </div>
    <div class="row">
      <button class="btn btn-2 btn-2b" dataset-key="number">7</button>
      <button class="btn btn-2 btn-2b" dataset-key="number">8</button>
      <button class="btn btn-2 btn-2b" dataset-key="number">9</button>
      <button class="btn btn-2 btn-2b operator" dataset-key="operator" data-switch="unselected">x</button>
    </div>
    <div class="row">
      <button class="btn btn-2 btn-2b" dataset-key="number">4</button>
      <button class="btn btn-2 btn-2b btn-2 btn-2btn" dataset-key="number">5</button>
      <button class="btn btn-2 btn-2b" dataset-key="number">6</button>
      <button class="btn btn-2 btn-2b operator" dataset-key="operator" data-switch="unselected">-</button>
    </div>
    <div class="row">
      <button class="btn btn-2 btn-2b" dataset-key="number">1</button>
      <button class="btn btn-2 btn-2b" dataset-key="number">2</button>
      <button class="btn btn-2 btn-2b" dataset-key="number">3</button>
      <button class="btn btn-2 btn-2b operator" dataset-key="operator" data-switch="unselected">+</button>
    </div>
    <div class="row">
      <button class="btn btn-2 btn-2b btn-xl" dataset-key="number">0</button>
      <button class="btn btn-2 btn-2b" dataset-key="number">.</button>
      <button class="btn btn-2 btn-2b operator" dataset-key="operator" data-switch="unselected">=</button>
    </div>
  </section>
  </main>

  <footer class="l-footer">
  <h4 class="caption">calculator-appideas</h4>
  <h4 class="caption">by @<a href="">maiam</a></h4>
  </footer>
`;const L=document.querySelectorAll(".btn"),a=document.querySelector(".view");var i=0,p=0,m="=";function r(){return i}function b(){return p}function d(){return m}function u(t,e){e?i=i+t:i=t,console.log("PN: "+i)}function y(t){p=parseFloat(t),console.log("SN: "+p)}function v(t){m=t,console.log("UOp: "+m)}function f(){return a.value}function s(t){a.classList.contains("true")?(a.value=t,a.classList.remove("true")):a.value=a.value+t,console.log("View: "+a.value)}function k(){u(-1*r())}function w(){u(r()/100)}function g(){u(0,!1),y(0),v("="),a.classList.add("true"),s("0")}function N(t){let e=t.innerHTML;return e==="+"||e==="-"||e==="x"||e==="/"||e==="="}function O(t,e){return t/e}function S(t,e){return t*e}function M(t,e){return t-e}function x(t,e){return parseFloat(t)+parseFloat(e)}function H(t){let e=0;return t==="+"&&(e=x(b(),r())),t==="-"&&(e=M(b(),r())),t==="x"&&(e=S(b(),r())),t==="/"&&(e=O(b(),r())),e}L.forEach(t=>{t.addEventListener("click",e=>{if(e.target.getAttribute("dataset-key")==="number"&&(f()==="0"&&a.classList.add("true"),s(e.target.textContent),u(f(),!1)),N(t)){if(b()===0||d()==="=")y(r()),u(0,!1),a.classList.add("true"),s("0");else if(d()!="="){let c=H(d());u(0,!1),y(c),a.classList.add("true"),s(c),a.classList.add("true")}v(t.innerHTML)}t.innerHTML==="AC"&&g(),t.innerHTML==="+/-"&&(k(),a.classList.add("true"),s(r())),t.innerHTML==="%"&&(w(),a.classList.add("true"),s(r())),t.innerHTML==="."&&f==="0"&&s("0.")})});
