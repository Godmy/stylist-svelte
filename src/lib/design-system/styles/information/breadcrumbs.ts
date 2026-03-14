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
