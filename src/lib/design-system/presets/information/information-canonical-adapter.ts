import {
	ABBR_CLASSES,
	ANNOUNCEMENT_BANNER_CLASSES,
	BADGE_GROUP_CONTAINER_CLASSES,
	BADGE_GROUP_OVERFLOW_CLASSES,
	BADGE_SIZE_CLASSES,
	BADGE_VARIANT_CLASSES,
	BASE_BADGE_CLASSES,
	BASE_CODE_BLOCK_CLASSES,
	BASE_COUNTER_CLASSES,
	BASE_COUNT_BADGE_CLASSES,
	BASE_DOT_CLASSES,
	BASE_LABEL_CLASSES,
	BASE_MARKER_CLASSES,
	BLOCKQUOTE_CLASSES,
	BULLET_CLASSES,
	BULLET_SIZE_CLASSES,
	CODE_BLOCK_SIZE_CLASSES,
	CODE_BLOCK_VARIANT_CLASSES,
	COUNTER_SIZE_CLASSES,
	COUNTER_VARIANT_CLASSES,
	DEFINITION_DESCRIPTION_CLASSES,
	DEFINITION_TERM_CLASSES,
	DOT_COLOR_CLASSES,
	DOT_SIZE_CLASSES,
	EM_CLASSES,
	HIGHLIGHT_CLASSES,
	IMAGE_WITH_CAPTION_CLASSES,
	INLINE_CODE_BASE_CLASSES,
	INLINE_CODE_CLASSES,
	KBD_CLASSES,
	LABEL_DISABLED_CLASSES,
	LABEL_ENABLED_CLASSES,
	LABEL_SIZE_CLASSES,
	LINK_DISABLED_CLASSES,
	LINK_HOVER_CLASSES,
	LINK_SIZE_CLASSES,
	LINK_UNDERLINE_CLASSES,
	LINK_VARIANT_CLASSES,
	MARKER_COLOR_CLASSES,
	MARKER_SIZE_CLASSES,
	MESSAGE_STATUS_COLORS,
	MESSAGE_STATUS_SIZE_CLASSES,
	NPM_BADGE_BASE_CLASSES,
	NPM_BADGE_TYPE_CLASSES,
	REQUIRED_INDICATOR_CLASSES,
	SEPARATOR_CLASSES,
	STATUS_INDICATOR_CONTAINER_CLASSES,
	STATUS_INDICATOR_DOT_BASE_CLASSES,
	STATUS_INDICATOR_STATUS_CLASSES,
	STATUS_INDICATOR_WITH_LABEL_COLOR_CLASSES,
	STATUS_INDICATOR_WITH_LABEL_CONTAINER_CLASSES,
	STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES,
	SYNTAX_HIGHLIGHTED_CODE_CLASSES,
	SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES,
	TABLE_ALIGNMENT_CLASSES,
	TABLE_CLASSES,
	TOKEN_ICON_DIRECTION_ROTATION_CLASSES,
	TOKEN_ICON_SIZE_CLASSES,
	TOKEN_ICON_VARIANT_CLASSES,
	TOKEN_ICON_WRAPPER_COLOR_CLASSES,
	TOKEN_ICON_WRAPPER_PADDING_CLASSES,
	TOKEN_ICON_WRAPPER_SHAPE_CLASSES
} from '$stylist/design-system/classes';
import type {
	ColorVariant,
	CommonSize,
	DefaultVariants
} from '$stylist/design-system/tokens';
import type { IndicatorStatus } from '$stylist/design-system/tokens/indicators';
import type { IconWrapperShape } from '$stylist/design-system/tokens/shapes';
import type { ExtendedSize } from '$stylist/design-system/tokens/sizes';
import { cn } from '$stylist/design-system/utils/classnames';

