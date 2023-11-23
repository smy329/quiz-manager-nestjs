import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateQuiDTO {
  @IsNotEmpty({ message: 'The quiz should have a title' })
  @IsString({ message: 'The title must be a string' })
  @Length(1, 100)
  title: string;

  @IsNotEmpty({ message: 'The quiz should have a description' })
  @IsString({ message: 'The description must be a string' })
  @Length(5)
  description: string;
}
