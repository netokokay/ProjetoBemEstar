import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";




@Entity("families")
export class Family{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phone: number;

    @CreateDateColumn()
    requestDate: Date;

    @CreateDateColumn()
    deliveryDate: Date;

    @Column({nullable: true})
    status: string;                  // alguma descrição de como vai o andamento da cesta desta familia

    @Column({default: true})
    need: boolean;                   //caso a familia não precise mais da cesta básica

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}