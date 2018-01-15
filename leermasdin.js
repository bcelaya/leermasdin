function leermasdin(){
var texto = document.getElementsByClassName("term-description")[0].innerHTML;
var longtexto = texto.length;
var primerp = texto.indexOf("</p>");
if (longtexto != (primerp+5))
	{
	var primeraparte = texto.slice(0,(primerp+4));
	var segundaparte = texto.slice((primerp+4));
	var segundaparte = "<div id='leermas'>" + segundaparte + "</div>"
	var union = primeraparte + "<br/><a class='leermasjs' onclick='leermas()'>Leer más...</a>" + segundaparte;
	document.getElementsByClassName("term-description")[0].innerHTML=union;
	}
}