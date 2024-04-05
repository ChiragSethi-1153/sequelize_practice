const http = require('http')
const express = require('express')
const {sequelize, user, post}= require('./models')
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

app.delete('/users/:uuid', async(req, res) => {
    try{
        const uuid = req.params.uuid
        const users = await user.findOne({where: {uuid}})
        console.log(users)
        await users.destroy()
        return res.json({message: 'user deleted'})
        
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})

app.post('/posts', async(req,res)=> {
    try{
        const {userUuid, body } = req.body
        const users = await user.findOne({where: {uuid: userUuid}})
        console.log(users.dataValues)
        const posts = await post.create({body, userId: users.dataValues.id })
        console.log(posts)
        return res.json(posts)

    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
})

app.get('/posts', async(req,res)=> {
    try{
        const posts = await post.findAll({include: ['user']})
        console.log(posts)
        return res.json(posts)

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







