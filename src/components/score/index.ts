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

      const won = JSON.parse(this.getAttribute("won"));
      var resultString = "";
      if (won) {
        resultString = "Ganaste";
      }
      if (!won) {
        resultString = "Perdiste";
      }
      if (won == null) {
        resultString = "Empate";
      }

      var imgURL = "";

      const playerScore = this.getAttribute("player-score");
      const computerScore = this.getAttribute("computer-score");

      if (JSON.parse(won)) {
        imgURL = require("url:../../img/won.svg");
      }
      if (!JSON.parse(won)) {
        imgURL = require("url:../../img/lost.svg");
      }
      if (JSON.parse(won) == null) {
        imgURL = require("url:../../img/lost.svg");
      }

      rootDiv.innerHTML = `
            <div class="main-score-frame">
                <div class="background-star-div">
                  <h1 class="result">${resultString}</h1>
                </div>

                <div class="score-box">
                  <p class="score-title">Score</p>

                  <div class="score-desc">
                    <p>Vos: ${playerScore}</p>
                    <p>Maquina: ${computerScore}</p>    
                  </div>
                </div>
            </div>           
        `;

      style.textContent = `
          .main-score-frame{
            display:flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            font-family: var(--main-font)
          }

          .background-star-div{
              width: 220px;
              height: 220px;
              background-image: url(${imgURL});
              background-size: 220px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin: 15px;
          }
          @media(min-width: 768px){
            .background-star-div{
              width: 364px;
              height: 364px;
              background-size: 364px;
            }
          }
          
          .result{
            margin: 0 0;
            font-size: 45px;
          }
          @media(min-width: 768px){
            .result{
              font-size: 65px;s
            }
          }

          
          .score-box{
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 8px solid black;
            border-radius: 7px;
            width: 40vw;
            height: 200px;
          }
          @media(min-width: 768px){
            .score-box{
              width: 15vw;
            }
          }

          .score-title{
            font-size: 46px;
            margin: 15px 0 5px 0;
          }

          .score-desc{
            font-size: 28px;
            margin: 2px 0;
          }

        `;
      shadow.appendChild(style);
      shadow.appendChild(rootDiv);
    }
  }
  customElements.define("score-el", Score);
}
