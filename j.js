let numAtual = document.getElementById("n");
let num = 0

function i(){
	num = num + 1
	numAtual.innerHTML = num

	if (num >= 0) {
		numAtual.style.color = "black"
	}
}

function d(){
	num = num - 1
	numAtual.innerHTML = num

	if (num < 0) {
		numAtual.style.color = "red"
	}
}












