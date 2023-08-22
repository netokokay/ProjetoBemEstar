import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";





@Entity("sponsors")
export class Sponsor{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    cnpjORcpf: string;

    @Column()
    name: string;

    @Column()
    instanceof: string;

    @Column({nullable: true})
    phone: string;

    @CreateDateColumn({nullable: true})
    birthday: Date;


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}