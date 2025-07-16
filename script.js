const estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Pancho", edad: 22 },
    { nombre: "Pepe", edad: 21 },
    { nombre: "Patricio", edad: 19 },
    { nombre: "Micaela", edad: 18 }
];

/**
 * Función que simula obtener datos desde un servidor.
 * Utiliza setTimeout para simular una demora real.
 * Con async/await, esta función se puede usar de forma secuencial y más legible.
 */

async function obtenerDatos() {
    return new Promise((resolve, reject) => {
        console.log("Obteniendo datos del servidor...");
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve(estudiantes);
            } else {
                reject("Error al obtener los datos.");
            }
        }, 2000);
    });
}

/**
 * Función que filtra estudiantes cuyo nombre inicia con una letra específica.
 * También retorna una promesa y puede ser usada con await para evitar el anidamiento.
 */

async function filtrarPorNombreInicial(lista, letra) {
    return new Promise((resolve, reject) => {
        const resultado = lista.filter(est => est.nombre.startsWith(letra));
        if (resultado.length > 0) {
            resolve(resultado);
        } else {
            reject(`No se encontraron estudiantes que empiecen con la letra "${letra}".`);
        }
    });
}

module.exports = {
    obtenerDatos,
    filtrarPorNombreInicial
};
