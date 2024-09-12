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

  const user = req.params.user

  let handler = new MongoHandler()
  let response = await handler.getProjects(user)
  res.json({data: response})
})

const addPosition = ( async (req, res) => {

  console.log('ADDPOSITION', req.body)
  let position = new Position(
    req.body.title,
    req.body.description,
    req.body.latitude,
    req.body.longitude,
    req.body.image
  )

  let handler = new MongoHandler()
  let response = await handler.addPosition(position, req.body.projAuthor, req.body.projId)
  console.log('ADDPOSITION - RES: ', response)

  res.status(200).send()
})


const getPositions = ( async (req, res) => {

  const author = req.params.author
  const id = req.params.id

  let handler = new MongoHandler()
  let response = await handler.getPositions(author, id)
  console.log("GETPOSITIONS - RES: ", response)
  res.json({data: response})
})

  
module.exports = {
  newProject,
  getProjects,
  addPosition,
  getPositions
}
  