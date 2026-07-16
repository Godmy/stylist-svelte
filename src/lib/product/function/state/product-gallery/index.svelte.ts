import type { RecipeProductGallery } from '$stylist/product/interface/recipe/product-gallery';

export function createProductGalleryState(props: RecipeProductGallery) {
	let currentImage = $state(props.mainImage || props.images?.[0] || '');

	$effect(() => {
		if (props.mainImage) {
			currentImage = props.mainImage;
		} else if (props.images && props.images.length > 0 && !currentImage) {
			currentImage = props.images[0];
		}
	});

	return {
		get currentImage() {
			return currentImage;
		},
		get containerClass() {
			return ['product-gallery', props.class].filter(Boolean).join(' ');
		},
		get mainClass() {
			return 'product-gallery__main';
		},
		get frameClass() {
			return 'product-gallery__frame';
		},
		get imageClass() {
			return 'product-gallery__image';
		},
		get emptyClass() {
			return 'product-gallery__empty';
		},
		get thumbnailsClass() {
			return 'product-gallery__thumbnails';
		},
		get thumbnailImageClass() {
			return 'product-gallery__thumbnail-image';
		},
		getThumbnailClass(image: string) {
			return currentImage === image
				? 'product-gallery__thumbnail product-gallery__thumbnail--active'
				: 'product-gallery__thumbnail product-gallery__thumbnail--inactive';
		},
		changeImage(image: string) {
			currentImage = image;
			props.onImageChange?.(image);
		}
	};
}
