import { cn } from '../../utils/cn/index';

const ANNOUNCEMENT_BANNER_CLASSES = {
	container:
		'rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow-sm p-6',
	icon: 'w-12 h-12 mr-4',
	content: 'flex-1',
	title: 'text-xl font-semibold mb-2',
	description: 'text-[var(--color-text-secondary)] mb-4',
	childrenContainer: 'mt-4',
	flexContainer: 'flex items-start'
} as const;

const IMAGE_WITH_CAPTION_CLASSES = {
	hostBase: 'image-with-caption flex flex-col',
	imageBase: 'w-full object-cover',
	text: 'mt-2 text-center text-sm text-[var(--color-text-secondary)]',
	caption: 'text-sm text-[--color-text-secondary]',
	decoration: {
		rounded: 'rounded-lg',
		bordered: 'border border-[var(--color-border-primary)]',
		shadow: 'shadow-md'
	}
} as const;





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
		return cn('inline-block rounded-sm', className);
	}

	static getFaviconFallbackClasses(baseClasses: string): string {
		return cn('flex items-center justify-center bg-[--color-background-secondary] text-[--color-text-secondary] text-xs', baseClasses);
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