// Default values for various components
export const BADGE_DEFAULT_SIZE: keyof typeof BADGE_SIZE_CLASSES = 'md';
export const BADGE_DEFAULT_VARIANT: keyof typeof BADGE_VARIANT_CLASSES = 'default';
export const DEFAULT_ABBR_TITLE = 'Abbreviation';
export const DEFAULT_CODE_BLOCK_SIZE: keyof typeof CODE_BLOCK_SIZE_CLASSES = 'md';
export const DEFAULT_CODE_BLOCK_VARIANT: keyof typeof CODE_BLOCK_VARIANT_CLASSES = 'default';
export const DEFAULT_COUNTER_COUNT = 0;
export const DEFAULT_COUNTER_MAX = 99;
export const DEFAULT_COUNTER_SIZE: keyof typeof COUNTER_SIZE_CLASSES = 'md';
export const DEFAULT_COUNTER_VARIANT: keyof typeof COUNTER_VARIANT_CLASSES = 'primary';
export const DEFAULT_COUNT_BADGE_COUNT = 0;
export const DEFAULT_COUNT_BADGE_MAX = 99;
export const DEFAULT_COUNT_BADGE_SHOW_ZERO = false;
export const DEFAULT_DOT_COLOR: keyof typeof DOT_COLOR_CLASSES = 'primary';
export const DEFAULT_DOT_SIZE: keyof typeof DOT_SIZE_CLASSES = 'md';
export const DEFAULT_INLINE_CODE_VARIANT: keyof typeof INLINE_CODE_CLASSES = 'default';
export const DEFAULT_LABEL_DISABLED = false;
export const DEFAULT_LABEL_REQUIRED = false;
export const DEFAULT_LABEL_SIZE: keyof typeof LABEL_SIZE_CLASSES = 'md';
export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_LINK_DISABLED = false;
export const DEFAULT_LINK_SIZE: keyof typeof LINK_SIZE_CLASSES = 'md';
export const DEFAULT_LINK_UNDERLINE = true;
export const DEFAULT_LINK_VARIANT: keyof typeof LINK_VARIANT_CLASSES = 'default';
export const DEFAULT_MARKER_COLOR = 'primary';
export const DEFAULT_MARKER_SIZE: keyof typeof MARKER_SIZE_CLASSES = 'md';
export const DEFAULT_MARKER_TYPE: 'dot' | 'number' | 'letter' | 'check' | 'x' = 'dot';
export const DEFAULT_MARKER_VALUE = 1;
export const DEFAULT_SEPARATOR_DECORATIVE = true;
export const DEFAULT_SEPARATOR_ORIENTATION: keyof typeof SEPARATOR_CLASSES = 'horizontal';
export const DEFAULT_SHOW_LINE_NUMBERS = false;
export const DEFAULT_START_LINE_NUMBER = 1;
export const DEFAULT_STATUS_INDICATOR_STATUS: IndicatorStatus = 'online';
export const DEFAULT_SYNTAX_HIGHLIGHTED_CODE_SIZE: keyof typeof CODE_BLOCK_SIZE_CLASSES = 'md';
export const DEFAULT_SYNTAX_HIGHLIGHTED_CODE_VARIANT: keyof typeof CODE_BLOCK_VARIANT_CLASSES = 'default';
export const DEFAULT_WITH_BACKGROUND = false;
export const DEFAULT_WITH_BORDER = true;
export const FOOTER_PREFIX = '©';
export const TOKEN_ICON_CHEVRON_DEFAULTS = {
	isOpen: false,
	size: 'md' as const
};
export const TOKEN_ICON_CIRCLE_DEFAULTS = {
	variant: 'default' as const,
	size: 'md' as const
};
export const TOKEN_ICON_WRAPPER_DEFAULTS = {
	size: 'md' as const,
	variant: 'default' as const,
	shape: 'circle' as const,
	color: 'primary' as const
};

export { BLOCKQUOTE_CLASSES } from '$stylist/design-system/classes';

export const ICON_CHEVRON_DEFAULTS = TOKEN_ICON_CHEVRON_DEFAULTS;
export const ICON_CIRCLE_DEFAULTS = TOKEN_ICON_CIRCLE_DEFAULTS;
export const ICON_WRAPPER_DEFAULTS = TOKEN_ICON_WRAPPER_DEFAULTS;

