import type {
	CounterVariant,
	IndicatorStatus,
	MarkerType,
	MessageStatusType,
	StatusIndicatorLabelStatus
} from '../../tokens/interaction/indicators';
import type { CompactSize } from '../../tokens/architecture/sizes';
import type { ColorVariant, CommonSize } from '../../tokens/architecture/variants';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from './common';

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
	customColor?: string;
	size?: CompactSize;
	showLabel?: boolean;
	indicatorClass?: string;
	labelClass?: string;
}

/**
 * @deprecated Используйте StatusIndicatorProps
 */
export type StatusIndicatorWithLabelProps = StatusIndicatorProps;

export interface MessageStatusProps {
	status?: MessageStatusType;
	size?: CommonSize;
}

