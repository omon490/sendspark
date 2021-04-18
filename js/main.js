
let elSiteHeader = document.querySelector('.site-header');
let elSitenavToggler = elSiteHeader.querySelector('.button__toggler');

elSitenavToggler.addEventListener('click', function () {

  elSiteHeader.classList.toggle('site-header--open');

});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
});

sr.reveal(`.intro__box, .intro__heading,
          .intro__text, .intro__link-wrapper,
          .intro__img, .companies__list,
          .companies__item, .companies__img,
          .record__img, .record__heading,
          .record__text, .record__tick-text, .member__heading,
          .member__box-img, .member__img, .connect__heading, .connect__text, .connect__img, .statistcs__percent, .statistcs__text, .statistcs__link, .statistcs__img, .customers__heading, .customers__text, .customers__inner-title, .customers__inner-text, .customers__img, .future__heading, .future__link, .future__text`, {
  interval: 200
})