// dz_3-1

var arr = ['first', 'second', 'third', 'fourth'];

function getInfo() {

	for( var i = 0; i < arr.length; i++){

	document.getElementById('result').innerHTML += (arr[i] + ', ');
	}
}

// dz_3-2

function getArray() {

	var index = document.getElementById('arrIndex').value;
	var value = document.getElementById('value').value;

	arr[index] = value;

	document.getElementById('result').innerHTML = arr;
}

// dz_3-3

function getPop() {
	arr.pop();
	document.getElementById('result').innerHTML = arr;
}

function getShift() {
	arr.shift();
	document.getElementById('result').innerHTML = arr;
}

function getPush() {
	var element = document.getElementById('elem').value;

	arr.push(element);
	document.getElementById('result').innerHTML = arr;
}

function getUnShift() {
	var item = document.getElementById('item').value;

	arr.unshift(item);
	document.getElementById('result').innerHTML = arr;
}


console.log("Hello");