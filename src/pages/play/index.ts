import { state } from "../../state";

export function initPlay(param) {
  const initialDiv = document.createElement("div");
  const style = document.createElement("style");
  const backgroundURL = require("url:../../img/fondo.svg");

  const initLocalState = state.getState();

  //Si no existe state en el storage lo inicializo
  if (initLocalState == undefined || initLocalState == null) {
    const initialState = {
      currentGame: { myPlay: "undefined", computerPlay: "undefined" },
      history: [],
      points: {
        computer: 0,
        player: 0,
      },
    };
    console.log("inicializado el state");

    state.setState(initialState);
  }

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
      transform: rotate(180deg);
      position: relative;
      top: 140px;
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

  // <play-selection selection="${}" class="off enabled" id="computer-play"></play-selection>

  initialDiv.innerHTML = `
      <div class="playground-div">
        <div class="computer-play">

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

  piedraEl.addEventListener("click", () => {
    piedraEl.classList.replace("disabled", "enabled");
    papelEl.classList.replace("enabled", "disabled");
    tijeraEl.classList.replace("enabled", "disabled");
  });
  papelEl.addEventListener("click", () => {
    papelEl.classList.replace("disabled", "enabled");
    piedraEl.classList.replace("enabled", "disabled");
    tijeraEl.classList.replace("enabled", "disabled");
  });
  tijeraEl.addEventListener("click", () => {
    tijeraEl.classList.replace("disabled", "enabled");
    papelEl.classList.replace("enabled", "disabled");
    piedraEl.classList.replace("enabled", "disabled");
  });

  const showPlay = setInterval(() => {
    const piedraEl = initialDiv.querySelector("#piedra");
    const papelEl = initialDiv.querySelector("#papel");
    const tijeraEl = initialDiv.querySelector("#tijera");

    if (piedraEl.classList.contains("enabled")) {
      state.setMove("piedra");
      papelEl.classList.add("off");
      tijeraEl.classList.add("off");
    }
    if (papelEl.classList.contains("enabled")) {
      state.setMove("papel");
      tijeraEl.classList.add("off");
      piedraEl.classList.add("off");
    }
    if (tijeraEl.classList.contains("enabled")) {
      state.setMove("tijera");
      papelEl.classList.add("off");
      piedraEl.classList.add("off");
    }

    clearInterval(showPlay);
  }, 5000);

  const showComputerPlay = setInterval(() => {
    const cs = state.getState();

    var computerChoice = cs.currentGame.computerPlay;

    const playSelectionEl = `
      <play-selection selection="${computerChoice}" class="on" id="computer-play"></play-selection>
    `;

    const computerPlayEl = document.querySelector(".computer-play");
    computerPlayEl.innerHTML = playSelectionEl;

    clearInterval(showComputerPlay);
  }, 5050);

  initialDiv.appendChild(style);
  return initialDiv;
}
