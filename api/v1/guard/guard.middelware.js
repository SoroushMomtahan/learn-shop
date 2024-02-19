import guardController from "./guard.controller.js";
import jsonResponse from '../../../utils/jsonResponse.js';
import devLog from '../../../utils/devLog.js'
export default {
    guardingEntity: (acceptedEntity) => {
        return async (req, res, next) => {
            try {
                // get role id
                const roleId = req.authenticatedUser.role;
                // get result of entity guard
                const result = await guardController.guardingEntity(acceptedEntity, roleId);
                // res
                if (!result) return res.status(400).json(jsonResponse(false, [], { message: 'You do not have permission to access the section.' }));
                next();
            } catch (err) {
                devLog('entity guard action failed' + err, 'middleware guard', '', {});
                next(err);
            }
        }
    },
    guardingRequstMethod: (acceptedEntity, acceptedMethod) => {
        return async (req, res, next) => {
            try {
                // get role id
                const roleId = req.authenticatedUser.role;
                // get result of entity guard
                const result = await guardController.guardingRequstMethod(acceptedEntity, acceptedMethod, roleId);
                // res
                if (!result) return res.status(400).json(jsonResponse(false, [], { message: 'You do not have permission to access the section...' }));
                next();
            } catch (err) {
                devLog('entity guard action failed' + err, 'middleware guard', '', {});
                next(err);
            }
        }
    },
}