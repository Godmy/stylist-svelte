import type { ContractCatalogRepository } from '$stylist/travel-admin/interface/contract/catalog-repository';

export interface RecipePricingMatrixPage {
	repository: ContractCatalogRepository;
	class?: string;
}
