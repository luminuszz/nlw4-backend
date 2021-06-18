import { Test } from "@nestjs/testing";
import { UsersService } from "./users.service";

import { UsersRepository } from "./repositories";
import { HashProviderModule } from "shared/providers/hash/hash.module";
import { userFactory } from "./mocks/user.util";

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
});
