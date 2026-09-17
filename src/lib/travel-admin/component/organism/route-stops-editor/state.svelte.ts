import type { RecipeRouteStopsEditor } from '$stylist/travel-admin/interface/recipe/route-stops-editor';
import type { AdminRouteStop } from '$stylist/travel-admin/type/object/admin-route-stop';

export function createRouteStopsEditorState(props: RecipeRouteStopsEditor) {
	const stops = $state<AdminRouteStop[]>(props.stops.map((s) => ({ ...s })));

	function emit() {
		props.onChange(stops.map((s, i) => ({ ...s, sortOrder: i + 1 })));
	}

	function add() {
		stops.push({
			id: -Date.now(),
			productId: props.stops[0]?.productId ?? 0,
			sortOrder: stops.length + 1,
			title: '',
			description: '',
			photoSpot: false,
			durationMinutes: null
		});
		emit();
	}

	function remove(index: number) {
		stops.splice(index, 1);
		emit();
	}

	function move(index: number, direction: -1 | 1) {
		const target = index + direction;
		if (target < 0 || target >= stops.length) return;
		[stops[index], stops[target]] = [stops[target], stops[index]];
		emit();
	}

	function patch(index: number, partial: Partial<AdminRouteStop>) {
		Object.assign(stops[index], partial);
		emit();
	}

	return {
		get stops() {
			return stops;
		},
		add,
		remove,
		move,
		patch
	};
}

export default createRouteStopsEditorState;
