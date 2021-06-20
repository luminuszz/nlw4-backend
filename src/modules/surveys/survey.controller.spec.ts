import { Test } from "@nestjs/testing";
import { surveyFactory } from "shared/utils/survet.util";
import { SurveyRepository } from "./repositories";
import { SurveysController } from "./surveys.controller";
import { SurveysService } from "./surveys.service";

describe("surveys.controller", () => {
	let surveyController: SurveysController;

	beforeEach(async () => {
		const moduleRef = await Test.createTestingModule({
			controllers: [SurveysController],
			providers: [SurveysService, SurveyRepository],
		}).compile();

		surveyController = moduleRef.get<SurveysController>(SurveysController);
	});

	describe("create", () => {
		it("it should be to create a new survey", async () => {
			const survey = await surveyController.create(
				surveyFactory.createSurveyDTO()
			);

			expect(survey).toHaveProperty("id");

			expect(survey.createdAt).toBeInstanceOf(Date);
		});
	});

	describe("show", () => {
		it("it should be able to a list all survey", async () => {
			const survey1 = await surveyController.create(
				surveyFactory.createSurveyDTO()
			);
			const survey2 = await surveyController.create(
				surveyFactory.createSurveyDTO()
			);

			const surveys = await surveyController.show();

			const findSurveys = surveys.filter(
				(item) => item.id === survey1.id || item.id === survey2.id
			);

			expect(findSurveys.length).toBe(2);
		});
	});
});
