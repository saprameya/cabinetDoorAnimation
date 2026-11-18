 const door = document.querySelector(".cabinet-door");

  door.addEventListener("click", () => {
    const isOpen = door.classList.toggle("is-open");
    door.setAttribute("aria-label", isOpen ? "Close cabinet door" : "Open cabinet door");
  });