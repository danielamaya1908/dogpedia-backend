Dogpedia Backend
Descripción del Proyecto
Dogpedia es un backend desarrollado con Node.js, TypeScript y MongoDB que permite la gestión de razas de perros. El proyecto incluye funcionalidades CRUD para crear, leer, actualizar y eliminar razas de perros, así como la capacidad de sincronizar datos desde una API externa. El backend también implementa paginación para optimizar la visualización de datos.

Funcionalidades
CRUD de Razas de Perros: Operaciones para crear, leer, actualizar y eliminar razas de perros en la base de datos.
Consumo de API Externa: Sincronización de razas de perros desde la API pública de The Dog API.
Paginación: Implementación de paginación para obtener razas de perros en diferentes páginas.
Búsqueda y Filtrado: Búsqueda por nombre y filtrado por temperamento.
Tecnologías Utilizadas
Node.js: Entorno de ejecución para construir el backend.
TypeScript: Superconjunto de JavaScript que añade tipado estático.
Express: Framework web para Node.js.
MongoDB: Base de datos NoSQL utilizada para almacenar las razas de perros.
Mongoose: ODM (Object Data Modeling) para MongoDB y Node.js.
Axios: Cliente HTTP para realizar solicitudes a la API externa.
Cors: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
Requisitos Previos
Antes de empezar, asegúrate de tener instalados los siguientes programas en tu sistema:

Node.js: Descargar e instalar Node.js
MongoDB: Descargar e instalar MongoDB
Configuración del Proyecto
Clona el Repositorio:

bash
Copiar código
git clone https://github.com/danielamaya1908/dogpedia-backend.git
cd dogpedia-backend
Instala las Dependencias:

Asegúrate de estar en el directorio del proyecto y luego ejecuta:

bash
Copiar código
npm install
Configura las Variables de Entorno:

Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

env
Copiar código
MONGO_URI=mongodb://127.0.0.1:27017/dogpedia
API_KEY=live_iJzSEKvlHObcW6689LY7yT97Mr8uS7CpTnIUMCKS0oQL6pDysLIehU6ar1NC8FKy
API_URL=https://api.thedogapi.com/v1/breeds
MONGO_URI: URL de conexión a MongoDB.
API_KEY: Clave API para acceder a The Dog API.
API_URL: URL para obtener las razas de perros.
Ejecuta el Proyecto en Modo Desarrollo:

bash
Copiar código
npm run dev
El servidor se ejecutará en http://localhost:3000.

Endpoints
1. Crear una Raza de Perro
POST /api/dogbreeds

json
Copiar código
{
  "name": "Golden Retriever",
  "image": "https://linktoimage.com/golden.jpg",
  "temperament": "Friendly, Intelligent",
  "lifeExpectancy": "10-12 years",
  "weight": "25-34 kg",
  "height": "51-61 cm"
}
2. Obtener Todas las Razas de Perros con Paginación y Búsqueda
GET /api/dogbreeds

Parámetros opcionales: page, limit, searchTerm, selectedFilter.
3. Obtener una Raza de Perro por ID
GET /api/dogbreeds/
4. Actualizar una Raza de Perro por ID
PUT /api/dogbreeds/

json
Copiar código
{
  "name": "Labrador Retriever",
  "image": "https://linktoimage.com/labrador.jpg",
  "temperament": "Gentle, Friendly",
  "lifeExpectancy": "10-14 years",
  "weight": "25-36 kg",
  "height": "55-62 cm"
}
5. Eliminar una Raza de Perro por ID
DELETE /api/dogbreeds/
6. Sincronizar Razas de Perros desde la API Externa
GET /api/sync

Este endpoint obtiene datos de razas de perros desde The Dog API y los guarda en la base de datos de MongoDB.

Despliegue
Si decides desplegar este proyecto, asegúrate de configurar correctamente las variables de entorno en la plataforma de alojamiento y de tener una instancia de MongoDB accesible.

Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para mejoras o correcciones.

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

Contacto
Para cualquier consulta o sugerencia, por favor contacta a danijcdm.com@gmail.com.