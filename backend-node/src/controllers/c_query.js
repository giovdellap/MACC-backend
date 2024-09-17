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

const getProject = ( async (req, res) => {

  const author = req.params.author
  const projId = req.params.id

  let handler = new MongoHandler()
  let response = await handler.getProject(author, projId)
  res.json(response)
})

const deleteProject = ( async (req, res) => {

  console.log('DELETEPROJECT', req.body)

  let handler = new MongoHandler()
  let response = await handler.deleteProject(
    req.body.projAuthor, 
    req.body.projId)
  console.log('DELETEPROJECT - RES: ', response)
  res.status(200).send()
})

const addEditor = ( async (req, res) => {

  console.log('ADDEDITOR', req.body)

  let handler = new MongoHandler()
  let response = await handler.addEditor(
    req.body.editor, 
    req.body.projAuthor, 
    req.body.projId)
  console.log('ADDEDITOR - RES: ', response)
  res.status(200).send()
})

const deleteEditor = ( async (req, res) => {

  console.log('DELETEEDITOR', req.body)

  let handler = new MongoHandler()
  let response = await handler.deleteEditor(
    req.body.editor, 
    req.body.projAuthor, 
    req.body.projId)
  console.log('DELETEEDITOR - RES: ', response)
  res.status(200).send()
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
  position.image = req.body.image

  console.log("BODY IMAGE", req.body.image)
  console.log("POSITION IMAGE: ", position.image)

  let handler = new MongoHandler()
  let response = await handler.addPosition(position, req.body.projAuthor, req.body.projId)
  console.log('ADDPOSITION - RES: ', response)

  res.status(200).send()
})

const deletePosition = ( async (req, res) => {

  console.log('DELETEPOSITION', req.body)

  let handler = new MongoHandler()
  let response = await handler.deletePosition(
    req.body.position, 
    req.body.projAuthor, 
    req.body.projId)
  console.log('DELETEPOSITION - RES: ', response)
  res.status(200).send()
})

const getPositions = ( async (req, res) => {

  const author = req.params.author
  const id = req.params.id

  let handler = new MongoHandler()
  let response = await handler.getPositions(author, id)
  //console.log("GETPOSITIONS - RES: ", response)
  res.json({data: response})
})

const ping = ( async (req, res) => {
  res.status(200)
  res.json({})
})

  
module.exports = {
  newProject,
  getProjects,
  addPosition,
  getPositions,
  ping,
  addEditor,
  deleteEditor,
  getProject,
  deletePosition,
  deleteProject
}
  