import type { TokenContainerMaxWidth } from '$stylist/design-system/classes/layout';

import type { Snippet } from 'svelte';

import type {
	HTMLAttributes,
	HTMLBlockquoteAttributes,
	HTMLButtonAttributes,
	HTMLInputAttributes
} from 'svelte/elements';

import type { Alignment, Justification, Orientation } from '../tokens/layout';

import type { HorizontalGap } from '../classes/layout';

import type { CompactSize, ComponentSize, CountryFlagSize } from '../tokens/sizes';

import type {
	BadgeVariant,
	CodeBlockSize,
	CodeBlockVariant,
	LabelSize
} from '../tokens';

import type {
	CounterVariant,
	IndicatorStatus,
	MarkerType,
	StatusIndicatorLabelStatus
} from '../tokens/indicators';

import type {
	AllVariants,
	AppearanceStyle,
	ColorVariant,
	CommonSize,
	DefaultVariants,
	InputVariant,
	MessageThreadVariant,
	NeutralVariant,
	SemanticVariant,
	SkeletonVariant,
	StateVariant
} from '../tokens/variants';
import type { GraphEdgeType, StackAlign, TableCellVariant } from '../tokens';

export type SpacerAxis = Orientation;

export interface ClassProp {
	class?: string;
}

export interface ChildrenProp {
	children?: Snippet;
}

export interface ContentProp {
	content?: Snippet;
}

export interface TypographyTextProps {
	variant?: string;
	size?: CommonSize;
	disabled?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
}

export type ToolbarVariant = 'default' | SemanticVariant | NeutralVariant | 'dark' | 'light';

export interface ToolbarInteractiveProps {
	variant?: ToolbarVariant;
	size?: CommonSize | 'xl';
	active?: boolean;
	disabled?: boolean;
}

export interface ToolbarFieldProps {
	variant?: ToolbarVariant;
	size?: CommonSize | 'xl';
	disabled?: boolean;
}

export type ButtonElementBaseProps<TCore, TDom> = Omit<TCore, 'children'> &
	TDom & {
		class?: string;
		children?: Snippet;
	};

export type {
	GraphEdgeType,
	StackAlign,
	MessageThreadVariant,
	SkeletonVariant,
	TableCellVariant,
	CountryFlagSize
} from '../tokens';

export type GraphNodeSize = CommonSize;

export type GraphNodeType = string;

export interface GraphEdgeProps {
	fromNodeId: string;
	toNodeId: string;
	directed?: boolean;
	type?: GraphEdgeType;
	style?: Record<string, string>;
}

export interface GraphNodeProps {
	id: string;
	x: number;
	y: number;
	label?: string;
	type?: GraphNodeType;
	color?: string;
	size?: GraphNodeSize;
	children?: Snippet;
}

export interface AspectRatioProps {
	children: Snippet;
	ratio?: number;
	class?: string;
}

export type ContainerMaxWidth = TokenContainerMaxWidth;

export interface ContainerProps {
	children: Snippet;
	maxWidth?: ContainerMaxWidth;
	class?: string;
}

export interface DividerProps {
	orientation?: Orientation;
	label?: string;
	align?: Alignment;
	dashed?: boolean;
	class?: string;
}

export interface SpacerProps {
	axis?: Orientation;
	size?: string | number;
	class?: string;
}

export interface StackProps {
	direction?: Orientation;
	spacing?: string | number;
	align?: StackAlign;
	justify?: Justification;
	class?: string;
	children?: Snippet;
}

export interface BlockquoteAttributesBase extends HTMLBlockquoteAttributes {
	class?: string;
}

export interface BlockquoteProps extends BlockquoteAttributesBase {
	cite?: string;
	withBorder?: boolean;
	withBackground?: boolean;
	children?: Snippet;
}

export interface ButtonAttributesBase
	extends Omit<HTMLButtonAttributes, 'class'>,
		ClassProp {}

export interface ButtonAttributesWithChildren extends ButtonAttributesBase, ChildrenProp {}

type ButtonDomProps = Omit<HTMLButtonAttributes, 'class' | 'disabled' | 'onclick'>;

