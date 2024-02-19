import articleController from "./article.controller.js"
import jsonReponse from '../../../utils/jsonResponse.js'
export default {
    // create article
    createArticle: async (req, res, next) => {
        try {
            // get article from body
            const articleInBody = req.body;
            // create article
            const article = await articleController.createArticle(articleInBody);
            if (!article) return res.status(400).json(jsonReponse(false, article, { message: 'It is not possible to create an article' }));
            return res.status(200).json(jsonReponse(true, article));
        } catch (err) {
            // go to error middleware
            next(err);
        }
    },
    // get articles
    getArticles: async () => {

    },
    // get article
    getArticleById: async () => { },
    // get article by title
    getArticleByTitle: async () => { },
    // edit article
    editArticle: async () => { },
    // delete article
    deleteArticle: async () => { },
    // checker duplicate artilce
    checkerDuplicateArticle: async (req, res, next) =>{
        try{
        // get article from body
        const article = req.body;
        //check duplicating
        const result = await articleController.checkerDuplicateArticle(article);
        if(result) return res.status(409).json(jsonReponse(false, [], {message:'title or slug of article duplicate'}));
        return next();            
        }catch(err){
            next(err);
        }
    }
}