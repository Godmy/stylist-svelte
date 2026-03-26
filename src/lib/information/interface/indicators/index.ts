import type { TokenMessageStatus } from '$stylist/interaction/type/token/message-status';
import type { TokenMarker } from '$stylist/architecture/type/token/marker';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
import type { TokenAvailability } from '$stylist/interaction/type/token/availability';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/information/type/attribute/common';

export interface DotProps extends HtmlAttributesBase<HTMLSpanElement> {
	color?: TokenAppearance;
	size?: TokenSize;
}

export interface CounterProps extends HtmlAttributesBase<HTMLSpanElement> {
	count?: number;
	max?: number;
	variant?: TokenAppearance;
	size?: TokenSize;
}

export interface CountBadgeProps extends HtmlAttributesWithChildren<HTMLSpanElement> {
	count?: number;
	max?: number;
	showZero?: boolean;
}

export interface ListItemMarkerProps extends HtmlAttributesBase<HTMLSpanElement> {
	type?: TokenMarker;
	value?: string | number;
	color?: TokenAppearance;
	size?: TokenSize;
}

export interface StatusIndicatorProps extends HtmlAttributesWithChildren<HTMLSpanElement> {
	status?: TokenAvailability;
	appearance?: TokenAppearance;
	label?: string;
	customColor?: string;
	size?: TokenSize;
	showLabel?: boolean;
	indicatorClass?: string;
	labelClass?: string;
}

export interface MessageStatusProps {
	status?: TokenMessageStatus;
	size?: TokenSize;
}





