import { CountryFlagStyleManager } from './countryflag';
import { IconStyleManager } from './icons';
import { ImageStyleManager } from './image';

/**
 * Backward-compatible facade.
 * New code should import focused managers:
 * - IconStyleManager
 * - ImageStyleManager
 * - CountryFlagStyleManager
 */
export class MediaStyleManager {
	static getIconChevronClasses(options: {
		isOpen?: boolean;
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
		direction?: 'up' | 'down' | 'left' | 'right';
		variant?:
			| 'default'
			| 'primary'
			| 'secondary'
			| 'success'
			| 'warning'
			| 'danger'
			| 'info'
			| 'solid'
			| 'outline'
			| 'ghost'
			| 'link'
			| 'subtle'
			| 'neutral'
			| 'dark'
			| 'light';
		disabled?: boolean;
		className?: string;
	}): string {
		return IconStyleManager.getIconChevronClasses(options);
	}

	static getIconCircleClasses(options: {
		variant?:
			| 'default'
			| 'primary'
			| 'secondary'
			| 'success'
			| 'warning'
			| 'danger'
			| 'info'
			| 'solid'
			| 'outline'
			| 'ghost'
			| 'link'
			| 'subtle'
			| 'neutral'
			| 'dark'
			| 'light';
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
		filled?: boolean;
		disabled?: boolean;
		className?: string;
	}): string {
		return IconStyleManager.getIconCircleClasses(options);
	}

	static getIconWrapperClasses(options: {
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
		variant?:
			| 'default'
			| 'primary'
			| 'secondary'
			| 'success'
			| 'warning'
			| 'danger'
			| 'info'
			| 'solid'
			| 'outline'
			| 'ghost'
			| 'link'
			| 'subtle'
			| 'neutral'
			| 'dark'
			| 'light';
		shape?: 'circle' | 'square' | 'rounded';
		color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
		disabled?: boolean;
		className?: string;
	}): string {
		return IconStyleManager.getIconWrapperClasses(options);
	}

	static resolveCountryFlagEmoji(code = ''): string {
		return CountryFlagStyleManager.resolveCountryFlagEmoji(code);
	}

	static getCountryFlagClasses(className = ''): string {
		return CountryFlagStyleManager.getCountryFlagClasses(className);
	}

	static getCountryFlagStyle(size: number): string {
		return CountryFlagStyleManager.getCountryFlagStyle(size);
	}

	static getCountryFlagFallbackClasses(className = ''): string {
		return CountryFlagStyleManager.getCountryFlagFallbackClasses(className);
	}

	static getFaviconUrl(url?: string): string | null {
		return ImageStyleManager.getFaviconUrl(url);
	}

	static getFaviconImageClasses(className = ''): string {
		return ImageStyleManager.getFaviconImageClasses(className);
	}

	static getFaviconFallbackClasses(baseClasses: string): string {
		return ImageStyleManager.getFaviconFallbackClasses(baseClasses);
	}

	static getFaviconStyle(size: number): string {
		return ImageStyleManager.getFaviconStyle(size);
	}

	static getImageWithCaptionHostClasses(options: {
		className?: string;
		rounded?: boolean;
		bordered?: boolean;
		shadow?: boolean;
	}): string {
		return ImageStyleManager.getImageWithCaptionHostClasses(options);
	}

	static getImageWithCaptionImageClasses(options: {
		className?: string;
		rounded?: boolean;
		bordered?: boolean;
		shadow?: boolean;
	}): string {
		return ImageStyleManager.getImageWithCaptionImageClasses(options);
	}

	static getImageWithCaptionTextClasses(className = ''): string {
		return ImageStyleManager.getImageWithCaptionTextClasses(className);
	}

	static getAnnouncementBannerContainerClasses(className = ''): string {
		return ImageStyleManager.getAnnouncementBannerContainerClasses(className);
	}

	static getAnnouncementBannerFlexContainerClasses(className = ''): string {
		return ImageStyleManager.getAnnouncementBannerFlexContainerClasses(className);
	}

	static getAnnouncementBannerIconClasses(className = ''): string {
		return ImageStyleManager.getAnnouncementBannerIconClasses(className);
	}

	static getAnnouncementBannerContentClasses(className = ''): string {
		return ImageStyleManager.getAnnouncementBannerContentClasses(className);
	}

	static getAnnouncementBannerTitleClasses(className = ''): string {
		return ImageStyleManager.getAnnouncementBannerTitleClasses(className);
	}

	static getAnnouncementBannerDescriptionClasses(className = ''): string {
		return ImageStyleManager.getAnnouncementBannerDescriptionClasses(className);
	}

	static getAnnouncementBannerChildrenContainerClasses(className = ''): string {
		return ImageStyleManager.getAnnouncementBannerChildrenContainerClasses(className);
	}
}
