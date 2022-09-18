import pBook from '../schema/PhoneBook.model';
import multer from 'multer'
import { Router } from 'express';
let upload = multer()
const phoneBookRouter = Router() ;

phoneBookRouter.get('/' , async (req,res)=>{
  let data = await pBook.find() ;
  res.render('list' ,{data:data})
})
phoneBookRouter.get('/create' , (req,res) =>{
  res.render('create')
})
phoneBookRouter.post('/create' , upload.none() ,async (req,res) =>{
  let newPhoneBook = new pBook(req.body)
  let phoneBook = await newPhoneBook.save()
  res.redirect('/')
})

phoneBookRouter.get('/delete' , upload.none() , async (req,res) =>{
  let _id = req.body._id
  await pBook.findOneAndRemove(_id)
  res.redirect('/')
})

phoneBookRouter.get('/edit', upload.none() , async(req,res) =>{
  let _id = req.query._id
  let data = await pBook.findById(_id)
  res.render('edit' , {data: data })
})
phoneBookRouter.post('/edit' , upload.none() , async (req,res) =>{
  let _id = req.body._id ;
  await pBook.findOneAndUpdate(_id , req.body)
  res.redirect('/')
})
export default phoneBookRouter ;