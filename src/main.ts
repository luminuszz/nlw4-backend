import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import { setEnv } from "config/env";

setEnv();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(process.env.API_PORT || 3333);
}
bootstrap();
