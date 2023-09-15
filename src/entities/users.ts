import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";




@Entity("users")
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuuid: string;

    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;
    
    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    hierarchy: string;

    @Column({nullable: true})
    phone: string;
    
    @Column({default: true})
    isActive: boolean;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}