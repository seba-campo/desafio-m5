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
  },
  listeners: [],
  getState() {
    //   Retorna el JSON state en su última version del LOCAL
    const currentState = localStorage.getItem("currentState");

    return JSON.parse(currentState);
  },
  setMove(move: Jugada) {
    const currentState = this.getState();
    // Agrego ambas jugadas al currentState
    currentState.currentGame.myPlay = move;
    currentState.currentGame.computerPlay = this.generateComputerPlay();

    // Pusheo la jugada actual al historial
    this.pushToHistoy(currentState.currentGame);
    console.log(currentState.history);

    // aplico cambios al local storage
    localStorage.setItem("currentState", JSON.stringify(currentState));

    // llamo a los listeners y les paso el currentState, para que puedan acceder
    for (var cb of this.listeners) {
      cb(currentState);
    }
  },
  pushToHistoy(play: Game) {
    const currentState = this.getState();
    currentState.history.push(play);
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

    if (playerWins) {
      return "You Win";
    }
    if (computerWins) {
      return "Computer wins";
    }
    if (!computerWins && !playerWins) {
      return "Empate";
    }
  },
  generateComputerPlay() {
    const posibilities = ["piedra", "papel", "tijera"];

    const nroRandom = Math.floor(Math.random() * (3 - 0) + 0);

    console.log(posibilities[nroRandom]);

    return posibilities[nroRandom];
  },
};

state.setMove("papel");

const jugada = state.getState().currentGame;

console.log(state.whoWins(jugada.myPlay, jugada.computerPlay));
