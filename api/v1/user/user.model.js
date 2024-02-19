// import
import { Schema, model } from "mongoose";
// create Schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phoneNumber: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        default: null
    },
    role:{
        type: Schema.Types.ObjectId,
        ref: 'Role',
        default: null
    }
    // follower: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    // following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {timestamps: true});

// new Schema({
//     userId:{
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     },
//     personId:{
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     }
// }); 
// export
export default model("User", userSchema);
