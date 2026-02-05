/* AUTO-CONSOLIDATED ATTRIBUTE TYPES. */
import type { TokenContainerMaxWidth } from '$stylist/design-system/tokens/layout-classes';
import type { SyntaxHighlightedCodeVariant } from '$stylist/design-system/tokens/typography-inline';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLBlockquoteAttributes, HTMLButtonAttributes, HTMLInputAttributes } from 'svelte/elements';
import type { DataDisplayTableCellAlign } from '../tokens/data-display';
import type { InteractiveVariant } from '../tokens/interaction';
import type { Alignment, Justification, Orientation } from '../tokens/layout';
import type { HorizontalGap } from '../tokens/layout-classes';
import type { CompactSize, ComponentSize } from '../tokens/sizes';
import type { TabSize, TabVariant } from '../tokens/tabs';
import type { BadgeVariant, CodeBlockSize, CodeBlockVariant, LabelSize } from '../tokens/typography-elements';
import type { CounterVariant, IndicatorStatus, MarkerType, StatusIndicatorLabelStatus } from '../tokens/typography-indicators';
import type { AllVariants, AppearanceStyle, ColorVariant, CommonSize, DefaultVariants, InputVariant, NeutralVariant, SemanticVariant } from '../tokens/variants';

// ===== BEGIN: architecture/graph-types.ts =====
export type GraphEdgeType = 'line' | 'curve' | 'polyline';
export type GraphNodeSize = 'sm' | 'md' | 'lg';
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
// ===== END: architecture/graph-types.ts =====

// ===== BEGIN: architecture/layout-aspect-ratio.ts =====
export interface AspectRatioProps {
  children: Snippet;
  ratio?: number;
  class?: string;
}
// ===== END: architecture/layout-aspect-ratio.ts =====

// ===== BEGIN: architecture/layout-container.ts =====
export type ContainerMaxWidth = TokenContainerMaxWidth;

export interface ContainerProps {
  children: Snippet;
  maxWidth?: ContainerMaxWidth;
  class?: string;
}
// ===== END: architecture/layout-container.ts =====

// ===== BEGIN: architecture/layout-divider.ts =====
export interface DividerProps {
  orientation?: Orientation;
  label?: string;
  align?: Alignment;
  dashed?: boolean;
  class?: string;
}
// ===== END: architecture/layout-divider.ts =====

// ===== BEGIN: architecture/layout-spacer.ts =====
export interface SpacerProps {
  axis?: Orientation;
  size?: string | number;
  class?: string;
}
// ===== END: architecture/layout-spacer.ts =====

// ===== BEGIN: architecture/layout-stack.ts =====
// Note: Orientation and Justification are already imported at the top of this file

export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type StackDirection = Orientation;
export type StackJustify = Justification;

export interface StackProps {
  direction?: StackDirection;
  spacing?: string | number;
  align?: StackAlign;
  justify?: StackJustify;
  class?: string;
}
// ===== END: architecture/layout-stack.ts =====

// ===== BEGIN: blockquote-attributes.ts =====
export interface BlockquoteAttributesBase extends HTMLBlockquoteAttributes {
  class?: string;
}

export interface BlockquoteProps extends BlockquoteAttributesBase {
  cite?: string;
  withBorder?: boolean;
  withBackground?: boolean;
  children?: Snippet;
}
// ===== END: blockquote-attributes.ts =====

// ===== BEGIN: button-attributes.ts =====
export interface ButtonClassAttr {
  class?: string;
}

export interface ButtonChildrenAttr {
  children?: Snippet;
}

export interface ButtonAttributesBase extends Omit<HTMLButtonAttributes, 'class'>, ButtonClassAttr {}

export interface ButtonAttributesWithoutClass
  extends Omit<HTMLButtonAttributes, 'class'>,
    ButtonClassAttr {}

export interface ButtonAttributesWithChildren
  extends ButtonAttributesBase,
    ButtonChildrenAttr {}

type ButtonDomProps = Omit<HTMLButtonAttributes, 'class' | 'disabled' | 'onclick'>;
type ButtonCoreProps = Omit<Props, 'class'>;

export interface ButtonBaseProps extends Omit<ButtonCoreProps, 'children'>, ButtonDomProps {
  class?: string;
  children?: Snippet;
}

