export const Error400 = {
	type: "object",
	properties: {
		success: { type: "boolean", example: false },
		error: {
			type: "string",
			example: "Bad request. ",
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

export const Error500 = {
	type: "object",
	properties: {
		success: { type: "boolean", example: false },
		error: {
			type: "string",
			example: "Internal Server Error.",
		},
	},
};

export const Error401 = {
	type: "object",
	properties: {
		success: { type: "boolean", example: false },
		error: {
			type: "string",
			example: "Unauthorized.",
		},
	},
};

export const Error403 = {
	type: "object",
	properties: {
		success: { type: "boolean", example: false },
		error: {
			type: "string",
			example: "Forbidden.",
		},
	},
};
