import { Survey } from "@prisma/client";
import { CreateSurveyDTO } from "../dto/create-survey.dto";

abstract class ISurveyRepository {
	abstract create(createSurveyDTO: CreateSurveyDTO): Promise<Survey> | Survey;

	abstract findAll(): Promise<Survey[]> | Survey[];
}

export { ISurveyRepository };
