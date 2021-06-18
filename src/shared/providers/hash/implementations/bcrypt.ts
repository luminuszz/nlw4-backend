import { HashProvider } from '../hash.provider';

import * as bcrypt from 'bcrypt';

export class BcryptProvider implements HashProvider {
	public async hashValue(value: string): Promise<string> {
		return bcrypt.hash(value, 10);
	}
	public async compareValues(
		value: string,
		hashValue: string,
	): Promise<boolean> {
		return bcrypt.compare(value, hashValue);
	}
}
