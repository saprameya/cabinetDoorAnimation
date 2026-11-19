const front = document.querySelector(".front");
const inside = document.querySelector(".inside");
console.log(inside);

front.addEventListener("click", () => {
  front.classList.add("disappear");
  setTimeout(() => {
    front.style.display = "none";
  }, 1000);
});

inside.addEventListener("click", () => {
  console.log("first");
  front.classList.remove("disappear");
    front.style.display = "block";
});
