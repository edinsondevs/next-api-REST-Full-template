
import { IItem } from '@/Types/schemasTypes/itemInterface';
import mongoose, { Document, Schema } from 'mongoose';

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
