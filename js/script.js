// toggle class active
//const navbarNav = document.getElementById(".navbar .navbar-nav");
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamberger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  //document.querySelector(".navbar-nav").classList.toggle("active");
  return false;
};
