const express = require("express")
const connect = require("./configs/db")
const path = require("path")
const app = express()
const port = process.env.PORT || 4000;
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ limit: '50mb' }))

const cors = require("cors");

app.use(cors());
const userController=require("./controllers/api.controller")
app.use("",userController)
app.listen(port, async () => {
    await connect()
    console.log("listening to port 4000")
})