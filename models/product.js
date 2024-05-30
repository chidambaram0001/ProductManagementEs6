import mongoose from 'mongoose';
import schemaGen from './schemaGen.js'
export default class products extends schemaGen{
    
    constructor(){
      if(!products.instance){
        var prdSchema =  {
          _id:  mongoose.Types.ObjectId,
          product_id:{
            type: String,
            required: true
          },
          product : {
              type: String,
              default: '',
              required: true,
            },
          title : {
              type: String,
              default: '',
              required: true,
            },
          brand : {
              type: String,
              default: '',
              required: true,
            },
         
          updatedby: {
              type: Number,
              default: 0,
              required: true,
            },
            generalspecs:{
              type: mongoose.Schema.Types.ObjectId,
              ref: 'generalspecs'
            },
           
          reviews:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'reviews'
          }],
      
          varient: Array
      };
  
  
      super(prdSchema, { 
          collection : 'productlist' 
        
        })

        products.instance = this;
      }

     return products.instance;

    }
    
        
       

};

