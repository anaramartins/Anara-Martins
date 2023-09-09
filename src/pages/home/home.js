import fotohome from '../../imagens/Anara.jpg';
import menu from '../../imagens/icon-menu.png';
import fotohab from '../../imagens/habilidades.jpg';


export default () => {
  const container = document.createElement('div');
  container.id = 'csshome';

  const template = `
  <div class="container-menu"> 
  
  <nav id="menuPortifolio">
  <ul class="lista-menu">
  <li>Sobre</li>
  <li>Habilidades</li>
  <li>Projetos</li>
  <li>Contato</li>
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
  <div class="botoes">
    <button id="btn-cv">
      <a href="https://drive.google.com/file/d/18pN-nJ2R9jEmtVQrFLRO8IN33tVa_UQ6/view?usp=sharing" download>Download CV</a>
    </button>
    <button id="btn-ct"><a href="/#contato">Contato</a></button>
  </div>
</div>
</article> 
    <article class="sobre">
    <h2 class="sobre-titulo">Sobre mim</h2>
    <p class="tx-sobre">
    Minha história é marcada pela paixão pela tecnologia. 
    Inicialmente, atuei na área de vendas, onde sempre estive envolvida 
    com produtos tecnológicos e me destacava por minha habilidade em vendê-los.
     No entanto, descobri que minha verdadeira paixão residia na programação, o
     nde pude deixar minha criatividade fluir.
    Foi então que ocorreu uma mudança significativa em minha vida: a migração de
    carreira. Encontrei no bootcamp Laboratoria uma oportunidade transformadora, 
    que me impulsionou a mergulhar de cabeça nesse novo caminho. Abraçar a tecnologia 
    como profissão tem sido uma jornada emocionante, na qual posso combinar minha 
    paixão e habilidades para criar soluções inovadoras
    </p>
    <h2 class="hab">Habilidades</h2>
    <img src="${fotohab}" alt="" class="foto-hab">
    </picture>
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
