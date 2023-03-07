export function initPlay(param) {
  const initialDiv = document.createElement("div");
  const style = document.createElement("style");

  const backgroundURL = require("url:../../img/fondo.svg");

  initialDiv.innerHTML = `
        <div class="playground-div">
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
  });
  papelEl.addEventListener("click", function () {
    this.classList.replace("disabled", "enabled");
  });
  tijeraEl.addEventListener("click", function () {
    this.classList.replace("disabled", "enabled");
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
          `;

  initialDiv.appendChild(style);

  return initialDiv;
}
