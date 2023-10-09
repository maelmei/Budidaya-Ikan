const burger = document.querySelector(".burger");
const navList = document.querySelector("nav");
burger.addEventListener("click", () => {
  navList.classList.toggle("nav-active");
  burger.classList.toggle("toggle-burger");
});

window.onload = () => {
  const back = document.getElementById("back");
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
      back.style.display = "block";
    } else {
      back.style.display = "none";
    }
  };

  back.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

const darkMode = document.getElementById("darkmode");
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
});

function daftar() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal").style.flexDirection = "column";
}
function login() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("modal-login").style.display = "flex";
  document.getElementById("modal-login").style.flexDirection = "column";
}
function tutupModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
}
function tutupModalLogin() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal-login").style.display = "none";
}
