import { Injectable } from '@nestjs/common';
import { HashProvider } from './hash.provider';

@Injectable()
export class HashService {
	constructor(private readonly hashProvider: HashProvider) {}

	public async compareValues(value: string, hash: string): Promise<boolean> {
		const response = await this.hashProvider.compareValues(value, hash);

		return response;
	}

	public async hashValue(value: string): Promise<string> {
		const response = await this.hashProvider.hashValue(value);

		return response;
	}
}
