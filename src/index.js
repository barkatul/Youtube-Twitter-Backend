require('dotenv').config()
const app = require('./app.js')
const connectDB = require("./db/index.js")
const port = process.env.PORT || 8000;

connectDB()
.then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server is running at port ${port}`)
        })
    } catch (error) {
        console.log(`App CANNOT listen at port : ${port}`, error)
    }
})
.catch((err) => {
    console.log("MongoDB connection failed!!! ", err)
})