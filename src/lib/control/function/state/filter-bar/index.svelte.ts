import type { FilterBarProps } from '$stylist/control/type/struct/filter-bar-props';

export function createFilterBarState(props: FilterBarProps) {
	const toggles = $derived(props.toggles ?? []);
	const tags = $derived(props.tags ?? []);
	const range = $derived(props.range);
	const className = $derived(props.class ?? '');

	let toggleState = $state<Record<string, boolean>>(
		toggles.reduce((acc, current) => {
			acc[current.id] = !!current.checked;
			return acc;
		}, {} as Record<string, boolean>)
	);

	let activeTags = $state<Set<string>>(
		new Set(tags.filter((tag) => tag.active).map((tag) => tag.id))
	);

	let rangeValue = $state(range?.value ?? range?.min ?? 0);

	const hasActiveFilters = $derived(() => {
		const togglesActive = Object.values(toggleState).some(Boolean);
		const tagsActive = activeTags.size > 0;
		const rangeActive = range ? rangeValue !== range.min : false;
		return togglesActive || tagsActive || rangeActive;
	});

	function toggleTag(id: string) {
		const next = new Set(activeTags);
		if (next.has(id)) {
			next.delete(id);
		} else {
			next.add(id);
		}
		activeTags = next;
	}

	function clearFilters() {
		toggleState = Object.fromEntries(Object.keys(toggleState).map((key) => [key, false]));
		activeTags = new Set();
		if (range) {
			rangeValue = range.min;
		}
		props.onClear?.();
	}

	return {
		get toggles() {
			return toggles;
		},
		get tags() {
			return tags;
		},
		get range() {
			return range;
		},
		get className() {
			return className;
		},
		get toggleState() {
			return toggleState;
		},
		set toggleState(value: Record<string, boolean>) {
			toggleState = value;
		},
		get activeTags() {
			return activeTags;
		},
		get rangeValue() {
			return rangeValue;
		},
		set rangeValue(value: number) {
			rangeValue = value;
		},
		get hasActiveFilters() {
			return hasActiveFilters;
		},
		toggleTag,
		clearFilters
	};
}

export default createFilterBarState;
