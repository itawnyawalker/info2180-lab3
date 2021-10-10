let state = Array(9);

function main(){
	window.onload = function() {load_board()}
		
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
			else {
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
		console.log(state);
		if (state[0] == state[1] && state[1] == state[2]){
			stat.innerHTML = "Congratulations! " + state[0] + " is the Winner!";
			stat.classList.add("you-won");
		}
		else if (state[3] == state[4] && state[4] == state[5]){
			stat.innerHTML = "Congratulations! " + state[3] + " is the Winner!";
			stat.classList.add("you-won");
		}
		else if (state[6] == state[7] && state[7] == state[8]){
			stat.innerHTML = "Congratulations! " + state[6] + " is the Winner!";
			stat.classList.add("you-won");
		}
		else if (state[0] == state[3] && state[3] == state[6]){
			stat.innerHTML = "Congratulations! " + state[0] + " is the Winner!";
			stat.classList.add("you-won");
		}
		else if (state[1] == state[4] && state[4]== state[7]){
			stat.innerHTML = "Congratulations! " + state[1] + " is the Winner!";
			stat.classList.add("you-won");
		}
		else if (state[2] == state[5] && state[5] == state[8]){
			stat.innerHTML = "Congratulations! " + state[2] + " is the Winner!";
			stat.classList.add("you-won");
		}
		else if (state[0] == state[4] && state[4]== state[8]){
			stat.innerHTML = "Congratulations! " + state[0] + " is the Winner!"
			stat.classList.add("you-won");
		}
		else if (state[2] == state[4] && state[4] == state[6]){
			stat.innerHTML = "Congratulations! " + state[2] + " is the Winner!";
			stat.classList.add("you-won");
		}
		else{
			stat.innerHTML = "Congratulations! It is a Draw!";
			stat.classList.add("you-won");
		}
}


main()