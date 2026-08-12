import type { BreadcrumbDropdownItem } from '$stylist/navigation/interface/slot/breadcrumb-dropdown-item';

export interface BreadcrumbItem {
	id: string;
	label: string;
	href?: string;
	parentId?: string;
	dropdownItems?: BreadcrumbDropdownItem[];
}
