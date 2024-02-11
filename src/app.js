// Importamos las librerías necesarias
const express = require('express');
const morgan = require('morgan');

// Creamos una instancia de la aplicación Express
const app = express();

// Utilizamos el middleware de Morgan con el formato 'dev' para el registro de solicitudes HTTP
app.use(morgan('dev'));

// Utilizamos el middleware integrado de Express para el manejo de datos en formato JSON
app.use(express.json());

// Definimos un middleware personalizado para configurar los encabezados CORS (Cross-Origin Resource Sharing)
app.use((req, res, next) => {
    // Configuramos los encabezados CORS para permitir solicitudes desde http://localhost:3001
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    // Configuramos los encabezados CORS para permitir credenciales en las solicitudes
    res.header('Access-Control-Allow-Credentials', 'true');
    // Configuramos los encabezados CORS para especificar los encabezados permitidos en las solicitudes
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // Configuramos los encabezados CORS para especificar los métodos HTTP permitidos en las solicitudes
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    // Llamamos a la función next() para pasar al siguiente middleware en la cadena de solicitud-respuesta
    next();
});

// Exportamos la aplicación Express para que pueda ser utilizada en otros archivos
module.exports = app;

