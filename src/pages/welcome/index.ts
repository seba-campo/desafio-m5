export function initWelcome(param) {
  const initialDiv = document.createElement("div");
  const style = document.createElement("style");

  initialDiv.innerHTML = `
        <div class="welcome-main-frame">
            <div>
                <h1>Piedra Papel ó Tijera</h1>
            </div>
            /*COMPONENTE BUTTON*/
            <button class="button">Pasar</button>
            /*COMPONENTE JUGADA*/
        </div>
    `;

  style.textContent = `
        .welcome-main-frame{
            background-image: url(../../img/fondo.png);
        }
    `;

  initialDiv.appendChild(style);

  const button = initialDiv.querySelector(".button");
  button.addEventListener("click", () => {
    param.goTo("/instructions");
  });

  return initialDiv;
}
