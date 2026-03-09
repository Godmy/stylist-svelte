import type { MessageStatusType } from '$stylist/design-system/tokens/interaction/statuses';
import type { MarkerType } from '$stylist/design-system/tokens/architecture/markers';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { DefaultVariants } from '$stylist/design-system/tokens/information/input-variants';
import type { PresenceStatus } from '$stylist/design-system/tokens/interaction/statuses';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from './common';

export interface DotProps extends HtmlAttributesBase<HTMLSpanElement> {
	color?: DefaultVariants;
	size?: ComponentSize;
}

export interface CounterProps extends HtmlAttributesBase<HTMLSpanElement> {
	count?: number;
	max?: number;
	variant?: DefaultVariants;
	size?: ComponentSize;
}

export interface CountBadgeProps extends HtmlAttributesWithChildren<HTMLSpanElement> {
	count?: number;
	max?: number;
	showZero?: boolean;
}

export interface ListItemMarkerProps extends HtmlAttributesBase<HTMLSpanElement> {
	type?: MarkerType;
	value?: string | number;
	color?: DefaultVariants;
	size?: ComponentSize;
}

export interface StatusIndicatorProps extends HtmlAttributesWithChildren<HTMLSpanElement> {
	status?: PresenceStatus;
	label?: string;
	customColor?: string;
	size?: ComponentSize;
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
	size?: ComponentSize;
}


