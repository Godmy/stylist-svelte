import { cn } from '../../utils/cn/index';

export interface BreadcrumbStyleManagerInterface {
	getContainerClass: (className?: string) => string;
	getItemClass: (current?: boolean) => string;
	getSeparatorClass: () => string;
}

export interface BreadcrumbLinkStyleManagerInterface {
	getLinkClass: (current?: boolean) => string;
	getContainerClass: (className?: string) => string;
}

export interface BreadcrumbsStyleManagerInterface {
	getContainerClass: (className?: string) => string;
	getListClass: () => string;
	getItemClass: () => string;
}

export const BreadcrumbStyleManager: BreadcrumbStyleManagerInterface = {
	getContainerClass: (className?: string) => cn('breadcrumb-container', className),
	getItemClass: (current?: boolean) => cn('breadcrumb-item', current ? 'current' : 'not-current'),
	getSeparatorClass: () => 'breadcrumb-separator'
};

export const BreadcrumbLinkStyleManager: BreadcrumbLinkStyleManagerInterface = {
	getLinkClass: (current?: boolean) => cn('breadcrumb-link', current ? 'current' : 'not-current'),
	getContainerClass: (className?: string) => cn('breadcrumb-link-container', className)
};

export const BreadcrumbsStyleManager: BreadcrumbsStyleManagerInterface = {
	getContainerClass: (className?: string) => cn('breadcrumbs-container', className),
	getListClass: () => 'breadcrumbs-list',
	getItemClass: () => 'breadcrumbs-item'
};
