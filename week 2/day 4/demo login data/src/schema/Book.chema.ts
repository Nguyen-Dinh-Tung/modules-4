import { Schema ,  } from 'mongoose';
export interface BookInterface{
  description : string ;
  author : string
}

const bookSchema = new Schema<BookInterface>({
  description : String ,
  author : String
})
export default bookSchema