import { OmitType } from '@nestjs/mapped-types';
import { Survey } from '../models/survey,model';

export class CreateSurveyDTO extends OmitType(Survey, [
	'id',
	'createdAt',
	'updatedAt',
]) {}
