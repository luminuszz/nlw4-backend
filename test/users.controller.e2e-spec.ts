import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { userFactory } from "../src/shared/utils/user.util";

describe("users.controller (e2e)", () => {
	let app: INestApplication;

	let server: any;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();

		await app.init();

		server = app.getHttpServer();
	});

	it("/users (POST)", () => {
		const createUserDTO = userFactory.createUserDTO();

		return request(server)
			.post("/users")
			.send(createUserDTO)
			.expect(201)
			.expect((res) => res.body.name === createUserDTO.name);
	});

	it("/users (PUT)", async () => {
		const createUserDTO = userFactory.createUserDTO();

		const response = await request(server)
			.post("/users")
			.send(createUserDTO);

		const { id } = response.body;

		return request(server)
			.put(`/users/${id}`)
			.send({
				name: "Carlos de teste teste",
			})
			.expect(200)
			.expect((res) => res.body.name === "Carlos de teste teste");
	});

	it("/users (GET)", () => {
		return request(server)
			.get("/users")
			.expect(200)
			.expect((res) => res.body.length > 0);
	});

	afterAll(async () => {
		await app.close();
	});
});
