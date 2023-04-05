import { state } from "../../state";

export function initPlayPath(param) {
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
  margin: 0 ;
}
@media(min-width: 768px){
  .title-h3{
    margin: 0;
  }
}


.page-title{
  width: 55vw;
  height: 30vh;
  font-size: 40px;
}
@media(min-width: 768px){
  .page-title{
    width: 65vw;
    height: 30vh;
    margin: 20px 0;
    font-size: 66px;
  }
}

.play-div{
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  position: relative;
  top: 70px;
}
@media(min-width: 768px){
  .play-div{
  }
}

.item{
  height: 200px;
  justify-self: flex-end;
}
@media(min-width: 768px){
  .item{
    height: 250px;
  }
}
@media(min-width: 912px){
  .item{
    height: 350px;
  }
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
      console.log(path);
      if (path == "/desafio-m5/play") {
        alert("REPLAY");
        window.location.assign("https://seba-campo.github.io/desafio-m5/");
        // window.stop();
      }
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
