export function initInstructions(param) {
  const initialDiv = document.createElement("div");
  const style = document.createElement("style");
  const backgroundURL = require("url:../../img/fondo.svg");

  initialDiv.innerHTML = `
          <div class="welcome-main-frame">
            <div class="page-title">
                <h3 class="title-h3">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>
            </div>

            <div class="button-div">
              <custom-button text="Jugar!" class="button"></custom-button>
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
          justify-content: space-around;
          align-items: center;
          height: 100vh;
      }

      .title-h3{
        margin: 0;
      }

      .page-title{
        width: 75vw;
        height: 30vh;
        font-size: 40px;
      }
      @media(min-width: 768px){
        .page-title{
          height: 35vh;
          margin: 20px 0;
          font-size: 66px;
        }
      }

      .button-div{}

      .play-div{
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        position: relative;
        top: 70px;
      }
      @media(min-width: 768px){
        .play-div{
          position: relative;
          top: -200px;
        }
      }

      .item{
        width: 130px;
      }
      @media(min-width: 768px){
        .item{
          height: 400px;
        }
      }
  `;

  initialDiv.appendChild(style);

  const button = initialDiv.querySelector(".button");
  button.addEventListener("click", () => {
    param.goTo("/play");
  });

  return initialDiv;
}
