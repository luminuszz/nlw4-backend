import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { UsersModule } from "./modules/users/users.module";
import { SurveysModule } from "./modules/surveys/surveys.module";

@Module({
	imports: [UsersModule, SurveysModule],
	controllers: [AppController],
})
export class AppModule {}
