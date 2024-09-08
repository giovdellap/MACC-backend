const { Position } = require("../model/position")
const { ProjectRequest } = require("../model/project")
const { MongoHandler } = require("../mongo/handler")

const newProject = ( async (req, res) => {

  const user = req.body.user
  let project = new ProjectRequest(user, req.body.title, req.body.description)

  let handler = new MongoHandler()
  let response = await handler.addProject(project, user)
  
  res.json(response)
})

const getProjects = ( async (req, res) => {

  console.log("PARAMS: ", req.params)
  console.log("REQUEST", req.params.user)
  const user = req.params.user

  let handler = new MongoHandler()
  let response = await handler.getProjects(user)
  console.log("RESPONSE: ", response)
  res.json({data: response})
})

const addPosition = ( async (req, res) => {

  console.log(req.body)
  let position = new Position(
    req.body.title,
    req.body.description,
    req.body.latitude,
    req.body.longitude
  )

  let handler = new MongoHandler()
  let response = await handler.addPosition(position, req.body.projAuthor, req.body.projId)
  console.log(response)

  res.json(response)
})


const getPositions = ( async (req, res) => {

  const author = req.params.author
  const id = req.params.id

  console.log('A', author, id)
  let handler = new MongoHandler()
  let response = await handler.getPositions(author, id)
  console.log("RESPONSE: ", response)
  res.json({data: response})
})

  
module.exports = {
  newProject,
  getProjects,
  addPosition,
  getPositions
}
  