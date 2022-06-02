import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
export class DocumentUploadDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsNotEmpty()
    number: string

    @ApiProperty()
    @IsNotEmpty()
    file: string

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