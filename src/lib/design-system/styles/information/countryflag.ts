import { cn } from '../../utils/cn/index';

export class CountryFlagStyleManager {
	static resolveCountryFlagEmoji(code = ''): string {
		const value = code.trim().toUpperCase();
		if (!/^[A-Z]{2}$/.test(value)) return '';
		return String.fromCodePoint(...value.split('').map((char) => 127397 + char.charCodeAt(0)));
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


