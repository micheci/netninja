const express=require('express')
require('dotenv').config()
const workoutRoutes=require('./routes/worksouts')
const mongoose=require('mongoose')

//express app
const app=express();

//middleware
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',workoutRoutes)

//Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        
//listen for request
    app.listen(process.env.PORT,()=>{
     console.log("Connected to db and listening on 4k")
        })

    })
    .catch((error)=>(
        console.log(error)
    ))

