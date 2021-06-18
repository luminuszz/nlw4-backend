import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

import { PrismaModule } from "shared/prisma/prisma.module";
import { HashProviderModule } from "shared/providers/hash/hash.module";

import { UsersRepository } from "./repositories";

@Module({
	imports: [PrismaModule, HashProviderModule],
	providers: [UsersService, UsersRepository],
	controllers: [UsersController],
})
export class UsersModule {}
