// imports
import * as dbError from '../../../utils/devLog.js';
import Article from './article.model.js'
// exports
export default {
    // create article
    createArticle: async (article) => {
        try {
            // set new article to db
            return await Article.create(article);
        } catch (err) {
            // log error
            dbError.createInstanceError(err, 'Article');
            // throw error
            throw err;
        }
    },
    // get articles
    getArticles: async () => {
        try {
            // get articles
            return await Article.find().populate('authorId');
        } catch (err) {
            err.type = 'DbError'
            err.errDetails = 'error to get all articles from db';
            throw err;
        }
    },
    // get article
    getArticleById: async () => { },
    // get article by title
    getArticleByTitle: async () => { },
    // edit article
    editArticle: async () => { },
    // delete article
    deleteArticle: async () => { },
    // get article by title
    getArticleByTitle: async (title) => {
        try {
            return await Article.findOne({ title });
        } catch (err) {
            dbError.readInstanceError(err, 'Article');
            throw err;
        }
    },
    // get article by title
    getArticleBySlug: async (slug) => {
        try {
            return await Article.findOne({ slug });
        } catch (err) {
            dbError.readInstanceError(err, 'Article');
            throw err;
        }
    }
}