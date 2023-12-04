import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn() // auto-increment primary key
    id: number;

    @CreateDateColumn({name: 'created_at', type: "datetime"})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at', type: "datetime"})
    updatedAt: Date;

    @DeleteDateColumn({name: 'delete_at', type: "datetime"})
    deleteAt: Date;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: string;

    @Column({default: true})
    isActive: boolean;
}
