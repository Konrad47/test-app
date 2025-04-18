import { IsNotEmpty, IsString } from 'class-validator';

export class ExampleDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}
