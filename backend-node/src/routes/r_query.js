var express = require('express');
const queryController = require("../controllers/c_query")

const queryRouter = express.Router();
queryRouter.post('/newProject', queryController.newProject)
queryRouter.get('/getProjects/:user', queryController.getProjects)
queryRouter.post('/addPosition', queryController.addPosition)
queryRouter.get('/getPositions/:author/:id', queryController.getPositions)
queryRouter.get('/ping', queryController.ping)
queryRouter.post('/addEditor', queryController.addEditor)
queryRouter.post('/deleteEditor', queryController.deleteEditor)
queryRouter.get('/getProject/:author/:id', queryController.getProject)
queryRouter.post('/deletePosition', queryController.deletePosition)
queryRouter.post('/deleteProject', queryController.deleteProject)

module.exports = queryRouter;