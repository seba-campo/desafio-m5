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
                   
                <play-selection selection="piedra"></play-selection>
      
                <play-selection selection="papel"></play-selection>
      
                <play-selection selection="tijera"></play-selection>
                    
            </div>
        </div>
          `;

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
