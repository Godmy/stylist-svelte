import type { SelectedItem } from '$stylist/architecture/interface/slot/selected-item/index';

export function createSelectedItem(initial?: Partial<SelectedItem>) {
	const item = $state<SelectedItem>({
		id: initial?.id ?? '',
		type: initial?.type ?? 'node'
	});

	return {
		get id() { return item.id; },
		get type() { return item.type; },
		setId(id: string) { item.id = id; },
		setType(type: SelectedItem['type']) { item.type = type; }
	};
}

export default createSelectedItem;
