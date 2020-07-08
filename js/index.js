var sideNav = document.getElementById('sideNav');
var btMenu = document.getElementById('btMenu');
var boxSearch = document.getElementById('box-search');
var headerTop = document.querySelector('.header-top');
var body = document.body;
var sticky = headerTop.offsetTop;

openSideNav = () => {
  body.classList.add('nav-sidebar-open');
};

closeSideNav = () => {
  body.classList.remove('nav-sidebar-open');
};

closeSearch = () => {
  boxSearch.classList.remove('show');
};

openSearch = () => {
  boxSearch.classList.add('show');
};

window.onscroll = () => myFunction();

myFunction = () => {
  if (window.pageYOffset > sticky) {
    body.classList.add('header-fixed');
  } else {
    body.classList.remove('header-fixed');
  }
};

document.addEventListener('click', (evt) => {
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement == sideNav || targetElement == btMenu) {
      return;
    }
    // Go up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);
  {
    closeSideNav();
  }
});
