import type { CountryFlagSize } from './common';

export interface CountryFlagProps {
	countryCode?: string;
	size?: CountryFlagSize;
	class?: string;
	content?: string;
}
