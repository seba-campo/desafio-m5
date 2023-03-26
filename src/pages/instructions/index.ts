export function initInstructions(param) {
  const initialDiv = document.createElement("div");
  const style = document.createElement("style");
  const backgroundURL = require("url:../../img/fondo.svg");

  initialDiv.innerHTML = `
          <div class="welcome-main-frame">
            <div class="page-title">
                <h3>Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</h3>
            </div>

            <custom-button text="Jugar!" class="button"></custom-button>
              
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
        width: 45vw;
        height: 45vh;
        margin: 25px 0 0 0;
        font-size: 40px;
      }
      @media(min-width: 768px){
        .page-title{
          height: 15vh;
          margin: 20px 0;
          font-size: 95px;
        }
      }

      .play-div{
        height: 150px;
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
