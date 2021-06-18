import { Provider } from '@nestjs/common';

import { HashProvider } from '../hash.provider';
import { BcryptProvider } from './bcrypt';

export const HashProviderFactory: Provider = {
	provide: HashProvider,
	useClass: BcryptProvider,
};
