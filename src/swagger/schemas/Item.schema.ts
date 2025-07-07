import { SchemaItemPostSuccessInterface, SchemaItemsInterface } from "@/Types/schemasTypes/itemInterface";

/**
 * Esquema que define la estructura de un objeto 'Item'.
 * Contiene todos los campos relevantes para un item, que se utilizan tanto para la creación como para la visualización.
 */
export const Item: SchemaItemsInterface = {
	type: "object",
	properties: {
		_id: {
			type: "string",
			description: "El ID único del elemento",
			example: "60c72b2f9b1e8b001c8e4d3a",
		},
		name: {
			type: "string",
			description: "El nombre del elemento nuevo",
			example: "Elemento de Ejemplo nuevo",
		},
		description: {
			type: "string",
			description: "La descripción del elemento",
			example: "Esta es una descripción de un elemento de ejemplo.",
		},
		phone: {
			type: "number",
			description: "numero de teléfono",
			example: "1234567890",
		},
		email: {
			type: "string",
			description: "El correo electrónico",
			example: "email@example.com",
		},
		gender: {
			type: "string",
			description: "El género",
			example: "masculino",
		},
		createdAt: {
			type: "string",
			format: "date-time",
			description: "La fecha de creación del elemento",
			example: "2023-01-01T00:00:00.000Z",
		},
		updatedAt: {
			type: "string",
			format: "date-time",
			description: "La fecha de la última actualización del elemento",
			example: "2023-01-01T00:00:00.000Z",
		},
	},
};

/**
 * Esquema para una respuesta exitosa al crear un 'Item'.
 * Devuelve el objeto del item recién creado, incluyendo el ID asignado por la base de datos y las fechas de creación/actualización.
 */
export const ItemPostSuccess: SchemaItemPostSuccessInterface = {
	type: "object",
	description: "Respuesta exitosa al crear un nuevo elemento",
	properties: {
		success: {
			type: "boolean",
			description: "Indica si la operación fue exitosa",
			example: true,
		},
		data: {
			type: "object",
			description: "El nuevo elemento creado",
			properties: {
				name: {
					type: "string",
					description: "El nombre del elemento nuevo",
					example: "Elemento de Ejemplo nuevo",
				},
				description: {
					type: "string",
					description: "La descripción del elemento",
					example:
						"Esta es una descripción de un elemento de ejemplo.",
				},
				phone: {
					type: "number",
					description: "Numero de teléfono",
					example: "123456789",
				},
				email: {
					type: "string",
					description: "El correo electrónico",
					example: "test@example.com",
				},
				gender: {
					type: "string",
					description: "El género de la persona",
					example: "masculino",
				},
				_id: {
					type: "string",
					description: "El ID único del elemento",
					example: "60c72b2f9b1e8b001c8e4d3a",
				},
				createdAt: {
					type: "string",
					format: "date-time",
					description: "La fecha de creación del elemento",
					example: "2023-01-01T00:00:00.000Z",
				},
				updatedAt: {
					type: "string",
					format: "date-time",
					description:
						"La fecha de la última actualización del elemento",
					example: "2023-01-01T00:00:00.000Z",
				},
			},
		},
	},
};
