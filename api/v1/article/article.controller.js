import logError from '../../../utils/devLog.js';
import articleEntity from './article.service.js';
export default {
    createArticle: async (article) => {
        try {
            return await articleEntity.createArticle(article);
        } catch (err) {
            // log error
            logError('create article failed', 'controller article', '', {});
            // throw error
            throw err;
        }
    },
    getArticles: async (req, res, next) => {
        try {
            // get articles from db
            const articles = await articleEntity.getArticles();
            // send res
            res.status(200).json({
                data: {
                    articles
                }
            })
        } catch (err) {
            next(err)
        }
    },
    getArticleById: async () => { },
    getArticleByTitle: async () => { },
    editArticle: async () => { },
    deleteArticle: async () => { },
    // checker duplicate artilce
    checkerDuplicateArticle: async (article) => {
        try {
            const title = await articleEntity.getArticleByTitle(article.title);
            const slug = await articleEntity.getArticleBySlug(article.slug);
            const isArticleExists = title || slug;
            if (isArticleExists) return true;
            return false;
        } catch (err) {
            logError('checker duplicate artilce failed', 'controller article', '', {});
            throw err;
        }
    }
}