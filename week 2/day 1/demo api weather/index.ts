import { ListPhoneBook } from './src/entity/ListPhoneBook';
import { PhoneBook } from './src/entity/PhoneBook';
import express from "express";
import 'reflect-metadata' ;
import {Staff} from "./src/entity/Staff";
import { AppDataSource } from "./src/database/AppDataSource";
import multer from 'multer';
import axios from 'axios';
import * as path from 'path';
const upload = multer();
import bodyParser from "body-parser";
import { Products } from './src/entity/Products';
const port = 3000 ;
// typeorm khởi tạo kết nối với database
const app = express()
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.json()) ;
app.use(express.json()) ;
app.get('/' , async (req,res) =>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=6e6b2e182ea05c53b69bdfd7e9932d98` ;
    let data = await axios.get(url)
    let celsius = Math.floor(data.data.main.temp - 273.15) ;
    res.render('weather' ,{celsius})
})
app.listen(port , ()=>{
    console.log('Server listening ' + port);
})