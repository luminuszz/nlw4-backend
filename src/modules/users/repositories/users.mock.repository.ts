import { User } from "@prisma/client";
import { v4 } from "uuid";
import { CreateUserDTO } from "../dto/create-user";
import { UpdateUserDTO } from "../dto/update-user.dto";
import { IUsersRepository } from "../models/users.repository";

export class UserRepositoryMock implements IUsersRepository {
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

	findUserByEmailWithoutUserId(email: string, id: string): User {
		return this.model.find(
			(user) => user.email === email && user.id !== id
		);
	}
}
