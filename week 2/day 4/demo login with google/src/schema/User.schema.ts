import { Schema   } from 'mongoose';
export interface UserInterFace{
  username : String ;
  password : String ;
  google : {
    id :{
      type : String ;
    }
  }
}
const userSchema = new Schema<UserInterFace>({
  google : {
    id : {
      type : String
    }
  } ,
  username : String ,
  password : String ,
})
export default userSchema ;