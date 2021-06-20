import { CreateUserDTO } from "../dto/create-user";
import { UpdateUserDTO } from "../dto/update-user.dto";
import { User } from "../models/users.model";

abstract class IUsersRepository {
	abstract create(createUserDTO: CreateUserDTO): Promise<User> | User;

	abstract update(id: string, updUser: UpdateUserDTO): Promise<User> | User;

	abstract findAll(): Promise<User[]> | User[];

	abstract findUnique(key: keyof User, value: string): Promise<User> | User;

	abstract findUserByEmailWithoutUserId(
		email: string,
		id: string
	): Promise<User> | User;
}

export { IUsersRepository };
