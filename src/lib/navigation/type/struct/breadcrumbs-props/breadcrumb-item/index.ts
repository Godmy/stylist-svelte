import type { BreadcrumbDropdownItem } from '../breadcrumb-dropdown-item';

export type BreadcrumbItem = {
	id: string;
	label: string;
	href?: string;
	parentId?: string;
	dropdownItems?: BreadcrumbDropdownItem[];
};
