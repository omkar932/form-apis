import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { EducationFormService } from './education-form/education-form.service';
import { Response } from 'express';
import { EducationFormEntity } from './education-form.entity';
import { EducationFormDto } from './education-form.dto';
import { networkError } from 'src/common/constant/error-response';
@Controller('education-form')
export class EducationFormController {
    constructor(private eduFormService: EducationFormService) { }
    async sendResponse(type:string,res:any){
        if(type === 'success'){
            return {
                status:200,
                data:res
            }
        }else{
            return {
                status:404,
                msg:res
            }
        }
    }
    @Get()
    async findAll(@Res() res: Response) {
        try {
            const response = await this.eduFormService.findAll()
            if (response) {
                return await this.sendResponse('success',res.send(response))
              } 
              return this.sendResponse('error',res.send(response))

        } catch (error) {
            throw new BadRequestException({
                msg:networkError,
                error
            })
        }
    }
    @Get(':id')
    async findOne(@Param() id: number, @Res() res: Response) {
        try {
            const response = await this.eduFormService.findOne(id)
            if (response) {
                return await this.sendResponse('success',res.send(response))
              } 
              return this.sendResponse('error',res.send(response))

        } catch (error) {
            throw new BadRequestException({
                msg:networkError,
                error
            })
        }
    }
    @Post()
    async create(@Body() createFormDto: EducationFormDto, @Res() res: Response) {
        try {
            const response = await this.eduFormService.create(createFormDto)
            if (response) {
                return await this.sendResponse('success',res.send(response))
              } 
              return this.sendResponse('error',res.send(response))

        } catch (error) {
            throw new BadRequestException({
                msg:networkError,
                error
            })
        }
    }
    @Put(':id')
    async update(@Param() id: number, @Body() createFormDto: EducationFormDto, @Res() res: Response) {
        try {
            const response =  this.eduFormService.update(id, createFormDto)
            if (response) {
                return await this.sendResponse('success',res.send(response))
              } 
              return this.sendResponse('error',res.send(response))

        } catch (error) {
            throw new BadRequestException({
                msg:networkError,
                error
            })
        }
    }
    @Delete(':id')
    async delete(@Param() id: number, @Res() res: Response) {
        try {
            const response =  this.eduFormService.delete(id)
            if (response) {
                return await this.sendResponse('success',res.send(response))
              } 
              return this.sendResponse('error',res.send(response))

        } catch (error) {
            throw new BadRequestException({
                msg:networkError,
                error
            })
        }
    }
}
