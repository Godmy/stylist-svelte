import type { AdminProduct } from '$stylist/travel-admin/type/object/admin-product';
import type { AdminProductAddon } from '$stylist/travel-admin/type/object/admin-product-addon';
import type { AdminPickupPoint } from '$stylist/travel-admin/type/object/admin-pickup-point';
import type { AdminTransferRate } from '$stylist/travel-admin/type/object/admin-transfer-rate';
import type { AdminRouteStop } from '$stylist/travel-admin/type/object/admin-route-stop';
import type { AdminProductDomain } from '$stylist/travel-admin/type/alias/admin-product-domain';

/**
 * The boundary between presentation (this library) and data (D1 in production,
 * an in-memory fixture in the sandbox — see `createMockCatalogRepository`).
 * Presentational components never import Drizzle/SvelteKit server code; they
 * only ever see this contract, injected by whoever composes the page.
 */
export interface ContractCatalogRepository {
	listProducts(domain?: AdminProductDomain): Promise<AdminProduct[]>;
	getProduct(id: number): Promise<AdminProduct | null>;
	saveProduct(input: AdminProduct): Promise<AdminProduct>;

	listAddons(scope?: { productId?: number; domain?: AdminProductDomain }): Promise<AdminProductAddon[]>;
	saveAddon(input: AdminProductAddon): Promise<AdminProductAddon>;
	deleteAddon(id: number): Promise<void>;

	listRouteStops(productId: number): Promise<AdminRouteStop[]>;
	saveRouteStops(productId: number, stops: AdminRouteStop[]): Promise<AdminRouteStop[]>;

	listPickupPoints(): Promise<AdminPickupPoint[]>;

	listTransferRates(): Promise<AdminTransferRate[]>;
	saveTransferRate(input: AdminTransferRate): Promise<AdminTransferRate>;
	deleteTransferRate(id: number): Promise<void>;
}
