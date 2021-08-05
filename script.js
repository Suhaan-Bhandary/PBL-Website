window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}

document
  .querySelector(".indexOfProgress")
  .addEventListener("click", function (e) {
    document.querySelector(".indexOfProgress").classList.toggle("active");
  });

const banners = document.querySelectorAll(".banner-slider");
let bannerIndex = 0;
const highestIndex = banners.length - 1;

setInterval(() => {
  bannerIndex < highestIndex ? bannerIndex = bannerIndex + 1 : bannerIndex = 0;
  let bannerRadioElement = banners[bannerIndex];
  bannerRadioElement.checked = true;
}, 6*1000);