import type { AnnouncementBannerProps, CountryFlagProps, CountryFlagSize, FaviconProps, IconChevronProps, IconChevronSize, IconCircleProps, IconCircleSize, IconCircleVariant, IconWrapperProps, IconWrapperColor, IconWrapperShape, IconWrapperSize, IconWrapperVariant, ImageWithCaptionProps } from '$stylist/design-system/media';
import { getAnnouncementBannerChildrenContainerClasses, getAnnouncementBannerContainerClasses, getAnnouncementBannerContentClasses, getAnnouncementBannerDescriptionClasses, getAnnouncementBannerFlexContainerClasses, getAnnouncementBannerIconClasses, getAnnouncementBannerTitleClasses, getCountryFlagClasses, getCountryFlagEmoji, getCountryFlagFallbackClasses, getCountryFlagStyle, getFaviconClasses, getFaviconUrl, getIconChevronClasses, ICON_CHEVRON_DEFAULTS, getIconCircleClasses, ICON_CIRCLE_DEFAULTS, getIconWrapperClasses, ICON_WRAPPER_DEFAULTS, getImageWithCaptionHostClasses, getImageWithCaptionImageClasses, getImageWithCaptionTextClasses } from '$stylist/design-system/media';

export function createIconChevronState(props: IconChevronProps) {
  const isOpen = $derived(props.isOpen ?? ICON_CHEVRON_DEFAULTS.isOpen);
  const size = $derived((props.size ?? ICON_CHEVRON_DEFAULTS.size) as IconChevronSize);
  const className = $derived(props.class ?? '');
  const classes = $derived(getIconChevronClasses(isOpen, className));

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
  const variant = $derived((props.variant ?? ICON_CIRCLE_DEFAULTS.variant) as IconCircleVariant);
  const size = $derived((props.size ?? ICON_CIRCLE_DEFAULTS.size) as IconCircleSize);
  const gradient = $derived(props.gradient ?? ICON_CIRCLE_DEFAULTS.gradient);
  const className = $derived(props.class ?? '');
  const classes = $derived(getIconCircleClasses(variant, size, gradient, className));

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
  const size = $derived((props.size ?? ICON_WRAPPER_DEFAULTS.size) as IconWrapperSize);
  const variant = $derived((props.variant ?? ICON_WRAPPER_DEFAULTS.variant) as IconWrapperVariant);
  const shape = $derived((props.shape ?? ICON_WRAPPER_DEFAULTS.shape) as IconWrapperShape);
  const color = $derived((props.color ?? ICON_WRAPPER_DEFAULTS.color) as IconWrapperColor);
  const className = $derived(props.class ?? '');
  const classes = $derived(getIconWrapperClasses(size, shape, variant, color, className));

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
  const size = $derived((props.size ?? 24) as CountryFlagSize);
  const emoji = $derived(getCountryFlagEmoji(countryCode));
  const isValid = $derived(Boolean(countryCode && countryCode.length === 2));
  const classes = $derived(getCountryFlagClasses(props.class ?? ''));
  const style = $derived(getCountryFlagStyle(size));
  const fallbackStyle = $derived(getCountryFlagStyle(size));
  const fallbackClasses = $derived(getCountryFlagFallbackClasses());

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
  const classes = $derived(getFaviconClasses(size, props.class ?? ''));

  return {
    get size() {
      return size;
    },
    get faviconUrl() {
      return faviconUrl;
    },
    get classes() {
      return classes;
    }
  };
}

export function createImageWithCaptionState(props: ImageWithCaptionProps) {
  const rounded = $derived(props.rounded ?? false);
  const bordered = $derived(props.bordered ?? false);
  const shadow = $derived(props.shadow ?? true);
  const hostClasses = $derived(getImageWithCaptionHostClasses(props.class ?? '', rounded, bordered, shadow));
  const imageClasses = $derived(getImageWithCaptionImageClasses(props.imageClass ?? '', rounded, bordered, shadow));
  const captionClasses = $derived(getImageWithCaptionTextClasses(props.captionClass ?? ''));

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
  const containerClasses = $derived(getAnnouncementBannerContainerClasses(props.class));
  const flexClasses = $derived(getAnnouncementBannerFlexContainerClasses());
  const iconClasses = $derived(getAnnouncementBannerIconClasses());
  const contentClasses = $derived(getAnnouncementBannerContentClasses());
  const titleClasses = $derived(getAnnouncementBannerTitleClasses());
  const descriptionClasses = $derived(getAnnouncementBannerDescriptionClasses());
  const childrenClasses = $derived(getAnnouncementBannerChildrenContainerClasses());

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
