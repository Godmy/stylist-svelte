import type { BreadcrumbDropdownItem } from '$stylist/navigation/type/struct/breadcrumbs-props/breadcrumb-dropdown-item';
import type { BreadcrumbItem } from '$stylist/navigation/type/struct/breadcrumbs-props/breadcrumb-item';

export function getBreadcrumbDropdownItems(
	items: BreadcrumbItem[],
	breadcrumbId?: string | null
): BreadcrumbDropdownItem[] {
	if (!breadcrumbId) {
		return [];
	}

	return items.find((item) => item.id === breadcrumbId)?.dropdownItems ?? [];
}
