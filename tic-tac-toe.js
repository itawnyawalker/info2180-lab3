let state = Array(9);

function main(){
	window.onload = function() {load_board(); reload()}
		
}

function load_board(){
	let move = "O";
	let square = document.getElementById("board").getElementsByTagName('div');
	for (let i = 0; i< square.length; i++){
		square[i].classList.add("square"); 	
		square[i].onmouseover = function() {square[i].classList.add("hover")}
		square[i].onmouseout = function() {square[i].classList.remove("hover")}
		
		square[i].onclick = function() {
			if (square[i].innerHTML == "" && move == "O"){
				square[i].classList.add("O");
				square[i].innerHTML = "O";
				move = "X";
				state[i] = "O";
				getWinner();
			}
			else if (square[i].innerHTML == "" && move == "X"){
				square[i].classList.add("X");
				square[i].innerHTML = "X";
				move = "O";
				state[i] = "X";
				getWinner();				
			}
		}
	}
}

function getWinner(){
		let stat = document.getElementById("status");
		if (typeof state[0] != 'undefined'  && (state[0] == state[1] && state[1] == state[2])){
			stat.innerHTML = "Congratulations! " + state[0] + " is the Winner!";
			stat.classList.add("you-won");
			console.log("state 1");
		}
		else if (typeof state[3] != 'undefined'  && (state[3] == state[4] && state[4] == state[5])){
			stat.innerHTML = "Congratulations! " + state[3] + " is the Winner!";
			stat.classList.add("you-won");
			console.log("state 2");
		}
		else if (typeof state[6] != 'undefined'  && (state[6] == state[7] && state[7] == state[8])){
			stat.innerHTML = "Congratulations! " + state[6] + " is the Winner!";
			stat.classList.add("you-won");
			console.log("state 3");
		}
		else if (typeof state[0] != 'undefined'  && (state[0] == state[3] && state[3] == state[6])){
			stat.innerHTML = "Congratulations! " + state[0] + " is the Winner!";
			stat.classList.add("you-won");
			console.log("state 4");
		}
		else if (typeof state[1] != 'undefined' && (state[1] == state[4] && state[4] == state[7])){
			stat.innerHTML = "Congratulations! " + state[1] + " is the Winner!";
			stat.classList.add("you-won");
			console.log("state 5");
		}
		else if (typeof state[2] != 'undefined' && (state[2] == state[5] && state[5] == state[8])){
			stat.innerHTML = "Congratulations! " + state[2] + " is the Winner!";
			stat.classList.add("you-won");
			console.log("state 6");
		}
		else if (typeof state[0] != 'undefined'  && (state[0] == state[4] && state[4] == state[8])){
			stat.innerHTML = "Congratulations! " + state[0] + " is the Winner!"
			stat.classList.add("you-won");
			console.log("state 7");
		}
		else if (typeof state[2] != 'undefined' && (state[2] == state[4] && state[4] == state[6])){
			stat.innerHTML = "Congratulations! " + state[2] + " is the Winner!";
			stat.classList.add("you-won");
			console.log("state 8");
		}
}

function reload() {
	let square = document.getElementsByClassName("square");
	let stat = document.getElementById("status");
	document.getElementsByClassName("btn")[0].onclick = function() {
		for (let i = 0; i< 9; i++){ 
			square[i].innerHTML = "";
			square[i].classList.remove("O", "X");
			state[i] = undefined;
		}
		stat.innerHTML = "Move your mouse over a square and click to play an X or an O.";
		stat.classList.remove("you-won");
		
	}
	console.log("New game loaded");
}


main()