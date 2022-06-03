import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { TechdetailFormService } from './techdetail-form/techdetail-form.service';
import { Response } from 'express';
import { TechdetailsFormEntity } from './techdetail.entity';
import { networkError } from 'src/common/constant/error-response';
@Controller('techdetails-form')
export class TechdetailsFormController {
    constructor(private techFormService: TechdetailFormService) { }
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
            const response = await this.techFormService.findAll()
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
            const response = await this.techFormService.findOne(id)
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
    @UsePipes(new ValidationPipe())
    async create(@Body() createFormDto: TechdetailsFormEntity, @Res() res: Response) {
        try {
            const response = await this.techFormService.create(createFormDto)
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
    async update(@Param() id: number, @Body() createFormDto: TechdetailsFormEntity, @Res() res: Response) {
        try {
            const response =  this.techFormService.update(id, createFormDto)
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
            const response =  this.techFormService.delete(id)
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
