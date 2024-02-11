# Servidor con Nodemailer

Este proyecto implementa un servidor utilizando Node.js y Express, con el propósito de gestionar correos electrónicos utilizando la librería Nodemailer.

## Requisitos

- Node.js instalado en tu sistema. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- Acceso a un servicio SMTP para enviar correos electrónicos (por ejemplo, Gmail).

## Configuración

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/servidor-nodemailer.git
```

2. Accede al directorio del proyecto:

```bash
cd servidor-nodemailer
```

3. Instala las dependencias del proyecto:

```bash
npm install
```

4. Crea un archivo `.env` en el directorio raíz del proyecto y agrega las siguientes variables de entorno:

```env
SMTP_HOST=tu-smtp-host
SMTP_PORT=tu-smtp-port
SMTP_USER=tu-smtp-usuario
SMTP_PASS=tu-smtp-contraseña
```

Asegúrate de reemplazar `tu-smtp-host`, `tu-smtp-port`, `tu-smtp-usuario` y `tu-smtp-contraseña` con la información de tu servidor SMTP.

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```bash
npm start
```

El servidor estará disponible en el puerto especificado en el archivo `.env` o en el puerto 3001 por defecto.

## Enviar correos electrónicos

Puedes enviar correos electrónicos haciendo una solicitud POST a la ruta `/send-email` con la siguiente estructura de datos:

```json
{
  "to": "destinatario@example.com",
  "subject": "Asunto del correo",
  "text": "Contenido del correo en formato texto"
}
```

## Contribución

Si encuentras algún problema o tienes alguna sugerencia, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

