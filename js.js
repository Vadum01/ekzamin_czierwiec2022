function generateColor() {
	const hue = document.getElementById("hue").value;
	const colors = [];
	
	for (let i = 0; i < 6; i++) {
		colors.push(`hsl(${hue + (i * 26)}, 100%, 50%)`);
	}
	
	document.getElementById("main-color").style.backgroundColor = colors[0];
	document.getElementById("color-2").style.backgroundColor = colors[1];
	document.getElementById("color-3").style.backgroundColor = colors[2];
	document.getElementById("color-4").style.backgroundColor = colors[3];
	document.getElementById("color-5").style.backgroundColor = colors[4];
}