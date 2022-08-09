const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error")
app.use(express.json())
//Routes imports 
const user = require("./routes/userRoute")
const product = require("./routes/ProductRoute")
app.use("/api/v1", product);

app.use("/api/v1", user);



// Middlewares
app.use(errorMiddleware);

module.exports = app
