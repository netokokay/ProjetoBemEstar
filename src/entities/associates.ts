import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity("associates")
export class Associate{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    adress: string;

    @Column({nullable: true})
    phone: string;

    @Column({nullable: true})
    instagram: string;

    @CreateDateColumn({nullable: true})
    birthday: Date;

    @Column({nullable: true})
    rg: string;

    @Column({nullable: true})   
    cpf: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}