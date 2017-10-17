// dz_5-1
function getLength() {
	var x = document.getElementById('area').value;
	alert(x.length);
}

document.querySelector('.btn_1').addEventListener('click', getLength);

// dz_5-2

var imgs = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
var imgCont = document.querySelector('.img-cont');

for(i = 0; i < imgs.length; i++) {
	var pics = '<img src =' + imgs[i] + ' />';
	imgCont.insertAdjacentHTML('beforeEnd', pics);
}

//dz_5-3

function getMySite(){
	var mySite = document.querySelector('.site-1').value;
	var a = mySite.split('//')[1];
	alert(a);
}

document.querySelector('.btn_2').addEventListener('click', getMySite);

//dz_5-4

function getNameSite() {
	var mySite = document.querySelector('.site-2').value;

	var from = mySite.search('www.');
	var to = mySite.length;
	var newStr = mySite.substring(from,to);
	var b = newStr.split('www.')[1];
	if (b === undefined) {
		var from1 = mySite.search('//');
		var to1 = mySite.length;
		var newStr1 = mySite.substring(from1,to1);
		var c = newStr1.split('//')[1];
		alert(c);
	} else {
	alert(b);
	}
}
document.querySelector('.btn_3').addEventListener('click', getNameSite);


//dz_5-5
function getUser() {
	var user = document.user;
	console.log(user.length);

	console.log(user['0'].value.trim());
	console.log(user['1'].value.trim());

	if (user['2'].value.length < 5) {
	alert('ERROR! Пародь должен быть не меньше 5 символов');
	}

	//if (user['3'].value.indexOf(' ') !== -1 || user['3'].value.indexOf('@') == -1) {
	var r = /^\w+@\w+\.\w{2,4}$/i;
	if (!r.test(document.user['3'].value)) {
	alert('ERROR e-mail! Проверьте правильность e-mail');
	}
}
document.querySelector('.btn_5').addEventListener('click', getUser);

//dz_5-6

function getSymbol() {
	var symbol = document.querySelector('.symbol').value;
	var result = '&#' + symbol;
	document.querySelector('.result').innerHTML = result;
}
document.querySelector('.btn_4').addEventListener('click', getSymbol);