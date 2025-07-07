import { ErrorInterface } from "@/Types/schemasTypes/itemInterface";

/**
 * Esquema para una respuesta de error 400 (Bad Request).
 * Se utiliza cuando la solicitud del cliente es incorrecta o malformada.
 */
export const Error400: ErrorInterface = {
	type: "object",
	properties: {
		success: { type: "boolean", example: false },
		error: {
			type: "string",
			example: {
				type: "object",
				_errors: ["Data Not Found."],
				phone: {
					type: "object",
					_errors: ["Required"],
				},
				email: {
					type: "object",
					_errors: ["Required"],
				},
				gender: {
					type: "object",
					_errors: ["Required"],
				},
			},
		},
	},
};

/**
 * Esquema para una respuesta de error 404 (Not Found).
 * Se utiliza cuando el recurso solicitado no se puede encontrar.
 */
export const Error404: ErrorInterface = {
	type: "object",
	properties: {
		success: { type: "boolean", example: false },
		error: {
			type: "string",
			example: {
				type: "object",
				_errors: ["Data Not Found."],
				phone: {
					type: "object",
					_errors: ["Required"],
				},
				email: {
					type: "object",
					_errors: ["Required"],
				},
				gender: {
					type: "object",
					_errors: ["Required"],
				},
			},
		},
	},
};

/**
 * Esquema para una respuesta de error 500 (Internal Server Error).
 * Se utiliza para errores inesperados del lado del servidor.
 */
export const Error500: ErrorInterface = {
	type: "object",
	properties: {
		success: { type: "boolean", example: false },
		error: {
			type: "string",
			example: {
				type: "object",
				_errors: ["Data Not Found."],
				phone: {
					type: "object",
					_errors: ["Required"],
				},
				email: {
					type: "object",
					_errors: ["Required"],
				},
				gender: {
					type: "object",
					_errors: ["Required"],
				},
			},
		},
	},
};

/**
 * Esquema para una respuesta de error 401 (Unauthorized).
 * Se utiliza cuando se requiere autenticación para acceder al recurso.
 */
export const Error401: ErrorInterface = {
	type: "object",
	properties: {
		success: { type: "boolean", example: false },
		error: {
			type: "string",
			example: {
				type: "object",
				_errors: ["Data Not Found."],
				phone: {
					type: "object",
					_errors: ["Required"],
				},
				email: {
					type: "object",
					_errors: ["Required"],
				},
				gender: {
					type: "object",
					_errors: ["Required"],
				},
			},
		},
	},
};

/**
 * Esquema para una respuesta de error 403 (Forbidden).
 * Se utiliza cuando el cliente no tiene permisos para acceder al recurso.
 */
export const Error403: ErrorInterface = {
	type: "object",
	properties: {
		success: { type: "boolean", example: false },
		error: {
			type: "string",
			example: {
				type: "object",
				_errors: ["Data Not Found."],
				phone: {
					type: "object",
					_errors: ["Required"],
				},
				email: {
					type: "object",
					_errors: ["Required"],
				},
				gender: {
					type: "object",
					_errors: ["Required"],
				},
			},
		},
	},
};
