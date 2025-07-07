
import { IItem } from '@/Types/schemasTypes/itemInterface';
import mongoose, { Schema } from 'mongoose';

const ItemSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name for this item."],
			maxlength: [60, "Name cannot be more than 60 characters"],
		},
		description: {
			type: String,
			required: [true, "Please provide a description for this item."],
			maxlength: [200, "Description cannot be more than 200 characters"],
		},
		phone: {
			type: Number,
			required: [true, "Please provide the phone number."],
			maxlength: [20, "Phone number cannot be more than 20 characters"],
		},
		email: {
			type: String,
			required: [true, "Please provide the email."],
			maxlength: [200, "Description mail valid"],
		},
		gender: {
			type: String,
			required: [true, "Please provide the gender."],
			maxlength: [9],
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

export default mongoose.models.Item || mongoose.model<IItem>('Item', ItemSchema);
