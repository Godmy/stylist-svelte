import type { RecipePricingMatrixPage } from '$stylist/travel-admin/interface/recipe/pricing-matrix-page';
import type { AdminTransferRate } from '$stylist/travel-admin/type/object/admin-transfer-rate';
import type { AdminPickupPoint } from '$stylist/travel-admin/type/object/admin-pickup-point';

export function createPricingMatrixPageState(props: RecipePricingMatrixPage) {
	let rates = $state<AdminTransferRate[]>([]);
	let pickupPoints = $state<AdminPickupPoint[]>([]);
	let loading = $state(true);
	let saving = $state(false);
	let savedAt = $state<number | null>(null);

	$effect(() => {
		loading = true;
		Promise.all([props.repository.listTransferRates(), props.repository.listPickupPoints()]).then(
			([loadedRates, loadedPoints]) => {
				rates = loadedRates;
				pickupPoints = loadedPoints;
				loading = false;
			}
		);
	});

	function setRates(next: AdminTransferRate[]) {
		rates = next;
	}

	async function saveAll() {
		saving = true;
		try {
			const saved = await Promise.all(rates.map((r) => props.repository.saveTransferRate(r)));
			rates = saved;
			savedAt = Date.now();
		} finally {
			saving = false;
		}
	}

	return {
		get rates() {
			return rates;
		},
		get pickupPoints() {
			return pickupPoints;
		},
		get loading() {
			return loading;
		},
		get saving() {
			return saving;
		},
		get savedAt() {
			return savedAt;
		},
		setRates,
		saveAll
	};
}

export default createPricingMatrixPageState;
