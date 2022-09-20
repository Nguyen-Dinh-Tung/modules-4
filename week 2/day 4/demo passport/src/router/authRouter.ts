import express from "express";

const authRouter = express.Router();

import passport from "passport";

import multer from 'multer';

const upload = multer() ;
authRouter.get('/login' , (req,res) =>{
  res.render('login')
})
authRouter.post('/login' , upload.none(), passport.authenticate('local', {
  successRedirect: '/auth',
  failureRedirect: '/auth/login'
}));

authRouter.get('/', (req,res)=>{
  if(req.isAuthenticated()){
    res.end('success')
  }else{
    res.redirect('/auth/login')
  }
})
export default authRouter ;