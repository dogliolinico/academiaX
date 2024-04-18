let lista = [1,2,3,4,5]

for(i = 0; i < lista.length; i++){
    console.log(lista[i])
}

console.log('-------------------')

let colores = ['rojo', 'verde', 'azul', 'amarillo', 'naranja']

for (color in colores){
    console.log(colores[color])
}

console.log('-------------------')

let persona = {
    nombre : `Maria`,
    edad : 27,
    profesion: `diseñadora`
}

for (dato in persona){
    console.log(dato +` : ` +persona[dato])
}

console.log('-------------------')

let z = 1;

while ((z * z) < 100){
    
    z++
}
console.log('El numero mas cercano a 100 cuyo cuadrado es menor que 100 es: ' + z)
console.log('-------------------') 

let par=0;
do{
    par++;
    if(par % 2 === 0){
    console.log(par);
    };
    }while(par <= 10);