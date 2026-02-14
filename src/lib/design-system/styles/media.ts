import {
	ICON_CHEVRON_DEFAULTS,
	ICON_CIRCLE_DEFAULTS,
	ICON_WRAPPER_DEFAULTS,
	TOKEN_ICON_DIRECTION_ROTATION_CLASSES,
	TOKEN_ICON_SIZE_CLASSES,
	TOKEN_ICON_VARIANT_CLASSES,
	TOKEN_ICON_WRAPPER_COLOR_CLASSES,
	TOKEN_ICON_WRAPPER_PADDING_CLASSES,
	TOKEN_ICON_WRAPPER_SHAPE_CLASSES
} from '../classes/icons';
import {
	ANNOUNCEMENT_BANNER_CLASSES,
	FAVICON_BASE_CLASSES,
	IMAGE_WITH_CAPTION_CLASSES
} from '../classes/image';
import { cn } from '../utils/cn';
import { CountryFlagStyleManager } from './countryflag';

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
		const size = options.size ?? ICON_CHEVRON_DEFAULTS.size;
		const direction = options.direction ?? 'down';
		const variant = options.variant ?? 'default';
		const disabled = options.disabled ?? false;
		return cn(
			TOKEN_ICON_SIZE_CLASSES[size],
			TOKEN_ICON_DIRECTION_ROTATION_CLASSES[direction],
			variant !== 'default' ? TOKEN_ICON_VARIANT_CLASSES[variant] : '',
			disabled ? 'opacity-50' : '',
			options.className ?? ''
		);
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
		const variant = options.variant ?? ICON_CIRCLE_DEFAULTS.variant;
		const size = options.size ?? ICON_CIRCLE_DEFAULTS.size;
		return cn(
			TOKEN_ICON_VARIANT_CLASSES[variant],
			TOKEN_ICON_SIZE_CLASSES[size],
			options.filled ? 'fill-current' : '',
			options.disabled ? 'opacity-50' : '',
			options.className ?? ''
		);
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
		const size = options.size ?? ICON_WRAPPER_DEFAULTS.size;
		const variant = options.variant ?? ICON_WRAPPER_DEFAULTS.variant;
		const shape = options.shape ?? ICON_WRAPPER_DEFAULTS.shape;
		const color = options.color ?? ICON_WRAPPER_DEFAULTS.color;
		return cn(
			'inline-flex items-center justify-center',
			TOKEN_ICON_WRAPPER_PADDING_CLASSES[size],
			TOKEN_ICON_WRAPPER_SHAPE_CLASSES[shape],
			variant !== 'default' ? TOKEN_ICON_VARIANT_CLASSES[variant] : '',
			TOKEN_ICON_WRAPPER_COLOR_CLASSES[color],
			options.disabled ? 'opacity-50' : '',
			options.className ?? ''
		);
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
		if (!url) return null;
		try {
			const parsedUrl = new URL(url);
			return `${parsedUrl.protocol}//${parsedUrl.hostname}/favicon.ico`;
		} catch {
			return null;
		}
	}

	static getFaviconImageClasses(className = ''): string {
		return cn(FAVICON_BASE_CLASSES, className);
	}

	static getFaviconFallbackClasses(baseClasses: string): string {
		return cn('flex items-center justify-center bg-gray-200 text-gray-500 text-xs', baseClasses);
	}

	static getFaviconStyle(size: number): string {
		return `width: ${size}px; height: ${size}px;`;
	}

	static getImageWithCaptionHostClasses(options: {
		className?: string;
		rounded?: boolean;
		bordered?: boolean;
		shadow?: boolean;
	}): string {
		return cn(
			IMAGE_WITH_CAPTION_CLASSES.hostBase,
			options.rounded ? IMAGE_WITH_CAPTION_CLASSES.decoration.rounded : '',
			options.bordered ? IMAGE_WITH_CAPTION_CLASSES.decoration.bordered : '',
			options.shadow ? IMAGE_WITH_CAPTION_CLASSES.decoration.shadow : '',
			options.className ?? ''
		);
	}

	static getImageWithCaptionImageClasses(options: {
		className?: string;
		rounded?: boolean;
		bordered?: boolean;
		shadow?: boolean;
	}): string {
		return cn(
			IMAGE_WITH_CAPTION_CLASSES.imageBase,
			options.rounded ? IMAGE_WITH_CAPTION_CLASSES.decoration.rounded : '',
			options.bordered ? IMAGE_WITH_CAPTION_CLASSES.decoration.bordered : '',
			options.shadow ? IMAGE_WITH_CAPTION_CLASSES.decoration.shadow : '',
			options.className ?? ''
		);
	}

	static getImageWithCaptionTextClasses(className = ''): string {
		return cn(IMAGE_WITH_CAPTION_CLASSES.text, className);
	}

	static getAnnouncementBannerContainerClasses(className = ''): string {
		return cn(ANNOUNCEMENT_BANNER_CLASSES.container, className);
	}

	static getAnnouncementBannerFlexContainerClasses(className = ''): string {
		return cn(ANNOUNCEMENT_BANNER_CLASSES.flexContainer, className);
	}

	static getAnnouncementBannerIconClasses(className = ''): string {
		return cn(ANNOUNCEMENT_BANNER_CLASSES.icon, className);
	}

	static getAnnouncementBannerContentClasses(className = ''): string {
		return cn(ANNOUNCEMENT_BANNER_CLASSES.content, className);
	}

	static getAnnouncementBannerTitleClasses(className = ''): string {
		return cn(ANNOUNCEMENT_BANNER_CLASSES.title, className);
	}

	static getAnnouncementBannerDescriptionClasses(className = ''): string {
		return cn(ANNOUNCEMENT_BANNER_CLASSES.description, className);
	}

	static getAnnouncementBannerChildrenContainerClasses(className = ''): string {
		return cn(ANNOUNCEMENT_BANNER_CLASSES.childrenContainer, className);
	}
}
