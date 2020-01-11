// variables
let cn,
    c,
    u = 10;
const m = {
    x: innerWidth / 2,
    y: innerHeight / 2
};


// get coordinates of mouse at the screen - window event
window.onmousemove = function(e) {
    m.x = e.clientX;
    m.y = e.clientY;
}
            
// functions
// gc - get color from hex code
function gc() {
let s = "0123456789ABCDEF";
let c = "#";
for (let i = 0; i < 6; i++) {
     c += s[Math.ceil(Math.random() * 15)]
}
return c
}

let a = [];
// window event
window.onload = function myfunction() {
 // take element from html file
 cn = document.getElementById('cw');
 c = cn.getContext('2d');

 // build ten colors
 for (let i = 0; i < 10; i++) {
     let r = 30;
     let x = Math.random() * (innerWidth - 2 * r) + r;
     let y = Math.random() * (innerHeight - 2 * r) + r;
     let t = new ob(innerWidth / 2,innerHeight / 2,5,"red",Math.random() * 200 + 20,2);
     a.push(t);
 }
 //cn.style.backgroundColor = "#700bc8";

 c.lineWidth = "2";
 c.globalAlpha = 0.5;
 resize();
 anim()
}

// window event - resizing
window.onresize = function() {
 resize();
 }

// make many circles
 function resize() {
 cn.height = innerHeight;
 cn.width = innerWidth;
 for (let i = 0; i < 101; i++) {
     let r = 30;
     let x = Math.random() * (innerWidth - 2 * r) + r;
     let y = Math.random() * (innerHeight - 2 * r) + r;
     a[i] = new ob(innerWidth / 2,innerHeight / 2,4,gc(),Math.random() * 200 + 20,0.02);

 }
 //  a[0] = new ob(innerWidth / 2, innerHeight / 2, 40, "red", 0.05, 0.05);
 //a[0].dr();
}

// function for circles
function ob(x, y, r, cc, o, s) {
 this.x = x;
 this.y = y;
 this.r = r;
 this.cc = cc;
 this.theta = Math.random() * Math.PI * 2;
 this.s = s;
 this.o = o;
 this.t = Math.random() * 150;

 this.o = o;
 // drawing circles in canvas
 this.dr = function() {
     const ls = {
         x: this.x,
         y: this.y
     };
     this.theta += this.s;
     this.x = m.x + Math.cos(this.theta) * this.t;
     this.y = m.y + Math.sin(this.theta) * this.t;
     c.beginPath();
     c.lineWidth = this.r;
     c.strokeStyle = this.cc;
     c.moveTo(ls.x, ls.y);
     c.lineTo(this.x, this.y);
     c.stroke();
     c.closePath();
 }
}


// animating circles
function anim() {
 requestAnimationFrame(anim);
 c.fillStyle = "rgba(0,0,0,0.05)";
 c.fillRect(0, 0, cn.width, cn.height);
 a.forEach(function(e, i) {
     e.dr();
 });

}
        