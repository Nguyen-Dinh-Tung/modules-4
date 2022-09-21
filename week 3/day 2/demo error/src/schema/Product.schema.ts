import { Schema, } from 'mongoose';

const productsSchema = new Schema({
  name: String,
  price: Number,
  category: String,
})
export default productsSchema;