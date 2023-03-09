import { state } from "../../state";
export function initPlay(param) {
  const initialDiv = document.createElement("div");
  const style = document.createElement("style");

  const backgroundURL = require("url:../../img/fondo.svg");

  const computerPlay = state.generateComputerPlay();

  initialDiv.innerHTML = `
        <div class="playground-div">
            <div class="computer-play">
              <play-selection selection="${computerPlay}" class="off enabled" id="computer-play"></play-selection>
            </div>

            <div>
                <timer-el></timer-el>
            </div>

            <div class="play-div">
                <play-selection selection="piedra" class="disabled" id="piedra"></play-selection>
      
                <play-selection selection="papel" class="disabled" id="papel"></play-selection>
      
                <play-selection selection="tijera" class="disabled" id="tijera"></play-selection>
            </div>
        </div>
    `;

  const piedraEl = initialDiv.querySelector("#piedra");
  const papelEl = initialDiv.querySelector("#papel");
  const tijeraEl = initialDiv.querySelector("#tijera");

  piedraEl.addEventListener("click", function () {
    this.classList.replace("disabled", "enabled");
    papelEl.classList.replace("enabled", "disabled");
    tijeraEl.classList.replace("enabled", "disabled");
  });
  papelEl.addEventListener("click", function () {
    this.classList.replace("disabled", "enabled");
    tijeraEl.classList.replace("enabled", "disabled");
    piedraEl.classList.replace("enabled", "disabled");
  });
  tijeraEl.addEventListener("click", function () {
    this.classList.replace("disabled", "enabled");
    papelEl.classList.replace("enabled", "disabled");
    piedraEl.classList.replace("enabled", "disabled");
  });

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

  var timerPlay = setInterval(() => {
    const piedraSel = piedraEl.classList.contains("enabled");
    const papelSel = papelEl.classList.contains("enabled");
    const tijeraSel = tijeraEl.classList.contains("enabled");

    // const choice = [piedraSel, papelSel, tijeraSel];

    if (piedraSel) {
      piedraEl.classList.add("choosen");
      papelEl.classList.add("off");
      tijeraEl.classList.add("off");
    }
    if (papelSel) {
      papelEl.classList.add("choosen");
      piedraEl.classList.add("off");
      tijeraEl.classList.add("off");
    }
    if (tijeraSel) {
      tijeraEl.classList.add("choosen");
      piedraEl.classList.add("off");
      papelEl.classList.add("off");
    }

    const computerPlay = document.querySelector("#computer-play");
    computerPlay.classList.replace("off", "on");
  }, 5000);

  initialDiv.appendChild(style);

  return initialDiv;
}
