import mongoose from 'mongoose';
export default class schemaGen {
    constructor(schema, coll){
        var prdSchema = new mongoose.Schema(schema, coll);
        this.schemaGen = mongoose.model(coll.collection, prdSchema);
        
    }

     getschemaGen(){
        return this.schemaGen;
    }

    setschemaGen(schemaData, coll){
        this.schemaGen = new mongoose.Schema(schemaData, coll)
    }

    getData(query= {}, populate=[]){
        var that = this;
        return new Promise((resolve, reject)=>{
            that.schemaGen.find(query).populate(populate)
            .exec().then(data => {
              resolve(data)
            })
          })
    }

    update(...queryOptions){
        var that = this;
        return new Promise((resolve, reject)=>{
            that.schemaGen.findOneAndUpdate(queryOptions.join(',')).then(data => {
              resolve(data)
            })
          })
    }
};
