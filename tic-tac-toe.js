function main(){
	window.onload = function() {load_board()}
	//X_O(); 
}

function load_board(){
	let move = "O";
	let square = document.getElementById("board").getElementsByTagName('div');
	for (let i = 0; i< square.length; i++){
		square[i].classList.add("square"); 
		
		square[i].onclick = function() {
			if (square[i].innerHTML == "" && move == "O"){
				square[i].classList.add("O");
				square[i].innerHTML = "O";
				move = "X";
			}
			else if (square[i].innerHTML == "" && move == "X"){
				square[i].classList.add("X");
				square[i].innerHTML = "X";
				move = "O";
			}
		}
	}
	console.log("board loaded");
}


main()