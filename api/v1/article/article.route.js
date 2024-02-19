// imports
import { Router } from "express";
import articleMiddleware from "./article.middleware.js";
// routing system
// initial router
const router = Router();
// routes
router.route('/').get(articleMiddleware.getArticles);
router.route('/:title').get();
router.route('/').post(articleMiddleware.checkerDuplicateArticle, articleMiddleware.createArticle);
router.route('/title').put();
router.route('/title').delete();
// exports
export default router;