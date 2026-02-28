import { cn } from '../../utils/cn/index';

const STATUS_DASHBOARD_SIZE_CLASSES = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
} as const;

const STATUS_DASHBOARD_ITEM_TITLE_CLASSES = {
	sm: 'text-sm font-medium',
	md: 'text-base font-medium',
	lg: 'text-lg font-semibold'
} as const;

const STATUS_DASHBOARD_ITEM_DESCRIPTION_CLASSES = {
	sm: 'text-xs text-[--color-text-secondary]',
	md: 'text-sm text-[--color-text-secondary]',
	lg: 'text-base text-[--color-text-secondary]'
} as const;

const DEFAULT_STATUS_DASHBOARD_SIZE: keyof typeof STATUS_DASHBOARD_SIZE_CLASSES = 'md';

export interface StatusDashboardStyleManagerInterface {
	getContainerClass: (variant: string, size: string, className?: string) => string;
	getHeaderClass: (className?: string) => string;
	getTitleClass: () => string;
	getSubtitleClass: () => string;
	getItemsGridClass: (layout: 'horizontal' | 'vertical') => string;
	getItemCardClass: (className?: string) => string;
	getItemContentClass: () => string;
	getItemHeaderClass: () => string;
	getItemTitleClass: (size: string) => string;
	getItemValueClass: () => string;
	getItemDescriptionClass: (size: string) => string;
	getItemFooterClass: () => string;
	getItemActionsClass: () => string;
	getStatusIconWrapperClass: () => string;
	getStatusIconClass: () => string;
}

export class StatusDashboardStyleManager implements StatusDashboardStyleManagerInterface {
	static getContainerClass(variant: string, size: string, className?: string): string {
		const sizeClasses = STATUS_DASHBOARD_SIZE_CLASSES[size as keyof typeof STATUS_DASHBOARD_SIZE_CLASSES] || STATUS_DASHBOARD_SIZE_CLASSES[DEFAULT_STATUS_DASHBOARD_SIZE];
		return cn('bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-default]', sizeClasses, className);
	}

	static getHeaderClass(className?: string): string {
		return cn('flex justify-between items-center p-4 border-b border-[--color-border-default]', className);
	}

	static getTitleClass(): string {
		return 'text-lg font-semibold text-[--color-text-primary]';
	}

	static getSubtitleClass(): string {
		return 'text-sm text-[--color-text-secondary] mt-1';
	}

	static getItemsGridClass(layout: 'horizontal' | 'vertical'): string {
		return layout === 'vertical' ? 'flex flex-col gap-4 p-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4';
	}

	static getItemCardClass(className?: string): string {
		return cn('border border-[--color-border-default] rounded-lg p-4 bg-[--color-background-primary] transition-shadow hover:shadow-md', className);
	}

	static getItemContentClass(): string {
		return 'flex items-center gap-3';
	}

	static getItemHeaderClass(): string {
		return 'flex items-center gap-3 mb-2';
	}

	static getItemTitleClass(size: string): string {
		return STATUS_DASHBOARD_ITEM_TITLE_CLASSES[size as keyof typeof STATUS_DASHBOARD_ITEM_TITLE_CLASSES] || STATUS_DASHBOARD_ITEM_TITLE_CLASSES[DEFAULT_STATUS_DASHBOARD_SIZE];
	}

	static getItemValueClass(): string {
		return 'text-2xl font-bold text-[--color-text-primary]';
	}

	static getItemDescriptionClass(size: string): string {
		return STATUS_DASHBOARD_ITEM_DESCRIPTION_CLASSES[size as keyof typeof STATUS_DASHBOARD_ITEM_DESCRIPTION_CLASSES] || STATUS_DASHBOARD_ITEM_DESCRIPTION_CLASSES[DEFAULT_STATUS_DASHBOARD_SIZE];
	}

	static getItemFooterClass(): string {
		return 'flex justify-between items-center mt-3 pt-3 border-t border-[--color-border-default]';
	}

	static getItemActionsClass(): string {
		return 'flex gap-2';
	}

	static getStatusIconWrapperClass(): string {
		return 'flex items-center justify-center w-10 h-10 rounded-full';
	}

	static getStatusIconClass(): string {
		return 'w-6 h-6';
	}

	// Instance methods for interface implementation
	getContainerClass(variant: string, size: string, className?: string): string {
		return StatusDashboardStyleManager.getContainerClass(variant, size, className);
	}

	getHeaderClass(className?: string): string {
		return StatusDashboardStyleManager.getHeaderClass(className);
	}

	getTitleClass(): string {
		return StatusDashboardStyleManager.getTitleClass();
	}

	getSubtitleClass(): string {
		return StatusDashboardStyleManager.getSubtitleClass();
	}

	getItemsGridClass(layout: 'horizontal' | 'vertical'): string {
		return StatusDashboardStyleManager.getItemsGridClass(layout);
	}

	getItemCardClass(className?: string): string {
		return StatusDashboardStyleManager.getItemCardClass(className);
	}

	getItemContentClass(): string {
		return StatusDashboardStyleManager.getItemContentClass();
	}

	getItemHeaderClass(): string {
		return StatusDashboardStyleManager.getItemHeaderClass();
	}

	getItemTitleClass(size: string): string {
		return StatusDashboardStyleManager.getItemTitleClass(size);
	}

	getItemValueClass(): string {
		return StatusDashboardStyleManager.getItemValueClass();
	}

	getItemDescriptionClass(size: string): string {
		return StatusDashboardStyleManager.getItemDescriptionClass(size);
	}

	getItemFooterClass(): string {
		return StatusDashboardStyleManager.getItemFooterClass();
	}

	getItemActionsClass(): string {
		return StatusDashboardStyleManager.getItemActionsClass();
	}

	getStatusIconWrapperClass(): string {
		return StatusDashboardStyleManager.getStatusIconWrapperClass();
	}

	getStatusIconClass(): string {
		return StatusDashboardStyleManager.getStatusIconClass();
	}
}
