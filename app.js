const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//lugar.getLugarLatLon(argv.direccion)
//    .then(console.log);

//clima.getClima(3.030000, -75.169998)
//    .then(console.log);

const direccion = argv.direccion;
const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLatLon(direccion);
        const datosClima = await clima.getClima(coord.lat, coord.lon);
        return `El clima de ${coord.direccion} es ${datosClima.weather} y la temperatura es de ${datosClima.temp}°C.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);