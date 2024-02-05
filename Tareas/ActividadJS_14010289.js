
var mes = parseInt(prompt("Ingresa el número del mes de nacimiento (1-12):"));

var dia = parseInt(prompt("Ingresa el número del día de nacimiento:"));

if (isNaN(mes) || isNaN(dia) || mes < 1 || mes > 12 || dia < 1 || dia > 31) {
    alert("Ingresa valores válidos para el mes y el día.");
} else {
    var signo;

    if ((dia <= 20 && mes == 1) || (dia <= 19 && mes == 2) || (dia <= 20 && mes == 3) || (dia <= 20 && mes == 4) ||
        (dia <= 21 && mes == 5) || (dia <= 21 && mes == 6) || (dia <= 22 && mes == 7) || (dia <= 23 && mes == 8) ||
        (dia <= 23 && mes == 9) || (dia <= 23 && mes == 10) || (dia <= 22 && mes == 11) || (dia <= 21 && mes == 12)) {
        signo = "Capricornio";
    } else {
        signo = "Acuario";
    }

    alert("Tu signo zodiacal es: " + signo);
}
