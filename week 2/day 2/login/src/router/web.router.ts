import express from "express";
import multer from 'multer';
import  {UserController}  from '../controller/user.controller';
const upload = multer();
const router = express.Router() ;
const userController = new UserController()
const user = 'takpaj' ;
const password = '123' ;
router.get('/login' , (req,res) =>{
  userController.index(req,res)
})
router.post('/login' , upload.none() , (req,res) =>{
  if(req.body.user == user && req.body.password == password){
    res.status(200).json({
      message: 'login success'
    })
  }else{
    res.status(404).json({
      message: 'login false'
    })
  }
})
export default router