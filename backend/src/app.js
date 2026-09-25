const express = require('express')
const appRouter = require('../src/routes/app.routes')
const path = require("path");


const app = express()
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use('/api/app',appRouter)

require('dotenv').config();





module.exports = app