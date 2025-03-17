document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-menus");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active"); // Hamburger menyuga ham active klassini qo'shish
  });
});

// loading
const loading = document.getElementById("loading");
const loadingDuration = 2000; // 2 sekund

setTimeout(() => {
  loading.classList.add("loading-none"); // loading-none klassini qo'shish
}, loadingDuration);

// kelish

$(document).ready(function () {
  $(".share-btn").click(function () {
    $(".share-btn").toggleClass("active");
    $("ul").toggleClass("active");
  });
});

// back- to Top

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
const myBtn = document.getElementById("myBtn");
myBtn.onclick = function () {
  const scrollStep = -window.scrollY / (10 / 180);
  const scrollInterval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    } else {
      window.scrollBy(0, scrollStep);
    }
  }, 15);
};
