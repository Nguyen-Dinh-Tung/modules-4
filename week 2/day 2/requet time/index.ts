import { responseTime } from './src/middleware/responseTime';
import { ListPhoneBook } from './src/entity/ListPhoneBook';
import { PhoneBook } from './src/entity/PhoneBook';
import express from "express";
import 'reflect-metadata' ;
import {Staff} from "./src/entity/Staff";
import multer from 'multer';
import axios from 'axios';
import * as path from 'path';
import bodyParser from "body-parser";
import { Products } from './src/entity/Products';
import apiRouter from './src/router/api.router'
import morgan from 'morgan'
import helmet from 'helmet';
import fs from 'fs' ;
import routes from './src/router/router';
const upload = multer();
const port = 3000 ;
// typeorm khởi tạo kết nối với database
const app = express()
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(bodyParser.json()) ;
app.use(express.json()) ;
app.use('/api' , apiRouter )
app.use(morgan('common'))
app.use(helmet())
app.use(responseTime)
app.get('/', async (req, res) => {
    try {
    const url = 'https://pokeapi.co/api/v2/ability/?limit=100&offset=0';
    const response = await axios.get(url);
    const data = response.data;
    if (data) {
    res.status(200).json({data: data})
    } else {
    res.end('<h1>Error<h1>')
    }
    } catch (err) {
    res.end('<h1>Error<h1>')
    }
   });
   app.use(routes);

app.listen(port , ()=>{
    console.log('Server listening ' + port);
})