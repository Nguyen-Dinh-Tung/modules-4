import { Schema , model} from "mongoose";
interface Product{
  name : string ;
  price : number ;
  author : string ;
}

const productsSchema = new Schema <Product>({
  name : String ,
  price : Number ,
  author : String ,
})
const Products = model<Product>('product', productsSchema) ;
export {Products}