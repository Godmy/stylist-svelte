import type {
	AnnouncementBannerProps,
	ImageWithCaptionProps
} from '$stylist/design-system/attributes';
import {
	ANNOUNCEMENT_BANNER_CLASSES,
	IMAGE_WITH_CAPTION_CLASSES,
	TOKEN_ICON_DIRECTION_ROTATION_CLASSES,
	TOKEN_ICON_SIZE_CLASSES,
	TOKEN_ICON_VARIANT_CLASSES,
	TOKEN_ICON_WRAPPER_COLOR_CLASSES,
	TOKEN_ICON_WRAPPER_PADDING_CLASSES,
	TOKEN_ICON_WRAPPER_SHAPE_CLASSES
} from '$stylist/design-system/classes';
import type {
	TokenIconChevronSize,
	TokenIconCircleVariant,
	TokenIconWrapperShape,
	TokenIconWrapperSize,
	TokenIconWrapperVariant
} from '$stylist/design-system/tokens/icons';
import type { CommonSize, ColorVariant } from '$stylist/design-system/tokens/variants';
import { cn } from '$stylist/utils/classes';

const resolveCountryFlagEmoji = (code = '') => {
	const value = code.trim().toUpperCase();
	if (!/^[A-Z]{2}$/.test(value)) return '';
	return String.fromCodePoint(...value.split('').map((c) => 127397 + c.charCodeAt(0)));
};

const getFaviconUrl = (url?: string) => {
	if (!url) return null;
	try {
		const parsedUrl = new URL(url);
		return `${parsedUrl.protocol}//${parsedUrl.hostname}/favicon.ico`;
	} catch {
		return null;
	}
};

interface IconChevronProps {
	isOpen?: boolean;
	size?: TokenIconChevronSize;
	direction?: 'up' | 'down' | 'left' | 'right';
	variant?: 'default' | TokenIconCircleVariant;
	disabled?: boolean;
	class?: string;
}

interface IconCircleProps {
	variant?: TokenIconCircleVariant;
	size?: CommonSize;
	filled?: boolean;
	disabled?: boolean;
	class?: string;
}

interface IconWrapperProps {
	size?: TokenIconWrapperSize;
	variant?: TokenIconWrapperVariant;
	shape?: TokenIconWrapperShape;
	color?: ColorVariant;
	disabled?: boolean;
	class?: string;
}

interface CountryFlagProps {
	countryCode?: string;
	size?: number;
	class?: string;
}

interface FaviconProps {
	size?: number;
	url?: string;
	class?: string;
}

