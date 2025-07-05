import swaggerJsdoc from "swagger-jsdoc";
import { swaggerDefinition } from "./swaggerConfig";

const options = {
	definition: swaggerDefinition,
	apis: ["./src/pages/api/**/*.ts"], // Ajusta según tu estructura
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
