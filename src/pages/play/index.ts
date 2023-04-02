import { state } from "../../state";

export function initPlay(param) {
  const initialDiv = document.createElement("div");
  const style = document.createElement("style");
  const backgroundURL = require("url:../../img/fondo.svg");
  const path = location.pathname;

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

    @media(min-width:768px){
      play-selection{

      }
    }
    

    .disabled{
      opacity: 45%;
    }
    @media(min-width: 768px){
      .disabled{
      }
    }

    .enabled{
    }
    @media(min-width: 768px){
      .enabled{
      }
    }


    .play-div{
      max-height: 150px;
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      position: relative;
      top: 70px;
    }
    @media(min-width: 530px){
      .play-div{
        top: 200px;
      }
    }
    @media(min-width: 768px){
      .play-div{
        top: -40px;
      }
    }
    @media(min-width: 1650px){
      .play-div{
        top: 125px;
      }
    }

    .computer-play{
      transform: rotate(180deg);
      position: relative;
      top: -50px;
    }
    @media(min-width: 530px){
      .computer-play{
        top: -150px;
      }
    }
    @media(min-width: 768px){
      .computer-play{
        top: -55px;
      }
    }
    @media(min-width: 1650px){
      .computer-play{
        top: -125px;
      }
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

  const timeToPlay = setInterval(() => {
    const tijeraClicked = tijeraEl.classList.contains("disabled");
    const papelClicked = papelEl.classList.contains("disabled");
    const piedraClicked = piedraEl.classList.contains("disabled");

    console.log("Hola");
    if (tijeraClicked && papelClicked && piedraClicked) {
      //Se usa location.reload, ya que si se usa el goTo, entra en bucle.
      clearInterval(timeToPlay);
      location.reload();
    }
    clearInterval(timeToPlay);
  }, 3100);

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

  const showResults = setInterval(() => {
    const path = location.pathname;
    if (path == "/desafio-m5/play") {
      // Para rutas en gh-pages
      param.goTo("/desafio-m5/results");
    } else {
      param.goTo("/results");
    }

    clearInterval(showResults);
  }, 6700);

  initialDiv.appendChild(style);
  return initialDiv;
}
