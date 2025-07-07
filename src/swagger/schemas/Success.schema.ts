import { ItemPostSuccessInterface, SuccessResponseInterface } from "@/Types/schemasTypes/itemInterface";

/**
 * Esquema para una respuesta exitosa con estado 201 (Creado).
 * Usado típicamente después de que un nuevo recurso ha sido creado.
 */
export const Success201: SuccessResponseInterface = {
	type: "object",
	properties: {
		success: { type: "boolean", example: true },
		message: { type: "string", example: "Success" },
		data: { type: "object", example: {} },
	},
};

/**
 * Esquema para una respuesta exitosa con estado 200 (OK).
 * Contiene un objeto de datos con información.
 */
export const Success200: ItemPostSuccessInterface = {
	type: "object",
	properties: {
		success: { type: "boolean", example: true },
		data: {
			type: "object",
			example: {
				info: "Item deleted successfully",
			},
		},
	},
};

/**
 * Esquema para una respuesta exitosa con estado 204 (Sin Contenido).
 * Usado cuando una acción (como eliminar) es exitosa pero no hay contenido para devolver.
 */
export const Success204: SuccessResponseInterface = {
	type: "object",
	properties: {
		success: { type: "boolean", example: true },
		message: { type: "string", example: "Item deleted successfully" },
	},
};