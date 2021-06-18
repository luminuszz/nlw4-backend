import * as faker from "faker";
import { CreateUserDTO } from "modules/users/dto/create-user";

export const userFactory = {
	createUserDTO: (): CreateUserDTO => ({
		email: faker.internet.email(),
		name: faker.name.firstName(),
		password: faker.random.alphaNumeric().toString(),
	}),
};
