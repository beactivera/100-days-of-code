const tl = gsap.timeline();

const snow = document.getElementById('snow')
const tail = document.querySelectorAll('.tail')

tl.fromTo(snow, {scale:1.1}, {scale:1, duration: 1});
tl.fromTo(tail, {scale:1.05}, {scale:1, duration: 0.5});