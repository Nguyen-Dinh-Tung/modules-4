import bookSchema, { BookInterface } from './../schema/Book.chema';
import { model } from "mongoose";
const Book = model<BookInterface>('book' , bookSchema) ;
export default Book ;