export type IconChevronSize = ExtendedSize;
export type IconCircleVariant = DefaultVariants;
export type IconWrapperSize = ExtendedSize;
export type IconWrapperVariant = IconWrapperShape;
export type CountryFlagSize = number;

export interface AnimatedNumberProps {
	value: number;
	duration?: number;
	format?: 'number' | 'percent' | 'currency';
	prefix?: string;
	suffix?: string;
	separator?: string;
	decimals?: number;
	class?: string;
}
export interface NumberFlowProps {
	value?: number;
	locale?: string;
	locales?: string | string[];
	format?: Intl.NumberFormatOptions;
	prefix?: string;
	suffix?: string;
	class?: string;
}

export const getBlockquoteClasses = (
	withBackground = DEFAULT_WITH_BACKGROUND,
	withBorder = DEFAULT_WITH_BORDER,
	className = ''
) =>
	cn(
		BLOCKQUOTE_CLASSES.base,
		withBackground && BLOCKQUOTE_CLASSES.background,
		withBorder && BLOCKQUOTE_CLASSES.border,
		className
	);

export const getBadgeClasses = (
	variant: keyof typeof BADGE_VARIANT_CLASSES = BADGE_DEFAULT_VARIANT,
	size: keyof typeof BADGE_SIZE_CLASSES = BADGE_DEFAULT_SIZE,
	className = ''
) => cn(BASE_BADGE_CLASSES, BADGE_VARIANT_CLASSES[variant], BADGE_SIZE_CLASSES[size], className);
export const getBadgeGroupContainerClasses = (className = '') =>
	cn(BADGE_GROUP_CONTAINER_CLASSES, className);
export const getBadgeGroupOverflowClasses = (className = '') =>
	cn(BADGE_GROUP_OVERFLOW_CLASSES, className);
export const getCodeBlockClasses = (
	variant: keyof typeof CODE_BLOCK_VARIANT_CLASSES = DEFAULT_CODE_BLOCK_VARIANT as keyof typeof CODE_BLOCK_VARIANT_CLASSES,
	size: keyof typeof CODE_BLOCK_SIZE_CLASSES = DEFAULT_CODE_BLOCK_SIZE as keyof typeof CODE_BLOCK_SIZE_CLASSES,
	className = ''
) =>
	cn(
		BASE_CODE_BLOCK_CLASSES,
		CODE_BLOCK_VARIANT_CLASSES[variant],
		CODE_BLOCK_SIZE_CLASSES[size],
		className
	);
export const getLabelClasses = (
	size: keyof typeof LABEL_SIZE_CLASSES = DEFAULT_LABEL_SIZE as keyof typeof LABEL_SIZE_CLASSES,
	disabled = DEFAULT_LABEL_DISABLED,
	className = ''
) =>
	cn(
		BASE_LABEL_CLASSES,
		LABEL_SIZE_CLASSES[size],
		disabled ? LABEL_DISABLED_CLASSES : LABEL_ENABLED_CLASSES,
		DEFAULT_LABEL_REQUIRED && REQUIRED_INDICATOR_CLASSES,
		className
	);

export const getDotClasses = (
	color: keyof typeof DOT_COLOR_CLASSES = DEFAULT_DOT_COLOR as keyof typeof DOT_COLOR_CLASSES,
	size: keyof typeof DOT_SIZE_CLASSES = DEFAULT_DOT_SIZE as keyof typeof DOT_SIZE_CLASSES,
	className = ''
) => cn(BASE_DOT_CLASSES, DOT_COLOR_CLASSES[color], DOT_SIZE_CLASSES[size], className);
export const getCounterClasses = (
	variant: keyof typeof COUNTER_VARIANT_CLASSES = DEFAULT_COUNTER_VARIANT as keyof typeof COUNTER_VARIANT_CLASSES,
	size: keyof typeof COUNTER_SIZE_CLASSES = DEFAULT_COUNTER_SIZE as keyof typeof COUNTER_SIZE_CLASSES,
	className = ''
) =>
	cn(BASE_COUNTER_CLASSES, COUNTER_VARIANT_CLASSES[variant], COUNTER_SIZE_CLASSES[size], className);
