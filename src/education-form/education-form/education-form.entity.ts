import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class EducationFormEntity {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    sscMarks: string

    @Column()
    sscYOP: string

    @Column()
    sscBoard: string

    @Column()
    sscGrade: string

    @Column()
    hscMarks: string

    @Column()
    hscYOP: string

    @Column()
    hscBoard: string

    @Column()
    hscGrade: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}