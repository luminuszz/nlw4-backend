import { Injectable } from '@nestjs/common';
import { PrismaRepository } from 'src/shared/prisma/prisma.repository';

@Injectable()
class SurveyRepository {
	constructor(private readonly baseRepository: PrismaRepository) {}

	public get interface() {
		return this.baseRepository.survey;
	}
}

export { SurveyRepository };
