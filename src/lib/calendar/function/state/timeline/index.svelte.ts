import type { RecipeTimeline } from '$stylist/calendar/interface/recipe/timeline';

import type { TOKEN_FLOW } from '$stylist/interaction/const/array/flow';
export function createTimelineState(props: RecipeTimeline) {
	const items = $derived(props.items ?? []);
	const orientation = $derived(props.orientation ?? 'vertical');
	const className = $derived(props.class ?? '');
	const itemClass = $derived(props.itemClass ?? '');
	const connectorClass = $derived(props.connectorClass ?? '');
	const iconClass = $derived(props.iconClass ?? '');

	const restProps = $derived.by(() => {
		const {
			items: _items,
			orientation: _orientation,
			class: _class,
			itemClass: _itemClass,
			connectorClass: _connectorClass,
			iconClass: _iconClass,
			...rest
		} = props;

		return rest;
	});

	function getStatusClasses(status: (typeof TOKEN_FLOW)[number]) {
		switch (status) {
			case 'completed':
				return 'bg-[var(--color-success-500)] text-[var(--color-text-inverse)]';
			case 'current':
				return 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]';
			default:
				return 'bg-[var(--color-background-tertiary)] text-[var(--color-text-secondary)]';
		}
	}

	function getItemBackgroundClasses(status: (typeof TOKEN_FLOW)[number]) {
		switch (status) {
			case 'completed':
				return 'bg-[var(--color-success-50)]';
			case 'current':
				return 'bg-[var(--color-primary-50)]';
			default:
				return 'bg-[var(--color-background-secondary)]';
		}
	}

	return {
		get items() {
			return items;
		},
		get orientation() {
			return orientation;
		},
		get className() {
			return className;
		},
		get itemClass() {
			return itemClass;
		},
		get connectorClass() {
			return connectorClass;
		},
		get iconClass() {
			return iconClass;
		},
		get restProps() {
			return restProps;
		},
		getStatusClasses,
		getItemBackgroundClasses
	};
}

export default createTimelineState;
