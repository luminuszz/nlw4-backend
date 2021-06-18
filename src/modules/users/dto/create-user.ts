import { User } from '../models/users.model';
import { OmitType } from '@nestjs/mapped-types';

export class CreateUserDTO extends OmitType(User, [
	'id',
	'createdAt',
	'updatedAt',
] as const) {}
