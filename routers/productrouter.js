
import express from 'express';
import productController from '../controllers/productController.js';
const router = express.Router();
const obj = new productController()
router.get('/all',(req, res)=>{

obj.getAllProducts().then((data, err)=>{
    if(err){
        res.json(err);
    }
    res.json(data);
//console.log(data)
})
 
});


router.post('/save',(req,res)=>{
    obj.saveProduct(req.body).then((data, err)=>{
        if(err){
            res.json(err);
        }
        res.json(data);
    }).catch((err)=>{
        res.json(err);
    });
});

router.post('/add/review',async (req,res)=>{

    obj.saveReview(req.body).then((data,err)=>{
        console.log(err);
        if(err){
            res.json(err);
        }
        res.json(data);
    }).catch((err)=>{
        res.json(err);
    })
    
})
export default router;
