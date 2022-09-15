import { ListPhoneBook } from './src/entity/ListPhoneBook';
import { PhoneBook } from './src/entity/PhoneBook';
import express from "express";
import 'reflect-metadata' ;
import {Staff} from "./src/entity/Staff";
import multer from 'multer';
import axios from 'axios';
import * as path from 'path';
const upload = multer();
import bodyParser from "body-parser";
import { Products } from './src/entity/Products';
import apiRouter from './src/router/api.router'
const port = 3000 ;
// typeorm khởi tạo kết nối với database
const app = express()
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.json()) ;
app.use(express.json()) ;
app.use('/api' , apiRouter )
let limit = 10 ;
let offset = 0 ;
let url = `https://pokeapi.co/api/v2/ability/?limit=${limit}&offset=${offset}`
app.get('/' , async (req,res) =>{
    let data = await axios.get(url)
    let dataGame = data.data.results
    let container = {
        dataGame : dataGame ,
        next  : {
            limit: limit,
            offset : offset
        }
    }
    res.render('home' , {container : container});
})
app.get('/next' , async (req,res) =>{
    limit = Number(req.query.limit)
    offset = Number(req.query.offset)
    let data = await axios.get(url)
    let dataGame = data.data.results
    let container = {
        dataGame : dataGame ,
        next  : {
            limit: limit,
            offset : offset
        }
    }
    res.render('home' , {container : container});
})
app.listen(port , ()=>{
    console.log('Server listening ' + port);
})