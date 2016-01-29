var imageCount = 1;
var total = 4;

function slide(x) {
	var image = document.getElementById("image");
	imageCount = imageCount + x;
	if(imageCount >total) {imageCount = 1;}
	if(imageCount <1) {imageCount = total;}
	image.src = "_images/img_" + imageCount + ".jpg";

}

var imageCount = 1;
var total = 4;

window.setInterval(function photoA() {
	var image = document.getElementById("image");
	imageCount = imageCount + 1;
	if(imageCount > total) {

		imageCount = 1;

	} else if (imageCount <1){
		imageCount = total;
	}

image.src = "_images/img_" + imageCount + ".jpg";},3000);