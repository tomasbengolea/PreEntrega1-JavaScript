let nombre = prompt("Biennvenido a Burger World!! Porfavor, ingrese su nombre:");
let apellido = prompt("Porfavor, ingrese su apellido:");
alert(`Perfecto ${nombre} ${apellido}, ya esta todo listo para que empiece su pedido!! `);

let usuarioHamburguesa;
let usuarioPapas;
let usuarioBebida;

function comida() {
    while(true) {
        let tipoHamburguesa = prompt("Seleccione el tipo de Hamburguesa que desea. Recuerde que hay disponible: Simple, Doble y Triple.").toLowerCase();

        if(tipoHamburguesa === "simple" || tipoHamburguesa === "doble" || tipoHamburguesa === "triple") {
            alert(`Eleccion valida. Usted a elejido la opcion ${tipoHamburguesa}`);
            usuarioHamburguesa = tipoHamburguesa;
            break;
        } else {
            alert("Seleccion no reconocida. Porfavor, intentelo de nuevo.");
        }
    }
}

function guarnicion() {
    while(true) {
        let tipoPapas = prompt("Seleccione el tamaño de Papas que desea. Recuerde que hay disponible: Pequeño, Mediano y Grande.").toLowerCase();

        if(tipoPapas === "pequeño" || tipoPapas === "mediano" || tipoPapas === "grande") {
            alert(`Eleccion valida. Usted a elejido la opcion ${tipoPapas}`);
            usuarioPapas = tipoPapas;
            break;
        } else {
            alert("Seleccion no reconocida. Porfavor, intentelo de nuevo.");
        }
    }
}

function bebida() {
    while(true) {
        let tipoBebida = prompt("Seleccione el tipo de Bebida que desea. Recuerde que hay disponible: Agua, CocaCola y Sprite.").toLowerCase();

        if(tipoBebida === "agua" || tipoBebida === "cocacola" || tipoBebida === "sprite") {
            alert(`Eleccion valida. Usted a elejido la opcion ${tipoBebida}`);
            usuarioBebida = tipoBebida;
            break;
        } else {
            alert("Seleccion no reconocida. Porfavor, intentelo de nuevo.");
        }
    }
}

function simuladorMenu() {
    comida();
    guarnicion();
    bebida();

    alert(`Hola ${nombre}, el resumen de tu pedido es el siguiente: Usted ordeno una hamburguesa ${usuarioHamburguesa}, el tamaño de sus papas es ${usuarioPapas} y su bebida es ${usuarioBebida}. Gracias por su compra!!`);
}

simuladorMenu();
