let char = document.querySelector("img.image");
let img = document.querySelector("img.speakimage");
let aud = document.querySelector("#bgsound");

aud.play();
 char.classList.remove("dissapear");
/*move*/
let moveButton = document.querySelector("#move");
moveButton.addEventListener('click', makeMove);
function makeMove(){
    console.log("make move");
    char.classList.toggle("moveCSS");
}

/*moveTo30*/
let moveTo30Button = document.querySelector("#moveTo30");
moveTo30Button.addEventListener('click', makeMoveTo30);
function makeMoveTo30(){
    console.log("make moveTo30");
    char.classList.toggle("moveTo30CSS");
	shadow.classList.toggle("div");
}

/*moveFrom30*/
let moveFrom30Button = document.querySelector("#moveFrom30");
moveFrom30Button.addEventListener('click', makeMoveFrom30);
function makeMoveFrom30(){
    console.log("make moveFrom30");
    char.classList.toggle("moveFrom30CSS");
}


/*oneJump*/
let oneJumpButton = document.querySelector("#oneJump");
oneJumpButton.addEventListener('click', makeoneJump);
function makeoneJump(){
    console.log("make oneJump");
    char.classList.toggle("oneJumpCSS");
}

/*jumping*/
let jumpingButton = document.querySelector("#jumping");
jumpingButton.addEventListener('click', makejumping);
function makejumping(){
    console.log("make jumping");
    char.classList.toggle("jumpingCSS");
}

/*fade*/
let fadeButton = document.querySelector("#fade");
fadeButton.addEventListener('click', makefade);
function makefade(){
    console.log("make fade");
    char.classList.toggle("fadeCSS");
}

/*glow*/
let glowButton = document.querySelector("#glow");
glowButton.addEventListener('click', makeglow);
function makeglow(){
    console.log("make glow");
    char.classList.toggle("glowCSS");
}

/*fallDown*/
let fallDownButton = document.querySelector("#fallDown");
fallDownButton.addEventListener('click', makefallDown);
function makefallDown(){
    console.log("make fallDown");
    char.classList.toggle("fallDownCSS");
}

/*speak*/
let speakButton = document.querySelector("#speak");
speakButton.addEventListener('click', playSound);

function playSound(){
	console.log("make speak");
	aud.volume = 0.5;
	img.classList.toggle("dissapear");
	let speakpanda = document.querySelector("#voice");
	speakpanda.play();
	speakButton.addEventListener('click', stopAud);
	(speakButton.onclick)
    function stopAud ()
		{
			speakpanda.pause();
		}
		

	//if(speakpanda.paused){
	//	speakpanda.play();
	//}
	//else{
	//	speakpanada.pause();
	//}

}

/*shake*/
let shakeButton = document.querySelector("#shake");
shakeButton.addEventListener('click', makeShake);
function makeShake(){
    console.log("make shake");
    char.classList.toggle("shakeCSS");
}

/*mirror*/
let mirrorButton = document.querySelector("#mirror");
mirrorButton.addEventListener('click', makemirror);
function makemirror(){
    console.log("make mirror");
    char.classList.toggle("mirrorCSS");
}
