export function playElement() {
  type Election = "piedra" | "papel" | "tijera";

  class Play extends HTMLElement {
    // shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super(), this.render();
    }
    connectedCallback() {}
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const rootDiv = document.createElement("div");
      const style = document.createElement("style");

      const selection = this.getAttribute("selection") as Election;

      if (selection == "piedra") {
        rootDiv.innerHTML = `
            <img src=${require("url:../../img/piedra.png")} class="play-choice">
        `;
      }
      if (selection == "papel") {
        rootDiv.innerHTML = `
        <img src=${require("url:../../img/papel.png")} class="play-choice">
    `;
      }
      if (selection == "tijera") {
        rootDiv.innerHTML = `
        <img src=${require("url:../../img/tijera.png")} class="play-choice">
    `;
      }

      style.textContent = `
            .play-choice{
                height: 170px;
                margin: 0px 10px;
            }
        `;

      rootDiv.appendChild(style);
      shadow.appendChild(rootDiv);
    }
  }
  customElements.define("play-selection", Play);
}
