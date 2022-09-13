import express from "express";
import { AppDataSource } from "src/database/AppDataSource";
import { Blog } from "src/entity/blog";
const router = express.Router();
router.get('/blog' , async (req,res) =>{
  let data = [{
    id : 1 ,
    content : 'Blog này là của bố mày'
  } ,
  {
    id : 2 ,
    content : 'Blog này là của tao'
  }]
  res.status(200).json(data)
})

export default router