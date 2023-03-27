import { state } from "../../state";
import { initRouter } from "../../router";

export function initResults(params) {
  const initialDiv = document.createElement("div");
  const style = document.createElement("style");

  const backgroundURL = require("url:../../img/fondo.svg");

  const currentState = state.getState();
  console.log(currentState);

  const lastComputerPlay = currentState.currentGame.computerPlay;
  const lastPlayerPlay = currentState.currentGame.myPlay;
  const history = currentState.history;

  var playerScore = 0;
  var computerScore = 0;

  var whoWin = state.whoWins(lastPlayerPlay, lastComputerPlay);
  console.log(whoWin);
  console.log(history);
  for (let play of history) {
    // console.log(state.whoWins(play.myPlay, play.computerPlay));
    var won = state.whoWins(play.myPlay, play.computerPlay);
    if (won) {
      playerScore++;
    }
    if (!won) {
      computerScore++;
      won = false;
    }
    if (won == undefined) {
      console.log("Empate");
    }
  }

  initialDiv.innerHTML = `
      <div class="main-wrapper">
        <div class="score-div">
              <score-el won="${whoWin}" computer-score="${computerScore}" player-score="${playerScore}"></score-el>

              <custom-button class="button" text="Volver a jugar"></custom-button>
        </div>

          <div class="playground-div">
              <div class="computer-play">
                <play-selection selection="${lastComputerPlay}" class="disabled"></play-selection>
          </div>

          <div class="play-div">
              <play-selection selection="${lastPlayerPlay}" class="disabled"></play-selection>
          </div>
      </div>
      `;

  style.textContent = `
    .main-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .score-div{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 100vw;
      height: 100vh;
      z-index: 1;
      position: fixed;
      background-color: rgba(137, 73, 73, 0.9);
    }

    .button{
      margin: 15px;
    }

    .playground-div{
        font-family: var(--main-font);
        background-image: url(${backgroundURL});
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
    }
    
    .disabled{
      position: relative;
      top: -90px;
      opacity: 45%;
    }

    .enabled{
      position: relative;
      top: -150px;
    }

    .play-div{
      height: 150px;
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
    }

    .computer-play{
      transform: rotate(180deg)
    }

    .off{
      display: none;
    }

    .on{
      display: inherit;
    }

    .finished{
      display: none;
    }
          `;

  // const choice = [piedraSel, papelSel, tijeraSel];

  const button = initialDiv.querySelector(".button");
  button.addEventListener("click", () => {
    params.goTo("/play");
  });

  initialDiv.appendChild(style);

  return initialDiv;
}
