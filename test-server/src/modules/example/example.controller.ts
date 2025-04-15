import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ExampleService } from './example.service';
import { Example } from '@prisma/client';
import { ExampleDto } from './dto';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  async getExamples(): Promise<Example[]> {
    return await this.exampleService.getExamples();
  }

  @Post()
  async createExample(@Body() dto: ExampleDto): Promise<Example> {
    return await this.exampleService.createExample(dto);
  }

  @Put(':id')
  async updateExample(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ExampleDto,
  ): Promise<Example> {
    return await this.exampleService.updateExample(id, dto);
  }

  @Delete(':id')
  async deleteExample(@Param('id', ParseIntPipe) id: number) {
    return await this.exampleService.deleteExample(id);
  }
}
