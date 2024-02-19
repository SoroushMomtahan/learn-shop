import Role from "./role.model.js";
import * as devLog from '../../../../utils/devLog.js';
import { Schema } from "mongoose";
export default {
    createRole: async (role) => {
        // role.permissions = Schema.Types.ObjectId()
        try {
            return (await Role.create({
                title: role.title,
                permissions: role.permissions
            }));
        } catch (err) {
            devLog.createInstanceError('create role failed - ' + err, 'Role');
            throw err;
        }
    },
    getRoles: async () => {
        try {
            return await Role.find().populate('permissions');
        } catch (err) {
            devLog.createInstanceError('get all roles failed - ' + err, 'Role');
            throw err;
        }
    },
    getRoleById: async (id) => {
        try {
            return await Role.findById(id).populate('permissions');
        } catch (err) {
            devLog.createInstanceError('get role by id failed - ' + err, 'Role');
            throw err;
        }
    },
    getRoleByTitle: async (title) => {
        try {
            return await Role.find({ title });
        } catch (err) {
            devLog.createInstanceError('get role by title failed - ' + err, 'Role');
            throw err;
        }
    },
    deleteRole: async (id) => {
        try {
            return await Role.findByIdAndDelete(id);
        } catch (err) {
            devLog.createInstanceError('delete role failed - ' + err, 'Role');
            throw err;
        }
    },
}