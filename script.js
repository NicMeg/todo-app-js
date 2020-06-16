const button = document.querySelector('button');
const items = document.querySelectorAll('li');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
  if (confirm('Are you SURE you want to delete your list?')) {
    ul.remove()
    // Save it!
  } else {
    // Do nothing!
  }

});


items.forEach(item => {
item.addEventListener('click', e => {
  console.log(e.target);
  console.log(item);
  e.target.style.textDecoration = 'line-through';
});
})

// items.forEach(item => {
//   item.addEventListener('click', e => {
//     ul.remove()

//   });
// })