const multer =require('multer')
const path = require('path')

const Product = require("../Model/ProductModel")

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'./files/uploads/')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname))//Appending extension
    }
})

const uploader = multer({storage:storage})

exports.insert = [ uploader.single('image'),(req,res)=>{
   
    const product = new Product({
        pname:req.body.pname,
        desc:req.body.desc,
        price:req.body.price,
        Image:req.file.filename
  

    })
    product.save()
    .then((ele)=>{
        res.send(ele)
    })
    .catch((err)=>{
        res.send(err)
    })
}

]


exports.delete =[
    (req,res)=>{
        User.deleteOne(
            {_id:req.params.id})
        .then((data)=>
        {
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })

    }
]

exports.list=[(req,res)=>{
    Product.find()
    .then((product)=>{
        res.send(product)
    })
    .catch((err)=>{
        res.send(err)
    })
}
   
]