import type { DefaultVariants, NotificationBadgeVariant } from '$stylist/design-system/tokens/interaction/variants';
import type { StepIconStatus } from '$stylist/design-system/tokens/interaction/statuses';
import type { NotificationBadgePosition } from '$stylist/design-system/tokens/interaction/notification-positions';

/** @deprecated use DefaultVariants */
export type ProgressBarVariant = DefaultVariants;

export interface AlertStyleManagerInterface {
	getContainerClass: (variant?: string, disabled?: boolean, className?: string) => string;
	getContentClass: () => string;
	getDescriptionClass: () => string;
	getIconClass: () => string;
	getTitleClass: () => string;
}

export interface LoaderStyleManagerInterface {
	getContainerClass: () => string;
	getSpinnerClass: (size?: string) => string;
	getLabelClass: () => string;
}

export interface SkeletonStyleManagerInterface {
	getContainerClass: (variant?: string, className?: string) => string;
	getElementClass: () => string;
}

export interface SpinnerStyleManagerInterface {
	getContainerClass: (className?: string) => string;
	getSpinnerClass: (size?: string, variant?: string) => string;
}

export interface ProgressBarStyleManagerInterface {
	getContainerClass: () => string;
	getFillClass: (value: number, max: number) => string;
	getLabelClass: () => string;
}

export interface ProgressCircleStyleManagerInterface {
	getContainerClass: () => string;
	getCircleClass: (strokeWidth: number) => string;
	getFillClass: (value: number, max: number) => string;
	getLabelClass: () => string;
}

export interface StepConnectorStyleManagerInterface {
	getContainerClass: (active?: boolean, completed?: boolean) => string;
	getLineClass: (active?: boolean, completed?: boolean) => string;
	getStepContent: (step: { content?: string }) => string;
	getStepIconClasses: (status: StepIconStatus | string, size: string) => string;
}

export interface AccountProgressTrackerStyleManagerInterface {
	getContainerClass: (className?: string) => string;
	getStepClass: (active?: boolean, completed?: boolean) => string;
	getProgressClass: () => string;
}

export interface NotificationBadgeStyleManagerInterface {
	getContainerClasses: (className?: string) => string;
	getBadgeClasses: (
		showDot: boolean,
		variant?: NotificationBadgeVariant | string,
		position?: NotificationBadgePosition | string,
		badgeClass?: string
	) => string;
}
