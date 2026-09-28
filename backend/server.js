const app = require('./src/app')
const redis = require("./src/configs/redis");
const connectDB = require('./src/configs/database')

connectDB()

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})