import { v4 } from "uuid";

export class BaseMockRepository {
	protected generateUUID() {
		return v4();
	}

	protected generateTimestamp() {
		return {
			updatedAt: new Date(),
			createdAt: new Date(),
		};
	}
}