export interface ButtonProps extends Omit<ButtonCoreProps, 'children'>, ButtonDomProps {
  class?: string;
  children?: Snippet;
}

export interface CloseButtonProps extends Omit<ButtonCoreProps, 'children'>, ButtonDomProps {
  class?: string;
  children?: Snippet;
}

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

export interface IconButtonProps extends Omit<ButtonCoreProps, 'children' | 'icon'>, ButtonDomProps {
  class?: string;
  icon?: Snippet;
  children?: Snippet;
}

export interface PageButtonProps extends Omit<ButtonCoreProps, 'children' | 'page' | 'isActive'>, ButtonDomProps {
  class?: string;
  page?: number;
  isActive?: boolean;
  children?: Snippet;
}

export interface SplitButtonProps extends Omit<ButtonCoreProps, 'children'>, ButtonDomProps {
  class?: string;
  children?: Snippet;
}

export interface ButtonControlProps extends ButtonAttributesBase {
  variant?: string;
  size?: string;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  onClick?: () => void;
}

export interface TabProps extends Omit<HTMLButtonAttributes, 'disabled' | 'onclick'> {
  id: string;
  selected?: boolean;
  variant?: TabVariant;
  size?: TabSize;
  class?: string;
  children?: Snippet;
  ariaLabel?: string;
  disabled?: boolean;
}

export type ToggleGroupType = 'single' | 'multiple';

export interface ToggleGroupRootProps extends Omit<HTMLButtonAttributes, 'size' | 'class' | 'type'> {
  value?: string;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  type?: ToggleGroupType;
  class?: string;
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
}

export interface AccordionHeaderDoubleProps
  extends Omit<HTMLButtonAttributes, keyof AccordionBaseProps>,
    AccordionBaseProps {
  open?: boolean;
  disabled?: boolean;
}
// ===== END: button-attributes.ts =====

// ===== BEGIN: html-attributes.ts =====
export interface HtmlClassAttr {
  class?: string;
}

export interface HtmlChildrenAttr {
  children?: Snippet;
}

export interface HtmlContentAttr {
  content?: Snippet;
}

export interface HtmlAttributesBase<T extends EventTarget = HTMLElement>
  extends Omit<HTMLAttributes<T>, 'class'>,
    HtmlClassAttr {}

export interface HtmlAttributesWithoutClass<T extends EventTarget = HTMLElement>
  extends Omit<HTMLAttributes<T>, 'class'>,
    HtmlClassAttr {}

export interface HtmlAttributesWithChildren<T extends EventTarget = HTMLElement>
  extends HtmlAttributesBase<T>,
    HtmlChildrenAttr {}

export interface HtmlAttributesWithContent<T extends EventTarget = HTMLElement>
  extends HtmlAttributesBase<T>,
    HtmlContentAttr {}

export interface HtmlStateAttr {
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  error?: boolean;
}

export interface HtmlVariantSizeAttr {
  variant?: string;
  size?: string;
}

export interface HorizontalLayoutProps extends HtmlAttributesWithoutClass<HTMLDivElement> {
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
  variant?: AllVariants;
  size?: CompactSize;
  disabled?: boolean;
  block?: boolean;
  ariaLabel?: string;
}

export interface InlineBaseProps<T extends HTMLElement = HTMLElement> extends HtmlAttributesWithChildren<T> {}

export interface AbbrProps extends InlineBaseProps {
  title?: string;
}

export interface InlineCodeProps extends InlineBaseProps {
  variant?: string;
}

