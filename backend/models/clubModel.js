import mongoose from "mongoose";

const ClubSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        stadium: {
            type: String,
            required: true,
        },
        manager: {
            type: String,
            required: true,
        },
        yearFounded: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

export const Club = mongoose.model('Club', ClubSchema);