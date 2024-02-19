// import
import express from "express";
import userRouter from "./api/v1/user/user.route.js";
import articleRouter from './api/v1/article/article.route.js';
import permissionRouter from './api/v1/guard/permission/permission.route.js';
import roleRouter from './api/v1/guard/role/role.route.js';
import guardMiddelware from "./api/v1/guard/guard.middelware.js";
import jsonResponse from "./utils/jsonResponse.js";
// initial middleware
const app = express();
// middlewares
app.use(express.json());
// user Routing System
app.use("/api/v1/user", userRouter);
// article Routing System
app.use('/api/v1/articles', articleRouter);
// permission Routing System
app.use('/api/v1/permissions', permissionRouter);
// role Routing System
app.use('/api/v1/roles', roleRouter);
// 404 not found Middleware
app.use((req, res) => {
    res.status(404).json({ message: "404 | Page not found." });
});
// ErrorHandler Middleware
app.use((err, req, res, next) => {
    res.status(500).json(jsonResponse(false, [], {message: 'internal server error'}));
});
// export
export default app
