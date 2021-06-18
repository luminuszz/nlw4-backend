import { Module } from "@nestjs/common";
import { SurveysService } from "./surveys.service";
import { SurveysController } from "./surveys.controller";
import { PrismaModule } from "shared/prisma/prisma.module";
import { SurveyRepository } from "./repositories/survey.repository";

@Module({
	imports: [PrismaModule],
	providers: [SurveysService, SurveyRepository],
	controllers: [SurveysController],
})
export class SurveysModule {}
