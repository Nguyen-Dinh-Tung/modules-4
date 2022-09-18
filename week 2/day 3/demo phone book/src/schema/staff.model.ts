import { Schema , model } from 'mongoose';

interface Staffs {
  name : string ;
  age : number ;
  address : string ;
}

const staffsSchemal = new Schema<Staffs>({
  name : String ,
  age : Number ,
  address : String ,
})

const Staff = model<Staffs>('staff' , staffsSchemal) ;
export default Staff ;