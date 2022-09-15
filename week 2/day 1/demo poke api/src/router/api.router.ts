import express from "express";
import { AppDataSource } from "src/database/AppDataSource";
import { Blog } from "src/entity/blog";
const router = express.Router();
let data = [{
  id : 1 ,
  content : 'Blog này là của bố mày'
} ,
{
  id : 2 ,
  content : 'Blog này là của tao'
}]
router.get('/blog' , async (req,res) =>{
  res.status(200).json(data)
})
router.post('/blog' , (req,res) =>{
  let id : number = Number(req.query.id)
  let content : string = String(req.query.content)
  let newBlog = {
    id : id ,
    content : content
  }
  data.push(newBlog)
  res.status(200).json({
    data
  }) ;
})
router.delete('/blog' , (req,res) =>{
  let id : number = Number(req.query.id) ;
  data.forEach((element , index) =>{
    if(element.id == id){
      data.slice(index,1)
    }
  })
  res.status(200).json({
    data
  })
})
router.put('/blog' , (req,res) =>{
  let id : number = Number(req.query.id) ;
  let newContent : string = String(req.query.newContent)
  data.forEach((element)=>{
    if(element.id == id){
      element.content = newContent
    }
  })
  res.status(200).json({
    data
  })
})
export default router