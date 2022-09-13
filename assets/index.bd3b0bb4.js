(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))h(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&h(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function h(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();document.querySelector("#app").innerHTML=`
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
`;const g=document.querySelectorAll(".btn"),a=document.querySelector(".view");var b=0,m=0,p="=";function r(){return b}function l(){return m}function d(){return p}function i(t,e){e?b=b+t:b=t,console.log("PN: "+b)}function y(t){m=parseFloat(t),console.log("SN: "+m)}function v(t){p=t,console.log("UOp: "+p)}function f(){return a.value}function u(t){a.classList.contains("true")?(a.value=t,a.classList.remove("true")):a.value.length>9||(a.value=a.value+t),console.log("View: "+a.value)}function L(){i(-1*r())}function k(){i(r()/100)}function w(){i(0,!1),y(0),v("="),a.classList.add("true"),u("0")}function S(t){let e=t.innerHTML;return e==="+"||e==="-"||e==="x"||e==="/"||e==="="}function N(t,e){return(t/e).toString().substr(0,9)}function O(t,e){return(t*e).toString().substr(0,9)}function M(t,e){return(t-e).toString().substr(0,9)}function x(t,e){return(parseFloat(t)+parseFloat(e)).toString().substr(0,9)}function H(t){let e=0;return t==="+"&&(e=x(l(),r())),t==="-"&&(e=M(l(),r())),t==="x"&&(e=O(l(),r())),t==="/"&&(e=N(l(),r())),e}g.forEach(t=>{t.addEventListener("click",e=>{if(e.target.getAttribute("dataset-key")==="number"&&(f()==="0"&&a.classList.add("true"),u(e.target.textContent),i(f(),!1)),S(t)){if(l()===0||d()==="=")y(r()),i(0,!1),a.classList.add("true"),u("0");else if(d()!="="){let s=H(d());i(0,!1),y(s),a.classList.add("true"),u(s),a.classList.add("true")}v(t.innerHTML)}t.innerHTML==="AC"&&w(),t.innerHTML==="+/-"&&(L(),a.classList.add("true"),u(r())),t.innerHTML==="%"&&(k(),a.classList.add("true"),u(r())),t.innerHTML==="."&&f==="0"&&u("0.")})});
