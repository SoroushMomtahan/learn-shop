// imports
import { Router } from "express";
import roleMiddleware from "./role.middleware.js";
// initial router
const router = Router();
// role Middleware
// role endpoints
router.route("/").get(roleMiddleware.getRoles);
// role endpoints
router.route("/").post(roleMiddleware.createRole);
// role endpoints
router.route("/:id").get(roleMiddleware.getRoleById);
// role endpoints
router.route("/:id").delete(roleMiddleware.deleteRole);
// role endpoints
router.route("/?title").get(roleMiddleware.getRoleByTitle);
// export
export default router;