// importar las paginas
import { initWelcome } from "./pages/welcome";
// lista de rutas
const routes = [
  {
    path: /\/welcome/,
    page: initWelcome,
  },
  {
    path: /\/step-1/,
    // page: initStepOne,
  },
  {
    path: /\/thankyou/,
    // page: initThankYou,
  },
];

export function initRouter(container: any) {
  //   si el pathname es /, redirije al welcome
  if (location.pathname == "/") {
    goTo("/welcome");
  }

  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.page({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  handleRoute(location.pathname);
}
