import type { ContractCatalogRepository } from '$stylist/travel-admin/interface/contract/catalog-repository';
import type { AdminProduct } from '$stylist/travel-admin/type/object/admin-product';
import type { AdminProductAddon } from '$stylist/travel-admin/type/object/admin-product-addon';
import type { AdminRouteStop } from '$stylist/travel-admin/type/object/admin-route-stop';
import { SAMPLE_ADMIN_PRODUCTS } from '$stylist/travel-admin/const/preset/sample-admin-products';
import { SAMPLE_ADMIN_ADDONS } from '$stylist/travel-admin/const/preset/sample-admin-addons';
import { SAMPLE_ADMIN_PICKUP_POINTS } from '$stylist/travel-admin/const/preset/sample-admin-pickup-points';
import { SAMPLE_ADMIN_TRANSFER_RATES } from '$stylist/travel-admin/const/preset/sample-admin-transfer-rates';
import { SAMPLE_ADMIN_ROUTE_STOPS } from '$stylist/travel-admin/const/preset/sample-admin-route-stops';

/**
 * In-memory `ContractCatalogRepository` — zero D1/SvelteKit imports, so
 * `*.story.svelte` files and the sandbox can exercise every admin component
 * without a backend. Production wires `createD1CatalogRepository` instead
 * (lives in `lankatour.ru`, never in this library).
 */
export function createMockCatalogRepository(
	seed: Partial<{
		products: AdminProduct[];
		addons: AdminProductAddon[];
		routeStops: AdminRouteStop[];
	}> = {}
): ContractCatalogRepository {
	let nextProductId = 1000;
	let nextAddonId = 1000;
	let nextRateId = 1000;

	const products = [...(seed.products ?? SAMPLE_ADMIN_PRODUCTS)];
	const addons = [...(seed.addons ?? SAMPLE_ADMIN_ADDONS)];
	const pickupPoints = [...SAMPLE_ADMIN_PICKUP_POINTS];
	const transferRates = [...SAMPLE_ADMIN_TRANSFER_RATES];
	const routeStopsByProduct = new Map<number, AdminRouteStop[]>();
	for (const stop of seed.routeStops ?? SAMPLE_ADMIN_ROUTE_STOPS) {
		const list = routeStopsByProduct.get(stop.productId) ?? [];
		list.push(stop);
		routeStopsByProduct.set(stop.productId, list);
	}

	return {
		async listProducts(domain) {
			return domain ? products.filter((p) => p.domain === domain) : [...products];
		},
		async getProduct(id) {
			return products.find((p) => p.id === id) ?? null;
		},
		async saveProduct(input) {
			const index = products.findIndex((p) => p.id === input.id);
			if (index === -1) {
				const created = { ...input, id: input.id || ++nextProductId };
				products.push(created);
				return created;
			}
			products[index] = input;
			return input;
		},

		async listAddons(scope) {
			return addons.filter((a) => {
				if (scope?.productId != null && a.productId !== scope.productId) return false;
				if (scope?.domain != null && a.domain !== scope.domain && a.productId != null) return false;
				return true;
			});
		},
		async saveAddon(input) {
			const index = addons.findIndex((a) => a.id === input.id);
			if (index === -1) {
				const created = { ...input, id: input.id || ++nextAddonId };
				addons.push(created);
				return created;
			}
			addons[index] = input;
			return input;
		},
		async deleteAddon(id) {
			const index = addons.findIndex((a) => a.id === id);
			if (index !== -1) addons.splice(index, 1);
		},

		async listRouteStops(productId) {
			return [...(routeStopsByProduct.get(productId) ?? [])];
		},
		async saveRouteStops(productId, stops) {
			routeStopsByProduct.set(productId, stops);
			return stops;
		},

		async listPickupPoints() {
			return [...pickupPoints];
		},

		async listTransferRates() {
			return [...transferRates];
		},
		async saveTransferRate(input) {
			const index = transferRates.findIndex((r) => r.id === input.id);
			if (index === -1) {
				const created = { ...input, id: input.id || ++nextRateId };
				transferRates.push(created);
				return created;
			}
			transferRates[index] = input;
			return input;
		},
		async deleteTransferRate(id) {
			const index = transferRates.findIndex((r) => r.id === id);
			if (index !== -1) transferRates.splice(index, 1);
		}
	};
}
