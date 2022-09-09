import 'reflect-metadata' ;
import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource({
  type: 'mysql' ,
  host: 'localhost' ,
  port: 3306 ,
  username : 'root' ,
  password : '123123' ,
  database : 'company' ,
  synchronize : true,
  logging : false ,
  entities :["./dist/src/entity/*.js"] ,
  migrations : ["./dist/src/migration/*js"]
});

