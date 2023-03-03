export function initInstructions(param) {
  const initialDiv = document.createElement("div");
  const style = document.createElement("style");

  initialDiv.innerHTML = `
          <div class="welcome-main-frame">
              <div>
                  <h1>INSTRUCCIONES</h1>
              </div>
              /*COMPONENTE BUTTON*/
              <custom-button text="Jugar!"></custom-button>
              /*COMPONENTE JUGADA*/
          </div>
      `;

  style.textContent = `
          .welcome-main-frame{
              font-family: var(--main-font);
              background-image: url(../../img/fondo.png);
          }
      `;

  initialDiv.appendChild(style);

  // const button = initialDiv.querySelector(".button");
  // button.addEventListener("click", () => {
  //   param.goTo("/instructions");
  // });

  return initialDiv;
}
