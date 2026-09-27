import type { RecipeAddonCatalogPage } from '$stylist/travel-admin/interface/recipe/addon-catalog-page';
import type { AdminProductAddon } from '$stylist/travel-admin/type/object/admin-product-addon';

export function createAddonCatalogPageState(getProps: () => RecipeAddonCatalogPage) {
	const props = $derived(getProps());
	let addons = $state<AdminProductAddon[]>([]);
	let loading = $state(true);
	let saving = $state(false);
	let savedAt = $state<number | null>(null);

	$effect(() => {
		loading = true;
		props.repository.listAddons().then((result) => {
			addons = result;
			loading = false;
		});
	});

	function setAddons(next: AdminProductAddon[]) {
		addons = next;
	}

	async function saveAll() {
		saving = true;
		try {
			const saved = await Promise.all(addons.map((a) => props.repository.saveAddon(a)));
			addons = saved;
			savedAt = Date.now();
		} finally {
			saving = false;
		}
	}

	return {
		get addons() {
			return addons;
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
		setAddons,
		saveAll
	};
}

export default createAddonCatalogPageState;
