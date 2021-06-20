import { Test } from "@nestjs/testing";
import { surveyFactory } from "shared/utils/survet.util";
import { ISurveyRepository } from "./models/survey.repository";
import { SurveyRepository } from "./repositories";
import { SurveysService } from "./surveys.service";

describe("survey.service", () => {
	let surveyService: SurveysService;
	let surveyRepository: ISurveyRepository;

	beforeEach(async () => {
		const moduleRef = await Test.createTestingModule({
			providers: [SurveyRepository, SurveysService],
		}).compile();

		surveyService = moduleRef.get<SurveysService>(SurveysService);
		surveyRepository = moduleRef.get<ISurveyRepository>(ISurveyRepository);
	});

	describe("create", () => {
		it("should be able to create a new survey", async () => {
			jest.spyOn(surveyRepository, "create").mockImplementation(
				async () => ({
					createdAt: new Date(),
					description: "dad",
					title: "dsad",
					id: "dsadas",
					updatedAt: new Date(),
				})
			);

			const survey = await surveyService.createSurvey(
				surveyFactory.createSurveyDTO()
			);

			console.log(survey.description);

			expect(survey).toHaveProperty("id");
		});
	});

	describe("findAllSurveys", () => {
		it("should be able to list all survey", async () => {
			await surveyService.createSurvey(surveyFactory.createSurveyDTO());
			await surveyService.createSurvey(surveyFactory.createSurveyDTO());

			const surveys = await surveyService.findAllSurveys();

			expect(surveys.length).toBe(2);
			expect(surveys[0]).toHaveProperty("id");
		});
	});

	it.todo("should be able to  get one survey by id");
});
