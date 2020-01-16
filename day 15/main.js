// set variables
let c = document.getElementById("c");
let ctx = c.getContext("2d");
let cH;
let cW;
let bgColor = "#FF6138";
let animations = [];
let circles = [];

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

