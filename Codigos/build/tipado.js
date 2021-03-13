// Boolean
let esValido = true;
esValido = false;
// Number
let edad = 12;
// String
let nombre = 'Henry';
let apellido = 'Maticurena';
let nombre_completo = `${nombre} ${apellido}`;
// Array
let numeros = [12, 3, 4, 5, 6, 7];
let numeros2 = [3, 1, 65, 2];
// Tupla
let sitio = ['casa', 28008];
// Enum
var Estado;
(function (Estado) {
    Estado[Estado["Offline"] = -1] = "Offline";
    Estado[Estado["Indefinido"] = 0] = "Indefinido";
    Estado[Estado["Online"] = 1] = "Online";
})(Estado || (Estado = {}));
let stat = Estado.Online;
console.log(stat);
// Unknown
//para informacion externa que se obtenga y no se sepa de que es 
let sinTipo = 'Hola';
sinTipo = 32;
sinTipo = true;
let nuevaCadena = 'esto es otra cadena';
// nuevaCadena = sinTipo; esto no se puede hacer
// Any
let tipoindefinido = 'esto es un mensaje';
nuevaCadena = tipoindefinido;
// Void
function logger() {
    console.log('Logger');
}
