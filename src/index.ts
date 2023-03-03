// Components
import { customButton } from "./components/button";
import { playElement } from "./components/jugada";
// Functions
import { initRouter } from "./router";

(() => {
  const root = document.querySelector(".root-div");
  initRouter(root);

  customButton();
  playElement();
})();
