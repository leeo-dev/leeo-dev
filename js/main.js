window.addEventListener("scroll", () => {
  console.log("a");
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const linksMenu = document.querySelectorAll(".header-menu-list li");
linksMenu.forEach((link) => {
  link.addEventListener("click", function () {
    removeActive();
    this.classList.add("active");
  });
});

function removeActive() {
  linksMenu.forEach((link) => {
    link.classList.remove("active");
  });
}
