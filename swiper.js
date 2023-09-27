const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2
      }, 

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1
      }
    }
  });