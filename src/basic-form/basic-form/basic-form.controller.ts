import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { BasicFormService } from './basic-form/basic-form.service';
import { Response } from 'express';
import { UserBasicFormEntity } from './userbasic-form.entity';
import { UserBasicFormDto } from './userbasic.dto';
@Controller('userbasic-form')
export class BasicFormController {
    constructor(private basicFormService: BasicFormService) { }

    @Get()
    async findAll(@Res() res: Response) {
        try {
            const response = await this.basicFormService.findAll()
            if (response) {
                return res.status(HttpStatus.OK).json({ playload: response })
            } else {
                throw Error('data not fetch from userbasic-form')
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
                throw Error('data not fetch from userbasic-form')
            }
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Post()
    async create(@Body() createFormDto: UserBasicFormDto, @Res() res: Response) {
        try {
            const response = await this.basicFormService.create(createFormDto)
            if (response) {
                return res.status(HttpStatus.OK).json({ playload: response })
            } else {
                throw Error('can nott created data from userbasic-form')
            }
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Put(':id')
    async update(@Param() id: number, @Body() createFormDto: UserBasicFormDto, @Res() res: Response) {
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
