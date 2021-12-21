const express = require('express');

const routes = require('./routes/tasks.routes');

const server = express();

server.use(express.json());

server.use("/api/v1/tasks", routes)

server.listen(5000, () => {
    console.log('listening on port 5000')
})