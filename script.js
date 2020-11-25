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

const direction = screen.width >= 800? 'horizontal' : 'vertical';

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

const sounds = document.getElementsByTagName('audio');

timelineSwiper.on('transitionEnd', ()=> {

  for(i=0; i < sounds.length; i++) sounds[i].pause();

})

Array.prototype.forEach.call(sounds, audio => {

  audio.addEventListener("play", ()=> {

    for (let i = 0; i < sounds.length; i++) {
    
      if( !sounds[i].paused ) {
    
        for (let a = 0; a < sounds.length; a++) {

          if(sounds[a] == sounds[i]) {

            continue;
            
          }

          sounds[a].pause();
          
        }
    
      }
      
    }  
  
  })

})


ScrollReveal().reveal('.timeline', { delay: 300 });

ScrollReveal().reveal('.frases-container', { delay: 1000 });

ScrollReveal().reveal('.video-container', { delay: 1500 });

ScrollReveal().reveal('.integrantes', { delay: 1500 });