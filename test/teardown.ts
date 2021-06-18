import { PrismaClient } from "@prisma/client";

export default async function bootstrap() {
	const prismaInstance = new PrismaClient();

	await prismaInstance.$executeRaw`drop schema public cascade`;

	process.exit();
}
