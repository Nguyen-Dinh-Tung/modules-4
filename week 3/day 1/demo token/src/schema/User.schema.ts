import { Schema ,  } from 'mongoose';
export interface UserInterface {
  username : String ;
  password : String ;
}
const userSchema = new Schema<UserInterface>({
  username : String ,
  password : String ,
})
export default userSchema ;