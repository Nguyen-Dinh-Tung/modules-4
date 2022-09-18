import { Router } from 'express';
import {Products} from '../schema/products.model'
import multer from 'multer' ;
import router from './api.router';
const bookRoutes = Router() ;
const upload = multer() ;

const productsRouter = Router() ;

productsRouter.get('/products/list' ,async (req,res) =>{
  let data = await Products.find()
  console.log(data);
  res.render('listProducts' , {data : data})
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