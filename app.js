const { obtenerDatos, filtrarPorNombreInicial } = require('./script.js');

async function simularClickUsuario() {
    console.log("\n--- Evento: clic del usuario ---");

    try {
        const datos = await obtenerDatos();
        console.log("Datos obtenidos correctamente.");

        const filtrados = await filtrarPorNombreInicial(datos, "L");
        console.log("Datos filtrados:");
        console.table(filtrados);
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

setTimeout(() => {
    simularClickUsuario();
}, 1000);
