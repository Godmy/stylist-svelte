import type { BreadcrumbItem } from '$stylist/navigation/type/struct/breadcrumbs-props/breadcrumb-item';

export function getBreadcrumbItems(items: BreadcrumbItem[], activeId?: string): BreadcrumbItem[] {
	if (!items.length) {
		return [];
	}

	if (!activeId) {
		return items;
	}

	const itemById = new Map(items.map((item) => [item.id, item]));
	const trail: BreadcrumbItem[] = [];
	let current = itemById.get(activeId);

	while (current) {
		trail.unshift(current);
		current = current.parentId ? itemById.get(current.parentId) : undefined;
	}

	return trail.length ? trail : items;
}
