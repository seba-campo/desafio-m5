export function timerComponent() {
  class Timer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    connectedCallback() {}
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const rootDiv = document.createElement("div");
      const style = document.createElement("style");
      var t = 3;

      var timer = setInterval(() => {
        console.log(t);
        rootDiv.innerHTML = `<h1 class="counter-time">${t}</h1>`;
        --t;
        if (t < 1) {
          clearInterval(timer);
          setTimeout(() => {
            console.log(this);
            this.classList.add("finished");
          }, 1000);
        }
      }, 1000);

      style.textContent = `
            .counter-time{ 
                font-size: 66px;
                animation: fadeIn 0.5s; 
                margin: 100px 0;
            }

            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
        `;

      shadow.appendChild(style);
      shadow.appendChild(rootDiv);
    }
  }
  customElements.define("timer-el", Timer);
}
