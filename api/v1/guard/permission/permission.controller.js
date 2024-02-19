import devLog from '../../../../utils/devLog.js';
import permissionDb from './permission.service.js';
export default {
    createPermission: async (permission) => {
        try {
            return await permissionDb.createPermission(permission);
        } catch (err) {
            devLog('create permission failed - ' + err, 'controller Permission', '', {});
            throw err;
        }
    },
    getPermissions: async () => {
        try {
            return await permissionDb.getPermissions();
        } catch (err) {
            devLog('get all permission failed - ' + err, 'controller Permission');
            throw err;
        }
    },
    getPermissionById: async (id) => {
        try {
            return await permissionDb.getPermissionById(id);
        } catch (err) {
            devLog('get permission failed - ' + err, 'controller Permission');
            throw err;
        }
    },
    getPermissionsByEntityName: async (entityName) => {
        try {
            return await permissionDb.getPermissionsByEntityName(entityName);
        } catch (err) {
            devLog('get permission by title failed - ' + err, 'controller Permission');
            throw err;
        }
    },
    editPermission: async (id, permission) => {
        try {
            return await permissionDb.editPermission(id, permission);
        } catch (err) {
            devLog('edit permission failed - ' + err, 'controller Permission');
            throw err;
        }
    },
    deletePermission: async (id) => {
        try {
            return await permissionDb.deletePermission(id);
        } catch (err) {
            devLog('delete permission failed - ' + err, 'controller Permission');
            throw err;
        }
    },
}