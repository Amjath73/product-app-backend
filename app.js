const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const product = require("./models/product")

const app = express()
app.use(cors())

app.post("/",(req,res)=>{
    res.send("Add")
})

app.post("/view",(req,res)=>{
    res.send("view")
})

app.listen(8080,()=>{
    console.log("Server started")
})
