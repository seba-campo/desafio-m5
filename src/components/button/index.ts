export function customButton() {
  class Button extends HTMLElement {
    // shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super(), this.render();
    }
    connectedCallback() {}
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      const text = this.getAttribute("text");

      div.innerHTML = `
            <button class="custom-button">${text}</button>
        `;

      style.textContent = `
            .custom-button{
                font-family: var(--main-font);
                font-size: 30px;
                width: 322px;
                height: 87px;
                background: #006CFC;
                border: 10px solid #001997;
                border-radius: 10px;
            }
            @media(min-widht: 769px){
                .custom-button{
                    width: 336px;
                    height: 87px;
                }
            }
        `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("custom-button", Button);
}
