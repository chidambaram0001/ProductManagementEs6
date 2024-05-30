'use strict';
import mongoose from "mongoose";

//module.exports.connectionData = null;



export  default function() {
   
        try{
             mongoose.connect("mongodb://localhost:27017/products",{
                useNewUrlParser: true // Boilerplate for Mongoose 5.x
              });
            mongoose.connection.on('connecting', () => { 
                console.log('connecting')
                console.log(mongoose.connection.readyState); //logs 2
              });
              mongoose.connection.on('connected', () => {
                console.log('connected');
                console.log(mongoose.connection.readyState); //logs 1
              });
              mongoose.connection.on('disconnecting', () => {
                console.log('disconnecting');
                console.log(mongoose.connection.readyState); // logs 3
              });
              mongoose.connection.on('disconnected', () => {
                console.log('disconnected');
                console.log(mongoose.connection.readyState); //logs 0
              });
      
      }catch(err){
      console.log(err);
      }
     
} 

 