export const getCountBadgeClasses = (className = '') => cn(BASE_COUNT_BADGE_CLASSES, className);
export const getMarkerClasses = (
	color: keyof typeof MARKER_COLOR_CLASSES = DEFAULT_MARKER_COLOR,
	size: keyof typeof MARKER_SIZE_CLASSES = DEFAULT_MARKER_SIZE,
	className = ''
) => cn(BASE_MARKER_CLASSES, MARKER_COLOR_CLASSES[color], MARKER_SIZE_CLASSES[size], className);
export const getBulletClasses = (size: keyof typeof BULLET_SIZE_CLASSES = 'md') =>
	cn(BULLET_CLASSES, BULLET_SIZE_CLASSES[size]);
export const getMessageStatusContainerClasses = (status: keyof typeof MESSAGE_STATUS_COLORS) =>
	MESSAGE_STATUS_COLORS[status];
export const getMessageStatusIconClasses = (size: keyof typeof MESSAGE_STATUS_SIZE_CLASSES = 'md') =>
	MESSAGE_STATUS_SIZE_CLASSES[size];

export const getStatusIndicatorWithLabelContainerClasses = (className = '') =>
	cn(...STATUS_INDICATOR_WITH_LABEL_CONTAINER_CLASSES, className);
export const getStatusIndicatorWithLabelSizeClasses = (size: keyof typeof STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES = 'md') =>
	STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES[size];
export const getStatusIndicatorWithLabelIndicatorClasses = (
	status: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'custom',
	size: keyof typeof STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES = 'md',
	customColor?: string,
	indicatorClass = ''
) =>
	cn(
		'inline-block rounded-full mr-2',
		STATUS_INDICATOR_WITH_LABEL_SIZE_CLASSES[size],
		status === 'custom'
			? customColor
				? `bg-[${customColor}]`
				: 'bg-gray-500'
			: STATUS_INDICATOR_WITH_LABEL_COLOR_CLASSES[status],
		indicatorClass
	);
export const getStatusIndicatorWithLabelLabelClasses = (labelClass = '') =>
	cn('text-sm', labelClass);
export const getStatusIndicatorContainerClasses = (className = '') =>
	cn(STATUS_INDICATOR_CONTAINER_CLASSES, className);
export const getStatusIndicatorDotClasses = (status: IndicatorStatus) =>
	cn(STATUS_INDICATOR_DOT_BASE_CLASSES, STATUS_INDICATOR_STATUS_CLASSES[status]);
export const getStatusIndicatorLabel = (status: IndicatorStatus, label?: string) => label ?? status;

export const getAbbrClasses = (className = '') => cn(ABBR_CLASSES, className);
export const getDefinitionDescriptionClasses = (className = '') =>
	cn(DEFINITION_DESCRIPTION_CLASSES, className);
export const getDefinitionTermClasses = (className = '') => cn(DEFINITION_TERM_CLASSES, className);
export const getEmClasses = (className = '') => cn(EM_CLASSES, className);
export const getHighlightClasses = (className = '') => cn(HIGHLIGHT_CLASSES, className);
export const getInlineCodeClasses = (variant: keyof typeof INLINE_CODE_CLASSES = DEFAULT_INLINE_CODE_VARIANT as keyof typeof INLINE_CODE_CLASSES, className = '') =>
	cn(INLINE_CODE_BASE_CLASSES, INLINE_CODE_CLASSES[variant], className);
export const getKbdClasses = (className = '') => cn(KBD_CLASSES, className);
export const getLinkClasses = (
	variant: keyof typeof LINK_VARIANT_CLASSES = DEFAULT_LINK_VARIANT as keyof typeof LINK_VARIANT_CLASSES,
	size: keyof typeof LINK_SIZE_CLASSES = DEFAULT_LINK_SIZE as keyof typeof LINK_SIZE_CLASSES,
	disabled = DEFAULT_LINK_DISABLED,
	underline = DEFAULT_LINK_UNDERLINE,
	className = ''
) =>
	cn(
		LINK_VARIANT_CLASSES[variant],
		LINK_SIZE_CLASSES[size],
		disabled && LINK_DISABLED_CLASSES,
		!disabled && LINK_HOVER_CLASSES,
		underline && LINK_UNDERLINE_CLASSES,
		className
	);
