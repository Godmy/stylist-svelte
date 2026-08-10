import type { RecipeLegendItem } from '$stylist/management/interface/recipe/legend-item';

export function createLegendItemState(props: RecipeLegendItem) {
	const label = $derived(props.label);
	const type = $derived(props.type);
	const count = $derived(props.count ?? 0);
	const variant = $derived(props.variant ?? 'default');
	const active = $derived(props.active ?? false);
	const itemClasses = $derived(
		`legend-item__base ${active ? 'legend-item__variant' : ''}`.trim()
	);

	function getIconName(type: string): string {
		switch (type) {
			case 'object':
				return 'object';
			case 'interface':
				return 'interface';
			case 'union':
				return 'union';
			case 'enum':
				return 'enum';
			case 'scalar':
				return 'scalar';
			case 'input':
				return 'input';
			default:
				return 'default';
		}
	}

	function handleClick(): void {
		props.onClick?.();
	}

	function handleKeyDown(e: KeyboardEvent): void {
		if (props.onClick && (e.key === 'Enter' || e.key === ' ')) {
			e.preventDefault();
			props.onClick();
		}
	}

	return {
		get label() {
			return label;
		},
		get type() {
			return type;
		},
		get count() {
			return count;
		},
		get variant() {
			return variant;
		},
		get active() {
			return active;
		},
		get itemClasses() {
			return itemClasses;
		},
		getIconName,
		handleClick,
		handleKeyDown
	};
}
