const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.querySelector(".menu-toggle-label").textContent = isOpen ? "Abrir menu" : "Fechar menu";
    menu.classList.toggle("is-open", !isOpen);
  });

  menu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.querySelector(".menu-toggle-label").textContent = "Abrir menu";
      menu.classList.remove("is-open");
    }
  });
}

const currentYear = document.querySelector("[data-current-year]");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
