import { CreateUserDTO } from "../dto/create-user";

import * as faker from "faker";
import { User } from "../models/users.model";
import { v4 } from "uuid";
import { UpdateUserDTO } from "../dto/update-user.dto";

export const userFactory = {
	createUserDTO: (): CreateUserDTO => ({
		email: faker.internet.email(),
		name: faker.name.firstName(),
		password: faker.random.alphaNumeric().toString(),
	}),
};

export class UserRepositoryMock {
	private model: User[] = [];

	create(createUserDTO: CreateUserDTO) {
		const user: User = {
			...createUserDTO,
			id: v4(),
			updatedAt: new Date(),
			createdAt: new Date(),
		};

		this.model.push(user);

		return user;
	}

	findAll() {
		return this.model;
	}

	findUnique(key: keyof User, value: string) {
		return this.model.find((user) => user[key] === value);
	}

	update(id: string, updateUserDTO: UpdateUserDTO) {
		const findIndex = this.model.findIndex((user) => user.id === id);

		this.model[findIndex] = { ...this.model[findIndex], ...updateUserDTO };

		return this.model[findIndex];
	}
}
