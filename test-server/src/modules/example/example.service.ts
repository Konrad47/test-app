import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Example } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExampleDto } from './dto';

@Injectable()
export class ExampleService {
  constructor(private readonly prisma: PrismaService) {}

  async getExamples(): Promise<Example[]> {
    try {
      const examples = await this.prisma.example.findMany();
      return examples;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to get examples: ${error.message}`,
      );
    }
  }

  async createExample(dto: ExampleDto): Promise<Example> {
    try {
      const example = await this.prisma.example.create({
        data: {
          title: dto.title,
        },
      });
      return example;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to create example: ${error.message}`,
      );
    }
  }

  async updateExample(id: number, dto: ExampleDto): Promise<Example> {
    try {
      const example = await this.prisma.example.update({
        where: {
          id,
        },
        data: {
          title: dto.title,
        },
      });
      return example;
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to update example: ${error.message}`,
      );
    }
  }

  async deleteExample(id: number): Promise<{ success: boolean }> {
    try {
      await this.prisma.example.delete({
        where: { id },
      });
      return { success: true };
    } catch (error) {
      throw new InternalServerErrorException(
        `Failed to delete example: ${error.message}`,
      );
    }
  }
}
