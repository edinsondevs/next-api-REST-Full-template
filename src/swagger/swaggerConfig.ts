// import { Item, User, Error400, Error404 } from "./schemas";

import { Error400, Error404 } from "./schemas/Error.schema";
import { Item } from "./schemas/Item.schema";

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
		},
		{
			url: "https://jsonplaceholder.typicode.com/",
			description: "Servidor de producción de Pruebas JSONPlaceholder",
		},
	],
	components: {
		schemas: {
			Item,
			// Users,
			Error400,
			Error404,
		},
	},
};
