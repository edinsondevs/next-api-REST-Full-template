export const Success201 = {
	type: "object",
	properties: {
		success: { type: "boolean", example: true },
		message: { type: "string", example: "Success" },
		data: { type: "object", example: {} },
	},
};
export const Success200 = {
    type: "object",
    properties: {
        success: { type: "boolean", example: true },
        data: { type: "object", example: { 
            info: "Item deleted successfully"
        } },
    },
};
export const Success204 = {
    type: "object",
    properties: {
        success: { type: "boolean", example: true },
        message: { type: "string", example: "Item deleted successfully" },
    },
};