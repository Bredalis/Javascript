
$(function(){

	$("body").hide().fadeIn(2000);

});

var Body = document.getElementById("Cuerpo");
var Header = document.getElementById("Encabezado");
var Input_1 = document.getElementById("Idioma_Salida");
var Button_Like = document.getElementById("Like");

var Bolean = true;

function Estilo(){

	if(Bolean){

		Bolean = false;

		Body.style.backgroundColor = "#808B96";
		Header.style.color = "white";

	}else{

		Bolean = true;

		Body.style.backgroundColor = "white";
		Header.style.color = "black";
	}	
}

function Like(){

	//Continuar;
}

function Copiar(){

	Input_1.select();
	document.execCommand("Copy");
}