const breathFrames = new KeyframeEffect(
  null,
  [
    { fontvariationsettings: `"wght" 70, "wdth" 60%, "ital" 0, "cont" 0` },
    { fontvariationsettings: `"wght" 900, "wdth" 140%, "ital" 12, "cont" 0` },
    { fontvariationsettings: `"wght" 400, "wdth" 100%, "ital" 0, "cont" 0` },
  ],
  {
    delay: 0,
    duration: 500,
    easing: 'cubic-bezier(0.45, 0, 0.55, 1)',
  }
);

export const breath = new Animation(breathFrames, document.timeline);
