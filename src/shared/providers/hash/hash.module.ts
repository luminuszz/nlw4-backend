import { Module } from '@nestjs/common';
import { HashService } from './hash.service';

import { HashProviderFactory } from './implementations';

@Module({
	providers: [HashService, HashProviderFactory],
	exports: [HashService],
})
export class HashProviderModule {}
