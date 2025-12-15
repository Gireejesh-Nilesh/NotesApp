let addBtn = document.querySelector(".add");
let closeBtn = document.querySelector(".closeBtn");

closeBtn.addEventListener("click", () => {
  document.querySelector("form").style.display = "none";
});

addBtn.addEventListener("click", () => {
  document.querySelector("form").style.display = "flex";
});

