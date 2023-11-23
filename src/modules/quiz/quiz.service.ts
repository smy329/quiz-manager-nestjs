import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';

import { Quiz } from './quiz.entity';
import { CreateQuizDTO } from './dto/createQuiz.dto';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private quizRepository: QuizRepository) {}

  async getAllQuiz() {
    return await this.quizRepository.getQuizes();
  }

  // async createNewQuiz(quiz: CreateQuiDTO) {
  //   return await this.quizRepository.save(quiz);
  // }

  async createQuiz(createQuizDto: CreateQuizDTO): Promise<Quiz> {
    const quiz: Quiz = this.quizRepository.create(createQuizDto);

    return await this.quizRepository.createQuiz(quiz);
  }
}
