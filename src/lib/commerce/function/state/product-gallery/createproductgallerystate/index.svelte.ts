export function createProductGalleryState(props: ProductGalleryProps) {
	let currentImage = $state(props.mainImage || props.images?.[0] || '');

	$effect(() => {
		if (props.mainImage) {
			currentImage = props.mainImage;
		} else if (props.images && props.images.length > 0 && !currentImage) {
			currentImage = props.images[0];
		}
	});

	const containerClass = $derived(ProductGalleryStyleManager.getContainerClass(props.class ?? ''));

	return {
		get currentImage() { return currentImage; },
		get containerClass() { return containerClass; },
		changeImage(image: string) {
			currentImage = image;
			props.onImageChange?.(image);
		}
	};
}

export default createProductGalleryState;
