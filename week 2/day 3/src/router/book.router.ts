import { Router } from 'express';
import {Book} from '../schema/book.model'
import multer from 'multer' ;
const bookRoutes = Router() ;
const upload = multer() ;
bookRoutes.get('/createBook' , (req,res) =>{
  res.render('createBook')
})
bookRoutes.post('/createBook' , upload.none() ,async (req,res) =>{
  const bookNew = new Book(req.body) ;
  const book = await  bookNew.save() ;
  if(book){
    res.status(200).json({
      book
    })
  }else{
    res.status(404).json({
      message : 'Create fail'
    })
  }
} )
bookRoutes.get('/book/list' ,async (req,res)=>{
  let data = await Book.find() ;
  res.render('bookList' , {data:data})
})
bookRoutes.get('/book/edit' , async (req,res) =>{
  let id = req.query.id ;
  res.render('edit' ,{id : id})
})
bookRoutes.post('/book/edit' , upload.none() , async (req,res) =>{
  let id = req.body.id ;
  let data = await Book.findByIdAndUpdate(id ,req.body)
  res.redirect('/book/list')
})
bookRoutes.get('/book/delete' , async (req,res) =>{
  let id = req.query.id ;
  await Book.findByIdAndRemove(id)
  res.redirect('/book/list')
})
export default bookRoutes ;