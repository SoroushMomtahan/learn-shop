import devLog from '../../../../utils/devLog.js';
import roleController from './role.controller.js';
import jsonResponse from '../../../../utils/jsonResponse.js';
export default {
    createRole: async (req, res, next) => {
        // get role from 
        const roleBody = req.body;
        // validation
        try {
            const role = await roleController.createRole(roleBody);
            if (!role) return res.status(400).json(jsonResponse(false, [], { message: 'role was not created' }));
            return res.status(200).json(jsonResponse(true, role));
        } catch (err) {
            devLog('create role failed - ' + err, 'Role');
            next(err);
        }
    },
    getRoles: async (req, res, next) => {
        try {
            const roles = await roleController.getRoles();
            if (roles.length <= 0) return res.status(400).json(jsonResponse(false, [], { message: 'There are no roles to display' }));
            return res.status(200).json(jsonResponse(true, roles));
        } catch (err) {
            devLog('get all roles failed - ' + err, 'Role');
            next(err);
        }
    },
    getRoleById: async (req, res, next) => {
        // get id from params
        const id = req.params.id;
        // validation
        try {
            const role = await roleController.getRoleById(id);
            if (!role) return res.status(400).json(jsonResponse(false, [], { message: 'There are no role to display' }));
            return res.status(200).json(jsonResponse(true, role));
        } catch (err) {
            devLog('get role by id failed - ' + err, 'Role');
            next(err);
        }
    },
    getRoleByTitle: async (req, res, next) => {
        // get title from query
        const title = req.query.title;
        // validation
        try {
            const roles = await roleController.getRoleByTitle(title);
            if (roles.length <= 0) return res.status(400).json(jsonResponse(false, [], { message: 'There are no role(s) to display' }));
            return res.status(200).json(jsonResponse(true, roles));
        } catch (err) {
            devLog('get role by title failed - ' + err, 'Role');
            next(err);
        }
    },
    deleteRole: async (req, res, next) => {
        // get id from params
        const id = req.params.id;
        // validation
        try {
            const role = await roleController.deleteRole(id);
            if (!role) return res.status(400).json(jsonResponse(false, [], { message: 'role was not delete' }));
            return res.status(200).json(jsonResponse(true, role));
        } catch (err) {
            devLog('delete role failed - ' + err, 'Role');
            next(err);
        }
    },
}