const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu-principal");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    const label = isOpen ? "Abrir menu" : "Fechar menu";
    menuButton.setAttribute("aria-label", label);
    menuButton.querySelector(".menu-toggle-label").textContent = label;
    menu.classList.toggle("is-open", !isOpen);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
      menuButton.querySelector(".menu-toggle-label").textContent = "Abrir menu";
      menu.classList.remove("is-open");
      menuButton.focus();
    }
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
