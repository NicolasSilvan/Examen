//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var preciofinal = document.getElementById("importe").value;
    var importe = parseInt(prompt("Ingrese importe"));
    var iva;

    while (isNaN(preciofinal)) {
        prompt("Eso no es un numero. Ingrese un numero");
    }

    iva = importe + 21 / 100;
    preciofinal = importe + iva;



    document.getElementById("importe").value = preciofinal;
	

}

