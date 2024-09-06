var express = require('express');
const queryController = require("../controllers/c_query")

const queryRouter = express.Router();
queryRouter.post('/newProject', queryController.newProject)
queryRouter.post('/getProjects', queryController.getProjects)



module.exports = queryRouter;