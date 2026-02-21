import type {
	AnnouncementBannerProps,
	ImageWithCaptionProps
} from '$stylist/design-system/props';
import { MediaStyleManager } from '$stylist/design-system/styles/information/media';
import type { IconWrapperShape } from '$stylist/design-system/tokens/architecture/shapes';
import type { ExtendedSize } from '$stylist/design-system/tokens/architecture/sizes';
import type { CommonSize, ColorVariant, DefaultVariants } from '$stylist/design-system/tokens/architecture/variants';

type TokenIconChevronSize = ExtendedSize;
type TokenIconSize = ExtendedSize;
type TokenIconCircleVariant = DefaultVariants;
type TokenIconVariant = DefaultVariants;
type TokenIconWrapperSize = ExtendedSize;
type TokenIconWrapperVariant = DefaultVariants;
type TokenIconWrapperShape = IconWrapperShape;

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
function createIconChevronState(props: IconChevronProps) {
	const isOpen = $derived(props.isOpen ?? false);
	const size = $derived((props.size ?? 'md') as TokenIconChevronSize);
	const className = $derived(props.class ?? '');
	const classes = $derived(
		MediaStyleManager.getIconChevronClasses({
			isOpen,
			size: size as TokenIconSize,
			direction: props.direction ?? 'down',
			variant: props.variant ?? 'default',
			disabled: props.disabled ?? false,
			className
		})
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
		MediaStyleManager.getIconCircleClasses({
			variant: variant as TokenIconVariant,
			size,
			filled: props.filled ?? false,
			disabled: props.disabled ?? false,
			className
		})
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
function createIconWrapperState(props: IconWrapperProps) {
	const size = $derived((props.size ?? 'md') as TokenIconWrapperSize);
	const variant = $derived((props.variant ?? 'default') as TokenIconWrapperVariant);
	const shape = $derived((props.shape ?? 'circle') as TokenIconWrapperShape);
	const color = $derived((props.color ?? 'primary') as ColorVariant);
	const className = $derived(props.class ?? '');
	const classes = $derived(
		MediaStyleManager.getIconWrapperClasses({
			size,
			variant,
			shape,
			color,
			disabled: props.disabled ?? false,
			className
		})
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
function createCountryFlagState(props: CountryFlagProps) {
	const countryCode = $derived(props.countryCode ?? '');
	const size = $derived(props.size ?? 24);
	const emoji = $derived(MediaStyleManager.resolveCountryFlagEmoji(countryCode));
	const isValid = $derived(Boolean(countryCode && countryCode.length === 2));
	const classes = $derived(MediaStyleManager.getCountryFlagClasses(props.class));
	const style = $derived(MediaStyleManager.getCountryFlagStyle(size));
	const fallbackStyle = $derived(MediaStyleManager.getCountryFlagStyle(size));
	const fallbackClasses = $derived(MediaStyleManager.getCountryFlagFallbackClasses());

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
function createFaviconState(props: FaviconProps) {
	const size = $derived(props.size ?? 16);
	const url = $derived(props.url);
	const faviconUrl = $derived(MediaStyleManager.getFaviconUrl(url));
	const baseClasses = $derived(MediaStyleManager.getFaviconImageClasses(props.class));
	const sizeStyle = $derived(MediaStyleManager.getFaviconStyle(size));

	// Define individual classes for different elements
	const imageClasses = $derived(baseClasses);
	const fallbackClasses = $derived(MediaStyleManager.getFaviconFallbackClasses(baseClasses));

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
function createImageWithCaptionState(props: ImageWithCaptionProps) {
	const rounded = $derived(props.rounded ?? false);
	const bordered = $derived(props.bordered ?? false);
	const shadow = $derived(props.shadow ?? true);
	const hostClasses = $derived(
		MediaStyleManager.getImageWithCaptionHostClasses({
			className: props.class ?? '',
			rounded,
			bordered,
			shadow
		})
	);
	const imageClasses = $derived(
		MediaStyleManager.getImageWithCaptionImageClasses({
			className: props.imageClass ?? '',
			rounded,
			bordered,
			shadow
		})
	);
	const captionClasses = $derived(MediaStyleManager.getImageWithCaptionTextClasses(props.captionClass ?? ''));

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
function createAnnouncementBannerState(props: AnnouncementBannerProps) {
	const containerClasses = $derived(MediaStyleManager.getAnnouncementBannerContainerClasses(props.class));
	const flexClasses = $derived(MediaStyleManager.getAnnouncementBannerFlexContainerClasses());
	const iconClasses = $derived(MediaStyleManager.getAnnouncementBannerIconClasses());
	const contentClasses = $derived(MediaStyleManager.getAnnouncementBannerContentClasses());
	const titleClasses = $derived(MediaStyleManager.getAnnouncementBannerTitleClasses());
	const descriptionClasses = $derived(MediaStyleManager.getAnnouncementBannerDescriptionClasses());
	const childrenClasses = $derived(MediaStyleManager.getAnnouncementBannerChildrenContainerClasses());

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

export default createIconCircleState;



