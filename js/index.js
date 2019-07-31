var a = parseInt(prompt("Digite o primeiro lado do triângulo: "));
var b = parseInt(prompt("Digite o segundo lado do triângulo: "));
var c = parseInt(prompt("Digite o terceiro lado do triângulo: "));
var area = 0;

if ((b - c) < a && a < (b + c)) {
}if ((a - c) < b && b < (a + c)) {
}if ((a - b) < c && c < (a + b)) {
	area = (a * b)/2
	document.body.append("Os valores " + a + ",   " + b + " e  " + c + " formam um triângulo de área de " + area + "m²")
}else {
	document.body.append("Os valores " + a + ",   " + b + " e  " + c + " não formam um triângulo!");
}