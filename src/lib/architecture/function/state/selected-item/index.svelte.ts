export function createSelectedItem(
	initial?: Partial<{
		id: string;
		type: 'node' | 'group' | 'frame' | 'connector';
	}>
) {
	const item = $state<{
		id: string;
		type: 'node' | 'group' | 'frame' | 'connector';
	}>({
		id: initial?.id ?? '',
		type: initial?.type ?? 'node'
	});

	return {
		get id() {
			return item.id;
		},
		get type() {
			return item.type;
		},
		setId(id: string) {
			item.id = id;
		},
	setType(type: 'node' | 'group' | 'frame' | 'connector') {
			item.type = type;
		}
	};
}

export default createSelectedItem;
