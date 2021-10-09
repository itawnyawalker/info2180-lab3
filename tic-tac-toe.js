function main(){
	window.onload = function() {load_board()}
}

function load_board(){
	let square = document.getElementById("board").getElementsByTagName('div');
	for (let i = 0; i< square.length; i++){
		square[i].classList.add("square");
	}
	console.log("board loaded");
}

main();