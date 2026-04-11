export type ProductGalleryProps = {
	images?: string[];
	mainImage?: string;
	onImageChange?: (image: string) => void;
	class?: string;
}
