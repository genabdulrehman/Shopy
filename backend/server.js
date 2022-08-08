const app = require("./app")
const connectDatabase = require("./config/database")

const dotenv = require("dotenv")
dotenv.config({ path: "backend/config/config.env" })

// Uncaught error handling

process.on("uncaughtException", (error) => {
    console.log(`Error : ${error.message}`);
    console.log(`Shutting down the server due to uncaughtException Promise rejection...`);

    process.exit(1)
})

//Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`);

})

// unhandledRejection 
process.on("unhandledRejection", (error) => {
    console.log(`Error : ${error}`);
    console.log(`Shutting down the server due to unhandledRejection`);

    server.close(() => {
        process.exit(1)
    });
});
