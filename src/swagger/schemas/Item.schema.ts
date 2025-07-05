export const Item = {
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
export const ItemPostSuccess = {
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
