import { Schema, model } from "mongoose";
// create schema
const roleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ""
    },
    permissions: {
        type: [Schema.Types.ObjectId],
        ref: 'Permission'
    }
});
// export
export default model('Role', roleSchema);