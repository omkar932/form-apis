import { BadRequestException, Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { DocumentUploadService } from './document-upload/document-upload.service';
import { Response } from 'express';
import { DocumentUploadEntity } from './document-upload.entity';
import { DocumentUploadDto } from './document-upload.dto';
import { networkError } from 'src/common/constant/error-response';
@Controller('document-upload')
export class DocumentUploadController {

    constructor(private basicFormService: DocumentUploadService) { }
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
    async create(@Body() createFormDto: DocumentUploadDto, @Res() res: Response) {
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
    async update(@Param() id: number, @Body() createFormDto: DocumentUploadDto, @Res() res: Response) {
        try {
            const response =  this.basicFormService.update(id, createFormDto)
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
