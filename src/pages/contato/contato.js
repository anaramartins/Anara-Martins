import fotohome from '../../imagens/Anara.jpg';
import menu from '../../imagens/icon-menu.png';


export default () => {
  const container = document.createElement('div');
  container.id = 'csshome';

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

<article class="front">
<picture id="picture-home">
  <img src="${fotohome}" alt="" class="foto-home">
</picture>
<div class="introducao">
  <h2 class="titulo">Olá, Sejam bem vindes!!!</h2>
  <h1 class="nome"> Eu sou Anara Martins </h1>
  <p class="intro">Desenvolvedora de Front-End</p>

  <h2 class="sobre-titulo">Entre em contato!!!!</h2>

<a class="github-link" href="https://github.com/Anara-carolina">
  <img src="https://raw.githubusercontent.com/anaramartins/img/main/github.png" alt="GitHub">
</a>
<a class="github-link" href="mailto:anaramartins21@gmail.com">
  <img src="https://raw.githubusercontent.com/anaramartins/img/main/email.jpeg">
</a>
<a class="github-link" href="https://www.linkedin.com/in/anara-martins-4740b0108/">
  <img src="https://raw.githubusercontent.com/anaramartins/img/main/images.png" alt="Linkedin">
</a>

</a>
<a class="github-link" href="https://www.instagram.com/anaracbm/">
  <img src="https://raw.githubusercontent.com/anaramartins/img/main/instagran.png">
</a>
<a class="github-link" href="https://wa.me/5534997897879">
  <img src="https://raw.githubusercontent.com/anaramartins/img/main/whats.jpg" alt="WhatsApp">
</a>
<a class="github-link" href="https://www.facebook.com/anara.martins">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaSZtPszlt7q0YfqGtTrYTxDVUtCyqHCmLA&usqp=CAU" alt="Linkedin">
</a>
  </article>
   

  </div> `;
  
    container.innerHTML = template;
  
    const listaMenu = container.querySelector('.lista-menu');
    const botaoMenu = container.querySelector('#btn-menu');
  
    function abrirMenu() {
      listaMenu.classList.toggle('open');
    }
  
    botaoMenu.addEventListener('click', abrirMenu);
  
  
  
  
    return container;
  };
  