var sideNav = document.getElementById('sideNav');
var content = document.getElementById('content');
var btMenu = document.getElementById('btMenu');
var toggleHeading = document.getElementById('toggle-heading');
var boxSearch = document.getElementById('box-search');
var headerTop = document.querySelector('.header-top');
var dropDownItem = document.querySelector('.option-active');
var dropDown = document.querySelector('.box-dropdown');
var shareLinks = document.querySelector('.openShareLinks');
var selectLang = document.querySelector('.select');
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

openDropDown = (e) => {
  let dropDown = e.target.parentNode;

  dropDown.classList.add('open');
};

toggleInfo = (e) => {
  toggleHeading.classList.toggle('show');
};

openShareLink = () => {
  shareLinks.classList.toggle('active');
  console.log(shareLinks);
};

closeDropDown = () => {
  dropDown.classList.remove('open');
};

closeSelectLang = () => {
  selectLang.parentNode.classList.remove('open');
};

window.onscroll = () => myFunction();

myFunction = () => {
  if (window.pageYOffset > sticky) {
    body.classList.add('header-fixed');
    content.classList.add('pt-70');
  }
  // else {
  //   body.classList.remove('header-fixed');
  // }
};

document.addEventListener('click', (evt) => {
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement == dropDownItem) {
      return;
    }
    // Go up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);
  {
    closeDropDown();
  }
});

document.addEventListener('click', (evt) => {
  let targetElement = evt.target; // clicked element

  do {
    if (targetElement == selectLang) {
      return;
    }
    // Go up the DOM
    targetElement = targetElement.parentNode;
  } while (targetElement);
  {
    closeSelectLang();
  }
});

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
