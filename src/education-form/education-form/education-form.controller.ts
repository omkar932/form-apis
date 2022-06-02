import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { EducationFormService } from './education-form/education-form.service';
import { Response } from 'express';
import { EducationFormEntity } from './education-form.entity';
import { EducationFormDto } from './education-form.dto';
@Controller('education-form')
export class EducationFormController {
    constructor(private eduFormService: EducationFormService) { }

    @Get()
    async findAll(@Res() res: Response) {
        try {
            const response = await this.eduFormService.findAll()
            if (response) {
                return res.status(HttpStatus.OK).json({ playload: response })
            } else {
                throw Error('data not fetch from education-form')
            }

        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Get(':id')
    async findOne(@Param() id: number, @Res() res: Response) {
        try {
            const response = await this.eduFormService.findOne(id)
            if (response) {
                return res.status(HttpStatus.OK).json({ playload: response })
            } else {
                throw Error('data not fetch from education-form')
            }
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Post()
    async create(@Body() createFormDto: EducationFormDto, @Res() res: Response) {
        try {
            const response = await this.eduFormService.create(createFormDto)
            if (response) {
                return res.status(HttpStatus.OK).json({ playload: response })
            } else {
                throw Error('data not created from education-form')
            }
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Put(':id')
    async update(@Param() id: number, @Body() createFormDto: EducationFormDto, @Res() res: Response) {
        try {
            const response = await this.eduFormService.update(id, createFormDto)
            return res.status(HttpStatus.OK).json({ payload: response })
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Delete(':id')
    async delete(@Param() id: number, @Res() res: Response) {
        try {
            const response = await this.eduFormService.delete(id)
            return res.status(HttpStatus.OK).json({ payload: response })
        } catch (error) {
            return `${error} there is some network error`
        }
    }
}
