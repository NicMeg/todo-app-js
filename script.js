const addTask = document.querySelector(".add");
const button = document.querySelector("button");
const items = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const input = document.querySelector("input")


// Adding new items
addTask.addEventListener('click', () => {
  // ul.innerHTML += "<li> Something New </li>";
  const li = document.createElement('li')
  li.textContent = 'Something new to do'
  ul.prepend(li);
});
document.querySelector(".content");

// Delete Item Once Clicked
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(item);
    //e.target.style.textDecoration = "line-through";
    e.stopPropagation();
    e.target.remove();
  });
});

// Delete All To-Do Items
button.addEventListener("click", () => {
  if (confirm("Are you SURE you want to delete your list?")) {
    ul.remove();
    // Save it!
  } else {
    // Do nothing!
  }
});

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     ul.remove()
//   });
// })
