// imports
import { Router } from "express";
import permissionMiddleware from "./permission.middleware.js";
// initial router
const router = Router();
// permission Middleware
// permission endpoints
router.route("/").get(permissionMiddleware.getPermissions);
// permission endpoints
router.route("/").post(permissionMiddleware.createPermission);
// permission endpoints
router.route("/:id").get(permissionMiddleware.getPermissionById);
// permission endpoints
router.route("/:id").delete(permissionMiddleware.deletePermission);
// permission endpoints
router.route("/:id").put(permissionMiddleware.editPermission);
// export
export default router;