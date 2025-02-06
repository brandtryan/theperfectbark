const s00 = document.getElementById('s00');
const s00LinesArray = Array.from(s00.getElementsByTagName('p'));
const s00WordsArray = Array.from(s00.getElementsByTagName('span'));
export const [s00Lines] = [s00LinesArray];
export const [s00Words] = [s00WordsArray];

// Helper function to create and start animation
function createAndPlayAnimation(element) {
  if (!element) return null;

  const frames = JSON.parse(element.dataset.frames);
  const options = {
    duration: parseFloat(element.dataset.duration),
    delay: parseFloat(element.dataset.delay),
    iterations: parseFloat(element.dataset.iterations),
    easing: element.dataset.easing
  };

  const effect = new KeyframeEffect(element, frames, options);
  const animation = new Animation(effect, document.timeline);
  animation.play();

  return animation;
}

// Create animations for all lines
const animations = s00LinesArray.map((line, index) => {
  const animation = createAndPlayAnimation(line);
  console.log(`Created animation for line ${index}:`, {
    duration: line.dataset.duration,
    delay: line.dataset.delay,
    iterations: line.dataset.iterations
  });
  return animation;
});

export const s00Animations = animations;

// Key improvements:

// Reduced repetitive code by creating a helper function createAndPlayAnimation
// Used map to iterate over lines instead of manual creation for each line
// Added error handling by checking if element exists
// Made animations accessible via export if needed elsewhere
// Added logging for debugging purposes
// Removed redundant variable declarations
// Made the code more maintainable and easier to modify
// Usage remains the same, but now you can also access animations if needed:

// // Get a specific animation
// const firstLineAnimation = s00Animations[0];

// // Pause all animations
// s00Animations.forEach(animation => animation?.pause());

// // Play all animations
// s00Animations.forEach(animation => animation?.play());