type ButtonCoreProps = Omit<Props, 'class'>;

export type ButtonElementProps = ButtonElementBaseProps<ButtonCoreProps, ButtonDomProps>;

export interface CopyButtonProps
	extends Omit<
			ButtonCoreProps,
			'children' | 'text' | 'label' | 'successMessage' | 'showIcon' | 'onSuccess' | 'onError'
		>,
		ButtonDomProps {
	class?: string;
	text?: string;
	label?: string;
	successMessage?: string;
	showIcon?: boolean;
	children?: Snippet;
	onSuccess?: (text: string) => void;
	onError?: (error: Error) => void;
}

export interface IconButtonProps
	extends Omit<ButtonCoreProps, 'children' | 'icon'>,
		ButtonDomProps {
	class?: string;
	icon?: Snippet;
	children?: Snippet;
}

export interface PageButtonProps
	extends Omit<ButtonCoreProps, 'children' | 'page' | 'isActive'>,
		ButtonDomProps {
	class?: string;
	page?: number;
	isActive?: boolean;
	children?: Snippet;
}

export interface ButtonControlProps extends ButtonAttributesBase {
	variant?: DefaultVariants;
	size?: ComponentSize;
	disabled?: boolean;
	loading?: boolean;
	block?: boolean;
	onClick?: () => void;
}

export interface TabProps extends Omit<HTMLButtonAttributes, 'disabled' | 'onclick'> {
	id: string;
	selected?: boolean;
	variant?: DefaultVariants;
	size?: ComponentSize;
	class?: string;
	children?: Snippet;
	ariaLabel?: string;
	disabled?: boolean;
}

export type ToggleGroupType = 'single' | 'multiple';

export interface ToggleGroupRootProps
	extends Omit<HTMLButtonAttributes, 'size' | 'class' | 'type'> {
	value?: string;
	disabled?: boolean;
	orientation?: 'horizontal' | 'vertical';
	type?: ToggleGroupType;
	class?: string;
	onvalueChange?: (event: CustomEvent<{ value: string | string[] | null }>) => void;
}

export interface ToggleGroupItemProps extends Omit<HTMLButtonAttributes, 'class'> {
	value: string;
	disabled?: boolean;
	class?: string;
}

export interface AccordionHeaderProps
	extends Omit<HTMLButtonAttributes, keyof AccordionBaseProps>,
		AccordionBaseProps {
	header?: string;
	chevronSize?: 'sm' | 'md' | 'lg';
	padding?: 'sm' | 'md' | 'lg';
	paddingClass?: string;
	chevronSizeClass?: string;
	open?: boolean;
}

export interface AccordionHeaderDoubleProps
	extends Omit<HTMLButtonAttributes, keyof AccordionBaseProps>,
		AccordionBaseProps {
	open?: boolean;
	disabled?: boolean;
}

export interface HtmlAttributesBase<T extends EventTarget = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp {}

export interface HtmlAttributesWithChildren<T extends EventTarget = HTMLElement>
	extends HtmlAttributesBase<T>,
		ChildrenProp {}

export interface HtmlAttributesWithContent<T extends EventTarget = HTMLElement>
	extends HtmlAttributesBase<T>,
		ContentProp {}

export interface HtmlStateAttr {
	disabled?: boolean;
	required?: boolean;
	readonly?: boolean;
	error?: boolean;
}

export interface HtmlVariantSizeAttr {
	variant?: DefaultVariants;
	size?: ComponentSize;
}

export type ValueChangeHandler<T> = (value: T) => void;

export interface HorizontalLayoutProps extends HtmlAttributesBase<HTMLDivElement> {
	children: Snippet;
	gap?: HorizontalGap;
	alignItems?: Alignment;
	justifyContent?: Justification;
	wrap?: boolean;
}

export type GridItemContent = Snippet | string;

export type GridItem = {
	id: string;
	content: GridItemContent;
	colSpan?: number;
	rowSpan?: number;
	class?: string;
};

export interface GridLayoutProps extends HtmlAttributesBase<HTMLDivElement> {
	items: GridItem[];
	columns?: string;
	gap?: string;
	itemClass?: string;
}

