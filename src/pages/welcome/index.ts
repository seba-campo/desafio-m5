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
             
                <play-selection selection="piedra"></play-selection>

                <play-selection selection="papel"></play-selection>

                <play-selection selection="tijera"></play-selection>
              
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
          width: 25vw;
          height: 45vh;
          margin: 45px 0 0 0;
          font-size: 80px;
          color: #009048;
        }

        .play-div{
          height: 150px;
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
        }

        .item{
          width: 130px;
        }
    `;

  initialDiv.appendChild(style);

  const button = initialDiv.querySelector(".button");
  button.addEventListener("click", () => {
    param.goTo("/instructions");
  });

  return initialDiv;
}
