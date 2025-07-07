// schemas/itemSchema.ts
import { z } from "zod";

export const itemSchema = z.object({
	name: z.string().min(1, "Please provide a name for this item.").max(60),
	description: z
		.string()
		.min(1, "Please provide a description for this item.")
		.max(200),
	phone: z
		.number({ invalid_type_error: "Phone must be a number" })
		.refine((val) => val.toString().length <= 20, {
			message: "Phone number cannot be more than 20 characters",
		}),
	email: z.string().email("Please provide a valid email").max(200),
	gender: z.string().min(1, "Please provide the gender.").max(9),
});
