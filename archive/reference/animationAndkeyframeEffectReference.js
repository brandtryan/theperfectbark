// Animation WRITABLE PROPERTIES

// currentTime
// const animaCT = ln0w2.animate(crunchFrames, crunchTiming);
// console.log("currentTime BEFORE change = " + animaCT.currentTime)
// Must pause animation in order to seek to a certain time
// animaCT.pause();
// animaCT.currentTime = 500.0;
// console.log("currentTime AFTER change = " + animaCT.currentTime)

// playbackRate
// const animaPR = ln0w2.animate(crunchFrames, crunchTiming);
// animaPR.pause();
// console.log("playbackRate BEFORE change = " + animaPR.playbackRate)
// animaPR.playbackRate = 2;
// console.log("playbackRate AFTER change = " + animaPR.playbackRate)
// animaPR.play();

// startTime
// const animaST = ln0w2.animate(crunchFrames, crunchTiming);
// animaST.timeline = document.timeline;
// console.log("startTime NOT SET = " + animaST.startTime);
// animaST.startTime = 1500.0;
// console.log("startTime SET = " + animaST.startTime);

// Animation METHODS

// cancel()
// const animaCancel = ln0w2.animate(crunchFrames, crunchTiming);
// animaCancel.pause();
// console.log("playState BEFORE cancel = " + animaCancel.playState)
// animaCancel.play();
// console.log("playState AFTER play = " + animaCancel.playState)
// animaCancel.cancel();
// console.log("playState AFTER cancel = " + animaCancel.playState)

// finish()
// const animaFinish = ln0w2.animate(crunchFrames, crunchTiming);
// console.log("currentTime BEFORE finish = " + animaFinish.currentTime);
// ln0w2.getAnimations().forEach((animation) => animation.finish());
// console.log("currentTime AFTER finish = " + animaFinish.currentTime);
// animaFinish.play();
// console.log("currentTime AFTER play = " + animaFinish.currentTime);

// pause()
// const animaPause = ln0w2.animate(crunchFrames, crunchTiming);
// console.log("playState BEFORE pause = " + animaPause.playState);
// animaPause.pause();
// console.log("playState AFTER pause = " + animaPause.playState);

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

// keyframeEffect PROPERTIES

// Gets/Sets element being animated by this object. Can be null.
// KeyframeEffect.target

// keyframeEffect METHODS

// Returns calculated, current timing values for this keyframe effect:
// AnimationEffect.getComputedTiming()

// Returns the object associated with the animation containing all the timing values
// AnimationEffect.getTiming()

// Returns computed keyframes that make up this effect along with their computed offsets.
// KeyframeEffect.getKeyframes()

// Replaces the set of keyframes that make up this effect:
// KeyframeEffect.setKeyframes()

// Updates the specified timing properties:
// AnimationEffect.updateTiming()
