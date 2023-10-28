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


<div>
    <article class="sobre">
    
    <h2 class="sobre-titulo">Meus projetos (Em construção)</h2>

  

    <div id="videoModal" class="modal">
    <div class="modal-content">
      <div class="video-container">
      <h3>Card validator</h3>
        <iframe src="https://www.youtube.com/embed/jsEJVHVUMGY?si=g5Gf91nytAirJKQy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p> <span id="videoDescription">Este foi o meu primeiro projeto,
       proposto pelo Bootcamp de programação LABORATORIA. O método de ensino adotado
        neste programa é verdadeiramente singular, pois nos encoraja a explorar
         nosso autoconhecimento enquanto aprendemos a aprender. 
         Durante o desenvolvimento deste projeto, mergulhei de cabeça no mundo da 
         programação, aprimorando minhas habilidades em HTML, CSS e JavaScript.</span></p>
      <a href="https://anara-carolina.github.io/SAP010-card-validation/" target="_blank"><button class="btn-project">Acessar o Projeto</button></a>
    </div>
  </div>

  <div id="videoModal" class="modal">
    <div class="modal-content">
      <div class="video-container">
      <h3>Busca espiritual </h3>
      <iframe  src="https://www.youtube.com/embed/81CXqtiwucs?si=KzH-4iFD6YCPWz4b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </div>
      <p> <span id="videoDescription">Este projeto foi uma incrível colaboração e
      ntre mim e a talentosa desenvolvedora Dara Nunes durante nossa participação 
      no bootcamp da Laboratoria. Juntos, aplicamos nossos conhecimentos em JavaScript, 
      HTML e CSS para explorar conceitos essenciais, incluindo a implementação de filtros, 
      classificação de itens, manipulação de arrays com o método map e aprimoramento
       das habilidades de manipulação do DOM.</span></p>
      <a href="https://anara-carolina.github.io/SAP010-data-lovers/" target="_blank"><button class="btn-project">Acessar o Projeto</button></a>
    </div>
  </div>

  <div id="videoModal" class="modal">
  <div class="modal-content">
    <div class="video-container">
    <h3>Fight back </h3>
    <iframe  src="https://www.youtube.com/embed/ZHpZM2Qzv1w?si=fuD1qebWmUaIMPUT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
    <p> <span id="videoDescription">Neste projeto eu e a desenvolvedora Amanda
     estamos construindo uma Rede Social sobre defesa pessoal para mulheres. 
     É direcionado para mulheres que desejam receber dicas de como se defender 
     de possíveis ataques e violências, contando com uma rede de apoio disposta 
     a ajudar independente do nível de conhecimento (iniciante, intermediário
       ou avançado), que também fica exposto nas postagens de cada usuário. 
       Nossa Rede Social permite à qualquer usuário criar uma conta de acesso, 
       logar-se com ela, criar, editar e deletar publicações.</span></p>
    <a href="https://fight-back-3c119.web.app/" target="_blank"><button class="btn-project">Acessar o Projeto</button></a>
  </div>
</div>

<div id="videoModal" class="modal">
  <div class="modal-content">
    <div class="video-container">
    <h3>MD-Links </h3>
    <iframe src="https://www.youtube.com/embed/SOSjYrPwE6c?si=ef_cw0b651tY2qQ5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   
     <p> <span id="videoDescription">Projeto voltado prara Back-end; O Markdown Links é uma biblioteca criada para
      simplificar a leitura e validação de links encontrados em arquivos no formato
       Markdown (extensão .md). Com uma interface de linha de comando (CLI) 
       intuitiva, essa biblioteca é flexível o suficiente para ser usada em projetos
        Node.js e em aplicações de terminal.</span></p>
    <a href="https://www.npmjs.com/package/md-links-anara" target="_blank"><button class="btn-project">Acessar o Projeto</button></a>
  </div>
</div>



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
