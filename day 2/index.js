const tl = gsap.timeline();

const tween = gsap.fromTo("#snow", {scale:1.5}, {duration: 1, scale:1});
tl.add(tween);

//this line produces the same result as the previous two lines (just shorter)
// tl.fromTo(element, {x: -100}, {duration: 1, x: 100});