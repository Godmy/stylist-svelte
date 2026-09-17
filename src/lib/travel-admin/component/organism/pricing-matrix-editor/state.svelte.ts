import type { RecipePricingMatrixEditor } from '$stylist/travel-admin/interface/recipe/pricing-matrix-editor';
import type { AdminTransferRate } from '$stylist/travel-admin/type/object/admin-transfer-rate';
import { VEHICLE_TYPES } from '$stylist/travel-admin/const/array/vehicle-type';

export function createPricingMatrixEditorState(props: RecipePricingMatrixEditor) {
	const rates = $state<AdminTransferRate[]>(props.rates.map((r) => ({ ...r })));

	function emit() {
		props.onChange(rates.map((r) => ({ ...r })));
	}

	function pointLabel(id: number): string {
		return props.pickupPoints.find((p) => p.id === id)?.label ?? `#${id}`;
	}

	function add() {
		const first = props.pickupPoints[0]?.id ?? 0;
		const second = props.pickupPoints[1]?.id ?? first;
		rates.push({
			id: -Date.now(),
			fromPointId: first,
			toPointId: second,
			vehicleType: VEHICLE_TYPES[0],
			minPeople: 1,
			maxPeople: 3,
			priceCents: 0
		});
		emit();
	}

	function patch(index: number, partial: Partial<AdminTransferRate>) {
		Object.assign(rates[index], partial);
		emit();
	}

	function remove(index: number) {
		rates.splice(index, 1);
		emit();
	}

	return {
		get rates() {
			return rates;
		},
		pointLabel,
		add,
		patch,
		remove
	};
}

export default createPricingMatrixEditorState;
