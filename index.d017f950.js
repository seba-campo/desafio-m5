function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=n.parcelRequire94c2;function s(e){const n=document.createElement("div"),t=document.createElement("style"),i=a("8Qdcl");n.innerHTML='\n        <div class="welcome-main-frame">\n            <div>\n                <h1 class="page-title">Piedra Papel ó Tijera</h1>\n            </div>\n            <div>\n              <custom-button text="Comenzar" class="button"></custom-button>\n            </div>\n            <div class="play-div">\n             \n                <play-selection selection="piedra" class="item"></play-selection>\n\n                <play-selection selection="papel" class="item"></play-selection>\n\n                <play-selection selection="tijera" class="item"></play-selection>\n              \n            </div>\n        </div>\n    ',t.textContent=`\n        .welcome-main-frame{\n            font-family: var(--main-font);\n            background-image: url(${i});\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            align-items: center;\n            height: 100vh;\n        }\n\n        .page-title{\n          text-align: center;\n          width: 45vw;\n          height: 40vh;\n          margin: 45px 0 0 0;\n          font-size: 80px;\n          color: #009048;\n        }\n        @media(min-width: 768px){\n          .page-title{\n            height: 15vh;\n            margin: 20px 0;\n            font-size: 95px;\n          }\n        }\n\n        .play-div{\n          display: flex;\n          align-items: flex-end;\n          justify-content: space-around;\n        }\n        @media(min-width: 768px){\n          .play-div{\n            height: 350px;  \n          }\n        }\n\n        @media(min-width: 768px){\n          .item{\n            height: 400px;\n          }\n        }\n    `,n.appendChild(t);return n.querySelector(".button").addEventListener("click",(()=>{const n=location.pathname;"/desafio-m5/welcome"==n&&e.goTo("/desafio-m5/instructions"),"/welcome"==n&&e.goTo("/instructions")})),n}function l(e){const n=document.createElement("div"),t=document.createElement("style"),i=a("8Qdcl");n.innerHTML='\n          <div class="welcome-main-frame">\n            <div class="page-title">\n                <h3 class="title-h3">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>\n            </div>\n\n            <div class="button-div">\n              <custom-button text="Jugar!" class="button"></custom-button>\n            </div>\n              \n            <div class="play-div">\n                <play-selection selection="piedra"></play-selection>\n                <play-selection selection="papel"></play-selection>\n                <play-selection selection="tijera"></play-selection>\n            </div>\n          </div>\n      ',t.textContent=`\n      .welcome-main-frame{\n          font-family: var(--main-font);\n          background-image: url(${i});\n          display: flex;\n          flex-direction: column;\n          justify-content: space-around;\n          align-items: center;\n          height: 100vh;\n      }\n\n      .title-h3{\n        margin: 0;\n      }\n\n      .page-title{\n        width: 55vw;\n        height: 30vh;\n        font-size: 40px;\n      }\n      @media(min-width: 768px){\n        .page-title{\n          height: 35vh;\n          margin: 20px 0;\n          font-size: 66px;\n        }\n      }\n\n      .play-div{\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-around;\n        position: relative;\n        top: 70px;\n      }\n      @media(min-width: 768px){\n        .play-div{\n        }\n      }\n\n      .item{\n        width: 130px;\n      }\n      @media(min-width: 768px){\n        .item{\n          height: 1px;\n        }\n      }\n  `,n.appendChild(t);return n.querySelector(".button").addEventListener("click",(()=>{const n=location.pathname;"/desafio-m5/instructions"==n&&e.goTo("/desafio-m5/play"),"/instructions"==n&&e.goTo("/play_local")})),n}null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){i[e]=n},n.parcelRequire94c2=a),a.register("7PhYn",(function(n,t){var i,a;e(n.exports,"register",(()=>a),(e=>a=e)),e(n.exports,"resolve",(()=>i),(e=>i=e));var s={};a=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)s[n[t]]=e[n[t]]},i=function(e){var n=s[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),a("7PhYn").register(JSON.parse('{"di8mO":"index.d017f950.js","eZYqz":"piedra.c88f7ccf.svg","dwa2y":"papel.c276051c.svg","4mdio":"tijera.6a2fdda1.svg","d4Cgy":"won.4b96d87d.svg","hM3cy":"lost.342a139d.svg","7SrbX":"fondo.cd80d814.svg"}')),a.register("757vf",(function(e,n){e.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("eZYqz")})),a.register("kVZsc",(function(n,t){var i;e(n.exports,"getBundleURL",(()=>i),(e=>i=e));var a={};function s(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var n=a[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),a[e]=n),n}})),a.register("8CaF3",(function(e,n){e.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("dwa2y")})),a.register("j3KSY",(function(e,n){e.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("4mdio")})),a.register("fnn3F",(function(e,n){e.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("d4Cgy")})),a.register("9s5PN",(function(e,n){e.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("hM3cy")})),a.register("8Qdcl",(function(e,n){e.exports=a("kVZsc").getBundleURL("di8mO")+a("7PhYn").resolve("7SrbX")}));const o={listeners:[],subscribe(e){this.listeners.push(e)},getState(){const e=localStorage.getItem("currentState");return JSON.parse(e)},setState(e){localStorage.setItem("currentState",JSON.stringify(e))},setMove(e){const n=this.getState();for(var t of(n.currentGame.myPlay=e,n.currentGame.computerPlay=this.generateComputerPlay(),n.history.push(n.currentGame),localStorage.setItem("currentState",JSON.stringify(n)),this.listeners))t(n)},whoWins(e,n){const t=["tijera"==e&&"papel"==n,"piedra"==e&&"tijera"==n,"papel"==e&&"piedra"==n].includes(!0),i=["tijera"==n&&"papel"==e,"papel"==n&&"piedra"==e,"piedra"==n&&"tijera"==e].includes(!0);return!!t||!i&&void 0},generateComputerPlay:()=>["piedra","papel","tijera"][Math.floor(3*Math.random()+0)],initState(){const e={currentGame:{myPlay:"undefined",computerPlay:this.generateComputerPlay()},history:[],points:{computer:0,player:0}};this.setState(e)}};function c(e){const n=document.createElement("div"),t=document.createElement("style"),i=a("8Qdcl"),s=o.getState(),l=s.currentGame.computerPlay,c=s.currentGame.myPlay,d=s.history;var r=0,p=0,m="rgba(137, 73, 73, 0.9)",u=o.whoWins(c,l);for(let e of d){var f=o.whoWins(e.myPlay,e.computerPlay);f&&(r++,m="rgba(136, 137, 73, 0.9);"),f||(p++,m="rgba(137, 73, 73, 0.9)",f=!1),null==f&&console.log("Empate")}n.innerHTML=`\n      <div class="main-wrapper">\n        <div class="score-div">\n              <score-el won="${u}" computer-score="${p}" player-score="${r}"></score-el>\n\n              <custom-button class="button" text="Volver a jugar"></custom-button>\n        </div>\n\n          <div class="playground-div">\n              <div class="computer-play">\n                <play-selection selection="${l}" class="disabled"></play-selection>\n          </div>\n\n          <div class="play-div">\n              <play-selection selection="${c}" class="disabled"></play-selection>\n          </div>\n      </div>\n      `,t.textContent=`\n    .main-wrapper{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n    }\n    \n    .score-div{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      position: absolute;\n      width: 100vw;\n      height: 100vh;\n      z-index: 1;\n      position: fixed;\n      background-color: ${m};\n    }\n\n    .button{\n      margin: 15px;\n    }\n\n    .playground-div{\n        font-family: var(--main-font);\n        background-image: url(${i});\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        height: 100vh;\n    }\n    \n    .disabled{\n      position: relative;\n      top: -90px;\n      opacity: 45%;\n    }\n\n    .enabled{\n      position: relative;\n      top: -150px;\n    }\n\n    .play-div{\n      height: 150px;\n      display: flex;\n      align-items: flex-end;\n      justify-content: space-around;\n    }\n\n    .computer-play{\n      transform: rotate(180deg)\n    }\n\n    .off{\n      display: none;\n    }\n\n    .on{\n      display: inherit;\n    }\n\n    .finished{\n      display: none;\n    }\n  `;return n.querySelector(".button").addEventListener("click",(()=>{"/desafio-m5/results"==location.pathname?e.goTo("/desafio-m5/play"):e.goTo("/play")})),n.appendChild(t),n}const d=[{path:/\/welcome/,page:s},{path:/\/desafio-m5\/welcome/,page:s},{path:/\/instructions/,page:l},{path:/\/desafio-m5\/instructions/,page:l},{path:/\/play_local/,page:function(e){const n=document.createElement("div"),t=document.createElement("style"),i=a("8Qdcl"),s=(location.pathname,o.getState());if(null==s||null==s){const e={currentGame:{myPlay:"undefined",computerPlay:"undefined"},history:[],points:{computer:0,player:0}};console.log("inicializado el state"),o.setState(e)}t.textContent=`\n      .playground-div{\n        font-family: var(--main-font);\n        background-image: url(${i});\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        height: 100vh;\n    }\n\n    @media(min-width:768px){\n      play-selection{\n\n      }\n    }\n    \n\n    .disabled{\n      opacity: 45%;\n    }\n    @media(min-width: 768px){\n      .disabled{\n      }\n    }\n\n    .enabled{\n    }\n    @media(min-width: 768px){\n      .enabled{\n      }\n    }\n\n\n    .play-div{\n      max-height: 150px;\n      display: flex;\n      align-items: flex-end;\n      justify-content: space-around;\n      position: relative;\n      top: 70px;\n    }\n    @media(min-width: 530px){\n      .play-div{\n        top: 200px;\n      }\n    }\n    @media(min-width: 768px){\n      .play-div{\n        top: -40px;\n      }\n    }\n    @media(min-width: 1650px){\n      .play-div{\n        top: 125px;\n      }\n    }\n\n    .computer-play{\n      transform: rotate(180deg);\n      position: relative;\n      top: -50px;\n    }\n    @media(min-width: 530px){\n      .computer-play{\n        top: -150px;\n      }\n    }\n    @media(min-width: 768px){\n      .computer-play{\n        top: -55px;\n      }\n    }\n    @media(min-width: 1650px){\n      .computer-play{\n        top: -125px;\n      }\n    }\n\n    .off{\n      display: none;\n    }\n\n    .on{\n      display: inherit;\n    }\n\n    .finished{\n      display: none;\n    }\n  `,n.innerHTML='\n      <div class="playground-div">\n        <div class="computer-play">\n\n        </div>\n      <div>\n          <timer-el></timer-el>\n      </div>\n\n      <div class="play-div">\n          <play-selection selection="piedra" class="disabled" id="piedra"></play-selection>\n          <play-selection selection="papel" class="disabled" id="papel"></play-selection>\n          <play-selection selection="tijera" class="disabled" id="tijera"></play-selection>\n      </div>\n    </div>\n  ';const l=n.querySelector("#piedra"),c=n.querySelector("#papel"),d=n.querySelector("#tijera");l.addEventListener("click",(()=>{l.classList.replace("disabled","enabled"),c.classList.replace("enabled","disabled"),d.classList.replace("enabled","disabled")})),c.addEventListener("click",(()=>{c.classList.replace("disabled","enabled"),l.classList.replace("enabled","disabled"),d.classList.replace("enabled","disabled")})),d.addEventListener("click",(()=>{d.classList.replace("disabled","enabled"),c.classList.replace("enabled","disabled"),l.classList.replace("enabled","disabled")}));const r=setInterval((()=>{const e=d.classList.contains("disabled"),n=c.classList.contains("disabled"),t=l.classList.contains("disabled");console.log("Hola"),e&&n&&t&&(clearInterval(r),location.reload()),clearInterval(r)}),3100),p=setInterval((()=>{const e=n.querySelector("#piedra"),t=n.querySelector("#papel"),i=n.querySelector("#tijera");e.classList.contains("enabled")&&(o.setMove("piedra"),t.classList.add("off"),i.classList.add("off")),t.classList.contains("enabled")&&(o.setMove("papel"),i.classList.add("off"),e.classList.add("off")),i.classList.contains("enabled")&&(o.setMove("tijera"),t.classList.add("off"),e.classList.add("off")),clearInterval(p)}),5e3),m=setInterval((()=>{const e=`\n      <play-selection selection="${o.getState().currentGame.computerPlay}" class="on" id="computer-play"></play-selection>\n    `;document.querySelector(".computer-play").innerHTML=e,clearInterval(m)}),5050),u=setInterval((()=>{"/results"==location.pathname&&location.reload(),clearInterval(u)}),6700);return n.appendChild(t),n}},{path:/\/desafio-m5\/play/,page:function(e){const n=document.createElement("div"),t=document.createElement("style"),i=a("8Qdcl"),s=location.pathname,l=o.getState();if(null==l||null==l){const e={currentGame:{myPlay:"undefined",computerPlay:"undefined"},history:[],points:{computer:0,player:0}};console.log("inicializado el state"),o.setState(e)}t.textContent=`\n      .playground-div{\n        font-family: var(--main-font);\n        background-image: url(${i});\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: center;\n        height: 100vh;\n    }\n\n    @media(min-width:768px){\n      play-selection{\n\n      }\n    }\n\n\n    .disabled{\n      opacity: 45%;\n    }\n    @media(min-width: 768px){\n      .disabled{\n      }\n    }\n\n    .enabled{\n    }\n    @media(min-width: 768px){\n      .enabled{\n      }\n    }\n\n\n    .play-div{\n      max-height: 150px;\n      display: flex;\n      align-items: flex-end;\n      justify-content: space-around;\n      position: relative;\n      top: 70px;\n    }\n    @media(min-width: 530px){\n      .play-div{\n        top: 200px;\n      }\n    }\n    @media(min-width: 768px){\n      .play-div{\n        top: -40px;\n      }\n    }\n    @media(min-width: 1650px){\n      .play-div{\n        top: 125px;\n      }\n    }\n\n    .computer-play{\n      transform: rotate(180deg);\n      position: relative;\n      top: -50px;\n    }\n    @media(min-width: 530px){\n      .computer-play{\n        top: -150px;\n      }\n    }\n    @media(min-width: 768px){\n      .computer-play{\n        top: -55px;\n      }\n    }\n    @media(min-width: 1650px){\n      .computer-play{\n        top: -125px;\n      }\n    }\n\n    .off{\n      display: none;\n    }\n\n    .on{\n      display: inherit;\n    }\n\n    .finished{\n      display: none;\n    }\n  `,n.innerHTML='\n      <div class="playground-div">\n        <div class="computer-play">\n\n        </div>\n      <div>\n          <timer-el></timer-el>\n      </div>\n\n      <div class="play-div">\n          <play-selection selection="piedra" class="disabled" id="piedra"></play-selection>\n          <play-selection selection="papel" class="disabled" id="papel"></play-selection>\n          <play-selection selection="tijera" class="disabled" id="tijera"></play-selection>\n      </div>\n    </div>\n  ';const c=n.querySelector("#piedra"),d=n.querySelector("#papel"),r=n.querySelector("#tijera");c.addEventListener("click",(()=>{c.classList.replace("disabled","enabled"),d.classList.replace("enabled","disabled"),r.classList.replace("enabled","disabled")})),d.addEventListener("click",(()=>{d.classList.replace("disabled","enabled"),c.classList.replace("enabled","disabled"),r.classList.replace("enabled","disabled")})),r.addEventListener("click",(()=>{r.classList.replace("disabled","enabled"),d.classList.replace("enabled","disabled"),c.classList.replace("enabled","disabled")}));const p=setInterval((()=>{const e=r.classList.contains("disabled"),n=d.classList.contains("disabled"),t=c.classList.contains("disabled");console.log("Hola"),e&&n&&t&&(console.log(s),"/desafio-m5/play"==s&&(alert("REPLAY"),window.location.assign("https://seba-campo.github.io/desafio-m5/"))),clearInterval(p)}),3100),m=setInterval((()=>{const e=n.querySelector("#piedra"),t=n.querySelector("#papel"),i=n.querySelector("#tijera");e.classList.contains("enabled")&&(o.setMove("piedra"),t.classList.add("off"),i.classList.add("off")),t.classList.contains("enabled")&&(o.setMove("papel"),i.classList.add("off"),e.classList.add("off")),i.classList.contains("enabled")&&(o.setMove("tijera"),t.classList.add("off"),e.classList.add("off")),clearInterval(m)}),5e3),u=setInterval((()=>{const e=`\n      <play-selection selection="${o.getState().currentGame.computerPlay}" class="on" id="computer-play"></play-selection>\n    `;document.querySelector(".computer-play").innerHTML=e,clearInterval(u)}),5050),f=setInterval((()=>{"/desafio-m5/play"==s?e.goTo("/desafio-m5/results"):e.goTo("/results"),clearInterval(f)}),6700);return n.appendChild(t),n}},{path:/\/results/,page:c},{path:/\/desafio-m5\/results/,page:c}];!function(e){function n(e){history.pushState({},"",e),t(e)}function t(t){for(const i of d)if(i.path.test(t)){const t=i.page({goTo:n});e.firstChild&&e.firstChild.remove(),e.appendChild(t)}}"/desafio-m5/"==location.pathname&&n("/desafio-m5/welcome"),"/"==location.pathname&&n("/welcome"),t(location.pathname)}(document.querySelector(".root-div")),function(){class e extends HTMLElement{constructor(){super(),this.render()}connectedCallback(){}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style"),i=this.getAttribute("text");n.innerHTML=`\n            <button class="custom-button">${i}</button>\n        `,t.textContent="\n            .custom-button{\n                font-family: var(--main-font);\n                font-size: 30px;\n                width: 322px;\n                height: 87px;\n                background: #006CFC;\n                border: 10px solid #001997;\n                border-radius: 10px;\n            }\n            @media(min-widht: 769px){\n                .custom-button{\n                    width: 336px;\n                    height: 87px;\n                }\n            }\n        ",e.appendChild(t),e.appendChild(n)}}customElements.define("custom-button",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}connectedCallback(){this.addEventListener("click",(function(){this.getAttribute("selection")}))}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style"),i=this.getAttribute("selection");"piedra"==i&&(n.innerHTML=`\n        <div class="item">\n          <img src=${a("757vf")} class="play-choice">\n        </div>\n        `),"papel"==i&&(n.innerHTML=`\n        <div class="item">\n          <img src=${a("8CaF3")} class="play-choice">\n        </div>\n    `),"tijera"==i&&(n.innerHTML=`\n        <div class="item">\n          <img src=${a("j3KSY")} class="play-choice">\n        </div>\n    `),t.textContent="\n            .item{\n              display: flex;\n              flex-direction: column;\n              justify-items: flex-end;\n              margin: 0px 0px;\n            }\n\n            .play-choice{\n                width: 30vw;\n                margin: 0px 0px;   \n                position: relative;   \n                top: 0px      \n            }\n            @media(min-width: 768px){\n              .play-choice{\n                width: 15vw;\n                position: relative;\n                top: 90px;\n              }\n            }\n        ",n.appendChild(t),e.appendChild(n)}}customElements.define("play-selection",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}connectedCallback(){}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style");var i=3,a=setInterval((()=>{n.innerHTML=`<h1 class="counter-time">${i}</h1>`,--i<1&&(clearInterval(a),setTimeout((()=>{this.classList.add("finished")}),1e3))}),1e3);t.textContent="\n            .counter-time{ \n                font-size: 66px;\n                animation: fadeIn 0.5s; \n                margin: 100px 0;\n            }\n\n            @keyframes fadeIn {\n              0% { opacity: 0; }\n              100% { opacity: 1; }\n            }\n        ",e.appendChild(t),e.appendChild(n)}}customElements.define("timer-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=this.attachShadow({mode:"open"}),n=document.createElement("div"),t=document.createElement("style"),i=JSON.parse(this.getAttribute("won"));var s="";i&&(s="Ganaste"),i||(s="Perdiste");var l="";const o=this.getAttribute("player-score"),c=this.getAttribute("computer-score");l=JSON.parse(i)?a("fnn3F"):a("9s5PN"),n.innerHTML=`\n            <div class="main-score-frame">\n                <div class="background-star-div">\n                  <h1 class="result">${s}</h1>\n                </div>\n\n                <div class="score-box">\n                  <p class="score-title">Score</p>\n\n                  <div class="score-desc">\n                    <p>Vos: ${o}</p>\n                    <p>Maquina: ${c}</p>    \n                  </div>\n                </div>\n            </div>           \n        `,t.textContent=`\n          .main-score-frame{\n            display:flex;\n            flex-direction: column;\n            justify-content: space-around;\n            align-items: center;\n            font-family: var(--main-font)\n          }\n\n          .background-star-div{\n              width: 363px;\n              height: 363px;\n              background-image: url(${l});\n              background-size: 363px;\n              display: flex;\n              flex-direction: column;\n              align-items: center;\n              justify-content: center;\n              margin: 15px;\n          }\n\n          .score-box{\n            background-color: white;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            border: 8px solid black;\n            border-radius: 7px;\n            width: 40vw;\n          }\n          @media(min-width: 768px){\n            .score-box{\n              width: 15vw;\n            }\n          }\n\n          .score-title{\n            font-size: 46px;\n            margin: 15px 0 5px 0;\n          }\n\n          .score-desc{\n            font-size: 28px;\n            margin: 2px 0;\n          }\n\n          .result{\n            margin: 0 0;\n            font-size: 65px;\n          }\n        `,e.appendChild(t),e.appendChild(n)}}customElements.define("score-el",e)}();
//# sourceMappingURL=index.d017f950.js.map
