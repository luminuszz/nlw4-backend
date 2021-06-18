import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
	@Get()
	teste() {
		return {
			ok: true,
		};
	}
}
