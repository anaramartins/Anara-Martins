(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const home$1 = "";
const sobre$1 = "";
const projetos$1 = "";
const habilidades$1 = "";
const fotohome = "/assets/Anara.a1cd0ad1.jpg";
const menu = "/assets/icon-menu.51ffca38.png";
const fotohab = "/assets/habilidades.351f3072.png";
const home = () => {
  const container = document.createElement("div");
  container.id = "csshome";
  const template = `
  <div class="container-menu"> 
  
  <nav id="menuPortifolio">
  <ul class="lista-menu">
    <li><a href="#home" class="li-home">Home</a></li>
    <li><a href="#sobre" class="li-sobre">Minha hit\xF3ria</a></li>
    <li><a href="#habilidades" class="li-hab">Minhas habilidades</a></li>
    <li><a href="#projetos" class="li-proj">Meus Projetos</a></li>
    <li><a href="#contato" class="li-cont">Entre em contato</a></li>
  </ul>
</nav> 
 <button id="btn-menu"><img src="${menu}" id ="iconMenu"></button>

  <div class="portifolio">
  <h1 class="txPortifolio">Portif\xF3lio</h1>
 </div>
</div>

<article class="front">
<picture id="picture-home">
  <img src="${fotohome}" alt="" class="foto-home">
</picture>
<div class="introducao">
  <h2 class="titulo">Ol\xE1, Sejam bem vindes!!!</h2>
  <h1 class="nome"> Eu sou Anara Martins </h1>
  <p class="intro">Desenvolvedora de Front-End</p>
  <div class="botoes">
    <button id="btn-cv">
      <a href="https://drive.google.com/file/d/1NzImTm9Re2vlsPxyHS9F7WeBWzZtsUsU/view?usp=sharing" download>Download CV</a>
    </button>
    <button id="btn-ct"><a href="/#contato">Contato</a></button>
  </div>
</div>
</article> 
<div>
    <article class="sobre">
    <h2 class="sobre-titulo">Sobre mim</h2>
    <p class="tx-sobre">
    Minha hist\xF3ria \xE9 marcada pela paix\xE3o pela tecnologia. 
    Inicialmente, atuei na \xE1rea de vendas, onde sempre estive envolvida 
    com produtos tecnol\xF3gicos e me destacava por minha habilidade em vend\xEA-los.
     No entanto, descobri que minha verdadeira paix\xE3o residia na programa\xE7\xE3o, o
     nde pude deixar minha criatividade fluir.
    Foi ent\xE3o que ocorreu uma mudan\xE7a significativa em minha vida: a migra\xE7\xE3o de
    carreira. Encontrei no bootcamp Laboratoria uma oportunidade transformadora, 
    que me impulsionou a mergulhar de cabe\xE7a nesse novo caminho. Abra\xE7ar a tecnologia 
    como profiss\xE3o tem sido uma jornada emocionante, na qual posso combinar minha 
    paix\xE3o e habilidades para criar solu\xE7\xF5es inovadoras
    </p>
    <h2 class="hab">Habilidades</h2>
    <img src="${fotohab}" alt="" class="foto-hab">
    </picture>

    <h2 class="sobre-titulo">Projetos</h2>

  

    <div id="videoModal" class="modal">
    <div class="modal-content">
      <div class="video-container">
      <h3>Card validator</h3>
        <iframe src="https://www.youtube.com/embed/jsEJVHVUMGY?si=g5Gf91nytAirJKQy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p> <span id="videoDescription">Este foi o meu primeiro projeto,
       proposto pelo Bootcamp de programa\xE7\xE3o LABORATORIA. O m\xE9todo de ensino adotado
        neste programa \xE9 verdadeiramente singular, pois nos encoraja a explorar
         nosso autoconhecimento enquanto aprendemos a aprender. 
         Durante o desenvolvimento deste projeto, mergulhei de cabe\xE7a no mundo da 
         programa\xE7\xE3o, aprimorando minhas habilidades em HTML, CSS e JavaScript.</span></p>
      <a href="https://anara-carolina.github.io/SAP010-card-validation/" target="_blank"><button class="btn-project">Acessar o Projeto</button></a>
    </div>
  </div>

  <div id="videoModal" class="modal">
    <div class="modal-content">
      <div class="video-container">
      <h3>Busca espiritual </h3>
      <iframe  src="https://www.youtube.com/embed/81CXqtiwucs?si=KzH-4iFD6YCPWz4b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </div>
      <p> <span id="videoDescription">Este projeto foi uma incr\xEDvel colabora\xE7\xE3o e
      ntre mim e a talentosa desenvolvedora Dara Nunes durante nossa participa\xE7\xE3o 
      no bootcamp da Laboratoria. Juntos, aplicamos nossos conhecimentos em JavaScript, 
      HTML e CSS para explorar conceitos essenciais, incluindo a implementa\xE7\xE3o de filtros, 
      classifica\xE7\xE3o de itens, manipula\xE7\xE3o de arrays com o m\xE9todo map e aprimoramento
       das habilidades de manipula\xE7\xE3o do DOM.</span></p>
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
     \xC9 direcionado para mulheres que desejam receber dicas de como se defender 
     de poss\xEDveis ataques e viol\xEAncias, contando com uma rede de apoio disposta 
     a ajudar independente do n\xEDvel de conhecimento (iniciante, intermedi\xE1rio
       ou avan\xE7ado), que tamb\xE9m fica exposto nas postagens de cada usu\xE1rio. 
       Nossa Rede Social permite \xE0 qualquer usu\xE1rio criar uma conta de acesso, 
       logar-se com ela, criar, editar e deletar publica\xE7\xF5es.</span></p>
    <a href="https://fight-back-3c119.web.app/" target="_blank"><button class="btn-project">Acessar o Projeto</button></a>
  </div>
</div>

<div id="videoModal" class="modal">
  <div class="modal-content">
    <div class="video-container">
    <h3>MD-Links </h3>
    <iframe src="https://www.youtube.com/embed/SOSjYrPwE6c?si=ef_cw0b651tY2qQ5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   
     <p> <span id="videoDescription">Projeto voltado prara Back-end; O Markdown Links \xE9 uma biblioteca criada para
      simplificar a leitura e valida\xE7\xE3o de links encontrados em arquivos no formato
       Markdown (extens\xE3o .md). Com uma interface de linha de comando (CLI) 
       intuitiva, essa biblioteca \xE9 flex\xEDvel o suficiente para ser usada em projetos
        Node.js e em aplica\xE7\xF5es de terminal.</span></p>
    <a href="https://www.npmjs.com/package/md-links-anara" target="_blank"><button class="btn-project">Acessar o Projeto</button></a>
  </div>
</div>

<h2 class="sobre-titulo">Contato</h2>

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
  const listaMenu = container.querySelector(".lista-menu");
  const botaoMenu = container.querySelector("#btn-menu");
  function abrirMenu() {
    listaMenu.classList.toggle("open");
  }
  botaoMenu.addEventListener("click", abrirMenu);
  return container;
};
const sobre = () => {
  const container = document.createElement("div");
  container.id = "cssSobre";
  const template = `
    <div class="container-menu"> 
    
    <nav id="menuPortifolio">
    <ul class="lista-menu">
    <li><a href="#home" class="li-home">Home</a></li>
    <li><a href="#sobre" class="li-sobre">Minha hit\xF3ria</a></li>
    <li><a href="#habilidades" class="li-hab">Minhas habilidades</a></li>
    <li><a href="#projetos" class="li-proj">Meus Projetos</a></li>
    <li><a href="#contato" class="li-cont">Entre em contato</a></li>
  </ul>
  </nav> 
   <button id="btn-menu"><img src="${menu}" id ="iconMenu"></button>
  
    <div class="portifolio">
    <h1 class="txPortifolio">Portif\xF3lio</h1>
   </div>
  </div> 
  <article class="front-sobre">
  <picture id="picture-sobre">
  <img src="${fotohome}" alt="" class="foto-sobre">
</picture>
<h2 class="sobre-titulo">Minha hist\xF3ria</h2>
    <p class="tx-sobre">
    Desde cedo, tenho perseguido meus sonhos, tornando-me uma mulher independente e apaixonada. 
    Minha jornada profissional teve in\xEDcio em 2010, em um hipermecado, onde integrei a equipe do setor de fotocenter. 
    Foi nesse contexto que meu amor pela tecnologia floresceu, pois foi a\xED que tive meu primeiro contato com ferramentas de design,
     como Photoshop e CorelDRAW. Esse momento marcou o come\xE7o do meu desenvolvimento criativo, permitindo-me cultivar 
 habilidades essenciais, como proatividade, adaptabilidade, trabalho em equipe, pensamento cr\xEDtico, an\xE1lise e atendimento ao p\xFAblico.</p>

<p class="tx-sobre">Minha contribui\xE7\xE3o nessa experi\xEAncia enche-me de orgulho: colaborei para o crescimento dos lucros nos departamentos de fotocenter
 e confeitaria. Minha criatividade resultou na cria\xE7\xE3o de uma bancada atrativa e tem\xE1tica, unindo o setor de confeitaria aos produtos
 personalizados de festas. Essa inova\xE7\xE3o, que mantem at\xE9 hoje, \xE9 adotada em todo o Brasil.</p>

<p class="tx-sobre">Impulsionada por essa paix\xE3o emergente, busquei aprimoramento atrav\xE9s de cursos em web design e manuten\xE7\xE3o de computadores.
 No entanto, minha carreira ganhou contornos comerciais, sempre coexistindo com a tecnologia. Em passagens por empresas de 
 telecomunica\xE7\xF5es como TIM, Oi e Algar Telecom, enriqueci minha experi\xEAncia.</p>

<p class="tx-sobre">Foi na Algar Telecom que aprofundei minha afei\xE7\xE3o por redes, incitando-me a cursar Tecnologia da Informa\xE7\xE3o. 
Ali, desvendei os bastidores da internet, compreendendo sua intrincada conex\xE3o a servidores, 
sua jornada surreal por cabos submarinos at\xE9 alcan\xE7ar cada usu\xE1rio. Essa descoberta agu\xE7ou minha curiosidade 
sobre o funcionamento dos programas e interfaces que animam a internet.</p>

<p class="tx-sobre">Em 2022, aos 33 anos e m\xE3e de duas crian\xE7as, decidi dar vida aos meus estudos,
meu sonho e minha paix\xE3o embarcando plenamente no universo tecnol\xF3gico e reorientando minha carreira. 
Hoje, contemplo com orgulho minha trajet\xF3ria, convertendo-me em uma entusiasta do campo tecnol\xF3gico, 
abra\xE7ando o desafio de aprender novas linguagens e superar-me constantemente. Aprendi a arte de aprender, 
e isso \xE9 minha maior conquista.
    </p>

   







    </article>

  `;
  container.innerHTML = template;
  const listaMenu = container.querySelector(".lista-menu");
  const botaoMenu = container.querySelector("#btn-menu");
  function abrirMenu() {
    listaMenu.classList.toggle("open");
  }
  botaoMenu.addEventListener("click", abrirMenu);
  return container;
};
const habilidades = () => {
  const container = document.createElement("div");
  container.id = "csshabilidades";
  const template = `
    <div class="container-menu"> 
    
    <nav id="menuPortifolio">
    <ul class="lista-menu">
    <li><a href="#home" class="li-home">Home</a></li>
    <li><a href="#sobre" class="li-sobre">Minha hit\xF3ria</a></li>
    <li><a href="#habilidades" class="li-hab">Minhas habilidades</a></li>
    <li><a href="#projetos" class="li-proj">Meus Projetos</a></li>
    <li><a href="#contato" class="li-cont">Entre em contato</a></li>
  </ul>
  </nav> 
   <button id="btn-menu"><img src="${menu}" id ="iconMenu"></button>
  
    <div class="portifolio">
    <h1 class="txPortifolio">Portif\xF3lio</h1>
   </div>
  </div>
  
  
  
  <article class="front-hab">

      <h2 class="hab">Habilidades</h2>
      <p class="tx-sobre">
      Tenho me esfor\xE7ado muito para adquirir novas habilidades. Al\xE9m da minha faculdade em Tecnologia da Informa\xE7\xE3o,
       participei de um projeto bootcamp chamado Laboratoria, que foi uma experi\xEAncia incr\xEDvel. 
       Este projeto me proporcionou um ambiente seguro composto apenas por mulheres, onde encontrei empatia, sororidade e resili\xEAncia.</p>

     <p class="tx-sobre"> Aprendi que o processo de aprendizado \xE9 completamente diferente de tudo o que eu conhecia antes.
       Ele me deu uma autoestima incr\xEDvel e me mostrou o quanto sou capaz. Aprendi a aprender e o bootcamp me deu v\xE1rias habilidades,
        tanto t\xE9cnicas quanto habilidades interpessoais.</p>
      
      <p class="tx-sobre">Fiz projetos de front-end, onde aprimorei minhas habilidades em HTML sem\xE2ntico, CSS, JavaScript, 
      APIs, Firebase e aprendi m\xE9todos avan\xE7ados em JavaScript, como mapas, filtros, Single Page Application (SPA) e muitos outros. 
      Tamb\xE9m adquiri habilidades em Git, GitHub, Git project e colabora\xE7\xE3o em Git, al\xE9m de testes unit\xE1rios.</p>
      
     <p class="tx-sobre"> Vivi uma experi\xEAncia que me deu uma vis\xE3o de como \xE9 trabalhar em uma grande empresa.
       Al\xE9m disso, criei um projeto de back-end usando Node.js, desenvolvendo uma CLI instal\xE1vel para
        verificar links quebrados em documentos Markdown, utilizando apenas JavaScript puro.</p>
      
      <p class="tx-sobre">Tamb\xE9m tive a oportunidade de participar de outros aprendizados , mergulhando no mundo do  React.js, e explorando
       uma linguagem que me fascina: Kotlin
       para desenvolvimento Android. E n\xE3o pretendo parar por a\xED. Estou ansiosa para continuar minha jornada de estudos e aprendizado.</p>
      
     <p class="tx-sobre"> Al\xE9m das habilidades t\xE9cnicas, tamb\xE9m aprendi a usar ferramentas como Notion, Trello e Figma.
       Desenvolvi habilidades interpessoais, como trabalho em equipe, proatividade, l\xF3gica, pensamento anal\xEDtico,
        resolu\xE7\xE3o de problemas e muitas outras. Estou animada para ver o que o futuro reserva para 
        minha trajet\xF3ria de aprendizado e crescimento
    </p>
    <div class="iconHab">
    <a class="githubLink"><img src="https://raw.githubusercontent.com/anaramartins/img/main/%F0%9F%A6%86%20icon%20_html%205_.png" alt="iconhtml">
    </a>
    <a class="github-link"><img src="https://raw.githubusercontent.com/anaramartins/img/main/%F0%9F%A6%86%20icon%20_css%203_.png" alt="iconcss">
    </a>
    <a class="githubLink"><img src="https://raw.githubusercontent.com/anaramartins/img/main/%F0%9F%A6%86%20icon%20_JavaScript%20(JS)_.png" alt="iconjs">
    </a>
    <a class="github-link"><img src="https://raw.githubusercontent.com/anaramartins/img/main/%F0%9F%A6%86%20icon%20_node%20dot%20js_.png" alt="iconnode">
    </a>
    <a class="githubLink"><img src="https://raw.githubusercontent.com/anaramartins/img/main/%F0%9F%A6%86%20icon%20_reactjs%20fill_.png" alt="iconreact">
    </a>
    <a class="github-link"><img src="https://raw.githubusercontent.com/anaramartins/img/main/%F0%9F%A6%86%20icon%20_kotlin_.png" alt="iconkotlin">
    </a>
    <a class="githubLink"><img src="https://raw.githubusercontent.com/anaramartins/img/main/git.png" alt="icongit">
    </a>
    <a class="github-link"><img src="https://raw.githubusercontent.com/anaramartins/img/main/%F0%9F%A6%86%20icon%20_github_.png" alt="icongitHub">
    </a>
     <a class="githubLink"><img src="https://raw.githubusercontent.com/anaramartins/img/main/%F0%9F%A6%86%20icon%20_firebase_.png" alt="icon">
    </a>
    <a class="github-link"><img src="https://raw.githubusercontent.com/anaramartins/img/main/%F0%9F%A6%86%20icon%20_figma%20logo_.png" alt="iconfigma">
    </a>
    <a class="githubLink"><img src="https://raw.githubusercontent.com/anaramartins/img/main/%F0%9F%A6%86%20icon%20_canva_.png" alt="iconcanva">
    </a>
    </div>
    
      </article>
     
  
   `;
  container.innerHTML = template;
  const listaMenu = container.querySelector(".lista-menu");
  const botaoMenu = container.querySelector("#btn-menu");
  function abrirMenu() {
    listaMenu.classList.toggle("open");
  }
  botaoMenu.addEventListener("click", abrirMenu);
  return container;
};
const projetos = () => {
  const container = document.createElement("div");
  container.id = "csshome";
  const template = `
  <div class="container-menu"> 
  
  <nav id="menuPortifolio">
  <ul class="lista-menu">
    <li><a href="#home" class="li-home">Home</a></li>
    <li><a href="#sobre" class="li-sobre">Minha hit\xF3ria</a></li>
    <li><a href="#habilidades" class="li-hab">Minhas habilidades</a></li>
    <li><a href="#projetos" class="li-proj">Meus Projetos</a></li>
    <li><a href="#contato" class="li-cont">Entre em contato</a></li>
  </ul>
</nav> 
 <button id="btn-menu"><img src="${menu}" id ="iconMenu"></button>

  <div class="portifolio">
  <h1 class="txPortifolio">Portif\xF3lio</h1>
 </div>
</div>


<div>
    <article class="sobre">
    
    <h2 class="sobre-titulo">Meus projetos (Em constru\xE7\xE3o)</h2>

  

    <div id="videoModal" class="modal">
    <div class="modal-content">
      <div class="video-container">
      <h3>Card validator</h3>
        <iframe src="https://www.youtube.com/embed/jsEJVHVUMGY?si=g5Gf91nytAirJKQy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p> <span id="videoDescription">Este foi o meu primeiro projeto,
       proposto pelo Bootcamp de programa\xE7\xE3o LABORATORIA. O m\xE9todo de ensino adotado
        neste programa \xE9 verdadeiramente singular, pois nos encoraja a explorar
         nosso autoconhecimento enquanto aprendemos a aprender. 
         Durante o desenvolvimento deste projeto, mergulhei de cabe\xE7a no mundo da 
         programa\xE7\xE3o, aprimorando minhas habilidades em HTML, CSS e JavaScript.</span></p>
      <a href="https://anara-carolina.github.io/SAP010-card-validation/" target="_blank"><button class="btn-project">Acessar o Projeto</button></a>
    </div>
  </div>

  <div id="videoModal" class="modal">
    <div class="modal-content">
      <div class="video-container">
      <h3>Busca espiritual </h3>
      <iframe  src="https://www.youtube.com/embed/81CXqtiwucs?si=KzH-4iFD6YCPWz4b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      </div>
      <p> <span id="videoDescription">Este projeto foi uma incr\xEDvel colabora\xE7\xE3o e
      ntre mim e a talentosa desenvolvedora Dara Nunes durante nossa participa\xE7\xE3o 
      no bootcamp da Laboratoria. Juntos, aplicamos nossos conhecimentos em JavaScript, 
      HTML e CSS para explorar conceitos essenciais, incluindo a implementa\xE7\xE3o de filtros, 
      classifica\xE7\xE3o de itens, manipula\xE7\xE3o de arrays com o m\xE9todo map e aprimoramento
       das habilidades de manipula\xE7\xE3o do DOM.</span></p>
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
     \xC9 direcionado para mulheres que desejam receber dicas de como se defender 
     de poss\xEDveis ataques e viol\xEAncias, contando com uma rede de apoio disposta 
     a ajudar independente do n\xEDvel de conhecimento (iniciante, intermedi\xE1rio
       ou avan\xE7ado), que tamb\xE9m fica exposto nas postagens de cada usu\xE1rio. 
       Nossa Rede Social permite \xE0 qualquer usu\xE1rio criar uma conta de acesso, 
       logar-se com ela, criar, editar e deletar publica\xE7\xF5es.</span></p>
    <a href="https://fight-back-3c119.web.app/" target="_blank"><button class="btn-project">Acessar o Projeto</button></a>
  </div>
</div>

<div id="videoModal" class="modal">
  <div class="modal-content">
    <div class="video-container">
    <h3>MD-Links </h3>
    <iframe src="https://www.youtube.com/embed/SOSjYrPwE6c?si=ef_cw0b651tY2qQ5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   
     <p> <span id="videoDescription">Projeto voltado prara Back-end; O Markdown Links \xE9 uma biblioteca criada para
      simplificar a leitura e valida\xE7\xE3o de links encontrados em arquivos no formato
       Markdown (extens\xE3o .md). Com uma interface de linha de comando (CLI) 
       intuitiva, essa biblioteca \xE9 flex\xEDvel o suficiente para ser usada em projetos
        Node.js e em aplica\xE7\xF5es de terminal.</span></p>
    <a href="https://www.npmjs.com/package/md-links-anara" target="_blank"><button class="btn-project">Acessar o Projeto</button></a>
  </div>
</div>



    </article>
   

</div> `;
  container.innerHTML = template;
  const listaMenu = container.querySelector(".lista-menu");
  const botaoMenu = container.querySelector("#btn-menu");
  function abrirMenu() {
    listaMenu.classList.toggle("open");
  }
  botaoMenu.addEventListener("click", abrirMenu);
  return container;
};
const contato = () => {
  const container = document.createElement("div");
  container.id = "csshome";
  const template = `
  <div class="container-menu"> 
  
  <nav id="menuPortifolio">
  <ul class="lista-menu">
    <li><a href="#home" class="li-home">Home</a></li>
    <li><a href="#sobre" class="li-sobre">Minha hit\xF3ria</a></li>
    <li><a href="#habilidades" class="li-hab">Minhas habilidades</a></li>
    <li><a href="#projetos" class="li-proj">Meus Projetos</a></li>
    <li><a href="#contato" class="li-cont">Entre em contato</a></li>
  </ul>
</nav> 
 <button id="btn-menu"><img src="${menu}" id ="iconMenu"></button>

  <div class="portifolio">
  <h1 class="txPortifolio">Portif\xF3lio</h1>
 </div>
</div>

<article class="front">
<picture id="picture-home">
  <img src="${fotohome}" alt="" class="foto-home">
</picture>
<div class="introducao">
  <h2 class="titulo">Ol\xE1, Sejam bem vindes!!!</h2>
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
  const listaMenu = container.querySelector(".lista-menu");
  const botaoMenu = container.querySelector("#btn-menu");
  function abrirMenu() {
    listaMenu.classList.toggle("open");
  }
  botaoMenu.addEventListener("click", abrirMenu);
  return container;
};
const principal = document.querySelector("#principal");
const init = () => {
  window.addEventListener("hashchange", () => {
    principal.innerHTML = "";
    switch (window.location.hash) {
      case "":
        principal.appendChild(home());
        break;
      case "#sobre":
        principal.appendChild(sobre());
        break;
      case "#habilidades":
        principal.appendChild(habilidades());
        break;
      case "#projetos":
        principal.appendChild(projetos());
        break;
      case "#contato":
        principal.appendChild(contato());
        break;
      default:
        principal.appendChild(home());
        break;
    }
  });
};
window.addEventListener("load", () => {
  principal.appendChild(home());
  init();
});
