import { state } from "../../state";

export function playElement() {
  type Election = "piedra" | "papel" | "tijera";

  class Play extends HTMLElement {
    // shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super(), this.render();
    }
    connectedCallback() {
      this.addEventListener("click", function () {
        const selection = this.getAttribute("selection") as Election;
        state.setMove(selection);
      });
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const rootDiv = document.createElement("div");
      const style = document.createElement("style");

      const selection = this.getAttribute("selection") as Election;

      if (selection == "piedra") {
        rootDiv.innerHTML = `
        <div class="item">
          <img src=${require("url:../../img/piedra.svg")} class="play-choice">
        </div>
        `;
      }
      if (selection == "papel") {
        rootDiv.innerHTML = `
        <div class="item">
          <img src=${require("url:../../img/papel.svg")} class="play-choice">
        </div>
    `;
      }

      if (selection == "tijera") {
        rootDiv.innerHTML = `
        <div class="item">
          <img src=${require("url:../../img/tijera.svg")} class="play-choice">
        </div>
    `;
      }

      style.textContent = `
            .item{
              display: flex;
              flex-direction: column;
              justify-items: flex-end;
              margin: 0px 0px;
              height: 100px;
            }

            .play-choice{
                width: 30vw;
                margin: 0px 0px;              
            }
        `;

      rootDiv.appendChild(style);
      shadow.appendChild(rootDiv);
    }
  }
  customElements.define("play-selection", Play);
}
