import { Injectable } from "@nestjs/common";
import { Survey } from "../models/survey.model";
import { CreateSurveyDTO } from "../dto/create-survey.dto";
import { ISurveyRepository } from "../models/survey.repository";

import {} from "uuid";
import { BaseMockRepository } from "shared/utils/base.mock.repository";

@Injectable()
class SurveyMockRepository
	extends BaseMockRepository
	implements ISurveyRepository
{
	private model: Survey[] = [];

	create(createSurveyDTO: CreateSurveyDTO): Survey {
		const newSurvey = Object.assign(createSurveyDTO, {
			id: this.generateUUID(),
			...this.generateTimestamp(),
		});

		this.model.push(newSurvey);

		return newSurvey;
	}

	findAll(): Survey[] {
		return this.model;
	}
}

export { SurveyMockRepository };