export function createIconChevronState(props: IconChevronProps) {
	const isOpen = $derived(props.isOpen ?? false);
	const size = $derived((props.size ?? 'md') as TokenIconChevronSize);
	const className = $derived(props.class ?? '');
	const classes = $derived(
		cn(
			TOKEN_ICON_SIZE_CLASSES[size as TokenIconSize],
			TOKEN_ICON_DIRECTION_ROTATION_CLASSES[props.direction ?? 'down'],
			props.variant && props.variant !== 'default' ? TOKEN_ICON_VARIANT_CLASSES[props.variant] : '',
			isOpen ? '' : '',
			props.disabled ? 'opacity-50' : '',
			className
		)
	);

	return {
		get isOpen() {
			return isOpen;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}

export function createIconCircleState(props: IconCircleProps) {
	const variant = $derived((props.variant ?? 'primary') as TokenIconCircleVariant);
	const size = $derived((props.size ?? 'md') as CommonSize);
	const className = $derived(props.class ?? '');
	const classes = $derived(
		cn(
			TOKEN_ICON_VARIANT_CLASSES[variant as TokenIconVariant],
			TOKEN_ICON_SIZE_CLASSES[size],
			props.filled ? 'fill-current' : '',
			props.disabled ? 'opacity-50' : '',
			className
		)
	);

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}

export function createIconWrapperState(props: IconWrapperProps) {
	const size = $derived((props.size ?? 'md') as TokenIconWrapperSize);
	const variant = $derived((props.variant ?? 'default') as TokenIconWrapperVariant);
	const shape = $derived((props.shape ?? 'circle') as TokenIconWrapperShape);
	const color = $derived((props.color ?? 'primary') as ColorVariant);
	const className = $derived(props.class ?? '');
	const classes = $derived(
		cn(
			'inline-flex items-center justify-center',
			TOKEN_ICON_WRAPPER_PADDING_CLASSES[size],
			TOKEN_ICON_WRAPPER_SHAPE_CLASSES[shape],
			variant !== 'default' ? TOKEN_ICON_VARIANT_CLASSES[variant as TokenIconVariant] : '',
			TOKEN_ICON_WRAPPER_COLOR_CLASSES[color],
			props.disabled ? 'opacity-50' : '',
			className
		)
	);

	return {
		get size() {
			return size;
		},
		get variant() {
			return variant;
		},
		get shape() {
			return shape;
		},
		get color() {
			return color;
		},
		get classes() {
			return classes;
		}
	};
}

export function createCountryFlagState(props: CountryFlagProps) {
	const countryCode = $derived(props.countryCode ?? '');
	const size = $derived(props.size ?? 24);
	const emoji = $derived(resolveCountryFlagEmoji(countryCode));
	const isValid = $derived(Boolean(countryCode && countryCode.length === 2));
	const classes = $derived(cn('inline-flex items-center justify-center', props.class));
	const style = $derived(
		`width: ${size}px; height: ${size}px; font-size: ${size}px; line-height: ${size}px;`
	);
	const fallbackStyle = $derived(
		`width: ${size}px; height: ${size}px; font-size: ${size}px; line-height: ${size}px;`
	);
	const fallbackClasses = $derived(
		'inline-flex items-center justify-center rounded bg-gray-100 text-gray-700'
	);

	return {
		get countryCode() {
			return countryCode;
		},
		get size() {
			return size;
		},
		get emoji() {
			return emoji;
		},
		get isValid() {
			return isValid;
		},
		get classes() {
			return classes;
		},
		get style() {
			return style;
		},
		get fallbackStyle() {
			return fallbackStyle;
		},
		get fallbackClasses() {
			return fallbackClasses;
		}
	};
}

export function createFaviconState(props: FaviconProps) {
	const size = $derived(props.size ?? 16);
	const url = $derived(props.url);
	const faviconUrl = $derived(getFaviconUrl(url));
	const baseClasses = $derived(cn('inline-block rounded-sm', props.class));
	const sizeStyle = $derived(`width: ${size}px; height: ${size}px;`);

	// Define individual classes for different elements
	const imageClasses = $derived(baseClasses);
	const fallbackClasses = $derived(
		cn(
			'flex items-center justify-center bg-gray-200 text-gray-500 text-xs',
			baseClasses
		)
	);

	return {
		get size() {
			return size;
		},
		get faviconUrl() {
			return faviconUrl;
		},
		get sizeStyle() {
			return sizeStyle;
		},
		get classes() {
			return {
				image: imageClasses,
				fallback: fallbackClasses
			};
		}
	};
}

export function createImageWithCaptionState(props: ImageWithCaptionProps) {
	const rounded = $derived(props.rounded ?? false);
	const bordered = $derived(props.bordered ?? false);
	const shadow = $derived(props.shadow ?? true);
	const hostClasses = $derived(
		cn(
			IMAGE_WITH_CAPTION_CLASSES.hostBase,
			rounded ? IMAGE_WITH_CAPTION_CLASSES.decoration.rounded : '',
			bordered ? IMAGE_WITH_CAPTION_CLASSES.decoration.bordered : '',
			shadow ? IMAGE_WITH_CAPTION_CLASSES.decoration.shadow : '',
			props.class ?? ''
		)
	);
	const imageClasses = $derived(
		cn(
			IMAGE_WITH_CAPTION_CLASSES.imageBase,
			rounded ? IMAGE_WITH_CAPTION_CLASSES.decoration.rounded : '',
			bordered ? IMAGE_WITH_CAPTION_CLASSES.decoration.bordered : '',
			shadow ? IMAGE_WITH_CAPTION_CLASSES.decoration.shadow : '',
			props.imageClass ?? ''
		)
	);
	const captionClasses = $derived(cn(IMAGE_WITH_CAPTION_CLASSES.text, props.captionClass ?? ''));

	return {
		get hostClasses() {
			return hostClasses;
		},
		get imageClasses() {
			return imageClasses;
		},
		get captionClasses() {
			return captionClasses;
		}
	};
}

export function createAnnouncementBannerState(props: AnnouncementBannerProps) {
	const containerClasses = $derived(
		cn(ANNOUNCEMENT_BANNER_CLASSES.container, props.class)
	);
	const flexClasses = $derived(ANNOUNCEMENT_BANNER_CLASSES.flexContainer);
	const iconClasses = $derived(ANNOUNCEMENT_BANNER_CLASSES.icon);
	const contentClasses = $derived(ANNOUNCEMENT_BANNER_CLASSES.content);
	const titleClasses = $derived(ANNOUNCEMENT_BANNER_CLASSES.title);
	const descriptionClasses = $derived(ANNOUNCEMENT_BANNER_CLASSES.description);
	const childrenClasses = $derived(ANNOUNCEMENT_BANNER_CLASSES.childrenContainer);

	return {
		get containerClasses() {
			return containerClasses;
		},
		get flexClasses() {
			return flexClasses;
		},
		get iconClasses() {
			return iconClasses;
		},
		get contentClasses() {
			return contentClasses;
		},
		get titleClasses() {
			return titleClasses;
		},
		get descriptionClasses() {
			return descriptionClasses;
		},
		get childrenClasses() {
			return childrenClasses;
		}
	};
}
