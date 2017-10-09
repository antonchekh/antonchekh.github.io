// dz_4-1

function getColor() {

	var elems = document.getElementsByTagName('p');
	for(i = 0; i < elems.length; i++)
	elems[i].style.backgroundColor = 'red';
}

// dz_4-2

function getShadow() {

	var img = document.getElementsByTagName('img');
	for(i = 0; i < img.length; i++)
	img[i].style.boxShadow = '10px -20px 20px blue';
}

// dz_4-3

function getNumber() {

	var number = document.querySelectorAll('#abz p');                                      
		for(i = 0; i < number.length; i++) {
		var item = i + 1;
		number[i].innerHTML = item + '. ' + number[i].innerHTML;
	}
}

// dz_4-4

var push = 0;
function getClick() {
	document.getElementById('result').innerHTML = ++push;
} 
	document.getElementById('click1').addEventListener("click", getClick);
	document.getElementById('click2').addEventListener("click", getClick);

// dz_4-5

function getDegree(x, y) {
	
	var result = Math.pow(x, y);
	alert(result);
}
	document.querySelector('.btn').addEventListener("click", function() {
		var number = document.getElementById('num').value;
		var degree = document.getElementById('degree').value; 
		getDegree(number, degree)
	});
	

// dz_4-6 

function getUnderline(allTag) {
	for(i = 0; i < allTag.length; i++) {
	allTag[i].style.textDecoration = 'underline';
	} 
}
document.querySelector('.btn_6').addEventListener("click", function() {
		var inputValue = document.getElementById('tag').value;
		var allTags = document.getElementsByTagName(inputValue);
	 	getUnderline(allTags);
});

// dz_4-7-8

function checkAge(x) {
	
	if (x > 16) {
		alert('Добро пожаловать');
	} else if (x === undefined || x === '' || x === 0) {
		alert('Введите возраст');
	} else {
		alert('Вы еще молоды');
	}
}
document.querySelector('.btn_7').addEventListener("click", function() {
	var age = document.getElementById('age').value;
	checkAge(age);
});

// dz_4-9
var mArray = ['first', 'second', 'third', 'fourth', 'five'];

function getArray(y) {
	// y = y || "Ошибка";
	var x = y.length;
	if (y == undefined) {
		alert("Ошибка");
	} else {
	alert(x);
	}
}
document.querySelector('.btn_9').addEventListener("click", function () {
	getArray(mArray);
});

// dz_4-10

function getReturn(x){

	if (x >= 10) {
		return alert(x * x);
	} else if (x < 7) {
		return alert('Число меньше 7');
	} else if (x == 8) {
		return alert(7);
	} else if (x == 9) {
		return alert(8);
	}
}
document.querySelector('.btn_10').addEventListener("click", function() {
	var y = document.getElementById('numb').value;
	getReturn(y)
});

// dz_4-11

function getRandom(min, max) {
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	// var text = document.getElementById('text');
	// text.innerHTML = "Игра началась. Попробуйте угадать число от 0 до 10. У вас есть три попытки";
	return rand;
}
// document.querySelector('.btn_11').addEventListener('click', function() {
// 	getRandom(0, 10)
// });

var random = getRandom(0, 10);
var tries = 3;

function checkNumber() {
	var atempt = document.querySelector('#cifra').value;
	
	if (random == atempt && tries !== 0) {
		tries--;
		return alert("Угадали ");
	} else if (atempt < random && tries !== 0) {
		tries--;
		alert("Больше. " + "Осталось попыток " + tries);
	} else if (atempt > random && tries !== 0) {
		tries--;
		alert("Меньше. " + "Осталось попыток " + tries);
	} else {
		alert("Вы не угадали, у вас закончились попытки");
	}
}
document.querySelector('.btn_12').addEventListener('click', checkNumber);

