const s00 = document.getElementById('s00');
const s00LinesArray = Array.from(s00.getElementsByTagName('p'));
const s00WordsArray = Array.from(s00.getElementsByTagName('span'));
export const [s00Lines] = [s00LinesArray];
export const [s00Words] = [s00WordsArray];

// Helper function to create and start animation
function createAndPlayAnimation(element) {
  if (!element || element.dataset.enable === 'false') return null;

  const frames = JSON.parse(element.dataset.frames);
  const options = {
    duration: parseFloat(element.dataset.duration),
    delay: parseFloat(element.dataset.delay),
    easing: element.dataset.easing,
  };

  const effect = new KeyframeEffect(element, frames, options);
  const animation = new Animation(effect, document.timeline);
  animation.play();

  return animation;
}

// Create animations for all lines
const lineAnimations = s00LinesArray.map((line, index) => {
  const lineAnimation = createAndPlayAnimation(line);
  // console.log(`Created animation for line ${index}:`, {
  //   enabled: line.dataset.enable,
  //   duration: line.dataset.duration,
  //   delay: line.dataset.delay,
  //   easing: line.dataset.easing,
  // });
  return lineAnimation;
});

export const s00LineAnimations = lineAnimations;

// Get a specific animation
// const firstLineAnimation = s00LineAnimations[0];

// Pause all animations
s00LineAnimations.forEach(animation => animation?.pause());

// Play all animations
// s00LineAnimations.forEach(animation => animation?.play());


// Create animations for all words
const wordAnimations = s00WordsArray.map((word, index) => {
  const wordAnimation = createAndPlayAnimation(word);
  // console.log(`Created animation for word ${index}:`, {
  //   enabled: word.dataset.enable,
  //   duration: word.dataset.duration,
  //   delay: word.dataset.delay,
  //   easing: word.dataset.easing
  // });
  return wordAnimation;
});

export const s00WordAnimations = wordAnimations;

// Get a specific animation
// const firstWordAnimation = s00WordAnimations[0];

// Pause all animations
// s00WordAnimations.forEach(animation => animation?.pause());

// Play all animations
// s00WordAnimations.forEach(animation => animation?.play());


// Key improvements:

// Reduced repetitive code by creating a helper function createAndPlayAnimation
// Used map to iterate over lines instead of manual creation for each line
// Added error handling by checking if element exists
// Made animations accessible via export if needed elsewhere
// Added logging for debugging purposes
// Removed redundant variable declarations
// Made the code more maintainable and easier to modify
// Usage remains the same, but now you can also access animations if needed:


