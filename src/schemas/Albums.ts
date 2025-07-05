
import { IAlbum } from "@/Types/schemasTypes/albumsInterface";
import mongoose, { Schema } from "mongoose";

const AlbumSchema: Schema = new Schema(
	{
		title: {
			type: String,
			required: [true, "Please provide a title for this album."],
			maxlength: [60, "Title cannot be more than 60 characters"],
		},
		userId: {
			type: String,
			required: [true, "Please provide a user ID for this album."],
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

export default mongoose.models.Album ||
	mongoose.model<IAlbum>("Album", AlbumSchema);
