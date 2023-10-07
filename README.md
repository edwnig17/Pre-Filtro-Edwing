# Pizza House Master

¡Bienvenidos a Pizza House Master, mi proyecto personal en el que he estado trabajando con pasión para brindarte la mejor experiencia culinaria!

## Descripción

Pizza House Master es una plataforma de gestión y reservas para un restaurante especializado en pizzas. **Yo** he creado esta aplicación con el objetivo de ofrecer a los amantes de la pizza una experiencia única al explorar nuestro menú, realizar pedidos en línea y reservar mesas para disfrutar de una deliciosa comida.

## Estructura del Proyecto

**Mi** proyecto se divide en dos partes:

### Backend

En la carpeta `/backend`, encontrarás todo el código del servidor backend. Aquí se maneja la lógica de negocio y la gestión de datos, utilizando tecnologías como Node.js, Express.js, MongoDB, Mongoose y Nodemailer. ¡Todo para garantizar que tu experiencia sea excepcional!

### Frontend

La carpeta `/frontend` contiene el código del cliente frontend. Está construido en React, y se utiliza React Router para la navegación. También se ha trabajado en los estilos CSS y en la configuración de las rutas en React Router para que la aplicación sea atractiva y fácil de usar.

## Tecnologías Utilizadas

**Mi** proyecto utiliza una variedad de tecnologías para brindarte la mejor experiencia:

- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Nodemailer, etc.
- **Frontend**: React, React Router, CSS, Axios, etc.

## Rutas y Funcionalidades

Aquí tienes un resumen de las principales rutas y funcionalidades de la aplicación:

- `/api/clientes`: Los clientes pueden registrarse y gestionar su información personal.
- `/api/pedidos`: Los clientes pueden realizar pedidos en línea y consultar su historial de pedidos.
- `/api/fiestas`: Información sobre próximas fiestas y eventos especiales.
- `/api/mesas`: Reserva de mesas y verificación de disponibilidad.
- `/api/pizzas`: Información detallada sobre las pizzas disponibles en el menú.
- `/api/productos`: Explorar los productos disponibles, incluyendo bebidas y complementos.
- `/api/reservas`: Reservar mesas para ocasiones especiales y confirmar reservas.
- `/api/tragos`: Mostrar las bebidas disponibles en el menú.
- `/api/turnos`: Gestión de turnos y horarios.

## Documentación de Swagger

Puedes consultar la documentación de cada uno de los endpoints funcionales en el siguiente enlace: [Documentación de Swagger](http://localhost:8000/api-docs/)

## Base de Datos

Nuestra base de datos es la columna vertebral de Pizza House Master. Puedes echar un vistazo al diagrama de la base de datos en la siguiente imagen:

[![Pizza-bd-page-0001.jpg](https://i.postimg.cc/y8vQq9rH/Pizza-bd-page-0001.jpg)](https://postimg.cc/TK5qgy67)

## Modelo de Negocio

En Pizza House Master, nuestro modelo de negocio se enfoca en brindar la mejor experiencia culinaria posible. Algunos aspectos clave de nuestro modelo de negocio incluyen:

- Pedidos en Línea
- Reservas de Mesa
- Variedad en el Menú
- Entrega a Domicilio
- Eventos y Promociones
- Personal de Calidad

## Diseño y Maquetación

Nuestra interfaz de usuario ha sido diseñada cuidadosamente para brindarte una experiencia visualmente atractiva y fácil de usar. Puedes ver el diseño detallado en [nuestro diseño en Figma](https://www.figma.com/file/F0zlls7Xjw0atwuKNK3bwa/Untitled?type=design&node-id=0%3A1&mode=design&t=L3iBonoz1d5Zt1hx-1).

## Clonar el Repositorio

Si deseas trabajar en este proyecto o explorarlo, sigue estos pasos para clonar el repositorio en tu máquina local:

1. Abre tu terminal y ejecuta el siguiente comando para clonar el repositorio:

   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

   Sustituye `<URL_DEL_REPOSITORIO>` por la URL del repositorio de GitHub.

2. Navega al directorio del proyecto clonado:

   ```
   cd Pre-filtro-Edwing
   ```

## Descargar Dependencias

Asegúrate de tener Node.js instalado en tu sistema antes de continuar. Luego, sigue estos pasos para descargar las dependencias del proyecto:

1. En la terminal, asegúrate de estar en la raíz del proyecto (donde se encuentra el archivo `package.json`).

2. Ejecuta el siguiente comando para instalar las dependencias del backend:

   ```
   npm install
   ```

3. Navega al directorio del frontend:

   ```
   cd frontend
   ```

4. En el directorio `frontend`, ejecuta el siguiente comando para instalar las dependencias del frontend:

   ```
   npm install
   ```

## Iniciar los Servidores

Una vez que hayas clonado el repositorio y descargado las dependencias, puedes iniciar los servidores del backend y del frontend:

### Servidor del Backend

1. Asegúrate de estar en la raíz del proyecto (donde se encuentra el archivo `package.json` del backend).

2. Ejecuta el siguiente comando para iniciar el servidor del backend:

   ```
   npm run dev
   ```

   El servidor del backend se iniciará y estará listo para recibir solicitudes en el puerto especificado (generalmente el puerto 8000).

### Servidor del Frontend

1. Navega al directorio del frontend si no lo has hecho ya:

   ```
   cd frontend
   ```

2. Ejecuta el siguiente comando para iniciar el servidor del frontend:

   ```
   npm start
   ```

   El servidor del frontend se iniciará y abrirá automáticamente una ventana del navegador para mostrar la aplicación web. Generalmente, se ejecutará en el puerto 3000.

¡Listo! Ahora deberías tener tanto el servidor del backend como el del frontend en funcionamiento y podrás explorar y trabajar en tu proyecto.

