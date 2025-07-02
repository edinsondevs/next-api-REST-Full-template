# Plantilla de API Next.js

Esta es una plantilla robusta y escalable diseñada para la creación rápida de APIs RESTful utilizando el framework Next.js. Se integra perfectamente con MongoDB para la gestión de datos y ofrece una documentación interactiva de la API a través de Swagger UI, lo que facilita tanto el desarrollo como el consumo de los servicios. El proyecto está estructurado para proporcionar una base sólida para cualquier aplicación backend, permitiendo a los desarrolladores centrarse en la lógica de negocio.

Proporciona una funcionalidad CRUD (Crear, Leer, Actualizar, Eliminar) completa para un modelo genérico de "Artículo", y una página de documentación interactiva lista para usar.

## Características

- **Rutas de API de Next.js**: API de backend construida completamente dentro del framework Next.js, aprovechando sus capacidades de enrutamiento y renderizado del lado del servidor para un rendimiento óptimo.
- **Integración con MongoDB**: Utiliza Mongoose, una potente biblioteca de modelado de objetos para MongoDB, que simplifica las interacciones con la base de datos y garantiza la consistencia de los datos.
- **Documentación Swagger/OpenAPI**: Documentación interactiva de la API impulsada por Swagger UI, que permite a los desarrolladores explorar, entender y probar los endpoints de la API directamente desde el navegador.
- **TypeScript**: Código base completamente tipado, lo que mejora la mantenibilidad, la detección temprana de errores y la colaboración en equipos de desarrollo.
- **Configuración basada en el entorno**: Gestiona de forma segura tus cadenas de conexión a la base de datos y otras variables sensibles utilizando archivos `.env.local`, asegurando que la información confidencial no se exponga en el control de versiones.
- **Estructura de Proyecto Clara**: Organización lógica de archivos y carpetas para facilitar la navegación y el desarrollo.
- **Manejo de Errores**: Implementación básica de manejo de errores para respuestas de API consistentes.

## Primeros pasos

### Prerrequisitos

- Node.js (v16 o posterior)
- npm o yarn
- Una base de datos MongoDB (puedes obtener una gratuita en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/your-username/nextjs-api-template.git
   cd nextjs-api-template
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   Crea un archivo llamado `.env.local` en la raíz del proyecto y añade tu cadena de conexión a MongoDB:

   ```
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Ejecutar el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.

## Documentación de la API

Para ver la documentación interactiva de la API, navega a:

[http://localhost:3000/docs](http://localhost:3000/docs)

Esta página es generada por Swagger UI y proporciona una visión general detallada de todos los endpoints disponibles, sus parámetros y las respuestas esperadas. Incluso puedes probar la API directamente desde esta página.

## Endpoints de API disponibles

- `GET /api/items`: Obtener todos los artículos.
- `POST /api/items`: Crear un nuevo artículo.
- `GET /api/items/{id}`: Obtener un solo artículo por su ID.
- `PUT /api/items/{id}`: Actualizar un artículo por su ID.
- `DELETE /api/items/{id}`: Eliminar un artículo por su ID.

## Pruebas

El proyecto incluye pruebas unitarias para las rutas de la API, asegurando la funcionalidad y el comportamiento esperado de los endpoints. Las pruebas están configuradas con Jest y `node-mocks-http` para simular las solicitudes y respuestas HTTP.

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npm test
```

## Personalización

Para adaptar esta plantilla a tus propias necesidades, principalmente necesitarás:

1.  **Modificar el Modelo Mongoose**:
    -   Edita `src/models/Item.ts` para definir tu propio esquema de datos.

2.  **Actualizar los Endpoints de la API**:
    -   Cambia la lógica en `src/pages/api/items/` para que coincida con tu nuevo modelo.

3.  **Actualizar la Documentación de Swagger**:
    -   Modifica los comentarios JSDoc en los archivos de ruta de la API para reflejar tus cambios.
    -   Actualiza la definición del esquema en `swagger.js`.
