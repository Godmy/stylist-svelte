import type { RecipeProductEditorPage } from '$stylist/travel-admin/interface/recipe/product-editor-page';
import type { AdminProduct } from '$stylist/travel-admin/type/object/admin-product';
import type { AdminRouteStop } from '$stylist/travel-admin/type/object/admin-route-stop';
import type { AdminMediaAsset } from '$stylist/travel-admin/type/object/admin-media-asset';

const BLANK_PRODUCT: AdminProduct = {
	id: 0,
	domain: 'tour',
	slug: '',
	title: '',
	summary: '',
	heroImageId: null,
	gallery: [],
	badges: [],
	priceUnit: 'per_person',
	basePriceCents: 0,
	oldPriceCents: null,
	minAdvanceDays: 0,
	status: 'draft',
	sortOrder: 0
};

export function createProductEditorPageState(props: RecipeProductEditorPage) {
	let product = $state<AdminProduct>({ ...BLANK_PRODUCT });
	let stops = $state<AdminRouteStop[]>([]);
	let gallery = $state<AdminMediaAsset[]>([]);
	let loading = $state(true);
	let saving = $state(false);
	let savedAt = $state<number | null>(null);

	$effect(() => {
		loading = true;
		Promise.all([
			props.productId != null ? props.repository.getProduct(props.productId) : Promise.resolve(null),
			props.productId != null ? props.repository.listRouteStops(props.productId) : Promise.resolve([])
		]).then(([loadedProduct, loadedStops]) => {
			product = loadedProduct ?? { ...BLANK_PRODUCT };
			stops = loadedStops;
			gallery = product.gallery.map((url, i) => ({ id: `existing-${i}`, url, alt: product.title }));
			loading = false;
		});
	});

	async function save(next: AdminProduct) {
		saving = true;
		try {
			const withGallery = { ...next, gallery: gallery.map((a) => a.url) };
			product = await props.repository.saveProduct(withGallery);
			await props.repository.saveRouteStops(product.id, stops);
			savedAt = Date.now();
		} finally {
			saving = false;
		}
	}

	return {
		get product() {
			return product;
		},
		get stops() {
			return stops;
		},
		set stops(value: AdminRouteStop[]) {
			stops = value;
		},
		get gallery() {
			return gallery;
		},
		set gallery(value: AdminMediaAsset[]) {
			gallery = value;
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
		save
	};
}

export default createProductEditorPageState;
