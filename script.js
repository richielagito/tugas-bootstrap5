var navbar = document.querySelector(".navbar");
// mengubah style navbar jika user scroll melebihi 100
window.onscroll = function () {
  if (window.scrollY > 100) {
    navbar.classList.add("navbar-scrolled", "navbar-light");
    navbar.classList.remove("navbar-dark");
  } else {
    navbar.classList.remove("navbar-scrolled", "navbar-light");
    navbar.classList.add("navbar-dark");
  }
};
