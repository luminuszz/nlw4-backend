export abstract class HashProvider {
	public abstract hashValue(value: string): Promise<string>;

	public abstract compareValues(
		value: string,
		hashedValue: string,
	): Promise<boolean>;
}
