import { ImageGalleryStyleManager } from '$stylist/media/class/style-manager/image-gallery';
import type { ImageGalleryContract, ImageItemContract } from '$stylist/media/interface/component/image-gallery/contract';

export interface ImageGalleryStateProps extends ImageGalleryContract {
	class?: string;
}

export function createImageGalleryState(props: ImageGalleryStateProps) {
	// Props with defaults
	const images = $derived(props.images ?? []);
	const showThumbnails = $derived(props.showThumbnails ?? true);
	const autoPlay = $derived(props.autoPlay ?? false);
	const autoPlayInterval = $derived(props.autoPlayInterval ?? 3000);
	const showCaptions = $derived(props.showCaptions ?? false);

	// State
	let selectedIndex = $state<number | null>(null);
	let isLightboxOpen = $state(false);

	// Classes
	const containerClass = $derived(ImageGalleryStyleManager.getHostClasses(props.class ?? ''));
	const imageContainerClass = $derived.by(() => ImageGalleryStyleManager.getImageContainerClasses());
	const imageClass = $derived(ImageGalleryStyleManager.getImageClasses(props.imageClass ?? ''));
	const captionClass = $derived(ImageGalleryStyleManager.getCaptionClasses(props.captionClass ?? ''));
	const navigationClass = $derived(ImageGalleryStyleManager.getNavigationButtonClasses(props.navigationClass ?? ''));
	const getThumbnailClass = (index: number) => ImageGalleryStyleManager.getThumbnailClasses(index === selectedIndex, props.thumbnailClass ?? '');

	// Methods
	function openLightbox(index: number): void {
		selectedIndex = index;
		isLightboxOpen = true;
	}

	function closeLightbox(): void {
		isLightboxOpen = false;
		selectedIndex = null;
	}

	function navigate(direction: 'prev' | 'next'): void {
		if (selectedIndex === null || images.length === 0) return;
		const newIndex = direction === 'prev' 
			? (selectedIndex - 1 + images.length) % images.length
			: (selectedIndex + 1) % images.length;
		selectedIndex = newIndex;
	}

	function handleKeyDown(e: KeyboardEvent): void {
		if (!isLightboxOpen) return;
		if (e.key === 'Escape') closeLightbox();
		if (e.key === 'ArrowLeft') navigate('prev');
		if (e.key === 'ArrowRight') navigate('next');
	}

	// Rest props
	const restProps = $derived.by(() => {
		const {
			class: _class,
			images: _images,
			showThumbnails: _showThumbnails,
			autoPlay: _autoPlay,
			autoPlayInterval: _autoPlayInterval,
			showCaptions: _showCaptions,
			imageClass: _imageClass,
			thumbnailClass: _thumbnailClass,
			navigationClass: _navigationClass,
			captionClass: _captionClass,
			...rest
		} = props;
		return rest;
	});

	return {
		get images() {
			return images;
		},
		get showThumbnails() {
			return showThumbnails;
		},
		get autoPlay() {
			return autoPlay;
		},
		get autoPlayInterval() {
			return autoPlayInterval;
		},
		get showCaptions() {
			return showCaptions;
		},
		get selectedIndex() {
			return selectedIndex;
		},
		get isLightboxOpen() {
			return isLightboxOpen;
		},
		get containerClass() {
			return containerClass;
		},
		get imageContainerClass() {
			return imageContainerClass;
		},
		get imageClass() {
			return imageClass;
		},
		get captionClass() {
			return captionClass;
		},
		get navigationClass() {
			return navigationClass;
		},
		get restProps() {
			return restProps;
		},
		openLightbox,
		closeLightbox,
		navigate,
		handleKeyDown,
		getThumbnailClass,
		getImageContainerClass: () => ImageGalleryStyleManager.getImageContainerClasses()
	};
}

export default createImageGalleryState;
