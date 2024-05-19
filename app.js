const persona = {
    nombre: 'Luis',
    apellido: 'Cerna',
    edad: 34,
    telefono: '123456789',
    documento : {
        tipoDoc: 'DNI',
        nroDoc: '12345678'
    },
}

// Acceder a las propiedades del objeto y mostrarlas 
console.log(`Datos de la persona:\n Nombre: ${persona.nombre}\n Apellido: ${persona.apellido}\n Edad: ${persona.edad}\n Telefono: ${persona.telefono}\n Tipo de Documento: ${persona.documento.tipoDoc}\n Documento: ${persona.documento.nroDoc}`);

// Agregar propiedades al objeto
persona.pais = 'Peru';
persona.ciudad = 'Lima';

// Eliminar propiedades del objeto
delete persona.telefono;

// Destructuracion de un objeto
const {nroDoc, tipoDoc} = persona.documento;
console.log(`Tipo de Documento: ${tipoDoc}\n Documento: ${nroDoc}`);

// Congelar el objeto. Este metodo previene que las propiedades del objeto puedan ser modificadas o eliminadas
//Object.freeze(persona);

// Sellar el objeto. Este metodo previene que puedan agregarse o eliminarse propiedades a un objeto pero si permite modificar sus propiedades existentes
//Object.seal(persona);


// Primero crearemos un segundo objeto (persona2)
const persona2 = {
    nombre: 'Mateo',
    apellido: 'Cuevas',
    edad: 25,
    telefono: '987654321',
    documento : {
        tipoDoc: 'DNI',
        nroDoc: '12345678'
    },
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
}

// Luego unimos los dos objetos con el metodo assign en un nuevo objeto (newPersona)
const newPersona = Object.assign(persona, persona2);

// Utilizando el operador spread
const newPersona2 = {...persona, ...persona2};

console.log(persona2.getFullName());

// El metodo keys nos permite obtener todas las propiedades de un objeto
console.log(Object.keys(persona));
// El metodo values nos permite obtener todos los valores de las propiedades de un objeto
console.log(Object.values(persona));
// El metodo entries nos permite obtener las propiedades y valores de un objeto
console.log(Object.entries(persona));
