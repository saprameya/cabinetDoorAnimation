const front = document.querySelector(".front");
const middle = document.querySelector(".middle");
const inside = document.querySelector(".inside");
console.log(inside);

front.addEventListener("click", () => {
  front.classList.add("disappear");
  setTimeout(() => {
    front.style.display = "none";
  }, 1000);
});
middle.addEventListener("click", () => {
  middle.classList.add("disappear");
  setTimeout(() => {
    middle.style.display = "none";
  }, 1000);
});

inside.addEventListener("click", () => {
  console.log("first");
  middle.classList.remove("disappear");
  middle.style.display = "block";
  front.classList.remove("disappear");
  front.style.display = "block";
});
