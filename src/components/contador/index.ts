export function timerComponent() {
  class Timer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const rootDiv = document.createElement("div");
      const style = document.createElement("style");
      var t = 1;
      var timer = setInterval(() => {
        console.log(t);
        t++;
        if (t > 5) {
          clearInterval(timer);
        }

        rootDiv.innerHTML = `<h1 class="counter-time">${t - 1}</h1>`;
      }, 1000);

      style.textContent = `
            .counter-time{ 
                font-size: 66px;
            }
        `;

      shadow.appendChild(style);
      shadow.appendChild(rootDiv);
    }
  }
  customElements.define("timer-el", Timer);
}
