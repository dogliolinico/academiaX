let saludo =`Hola Mundo!`
let persona = `Juan`;
let lista = [1,2,3,4,5];
let oracion = `La lluvia de Sevilla es una maravilla`;

console.log(saludo + ` Soy ` + persona);
console.log(`Mi nombre en mayuscula es : ` + persona.toUpperCase());
console.log(`El mensaje de `+ saludo + `tiene `+ saludo.length + ` caracteres`);
console.log(`El tecer numero del array con los valores 1,2,3,4,5 es : ` + lista[2]);
lista.push(6);
console.log(`se anade el numero que sigue en el orden al final del arreglo y es : ` + lista[5]);
let regex = /lluvia/;
console.log(`se encontro el patron 'lluvia' en el texto ';${oracion}' : ` + regex.test(oracion));