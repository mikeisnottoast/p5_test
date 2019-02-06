let steepness = 0
let hv = 255
let hdirection = 0
let b = 0
let fatness = 0
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
colorMode(HSB);
noLoop();
// frameRate(5);
steepness = height/2;
background(0);
fatness=height/10;
}

function draw() {

	// translate(width/2,height/2);

	// background(100,255,255);
	// for (var i = 0; i < 100; i++) {
		// background(0,255,255);
for (var i = 0; i < 50; i++) {
	

waveline(steepness, hv, b);
steepness = steepness-fatness;
b = b+1;

// if (hdirection==0){
// hv = hv-1;
// if (hv==0){hdirection = 1;}
// }
// if (hdirection==1){
// hv = hv+1;
// if (hv==255){hdirection = 0;}
// }
}
}
// }




function waveline(speed, hue, bright){
	// push();
	// for (var i = 0; i < 50; i++) {

			// noFill(); 
			fill(hue, bright ,255, 127)
	strokeWeight(4);
	stroke(hue, bright+5 ,255, 127); 
	beginShape();
  vertex(0, height);
  quadraticVertex(width/2, speed, width, height);
  quadraticVertex(width/2, speed-fatness, 0, height);
endShape();
}
// pop();
// }