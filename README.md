

# Pizza House Master

¡Bienvenidos a Pizza House Master, mi proyecto personal en el que he estado trabajando con pasión para brindarte la mejor experiencia culinaria! 



## Descripción

Pizza House Master es una plataforma de gestión y reservas para un restaurante especializado en pizzas. He creado esta aplicación con el objetivo de ofrecer a los amantes de la pizza una experiencia única al explorar nuestro menú, realizar pedidos en línea y reservar mesas para disfrutar de una deliciosa comida.

## Estructura del Proyecto

Mi proyecto se divide en dos partes:

### Backend

En la carpeta `/backend`, encontrarás todo el código del servidor backend. Aquí manejo la lógica de negocio y la gestión de datos, utilizando tecnologías como Node.js, Express.js, MongoDB, Mongoose y Nodemailer. ¡Todo para garantizar que tu experiencia sea excepcional!

### Frontend

La carpeta `/frontend` contiene el código del cliente frontend. Está construido en React, y utilizo React Router para la navegación. También he trabajado en los estilos CSS y en la configuración de las rutas en React Router para que la aplicación sea atractiva y fácil de usar.

## Tecnologías Utilizadas

Mi proyecto utiliza una variedad de tecnologías para brindarte la mejor experiencia:

- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Nodemailer, etc.
- **Frontend**: React, React Router, CSS, Axios, etc.

## Rutas y Funcionalidades

### Clientes

- `/api/clientes`: Los clientes pueden registrarse y gestionar su información personal. Es aquí donde pueden crear y actualizar sus perfiles de cliente. Este endpoint se utiliza para administrar la información de los clientes.

### Pedidos

- `/api/pedidos`: Esta ruta permite a los clientes realizar pedidos en línea. Aquí pueden crear nuevos pedidos y consultar sus pedidos anteriores. Utilizamos este endpoint para gestionar pedidos y su historial.

### Fiestas

- `/api/fiestas`: Mantente al tanto de nuestras próximas fiestas y eventos especiales. ¡Es la forma perfecta de planear tu próxima visita! Utilizamos este endpoint para anunciar eventos.

### Mesas

- `/api/mesas`: ¿Necesitas reservar una mesa para disfrutar de tu comida? Esta ruta te permite hacerlo. También puedes verificar la disponibilidad de mesas aquí. Utilizamos este endpoint para gestionar mesas y reservas.

### Pizzas

- `/api/pizzas`: ¿Te encantan las pizzas? Aquí encontrarás información detallada sobre todas las pizzas disponibles en nuestro menú. ¡Explora las opciones y prepárate para pedir tu favorita! Este endpoint proporciona detalles sobre las pizzas en el menú.

### Productos

- `/api/productos`: Explora todos los productos disponibles, incluyendo bebidas y otros complementos. Esta ruta muestra información sobre los productos disponibles.

### Reservas

- `/api/reservas`: ¿Quieres reservar una mesa para una ocasión especial? Esta ruta te permite hacerlo. También puedes confirmar tus reservas aquí. Utilizamos este endpoint para gestionar reservas de mesa.

### Tragos

- `/api/tragos`: Si te gustan los tragos y las bebidas, esta es la ruta para ti. Muestra todas las bebidas disponibles en nuestro restaurante. Utilizamos este endpoint para mostrar bebidas en el menú.

### Turnos

- `/api/turnos`: Esta ruta se encarga de la gestión de turnos y horarios. Los clientes pueden verificar la disponibilidad de horarios y programar sus visitas. Utilizamos este endpoint para gestionar turnos.

## Documentación de Swager 

-  En el siguiente link podrás ver la documentación de cada uno de los endpoints funcionales http://localhost:8000/api-docs/

## Base de Datos

¡Nuestra base de datos es la columna vertebral de Pizza House Master! Puedes echar un vistazo al diagrama de la base de datos aquí:

