import type { RecipeAdminDashboardPage } from '$stylist/travel-admin/interface/recipe/admin-dashboard-page';
import type { AdminProduct } from '$stylist/travel-admin/type/object/admin-product';

export function createAdminDashboardPageState(props: RecipeAdminDashboardPage) {
	let products = $state<AdminProduct[]>([]);
	let loading = $state(true);

	$effect(() => {
		loading = true;
		props.repository.listProducts().then((result) => {
			products = result;
			loading = false;
		});
	});

	const metrics = $derived([
		{ label: 'Товаров в каталоге', value: String(products.length) },
		{
			label: 'Опубликовано',
			value: String(products.filter((p) => p.status === 'published').length)
		},
		{
			label: 'Черновиков',
			value: String(products.filter((p) => p.status === 'draft').length)
		}
	]);

	return {
		get products() {
			return products;
		},
		get loading() {
			return loading;
		},
		get metrics() {
			return metrics;
		}
	};
}

export default createAdminDashboardPageState;