export const getSeparatorClasses = (orientation: keyof typeof SEPARATOR_CLASSES = DEFAULT_SEPARATOR_ORIENTATION as keyof typeof SEPARATOR_CLASSES, className = '') =>
	cn(SEPARATOR_CLASSES[orientation], className);
export const getSyntaxHighlightedCodeContainerClasses = (
	variant: keyof typeof CODE_BLOCK_VARIANT_CLASSES = DEFAULT_SYNTAX_HIGHLIGHTED_CODE_VARIANT as keyof typeof CODE_BLOCK_VARIANT_CLASSES,
	size: keyof typeof CODE_BLOCK_SIZE_CLASSES = DEFAULT_SYNTAX_HIGHLIGHTED_CODE_SIZE as keyof typeof CODE_BLOCK_SIZE_CLASSES,
	className = ''
) =>
	cn(
		SYNTAX_HIGHLIGHTED_CODE_CONTAINER_BASE_CLASSES,
		CODE_BLOCK_VARIANT_CLASSES[variant],
		CODE_BLOCK_SIZE_CLASSES[size],
		className
	);
export const getSyntaxHighlightedCodeClasses = (_language: string) =>
	SYNTAX_HIGHLIGHTED_CODE_CLASSES;
export const getCaptionClasses = (className = '') =>
	cn('text-sm text-[--color-text-secondary]', className);

export const animateNumberValue = ({ value }: AnimatedNumberProps) => value;
export const formatAnimatedValue = (
	value: number,
	options: { format?: AnimatedNumberProps['format']; separator?: string; decimals?: number } = {}
) => {
	const decimals = options.decimals ?? 0;
	const separator = options.separator ?? ',';
	return value
		.toLocaleString('en-US', {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals
		})
		.replace(/,/g, separator);
};
export const formatNumberFlowValue = (
	value: number,
	locales: string | string[] = 'en-US',
	format?: Intl.NumberFormatOptions
) => new Intl.NumberFormat(locales, format).format(value);

export const getPieChartContainerClass = (className = '') =>
	cn('relative inline-flex items-center justify-center', className);
export const getPieChartContainerClasses = getPieChartContainerClass;
export const getPieChartSvgClass = (className = '') => cn('block', className);
export const getPieChartSvgClasses = getPieChartSvgClass;
export const getColorSwatchClasses = (className = '') =>
	cn('inline-block rounded border border-[--color-border-secondary]', className);
export const getColorSwatchStyle = (color: string, size = 16) =>
	`background-color: ${color}; width: ${size}px; height: ${size}px;`;
export const getNpmBadgeClasses = (
	type: keyof typeof NPM_BADGE_TYPE_CLASSES = 'version',
	className = ''
) => cn(NPM_BADGE_BASE_CLASSES, NPM_BADGE_TYPE_CLASSES[type], className);
export const getNpmBadgeLabel = (type: 'version' | 'downloads' | 'license' = 'version', label?: string) =>
	label ?? (type === 'version' ? 'version' : type);
export const getNpmBadgeLinkClasses = (className = '') =>
	cn('inline-flex items-center gap-1 hover:opacity-80', className);
export const getTableClasses = (className = '') => cn(...TABLE_CLASSES.table, className);
export const getTableCaptionClasses = (className = '') => cn(...TABLE_CLASSES.caption, className);
export const getTableHeaderClasses = (className = '') => cn(...TABLE_CLASSES.header, className);
export const getTableBodyClasses = (className = '') => cn(...TABLE_CLASSES.body, className);
export const getTableRowClasses = (striped = false, active = false, className = '') =>
	cn(
		...(striped ? TABLE_CLASSES.row.striped : TABLE_CLASSES.row.normal),
		active && TABLE_CLASSES.row.active,
		className
	);