export interface TextProps extends HtmlAttributesWithChildren<HTMLElement> {
	variant?: DefaultVariants;
	size?: CompactSize;
	disabled?: boolean;
	block?: boolean;
	ariaLabel?: string;
}

export interface InlineBaseProps<T extends HTMLElement = HTMLElement>
	extends HtmlAttributesWithChildren<T> {}

export interface AbbrProps extends InlineBaseProps {
	title?: string;
}

export interface InlineCodeProps extends InlineBaseProps {
	variant?: DefaultVariants;
}

export interface LinkProps extends InlineBaseProps<HTMLAnchorElement> {
	variant?: DefaultVariants;
	size?: CompactSize;
	disabled?: boolean;
	underline?: boolean;
	href?: string;
	target?: string;
	text?: string;
}

export interface BadgeProps extends HtmlAttributesWithChildren<HTMLSpanElement> {
	variant?: BadgeVariant;
	size?: CommonSize;
}

export interface BadgeGroupItem {
	id: string;
	label: string;
	variant?: BadgeVariant;
	size?: CommonSize;
	disabled?: boolean;
	onClick?: () => void;
}

export interface BadgeGroupProps extends HtmlAttributesBase<HTMLDivElement> {
	badges: BadgeGroupItem[];
	maxVisible?: number;
	showOverflow?: boolean;
	badgeClass?: string;
	overflowClass?: string;
}

export interface CodeBlockProps extends HtmlAttributesWithChildren<HTMLElement> {
	language?: string;
	variant?: CodeBlockVariant;
	size?: CodeBlockSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
}

export interface LabelProps extends HtmlAttributesWithChildren<HTMLLabelElement> {
	size?: LabelSize;
	required?: boolean;
	disabled?: boolean;
	htmlFor?: string;
	text?: string;
}

export interface DotProps extends HtmlAttributesBase<HTMLSpanElement> {
	color?: ColorVariant;
	size?: CommonSize;
}

export interface CounterProps extends HtmlAttributesBase<HTMLSpanElement> {
	count?: number;
	max?: number;
	variant?: CounterVariant;
	size?: CommonSize;
}

export interface CountBadgeProps extends HtmlAttributesWithChildren<HTMLSpanElement> {
	count?: number;
	max?: number;
	showZero?: boolean;
}

export interface ListItemMarkerProps extends HtmlAttributesBase<HTMLSpanElement> {
	type?: MarkerType;
	value?: string | number;
	color?: ColorVariant;
	size?: CommonSize;
}

export interface StatusIndicatorProps extends HtmlAttributesWithChildren<HTMLSpanElement> {
	status?: IndicatorStatus;
	label?: string;
}

export interface StatusIndicatorWithLabelProps extends HtmlAttributesBase<HTMLDivElement> {
	status: StatusIndicatorLabelStatus;
	label: string;
	customColor?: string;
	size?: CompactSize;
	showLabel?: boolean;
	indicatorClass?: string;
	labelClass?: string;
}

export type ChartDataPoint = {
	label: string;
	value: number;
	color?: string;
};

export interface PieChartProps extends HtmlAttributesBase<HTMLDivElement> {
	data: ChartDataPoint[];
}

export interface ColorSwatchProps extends HtmlAttributesWithContent<HTMLDivElement> {
	color?: string;
	size?: number;
}

export interface AnimatedNumberProps {
	value: number;
	format?: 'number' | 'percent' | 'currency';
	prefix?: string;
	suffix?: string;
	separator?: string;
	decimals?: number;
	class?: string;
}

export interface NumberFlowProps {
	value?: number;
	locales?: string | string[];
	format?: Intl.NumberFormatOptions;
	prefix?: string;
	suffix?: string;
	class?: string;
}

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

export type ChatMessageStatus = 'sent' | 'delivered' | 'read';

export type ChatMessageVariant = SemanticVariant | NeutralVariant;

export interface ChatMessageProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	text?: string;
	sender?: string;
	senderAvatar?: string;
	timestamp?: string;
	status?: ChatMessageStatus;
	isOwn?: boolean;
	contentClass?: string;
	headerClass?: string;
	footerClass?: string;
	variant?: ChatMessageVariant;
}

