 import express from 'express';
 import cors from 'cors';
 import mongoose from 'mongoose';
 import dontenv from 'dotenv';
 import cookieParser from 'cookie-parser';
 import tourRoute from './routes/tour.js';

 dontenv.config();
 const app= express();
 const port= process.env.PORT || 8000;

 mongoose.set("strictQuery", false);
 const connect=async()=>{
    try{
          await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
          console.log("mongodb connected");
    }catch(err){
            console.log("mongodb failed");
    }
 };





//  app.get("/",(req,res)=>{
//       res.send("api is working");
//  });

 app.use(express.json());
 app.use(cors());
 app.use(cookieParser());
 app.use('/tours', tourRoute); 
 app.use('/users', userRoute);  


 app.listen(port,()=>{
    connect();
    console.log("server is running on port", port);
 });