import { OmitType, PartialType } from '@nestjs/mapped-types';
import { User } from '../models/users.model';

export class UpdateUserDTO extends PartialType(OmitType(User, ['id'])) {}
