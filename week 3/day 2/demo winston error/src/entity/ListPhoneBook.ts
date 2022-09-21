import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class ListPhoneBook {
  @PrimaryGeneratedColumn()
  id : number ;
  @Column()
  name : string ;
  @Column()
  address :string ;
  @Column()
  email :string ;
  @Column()
  phone :string ;
  @Column({type: 'varchar'})
  note : string ;
  @Column({type : 'timestamp' , default: () =>{'CURRENT_TIMESTAMP'}})
  create_at : string ;
  @Column({type : 'timestamp' , default: () =>{'CURRENT_TIMESTAMP'}})
  update_at : Date ;
}