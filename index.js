// Importamos la aplicación Express desde el archivo './src/app'
const app = require('./src/app');

// Definimos el puerto en el que escuchará el servidor, utilizando el puerto proporcionado por la variable de entorno PORT si está definida, de lo contrario, utilizamos el puerto 3001 como valor predeterminado.
const PORT = process.env.PORT || 3001;


// Iniciamos el servidor y lo configuramos para escuchar en el puerto definido
app.listen(PORT, () => {
    // Imprimimos un mensaje en la consola para indicar que el servidor está escuchando en el puerto especificado
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
