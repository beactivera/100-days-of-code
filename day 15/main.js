// set variables
let c = document.getElementById("c");
let ctx = c.getContext("2d");
let cH;
let cW;
let bgColor = "#FF6138";
let animations = [];
let circles = [];

// prototype for cirles
Circle.prototype.draw = function() {
    ctx.globalAlpha = this.opacity || 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    if (this.stroke) {
      ctx.strokeStyle = this.stroke.color;
      ctx.lineWidth = this.stroke.width;
      ctx.stroke();
    }
    if (this.fill) {
      ctx.fillStyle = this.fill;
      ctx.fill();
    }
    ctx.closePath();
    ctx.globalAlpha = 1;
}

function extend(a, b){
    for(let key in b) {
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
}
  
let circle = function(opts) {
    extend(this, opts);
}

// choose colour
let colorPicker = (function() {
  let colors = ["#FF6138", "#FFBE53", "#2980B9", "#282741"];
  let index = 0;
  function next() {
    index = index++ < colors.length-1 ? index : 0;
    return colors[index];
  }
  function current() {
    return colors[index]
  }
  return {
    next: next,
    current: current
  }
})();

// grab dimentions
function calcPageFillRadius(x, y) {
    let l = Math.max(x - 0, cW - x);
    let h = Math.max(y - 0, cH - y);
    return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

// removing animation
function removeAnimation(animation) {
    let index = animations.indexOf(animation);
    if (index > -1) animations.splice(index, 1);
}

// animation - creating cirles
let animate = anime({
    duration: Infinity,
    update: function() {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, cW, cH);
      animations.forEach(function(anim) {
        anim.animatables.forEach(function(animatable) {
          animatable.target.draw();
        });
      });
    }
});


// make it happend 
function handleEvent(e) {
    if (e.touches) { 
      e.preventDefault();
      e = e.touches[0];
    }
    let currentColor = colorPicker.current();
    let nextColor = colorPicker.next();
    let targetR = calcPageFillRadius(e.pageX, e.pageY);
    let rippleSize = Math.min(200, (cW * .4));
    let minCoverDuration = 750;
    
    let pageFill = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: nextColor
    });
    let fillAnimation = anime({
      targets: pageFill,
      r: targetR,
      duration:  Math.max(targetR / 2 , minCoverDuration ),
      easing: "easeOutQuart",
      complete: function(){
        bgColor = pageFill.fill;
        removeAnimation(fillAnimation);
      }
    });
    
    let ripple = new Circle({
      x: e.pageX,
      y: e.pageY,
      r: 0,
      fill: currentColor,
      stroke: {
        width: 3,
        color: currentColor
      },
      opacity: 1
    });
    let rippleAnimation = anime({
      targets: ripple,
      r: rippleSize,
      opacity: 0,
      easing: "easeOutExpo",
      duration: 900,
      complete: removeAnimation
    });
    
    let particles = [];
    for (let i=0; i<32; i++) {
      let particle = new Circle({
        x: e.pageX,
        y: e.pageY,
        fill: currentColor,
        r: anime.random(24, 48)
      })
      particles.push(particle);
    }
    let particlesAnimation = anime({
      targets: particles,
      x: function(particle){
        return particle.x + anime.random(rippleSize, -rippleSize);
      },
      y: function(particle){
        return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
      },
      r: 0,
      easing: "easeOutExpo",
      duration: anime.random(1000,1300),
      complete: removeAnimation
    });
    animations.push(fillAnimation, rippleAnimation, particlesAnimation);
}

// add eventlisteners
function addClickListeners() {
    document.addEventListener("touchstart", handleEvent);
    document.addEventListener("mousedown", handleEvent);
};
  