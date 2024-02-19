// import
import { connect } from "mongoose";

(async () => {
    try {
        await connect(process.env.MONGODB_URI + process.env.DB_NAME);
        console.log("connected to database successfully");
    } catch (err) {
        err.type = 'DbError';
        err.errDetails = 'امکان ارتباط با دیتابیس وجود ندارد';
        throw err;
    }
})();
