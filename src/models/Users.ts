import mongoose, { Schema } from "mongoose";

export interface IUsers {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
}

interface Company {
	name: string;
	catchPhrase: string;
	bs: string;
}

interface Address {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
}

interface Geo {
	lat: string;
	lng: string;
}

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
	}
);

export default mongoose.models.User || mongoose.model<IUsers>("User", UserSchema);
