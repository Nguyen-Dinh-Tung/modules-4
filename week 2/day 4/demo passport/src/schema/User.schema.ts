import { Schema   } from 'mongoose';
export interface UserInterFace{
  username : String ;
  password : String ;
}
const userSchema = new Schema<UserInterFace>({
  username : String ,
  password : String ,
})
export default userSchema ;