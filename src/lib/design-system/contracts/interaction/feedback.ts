import type { Snippet } from 'svelte';

import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { DefaultVariants } from '$stylist/design-system/tokens/information/default-variants';
import type { Skeleton } from '$stylist/design-system/tokens/information/skeletons';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '../information/common';
import type {
	NotificationBadgePosition,
	NotificationBadgeVariant,
	StepIconStatus
} from '$stylist/design-system/tokens/interaction/feedback';

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
	variant?: NotificationBadgeVariant;
	position?: NotificationBadgePosition;
	showZero?: boolean;
	badgeClass?: string;
}

export interface ISkeletonProps extends HtmlAttributesBase<HTMLDivElement> {
	variant?: Skeleton;
	width?: string;
	height?: string;
}

export interface ISpinnerProps extends HtmlAttributesBase<HTMLDivElement> {
	size?: ComponentSize;
	variant?: 'white' | 'gray' | DefaultVariants;
	label?: string;
}

export interface ILoaderProps extends HtmlAttributesBase<HTMLDivElement> {}

// ����� ��� �������� �������������
/** @deprecated ����������� DefaultVariants */
export type ProgressBarVariant = DefaultVariants;

export interface IProgressBarProps extends HtmlAttributesBase<HTMLDivElement> {
	value: number;
	max?: number;
	label?: string;
	showPercentage?: boolean;
	size?: ComponentSize;
	variant?: DefaultVariants;
}

export interface IProgressCircleProps extends HtmlAttributesBase<HTMLDivElement> {
	value: number;
	max?: number;
	size?: number;
	strokeWidth?: number;
	label?: string;
	showPercentage?: boolean;
	variant?: DefaultVariants;
}

export interface IStepIconProps extends HtmlAttributesBase<HTMLSpanElement> {
	status?: StepIconStatus;
	size?: ComponentSize;
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

export interface IAlertProps {
	variant?: DefaultVariants;
	size?: ComponentSize;
	disabled?: boolean;
	class?: string;
	children?: Snippet;
}