export const getTableCellClasses = (
	variant: 'header' | 'data' = 'data',
	align: keyof typeof TABLE_ALIGNMENT_CLASSES = 'left',
	className = ''
) =>
	cn(
		...TABLE_CLASSES.cell.base,
		...(variant === 'header' ? TABLE_CLASSES.cell.header : TABLE_CLASSES.cell.data),
		...TABLE_ALIGNMENT_CLASSES[align],
		className
	);

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

export const getBaseIconClasses = (
	size: keyof typeof TOKEN_ICON_SIZE_CLASSES = 'md',
	variant: keyof typeof TOKEN_ICON_VARIANT_CLASSES = 'default',
	className = ''
) => cn(TOKEN_ICON_SIZE_CLASSES[size], TOKEN_ICON_VARIANT_CLASSES[variant], className);
export const getIconClasses = getBaseIconClasses;
export const getIconChevronClasses = (
	isOpen = ICON_CHEVRON_DEFAULTS.isOpen,
	size: keyof typeof TOKEN_ICON_SIZE_CLASSES = ICON_CHEVRON_DEFAULTS.size,
	direction: keyof typeof TOKEN_ICON_DIRECTION_ROTATION_CLASSES = 'down',
	variant: 'default' | IconCircleVariant = 'default',
	disabled = false,
	className = ''
) =>
	cn(
		TOKEN_ICON_SIZE_CLASSES[size],
		TOKEN_ICON_DIRECTION_ROTATION_CLASSES[direction],
		variant !== 'default' ? TOKEN_ICON_VARIANT_CLASSES[variant] : '',
		isOpen ? '' : '',
		disabled ? 'opacity-50' : '',
		className
	);
export const getIconCircleClasses = (
	variant: keyof typeof TOKEN_ICON_VARIANT_CLASSES = ICON_CIRCLE_DEFAULTS.variant,
	size: keyof typeof TOKEN_ICON_SIZE_CLASSES = ICON_CIRCLE_DEFAULTS.size,
	filled = false,
	disabled = false,
	className = ''
) =>
	cn(
		TOKEN_ICON_VARIANT_CLASSES[variant],
		TOKEN_ICON_SIZE_CLASSES[size],
		filled ? 'fill-current' : '',
		disabled ? 'opacity-50' : '',
		className
	);
export const getIconWrapperClasses = (
	size: keyof typeof TOKEN_ICON_WRAPPER_PADDING_CLASSES = ICON_WRAPPER_DEFAULTS.size,
	variant: keyof typeof TOKEN_ICON_VARIANT_CLASSES = ICON_WRAPPER_DEFAULTS.variant,
	shape: keyof typeof TOKEN_ICON_WRAPPER_SHAPE_CLASSES = ICON_WRAPPER_DEFAULTS.shape,
	color: keyof typeof TOKEN_ICON_WRAPPER_COLOR_CLASSES = ICON_WRAPPER_DEFAULTS.color,
	disabled = false,
	className = ''
) =>
	cn(
		'inline-flex items-center justify-center',
		TOKEN_ICON_WRAPPER_PADDING_CLASSES[size],
		TOKEN_ICON_WRAPPER_SHAPE_CLASSES[shape],
		variant !== 'default' ? TOKEN_ICON_VARIANT_CLASSES[variant] : '',
		TOKEN_ICON_WRAPPER_COLOR_CLASSES[color],
		disabled ? 'opacity-50' : '',
		className
	);

export const resolveCountryFlagEmoji = (code = '') => {
	const value = code.trim().toUpperCase();
	if (!/^[A-Z]{2}$/.test(value)) return '';
	return String.fromCodePoint(...value.split('').map((c) => 127397 + c.charCodeAt(0)));
};
export const getCountryFlagClasses = (className = '') =>
	cn('inline-flex items-center justify-center', className);
export const getCountryFlagFallbackClasses = (className = '') =>
	cn('inline-flex items-center justify-center rounded bg-gray-100 text-gray-700', className);
export const getCountryFlagStyle = (size: number) =>
	`width: ${size}px; height: ${size}px; font-size: ${size}px; line-height: ${size}px;`;
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
