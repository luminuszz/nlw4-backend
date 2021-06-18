import { Test } from "@nestjs/testing";
import { UsersService } from "./users.service";

import { UsersRepository } from "./repositories";
import { HashProviderModule } from "shared/providers/hash/hash.module";
import { userFactory } from "./mocks/user.util";
import { BadRequestException } from "@nestjs/common";
import { UsersController } from "./users.controller";

describe("users.controller", () => {
	let usersController: UsersController;

	beforeEach(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [HashProviderModule],
			controllers: [UsersController],
			providers: [UsersService, UsersRepository],
		}).compile();

		usersController = moduleRef.get<UsersController>(UsersController);
	});

	it("should be able to create  a new User", async () => {
		const createUserDTO = userFactory.createUserDTO();

		const createdUser = await usersController.create(createUserDTO);

		expect(createdUser).toHaveProperty("id");
	});

	it("should not be to create a new User with same email", async () => {
		const user1 = await usersController.create(userFactory.createUserDTO());

		await expect(
			usersController.create({
				email: user1.email,
				name: "Davi teste",
				password: "123456",
			})
		).rejects.toBeInstanceOf(BadRequestException);
	});

	it("should be able to create  a new User", async () => {
		const createUserDTO = userFactory.createUserDTO();

		const { id } = await usersController.create(createUserDTO);

		const updatedUser = await usersController.updated(id, {
			name: "José carlos",
		});

		expect(updatedUser.name).toBe("José carlos");
	});
});
