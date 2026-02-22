import type { ChildrenProp, ContentProp, HtmlAttributesBase } from './common';

export interface MediaHtmlProps<T extends HTMLElement = HTMLElement> extends HtmlAttributesBase<T> {}

export interface MediaHtmlChildrenProps<T extends HTMLElement = HTMLElement>
	extends MediaHtmlProps<T>,
		ChildrenProp {}

export interface MediaContentProps extends ContentProp {
	class?: string;
}

export interface MediaIconBaseProps {
	disabled?: boolean;
	class?: string;
}

export interface ImageWithCaptionProps extends MediaHtmlProps<HTMLDivElement> {
	src?: string;
	alt?: string;
	caption?: string;
	width?: string;
	height?: string;
	imageClass?: string;
	captionClass?: string;
	rounded?: boolean;
	bordered?: boolean;
	shadow?: boolean;
	loading?: 'lazy' | 'eager';
}

export interface AnnouncementBannerProps extends MediaHtmlChildrenProps<HTMLDivElement> {
	title?: string;
	description?: string;
	icon?: string;
}

export interface FaviconProps extends ContentProp {
	size?: number;
	url?: string;
	class?: string;
	error?: boolean;
	onError?: () => void;
}
