import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Staff {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    position: string;
}