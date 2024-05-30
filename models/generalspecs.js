import mongoose from 'mongoose';
import schemaGen from './schemaGen.js'
export default class generalspecs extends schemaGen{
    
    constructor(){
        if(!generalspecs.instance){
            var prdSchema = {   _id: mongoose.Types.ObjectId,
                name: { type: String, required: true },
                camera:{ type: Object},
                disply:{type: Object}, 
                general:{type: Object},
                hardwareCamera:{type: Object}
        };
        super(prdSchema, { 
            collection : 'generalspecs' 
          
          })
          generalspecs.instance = this;
        }
       return generalspecs.instance;
    }
       

};





// const mongoose = require("mongoose");
// const generalspecs =  new mongoose.Schema(
//     {   _id: mongoose.Types.ObjectId,
//         name: { type: String, required: true },
//         camera:{ type: Object},
//         disply:{type: Object}, 
//         general:{type: Object},
//         hardwareCamera:{type: Object}

       
// },
// {
//     collection : 'generalspecs' 
// });




//const generalspecs = mongoose.model('generalspecs',generalspecs);
//module.exports = mongoose.model('generalspecs',generalspecs);


