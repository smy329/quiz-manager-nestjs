import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import {
  TypeOrmModule,
  getDataSourceToken,
  getRepositoryToken,
} from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { customQuizRepository } from './quiz.repository';
import { Quiz } from './quiz.entity';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [
    {
      provide: getRepositoryToken(Quiz),
      inject: [getDataSourceToken()],
      useFactory(datasource: DataSource) {
        return datasource.getRepository(Quiz).extend(customQuizRepository);
      },
    },
    QuizService,
  ],
})
export class QuizModule {}
