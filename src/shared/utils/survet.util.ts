import * as faker from "faker";
import { CreateSurveyDTO } from "modules/surveys/dto/create-survey.dto";

export const surveyFactory = {
	createSurveyDTO: (): CreateSurveyDTO => ({
		description: faker.random.words(20),
		title: faker.random.words(3),
	}),
};
