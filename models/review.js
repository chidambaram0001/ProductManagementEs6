import mongoose from 'mongoose';
import schemaGen from './schemaGen.js';
export default class review extends schemaGen{
 constructor(){
     if(!review.instance){
         var prodSchema = {   _id: mongoose.Types.ObjectId,
                username: { type: String},
                comments: {type: String},
                likes : { type: Number, default: 0},
                reply : { type: Array}
                
               
        };
        super(prodSchema, {collection:'reviews'});
        review.instance = this;
     }
     return review.instance;
 }

}



// const mongoose = require("mongoose");
// const reviews =  new mongoose.Schema(
//     {   _id: mongoose.Types.ObjectId,
//         username: { type: String},
//         comments: {type: String},
//         likes : { type: Number, default: 0},
//         reply : { type: Array}
        
       
// },
// {
//     collection : 'reviews' 
// });




// module.exports = mongoose.model('reviews',reviews);
