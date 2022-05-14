// Inicializa o Carousel
const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
    // Your options go here
  });

  // Função que oculta e exibe o menu
  const exibeMenu = () => {
  // muda a visualição dos itmes com classe oculta-navbar, mudando de hide(oculto) para show(exibir)
    $('.oculta-navbar').toggle()
  }
  // Final da função que oclutan e exibe o menu