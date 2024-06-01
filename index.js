const express = require("express");
const { connection } = require("./db");
const dotenv = require("dotenv");
const { route:userRoutes} = require("./routes/userRoutes")

const port = 8080;
const app = express();
app.use(express.json());
dotenv.config();
//env variables
const PASS = process.env.DB_PASSWORD
const USER = process.env.DB_USERNAME


// creating MongoDB connection and starting server
const startServer = async () => {
    await connection(`mongodb+srv://${USER}:${PASS}@testcluster.mfbdxax.mongodb.net/`);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

startServer();


app.use("/api/users", userRoutes);
