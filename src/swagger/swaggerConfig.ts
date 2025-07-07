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
	User,
} from "./schemas";


export const swaggerDefinition = {
	openapi: "3.0.0",
	info: {
		title: "Plantilla de API Next.js",        
		version: "1.0.0",
		description:
			"Una plantilla para crear APIs RESTful con Next.js, MongoDB y Swagger.",
	},
	servers: [
		{
			url: "http://localhost:3000/api",
			description: "Servidor de desarrollo",
		}
	],
	components: {
		schemas: {
			Item,
            ItemPostSuccess,
			User,

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
