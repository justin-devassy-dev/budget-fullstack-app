import { Exclude } from "class-transformer";
import { Entity , PrimaryGeneratedColumn ,Column , CreateDateColumn ,UpdateDateColumn, Unique } from "typeorm"


@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    email:string;

    @Exclude({toPlainOnly:true})
    @Column()
    password:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;
}

