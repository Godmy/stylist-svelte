import type { Snippet } from 'svelte';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import type { TokenMarker } from '$stylist/architecture/type/enum/marker';
import type { TokenSkeleton } from '$stylist/architecture/type/enum/skeleton';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '$stylist/information/type/struct';
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

export interface INotificationBadgeProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	count?: number;
	maxCount?: number;
	marker?: TokenMarker;
	appearance?: TokenAppearance;
	position?: TokenAlignment;
	showZero?: boolean;
	badgeClass?: string;
}

export interface ISkeletonProps extends HtmlAttributesBase<HTMLDivElement> {
	variant?: TokenSkeleton;
	width?: string | number;
	height?: string | number;
}

export interface ISpinnerProps extends HtmlAttributesBase<HTMLDivElement> {
	size?: TokenSize;
	variant?: 'white' | 'gray' | TokenAppearance;
	label?: string;
}

export interface ILoaderProps extends HtmlAttributesBase<HTMLDivElement> {}

export interface IProgressBarProps extends HtmlAttributesBase<HTMLDivElement> {
	value: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	size?: TokenSize;
	variant?: TokenAppearance;
}

export interface IProgressCircleProps extends HtmlAttributesBase<HTMLDivElement> {
	value: number;
	max?: number;
	size?: number;
	strokeWidth?: number;
	label?: string;
	showPercentage?: boolean;
	variant?: TokenAppearance;
}

export interface IStepIconProps extends HtmlAttributesBase<HTMLSpanElement> {
	status?: 'pending' | 'active' | 'completed' | 'error';
	size?: TokenSize;
	stepNumber?: number;
	iconName?: string;
}

export interface IStepConnectorProps extends HtmlAttributesBase<HTMLDivElement> {
	active?: boolean;
	completed?: boolean;
	status?: 'pending' | 'active' | 'completed' | 'error';
}

export interface IAccountProgressTrackerProps extends HtmlAttributesBase<HTMLDivElement> {
	currentStep: number;
	totalSteps?: number;
	completedSteps?: number[];
	steps?: string[];
}

export interface ITableSkeletonProps extends HtmlAttributesBase<HTMLDivElement> {
	rows?: number;
	columns?: number;
}

export interface IAlertProps {
	variant?: TokenAppearance;
	size?: TokenSize;
	disabled?: boolean;
	class?: string;
	children?: Snippet;
}




