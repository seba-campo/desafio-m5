function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=n.parcelRequire94c2;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){i[e]=n},n.parcelRequire94c2=o),o.register("7PhYn",(function(n,t){var i,o;e(n.exports,"register",(()=>i),(e=>i=e)),e(n.exports,"resolve",(()=>o),(e=>o=e));var l={};i=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)l[n[t]]=e[n[t]]},o=function(e){var n=l[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o("7PhYn").register(JSON.parse('{"di8mO":"index.1530a55c.js","eZYqz":"piedra.c88f7ccf.svg","dwa2y":"papel.5f79bbf0.svg","4mdio":"tijera.6a2fdda1.svg","7SrbX":"fondo.cd80d814.svg"}')),o.register("757vf",(function(e,n){e.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("eZYqz")})),o.register("kVZsc",(function(n,t){var i;e(n.exports,"getBundleURL",(()=>i),(e=>i=e));var o={};function l(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return l(e[2])}return"/"}(),o[e]=n),n}})),o.register("8CaF3",(function(e,n){e.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("dwa2y")})),o.register("j3KSY",(function(e,n){e.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("4mdio")})),o.register("8Qdcl",(function(e,n){e.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("7SrbX")}));const l=[{path:/\/welcome/,page:function(e){const n=document.createElement("div"),t=document.createElement("style"),i=o("8Qdcl");return n.innerHTML='\n        <div class="welcome-main-frame">\n            <div>\n                <h1 class="page-title">Piedra Papel ó Tijera</h1>\n            </div>\n            <div>\n              <custom-button text="Comenzar" class="button"></custom-button>\n            </div>\n            <div class="play-div">\n             \n                <play-selection selection="piedra"></play-selection>\n\n                <play-selection selection="papel"></play-selection>\n\n                <play-selection selection="tijera"></play-selection>\n              \n            </div>\n        </div>\n    ',t.textContent=`\n        .welcome-main-frame{\n            font-family: var(--main-font);\n            background-image: url(${i});\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            align-items: center;\n            height: 100vh;\n        }\n\n        .page-title{\n          width: 25vw;\n          height: 45vh;\n          margin: 45px 0 0 0;\n          font-size: 98px;\n          color: #009048;\n        }\n\n        .play-div{\n          height: 150px;\n          display: flex;\n          align-items: flex-end;\n          justify-content: space-around;\n        }\n\n        .item{\n          width: 150px;\n        }\n    `,n.appendChild(t),n.querySelector(".button").addEventListener("click",(()=>{e.goTo("/instructions")})),n}},{path:/\/instructions/,page:function(e){const n=document.createElement("div"),t=document.createElement("style"),i=o("8Qdcl");return n.innerHTML='\n          <div class="welcome-main-frame">\n            <div class="page-title">\n                <h3>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>\n            </div>\n\n            <custom-button text="Jugar!" class="button"></custom-button>\n              \n            <div class="play-div">\n                <play-selection selection="piedra"></play-selection>\n                <play-selection selection="papel"></play-selection>\n                <play-selection selection="tijera"></play-selection>\n            </div>\n          </div>\n      ',t.textContent=`\n      .welcome-main-frame{\n          font-family: var(--main-font);\n          background-image: url(${i});\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between;\n          align-items: center;\n          height: 100vh;\n      }\n\n      .page-title{\n        width: 45vw;\n        height: 45vh;\n        margin: 25px 0 0 0;\n        font-size: 55px;\n      }\n\n      .play-div{\n        height: 150px;\n        display: flex;\n        align-items: flex-end;\n        justify-content: space-around;\n      }\n\n      .item{\n        width: 150px;\n      }\n  `,n.appendChild(t),n.querySelector(".button").addEventListener("click",(()=>{e.goTo("/play")})),n}},{path:/\/play/,page:function(e){const n=document.createElement("div"),t=document.createElement("style"),i=o("8Qdcl");return n.innerHTML='\n        <div class="playground-div">\n            <div>\n                <timer-el></timer-el>\n            </div>\n\n            <div class="play-div">\n                   \n                <play-selection selection="piedra"></play-selection>\n      \n                <play-selection selection="papel"></play-selection>\n      \n                <play-selection selection="tijera"></play-selection>\n                    \n            </div>\n        </div>\n          ',t.textContent=`\n              .playground-div{\n                  font-family: var(--main-font);\n                  background-image: url(${i});\n                  display: flex;\n                  flex-direction: column;\n                  justify-content: space-between;\n                  align-items: center;\n                  height: 100vh;\n              }\n      \n      \n              .play-div{\n                height: 150px;\n                display: flex;\n                align-items: flex-end;\n                justify-content: space-around;\n              }\n          `,n.appendChild(t),n}}];!function(e){function n(e){history.pushState({},"",e),t(e)}function t(t){for(const i of l)if(i.path.test(t)){const t=i.page({goTo:n});e.firstChild&&e.firstChild.remove(),e.appendChild(t)}}"/desafio-m5/"!=location.pathname&&"/"!=location.pathname||n("/welcome"),t(location.pathname)}(document.querySelector(".root-div")),function(){class e extends HTMLElement{constructor(){super(),this.render()}connectedCallback(){}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style"),i=this.getAttribute("text");n.innerHTML=`\n            <button class="custom-button">${i}</button>\n        `,t.textContent="\n            .custom-button{\n                font-family: var(--main-font);\n                font-size: 30px;\n                width: 322px;\n                height: 87px;\n                background: #006CFC;\n                border: 10px solid #001997;\n                border-radius: 10px;\n            }\n            @media(min-widht: 769px){\n                .custom-button{\n                    width: 336px;\n                    height: 87px;\n                }\n            }\n        ",e.appendChild(t),e.appendChild(n)}}customElements.define("custom-button",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}connectedCallback(){}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style"),i=this.getAttribute("selection");"piedra"==i&&(n.innerHTML=`\n        <div class="item">\n          <img src=${o("757vf")} class="play-choice">\n        </div>\n        `),"papel"==i&&(n.innerHTML=`\n        <div class="item">\n          <img src=${o("8CaF3")} class="play-choice">\n          </div>\n    `),"tijera"==i&&(n.innerHTML=`\n        <div class="item">\n          <img src=${o("j3KSY")} class="play-choice">\n        </div>\n    `),t.textContent="\n            .item{\n              display: flex;\n              flex-direction: column;\n              justify-items: flex-end;\n              margin: 0px 25px;\n            }\n\n            .play-choice{\n                height: 200px;\n                margin: 0px 10px;              \n            }\n        ",n.appendChild(t),e.appendChild(n)}}customElements.define("play-selection",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style");var i=1,o=setInterval((()=>{console.log(i),++i>5&&clearInterval(o),n.innerHTML=`<h1 class="counter-time">${i-1}</h1>`}),1e3);t.textContent="\n            .counter-time{ \n                font-size: 66px;\n            }\n        ",e.appendChild(t),e.appendChild(n)}}customElements.define("timer-el",e)}();
//# sourceMappingURL=index.1530a55c.js.map