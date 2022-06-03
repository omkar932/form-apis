import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { BasicFormService } from './basic-form/basic-form.service';
import { Response } from 'express';
import { UserBasicFormEntity } from './userbasic-form.entity';
import { UserBasicFormDto } from './userbasic.dto';
import { networkError } from 'src/common/constant/error-response';
@Controller('userbasic-form')
export class BasicFormController {
    constructor(private basicFormService: BasicFormService) { }
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
            const response = await this.basicFormService.findAll()
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
            const response = await this.basicFormService.findOne(id)
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
    async create(@Body() createFormDto: UserBasicFormDto, @Res() res: Response) {
        try {
            const response = await this.basicFormService.create(createFormDto)
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
    async update(@Param() id: number, @Body() createFormDto: UserBasicFormDto, @Res() res: Response) {
        try {
            const response = this.basicFormService.update(id, createFormDto)
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
            const response = this.basicFormService.delete(id)
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
