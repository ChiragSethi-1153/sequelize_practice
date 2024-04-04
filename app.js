const http = require('http')
const express = require('express')
const {sequelize, user}= require('./models')
const { where } = require('sequelize')



const app = express()
app.use(express.json())


app.post('/users', async(req, res) => {
    const {name, email, role} =req.body
    try{
        const users = await user.create({name, email, role})
        console.log(users)
        return res.json(users)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})

app.get('/users', async(req, res) => {
    try{
        const users = await user.findAll()
        console.log(users)
        return res.json(users)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})
app.get('/users/:uuid', async(req, res) => {
    try{
        const uuid = req.params.uuid
        const users = await user.findOne({where: {uuid}})
        console.log(users)
        return res.json(users)
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})



app.listen({port: 8080}, async () => {
    console.log("Server running on PORT 8080")
    await sequelize.authenticate()
    console.log("database connected")
})



