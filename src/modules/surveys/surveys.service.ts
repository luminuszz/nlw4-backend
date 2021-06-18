import { Injectable } from '@nestjs/common';
import { Survey } from '@prisma/client';
import { CreateSurveyDTO } from './dto/create-survey.dto';
import { SurveyRepository } from './repositories/survey.repository';

@Injectable()
export class SurveysService {
	constructor(private readonly surveyRepository: SurveyRepository) {}

	async createSurvey(CreateSurveyDTO: CreateSurveyDTO): Promise<Survey> {
		return this.surveyRepository.interface.create({
			data: {
				...CreateSurveyDTO,
			},
		});
	}

	async showAllSurveys(): Promise<Survey[]> {
		return this.surveyRepository.interface.findMany();
	}
}
