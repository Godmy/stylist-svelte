import type { AdminMediaAsset } from '$stylist/travel-admin/type/object/admin-media-asset';
import type { ContractMediaUploader } from '$stylist/travel-admin/interface/contract/media-uploader';

export interface RecipeMediaGalleryManager {
	assets: AdminMediaAsset[];
	uploader: ContractMediaUploader;
	onChange: (assets: AdminMediaAsset[]) => void;
	class?: string;
}
