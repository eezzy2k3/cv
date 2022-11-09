require("dotenv").config()
const genRouter = require("./src/routers/genrouter")

const express = require("express")
const app = express()
app.use(express.json())

app.use("/api/v1/cv",genRouter)




const port = process.env.PORT||3000
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})
