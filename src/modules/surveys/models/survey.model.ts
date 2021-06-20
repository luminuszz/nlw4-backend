import { Survey as PrimaSurvey } from "@prisma/client";

export class Survey implements PrimaSurvey {
	id: string;

	title: string;

	description: string;

	createdAt: Date;

	updatedAt: Date;
}
