import { state } from "../../state";

export function initWelcome(param) {
  const initialDiv = document.createElement("div");
  const style = document.createElement("style");

  const backgroundURL = require("url:../../img/fondo.svg");

  initialDiv.innerHTML = `
        <div class="welcome-main-frame">
            <div>
                <h1 class="page-title">Piedra Papel ó Tijera</h1>
            </div>
            <div>
              <custom-button text="Comenzar" class="button"></custom-button>
            </div>
            <div class="play-div">
             
                <play-selection selection="piedra" class="item"></play-selection>

                <play-selection selection="papel" class="item"></play-selection>

                <play-selection selection="tijera" class="item"></play-selection>
              
            </div>
        </div>
    `;

  style.textContent = `
        .welcome-main-frame{
            font-family: var(--main-font);
            background-image: url(${backgroundURL});
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            height: 100vh;
        }

        .page-title{
          text-align: center;
          width: 70vw;
          height: 40vh;
          margin: 45px 0 0 0;
          font-size: 80px;
          color: #009048;
        }
        @media(min-width: 768px){
          .page-title{
            height: 15vh;
            margin: 20px 0;
            font-size: 95px;
          }
        }

        .play-div{
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
        }
        @media(min-width: 768px){
          .play-div{
            height: 350px;  
          }
        }

        .item{
          height: 200px;
          justify-self: flex-end;
        }
        @media(min-width: 768px){
          .item{
            height: 250px;
          }
        }
        @media(min-width: 912px){
          .item{
            height: 350px;
          }
        }
    `;

  initialDiv.appendChild(style);

  const button = initialDiv.querySelector(".button");
  button.addEventListener("click", () => {
    const path = location.pathname;
    if (path == "/desafio-m5/welcome") {
      // Para rutas en gh-pages
      param.goTo("/desafio-m5/instructions");
    }
    if (path == "/welcome") {
      param.goTo("/instructions");
    }
  });

  return initialDiv;
}
/*
{"currentGame":{"myPlay":"piedra","computerPlay":"papel"},"history":[{"myPlay":"tijera","computerPlay":"tijera"}]}
 */
