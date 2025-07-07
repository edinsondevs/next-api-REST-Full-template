import swaggerJsdoc from "swagger-jsdoc";
import { swaggerDefinition } from "./swaggerConfig";

/**
 * Opciones de configuración para swagger-jsdoc.
 * Define la estructura de la documentación y especifica dónde encontrar los comentarios de la API.
 * @property {object} definition - La definición base de OpenAPI.
 * @property {string[]} apis - Un array de patrones glob para localizar los archivos con anotaciones de Swagger.
 */
const options = {
	definition: swaggerDefinition,
	apis: ["./src/pages/api/**/*.ts"], // Ajusta según tu estructura
};

/**
 * Especificación de Swagger generada por swagger-jsdoc.
 * Esta especificación se basa en las opciones definidas y se utiliza para renderizar la UI de Swagger.
 */
const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
