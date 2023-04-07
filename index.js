import express from "express";
import mongoose from "mongoose";
import config from "config";
import {authRouter} from "./routes/index.js";
import cors from "./middleware/cors.middleware.js";

import {AdController, UserController} from './controllers/index.js'

const app = express()
const PORT = config.get('serverPort')

app.use(cors)
app.use(express.json())
// app.use('/api/auth', authRouter)
app.post('/AddNew', AdController.create)
app.get('/AddNew', AdController.getAll)
app.get('/AddNew/:id', AdController.getOne)
app.delete('/AddNew/:id', AdController.remove)
app.patch('/AddNew/:id', AdController.update)

app.get('/category', AdController.getLastCategory)
app.get('/AddNew/category', AdController.getLastCategory)

app.post('/registration', UserController.register);
app.post('/login', UserController.login)
app.get('/auth', UserController.auth)

const start = async () => {
    try {
        mongoose.connect(config.get('dbUrl'))

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (error) {
        
    }
}

start()