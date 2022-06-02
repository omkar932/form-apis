import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class EducationFormDto {
    @ApiProperty()
    @IsNotEmpty()
    sscMarks: string

    @ApiProperty()
    @IsNotEmpty()
    sscYOP: string

    @ApiProperty()
    @IsNotEmpty()
    sscBoard: string

    @ApiProperty()
    @IsNotEmpty()
    sscGrade: string

    @ApiProperty()
    @IsNotEmpty()
    hscMarks: string

    @ApiProperty()
    @IsNotEmpty()
    hscYOP: string

    @ApiProperty()
    @IsNotEmpty()
    hscBoard: string

    @ApiProperty()
    @IsNotEmpty()
    hscGrade: string

    @ApiProperty()
    @IsNotEmpty()
    created_at: Date

    @ApiProperty()
    @IsNotEmpty()
    updated_at: Date

    @ApiProperty()
    @IsNotEmpty()
    id: number
}