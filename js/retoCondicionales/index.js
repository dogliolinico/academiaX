let edad =18;

if (edad >= 18){
    console.log("Eres mayor de edad");

} else {
    console.log("Eres menor de edad");
}

let accion = `crear`


switch (accion){
    case `armar`:
        console.log(`Estas armando un nuevo proyecto`);
        break;
    case `crear`:
        console.log(`Estas creando un nuevo proyecto`);
        break;
    case `destruir`:
        console.log(`Estas destruyendo un proyecto`);
        break;
    default:
        console.log(`No estas haciendo nada`);
        break;
}

let numero = 50%2 == 0 ? `El numero ingresa es par` : `El numero ingresado es  impar`;
console.log(numero);
