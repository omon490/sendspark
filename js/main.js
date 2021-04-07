
let elSiteHeader = document.querySelector('.site-header');
let elSitenavToggler = elSiteHeader.querySelector('.button__toggler');

elSitenavToggler.addEventListener('click', function () {

  elSiteHeader.classList.toggle('site-header--open');

});