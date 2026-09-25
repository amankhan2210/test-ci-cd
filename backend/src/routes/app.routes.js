const express = require("express")
const appRouter = express.Router()
const appController = require('../controllers/app.controller')

appRouter.get('/getuser',appController.getuser)
appRouter.post('/reg',appController.reg)
module.exports = appRouter