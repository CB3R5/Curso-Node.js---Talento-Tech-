Pre-Entrega Proyecto Node.js / Backend - Talento Tech

Gestión de Productos

Aplicación desarrollada con Node.js que permite consultar, crear y eliminar productos mediante comandos ejecutados desde la terminal, utilizando la API de FakeStore.

Requisitos

- Node.js 18 o superior.
- npm (incluido con Node.js).
- Conexión a Internet.

Instalación

1. Descargar o clonar el proyecto.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar el siguiente comando:

npm install

Uso del programa

Para ejecutar las operaciones se utiliza "npm run start", seguido del método HTTP y los parámetros correspondientes.

1. Consultar todos los productos

npm run start GET products

Muestra todos los productos disponibles en la API.

2. Consultar un producto por ID

npm run start GET products/15

Muestra la información del producto con ID 15.

3. Crear un producto

npm run start POST products Remera 300 ropa

Envía los datos del producto a la API y muestra la respuesta obtenida.

4. Eliminar un producto

npm run start DELETE products/7

Realiza una solicitud para eliminar el producto con ID 7.

Tecnologías utilizadas

- Node.js: ejecución de JavaScript desde la terminal.
- JavaScript: lógica del programa.
- Fetch API: realización de peticiones HTTP.
- FakeStore API: API utilizada para gestionar productos de prueba.
- ESModules: organización de módulos JavaScript.

Consideraciones

FakeStore API es una API de prueba. Las operaciones POST y DELETE son simuladas y no modifican permanentemente los productos almacenados.

Autor

Leonel Cabral
