/* PSEUDO CODE

	1. Get the text from HTML - plus length
	2. Remove/clear the text in the HTML
    3. Separate intro individual characters
    4. start with N=0
        if N < length
	5. Display the first character
	6. Play sound
        If(character == space)      play   'typespace'
                        uppercase   play    typekey1
                        lowercase   play    typekey2
    7. make N one bigger that it is - make a loop back to 4 BUT remember about delay
    8. only repeat if more characters
    
    
*/

// make many times loop()  once by time

//CODING
"use strict";

window.addEventListener("DOMContentLoaded", init);

let text;
let N;

function init() {
  //   console.log("init runs");
  // get text from html
  text = document.querySelector("#typewriter").textContent;
  console.log(text);

  // start with N=0
  N = 0;

  // start the loop
  if (N < text.length) {
    loop();
  } else {
    // stop looping
  }
}

function loop() {
  //   console.log("loop runs");
  // display the Nth character;
  setInterval(showChar(), 2000);
  function showChar() {
    for (let i = 0; i < text.length; i++) {
      console.log(text.charAt([i]));
    }
  }

  const newText = text.substring(0, N);
  document.querySelector("#typewriter").textContant = newText;

  // // next N
  // N++;
  console.log(N);
}
