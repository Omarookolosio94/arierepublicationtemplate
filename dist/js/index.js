var sideNav = document.getElementById('sideNav');
var btMenu = document.getElementById('btMenu');
var body = document.body;

openSideNav = () => {
  body.classList.add('nav-sidebar-open');
};

closeSideNav = () => {
  body.classList.remove('nav-sidebar-open');
};
