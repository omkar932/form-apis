import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class TechdetailsFormEntity {
    @ApiProperty()
    @IsNotEmpty()
    sscMarks: string

    @ApiProperty()
    @IsNotEmpty()
    sscGrade: string

    @ApiProperty()
    @IsNotEmpty()
    YearsOfExperience: string

    @ApiProperty()
    @IsNotEmpty()
    skills: string

    @ApiProperty()
    @IsNotEmpty()
    knownCodingLang: string

    @ApiProperty()
    @IsNotEmpty()
    location: string

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