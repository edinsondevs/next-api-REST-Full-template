import { Document } from "mongoose";

export interface IItem extends Document {
	name: string;
	description: string;
}

/**
 * Interfaz que representa un objeto de esquema de OpenAPI para un Item.
 * Basado en la especificación de OpenAPI 3.0.
 */
export interface SchemaItemsInterface {
	type: "object";
	properties: {
		[key: string]: {
			type: string;
			description?: string;
			example?: any;
			format?: string;
		};
	};
	description?: string;
}

/**
 * Interfaz para la respuesta exitosa de la creación de un Item (POST).
 */
export interface SchemaItemPostSuccessInterface {
	type: "object";
	description: string;
	properties: {
		success: {
			type: string;
			description: string;
			example: boolean;
		};
		data: SchemaItemsInterface;
	};
}

type ErrorTypes =
	| "Internal Server Error."
	| "Bad request."
	| "Data Not Found."
	| "Unauthorized."
	| "Forbidden.";

export interface ErrorInterface {
	type: "object";
	properties: {
		success: { type: string; example: boolean };
		error: {
			type: string;
			example?: {
				type: string;
				_errors?: string[];
				phone?: { type: string, _errors: string[] };
				email?: { type: string, _errors: string[] };
				gender?: { type: string, _errors: string[] };
			},
		};
	};
}
type SuccessTypes =
	| "Success"
	| "Item deleted successfully"
	| "Item created successfully"
	| "Item updated successfully";

export interface SuccessResponseInterface {
	type: "object";
	properties: {
		success: { type: string; example: boolean };
		message: { type: string; example: SuccessTypes };
		data?: { type: string; example: object };
	};
}

export interface ItemPostSuccessInterface {
	type: "object";
	properties: {
		success: {
			type: string;
			example: boolean;
		};
		data: {
			type: "object";
			example: {
				info: string;
			};
		};
	};
}
