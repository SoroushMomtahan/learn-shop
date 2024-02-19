// imports
import { Schema, model } from "mongoose";
// create schema
const permissionSchema = new Schema({
    entityName: {
        type: String,
        required: true
    },
    actions:{
        type: [String],
        default: []
    },
    create:{
        type:[String],
        default: []
    },
    read:{
        type:[String],
        default: []
    },
    readAll:{
        type:[String],
        default: []
    },
    update:{
        type:[String],
        default: []
    },
    delete:{
        type:[String],
        default: []
    },
});
//export
export default model('Permission', permissionSchema);