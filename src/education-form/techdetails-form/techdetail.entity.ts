import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class TechdetailsFormEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    sscMarks: string

    @Column()
    sscGrade: string

    @Column()
    YearsOfExperience: string

    @Column()
    skills: string

    @Column()
    knownCodingLang: string

    @Column()
    location: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}