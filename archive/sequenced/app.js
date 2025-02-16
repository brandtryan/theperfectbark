const w = document.querySelector('#w');
const t = document.querySelector('#t');
const f = document.querySelector('#f');

// let tPause = tAnimation[0].pause();
// let tPlay = tAnimation[0].play();
// let fPause = fAnimation[0].pause();
// let fPlay = fAnimation[0].play();

// {"tag":"ital","minValue":0,"defaultValue":0,"maxValue":12,"name":{}}

// ital Range: 0 - 12
w.animate([
  { fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
  { fontVariationSettings: `"wght" 150, "wdth" 140, "ital" 12, "cont" 0` }
],
  {
    id: 'w',
    direction: 'alternate',
    duration: 1500,
    easing: 'ease',
  });
let wAnimation = w.getAnimations();
wAnimation[0].pause();

t.animate([
  { fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
  { fontVariationSettings: `"wght" 150, "wdth" 140, "ital" 12, "cont" 0` }
],
  {
    id: 't',
    direction: 'alternate',
    duration: 1500,
    easing: 'ease',
  });
let tAnimation = t.getAnimations();
tAnimation[0].pause();

f.animate([
  { fontVariationSettings: `"wght" 47, "wdth" 60, "ital" 0, "cont" 0` },
  { fontVariationSettings: `"wght" 150, "wdth" 140, "ital" 12, "cont" 0` }
],
  {
    id: 'f',
    direction: 'alternate',
    duration: 1500,
    easing: 'ease',
  });
let fAnimation = f.getAnimations();
fAnimation[0].pause();


wAnimation[0].onfinish = () => {
  tAnimation[0].play();
};
tAnimation[0].onfinish = () => {
  fAnimation[0].play();
};
fAnimation[0].onfinish = () => {
  console.log('All Done.');
};

wAnimation[0].play();
