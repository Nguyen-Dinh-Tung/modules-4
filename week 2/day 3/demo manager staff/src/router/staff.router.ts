import { Router } from "express";
import multer from   'multer' ;
import Staff from '../schema/staff.model'
const upload = multer();
const staffRouter = Router() ;
staffRouter.get('/list/staff' ,async (req,res) =>{
  let data = await Staff.find() ;
  res.render('listStaff' , {data : data})
})
staffRouter.get('/create/staff' , (req,res) =>{
  res.render('createStaff')
})
staffRouter.post('/create/staff' , upload.none() ,async (req,res) =>{
  console.log(req.body);
  let newStaff = new Staff(req.body) ;
  const staff = await newStaff.save()
  res.redirect('/list/staff')
})
staffRouter.get('/delete' , upload.none(),async(req,res) =>{
  let _id = req.query._id ;
  await Staff.findByIdAndDelete(_id)
  res.redirect('/list/staff')
})
staffRouter.get('/edit' ,async (req,res) =>{
  let _id = req.query._id ;
  let staff = await Staff.findById(_id)
  res.render('editStaff' ,{data:staff})
})
staffRouter.post('/edit' , upload.none(),async(req,res) =>{
  let _id = req.body._id ;
  await Staff.findByIdAndUpdate(_id , req.body) ;
  res.redirect('/list/staff')
})
export default staffRouter