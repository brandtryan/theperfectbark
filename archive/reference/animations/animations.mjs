const breathFrames = new KeyframeEffect(
  null,
  [
    { fontVariationSettings: `"wght" 70, "wdth" 60, "ital" 0, "cont" 0` },
    { fontVariationSettings: `"wght" 900, "wdth" 140, "ital" 12, "cont" 0` },
    { fontVariationSettings: `"wght" 400, "wdth" 100, "ital" 0, "cont" 0` }
  ],
  {
    duration: 500,
    easing: 'ease-in-out',
    fill: 'none',
    iterations: 1
  }
);

export const breath = new Animation(breathFrames, document.timeline);
