import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserBasicFormDto {
    @ApiProperty()
    @IsNotEmpty()
    firstname: string

    @ApiProperty()
    @IsNotEmpty()
    lastname: string

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    phonenumber: string

    @ApiProperty()
    @IsNotEmpty()
    age: string

    @ApiProperty()
    @IsNotEmpty()
    department: string

    @ApiProperty()
    @IsNotEmpty()
    address1: string

    @ApiProperty()
    address2: string

    @ApiProperty()
    @IsNotEmpty()
    city: string

    @ApiProperty()
    @IsNotEmpty()
    state: string

    @ApiProperty()
    @IsNotEmpty()
    postalCode: string

    @ApiProperty()
    @IsNotEmpty()
    country: string

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