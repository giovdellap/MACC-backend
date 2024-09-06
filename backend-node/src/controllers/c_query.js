const { ProjectRequest } = require("../model/project")
const { MongoHandler } = require("../mongo/handler")

const newProject = ( async (req, res) => {

  let project = new ProjectRequest(req.body.title, req.body.description)
  const user = req.body.user

  let handler = new MongoHandler()
  let response = await handler.addProject(project, user)
  
  res.json(response)
})

const getProjects = ( async (req, res) => {

  const user = req.body.user

  let handler = new MongoHandler()
  let response = await handler.getProjects(user)
  
  res.json(response)
})



  
module.exports = {
  newProject,
  getProjects
}
  