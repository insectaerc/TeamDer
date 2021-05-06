require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');

const connectDB = async () => {
    try{
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@teamder.rmjdl.mongodb.net/TeamDer?retryWrites=true&w=majority`,
        {useCreateIndex: true, useUnifiedTopology:true, useNewUrlParser: true})
        console.log('MongoDB is connected')
    }
    catch (error){
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

const app = express();
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/post', postRouter)

const PORT = 5000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))