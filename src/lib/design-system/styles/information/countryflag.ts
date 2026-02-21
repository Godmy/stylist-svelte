import {
	COUNTRY_FLAG_BASE_CLASSES,
	COUNTRY_FLAG_FALLBACK_BASE_CLASSES,
	resolveCountryFlagEmoji
} from '../../classes/information/countryflag';
import { cn } from '../../utils/cn/index';

export class CountryFlagStyleManager {
	static resolveCountryFlagEmoji(code = ''): string {
		return resolveCountryFlagEmoji(code);
	}

	static getCountryFlagClasses(className = ''): string {
		return cn(COUNTRY_FLAG_BASE_CLASSES, className);
	}

	static getCountryFlagFallbackClasses(className = ''): string {
		return cn(COUNTRY_FLAG_FALLBACK_BASE_CLASSES, className);
	}

	static getCountryFlagStyle(size: number): string {
		return `width: ${size}px; height: ${size}px; font-size: ${size}px; line-height: ${size}px;`;
	}
}
