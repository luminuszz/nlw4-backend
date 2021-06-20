import * as dotenv from "dotenv";

const options = {
	development: "./.env.development",
	teste2e: ".env.test2e",
};

export const setEnv = () => {
	const currentNodeEnv = process.env.NODE_ENV as keyof typeof options;

	return dotenv.config({ path: options[currentNodeEnv] });
};
