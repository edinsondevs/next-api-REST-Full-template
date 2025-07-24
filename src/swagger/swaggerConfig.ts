import {
	Error400,
	Error401,
	Error403,
	Error404,
	Error500,
	Item,
	ItemPostSuccess,
	Success200,
	Success201,
	Success204,
} from "./schemas";

/**
 * Definición principal de la configuración de Swagger (OpenAPI).
 * Contiene la información general de la API (título, versión, descripción),
 * la configuración de los servidores y los componentes reutilizables como los esquemas.
 */

export const swaggerDefinition = {
	openapi: "3.0.0",
	info: {
		title: "CRUD creado en Next.js y API Routes ",
		version: "1.0.0",
		description:
			"APIs RESTful con Next.js, Jest, MongoDB, Mongoose y Swagger.",
	},
	servers: [
		{
			url: "api/",
			description: "URL de la base de datos MongoDB",
		},
	],
	components: {
		schemas: {
			Item,
			ItemPostSuccess,

			// Mensajes Genericos de exito
			Success200,
			Success201,
			Success204,
			// Mensajes Genericos de error
			Error400,
			Error401,
			Error403,
			Error404,
			Error500,
		},
	},
};
