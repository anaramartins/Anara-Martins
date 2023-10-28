import menu from '../../imagens/icon-menu.png';
import fotohome from '../../imagens/Anara.jpg';




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
  <article class="front-sobre">
  <picture id="picture-sobre">
  <img src="${fotohome}" alt="" class="foto-sobre">
</picture>
<h2 class="sobre-titulo">Minha história</h2>
    <p class="tx-sobre">
    Desde cedo, tenho perseguido meus sonhos, tornando-me uma mulher independente e apaixonada. 
    Minha jornada profissional teve início em 2010, em um hipermecado, onde integrei a equipe do setor de fotocenter. 
    Foi nesse contexto que meu amor pela tecnologia floresceu, pois foi aí que tive meu primeiro contato com ferramentas de design,
     como Photoshop e CorelDRAW. Esse momento marcou o começo do meu desenvolvimento criativo, permitindo-me cultivar 
 habilidades essenciais, como proatividade, adaptabilidade, trabalho em equipe, pensamento crítico, análise e atendimento ao público.</p>

<p class="tx-sobre">Minha contribuição nessa experiência enche-me de orgulho: colaborei para o crescimento dos lucros nos departamentos de fotocenter
 e confeitaria. Minha criatividade resultou na criação de uma bancada atrativa e temática, unindo o setor de confeitaria aos produtos
 personalizados de festas. Essa inovação, que mantem até hoje, é adotada em todo o Brasil.</p>

<p class="tx-sobre">Impulsionada por essa paixão emergente, busquei aprimoramento através de cursos em web design e manutenção de computadores.
 No entanto, minha carreira ganhou contornos comerciais, sempre coexistindo com a tecnologia. Em passagens por empresas de 
 telecomunicações como TIM, Oi e Algar Telecom, enriqueci minha experiência.</p>

<p class="tx-sobre">Foi na Algar Telecom que aprofundei minha afeição por redes, incitando-me a cursar Tecnologia da Informação. 
Ali, desvendei os bastidores da internet, compreendendo sua intrincada conexão a servidores, 
sua jornada surreal por cabos submarinos até alcançar cada usuário. Essa descoberta aguçou minha curiosidade 
sobre o funcionamento dos programas e interfaces que animam a internet.</p>

<p class="tx-sobre">Em 2022, aos 33 anos e mãe de duas crianças, decidi dar vida aos meus estudos,
meu sonho e minha paixão embarcando plenamente no universo tecnológico e reorientando minha carreira. 
Hoje, contemplo com orgulho minha trajetória, convertendo-me em uma entusiasta do campo tecnológico, 
abraçando o desafio de aprender novas linguagens e superar-me constantemente. Aprendi a arte de aprender, 
e isso é minha maior conquista.
    </p>

   







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