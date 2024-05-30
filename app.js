import express from 'express';
import productRouter from './routers/produterouter.js'
import connectMongoDB from './controllers/connectionController.js';
import eventEmitter from 'events'
const app = express();
app.use(express.json());

app.get("/", async(req,res)=>{
res.json({"msg":"API is Aliveeeeee"})
});
app.use('/product', productRouter);

const start = async ()=>{
try{
    connectMongoDB();
app.listen(3000,()=> console.log("running in 3000"))
}catch(err){
console.log(err);
process.exit(1);
}
};

 start();
