const authorSwiper = new Swiper("#author-swiper", {
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    786: {
      slidesPerView: 2,
    },
  },

  pagination: {
    el: "#author-swiper .swiper-pagination",
    clickable: true,
  },
});

const workshopSwiper = new Swiper("#workshop-swiper", {
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    786: {
      slidesPerView: 2,
    },
  },

  pagination: {
    el: "#workshop-swiper .swiper-pagination",
    clickable: true,
  },
});

const familySwiper = new Swiper("#family-swiper", {
  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    786: {
      slidesPerView: 2,
    },
  },

  pagination: {
    el: "#family-swiper .swiper-pagination",
    clickable: true,
  },
});
