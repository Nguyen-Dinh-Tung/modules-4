import express from "express";


import passport from "passport";

import multer from 'multer';
import Book from '../model/Book.model';
const bookRouter = express.Router();
bookRouter.get('/list/book' ,async (req,res) =>{
  let data = await Book.find() ;
  if(req.isAuthenticated()){
    res.render('listBook' , {data:data})
  }else{
    res.redirect('/auth/login/lib')
  }
})
const upload = multer() ;
export default bookRouter ;