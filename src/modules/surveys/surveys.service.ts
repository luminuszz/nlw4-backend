import { Injectable } from "@nestjs/common";
import { Survey } from "@prisma/client";
import { CreateSurveyDTO } from "./dto/create-survey.dto";
import { ISurveyRepository } from "./models/survey.repository";

@Injectable()
class SurveysService {
	constructor(private readonly surveyRepository: ISurveyRepository) {}

	async createSurvey(createSurveyDTO: CreateSurveyDTO): Promise<Survey> {
		return this.surveyRepository.create(createSurveyDTO);
	}

	async findAllSurveys(): Promise<Survey[]> {
		return this.surveyRepository.findAll();
	}
}

export { SurveysService };
