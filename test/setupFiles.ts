import * as shelljs from "shelljs";

export default async function bootstrap() {
	shelljs.exec("npx prisma migrate  dev --skip-generate");
}
