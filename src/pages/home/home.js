import fotohome from '../../imagens/Anara.jpg';
import menu from '../../imagens/icon-menu.png';
import fotohab from '../../imagens/habilidades.jpg';
import git from '../../imagens/icongit.png';
import instagran from '../../imagens/insta.png';
import cel from '../../imagens/celular.png';
import linkedin from '../../imagens/linkedin.png';








export default () => {
  const container = document.createElement('div');
  container.id = 'csshome';

  const template = `
  
  <nav id="menuPortifolio">
  
  <div class="portifolio">
  <picture>
  <img src="${menu}" alt="" class="iconMenu">
</picture>   <h1 class="txPortifolio">Portifólio</h1>
  </div>
</nav>

    <article class="front">
    <picture id="picture-home">
    <img src="${fotohome}" alt="" class="foto-home">
  </picture>
  <div class="introducao"> 
    <h2 class ="titulo">Olá, Sejam bem vindes!!!</h2>
    <h1 class ="nome"> Eu sou Anara Martins </h1>
    <p class ="intro">Desenvolvedora de Front-End</p>
    <div class="botoes">
    <button id="btn-cv"><a">Download CV</a></button>
    <button id="btn-ct"><a href="/#contato">Contato</a></button>
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
    
    <h2 class="contatos">Contatos</h2>
<h3 class="name">Anara Martins</h3>
<div class="contatosIn">
  <a href="mailto:anaramartins31@gmail.com">
    <img src="" alt="E-mail" class="icone-contato" target="_blank">
  </a>
  <a href="https://www.linkedin.com/in/anara-martins-4740b0108/" target="_blank">
    <img src="${linkedin}" alt="LinkedIn" class="icone-contato">
  </a>
  <a href="https://github.com/Anara-carolina/" target="_blank">
    <img src="${git}" alt="GitHub" class="icone-contato">
  </a>
  <a href="https://www.instagram.com/anaracbm/" target="_blank">
    <img src="${instagran}" alt="Instagram" class="icone-contato">
  </a>
  <a href="tel:(34) 99789-7879">
    <img src="${cel}" alt="Telefone" class="icone-contato">
  </a>
</div>


</div>


  
    


   
    `;
   
    

  container.innerHTML = template;

  return container;
};
