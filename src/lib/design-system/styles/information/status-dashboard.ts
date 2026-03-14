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