![Diagrama de Base de Datos](inserta_aquí_la_ruta_de_la_imagen_de_la_base_de_datos.png)

## Modelo de Negocio

En Pizza House Master, nuestro modelo de negocio se enfoca en brindar la mejor experiencia culinaria posible. Algunos aspectos clave de nuestro modelo de negocio incluyen:

- **Pedidos en Línea**: Ofrecemos a nuestros clientes la comodidad de realizar pedidos en línea de manera rápida y

 sencilla.

- **Reservas de Mesa**: Para ocasiones especiales o reuniones familiares, nuestros clientes pueden reservar mesas con anticipación.

- **Variedad en el Menú**: Tenemos una amplia variedad de pizzas y bebidas para satisfacer todos los gustos.

- **Entrega a Domicilio**: Si prefieres disfrutar nuestras pizzas en casa, ofrecemos un servicio de entrega a domicilio confiable.

- **Eventos y Promociones**: Mantenemos a nuestros clientes informados sobre eventos especiales y promociones a través de nuestra plataforma en línea.

- **Personal de Calidad**: Contamos con un equipo de empleados dedicados que se esfuerzan por brindar un excelente servicio al cliente.

## Diseño y Maquetación

Nuestra interfaz de usuario ha sido diseñada cuidadosamente para brindarte una experiencia visualmente atractiva y fácil de usar. Puedes ver el diseño detallado en [nuestro diseño en Figma](https://www.figma.com/file/F0zlls7Xjw0atwuKNK3bwa/Untitled?type=design&node-id=0%3A1&mode=design&t=L3iBonoz1d5Zt1hx-1).


## Clonar el Repositorio

Si deseas trabajar en este proyecto o explorarlo, sigue estos pasos para clonar el repositorio en tu máquina local:

1. Abre tu terminal (en tu computadora o en la máquina virtual en la nube donde desees clonar el repositorio).

2. Ejecuta el siguiente comando para clonar el repositorio:

-git clone  `<URL_DEL_REPOSITORIO>`

Sustituye `<URL_DEL_REPOSITORIO>` por la URL del repositorio de GitHub. La encontrarás en la página del repositorio, en el botón verde "Code".

3. Una vez que se haya completado la clonación, navega al directorio del proyecto:

- cd Pre-filtro-Edwing

## Descargar Dependencias

Asegúrate de que tienes [Node.js](https://nodejs.org/) instalado en tu sistema antes de continuar. Luego, sigue estos pasos para descargar las dependencias del proyecto:

1. Abre la terminal y asegúrate de estar en la raíz del proyecto (donde se encuentra el archivo `package.json`).

2. Ejecuta el siguiente comando para instalar las dependencias del backend:

3. Después, navega al directorio de la aplicación frontend. Puedes hacerlo con el siguiente comando:

- cd frontend

4. En el directorio `frontend`, ejecuta el siguiente comando para instalar las dependencias del frontend:

- npm i 

## Iniciar los Servidores

Una vez que hayas clonado el repositorio y descargado las dependencias, puedes iniciar los servidores del backend y del frontend:

### Servidor del Backend

1. Asegúrate de estar en la raíz del proyecto (donde se encuentra el archivo `package.json` del backend).

2. Ejecuta el siguiente comando para iniciar el servidor del backend:

- npm run dev

El servidor del backend se iniciará y estará listo para recibir solicitudes en el puerto especificado (generalmente el puerto 8000).

### Servidor del Frontend

1. Navega al directorio del frontend si no lo has hecho ya:

- npm start

- El servidor del frontend se iniciará y abrirá automáticamente una ventana del navegador para mostrar la aplicación web. Generalmente, se ejecutará en el puerto 3000.

 - ¡Listo! Ahora deberías tener tanto el servidor del backend como el del frontend en funcionamiento y podrás explorar y trabajar en tu proyecto.

#   P r e - F i l t r o - E d w i n g  
 