import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './models/users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}

	@Post()
	async create(@Body() createUserDTO: CreateUserDTO): Promise<User> {
		const user = await this.userService.create(createUserDTO);

		return user;
	}

	@Put(':id')
	async updated(
		@Param('id') id: string,
		@Body() updatedUserDTO: UpdateUserDTO,
	): Promise<User> {
		return this.userService.updateUser(id, updatedUserDTO);
	}
}
