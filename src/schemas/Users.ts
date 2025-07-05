import { IUsers } from "@/Types/schemasTypes/usersInterface";
import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema(
	{
		id: { type: Number },
		name: { type: String, required: true },
		username: { type: String, required: true },
		email: { type: String, required: true },
		address: {
			street: { type: String, required: true },
			suite: { type: String, required: true },
			city: { type: String, required: true },
			zipcode: { type: String, required: true },
			geo: {
				lat: { type: String, required: true },
				lng: { type: String, required: true },
			},
		},
		phone: { type: String, required: true },
		website: { type: String, required: true },
		company: {
			name: { type: String, required: true },
			catchPhrase: { type: String, required: true },
			bs: { type: String, required: true },
		},
	},
	{
		timestamps: true,
		toJSON: {
			transform: (doc, ret) => {
				delete ret.__v;
				return ret;
			},
		},
	}
);

export default mongoose.models.User ||
	mongoose.model<IUsers>("User", UserSchema);
