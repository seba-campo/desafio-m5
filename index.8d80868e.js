const n=[{path:/\/welcome/,page:function(n){const t=document.createElement("div"),e=document.createElement("style");return t.innerHTML='\n        <div class="welcome-main-frame">\n            <div>\n                <h1>Piedra Papel ó Tijera</h1>\n            </div>\n            /*COMPONENTE BUTTON*/\n            <button class="button">Pasar</button>\n            /*COMPONENTE JUGADA*/\n        </div>\n    ',e.textContent="\n        .welcome-main-frame{\n            background-image: url(../../img/fondo.png);\n        }\n    ",t.appendChild(e),t.querySelector(".button").addEventListener("click",(()=>{n.goTo("/instructions")})),t}},{path:/\/step-1/},{path:/\/thankyou/}];!function(t){function e(n){history.pushState({},"",n),o(n)}function o(o){for(const a of n)if(a.path.test(o)){const n=a.page({goTo:e});t.firstChild&&t.firstChild.remove(),t.appendChild(n)}}"/"==location.pathname&&e("/welcome"),o(location.pathname)}(document.querySelector(".root-div"));
//# sourceMappingURL=index.8d80868e.js.map
