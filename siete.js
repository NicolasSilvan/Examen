function mostrar()
{
    var medida;
    var medidabaja;
    var medidatotal;
    var sexo;
    var sexomed;
    var promedio;
    var contador;

    for (i = 1; i <= 5; i ++) {
        medida = parseInt(prompt("Ingrese la altura en cm"));
        while (medida < 0 || medida > 250) {
            medida = prompt("Ingrese la altura valida");
        }

        sexo = prompt ("Ingrese el sexo");
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Ingrese sexo valido");
        }
        medidatotal = medidatotal + medida;

        if (i == 1 || medida < medidabaja) {
            medidabaja = medida
            sexomed = sexo;
        }
        if (medida >= 190 || sexo == "f") {
            contador++;
        }
    }
    promedio = medidatotal / 5;
    alert ("El promedio de las alturas es " + promedio);
    alert ("El mas bajo es " + medidabaja + " de sexo " + sexomed);
    alert ("Hay " + contador + " mujeres que superan los 190cm");
    
}
