import express from 'express';
import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("yes connected")
})

const app = express();

app.listen(3000 , () => {
    console.log("serverr in 3000")
})