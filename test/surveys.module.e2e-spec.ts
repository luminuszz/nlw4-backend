import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { SurveysModule } from "modules/surveys/surveys.module";
import { surveyFactory } from "shared/utils/survet.util";

import * as request from "supertest";

describe("survey.module (e2e)", () => {
	let app: INestApplication;

	let server: any;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [SurveysModule],
		}).compile();

		app = moduleFixture.createNestApplication();

		await app.init();

		server = app.getHttpServer();
	});

	describe("/surveys (POST)", () => {
		it("should be able to create new survey", async () => {
			return request(server)
				.post("/surveys")
				.send(surveyFactory.createSurveyDTO())
				.expect(201)
				.expect((res) => res.body.id);
		});
	});

	describe("/surveys (GET) ", () => {
		it("should be able to get list", async () => {
			await request(server)
				.post("/surveys")
				.send(surveyFactory.createSurveyDTO());

			return request(server)
				.get("/surveys")
				.expect(200)
				.expect((res) => res.body.length > 0);
		});
	});
});
