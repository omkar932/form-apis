import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { TechdetailFormService } from './techdetail-form/techdetail-form.service';
import { Response } from 'express';
import { TechdetailsFormEntity } from './techdetail.entity';
@Controller('techdetails-form')
export class TechdetailsFormController {
    constructor(private techFormService: TechdetailFormService) { }

    @Get()
    async findAll(@Res() res: Response) {

        try {
            const response = await this.techFormService.findAll()
            if (response) {
                return res.status(HttpStatus.OK).json({ playload: response })
            } else {
                throw Error('cannot fetch technical form data')
            }
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Get(':id')
    async findOne(@Param() id: number, @Res() res: Response) {
        try {
            const response = await this.techFormService.findOne(id)
            if (response) {
                return res.status(HttpStatus.OK).json({ payload: response })
            } else {
                throw Error('cannot fetch technical form data')
            }

        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Post()
    async create(@Body() createFormDto: TechdetailsFormEntity, @Res() res: Response) {
        try {
            const response = await this.techFormService.create(createFormDto)
            if (response) {
                return res.status(HttpStatus.OK).json({ payload: response })
            } else {
                throw Error('cannot create technical form data')
            }
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Put(':id')
    async update(@Param() id: number, @Body() createFormDto: TechdetailsFormEntity, @Res() res: Response) {
        try {
            const response = await this.techFormService.update(id, createFormDto)
            return res.status(HttpStatus.OK).json({ payload: response })
        } catch (error) {
            return `${error} there is some network error`
        }
    }
    @Delete(':id')
    async delete(@Param() id: number, @Res() res: Response) {
        try {
            const response = await this.techFormService.delete(id)
            return res.status(HttpStatus.OK).json({ payload: response })
        } catch (error) {
            return `${error} there is some network error`
        }
    }
}
