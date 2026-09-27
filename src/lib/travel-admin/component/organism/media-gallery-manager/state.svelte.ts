import type { RecipeMediaGalleryManager } from '$stylist/travel-admin/interface/recipe/media-gallery-manager';
import type { AdminMediaAsset } from '$stylist/travel-admin/type/object/admin-media-asset';

export function createMediaGalleryManagerState(getProps: () => RecipeMediaGalleryManager) {
	const props = $derived(getProps());
	const assets = $state<AdminMediaAsset[]>(props.assets.map((a) => ({ ...a })));
	let uploading = $state(false);

	function emit() {
		props.onChange(assets.map((a) => ({ ...a })));
	}

	async function upload(file: File) {
		uploading = true;
		try {
			const asset = await props.uploader.upload(file);
			assets.push(asset);
			emit();
		} finally {
			uploading = false;
		}
	}

	async function remove(index: number) {
		const [asset] = assets.splice(index, 1);
		if (asset) await props.uploader.remove(asset.id);
		emit();
	}

	return {
		get assets() {
			return assets;
		},
		get uploading() {
			return uploading;
		},
		upload,
		remove
	};
}

export default createMediaGalleryManagerState;
