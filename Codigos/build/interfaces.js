function mostrarPersona(pPersona) {
    console.log(pPersona);
}
mostrarPersona({ nombre: 'Rosa', apellido: 'García', edad: 50 });
function mostrarCoche(pCoche) {
    console.log(`Marca: ${pCoche.marca}. Model: ${pCoche.modelo}`);
    if (pCoche.color) {
        console.log(`Color: ${pCoche.color}`);
    }
    else {
        console.log('El coche no tiene color');
    }
}
mostrarCoche({ marca: 'Mercedes', modelo: 'C180' });
mostrarCoche({ marca: 'Mercedes', modelo: 'Ty121', color: 'rojo' });
let p1 = { x: 121, y: 84 };
const miBusqueda = (v, b) => {
    const result = v.search(b);
    return result > -1;
};
console.log(miBusqueda('hola', 'ola'));
class Adulto {
    constructor(pNombre, pEdad, pCoche) {
        this.coche = pCoche;
        this.nombre = pNombre;
        this.edad = pEdad;
    }
}
class Nino {
}
