import { Provider } from "@nestjs/common";
import { IUsersRepository } from "../models/users.repository";

import { UserRepositoryMock } from "./users.mock.repository";

import { PrismaUserRepository } from "./users.prisma.repository";

const env = process.env.NODE_ENV;

export const UsersRepository: Provider = {
	provide: IUsersRepository,
	useClass: env === "testing" ? UserRepositoryMock : PrismaUserRepository,
};
