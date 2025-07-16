const estudiantes = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Lucía", edad: 21 },
    { nombre: "Pedro", edad: 19 },
    { nombre: "Laura", edad: 23 }
];

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