export interface MessageThreadMessage {
	id: string;
	text: string;
	sender: string;
	senderAvatar?: string;
	timestamp: string;
	status?: ChatMessageStatus;
	isOwn: boolean;
}

export interface MessageInputProps extends HtmlAttributesBase<HTMLDivElement> {
	disabled?: boolean;
	placeholder?: string;
	showAttachment?: boolean;
	showEmoji?: boolean;
	showSend?: boolean;
}

export interface MessageThreadProps extends HtmlAttributesBase<HTMLDivElement> {
	title?: string;
	messages?: MessageThreadMessage[];
	containerClass?: string;
	messageContainerClass?: string;
	headerClass?: string;
	loading?: boolean;
	variant?: MessageThreadVariant;
	messageVariant?: ChatMessageVariant;
}

export interface IBreadcrumbLinkProps extends HtmlAttributesWithChildren<HTMLElement> {
	current?: boolean;
	href?: string;
}

export interface IBreadcrumbItem {
	href: string;
	label: string;
}

export type PageEllipsisProps = {
	class?: string;
} & HTMLAttributes<HTMLDivElement>;

export type BaseTagVariant = SemanticVariant | NeutralVariant;

export type BaseTagSize = CommonSize;

export interface BaseTagProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesWithChildren<T> {
	variant?: BaseTagVariant;
	size?: BaseTagSize;
	closable?: boolean;
	disabled?: boolean;
}

export interface TagProps extends BaseTagProps<HTMLSpanElement>, ContentProp {
	text?: string;
	icon?: Snippet;
}

export interface ChipProps extends BaseTagProps<HTMLDivElement>, ContentProp {
	label?: string;
	text?: string;
	icon?: Snippet;
}

export interface ControlProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesBase<T>,
		HtmlStateAttr,
		HtmlVariantSizeAttr {
	value?: unknown;
	onChange?: ValueChangeHandler<unknown>;
	onFocus?: () => void;
	onBlur?: () => void;
	onKeyDown?: (event: KeyboardEvent) => void;
	onKeyUp?: (event: KeyboardEvent) => void;
}

export interface InputControlProps
	extends HtmlAttributesBase<HTMLElement>,
		HtmlStateAttr,
		HtmlVariantSizeAttr {
	id?: string;
	name?: string;
	value?: string;
	placeholder?: string;
	type?: string;
	onChange?: ValueChangeHandler<string>;
	onFocus?: () => void;
	onBlur?: () => void;
}

export interface TextAreaControlProps
	extends HtmlAttributesBase<HTMLElement>,
		HtmlStateAttr,
		HtmlVariantSizeAttr {
	id?: string;
	name?: string;
	value?: string;
	placeholder?: string;
	rows?: number;
	cols?: number;
	onChange?: ValueChangeHandler<string>;
	onFocus?: () => void;
	onBlur?: () => void;
}

export interface SelectControlProps
	extends HtmlAttributesBase<HTMLElement>,
		HtmlStateAttr,
		HtmlVariantSizeAttr {
	id?: string;
	name?: string;
	value?: string;
	options?: Array<{ value: string; label: string }>;
	onChange?: ValueChangeHandler<string>;
	onFocus?: () => void;
	onBlur?: () => void;
}

export type SelectVariant = BaseTagVariant;

export type SelectSize = ComponentSize;

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SelectProps extends HtmlAttributesWithChildren<HTMLElement>, HtmlStateAttr {
	options: SelectOption[];
	value?: string;
	defaultValue?: string;
	variant?: SelectVariant;
	size?: SelectSize;
	placeholder?: string;
	searchable?: boolean;
	multiple?: boolean;
}

export interface SortProps extends SelectProps {
	sortDirection?: 'asc' | 'desc';
	onSortDirectionChange?: (direction: 'asc' | 'desc') => void;
}

export interface ProductSortProps extends SortProps {
	selectedOption?: string;
	onSortChange?: (option: string) => void;
}

