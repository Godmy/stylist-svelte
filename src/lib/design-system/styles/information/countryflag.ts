import { cn } from '../../utils/cn/index';
import { resolveCountryFlagEmoji } from '../../functions/information/countryflag';


export class CountryFlagStyleManager {
	static resolveCountryFlagEmoji(code = ''): string {
		return resolveCountryFlagEmoji(code);
	}

	static getCountryFlagClasses(className = ''): string {
		return cn('inline-flex items-center justify-center', className);
	}

	static getCountryFlagFallbackClasses(className = ''): string {
		return cn('inline-flex items-center justify-center rounded bg-[--color-background-secondary] text-[--color-text-secondary]', className);
	}

	static getCountryFlagStyle(size: number): string {
		return `width: ${size}px; height: ${size}px; font-size: ${size}px; line-height: ${size}px;`;
	}
}


