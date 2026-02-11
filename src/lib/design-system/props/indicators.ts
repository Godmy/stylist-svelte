import type {
	CounterVariant,
	IndicatorStatus,
	MarkerType,
	MessageStatusType,
	StatusIndicatorLabelStatus
} from '../tokens/indicators';
import type { CompactSize } from '../tokens/sizes';
import type { ColorVariant, CommonSize } from '../tokens/variants';
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

export interface MessageStatusProps {
	status?: MessageStatusType;
	size?: CommonSize;
}

