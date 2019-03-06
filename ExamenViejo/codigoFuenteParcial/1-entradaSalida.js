//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar() {
    var base = document.getElementById("lado").value;
    var perimetro;

    if (isNaN(base)) {
        alert("Eso no es un numero");

    } else {
        perimetro = 3 * base;

        alert("El perimetro de estre triangulo equilatero es: " + perimetro);
    }






}

