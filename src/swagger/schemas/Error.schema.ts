export const Error400 = {
	type: "object",
	properties: {
		success: { type: "boolean", example: false },
		error: {
			type: "string",
			example:
				"Bad request. User ID must be an integer and larger than 0",
		},
	},
};

export const Error404 = {
	type: "object",
	properties: {
		success: { type: "boolean", example: false },
		error: {
			type: "string",
			example: "Data Not Found.",
		},
	},
};
