import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";





@Entity("students")
export class Student{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuuid: string;

    @Column()
    name: string;

    @CreateDateColumn()
    birthday: Date;

    @Column()
    address: string;

    @Column()
    phone: number;

    @Column()
    school: string;

    @Column({nullable: true})
    observation: string;

    @Column({default: true})
    isActive: boolean;

    @Column({nullable: true})
    fathersName: string;

    @Column()
    mothersName: string;

    @Column({nullable: true})
    rg: number;

    @Column({nullable: true})
    cpf: number;

    @Column({nullable: true})
    parentsPhone: number;

    @Column({nullable: true})
    bloodType: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}