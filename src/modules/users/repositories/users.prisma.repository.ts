import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { User } from "../models/users.model";
import { PrismaRepository } from "shared/prisma/prisma.repository";
import { CreateUserDTO } from "../dto/create-user";
import { UpdateUserDTO } from "../dto/update-user.dto";
import { IUsersRepository } from "../models/users.repository";

type UserRepositoryInterface = Prisma.UserDelegate<
	Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;

@Injectable()
export class PrismaUserRepository implements IUsersRepository {
	private interface: UserRepositoryInterface;

	constructor(private readonly baseRepository: PrismaRepository) {
		this.interface = this.baseRepository.user;
	}

	async create(createUserDTO: CreateUserDTO): Promise<User> {
		return this.interface.create({
			data: { ...createUserDTO },
		});
	}

	async update(id: string, updateUserDTO: UpdateUserDTO): Promise<User> {
		return this.interface.update({
			where: { id },
			data: { ...updateUserDTO },
		});
	}

	async findAll() {
		return this.interface.findMany();
	}

	async findUnique(key: keyof User, value: string) {
		return this.interface.findUnique({
			where: { [key]: value },
		});
	}

	async findUserByEmailWithoutUserId(
		email: string,
		id: string
	): Promise<User> {
		return this.interface.findFirst({
			where: {
				email,
				NOT: {
					id,
				},
			},
		});
	}
}
