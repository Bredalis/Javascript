
alert("Hola!" + "\n" + "\n" + "Este es un juego donde tendras que adivinar las diferencias en las siguientes imagenes");

function CorazonesDeVida(){
    var ImagenesDeCorazones = document.getElementById("Corazon");
    ImagenesDeCorazones.parentNode.removeChild(ImagenesDeCorazones);
}

function CorazonesDeVida2(){
    var ImagenesDeCorazones = document.getElementById("Corazon2");
    ImagenesDeCorazones.parentNode.removeChild(ImagenesDeCorazones);
}

function CorazonesDeVida3(){
    var ImagenesDeCorazones = document.getElementById("Corazon3");
    ImagenesDeCorazones.parentNode.removeChild(ImagenesDeCorazones);
}

function CorazonesDeVida4(){
    var ImagenesDeCorazones = document.getElementById("Corazon4");
    ImagenesDeCorazones.parentNode.removeChild(ImagenesDeCorazones);
}

function CantidadDeDiferencia(){
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

function CantidadDeDiferencia2(){
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
            alert(CorazonesDeVida());
        }
    }
}

function CantidadDeDiferencia3(){
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

function CantidadDeDiferencia4(){
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
            alert(CorazonesDeVida2());
        }
    }
}

function CantidadDeDiferencia5(){
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
            alert(CorazonesDeVida3());
        }
    }
}

function CantidadDeDiferencia6(){
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
            alert(CorazonesDeVida4());
        }
    }
}

function CantidadDeDiferencia7(){
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
            alert(CorazonesDeVida());
        }
    }
}

function FinDelJuego(){
    location.reload();
}