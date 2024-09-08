var express = require('express');
const queryController = require("../controllers/c_query")

const queryRouter = express.Router();
queryRouter.post('/newProject', queryController.newProject)
queryRouter.get('/getProjects/:user', queryController.getProjects)
queryRouter.post('/addPosition', queryController.addPosition)
queryRouter.get('/getPositions/:author/:id', queryController.getPositions)


module.exports = queryRouter;