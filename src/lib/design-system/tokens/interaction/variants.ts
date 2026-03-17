import { STATUSES } from '$stylist/design-system/tokens/interaction/statuses';

const INPUT_APPEARANCE = ['solid', 'outline', 'ghost', 'link', 'subtle'] as const;
const INPUT_NEUTRAL = ['default', 'neutral', 'dark', 'light'] as const;
const INPUT_HIERARCHY = ['primary', 'secondary'] as const;
const INPUT_SEMANTIC = [...STATUSES.feedback.semantic, 'danger'] as const;
const INPUT_TONE = [...INPUT_HIERARCHY, ...INPUT_SEMANTIC] as const;
const INPUT_STATE = STATUSES.input.state;

const INPUT_ALL = [
	...INPUT_NEUTRAL,
	...INPUT_TONE,
	'gray',
	...INPUT_APPEARANCE
] as const;

const INPUT_VARIANT_VALUES = [
	...INPUT_APPEARANCE,
	'filled',
	...INPUT_NEUTRAL,
	...INPUT_TONE,
	...INPUT_STATE,
	'gray'
] as const;

export const VARIANTS = {
	card: ['default', 'featured', 'compact', 'detailed'] as const,
	sidebar: ['default', 'compact', 'minimal'] as const,
	quantitySelector: ['default', 'minimal', 'filled'] as const,
	lineChart: ['default', 'minimal', 'elegant', 'bold'] as const,
	code: ['default', 'terminal', 'diff'] as const,
	inlineCode: ['default', 'subtle'] as const,
	documentPreviewFormat: ['json', 'xml', 'text', 'html'] as const,
	input: {
		appearance: INPUT_APPEARANCE,
		hierarchy: INPUT_HIERARCHY,
		semantic: INPUT_SEMANTIC,
		tone: INPUT_TONE,
		state: INPUT_STATE,
		neutral: INPUT_NEUTRAL,
		all: INPUT_ALL,
		input: INPUT_VARIANT_VALUES
	}
} as const;

export const CARD_TYPES = VARIANTS.card;
export type CardType = (typeof CARD_TYPES)[number];

export const SIDEBAR_VARIANTS = VARIANTS.sidebar;
export type SidebarVariant = (typeof SIDEBAR_VARIANTS)[number];

export const QUANTITY_SELECTOR_VARIANTS = VARIANTS.quantitySelector;
export type QuantitySelectorVariant = (typeof QUANTITY_SELECTOR_VARIANTS)[number];

export const LINE_CHART_VARIANTS = VARIANTS.lineChart;
export type LineChartVariant = (typeof LINE_CHART_VARIANTS)[number];

export const CODE = VARIANTS.code;
export type Code = (typeof CODE)[number];

export const INLINE_CODE_VARIANTS = VARIANTS.inlineCode;
export type InlineCodeVariant = (typeof INLINE_CODE_VARIANTS)[number];

export const DOCUMENT_PREVIEW_FORMATS = VARIANTS.documentPreviewFormat;
export type DocumentPreviewFormat = (typeof DOCUMENT_PREVIEW_FORMATS)[number];

export const INPUT_VARIANTS = VARIANTS.input;
export type AppearanceStyle = (typeof INPUT_VARIANTS.appearance)[number];
export type HierarchyVariant = (typeof INPUT_VARIANTS.hierarchy)[number];
export type SemanticVariant = (typeof INPUT_VARIANTS.semantic)[number];
export type ToneVariant = (typeof INPUT_VARIANTS.tone)[number];
export type StateVariant = (typeof INPUT_VARIANTS.state)[number];
export type NeutralVariant = (typeof INPUT_VARIANTS.neutral)[number];
export type DefaultVariants = (typeof INPUT_VARIANTS.all)[number];
export type InputVariant = (typeof INPUT_VARIANTS.input)[number];
export type NotificationBadgeVariant = DefaultVariants | 'number' | 'dot';
export type SelectVariant = DefaultVariants | NeutralVariant;


