import { state } from "../../state";

export function initResults(param) {
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

  console.log(history);
  for (let play of history) {
    // console.log(state.whoWins(play.myPlay, play.computerPlay));
    var won = state.whoWins(play.myPlay, play.computerPlay);
    if (won) {
      playerScore++;
    }
    if (!won) {
      computerScore++;
    }
    if (won == undefined) {
      console.log("Enri puto");
    }
  }

  initialDiv.innerHTML = `
        <div class="playground-div">
            <score-el won="true" computer-score="${computerScore}" player-score="${playerScore}"></score-el>

            <div class="computer-play">
              <play-selection selection="" class="enabled" ></play-selection>
            </div>


            <div class="play-div">
                <play-selection selection="}" class="enabled" ></play-selection>
            </div>
        </div>
    `;

  style.textContent = `
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

  initialDiv.appendChild(style);

  return initialDiv;
}
