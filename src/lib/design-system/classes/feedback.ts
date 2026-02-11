import { cn } from '../utils/classnames';

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
	getContainerClass: (variant?: string) => string;
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
		variant?: string,
		position?: string,
		badgeClass?: string
	) => string;
}

export const AlertStyleManager: AlertStyleManagerInterface = {
	getContainerClass: (variant?: string, disabled?: boolean, className?: string) =>
		cn(
			'alert-container',
			variant ? `variant-${variant}` : '',
			disabled ? 'disabled' : '',
			className
		),
	getContentClass: () => 'alert-content',
	getDescriptionClass: () => 'alert-description',
	getIconClass: () => 'alert-icon',
	getTitleClass: () => 'alert-title'
};

export const LoaderStyleManager: LoaderStyleManagerInterface = {
	getContainerClass: () => 'loader-container',
	getSpinnerClass: (size?: string) => cn('loader-spinner', size ? `size-${size}` : ''),
	getLabelClass: () => 'loader-label'
};

export const SkeletonStyleManager: SkeletonStyleManagerInterface = {
	getContainerClass: (variant?: string, className?: string) =>
		cn('skeleton-container', variant ? `variant-${variant}` : '', className),
	getElementClass: () => 'skeleton-element'
};

export const SpinnerStyleManager: SpinnerStyleManagerInterface = {
	getContainerClass: (className?: string) => cn('spinner-container', className),
	getSpinnerClass: (size?: string, variant?: string) =>
		cn('spinner-icon', size ? `size-${size}` : '', variant ? `variant-${variant}` : '')
};

export const ProgressBarStyleManager: ProgressBarStyleManagerInterface = {
	getContainerClass: () => 'progress-bar-container',
	getFillClass: (value: number, max: number) => {
		const percentage = max > 0 ? Math.min(100, (value / max) * 100) : 0;
		return `progress-bar-fill w-[${percentage}%]`;
	},
	getLabelClass: () => 'progress-bar-label'
};

export const ProgressCircleStyleManager: ProgressCircleStyleManagerInterface = {
	getContainerClass: () => 'progress-circle-container',
	getCircleClass: (strokeWidth: number) => cn('progress-circle', `stroke-[${strokeWidth}px]`),
	getFillClass: (value: number, max: number) => {
		const percentage = max > 0 ? Math.min(100, (value / max) * 100) : 0;
		return `progress-circle-fill w-[${percentage}%]`;
	},
	getLabelClass: () => 'progress-circle-label'
};

export const StepConnectorStyleManager: StepConnectorStyleManagerInterface = {
	getContainerClass: (active?: boolean, completed?: boolean) =>
		cn('step-connector', active ? 'active' : '', completed ? 'completed' : ''),
	getLineClass: (active?: boolean, completed?: boolean) =>
		cn('step-connector-line', active ? 'active' : '', completed ? 'completed' : '')
};

export const AccountProgressTrackerStyleManager: AccountProgressTrackerStyleManagerInterface = {
	getContainerClass: (className?: string) => cn('account-progress-tracker-container', className),
	getStepClass: (active?: boolean, completed?: boolean) =>
		cn('account-progress-tracker-step', active ? 'active' : '', completed ? 'completed' : ''),
	getProgressClass: () => 'account-progress-tracker-progress'
};

export const NotificationBadgeStyleManager: NotificationBadgeStyleManagerInterface = {
	getContainerClasses: (className?: string) => cn('relative inline-block', className),
	getBadgeClasses: (showDot: boolean, variant = 'error', position = 'top-right', badgeClass = '') => {
		const positionClasses =
			{
				'top-right': '-top-2 -right-2',
				'top-left': '-top-2 -left-2',
				'bottom-right': '-bottom-2 -right-2',
				'bottom-left': '-bottom-2 -left-2'
			}[position] || 'top-right';

		const variantClasses =
			{
				default: 'bg-gray-200 text-gray-800',
				primary: 'bg-blue-500 text-white',
				secondary: 'bg-purple-500 text-white',
				success: 'bg-green-500 text-white',
				warning: 'bg-yellow-500 text-black',
				error: 'bg-red-500 text-white',
				number: 'bg-red-500 text-white',
				dot: 'bg-red-500'
			}[variant] || 'bg-red-500 text-white';

		const sizeClasses = showDot
			? 'w-2 h-2'
			: 'flex items-center justify-center min-w-[18px] h-4 px-1 text-xs leading-none';

		return cn(
			'absolute rounded-full z-10 flex items-center justify-center',
			positionClasses,
			variantClasses,
			sizeClasses,
			badgeClass
		);
	}
};

export const getStepContent = (step: { content?: string }) => step.content || '';
export const getStepIconClasses = (status: string, size: string) =>
	cn('step-icon', `status-${status}`, `size-${size}`);
