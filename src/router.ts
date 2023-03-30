// importar las paginas
import { initWelcome } from "./pages/welcome";
import { initInstructions } from "./pages/instructions";
import { initPlay } from "./pages/play";
import { initPlayPath } from "./pages/play-path";
import { initResults } from "./pages/results";
// lista de rutas
const routes = [
  {
    path: /\/welcome/,
    page: initWelcome,
  },
  {
    path: /\/desafio-m5\/welcome/,
    page: initWelcome,
  },
  {
    path: /\/instructions/,
    page: initInstructions,
  },
  {
    path: /\/desafio-m5\/instructions/,
    page: initInstructions,
  },
  {
    path: /\/play_local/,
    page: initPlay,
  },
  {
    path: /\/desafio-m5\/play/,
    page: initPlayPath,
  },
  {
    path: /\/results/,
    page: initResults,
  },
  {
    path: /\/desafio-m5\/results/,
    page: initResults,
  },
];

export function initRouter(container: any) {
  //   si el pathname es /, redirije al welcome
  if (location.pathname == "/desafio-m5/") {
    goTo("/desafio-m5/welcome");
  }
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
