import { Prisma, Survey } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaRepository } from "shared/prisma/prisma.repository";
import { CreateSurveyDTO } from "../dto/create-survey.dto";
import { ISurveyRepository } from "../models/survey.repository";

type Interface = Prisma.SurveyDelegate<
	Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;

@Injectable()
class SurveyPrismaRepository implements ISurveyRepository {
	private interface: Interface;

	constructor(private readonly baseRepository: PrismaRepository) {
		this.interface = this.baseRepository.survey;
	}

	async create(createSurveyDTO: CreateSurveyDTO): Promise<Survey> {
		return this.interface.create({
			data: createSurveyDTO,
		});
	}

	async findAll(): Promise<Survey[]> {
		return this.interface.findMany();
	}
}

export { SurveyPrismaRepository };
