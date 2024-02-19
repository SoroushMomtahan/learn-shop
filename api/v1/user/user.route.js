// imports
import { Router } from "express";
import userMiddleware from "./user.middleware.js";
import guardMiddleware from "../guard/guard.middelware.js";
import globalMiddleware from '../global.middleware.js';
// initial router
const router = Router();
// Users Middleware
router.use(userMiddleware.authenticateUser);
// guard middleware
// router.use(guardMiddleware.guardingEntity('article'));
// user endpoints
router.route("/").get(guardMiddleware.guardingRequstMethod('article', 'readAll'), userMiddleware.getUsers);
// user form data parser
router.route("/").post(userMiddleware.formDataParserForUserAvatar);
// user endpoints
router.route("/").post(userMiddleware.checkerDuplicateUser, userMiddleware.createUser);
// user endpoints
router.route("/:id").get(userMiddleware.getUser);
// user endpoints
router.route("/:id").delete(userMiddleware.deleteUser);
// user endpoints
router.route("/:id").put(userMiddleware.editUser);
// export
export default router;
