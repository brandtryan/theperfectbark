document.addEventListener('DOMContentLoaded', () => {
  //HTML has loaded
  console.log('Main.js and the DOM are loaded');
});

const s00l00 = document.getElementById('s00l00');
const duration = parseFloat(s00l00.getAttribute('duration'));
const timingFunction = s00l00.getAttribute('timing');
const keyframes = JSON.parse(s00l00.getAttribute('keyframes'));

const effect = new KeyframeEffect(s00l00, keyframes, {
  duration: duration,
  easing: timingFunction
});

const animation = new Animation(effect, document.timeline);
animation.play();
