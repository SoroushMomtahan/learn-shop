// imports
import { Schema, model } from "mongoose";
// create schema
const courseUserModel = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    couresId:{
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    }
    
}, {timestamps});
// export model
export default model("CourseUser", courseUserModel);