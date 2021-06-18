import { BadRequestException } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { HashService } from "shared/providers/hash/hash.service";
import { CreateUserDTO } from "./dto/create-user";
import { UpdateUserDTO } from "./dto/update-user.dto";

import { IUsersRepository } from "./repositories/users.repository";

@Injectable()
export class UsersService {
	constructor(
		private readonly usersRepository: IUsersRepository,
		private readonly hashService: HashService
	) {}

	async create(createUserDTO: CreateUserDTO) {
		const { name, email, password } = createUserDTO;

		const verifyUserExists = await this.usersRepository.findUnique(
			"email",
			email
		);

		if (verifyUserExists) {
			throw new BadRequestException("User already exists");
		}

		const passwordHash = await this.hashService.hashValue(password);

		return this.usersRepository.create({
			name,
			email,
			password: passwordHash,
		});
	}

	async updateUser(id: string, updateUserDTO: UpdateUserDTO) {
		const findUser = await this.usersRepository.findUnique("id", id);

		if (!findUser) {
			throw new BadRequestException("User not found");
		}

		if (updateUserDTO.password) {
			updateUserDTO.password = await this.hashService.hashValue(
				updateUserDTO.password
			);
		}

		return this.usersRepository.update(id, { ...updateUserDTO });
	}

	async findUserByEmail(email: string) {
		const user = await this.usersRepository.findUnique("email", email);

		if (!user) {
			throw new BadRequestException("User not found");
		}

		return user;
	}

	async findUserById(id: string) {
		const user = await this.usersRepository.findUnique("id", id);

		if (!user) {
			throw new BadRequestException("User not found");
		}

		return user;
	}
}
