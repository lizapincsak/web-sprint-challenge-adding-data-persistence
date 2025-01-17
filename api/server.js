const express = require("express");

const ResourceRouter = require("./resource/router.js");
const ProjectRouter = require('./project/router.js');
const TaskRouter = require('./task/router.js');

const server = express();

server.use(express.json());

server.use('/api/resources', ResourceRouter);
server.use('/api/projects', ProjectRouter);
server.use('/api/tasks', TaskRouter);

server.get('/', (req, res) => {
    res.status(200).json({api: "up"})
})

module.exports = server;