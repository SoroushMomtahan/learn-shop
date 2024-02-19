// imports
import "dotenv/config";
import "./configs/db.js";
import app from "./app.js";
// listen to port 3000
app.listen(process.env.PORT, () => {
    console.log(`server running on http://localhost:${process.env.PORT}`);
});
