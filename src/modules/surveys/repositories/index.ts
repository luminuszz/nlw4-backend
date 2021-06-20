import { Provider } from "@nestjs/common";
import { ISurveyRepository } from "../models/survey.repository";
import { SurveyMockRepository } from "./survey.mock.repository";
import { SurveyPrismaRepository } from "./survey.prisma.repository";

const env = process.env.NODE_ENV;

export const SurveyRepository: Provider = {
	provide: ISurveyRepository,
	useClass: env === "testing" ? SurveyMockRepository : SurveyPrismaRepository,
};
