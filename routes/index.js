const routes = require("express").Router()
const usersController = require("../controllers/usercontroller")

routes.get("/", usersController.mainUserProfile)

routes.get("/test", usersController.testRoute)

module.exports = routes