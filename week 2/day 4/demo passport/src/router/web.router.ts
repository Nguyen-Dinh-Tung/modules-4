import multer from 'multer'
import { Router } from 'express';
import UserModel from '../model/User.model'
let upload = multer()
const userRouter = Router() ;

userRouter.get('/create/user' , (req,res) =>{
  res.render('createUser')
})
userRouter.post('/create/user' , upload.none() ,async (req,res) =>{
  let newUser = await new UserModel(req.body) ;
  const user = newUser.save() ;
  res.redirect('/login')
})
userRouter.get('/api/user' ,async (req,res) =>{
  let data = await UserModel.find() ;
  res.status(200).json({
    data : data
  })
})
export default userRouter ;