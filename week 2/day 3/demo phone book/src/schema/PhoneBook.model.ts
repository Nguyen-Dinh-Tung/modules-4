import {Schema , model} from 'mongoose' ;
interface phoneBook {
  name : string ;
  phone : string ;
}

const phoneBookSchema = new Schema({
  name : String ,
  phone : String
})

const pBook = model<phoneBook>('phoneBook' , phoneBookSchema)
export default pBook ;