export interface SliderTickProps extends HtmlAttributesWithContent<HTMLDivElement> {
	value?: number;
	position?: number;
	active?: boolean;
	label?: string;
}

export interface SliderProps extends HtmlAttributesWithContent<HTMLDivElement> {
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
	orientation?: 'horizontal' | 'vertical';
}

export type TabIndicatorColor = ColorVariant;

export interface TabIndicatorProps extends HtmlAttributesBase<HTMLDivElement> {
	left?: string;
	width?: string;
	color?: TabIndicatorColor;
	size?: CompactSize;
	disabled?: boolean;
}

export interface TabPanelProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	id: string;
	disabled?: boolean;
}

export type TabContainerProps = HtmlAttributesWithChildren<HTMLDivElement> & IDisableable;

export interface TabsProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	selectedId?: string;
	onTabChange?: (id: string) => void;
	variant?: DefaultVariants;
	size?: ComponentSize;
	disabled?: boolean;
}

export interface ToolbarProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesWithChildren<T> {
	variant?: ToolbarVariant;
	size?: ComponentSize;
	orientation?: Orientation;
	disabled?: boolean;
	collapsible?: boolean;
	collapsed?: boolean;
}

export type ToolbarInteractiveItemProps<T extends EventTarget = HTMLElement> =
	HtmlAttributesWithChildren<T> & ToolbarInteractiveProps;

export interface ToolbarGroupProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesWithChildren<T> {
	variant?: ToolbarVariant;
	size?: ComponentSize;
	orientation?: Orientation;
}

export interface ToolbarSeparatorProps<T extends EventTarget = HTMLElement>
	extends HtmlAttributesBase<T> {
	orientation?: Orientation;
}

export type ToolbarFieldItemProps<T extends EventTarget = HTMLElement> =
	HtmlAttributesWithChildren<T> & ToolbarFieldProps;

export interface AccordionBaseProps {
	value: string;
	class?: string;
	children?: Snippet;
}

export interface ComplexAccordionProps extends HtmlAttributesWithContent<HTMLDivElement> {
	multiple?: boolean;
	defaultValue?: string[];
	value?: string[];
	onValueChange?: (value: string[]) => void;
}

export interface AccordionItemProps
	extends Omit<HTMLAttributes<HTMLDivElement>, keyof AccordionBaseProps>,
		AccordionBaseProps {}

export interface AccordionPanelProps
	extends Omit<HTMLAttributes<HTMLDivElement>, keyof AccordionBaseProps>,
		AccordionBaseProps,
		ContentProp {
	paddingClass?: string;
	borderClass?: string;
	bgClass?: string;
	open?: boolean;
}

export interface IBaseFeedbackProps extends HtmlAttributesBase<HTMLElement> {}

export interface IErrorMessageProps extends IBaseFeedbackProps {
	message?: string;
	showIcon?: boolean;
}

export interface ISimpleTooltipProps extends IBaseFeedbackProps {
	text: string;
	position?: 'top' | 'right' | 'bottom' | 'left';
	show?: boolean;
}

export type NotificationBadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export type NotificationBadgeVariant =
	| SemanticVariant
	| NeutralVariant
	| StateVariant
	| 'number'
	| 'dot';

export interface INotificationBadgeProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	count?: number;
	maxCount?: number;
	variant?: NotificationBadgeVariant;
	position?: NotificationBadgePosition;
	showZero?: boolean;
	badgeClass?: string;
}

export interface ISkeletonProps extends HtmlAttributesBase<HTMLDivElement> {
	variant?: SkeletonVariant;
	width?: string;
	height?: string;
}

export type SpinnerSize = ComponentSize;

export interface ISpinnerProps extends HtmlAttributesBase<HTMLDivElement> {
	size?: SpinnerSize;
	variant?: 'white' | 'gray' | ColorVariant;
	label?: string;
}

export interface ILoaderProps extends HtmlAttributesBase<HTMLDivElement> {}

export type ProgressBarSize = CompactSize;

export type ProgressBarVariant = SemanticVariant;

export interface IProgressBarProps extends HtmlAttributesBase<HTMLDivElement> {
	value: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	size?: ProgressBarSize;
	variant?: ProgressBarVariant;
}

