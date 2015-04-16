var index1;
var index2;
var secimCounter = 1;
var totalCounter = 0;
var hamle = 0;
var Harfler = new Array("A", "B", "C", "D", "E", "F");
Harfler.sort(function() {return 0.5 - Math.random()});

function start() {
	var x;
	for (x = 0; x < 6; x++) {
		Kapat(x);
	}
}

function Kapat(gifid) {
	var doc = document.getElementById("gift"+gifid);
	doc.innerHTML = '<img src="img/gift.png" onclick="Goster('+gifid+');" />';
}

function Goster(resimid) {
	++hamle;
	if (secimCounter == 1) {
		var doc = document.getElementById("gift"+resimid);
		doc.innerHTML = '<img src="img/' + Harfler[resimid] + '.png" />';
		index1 = resimid;
		secimCounter++;
	}
	else if (secimCounter == 2) {
		var doc = document.getElementById("gift"+resimid);
		doc.innerHTML = '<img src="img/' + Harfler[resimid] + '.png" />';
		index2 = resimid;
		if (!Kontrol(Harfler[index1], Harfler[index2])) {
			setTimeout(function(){Kapat(index1)},250);
			setTimeout(function(){Kapat(index2)},250);
		}
		else {
			++totalCounter;
		}
		if (totalCounter == 3) {
			alert('Tebrikler !\nOyunu '+hamle+' hamlede bitirdiniz.');
			setTimeout(function(){start()},2000);
		}
		secimCounter = 1;
	}
}

function Kontrol(sec1, sec2) {

	if (sec1 == 'D') sec1 = 'A';
	if (sec1 == 'E') sec1 = 'B';
	if (sec1 == 'F') sec1 = 'C';
	
	if (sec2 == 'D') sec2 = 'A';
	if (sec2 == 'E') sec2 = 'B';
	if (sec2 == 'F') sec2 = 'C';
	
	if (sec1 == sec2) {
		return true; 
	}
	else {
		return false;
	}
}

window.addEventListener("load", start, false);
