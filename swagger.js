const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Plantilla de API Next.js',
      version: '1.0.0',
      description: 'Una plantilla para crear APIs RESTful con Next.js, MongoDB y Swagger.',
    },
    components: {
        schemas: {
            Item: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        description: 'El ID autogenerado del elemento',
                        example: '60c72b2f9b1d8c001f8e4d2a'
                    },
                    name: {
                        type: 'string',
                        description: 'El nombre del elemento',
                        example: 'Elemento de Ejemplo'
                    },
                    description: {
                        type: 'string',
                        description: 'La descripción del elemento',
                        example: 'Esta es una descripción de un elemento de ejemplo.'
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'La fecha de creación del elemento',
                        example: '2023-01-01T00:00:00.000Z'
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'La fecha de la última actualización del elemento',
                        example: '2023-01-01T00:00:00.000Z'
                    }
                }
            }
        }
    }
  },
  apis: ['./src/pages/api/**/*.ts'], // Ruta a la documentación de la API
};

module.exports = swaggerJsdoc(options);