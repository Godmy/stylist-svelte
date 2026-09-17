import type { AdminMediaAsset } from '$stylist/travel-admin/type/object/admin-media-asset';

/** Mock in the sandbox (object URL), Cloudflare Images in production — see 002-Claude, section 4. */
export interface ContractMediaUploader {
	upload(file: File): Promise<AdminMediaAsset>;
	remove(id: string): Promise<void>;
}
