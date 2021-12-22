require("dotenv").config();
const express = require('express');
const connectDB = require("./database/connect");
const routes = require('./routes/tasks.routes');

const server = express();

server.use(express.json());
server.use("/api/v1/tasks", routes);

const port = 5000;

const start = async () => {
    try {

        await connectDB(process.env.MONGO_URI);
        console.log("Connected to database");
        server.listen(port, () => console.log(`Listening on port ${port}`))

    } catch (error) {
        console.log('Error:', error)
    }
}

start();