// imports
import { Schema, model } from "mongoose";
// create collection
const articleSchema = new Schema({
    title:{
        type:String,
        required: true,
        unique: true
    },
    description:{
        type:String,
        required: true
    },
    authorId:{
        type: Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    slug:{
        type:String,
        required: true,
        unique: true
    },
    status:{
        type:Boolean,
        required:true,
        default: false
    }
},{timestamps: true});
// export model
export default model('Article', articleSchema);