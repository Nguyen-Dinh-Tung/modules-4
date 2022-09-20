import { model } from "mongoose";
import userSchema from '../schema/User.schema';
import {UserInterFace} from '../schema/User.schema'
const UserModel = model<UserInterFace>('User' , userSchema);
export default UserModel ;
