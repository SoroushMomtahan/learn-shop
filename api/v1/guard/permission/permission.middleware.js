import devLog from '../../../../utils/devLog.js';
import permissionController from './permission.controller.js';
import jsonResponse from '../../../../utils/jsonResponse.js';
export default {
    createPermission: async (req, res, next)=>{
        // get permission
        const permissionBody = req.body;
        // validation permission
        try{
            const permission = permissionController.createPermission(permissionBody);
            if(!permission) return res.status(400).json(jsonResponse(false, [], {message: 'New permission was not created'}));
            return res.status(200).json(jsonResponse(true, permission));
        }catch(err){
            devLog('create permission failed - ' + err, 'middleware Permission', '', {});
            next(err);
        }
    },
    getPermissions: async (req, res, next)=>{
        try{
            const permissions = await permissionController.getPermissions();
            if(permissions.length <= 0)return res.status(400).json(jsonResponse(false, [], {message:'There are no permissions to display'}));
            return res.status(200).json(jsonResponse(true, permissions));
        }catch(err){
            devLog('get all permission failed - ' + err, 'middleware Permission');
            next(err);
        }
    },
    getPermissionById: async (req, res, next)=>{
        // get permissions
        const id = req.params.id;
        // validation
        try{
            const permission = await permissionController.getPermissionById(id);
            if(!permission) return res.status(400).json(jsonResponse(false, [], {message: 'there is no permission with your sending id'}));
            return res.status(400).json(jsonResponse(true, permission));
        }catch(err){
            devLog('get permission failed - ' + err, 'middleware Permission');
            next(err);
        }
    },
    getPermissionsByEntityName: async (req, res, next)=>{
        // entity name
        const entityName = req.body;
        // validation
        try{
            const permissions = await permissionController.getPermissionsByEntityName(entityName);
            if(permissions.length <= 0) return res.status(400).json(jsonResponse(false, [], {message: 'there is no permissions to display'}));
            return res.status(200).json(jsonResponse(true, permissions));
        }catch(err){
            devLog('get permission by title failed - ' + err, 'middleware Permission');
            next(err);
        }
    },
    editPermission: async (req, res, next)=>{
        // get permission 
        const permissionBody = req.body;
        // get id from params 
        const id = req.params.id;
        // validation
        try{
            const permission = await permissionController.editPermission(id, permissionBody);
            if(!permission) return res.status(400).json(jsonResponse(false, [], {message: 'there is no permission with your sending id'}));
            return res.status(200).json(jsonResponse(true, permission));
        }catch(err){
            devLog('edit permission failed - ' + err, 'middleware Permission');
            next(err);
        }
    },
    deletePermission: async (req, res, next)=>{
        // get id from params
        const id = req.params.id;
        // validation
        try{
            const permission = await permissionController.deletePermission(id);
            if(!permission) return res.status(400).json(jsonResponse(false, [], {message: 'there is no permission with your sending id'}));
            return res.status(200).json(jsonResponse(true, permission));
        }catch(err){
            devLog('delete permission failed - ' + err, 'middleware Permission');
            next(err);
        }
    },
}