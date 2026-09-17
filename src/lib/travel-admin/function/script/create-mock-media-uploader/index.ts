import type { ContractMediaUploader } from '$stylist/travel-admin/interface/contract/media-uploader';

/** Sandbox stand-in: keeps `URL.createObjectURL` results in memory, revokes them on remove. */
export function createMockMediaUploader(): ContractMediaUploader {
	const objectUrls = new Map<string, string>();
	let nextId = 1;

	return {
		async upload(file) {
			const id = `mock-${nextId++}`;
			const url = URL.createObjectURL(file);
			objectUrls.set(id, url);
			return { id, url, alt: file.name };
		},
		async remove(id) {
			const url = objectUrls.get(id);
			if (url) URL.revokeObjectURL(url);
			objectUrls.delete(id);
		}
	};
}
