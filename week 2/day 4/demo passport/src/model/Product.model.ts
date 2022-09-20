import { model } from "mongoose";
import productSchema from '../schema/Product.schema';
const ProductModel = model('Product' , productSchema);
export default ProductModel ;
