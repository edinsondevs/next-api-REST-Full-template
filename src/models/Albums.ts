import mongoose, { Schema } from "mongoose";

export interface IAlbum {
	id: string;
	title: string;
	userId: string;
}

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
    }
);

export default mongoose.models.Album || mongoose.model<IAlbum>("Album", AlbumSchema);
