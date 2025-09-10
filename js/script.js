var intento = 0;
var numeroSecreto = 42;

do {
    intento = parseInt(prompt("adivina el numero (1-100)"));

     if( intento < numeroSecreto){
    alert("el numero es mas grande, intenta de nuevo");
    }
     else{
     if (intento > numeroSecreto){
        alert("el numero es mas pequeño, intenta de nuevo");
    }
} 
} while (intento !== numeroSecreto);
alert("¡¡¡¡adiviniste el numero,el numero secreto es 42!!!!!")
