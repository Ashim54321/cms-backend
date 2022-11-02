const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRouter = require('./routes/User-route');
const CourseRouter = require('./routes/Course-route');
const PostRouter = require('./routes/Post-route')
const cookieParser = require("cookie-parser");
const QuestionRouter = require('./routes/Question-route');
const NoteRouter = require('./routes/Note-route');


const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(UserRouter)
app.use('/api/',CourseRouter);
app.use(PostRouter);
app.use('/api/',QuestionRouter);
app.use('/api/',NoteRouter);



mongoose.connect(
    `mongodb+srv://ashim:ashim@cluster0.kmxj8pj.mongodb.net/?retryWrites=true&w=majority`
).then(()=>{
    app.listen(port)
    console.log("Server Running at port 5000 || Database connection Succesfully")

}).catch(()=>{
    console.log("Server running at 5000 || Database connection failed")
})

app.get('/',(req,res)=>{
    return res.send("Server is working properly")
})