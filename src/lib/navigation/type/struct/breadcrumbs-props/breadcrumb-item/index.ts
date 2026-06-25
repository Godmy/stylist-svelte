import type { BreadcrumbDropdownItem } from '$stylist/navigation/type/struct/breadcrumbs-props/breadcrumb-dropdown-item';

export type BreadcrumbItem = {
	id: string;
	label: string;
	href?: string;
	parentId?: string;
	dropdownItems?: BreadcrumbDropdownItem[];
};
