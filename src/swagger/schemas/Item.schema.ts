export const Item = {
	type: "object",
	properties: {
		_id: {
			type: "string",
			description:
				"El ID autogenerado del elemento Ejemplo: 60c72b2f9b1d8c001f8e4d2a",
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