export interface IProgressCircleProps extends HtmlAttributesBase<HTMLDivElement> {
	value: number;
	max?: number;
	size?: number;
	strokeWidth?: number;
	label?: string;
	showPercentage?: boolean;
	variant?: ProgressBarVariant;
}

export type StepIconStatus = 'pending' | 'active' | 'completed' | 'error';

export type StepIconSize = CompactSize;

export interface IStepIconProps extends HtmlAttributesBase<HTMLSpanElement> {
	status?: StepIconStatus;
	size?: StepIconSize;
	stepNumber?: number;
	iconName?: string;
}

export interface IStepConnectorProps extends HtmlAttributesBase<HTMLDivElement> {
	active?: boolean;
	completed?: boolean;
	status?: StepIconStatus;
}

export interface IAccountProgressTrackerProps extends HtmlAttributesBase<HTMLDivElement> {
	currentStep: number;
	totalSteps?: number;
	completedSteps?: number[];
	steps?: string[];
}

export interface ITableSkeletonProps extends HtmlAttributesBase<HTMLTableElement> {
	rows?: number;
	columns?: number;
}

export interface InputHelperProps<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp,
		ContentProp {}

export interface InputHelperChildrenProps<T extends HTMLElement = HTMLElement>
	extends Omit<HTMLAttributes<T>, 'class'>,
		ClassProp,
		ChildrenProp {}

export interface IFormErrorMessageProps extends InputHelperProps<HTMLParagraphElement> {
	text?: string;
	visible?: boolean;
}

export interface IFormHelperTextProps extends InputHelperProps<HTMLParagraphElement> {
	text?: string;
	variant?: InputVariant;
}

export interface ICharacterCountProps extends InputHelperProps<HTMLDivElement> {
	current?: number;
	max?: number;
	showPercentage?: boolean;
}

export type InputAddonPosition = 'left' | 'right';

export interface IInputAddonProps extends InputHelperChildrenProps<HTMLDivElement> {
	position?: InputAddonPosition;
	variant?: AppearanceStyle;
}

export interface InputLabelProps {
	id?: string;
	label?: string;
}

export interface InputValueProps {
	value?: string;
	placeholder?: string;
	disabled?: boolean;
}

export interface InputValidationProps {
	required?: boolean;
	errors?: string[];
}

export interface InputFieldBaseProps extends InputLabelProps, InputValueProps, InputValidationProps {
	name?: string;
}

export interface InputFieldRequiredProps
	extends InputFieldBaseProps {
	id: string;
	label: string;
}

export interface IInputGroupProps
	extends Omit<HtmlAttributesBase<HTMLDivElement>, keyof InputLabelProps | keyof InputValueProps>,
		InputLabelProps,
		InputValueProps {
	buttonLabel?: string;
	buttonVariant?: DefaultVariants;
	buttonDisabled?: boolean;
	onButtonClick?: () => void;
}

export interface IInputProps
	extends Omit<HtmlAttributesBase<HTMLInputElement>, keyof InputFieldRequiredProps>,
		InputFieldRequiredProps {
	type?: HTMLInputAttributes['type'];
	min?: number;
	max?: number;
	step?: number;
}

export interface ITextareaProps
	extends Omit<HtmlAttributesBase<HTMLTextAreaElement>, keyof InputFieldRequiredProps>,
		InputFieldRequiredProps {
	rows?: number;
	maxlength?: number;
}

export interface IPinInputDigitProps extends HtmlAttributesBase<HTMLInputElement> {
	value?: string;
	focused?: boolean;
	invalid?: boolean;
}

export interface AnnouncementBannerProps extends MediaHtmlChildrenProps<HTMLDivElement> {
	title?: string;
	description?: string;
	icon?: string;
}

export interface CountryFlagProps {
	countryCode?: string;
	size?: CountryFlagSize;
	class?: string;
	content?: string;
}

export interface IconChevronProps {
	isOpen?: boolean;
	size?: CommonSize;
	direction?: 'up' | 'down' | 'left' | 'right';
	variant?: SemanticVariant | NeutralVariant | 'dark' | 'light';
	disabled?: boolean;
	class?: string;
}

