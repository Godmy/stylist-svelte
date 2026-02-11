/**
 * Media domain classes.
 * Used by:
 * - information/media/announcement-banner.ts
 * - information/media/image-with-caption.ts
 */

import { cn } from '../utils/classnames';

export const ANNOUNCEMENT_BANNER_CLASSES = {
	container:
		'rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm p-6',
	icon: 'w-12 h-12 mr-4',
	content: 'flex-1',
	title: 'text-xl font-semibold mb-2',
	description: 'text-[var(--color-text-secondary)] mb-4',
	childrenContainer: 'mt-4',
	flexContainer: 'flex items-start'
} as const;

export const IMAGE_WITH_CAPTION_CLASSES = {
	hostBase: 'image-with-caption flex flex-col',
	imageBase: 'w-full object-cover',
	text: 'mt-2 text-center text-sm text-[var(--color-text-secondary)]',
	decoration: {
		rounded: 'rounded-lg',
		bordered: 'border border-[var(--color-border-default)]',
		shadow: 'shadow-md'
	}
} as const;

export const getAnnouncementBannerContainerClasses = (className = '') =>
	cn(ANNOUNCEMENT_BANNER_CLASSES.container, className);
export const getAnnouncementBannerIconClasses = (className = '') =>
	cn(ANNOUNCEMENT_BANNER_CLASSES.icon, className);
export const getAnnouncementBannerContentClasses = (className = '') =>
	cn(ANNOUNCEMENT_BANNER_CLASSES.content, className);
export const getAnnouncementBannerTitleClasses = (className = '') =>
	cn(ANNOUNCEMENT_BANNER_CLASSES.title, className);
export const getAnnouncementBannerDescriptionClasses = (className = '') =>
	cn(ANNOUNCEMENT_BANNER_CLASSES.description, className);
export const getAnnouncementBannerChildrenContainerClasses = (className = '') =>
	cn(ANNOUNCEMENT_BANNER_CLASSES.childrenContainer, className);
export const getAnnouncementBannerFlexContainerClasses = (className = '') =>
	cn(ANNOUNCEMENT_BANNER_CLASSES.flexContainer, className);

export const getCaptionClasses = (className = '') =>
	cn('text-sm text-[--color-text-secondary]', className);

export const getImageWithCaptionHostClasses = (
	className = '',
	rounded = false,
	bordered = false,
	shadow = false
) =>
	cn(
		IMAGE_WITH_CAPTION_CLASSES.hostBase,
		rounded ? IMAGE_WITH_CAPTION_CLASSES.decoration.rounded : '',
		bordered ? IMAGE_WITH_CAPTION_CLASSES.decoration.bordered : '',
		shadow ? IMAGE_WITH_CAPTION_CLASSES.decoration.shadow : '',
		className
	);
export const getImageWithCaptionImageClasses = (
	className = '',
	rounded = false,
	bordered = false,
	shadow = false
) =>
	cn(
		IMAGE_WITH_CAPTION_CLASSES.imageBase,
		rounded ? IMAGE_WITH_CAPTION_CLASSES.decoration.rounded : '',
		bordered ? IMAGE_WITH_CAPTION_CLASSES.decoration.bordered : '',
		shadow ? IMAGE_WITH_CAPTION_CLASSES.decoration.shadow : '',
		className
	);
export const getImageWithCaptionTextClasses = (className = '') =>
	cn(IMAGE_WITH_CAPTION_CLASSES.text, className);

export const getFaviconClasses = (_size = 16, className = '') =>
	cn('inline-block rounded-sm', className);
export const getFaviconUrl = (url?: string) => {
	if (!url) return null;
	try {
		const parsedUrl = new URL(url);
		return `${parsedUrl.protocol}//${parsedUrl.hostname}/favicon.ico`;
	} catch {
		return null;
	}
};
