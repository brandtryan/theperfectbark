const page00 = document.getElementById('s00');
const page00LinesArray = Array.from(page00.getElementsByTagName('p'));
const page00WordsArray = Array.from(page00.getElementsByTagName('span'));
export const [page00Lines] = [page00LinesArray];
export const [page00Words] = [page00WordsArray];
const now = document.timeline.currentTime;

page00LinesArray.forEach(line => {
  const frames = JSON.parse(line.dataset.frames);
  const iterations = parseFloat(line.dataset.iterations);
  const startTime = parseFloat(line.dataset.startTime) + now;
  const duration = parseFloat(line.dataset.duration);
  const easing = line.dataset.easing;

  const effect = new KeyframeEffect(line, frames, {
    duration: duration,
    easing: easing
  });

  const animation = new Animation(effect, document.timeline);
  animation.startTime = startTime;
  animation.play();
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
