require('dotenv').config();
const express = require('express');
const app = express();//crea una nueva aplicacion express
const mongoose = require('mongoose');


(async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI_TEST)
        console.log('te has conectado a mongodb')
    } catch (error) {
        console.log(error)
    }
})

module.exports=app;