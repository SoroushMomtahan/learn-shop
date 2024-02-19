import logError from '../../../utils/devLog.js';
import roleController from './role/role.controller.js';
export default {
    guardingEntity: async (acceptedEntity, roleId) => {
        try {
            // get target role
            const role = await roleController.getRoleById(roleId);
            if (!role) return false;
            // get permissions id
            const permissions = role.permissions;
            // get entity names array
            const entityNames = permissions.filter((permission) => permission.entityName === acceptedEntity);
            // check accepted entity would have existed in entity names
            if (entityNames.length > 0) {
                return true;
            }
        } catch (err) {
            logError('guarding entity failed - ' + err, 'controller guard', '', {});
            throw err;
        }
    },
    guardingRequstMethod: async (acceptedEntity, acceptedMethod='', roleId) => {
        try {
            // get target role
            const role = await roleController.getRoleById(roleId);
            if (!role) return false;
            // is permission entity name match to acceptedEntity value
            const permissions = role.permissions;
            const isEntityNameMatched = permissions.some((permission) => permission.entityName === acceptedEntity);
            if(!isEntityNameMatched) return false;
            if(acceptedMethod === '') return true;
            // is permission actions match to acceptedMethod
            let isActionMethodMatched = false;
            for (let permission of permissions) {
                isActionMethodMatched = permission.actions.includes(acceptedMethod);
                if (!isActionMethodMatched) continue;
                break;
            }
            // check accepted entity would have existed in entity names
            if (!isActionMethodMatched) return false;
            return true;
        } catch (err) {
            logError('guarding request method failed - ' + err, 'controller guard', '', {});
            throw err;
        }
    },
}