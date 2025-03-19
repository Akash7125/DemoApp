const express = require('express')
const cors = require('cors')

const ProductModel = require('./Products')
const mongoose = require('mongoose')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/Company')
.then(() => console.log('DB connected'))
.catch(err => console.log(err))

//Create API Route
app.post('/addProduct', async (req, res)=>{
    try{
        await ProductModel.create(req.body)
        res.json({message:'Product Added Successfully'})
    }catch(error){
        res.json(error)
    }
})

//Read Rest API
app.get('/viewProducts', async (req, res)=>{
    try{
        const products = await ProductModel.find()
        res.json(products)
    }catch(error){
        res.json(error)
    }
})

//Read Single Product by ID
app.get('/findProduct/:id', async (req, res)=>{
    const id = req.params.id
    try{
        const product = await ProductModel.findById(req.params.id)
        res.json(product)
    }catch(error){
        res.json(error)
    }
})

//Update API
app.put('/editProduct/:id', async (req, res)=>{
    try{
        const product = await ProductModel.findByIdAndUpdate(req.params.id,
            req.body,
            {new:true}
        )
        if(!product){
            res.send('Item Not Found')
        }
        res.json({message:"Product Updated Successfully"})
    }
    catch(error){
        res.json(error)
    }

})

//Delete API
app.delete('/deleteProduct/:id', async (req, res)=>{
    try{
        const product = await ProductModel.findByIdAndDelete(req.params.id)
        if(!product){
            res.json('Item Not Found')
        }
        res.json({message:"Product Deleted Successfully"})
    }catch(error){
        res.json(error)
    }
})


//config PORT and Start Server
const PORT = 9000
app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`)
})