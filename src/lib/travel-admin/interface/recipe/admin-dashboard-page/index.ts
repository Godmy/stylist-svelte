import type { ContractCatalogRepository } from '$stylist/travel-admin/interface/contract/catalog-repository';

export interface RecipeAdminDashboardPage {
	repository: ContractCatalogRepository;
	class?: string;
}
