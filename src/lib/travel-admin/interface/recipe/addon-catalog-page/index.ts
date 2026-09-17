import type { ContractCatalogRepository } from '$stylist/travel-admin/interface/contract/catalog-repository';

export interface RecipeAddonCatalogPage {
	repository: ContractCatalogRepository;
	class?: string;
}