export interface LinkProps extends InlineBaseProps<HTMLAnchorElement> {
  variant?: string;
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
  size?: 'sm' | 'md' | 'lg';
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

export interface MediaHtmlProps<T extends HTMLElement = HTMLElement> extends HtmlAttributesWithoutClass<T> {}

export interface MediaHtmlChildrenProps<T extends HTMLElement = HTMLElement>
  extends MediaHtmlProps<T>,
    HtmlChildrenAttr {}

export interface MediaContentProps {
  class?: string;
  content?: Snippet;
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
export type ChatMessageVariant = 'default' | 'primary' | 'secondary';

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

export interface IBreadcrumbLinkProps extends HtmlAttributesWithChildren<HTMLElement> {
  current?: boolean;
  href?: string;
}

export type PageEllipsisProps = {
  class?: string;
} & HTMLAttributes<HTMLDivElement>;

export type BaseTagVariant = SemanticVariant | NeutralVariant;
export type BaseTagSize = CommonSize;

export interface BaseTagProps<T extends EventTarget = HTMLElement> extends HtmlAttributesWithChildren<T> {
  variant?: BaseTagVariant;
  size?: BaseTagSize;
  closable?: boolean;
  disabled?: boolean;
}

export interface TagProps extends BaseTagProps<HTMLSpanElement> {
  text?: string;
  icon?: Snippet;
  content?: Snippet;
}

export interface ChipProps extends BaseTagProps<HTMLDivElement> {
  label?: string;
  children?: Snippet;
}

export interface ControlProps<T extends EventTarget = HTMLElement>
  extends HtmlAttributesBase<T>,
    HtmlStateAttr,
    HtmlVariantSizeAttr {
  value?: any;
  onChange?: (value: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onKeyUp?: (event: KeyboardEvent) => void;
}

export interface InputControlProps extends HtmlAttributesBase<HTMLElement>, HtmlStateAttr, HtmlVariantSizeAttr {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface TextAreaControlProps extends HtmlAttributesBase<HTMLElement>, HtmlStateAttr, HtmlVariantSizeAttr {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface SelectControlProps extends HtmlAttributesBase<HTMLElement>, HtmlStateAttr, HtmlVariantSizeAttr {
  id?: string;
  name?: string;
  value?: string;
  options?: Array<{ value: string; label: string }>;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export type SelectVariant = BaseTagVariant;
export type SelectSize = BaseTagSize | 'xl';

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

export type TabIndicatorColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'gray';

export interface TabIndicatorProps extends HtmlAttributesBase<HTMLDivElement> {
  left?: string;
  width?: string;
  color?: TabIndicatorColor;
  size?: TabSize;
  disabled?: boolean;
}

export interface TabListProps extends HtmlAttributesWithChildren<HTMLDivElement> {
  disabled?: boolean;
}

export interface TabPanelProps extends HtmlAttributesWithChildren<HTMLDivElement> {
  id: string;
  disabled?: boolean;
}

export interface TabPanelsProps extends HtmlAttributesWithChildren<HTMLDivElement> {
  disabled?: boolean;
}

export interface TabsProps extends HtmlAttributesWithChildren<HTMLDivElement> {
  selectedId?: string;
  onTabChange?: (id: string) => void;
  variant?: TabVariant;
  size?: TabSize;
  disabled?: boolean;
}

export type ToolbarVariant = 'default' | SemanticVariant | NeutralVariant | 'dark' | 'light';

export interface ToolbarProps<T extends EventTarget = HTMLElement> extends HtmlAttributesWithChildren<T> {
  variant?: ToolbarVariant;
  size?: CommonSize | 'xl';
  orientation?: Orientation;
  disabled?: boolean;
  collapsible?: boolean;
  collapsed?: boolean;
}

export interface ToolbarItemProps<T extends EventTarget = HTMLElement> extends HtmlAttributesWithChildren<T> {
  variant?: ToolbarVariant;
  size?: CommonSize | 'xl';
  active?: boolean;
  disabled?: boolean;
}

export interface ToolbarGroupProps<T extends EventTarget = HTMLElement> extends HtmlAttributesWithChildren<T> {
  variant?: ToolbarVariant;
  size?: CommonSize | 'xl';
  orientation?: Orientation;
}

export interface ToolbarSeparatorProps<T extends EventTarget = HTMLElement> extends HtmlAttributesBase<T> {
  orientation?: Orientation;
}

export interface ToolbarButtonProps<T extends EventTarget = HTMLElement> extends HtmlAttributesWithChildren<T> {
  variant?: ToolbarVariant;
  size?: CommonSize | 'xl';
  active?: boolean;
  disabled?: boolean;
}

export interface ToolbarSelectProps<T extends EventTarget = HTMLElement> extends HtmlAttributesWithChildren<T> {
  variant?: ToolbarVariant;
  size?: CommonSize | 'xl';
  disabled?: boolean;
}

export interface ToolbarInputProps<T extends EventTarget = HTMLElement> extends HtmlAttributesWithChildren<T> {
  variant?: ToolbarVariant;
  size?: CommonSize | 'xl';
  disabled?: boolean;
}

export interface ToolbarIconProps<T extends EventTarget = HTMLElement> extends HtmlAttributesWithChildren<T> {
  variant?: ToolbarVariant;
  size?: CommonSize | 'xl';
  active?: boolean;
  disabled?: boolean;
}

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
    AccordionBaseProps {
  content?: Snippet;
  paddingClass?: string;
  borderClass?: string;
  bgClass?: string;
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
export type NotificationBadgeVariant = 'default' | SemanticVariant | 'number' | 'dot' | 'error';

export interface INotificationBadgeProps extends HtmlAttributesWithChildren<HTMLDivElement> {
  count?: number;
  maxCount?: number;
  variant?: NotificationBadgeVariant;
  position?: NotificationBadgePosition;
  showZero?: boolean;
  badgeClass?: string;
}

export type SkeletonVariant = 'text' | 'circular' | 'rectangular';

export interface ISkeletonProps extends HtmlAttributesBase<HTMLDivElement> {
  variant?: SkeletonVariant;
  width?: string;
  height?: string;
}

export type SpinnerSize = CommonSize | 'xl';

export interface ISpinnerProps extends HtmlAttributesBase<HTMLDivElement> {
  size?: SpinnerSize;
  variant?: 'white' | 'gray' | ColorVariant;
  label?: string;
}

export interface ILoaderProps extends HtmlAttributesBase<HTMLDivElement> {}

export type ProgressBarSize = 'sm' | 'md' | 'lg';
export type ProgressBarVariant = 'primary' | 'success' | 'warning' | 'danger';

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
export type StepIconSize = 'sm' | 'md' | 'lg';

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
    HtmlClassAttr {
  content?: Snippet;
}

export interface InputHelperChildrenProps<T extends HTMLElement = HTMLElement>
  extends Omit<HTMLAttributes<T>, 'class'>,
    HtmlClassAttr {
  children?: Snippet;
}

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

export interface IInputGroupProps extends HtmlAttributesBase<HTMLDivElement> {
  id?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  buttonLabel?: string;
  buttonVariant?: InteractiveVariant;
  buttonDisabled?: boolean;
  onButtonClick?: () => void;
}

export interface IInputProps extends HtmlAttributesBase<HTMLInputElement> {
  id: string;
  label: string;
  type?: string;
  value?: string;
  errors?: string[];
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  name?: string;
}

export interface ITextareaProps extends HtmlAttributesBase<HTMLTextAreaElement> {
  id: string;
  label: string;
  value?: string;
  errors?: string[];
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  rows?: number;
  maxlength?: number;
}

export interface IPinInputDigitProps extends HtmlAttributesBase<HTMLInputElement> {
  value?: string;
  focused?: boolean;
  invalid?: boolean;
}
// ===== END: html-attributes.ts =====

// ===== BEGIN: information/media-announcement-banner.ts =====
export interface AnnouncementBannerProps extends MediaHtmlChildrenProps<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: string;
}
// ===== END: information/media-announcement-banner.ts =====

// ===== BEGIN: information/media-country-flag.ts =====
export type CountryFlagSize = number;

export interface CountryFlagProps {
  countryCode?: string;
  size?: CountryFlagSize;
  class?: string;
}
// ===== END: information/media-country-flag.ts =====

// ===== BEGIN: information/media-icon-chevron.ts =====
export interface IconChevronProps {
  isOpen?: boolean;
  size?: CommonSize;
  direction?: 'up' | 'down' | 'left' | 'right';
  variant?: 'default' | SemanticVariant | NeutralVariant | 'dark' | 'light';
  disabled?: boolean;
  class?: string;
}
// ===== END: information/media-icon-chevron.ts =====

// ===== BEGIN: information/media-icon-circle.ts =====
export interface IconCircleProps {
  variant?: 'default' | SemanticVariant | NeutralVariant | 'dark' | 'light';
  size?: CommonSize;
  filled?: boolean;
  disabled?: boolean;
  class?: string;
}
// ===== END: information/media-icon-circle.ts =====

// ===== BEGIN: information/media-icon-wrapper.ts =====
export interface IconWrapperProps {
  size?: CommonSize | 'xl';
  variant?: 'default' | SemanticVariant | NeutralVariant | 'dark' | 'light';
  shape?: 'circle' | 'square' | 'rounded';
  color?: ColorVariant;
  disabled?: boolean;
  class?: string;
}
// ===== END: information/media-icon-wrapper.ts =====

// ===== BEGIN: information/media-favicon.ts =====
export interface FaviconProps {
  size?: number;
  url?: string;
  class?: string;
}
// ===== END: information/media-favicon.ts =====

// ===== BEGIN: information/typography-inline.ts =====
export interface SeparatorProps {
  orientation?: Orientation;
  decorative?: boolean;
  class?: string;
}
export interface SyntaxHighlightedCodeProps {
  language?: string;
  code?: string;
  variant?: SyntaxHighlightedCodeVariant;
  size?: CompactSize;
  showLineNumbers?: boolean;
  startLineNumber?: number;
  class?: string;
}
// ===== END: information/typography-inline.ts =====

// ===== BEGIN: information/typography-indicators-message-status.ts =====
import type { MessageStatusType } from '../tokens/typography-indicators';

export interface MessageStatusProps {
  status?: MessageStatusType;
  size?: CommonSize;
}
// ===== END: information/typography-indicators-message-status.ts =====

// ===== BEGIN: information/typography-text-caption.ts =====
export interface CaptionProps {
  variant?: string;
  size?: CommonSize;
  disabled?: boolean;
  block?: boolean;
  class?: string;
  ariaLabel?: string;
}
// ===== END: information/typography-text-caption.ts =====

// ===== BEGIN: information/typography-text-heading.ts =====
export interface HeadingProps {
  variant?: string;
  size?: CommonSize;
  disabled?: boolean;
  block?: boolean;
  class?: string;
  ariaLabel?: string;
}
// ===== END: information/typography-text-heading.ts =====

// ===== BEGIN: information/typography-text-paragraph.ts =====
export interface ParagraphProps {
  variant?: string;
  size?: CommonSize;
  disabled?: boolean;
  block?: boolean;
  class?: string;
  ariaLabel?: string;
}
// ===== END: information/typography-text-paragraph.ts =====

// ===== BEGIN: information/typography-text-small.ts =====
export interface SmallProps {
  variant?: string;
  size?: CommonSize;
  disabled?: boolean;
  block?: boolean;
  class?: string;
  ariaLabel?: string;
}
// ===== END: information/typography-text-small.ts =====

// ===== BEGIN: information/typography-text-strikethrough.ts =====
export interface StrikethroughProps {
  variant?: string;
  size?: CommonSize;
  disabled?: boolean;
  block?: boolean;
  class?: string;
  ariaLabel?: string;
}
// ===== END: information/typography-text-strikethrough.ts =====

// ===== BEGIN: information/typography-text-strong.ts =====
export interface StrongProps {
  variant?: string;
  size?: CommonSize;
  disabled?: boolean;
  block?: boolean;
  class?: string;
  ariaLabel?: string;
}
// ===== END: information/typography-text-strong.ts =====

// ===== BEGIN: information/typography-text-subscript.ts =====
export interface SubscriptProps {
  variant?: string;
  size?: CommonSize;
  disabled?: boolean;
  block?: boolean;
  class?: string;
  ariaLabel?: string;
}
// ===== END: information/typography-text-subscript.ts =====

// ===== BEGIN: information/typography-text-superscript.ts =====
export interface SuperscriptProps {
  variant?: string;
  size?: CommonSize;
  disabled?: boolean;
  block?: boolean;
  class?: string;
  ariaLabel?: string;
}
// ===== END: information/typography-text-superscript.ts =====

// ===== BEGIN: information/typography-text-text.ts =====
export interface TextProps {
  variant?: string;
  size?: CommonSize;
  disabled?: boolean;
  block?: boolean;
  class?: string;
  ariaLabel?: string;
}
// ===== END: information/typography-text-text.ts =====

// ===== BEGIN: information/data-display-npm-badge.ts =====
import type { NpmBadgeType } from '../tokens/data-display';

export interface NpmBadgeProps {
  type: NpmBadgeType;
  label?: string;
  class?: string;
}
// ===== END: information/data-display-npm-badge.ts =====

// ===== BEGIN: input-attributes.ts =====
export interface InputClassAttr {
  class?: string;
}

export interface InputAttributesBase extends Omit<HTMLInputAttributes, 'class'>, InputClassAttr {}

export interface InputAttributesWithoutClass
  extends Omit<HTMLInputAttributes, 'class'>,
    InputClassAttr {}

export interface TextInputBaseProps extends InputAttributesBase {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helpText?: string;
}

export type ToggleSize = 'sm' | 'md' | 'lg';

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
}

export interface RadioButtonGroupProps extends Omit<HTMLInputAttributes, 'size' | 'class'> {
  value?: string;
  disabled?: boolean;
  orientation?: 'horizontal' | 'vertical';
  options: Array<{ value: string; label: string }>;
  optionClass?: string;
  labelClass?: string;
  radioClass?: string;
  name?: string;
  class?: string;
  required?: boolean;
}
// ===== END: input-attributes.ts =====

// ===== BEGIN: interaction/controls-action-segmented-control.ts =====

export interface ActionSegmentedControlProps {
  items: string[];
  selectedIndex?: number;
  onChange?: (index: number) => void;
  class?: string;
}
// ===== END: interaction/controls-action-segmented-control.ts =====

// ===== BEGIN: interaction/controls-picture-toolbar.ts =====

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
// ===== END: interaction/controls-picture-toolbar.ts =====

// ===== BEGIN: interaction/controls-product-sort.ts =====

export interface ProductSortOption {
  value: string;
  label: string;
}
// ===== END: interaction/controls-product-sort.ts =====

// ===== BEGIN: interaction/controls-toggles-toggle-types.ts =====
export interface AdvancedToggleProps extends ToggleBaseProps {
  label?: string;
  checked?: boolean;
  onChange?: (value: boolean) => void;
}
export interface DarkModeToggleProps extends ToggleBaseProps {
  checked?: boolean;
}
// ===== END: interaction/controls-toggles-toggle-types.ts =====

// ===== BEGIN: interaction/input-field-input-field.ts =====
export interface IInputFieldProps extends IInputProps {
  helperText?: string;
}

// ===== BEGIN: interaction/input-props.ts =====
export interface InputProps {
  variant?: InputVariant;
  size?: CompactSize;
  disabled?: boolean;
  error?: boolean;
  class?: string;
}

export interface IAdvancedInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  onInput?: (value: string) => void;
  class?: string;
}
// ===== END: interaction/input-props.ts =====

// ===== BEGIN: interaction/props.ts =====
/**
 * Интерфейс для компонентов с вариантом
 * @template T Тип варианта (по умолчанию string)
 */
export interface IVariant<T extends string = string> {
  /**
   * Вариант компонента
   */
  variant?: T;
}

/**
 * Интерфейс для компонентов с размером
 * @template T Тип размера (по умолчанию string)
 */
export interface ISize<T extends string = string> {
  /**
   * Размер компонента
   */
  size?: T;
}

/**
 * Интерфейс для стилизуемых компонентов
 * Объединяет варианты, размеры и дополнительный класс
 * @template V Тип варианта
 * @template S Тип размера
 */
export interface IStyleable<V extends string = string, S extends string = string>
  extends IVariant<V>,
    ISize<S> {
  /**
   * Дополнительный CSS класс
   */
  class?: string;
}

/**
 * Интерфейс для компонентов, которые можно отключить
 */
export interface IDisableable {
  /**
   * Флаг отключения компонента
   */
  disabled?: boolean;
}

/**
 * Интерфейс для компонентов с состоянием загрузки
 */
export interface ILoadable {
  /**
   * Флаг состояния загрузки
   */
  loading?: boolean;
}

/**
 * Интерфейс для кликабельных компонентов
 */
export interface IClickable {
  /**
   * Обработчик клика
   */
  onclick?: (event: MouseEvent) => void;
}

/**
 * Объединенный интерфейс свойств для интерактивных компонентов
 * Включает в себя все базовые интерфейсы и общие свойства
 */
export interface Props extends IDisableable, ILoadable, IClickable, IStyleable<DefaultVariants, ComponentSize> {
  /**
   * Дополнительный CSS класс
   */
  class?: string;
  /**
   * ARIA метка для доступности
   */
  ariaLabel?: string;
  /**
   * Флаг блочного отображения
   */
  block?: boolean;
  /**
   * Метка во время загрузки
   */
  loadingLabel?: string;
  /**
   * Дочерние элементы компонента
   */
  children?: any;
  /**
   * Иконка компонента
   */
  icon?: any;
}
// ===== END: interaction/props.ts =====

// ===== BEGIN: interaction/states.ts =====
// Общий интерфейс для состояний компонентов
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

// Интерфейс для стилей состояний
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

// Объединенный интерфейс для состояний и их стилей
export interface ComponentStateProps extends StateProps, StateStyleProps {}

// Типы для различных состояний
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
export type ValidationState = 'valid' | 'invalid' | 'pending';
export type InteractionState = 'enabled' | 'disabled' | 'readonly';
export type VisibilityState = 'visible' | 'hidden' | 'collapsed';
// ===== END: interaction/states.ts =====

// ===== BEGIN: table-attributes.ts =====
export interface TableAttributesBase extends HTMLAttributes<HTMLTableElement> {
  class?: string;
}

export interface TableElementAttributesBase<T extends EventTarget = HTMLElement> extends HTMLAttributes<T> {
  class?: string;
}

export interface TableContentAttr {
  content?: Snippet;
}

export interface TableProps extends TableAttributesBase, TableContentAttr {
  caption?: string;
  striped?: boolean;
  bordered?: boolean;
  hoverable?: boolean;
}

export interface TableHeaderProps
  extends TableElementAttributesBase<HTMLTableSectionElement>,
    TableContentAttr {}

export interface TableBodyProps
  extends TableElementAttributesBase<HTMLTableSectionElement>,
    TableContentAttr {}

export interface TableRowProps extends TableElementAttributesBase<HTMLTableRowElement>, TableContentAttr {
  striped?: boolean;
  active?: boolean;
}

export type TableCellVariant = 'header' | 'data';
export type TableCellAlign = DataDisplayTableCellAlign;

export interface TableCellProps extends TableElementAttributesBase<HTMLTableCellElement>, TableContentAttr {
  variant?: TableCellVariant;
  align?: TableCellAlign;
}
// ===== END: table-attributes.ts =====

// ===== BEGIN: typography-text-props.ts =====
export interface CaptionProps extends HtmlAttributesWithChildren<HTMLElement> {
  variant?: string;
  size?: CompactSize;
  disabled?: boolean;
  block?: boolean;
  ariaLabel?: string;
}

export interface HeadingProps extends HtmlAttributesWithChildren<HTMLHeadingElement> {
  variant?: AllVariants;
  size?: CompactSize;
  disabled?: boolean;
  block?: boolean;
  ariaLabel?: string;
}

export interface ParagraphProps extends HtmlAttributesWithChildren<HTMLParagraphElement> {
  variant?: AllVariants;
  size?: CompactSize;
  disabled?: boolean;
  block?: boolean;
  ariaLabel?: string;
}

export interface SmallProps extends HtmlAttributesWithChildren<HTMLElement> {
  variant?: AllVariants;
  size?: CompactSize;
  disabled?: boolean;
  block?: boolean;
  ariaLabel?: string;
}

export interface StrongProps extends HtmlAttributesWithChildren<HTMLElement> {
  variant?: AllVariants;
  size?: CompactSize;
  disabled?: boolean;
  block?: boolean;
  ariaLabel?: string;
}

export interface StrikethroughProps extends HtmlAttributesWithChildren<HTMLElement> {
  variant?: AllVariants;
  size?: CompactSize;
  disabled?: boolean;
  block?: boolean;
  ariaLabel?: string;
}

export interface SubscriptProps extends HtmlAttributesWithChildren<HTMLElement> {
  variant?: AllVariants;
  size?: CompactSize;
  disabled?: boolean;
  block?: boolean;
  ariaLabel?: string;
}

export interface SuperscriptProps extends HtmlAttributesWithChildren<HTMLElement> {
  variant?: AllVariants;
  size?: CompactSize;
  disabled?: boolean;
  block?: boolean;
  ariaLabel?: string;
}

export interface TextProps extends HtmlAttributesWithChildren<HTMLElement> {
  variant?: AllVariants;
  size?: CompactSize;
  disabled?: boolean;
  block?: boolean;
  ariaLabel?: string;
}
// ===== END: typography-text-props.ts =====
