import menu from '../../imagens/icon-menu.png';
import menu from '../../imagens/icon-menu.png';
mm 




export default () => {
    const container = document.createElement('div');
    container.id = 'cssSobre';
  
    const template = `
    <div class="container-menu"> 
    
    <nav id="menuPortifolio">
    <ul class="lista-menu">
    <li><a href="#home" class="li-home">Home</a></li>
    <li><a href="#sobre" class="li-sobre">Minha hitória</a></li>
    <li><a href="#habilidades" class="li-hab">Minhas habilidades</a></li>
    <li><a href="#projetos" class="li-proj">Meus Projetos</a></li>
    <li><a href="#contato" class="li-cont">Entre em contato</a></li>
  </ul>
  </nav> 
   <button id="btn-menu"><img src="${menu}" id ="iconMenu"></button>
  
    <div class="portifolio">
    <h1 class="txPortifolio">Portifólio</h1>
   </div>
  </div> 
  <article class="front-cont">
  <h2 class="sobre-titulo">Meus contatos</h2>
<div class="container01">
<picture>
  <img src="${fotohome}" alt="" class="foto-home">
</picture>
</div>
  




    </article>

  `;
  
  container.innerHTML = template;
  
  const listaMenu = container.querySelector('.lista-menu');
  const botaoMenu = container.querySelector('#btn-menu');
  
  function abrirMenu() {
    listaMenu.classList.toggle('open');
  }
  
  botaoMenu.addEventListener('click', abrirMenu);
  
  
  
  
    return container;
  };