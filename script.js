let submitBtn = document.querySelector(".add");
let closeBtn = document.querySelector(".closeBtn");
const form = document.querySelector("form");
const categoryRadios = form.querySelectorAll('input[name="category"]');
const themeInput = form.querySelector("#theme");
const topicInput = form.querySelector("#username");
const descInput = form.querySelector("#desc");


const stack = document.querySelector(".cards");
const upBtn = document.querySelector(".upBtn");
const downBtn = document.querySelector(".downBtn");

// Code starts here

function saveToLocalStorage(obj) {
  if (localStorage.getItem("tasks") === null) {
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  } else {
    let oldTasks = JSON.parse(localStorage.getItem("tasks"));
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
}

closeBtn.addEventListener("click", () => {
  form.style.display = "none";
});

submitBtn.addEventListener("click", () => {
  form.style.display = "flex";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const theme = themeInput.value.trim();
  const topic = topicInput.value.trim();
  const desc = descInput.value.trim();

  let selected = false;
  categoryRadios.forEach((radio) => {
    if (radio.checked) {
      selected = radio.value;
    }
  });

  // Validation
  if (!theme || !topic || !desc || !selected) {
    alert("Please fill all fields and select a category.");
    return;
  }

  saveToLocalStorage({
    theme: theme,
    topic: topic,
    desc: desc,
    category: selected,
  });

  form.reset();
  form.style.display = "none";
  showCards();
});

function showCards() {
  stack.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const profile = document.createElement("div");
    profile.classList.add("profile");

    const title = document.createElement("h2");
    const desc = document.createElement("p");

    profile.style.backgroundImage = `url('${task.theme}')`;
    title.textContent = task.topic;
    desc.textContent = task.desc;

    card.append(profile, title, desc);

    // dynamic z-index
    card.style.zIndex = 10 - index;

    cardsContainer.appendChild(card);
  });
}
showCards();

function updateStack() {
  const cards = document.querySelectorAll(".cards .card");

  cards.forEach((card, index) => {
    if (index < 3) {
      card.style.zIndex = 10 - index;
      card.style.transform = `translateY(${index * 5}px)`;
      card.style.opacity = 1 - index * 0.2;
      card.style.display = "flex";
    } else {
      // hide cards beyond 3
      card.style.display = "none";
    }
  });
}


upBtn.addEventListener("click", () => {
  let lastChild = stack.lastElementChild;
  if(lastChild){
    stack.insertBefore(lastChild, stack.firstElementChild);
  }
  // Update
  updateStack();
});

downBtn.addEventListener("click", () => {
  let firstChild = stack.firstElementChild;
  if(firstChild){
    stack.appendChild(firstChild);
  }
  // Update
  updateStack();
});
