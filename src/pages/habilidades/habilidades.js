import fotohab from '../../imagens/habilidades.png';
import menu from '../../imagens/icon-menu.png';



export default () => {
    const container = document.createElement('div');
    container.id = 'csshabilidades';
  
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
  
  
  
  <article class="front-hab">

      <h2 class="hab">Habilidades</h2>
      <p class="tx-sobre">
      Tenho me esforçado muito para adquirir novas habilidades. Além da minha faculdade em Tecnologia da Informação,
       participei de um projeto bootcamp chamado Laboratoria, que foi uma experiência incrível. 
       Este projeto me proporcionou um ambiente seguro composto apenas por mulheres, onde encontrei empatia, sororidade e resiliência.</p>

     <p class="tx-sobre"> Aprendi que o processo de aprendizado é completamente diferente de tudo o que eu conhecia antes.
       Ele me deu uma autoestima incrível e me mostrou o quanto sou capaz. Aprendi a aprender e o bootcamp me deu várias habilidades,
        tanto técnicas quanto habilidades interpessoais.</p>
      
      <p class="tx-sobre">Fiz projetos de front-end, onde aprimorei minhas habilidades em HTML semântico, CSS, JavaScript, 
      APIs, Firebase e aprendi métodos avançados em JavaScript, como mapas, filtros, Single Page Application (SPA) e muitos outros. 
      Também adquiri habilidades em Git, GitHub, Git project e colaboração em Git, além de testes unitários.</p>
      
     <p class="tx-sobre"> Vivi uma experiência que me deu uma visão de como é trabalhar em uma grande empresa.
       Além disso, criei um projeto de back-end usando Node.js, desenvolvendo uma CLI instalável para
        verificar links quebrados em documentos Markdown, utilizando apenas JavaScript puro.</p>
      
      <p class="tx-sobre">Também tive a oportunidade de participar de outros aprendizados , mergulhando no mundo do  React.js, e explorando
       uma linguagem que me fascina: Kotlin
       para desenvolvimento Android. E não pretendo parar por aí. Estou ansiosa para continuar minha jornada de estudos e aprendizado.</p>
      
     <p class="tx-sobre"> Além das habilidades técnicas, também aprendi a usar ferramentas como Notion, Trello e Figma.
       Desenvolvi habilidades interpessoais, como trabalho em equipe, proatividade, lógica, pensamento analítico,
        resolução de problemas e muitas outras. Estou animada para ver o que o futuro reserva para 
        minha trajetória de aprendizado e crescimento
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
  
  const listaMenu = container.querySelector('.lista-menu');
  const botaoMenu = container.querySelector('#btn-menu');
  
  function abrirMenu() {
    listaMenu.classList.toggle('open');
  }
  
  botaoMenu.addEventListener('click', abrirMenu);
  
  
  
  
    return container;
  };
  