export interface IconCircleProps {
	variant?: SemanticVariant | NeutralVariant | 'dark' | 'light';
	size?: CommonSize;
	filled?: boolean;
	disabled?: boolean;
	class?: string;
	icon?: Snippet;
}

export interface IconWrapperProps extends ContentProp {
	size?: ComponentSize;
	variant?: DefaultVariants;
	shape?: 'circle' | 'square' | 'rounded';
	color?: ColorVariant;
	disabled?: boolean;
	class?: string;
}

export interface FaviconProps extends ContentProp {
	size?: number;
	url?: string;
	class?: string;
	error?: boolean;
	onError?: () => void;
}

export interface SeparatorProps {
	orientation?: Orientation;
	decorative?: boolean;
	class?: string;
}

export interface SyntaxHighlightedCodeProps {
	language?: string;
	code?: string;
	variant?: CodeBlockVariant;
	size?: CompactSize;
	showLineNumbers?: boolean;
	startLineNumber?: number;
	class?: string;
}

import type { MessageStatusType } from '../tokens/indicators';

export interface MessageStatusProps {
	status?: MessageStatusType;
	size?: CommonSize;
}

export interface IAlertProps {
	variant?: SemanticVariant;
	size?: ComponentSize;
	disabled?: boolean;
	class?: string;
	children?: Snippet;
}

export interface IBreadcrumbProps {
	items?: Array<{ href?: string; label: string; current?: boolean }>;
	class?: string;
}

export interface IBreadcrumbsCrumb {
	href?: string;
	label: string;
}

export interface IBreadcrumbsProps {
	crumbs?: Array<{ href?: string; label: string }>;
	class?: string;
}

import type { BadgeType } from '../tokens/badge';

export interface NpmBadgeProps {
	type: BadgeType;
	label?: string;
	class?: string;
	value?: string;
	link?: string;
}

export interface InputAttributesBase extends Omit<HTMLInputAttributes, 'class'>, ClassProp {}

export interface TextInputBaseProps extends InputAttributesBase {
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	required?: boolean;
	error?: boolean;
	helpText?: string;
}

export type ToggleSize = CompactSize;

export interface ToggleBaseProps {
	disabled?: boolean;
	class?: string;
	size?: ToggleSize;
}

export interface ToggleInputProps
	extends Omit<HTMLInputAttributes, 'size' | 'disabled' | 'checked' | 'class'>,
		ToggleBaseProps {
	checked?: boolean;
}

export interface ToggleProps extends ToggleInputProps {
	toggleSize?: ToggleSize;
}

export interface SwitchProps extends ToggleInputProps {
	id: string;
	label?: string;
	description?: string;
	switchSize?: ToggleSize;
	required?: boolean;
}

export interface CheckboxProps extends ToggleInputProps {
	id?: string;
	label?: string;
	description?: string;
	errors?: string[];
	required?: boolean;
	indeterminate?: boolean;
}

export interface RadioProps extends ToggleInputProps {
	value: string;
	label?: string;
}

export interface RadioButtonGroupProps extends Omit<HtmlAttributesWithChildren<HTMLInputElement>, 'size' | 'class' | 'onchange' | 'oninput'> {
	value?: string;
	disabled?: boolean;
	orientation?: 'horizontal' | 'vertical';
	options: Array<{ value: string; label: string; disabled?: boolean }>;
	optionClass?: string;
	labelClass?: string;
	radioClass?: string;
	name?: string;
	class?: string;
	required?: boolean;
	onChange?: (value: string) => void;
	onInput?: (value: string) => void;
}

export interface ActionSegmentedControlProps {
	items: string[];
	selectedIndex?: number;
	onChange?: ValueChangeHandler<number>;
	class?: string;
}

export interface PictureToolbarTool {
	id: string;
	label: string;
	icon?: string;
}

export interface PictureToolbarProps {
	tools: PictureToolbarTool[];
	onToolSelect?: (tool: string) => void;
	activeTool?: string;
	class?: string;
}

