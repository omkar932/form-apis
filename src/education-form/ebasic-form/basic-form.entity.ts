import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class BasicFormEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string

    @Column()
    email: string

    @Column()
    gender: string

    @Column()
    age: string

    @Column()
    dob: string

    @Column()
    address: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}