
import home from './pages/home/home';
/*import sobre from './pages/sobre/sobre';
import habilidades from './pages/habilidades/habilidades';
import projetos from './pages/projetos/projetos';
import contato from './pages/contato/contato';*/


const principal = document.querySelector('#principal');

const init = () => {
  window.addEventListener('hashchange', () => {
    principal.innerHTML = '';
    switch (window.location.hash) {
      case '':
        principal.appendChild(home());
        break;
      case '#sobre':
        principal.appendChild(sobre());
        break;
      case '#habilidades':
        principal.appendChild(habilidades());
        break;
      case '#projetos':
        principal.appendChild(projetos());
        break;
      case '#contato':
        principal.appendChild(contato());
        break;
      default:
        principal.appendChild(home());
        break;
    }
  });
};

window.addEventListener('load', () => {
  principal.appendChild(home());
  init();
});