export interface ProductSortOption {
	value: string;
	label: string;
}

export interface AdvancedToggleProps extends ToggleBaseProps {
	label?: string;
	checked?: boolean;
	onChange?: ValueChangeHandler<boolean>;
}

export interface DarkModeToggleProps extends ToggleBaseProps {
	checked?: boolean;
	darkMode?: boolean;
	onToggle?: (payload: { darkMode: boolean }) => void;
}

export interface IInputFieldProps extends IInputProps {
	helperText?: string;
}

export interface InputProps {
	variant?: InputVariant;
	size?: CompactSize;
	disabled?: boolean;
	error?: boolean;
	class?: string;
	children?: Snippet;
}

export interface IAdvancedInputProps {
	label?: string;
	value?: string;
	placeholder?: string;
	type?: string;
	disabled?: boolean;
	onInput?: ValueChangeHandler<string>;
	class?: string;
}

export interface IVariant<T extends string = string> {
	variant?: T;
}

export interface ISize<T extends string = string> {
	size?: T;
}

export interface IStyleable<V extends string = string, S extends string = string>
	extends IVariant<V>,
		ISize<S> {
	class?: string;
}

export interface IDisableable {
	disabled?: boolean;
}

export interface ILoadable {
	loading?: boolean;
}

export interface IClickable {
	onclick?: (event: MouseEvent) => void;
}

export interface Props
	extends IDisableable,
		ILoadable,
		IClickable,
		IStyleable<DefaultVariants, ComponentSize> {
	class?: string;
	ariaLabel?: string;
	block?: boolean;
	loadingLabel?: string;
	children?: Snippet;
	icon?: Snippet;
}

export interface StateProps {
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	readonly?: boolean;
	required?: boolean;
	hidden?: boolean;
	visible?: boolean;
	focused?: boolean;
	hovered?: boolean;
	active?: boolean;
	selected?: boolean;
	checked?: boolean;
	indeterminate?: boolean;
	expanded?: boolean;
	collapsed?: boolean;
	open?: boolean;
	closed?: boolean;
	pending?: boolean;
	success?: boolean;
	warning?: boolean;
	info?: boolean;
	primary?: boolean;
	secondary?: boolean;
	block?: boolean;
	inline?: boolean;
	sticky?: boolean;
	fixed?: boolean;
	absolute?: boolean;
	relative?: boolean;
}

export interface StateStyleProps {
	disabledStyle?: string;
	loadingStyle?: string;
	errorStyle?: string;
	readonlyStyle?: string;
	successStyle?: string;
	warningStyle?: string;
	primaryStyle?: string;
	secondaryStyle?: string;
}

export interface ComponentStateProps extends StateProps, StateStyleProps {}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export type ValidationState = 'valid' | 'invalid' | 'pending';

export type InteractionState = 'enabled' | 'disabled' | 'readonly';

export type VisibilityState = 'visible' | 'hidden' | 'collapsed';

export interface TableAttributesBase extends HTMLAttributes<HTMLTableElement> {
	class?: string;
}

export interface TableElementAttributesBase<T extends EventTarget = HTMLElement>
	extends HTMLAttributes<T> {
	class?: string;
}

export interface TableProps extends TableAttributesBase, ContentProp {
	caption?: string;
	striped?: boolean;
	bordered?: boolean;
	hoverable?: boolean;
}

export type TableSectionProps = TableElementAttributesBase<HTMLTableSectionElement> &
	ContentProp;

export interface TableRowProps
	extends TableElementAttributesBase<HTMLTableRowElement>,
		ContentProp {
	striped?: boolean;
	active?: boolean;
}

export type TableCellAlign = string;

export interface TableCellProps
	extends TableElementAttributesBase<HTMLTableCellElement>,
		ContentProp {
	variant?: TableCellVariant;
	align?: TableCellAlign;
}

// Helper component variants - using the same variants as input components
export type CharacterCountVariant = (typeof INPUT_VARIANTS)[number];
export type InputAddonVariant = (typeof INPUT_VARIANTS)[number];
export type PinInputVariant = (typeof INPUT_VARIANTS)[number];

