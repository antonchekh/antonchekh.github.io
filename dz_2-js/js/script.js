// dz_2-1

function getValue(){

	var year = document.getElementById('user-year').value;
	
	var currentYear = new Date();  // curent date now

	var yearOld = currentYear.getFullYear() - year;

	alert(yearOld);
}

// dz_2-2

function getNumber() {

	var one = document.getElementById('number-1').value;
	var two = document.getElementById('number-2').value;
	var max;
	if (one - two >= 0) {
		max = one;
	} else {
		max = two;
	} 
	alert (max);
}  

// dz_2-3

function getDoor() {

	var door = document.getElementById('appartment').value;

	var doorNumber;

	if (door <= 20 && door > 0) {
		doorNumber = 1;
	} else if (door <= 64 && door >= 21) {
		doorNumber = 2;
	} else if (door <= 80 && door >=65) {
		doorNumber = 3;
	} else {
		doorNumber = Null;
	}
	alert (doorNumber);
}
	
// dz_2-4

function getEnter() {

	var login = document.getElementById('login').value;
	var password = document.getElementById('password').value;

	var arrLogin = ['ivan', 'ssss', 'gibs'];
	var arrPass = [333, 666, 0000];

	var enter;

	if (login == arrLogin[0] && password == arrPass[0]) {
		enter = 'Добро пожаловать';
	} else if (login == arrLogin[1] && password == arrPass[1]) {
		enter = 'Добро пожаловать';
	} else if (login == arrLogin[2] && password == arrPass[2]) {
		enter = 'Добро пожаловать';
	} else {
		enter = 'Ошибка';
	}
	alert(enter);
}

// dz_2-5

function getItem() {

	var itemOne = document.getElementById('item-1').value;
	var itemTwo = document.getElementById('item-2').value;
	var itemThree = document.getElementById('item-3').value;

	var maxItem;

	if (itemOne - itemTwo >= 0 && itemOne - itemThree >= 0) {
		maxItem = itemOne;
	} else if (itemTwo - itemOne >= 0 && itemTwo - itemThree >= 0){
		maxItem = itemTwo;
	} else {
		maxItem = itemThree;
	}
	
	alert(maxItem);
}

// dz_2_for-1

function getEven() {
	for (var i = 0; i <= 101; i += 2) {
	 document.getElementById('even-number').innerHTML += (i + ', ');
	}
}

// dz_2_for-2

function getTwoHundred() {

	for (var i = 200; i >= 0; i--) {
	 document.getElementById('twohundred').innerHTML += (i + ', ');
	}
}

// dz_2_for-3

function getAmount() {
	var sum = 0;
	for (var i = 1; i <= 100; i++) {
		 sum = sum + i; }
	 document.getElementById('amount').innerHTML = ('= ' + sum);
}

// dz_2_for-4

function getDegree() {

	var num = document.getElementById('num').value;
	var degree = document.getElementById('degree').value;
	var result = 1;
	for(var i=1; i <= degree; i++) {
		result = result * num;
	}
	document.getElementById('result').innerHTML = (result);
}
    /*document.getElementById('result').innerHTML = + Math.pow(num, degree);
}*/

// dz_2-for-5

function getMultiple() {
	var number = 7;

	for(var i = 1; i <= 9; i++) 
		document.getElementById('multiple').innerHTML += (i + "*" + number + "=" + (i * number) + "<br>");
	}

// dz_2-for-6

function getTotal() {
	var total = 1;
	for (var i = 1; i <= 50; i++) {
		 total = total * i; 
	}
	document.getElementById('total').innerHTML = (' = ' + total);
}

// dz_2-for-7

function getSymbol() {
	for (var i = 1000; i <= 2000; i++) {
	 document.getElementById('symbol').innerHTML += ('&#' + i + ' ');
	}
}






console.log("hello");

var now = new Date();
console.log( now );