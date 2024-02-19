import devLog from '../../../../utils/devLog.js';
import roleDb from './role.service.js';
export default {
    createRole: async (role)=>{
        try{
            return await roleDb.createRole(role);
        }catch(err){
            devLog('create role failed - ' + err, 'Role');
            throw err;
        }
    },
    getRoles: async ()=>{
        try{
            return await roleDb.getRoles();
        }catch(err){
            devLog('get all roles failed - ' + err, 'Role');
            throw err;
        }
    },
    getRoleById: async (id)=>{
        try{
            return await roleDb.getRoleById(id);
        }catch(err){
            devLog('get role by id failed - ' + err, 'Role');
            throw err;
        }
    },
    getRoleByTitle: async (title)=>{
        try{
            return await roleDb.getRoleByTitle(title);
        }catch(err){
            devLog('get role by title failed - ' + err, 'Role');
            throw err;
        }
    },
    deleteRole: async (id)=>{
        try{
            return await roleDb.deleteRole(id);
        }catch(err){
            devLog('delete role failed - ' + err, 'Role');
            throw err;
        }
    },
    accessGuard: async (id)=>{
        const role = await getRoleById(id);
        return role.permissions;
    }
}