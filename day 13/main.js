// it is not working since is a jQuery

// let menu = document.querySelector('.menu-list'),
//     item = document.querySelector('.menu-list-item'),
//     w =window.innerWidth, //window width
//     h = window.innerHeight, //window height
//     transformPoster;

// window.addEventListener('mousemove', function(e) {
//   let offsetX = 0.5 - e.pageX / w, //cursor position X
//       offsetY = 0.5 - e.pageY / h, //cursor position Y
//       dy = e.pageY - h / 2, //@h/2 = center of poster
//       dx = e.pageX - w / 2, //@w/2 = center of poster
//       theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
//       angle = theta * 180 / Math.PI - 90, //convert rad in degrees
//       offsetPoster = menu.data('offset'),
//       transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

//   //get angle between 0-360
//   if (angle < 0) {
//     angle = angle + 360;
//   }
// })
//   //poster transform
//   menu.css('transform', transformPoster);

//   //parallax for each layer
//   item.each(function(e) {
//     let t = (this),
//         offsetLayer = $this.data('offset') || 0,
//         transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

//     .css('transform', transformLayer);
//   });
// });
