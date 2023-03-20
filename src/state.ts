type Jugada = "piedra" | "papel" | "tijera";
type Game = {
  myPlay: Jugada;
  computerPlay: Jugada;
};

export const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    },
    history: [{ myPlay: "tijera", computerPlay: "tijera" }],
    results: {
      computer: 0,
      player: 0,
    },
  },
  listeners: [],
  subscribe(callback: (any) => any) {
    // recibe callbacks para ser avisados posteriormente
    this.listeners.push(callback);
  },
  getState() {
    //   Retorna el JSON state en su última version del LOCAL
    const currentState = localStorage.getItem("currentState");

    return JSON.parse(currentState);
  },
  setState(newState) {
    localStorage.setItem("currentState", JSON.stringify(newState));
  },
  setMove(move: Jugada) {
    const currentState = this.getState();

    // Agrego ambas jugadas al currentState
    currentState.currentGame.myPlay = move;
    // currentState.currentGame.computerPlay = this.generateComputerPlay();

    // Pusheo la jugada actual al historial
    currentState.history.push(currentState.currentGame);

    // aplico cambios al local storage
    localStorage.setItem("currentState", JSON.stringify(currentState));

    // llamo a los listeners y les paso el currentState, para que puedan acceder
    for (var cb of this.listeners) {
      cb(currentState);
    }
  },
  whoWins(myPlay: Jugada, computerPlay: Jugada) {
    const ganeConTijeras = myPlay == "tijera" && computerPlay == "papel";
    const ganeConPapel = myPlay == "papel" && computerPlay == "piedra";
    const ganeConPiedra = myPlay == "piedra" && computerPlay == "tijera";

    const playerWins = [ganeConTijeras, ganeConPiedra, ganeConPapel].includes(
      true
    );

    const computerGanoTijeras = computerPlay == "tijera" && myPlay == "papel";
    const computerGanoPapel = computerPlay == "papel" && myPlay == "piedra";
    const computerGanoPiedra = computerPlay == "piedra" && myPlay == "tijera";

    const computerWins = [
      computerGanoTijeras,
      computerGanoPapel,
      computerGanoPiedra,
    ].includes(true);

    // var results = {
    //   computer: 0,
    //   player: 0,
    // };

    if (playerWins) {
      return true;
    }
    if (computerWins) {
      return false;
    }
  },
  generateComputerPlay() {
    const posibilities = ["piedra", "papel", "tijera"];
    const nroRandom = Math.floor(Math.random() * (3 - 0) + 0);
    return posibilities[nroRandom];
  },
};
