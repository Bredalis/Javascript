
$(function(){

	$("body").hide().fadeIn(2000);

});

var Body = document.getElementById("Cuerpo");
var Header = document.getElementById("Encabezado");
var Selection_1 = document.getElementById("Elegir");
var Button_1 = document.getElementById("Color");
var Selection_2 = document.getElementById("Traducir");
var Input_1 = document.getElementById("Idioma_Entrada");
var Input_2 = document.getElementById("Idioma_Salida");
var Button_2 = document.getElementById("Historial");

function Estilo_Inicial(){

	window.location. reload()
}

function Estilo(){

	Body.style.background = "#808B96";
	Header.style.color = "white";

	Selection_1.style.background = "#808B96";
	Selection_1.style.color = "white";
	Selection_1.style.border = "white";

	Button_1.style.background = "#808B96";
	Button_1.style.color = "white";

	Selection_2.style.background = "#808B96";
	Selection_2.style.color = "white";
	Selection_2.style.border = "white"

	Input_1.style.border = "#808B96";
	Input_2.style.border = "#808B96";

	Button_2.style.background = "#808B96";
	Button_2.style.color = "white";
}