import { Provider } from "@nestjs/common";
import { IUsersRepository } from "./users.repository";

import { UserRepositoryMock } from "../mocks/user.util";

import { PrismaUserRepository } from "./users.prisma.repository";

const env = process.env.NODE_ENV;

export const UsersRepository: Provider = {
	provide: IUsersRepository,
	useClass: env === "testing" ? UserRepositoryMock : PrismaUserRepository,
};
