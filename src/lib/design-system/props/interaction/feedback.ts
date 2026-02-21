import type { Snippet } from 'svelte';

import type { ComponentSize, CompactSize } from '../../tokens/architecture/sizes';
import type { ColorVariant, NeutralVariant, SemanticVariant, SkeletonVariant, StateVariant } from '../../tokens/architecture/variants';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from '../information/common';

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

export interface IAlertProps {
	variant?: SemanticVariant;
	size?: ComponentSize;
	disabled?: boolean;
	class?: string;
	children?: Snippet;
}
