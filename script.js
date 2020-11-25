Swal.fire({
  title: 'Aviso',
  text: "Para una mejor experiencia, es recomendable acceder a la página desde PC y activar la pantalla completa.",
  icon: 'info',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Activar',
  cancelButtonText: 'Cancelar'
}).then((result) => {
  if (result.isConfirmed) {
    
      document.documentElement.requestFullscreen();

  }
})

let direction = screen.width >= 800? 'horizontal' : 'vertical';

const timelineSwiper = new Swiper ('.timeline .swiper-container', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  pagination: '.swiper-pagination',
  paginationBulletRender: function (swiper, index, className) {
    var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
    return '<span class="' + className + '">' + year + '</span>';
  },
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  breakpoints: {
    768: {
      direction: direction,
    }
  }
});

ScrollReveal().reveal('.timeline', { delay: 300 });

ScrollReveal().reveal('.frases-container', { delay: 1000 });

ScrollReveal().reveal('.video-container', { delay: 1000 });