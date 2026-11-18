const door = document.querySelector(".cabinet-door");
const cabinetScene = document.querySelector(".cabinet-scene");
const main = document.querySelector("main");
const openedDoor = document.querySelector(".opened-door");
const doorFace = document.querySelector(".door-face");

door.addEventListener("click", () => {
  const isOpen = door.classList.toggle("is-open");
  door.setAttribute("aria-label", isOpen ? "Close cabinet door" : "Open cabinet door");
  main.classList.toggle("show");
});
openedDoor.addEventListener("click", () => {
  console.log('first')
  cabinetScene.classList.toggle("zoom-in");
  doorFace.classList.toggle("zoomed");

  
});
