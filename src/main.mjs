document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

const test = document.querySelector('page-component')
console.log(test);

const divy = test.firstElementChild;

const bingo = divy.childNodes;
console.log(divy.length);


