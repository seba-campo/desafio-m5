export function scoreEl() {
  class Score extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const rootDiv = document.createElement("div");
      const style = document.createElement("style");

      const won = this.getAttribute("won");
      var imgURL = "";

      const playerScore = this.getAttribute("player-score");
      const computerScore = this.getAttribute("computer-score");

      if (JSON.parse(won)) {
        imgURL = require("url:../../img/won.svg");
      } else {
        imgURL = require("url:../../img/lost.svg");
      }

      rootDiv.innerHTML = `
            <div class="background-star-div">
                <h1 class="result">Ganaste</h1>
            </div>

            <div class="score-box">
              <h2 class="score-title">Score</h2>

              <div class="score-desc">
                <h3>Vos: ${playerScore}</h3>
                <h3>Maquina: ${computerScore}</h3>    
              </div>
            </div>
        `;

      style.textContent = `
          .background-star-div{
              width: 363px;
              height: 363px;
              background-image: url(${imgURL});
              background-size: 363px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
          }

          .result{
            margin: 0 0;
            font-size: 55px;
          }
        `;
      shadow.appendChild(style);
      shadow.appendChild(rootDiv);
    }
  }
  customElements.define("score-el", Score);
}
