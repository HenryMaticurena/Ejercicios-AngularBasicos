// Boolean
let esValido: boolean = true;
esValido = false;

// Number
let edad: number = 12;

// String
let nombre: string = 'Henry';
let apellido: string = 'Maticurena';

let nombre_completo: string = `${nombre} ${apellido}`;

// Array
let numeros: number[] =[12,3,4,5,6,7];
let numeros2: Array<number> = [3,1,65,2];

// Tupla
let sitio: [string,number] = ['casa',28008];

// Enum
enum Estado {
    Offline = -1,
    Indefinido = 0,
    Online = 1
}

let stat: Estado = Estado.Online;
console.log(stat);

// Unknown
//para informacion externa que se obtenga y no se sepa de que es 
let sinTipo: unknown = 'Hola';
sinTipo = 32;
sinTipo = true;

let nuevaCadena: string = 'esto es otra cadena';
// nuevaCadena = sinTipo; esto no se puede hacer

// Any
let tipoindefinido: any = 'esto es un mensaje';
nuevaCadena = tipoindefinido;

// Void
function logger(): void{
    console.log('Logger');
}

