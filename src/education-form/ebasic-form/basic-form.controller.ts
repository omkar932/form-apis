import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { BasicFormDto } from './basic-form.dto';
import { BasicFormEntity } from './basic-form.entity';
import { BasicFormService } from './ebasic-form/basic-form.service';
@Controller('ebasic-form')
export class BasicFormController {
    constructor(private basicFormService: BasicFormService) { }

    @Get()
    async findAll(@Res() res: Response) {
        try {
            const response = await this.basicFormService.findAll()
            if (response) {
                return res.status(HttpStatus.OK).json({ playload: response })
            } else {
                throw Error('data not fetch from ebasic-form')
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
                throw Error('data not fetch from ebasic-form')
            }
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Post()
    async create(@Body() createFormDto: BasicFormDto, @Res() res: Response) {
        try {
            const response = await this.basicFormService.create(createFormDto)
            if (response) {
                return res.status(HttpStatus.OK).json({ playload: response })
            } else {
                throw Error('can not create data from ebasic-form')
            }
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Put(':id')
    async update(@Param() id: number, @Body() createFormDto: BasicFormDto, @Res() res: Response) {
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
