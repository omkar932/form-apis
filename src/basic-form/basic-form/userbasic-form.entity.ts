import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class UserBasicFormEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    email: string

    @Column()
    phonenumber: string

    @Column()
    age: string

    @Column()
    department: string

    @Column()
    address1: string

    @Column()
    address2: string

    @Column()
    city: string

    @Column()
    state: string

    @Column()
    postalCode: string

    @Column()
    country: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}