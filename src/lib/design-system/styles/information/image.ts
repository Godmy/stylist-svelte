import {
	ANNOUNCEMENT_BANNER_CLASSES,
	FAVICON_BASE_CLASSES,
	IMAGE_WITH_CAPTION_CLASSES
} from '../../classes/information/image';
import { cn } from '../../utils/cn/index';

export class ImageStyleManager {
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
