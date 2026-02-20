import {
	STATUS_DASHBOARD_CONTAINER_BASE_CLASSES,
	STATUS_DASHBOARD_SIZE_CLASSES,
	STATUS_DASHBOARD_HEADER_CLASSES,
	STATUS_DASHBOARD_TITLE_CLASSES,
	STATUS_DASHBOARD_SUBTITLE_CLASSES,
	STATUS_DASHBOARD_ITEMS_GRID_HORIZONTAL_CLASSES,
	STATUS_DASHBOARD_ITEMS_GRID_VERTICAL_CLASSES,
	STATUS_DASHBOARD_ITEM_CARD_BASE_CLASSES,
	STATUS_DASHBOARD_ITEM_CONTENT_CLASSES,
	STATUS_DASHBOARD_ITEM_HEADER_CLASSES,
	STATUS_DASHBOARD_ITEM_TITLE_CLASSES,
	STATUS_DASHBOARD_ITEM_VALUE_CLASSES,
	STATUS_DASHBOARD_ITEM_DESCRIPTION_CLASSES,
	STATUS_DASHBOARD_ITEM_FOOTER_CLASSES,
	STATUS_DASHBOARD_ITEM_ACTIONS_CLASSES,
	STATUS_DASHBOARD_STATUS_ICON_WRAPPER_CLASSES,
	STATUS_DASHBOARD_STATUS_ICON_CLASSES,
	STATUS_DASHBOARD_STATUS_ICON_COLOR_CLASSES,
	DEFAULT_STATUS_DASHBOARD_SIZE,
	DEFAULT_STATUS_DASHBOARD_LAYOUT
} from '../classes/status-dashboard';
import { cn } from '../utils/cn';

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
		return cn(STATUS_DASHBOARD_CONTAINER_BASE_CLASSES, sizeClasses, className);
	}

	static getHeaderClass(className?: string): string {
		return cn(STATUS_DASHBOARD_HEADER_CLASSES, className);
	}

	static getTitleClass(): string {
		return STATUS_DASHBOARD_TITLE_CLASSES;
	}

	static getSubtitleClass(): string {
		return STATUS_DASHBOARD_SUBTITLE_CLASSES;
	}

	static getItemsGridClass(layout: 'horizontal' | 'vertical'): string {
		return layout === 'vertical' ? STATUS_DASHBOARD_ITEMS_GRID_VERTICAL_CLASSES : STATUS_DASHBOARD_ITEMS_GRID_HORIZONTAL_CLASSES;
	}

	static getItemCardClass(className?: string): string {
		return cn(STATUS_DASHBOARD_ITEM_CARD_BASE_CLASSES, className);
	}

	static getItemContentClass(): string {
		return STATUS_DASHBOARD_ITEM_CONTENT_CLASSES;
	}

	static getItemHeaderClass(): string {
		return STATUS_DASHBOARD_ITEM_HEADER_CLASSES;
	}

	static getItemTitleClass(size: string): string {
		return STATUS_DASHBOARD_ITEM_TITLE_CLASSES[size as keyof typeof STATUS_DASHBOARD_ITEM_TITLE_CLASSES] || STATUS_DASHBOARD_ITEM_TITLE_CLASSES[DEFAULT_STATUS_DASHBOARD_SIZE];
	}

	static getItemValueClass(): string {
		return STATUS_DASHBOARD_ITEM_VALUE_CLASSES;
	}

	static getItemDescriptionClass(size: string): string {
		return STATUS_DASHBOARD_ITEM_DESCRIPTION_CLASSES[size as keyof typeof STATUS_DASHBOARD_ITEM_DESCRIPTION_CLASSES] || STATUS_DASHBOARD_ITEM_DESCRIPTION_CLASSES[DEFAULT_STATUS_DASHBOARD_SIZE];
	}

	static getItemFooterClass(): string {
		return STATUS_DASHBOARD_ITEM_FOOTER_CLASSES;
	}

	static getItemActionsClass(): string {
		return STATUS_DASHBOARD_ITEM_ACTIONS_CLASSES;
	}

	static getStatusIconWrapperClass(): string {
		return STATUS_DASHBOARD_STATUS_ICON_WRAPPER_CLASSES;
	}

	static getStatusIconClass(): string {
		return STATUS_DASHBOARD_STATUS_ICON_CLASSES;
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