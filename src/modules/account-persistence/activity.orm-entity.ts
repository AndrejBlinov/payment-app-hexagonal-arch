import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Activity', {})
export class ActivityOrmEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar' , length: 15})
    timestamp: number;

    @Column()
    ownerAccountId: string;

    @Column()
    sourceAccountId: string;

    @Column()
    targetAccountId: string;

    @Column()
    amount: number;
}