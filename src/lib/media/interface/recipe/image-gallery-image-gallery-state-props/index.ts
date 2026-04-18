import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ContractImageGallery as ImageGalleryContract } from '$stylist/media/interface/contract/image-gallery';

export interface ImageGalleryStateProps extends StructIntersectAll<[ImageGalleryContract]> {
	class?: string;
}
