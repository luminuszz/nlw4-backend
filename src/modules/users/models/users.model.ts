import { User as PrismaUser } from '@prisma/client';

export class User implements PrismaUser {
	public id: string;

	public name: string;

	public email: string;

	public createdAt: Date;

	public password: string;

	public updatedAt: Date;
}
