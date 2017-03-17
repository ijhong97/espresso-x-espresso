// Isabella Hong
// Section A
// ijhong@andrew.cmu.edu
// Project-05

function setup() { 
	createCanvas(600, 780);
	//save computation 
	noLoop(); 
}

function draw() {
	//tan 
	background(221, 198, 168); 
	//loop cawfee function 
	for (var x = -150; x < width + 200; x += 100) {
		for (var y = 0; y < height; y += 100) {
			cawfee(x, y);
		}
	}	
	//loop bean function 
	for (var x = -5; x < width; x += 97) {
		for (var y = 20; y < height + 100; y += 100) {
			bean(x, y); 
		}
	}
	}	

//coffee cup 
function cawfee(x, y) {
	noStroke();
	angleMode(DEGREES); 
	fill(54, 40, 21);
	ellipse(x + 50, y + 20, 60, 8);  
	fill(255); 
	arc(x + 50, y + 20, 60, 60, 0, 180, OPEN); 
	noFill();
	stroke(255);
	strokeWeight(2); 
	arc(x + 60, y + 30, 60, 15, 315, 100, OPEN); 	
}

//coffee bean 
function bean(x, y) {
	push();
	noStroke();
	angleMode(DEGREES); 
	fill(54, 40, 21); 
	arc(x + 20, y + 60, 15, 30, 250, 120, CHORD); 
	arc(x + 15, y + 60, 30, 30, 110, 250, CHORD); 
	pop(); 
}
	

	

