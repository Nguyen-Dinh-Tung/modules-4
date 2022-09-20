import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class PhoneBook {
  @PrimaryGeneratedColumn()
  id : number ;
  @Column()
  name : string ;
  @Column()
  phoneNumber : string ;
}