import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
