'use strict';
import mongoose from "mongoose";
import products from "../models/products.js";
import generalspecs from "../models/generalspecs.js";
import review from '../models/review.js';


export default class productController{
   constructor(){
     this.productobj = new products();
     this.genobj = new generalspecs();
     this.reviewObj = new review();
     //var schemaModel = this.productobj.getschemaGen();
   }
   getAllProducts(){
      return this.productobj.getData({},[{path:'generalspecs', path:'reviews'}]);
   }

   saveProduct(data){
      return new Promise((res,rej)=>{
         this.productobj.getData({product_id:data.product_id}).then((prodExist,prderr)=>{
               // if(prderr){
               //    new Error({"err":"invalid product","status":"500"});
               // }
               if(prodExist.length){
                  
                   rej("product exists");
                }
                data._id = new mongoose.Types.ObjectId;
               
                var prodObj = new this.productobj.schemaGen(data);
                   prodObj.save().then((dt,err)=>{
                      if(err){
                         rej(err)
                      }
             
                      res(dt)
                   })
                })
             });
   }

   saveReview(data){
      var refId = data.prdRef;
      data._id = new mongoose.Types.ObjectId;
      var reviews1 = new this.reviewObj.schemaGen(data);
      return new Promise((resolve, rej) => {
         reviews1.save().then((dt,err)=>{
            if(err){
               reject(err)
            }
            this.productobj.update({_id:refId}, {"$push": {reviews: reviews1._id}}).then((respData, er)=>{
               if(er){
                  reject(er)
               }
   
               resolve(respData)
            })
        })
      });
    }

}



// const mongoose = require("mongoose");
// const  productlist  = require('../models/productlist');
// const generalSpecs = require('../models/generalspecs');
// const reviews = require('../models/reviews');
// //const errorHander = require('../errors/errorhandler');
// //import {BaseError} from '../errors/errorhandler';

//  module.exports.getAllProducts = function(){
   
//     return productlist.findData();
//  }


//  module.exports.saveGeneralSpecs = function(data){
//    data._id = new mongoose.Types.ObjectId;
//    var specObj = new generalSpecs(data);
//      return new Promise((resolve, reject)=>{
//         specObj.save().then((dt, err) =>{
//            if(err){
//               reject(err)
//            }
//             resolve(dt)
//         })
//      })
    
//  }

//  module.exports.searchProduct = function(key){
//    return new Promise((res,rej)=>{
//       productlist.find({$text:{$search:key}}).populate([{path:'generalspecs'},{path:'reviews'}])
//       .exec().then((dt,err) => {
//           if(err){
//              rej(err);
//           }

//           res(dt);
//       })

//    });
   
//  }

//  module.exports.deleteProd = function(key){
//    return new Promise((res,rej)=>{
//       productlist.deleteOne({_id:key}).then((dt,err) => {
//           if(err){
//              rej(err);
//           }

//           res(dt);
//       });

//    });
//  }

//  module.exports.saveProduct =  function (data){
   
//    return new Promise((res,rej)=>{
//     productlist.findDatawithref({product_id:data.product_id}).then((prodExist,prderr)=>{
//       // if(prderr){
//       //    new Error({"err":"invalid product","status":"500"});
//       // }
//       if(prodExist.length){
         
//           rej("product exists");
//        }
//        data._id = new mongoose.Types.ObjectId;
//        var prodObj = new productlist(data);
//           prodObj.save().then((dt,err)=>{
//              if(err){
//                 rej(err)
//              }
    
//              res(dt)
//           })
//        })
//     });
     
//  }
//  module.exports.updateProduct = function (data){
//    return new Promise((res,rej)=>{
//       if(Array.isArray(data) && data.length > 0){
//          var tempData = data[0];
//          var prodObj = new productlist(tempData);
//          if(prodObj.updateRef(tempData)){
//             productlist.deleteOne({'_id':tempData._id}).then((dt,err)=>{
//                if(err){
//                   console.log(err)
//                }
//                prodObj.save().then((dt1,err1)=>{
//                   if(err1){
//                      rej(err1)
//                   }
         
//                   res(dt1)
//                })
//                console.log(dt)
//             })
//          }else{
//             rej("reference error");
//          }

         


//       }else{
//          rej("invalid input");
//       }
     
//    })
//  }
//  module.exports.saveReview = function(data){
//    var refId = data.prdRef;
//    data._id = new mongoose.Types.ObjectId;
//    var reviews1 = new reviews(data);
//    return new Promise((resolve, rej) => {
//       reviews1.save().then((dt,err)=>{
//          if(err){
//             reject(err)
//          }
//          productlist.findOneAndUpdate({_id:refId}, {"$push": {reviews: reviews1._id}}).then((respData, er)=>{
//             if(er){
//                reject(er)
//             }

//             resolve(respData)
//          })
//      })
//    });
//  }

//  module.exports.updateReview = function(data,updateCol){
//     var id = data._id;
//    if(updateCol === 'like'){
//       return new Promise((resolve, reject) => {
//          reviews.findByIdAndUpdate(id,{$inc : {'likes' : 1}}, 
//          {new: true}).then((respData, er)=>{
//             if(er){
//                reject(er)
//             }

//             resolve(respData)
//          })
//       });
//    }else {
//       return new Promise((res, rej) => {
//          reviews.findByIdAndUpdate(id,{"$set":{comments: data.comments}}).then((respData, er)=>{
//             if(er){
//                rej(er)
//             }

//             res(respData)
//          })
//       });
//    }

//  }
