// Pages
// Functions
import { initRouter } from "./router";
import { state } from "./state";

(() => {
  const root = document.querySelector(".root-div");
  initRouter(root);
})();
