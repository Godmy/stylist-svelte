import type { TokenMessageStatus } from '$stylist/design-system/tokens/interaction/message-status';
import type { TokenMarker } from '$stylist/design-system/tokens/architecture/marker';
import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';
import type { TokenAvailability } from '$stylist/design-system/tokens/interaction/availability';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/design-system/contracts/information/common';

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





