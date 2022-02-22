const navSlide = () => {
  const burger = document.querySelector(".nav-mobile");
  const nav = document.querySelector(".mobile-contain");
  const logo = document.querySelector(".logo");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    logo.classList.toggle("remove-logo");
    burger.classList.toggle("toggle");
    body.classList.toggle("overflow");
  });
};
navSlide();