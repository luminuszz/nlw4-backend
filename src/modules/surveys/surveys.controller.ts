import { Get } from "@nestjs/common";
import { Body, Controller, Post } from "@nestjs/common";
import { Survey } from "@prisma/client";
import { CreateSurveyDTO } from "./dto/create-survey.dto";
import { SurveysService } from "./surveys.service";

@Controller("surveys")
export class SurveysController {
	constructor(private readonly surveyService: SurveysService) {}

	@Post()
	async create(@Body() createSurveyDto: CreateSurveyDTO): Promise<Survey> {
		return this.surveyService.createSurvey(createSurveyDto);
	}

	@Get()
	async show() {
		return this.surveyService.findAllSurveys();
	}
}
