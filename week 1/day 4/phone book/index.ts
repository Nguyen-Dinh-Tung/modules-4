import { PhoneBook } from './src/entity/PhoneBook';
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
    const phoneBook = AppDataSource.getRepository(PhoneBook);
    app.get('/' , async(req,res) =>{
        let data = await phoneBook.find()
        res.render('home' , {data:data})
    })
    app.get('/create' , upload.none() , (req,res)=>{
        res.render('create')
    })
    app.post('/create' , upload.none() , (req,res)=>{
        let name = req.body.name ;
        let phoneNumber = req.body.phone ;
        let phoneBookElement = new PhoneBook() ;
        phoneBookElement.name = name ;
        phoneBookElement.phoneNumber = phoneNumber ;
        phoneBook.save(phoneBookElement) ;
        res.redirect('/')
    })
    app.get('/edit' , upload.none() , async (req,res)=>{
        let id = req.query.id ;
        let data = await phoneBook.findOneBy({
            id:Number(id)
        })
        res.render('edit' , {data:data})
    })
    app.post('/edit' , upload.none() ,async (req,res) =>{
        let id = Number(req.body.id)
        let name = req.body.name ;
        let phoneNumber = req.body.phoneNumber ;
        let phoneBookElement = await phoneBook.findOneBy({
            id: id
        })
        phoneBookElement.name = name ;
        phoneBookElement.phoneNumber = phoneNumber ;
        phoneBook.save(phoneBookElement)
        res.redirect('/')
    })
    app.get('/delete' , upload.none() ,async (req,res) =>{
        let id = Number(req.query.id) ;
        let phoneBookElement = await phoneBook.findOneBy({
            id: id
        })
        phoneBook.remove(phoneBookElement)
        res.redirect('/')
    })
    app.listen(3000);

