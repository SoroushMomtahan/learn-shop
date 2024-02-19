// imports
import { Schema, model } from "mongoose";
// create schema
const courseSchema = new Schema({
    cover:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        unique: true,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    summary:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});
// export model
export default model("Course", courseSchema);
