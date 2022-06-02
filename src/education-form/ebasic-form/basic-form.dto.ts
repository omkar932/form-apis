import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class BasicFormDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    gender: string

    @ApiProperty()
    @IsNotEmpty()
    age: string

    @ApiProperty()
    @IsNotEmpty()
    dob: string

    @ApiProperty()
    @IsNotEmpty()
    address: string

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