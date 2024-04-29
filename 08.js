function contarCaracteres(cadena) {
    
    let letras = cadena.match(/[a-zA-Z]/g).length || 0;
    let numeros = cadena.match(/\d/g).length || 0;
    let espacios = cadena.match(/\s/g).length || 0;

   
    return {
        letras: letras,
        numeros: numeros,
        espacios: espacios
    };
}


let texto = "Hoy es 30 de abril del 2024";
let resultado = contarCaracteres(texto);
console.log("Cantidad de letras:", resultado.letras);
console.log("Cantidad de números:", resultado.numeros);
console.log("Cantidad de espacios:", resultado.espacios);
