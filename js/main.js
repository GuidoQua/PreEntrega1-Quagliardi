
//Variables

let sueldo = Number(prompt("Ingrese su sueldo mensual (solo números):"));
let supermercado = Number(prompt("Ingrese el gasto mensual en supermercados (solo números):"));
let impuestos = Number(prompt("Ingrese el gasto mensual en impuestos (solo números):"));
let alquiler = Number(prompt("Ingrese el gasto mensual en alquiler (solo números):"));
let otros = Number(prompt("Ingrese el gasto mensual de cualquier otra actividad que realice (solo números):"));
let totalGastos = (supermercado + impuestos + alquiler + otros);
let totalAhorros = (sueldo - + totalGastos);

//Function

function calcularInvertir(){

    if (totalGastos < sueldo) {
        alert(`Usted tiene una capacidad mesual de ahorro de $${totalAhorros}`);
    } else if (totalGastos > sueldo) {
        alert(`Usted no tiene capacidad de ahorro, sus números son negativos $${totalAhorros}`);
    } else {
        alert(`Usted llega con lo justo a fin de mes, su capacidad de ahorro es $0`);
    }

    if (totalAhorros > 0) {
        let credito = prompt(`Le gustaría poner sus ahorros en un plazo fijo?
        Ingrese el Nº 1 si su respuesta es SÍ
        Ingrese el Nº 2 si su respuesta es NO`);
        switch (credito) {
            case "1":
                let meses = Number(prompt("El interes es del 6% mensual, ingrese la cantidad de meses del plazo fijo (solo números):"));
                let intereses = (totalAhorros * 0.06 * meses);
                let totalPlazoFijo = (totalAhorros + intereses);
                alert(`El interes generado es $${intereses.toFixed(2)} el total que recibirá es $${totalPlazoFijo.toFixed(2)} en un plazo de ${meses} meses`);
                alert("Gracias por confiar en nosotros. Hasta la próxima!")
                break;
            case "2":
                alert("Gracias por visitarnos, hasta la próxima!");
                break;
            default:
                alert("Opción no válida, vuelva a intentarlo");
                break;
        }
    } else {
        alert("Gracias por visitarnos, hasta la próxima!");
    }
}