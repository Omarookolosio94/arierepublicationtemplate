var sideNav = document.getElementById('sideNav');
var btMenu = document.getElementById('btMenu');
var boxSearch = document.getElementById('box-search');
var body = document.body;

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
