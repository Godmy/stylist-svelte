import type { ContractCatalogRepository } from '$stylist/travel-admin/interface/contract/catalog-repository';
import type { ContractMediaUploader } from '$stylist/travel-admin/interface/contract/media-uploader';

export interface RecipeProductEditorPage {
	repository: ContractCatalogRepository;
	uploader: ContractMediaUploader;
	/** null = creating a new product */
	productId: number | null;
	class?: string;
}
