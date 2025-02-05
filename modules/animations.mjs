const breathFrames = new KeyframeEffect(
  null,
  [
    { transform: 'scale(1)', fontVariationSettings: '"wght" 70' },
    { transform: 'scale(1.1)', fontVariationSettings: '"wght" 900' },
    { transform: 'scale(1)', fontVariationSettings: '"wght" 400' }
  ],
  {
    duration: 500,
    easing: 'ease-in-out',
    fill: 'forwards',
    iterations: 1
  }
);

export const breath = new Animation(breathFrames, document.timeline);
