
// const swaggerJsdoc = require('next-swagger-doc');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Next.js API Template',
      version: '1.0.0',
      description: 'A template for creating RESTful APIs with Next.js, MongoDB, and Swagger.',
    },
    components: {
        schemas: {
            Item: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        description: 'The auto-generated id of the item',
                        example: '60c72b2f9b1d8c001f8e4d2a'
                    },
                    name: {
                        type: 'string',
                        description: 'The name of the item',
                        example: 'Sample Item'
                    },
                    description: {
                        type: 'string',
                        description: 'The description of the item',
                        example: 'This is a sample item description.'
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'The date the item was created',
                        example: '2023-01-01T00:00:00.000Z'
                    },
                    updatedAt: {
                        type: 'string',
                        format: 'date-time',
                        description: 'The date the item was last updated',
                        example: '2023-01-01T00:00:00.000Z'
                    }
                }
            }
        }
    }
  },
  apis: ['./src/pages/api/**/*.ts'], // Path to the API docs
};

module.exports = swaggerJsdoc(options);
