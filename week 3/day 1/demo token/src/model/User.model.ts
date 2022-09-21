import { model } from "mongoose";
import userSchema from '../schema/User.schema'
import {UserInterface} from '../schema/User.schema'
const UserModel = model<UserInterface>('users' , userSchema);
export default UserModel ;
