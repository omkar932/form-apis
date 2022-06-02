import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { DocumentUploadService } from './document-upload/document-upload.service';
import { Response } from 'express';
import { DocumentUploadEntity } from './document-upload.entity';
import { DocumentUploadDto } from './document-upload.dto';
@Controller('document-upload')
export class DocumentUploadController {

    constructor(private basicFormService: DocumentUploadService) { }
    @Get()
    async findAll(@Res() res: Response) {
        try {
            const response = await this.basicFormService.findAll()
            if (response) {
                return res.status(HttpStatus.OK).json({ playload: response })
            } else {
                throw Error('data not fetch from document-upload-form')
            }

        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Get(':id')
    async findOne(@Param() id: number, @Res() res: Response) {
        try {
            const response = await this.basicFormService.findOne(id)
            if (response) {
                return res.status(HttpStatus.OK).json({ playload: response })
            } else {
                throw Error('data not fetch from document-upload-form')
            }
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Post()
    async create(@Body() createFormDto: DocumentUploadDto, @Res() res: Response) {
        try {
            const response = await this.basicFormService.create(createFormDto)
            if (response) {
                return res.status(HttpStatus.OK).json({ playload: response })
            } else {
                throw Error('can not create data from document-upload-form')
            }
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Put(':id')
    async update(@Param() id: number, @Body() createFormDto: DocumentUploadDto, @Res() res: Response): Promise<string | Response<any, Record<string, any>>> {
        try {
            const response = await this.basicFormService.update(id, createFormDto)
            return res.status(HttpStatus.OK).json({ payload: response })
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Delete(':id')
    async delete(@Param() id: number, @Res() res: Response) {
        try {
            const response = await this.basicFormService.delete(id)
            return res.status(HttpStatus.OK).json({ payload: response })
        } catch (error) {
            return `${error} there is some network error`
        }
    }
}
