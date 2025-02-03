document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

// const s00l01 = document.getElementById('s00l00');
// const duration = parseFloat(s00l01.getAttribute('duration'));
// const timingFunction = s00l01.getAttribute('timing');
// const keyframes = JSON.parse(s00l01.getAttribute('keyframes'));

// const effect = new KeyframeEffect(s00l01, keyframes, {
//   duration: duration,
//   easing: timingFunction
// });

// const animation = new Animation(effect, document.timeline);
// animation.play();

// We want to have one of our OWN functions run when mouseover in component happens
// (function outside of component)

function hello(ev) {
  console.log(ev);
  console.log('hello from a local function');
}

function goodbye() {
  console.log('goodbye from a local function');
  let le = document.querySelector('line-element');
  le.remove();
}
