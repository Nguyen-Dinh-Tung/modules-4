import { Router } from 'express';
import {Products} from '../schema/products.model'
import multer from 'multer' ;
import router from './api.router';
const bookRoutes = Router() ;
const upload = multer() ;

const productsRouter = Router() ;
let limit = 3 ;
let offset = 0 ;
productsRouter.get('/products/list' ,async (req,res) =>{
  let data = await Products.find().limit(limit).skip(offset)
  res.render('listProducts' , {data : data , limit:limit , offset : offset})
})
productsRouter.get('/list' , async(req,res) =>{
  limit = Number(req.query.limit) ;
  offset = Number(req.query.offset)
  let data = await Products.find().limit(limit).skip(offset)
  res.render('listProducts' , {data : data , limit:limit , offset : offset})
})
productsRouter.get('/products/create' , (req,res) =>{
  res.render('create')
})

productsRouter.post('/products/create' , upload.none(),async (req,res) =>{
  const productsNew = new Products(req.body)
  const products = await productsNew.save()
  res.end()
})
export default productsRouter ;