import Permission from "./permission.model.js"
import * as devLog from '../../../../utils/devLog.js'
export default {
    createPermission: async (permission)=>{
        try{
            return await Permission.create(permission);
        }catch(err){
            devLog.createInstanceError('create permission failed - ' + err, 'Permission');
            throw err;
        }
    },
    getPermissions: async ()=>{
        try{
            return await Permission.find();
        }catch(err){
            devLog.createInstanceError('get all permission failed - ' + err, 'Permission');
            throw err;
        }
    },
    getPermissionById: async (id)=>{
        try{
            return await Permission.findById(id);
        }catch(err){
            devLog.createInstanceError('get permission failed - ' + err, 'Permission');
            throw err;
        }
    },
    getPermissionsByEntityName: async (entityName)=>{
        try{
            return await Permission.find({entityName});
        }catch(err){
            devLog.createInstanceError('get permission by title failed - ' + err, 'Permission');
            throw err;
        }
    },
    editPermission: async (id, permission)=>{
        try{
            return await Permission.findByIdAndUpdate(id, permission);
        }catch(err){
            devLog.createInstanceError('edit permission failed - ' + err, 'Permission');
            throw err;
        }
    },
    deletePermission: async (id)=>{
        try{
            return await Permission.findByIdAndDelete(id);
        }catch(err){
            devLog.createInstanceError('delete permission failed - ' + err, 'Permission');
            throw err;
        }
    },
}