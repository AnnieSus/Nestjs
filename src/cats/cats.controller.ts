import { Body, Controller, Get, HttpCode, Param, Post, Query, Redirect, Req, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { Request,Response } from 'express';
import { request } from 'http';
import { Header } from '@nestjs/common';
import { version } from 'os';
import { Observable, of } from 'rxjs';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/create-cat.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
    constructor (private catsService: CatsService) {}

     @Post()
    async create(@Body() createCatDto:CreateCatDto) {
        return this.catsService.create(createCatDto);
    }

    @Get()
    async findAll():Promise <any[]> {
        return this.catsService.findAll();
    }

    
    //**********************Library specific Approach **************************//
    // @Post()
    // create(@Res() res:Response) {
    //     res.status(HttpStatus.CREATED).send();
    // }

    // @Get()
    // findAll(@Res() res:Response) {
    //     res.status(HttpStatus.OK).json([]);
    // }

    // @Get()
    // findAllVal(@Res({ passthrough: true}) res:Response) {
    //     res.status(HttpStatus.OK);
    //     return [];
    // }
    // *********************Standard Approach**********************//
    // @Post()
    // create(@Body() createCatDto:CreateCatDto) : string{
    //     return 'This adds new cat';
    // }

    // @Get()
    // findAll(@Query() query: ListAllEntities)
    // {
    //     return `This action returns all cats (limit: ${query.limit} items)`;
    // }

    // @Get(':id')
    // findOne(@Param(':id') id:string): string {
    //     console.log(id);
    //     return `This action returns a #${id} cat`
    // }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    //     return `This action updates a #${id} cat`;
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return `This action removes a #${id} cat`;
    // }

    // @Post()
    // @HttpCode(205)
    // @Header('Cache-Control', 'none')
    // create() : string{
    //     return 'This adds new cat';
    // }

    // @Post()
    // @HttpCode(205)
    // @Header('Cache-Control', 'none')
    // create(@Body() createCatDto:CreateCatDto) : string{
    //     return 'This adds new cat';
    // }

    // @Get()
    // async findAll():Promise <any[]> {
    //     return [];
    // }

    // @Get()
    // findAll():Observable <any[]> {
    //     return of([]);
    // }

    // @Get(':id')
    // findOne(@Param() params): string {
    //     console.log(params.id);
    //     return `This action returns a #${params.id} cat`
    // }

   
    // @Get()
    // @Redirect('https://docs.nestjs.com',205)
    // getDocs(@Query('version')version){
    //     if(version && version ==s= '5'){
    //         return {
    //             url:'https://docs.nestjs.com/v5/',
    //             statuscode: 201
    //         }
    //     }
    // }
    // @Get()
    // findAll(@Req() request:Request):string{
    //     return 'This action returns all cats';
    // }
    // @Get('ab*cd')
    // findAll(){
    //     return 'This uses wildcard';
    //}
}
