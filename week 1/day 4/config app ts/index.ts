import express from "express";
import 'reflect-metadata' ;
import {Staff} from "./src/entity/Staff";
import { AppDataSource } from "./src/database/AppDataSource";
import multer from 'multer';
const upload = multer();
import bodyParser from "body-parser";
// typeorm khởi tạo kết nối với database
const app = express();
    app.set('view engine' , 'ejs') ;
    app.set('views' , './src/views')
    app.use(bodyParser.json()) ;
    app.use(express.json())

AppDataSource.initialize().then(async connection => {
    // Sử dụng đối tượng userRepository để thao tác với database
    console.log('connecting success');
});
    const staffRepo = AppDataSource.getRepository(Staff);

    app.get('/' , upload.none(),async(req,res) =>{
        let data = await staffRepo.find()
        res.render('home' , {data:data})
    })
    app.get('/create' , (req,res) =>{
        res.render('create')
    })
    app.post('/create' , upload.none() , (req,res) =>{
        let name = req.body.name
        let age = req.body.age
        let position = req.body.position
        const staff = new Staff()
        staff.name = name ;
        staff.age = age ;
        staff.position = position;
        staffRepo.save(staff)
        res.redirect('/')
    })
    app.get('/delete' , upload.none() , async(req,res) =>{
        let id = req.query.id
        const staff = await staffRepo.findOneBy({
            id : Number(id)
        })
        await staffRepo.remove(staff)
        res.redirect('/')
    })
    app.get('/edit' , upload.none() ,async (req,res) =>{
        let id = req.query.id
        const staff = await staffRepo.findOneBy({
            id : Number(id)
        })
        console.log(staff.id);

        res.render('edit' , {staff : staff})
    })
    app.post('/edit' ,upload.none() , async(req,res) =>{
        let id = req.body.id
        let name = req.body.name ;
        let age = req.body.age ;
        let position = req.body.position ;
        const staff = await staffRepo.findOneBy({
            id : Number(id)
        })
        staff.name = name ;
        staff.age = age ;
        staff.position = position ;
        staffRepo.save(staff)
        res.redirect('/')
    })
    app.listen(3000);

