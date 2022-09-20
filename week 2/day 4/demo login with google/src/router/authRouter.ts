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

authRouter.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

authRouter.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/success' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.end('login with google')
  });
authRouter.get('/google/success' , (req,res) =>{
  res.end('login with google')

})
authRouter.get('/', (req,res)=>{
  if(req.isAuthenticated()){
    res.end('success')
  }else{
    res.redirect('/auth/login')
  }
})

export default authRouter ;