
alert("Hola!" + "\n" + "\n" + "Este es un juego donde tendras que adivinar las diferencias en las siguientes imagenes");

function Vida_Corazones_1(){

    var Imagen_Corazon = document.getElementById("Corazon_1");

    Imagen_Corazon.parentNode.removeChild(Imagen_Corazon);
}

function Vida_Corazones_2(){

    var Imagen_Corazon = document.getElementById("Corazon_2");

    Imagen_Corazon.parentNode.removeChild(Imagen_Corazon);
}

function Vida_Corazones_3(){

    var Imagen_Corazon = document.getElementById("Corazon_3");

    Imagen_Corazon.parentNode.removeChild(Imagen_Corazon);
}

function Vida_Corazones_4(){

    var Imagen_Corazon = document.getElementById("Corazon_4");

    Imagen_Corazon.parentNode.removeChild(Imagen_Corazon);
}

function Cantidad_Corazones_1(){

    var Contador = 0;

    while(Contador < 5){

        var Pregunta_Sobre_Diferencia = prompt("¿Cuántas diferencias tiene la primera imagen?");

        if(Pregunta_Sobre_Diferencia == 5){

            Contador = 5;

            alert("¡Excelete Trabajo!");
        
        }else if(Pregunta_Sobre_Diferencia < 5){

            alert("¡Tu Puedes! ");

        }else{

            alert("Hazlo De Nuevo ");
        }
    }
}

function Cantidad_Corazones_2(){

    var Contador = 0;

    while(Contador < 7){

        var Pregunta_Sobre_Diferencia = prompt("¿Cuántas diferencias tiene la segunda imagen?");

        if(Pregunta_Sobre_Diferencia == 7){

            Contador = 7;

            alert("¡Excelete Trabajo!");
        
        }else if(Pregunta_Sobre_Diferencia < 7){

            alert("¡Tu Puedes! ");

        }else{

            alert("Hazlo De Nuevo ");

            alert(Vida_Corazones_());
        }
    }
}

function Cantidad_Corazones_3(){

    var Contador = 0;

    while(Contador < 6){

        var Pregunta_Sobre_Diferencia = prompt("¿Cuántas diferencias tiene la tercera imagen?");

        if(Pregunta_Sobre_Diferencia == 6){

            Contador = 6;

            alert("¡Excelete Trabajo!");
        
        }else if(Pregunta_Sobre_Diferencia < 6){

            alert("¡Tu Puedes! ");

        }else{

            alert("Hazlo De Nuevo ");
        }
    }
}

function Cantidad_Corazones_4(){

    var Contador = 0;

    while(Contador < 20){

        var Pregunta_Sobre_Diferencia = prompt("¿Cuántas diferencias tiene la cuarta imagen?");

        if(Pregunta_Sobre_Diferencia == 20){

            Contador = 20;

            alert("¡Excelete Trabajo!");
        
        }else if(Pregunta_Sobre_Diferencia < 20){

            alert("¡Tu Puedes! ");

        }else{

            alert("Hazlo De Nuevo ");

            alert(Vida_Corazones_2());
        }
    }
}

function Cantidad_Corazones_5(){

    var Contador = 0;

    while(Contador < 8){

        var Pregunta_Sobre_Diferencia = prompt("¿Cuántas diferencias tiene la quinta imagen?");

        if(Pregunta_Sobre_Diferencia == 8){

            Contador = 8;

            alert("¡Excelete Trabajo!");
        
        }else if(Pregunta_Sobre_Diferencia < 8){

            alert("¡Tu Puedes! ");

        }else{

            alert("Hazlo De Nuevo ");

            alert(Vida_Corazones_3());
        }
    }
}

function Cantidad_Corazones_6(){

    var Contador = 0;

    while(Contador < 20){

        var Pregunta_Sobre_Diferencia = prompt("¿Cuántas diferencias tiene la sexta imagen?");

        if(Pregunta_Sobre_Diferencia == 20){

            Contador = 20;

            alert("¡Excelete Trabajo!");
        
        }else if(Pregunta_Sobre_Diferencia < 20){

            alert("¡Tu Puedes! ");

        }else{

            alert("Hazlo De Nuevo ");

            alert(Vida_Corazones_4());
        }
    }
}

function Cantidad_Corazones_7(){

    var Contador = 0;

    while(Contador < 6){

        var Pregunta_Sobre_Diferencia = prompt("¿Cuántas diferencias tiene la septima imagen?");

        if(Pregunta_Sobre_Diferencia == 6){

            Contador = 6;

            alert("Excelente Trabajo");

            alert("¡Muchas Gracias!");
        
        }else if(Pregunta_Sobre_Diferencia < 6){

            alert("¡Tu Puedes! ");

        }else{

            alert("Hazlo De Nuevo ");

            alert(Vida_Corazones_());
        }
    }
}

function Final(){

    location.reload();
}