import { Test } from "@nestjs/testing";
import { UsersService } from "./users.service";

import { UsersRepository } from "./repositories";
import { HashProviderModule } from "shared/providers/hash/hash.module";
import { userFactory } from "shared/utils/user.util";
import { BadRequestException } from "@nestjs/common";

describe("users.service", () => {
	let usersService: UsersService;

	beforeEach(async () => {
		const moduleRef = await Test.createTestingModule({
			imports: [HashProviderModule],
			providers: [UsersService, UsersRepository],
		}).compile();

		usersService = moduleRef.get<UsersService>(UsersService);
	});

	it("should be able to create  a new User", async () => {
		const createUserDTO = userFactory.createUserDTO();

		const createdUser = await usersService.create(createUserDTO);

		expect(createdUser).toHaveProperty("id");
	});

	it("should not be to create a new User with same email", async () => {
		const user1 = await usersService.create(userFactory.createUserDTO());

		await expect(
			usersService.create({
				email: user1.email,
				name: "Davi teste",
				password: "123456",
			})
		).rejects.toBeInstanceOf(BadRequestException);
	});

	it("should be able to find one user by Id", async () => {
		const createUserDTO = userFactory.createUserDTO();

		const { id } = await usersService.create(createUserDTO);

		const user = await usersService.findUserById(id);

		expect(user.id).toBe(id);
	});

	it("should be able to find one user by email", async () => {
		const createUserDTO = userFactory.createUserDTO();

		const { email } = await usersService.create(createUserDTO);

		const user = await usersService.findUserByEmail(email);

		expect(user.email).toBe(email);
	});

	it("should be able to update User ", async () => {
		const createUserDTO = userFactory.createUserDTO();

		const createdUser = await usersService.create(createUserDTO);

		const updatedUser = await usersService.updateUser(createdUser.id, {
			name: "Carlos Magun",
		});

		expect(updatedUser.name).toBe("Carlos Magun");
	});
});
