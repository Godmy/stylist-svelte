import { ImageGalleryStyleManager } from '$stylist/media/class/style-manager/image-gallery';
import { TOKEN_MEDIA_ICON } from '$stylist/media/const/record/media-icon';
import type { ImageGalleryStateProps } from '$stylist/media/interface/recipe/image-gallery-image-gallery-state-props';

export function createImageGalleryState(props: ImageGalleryStateProps) {
	let currentIndex = $state(0);
	let isFullscreen = $state(false);

	const images = $derived(props.images ?? []);
	const showThumbnails = $derived(props.showThumbnails ?? true);
	const autoPlay = $derived(props.autoPlay ?? false);
	const autoPlayInterval = $derived(props.autoPlayInterval ?? 3000);
	const showCaptions = $derived(props.showCaptions ?? false);

	const containerClass = $derived(ImageGalleryStyleManager.getHostClasses(props.class ?? ''));

	// Auto-play functionality
	$effect(() => {
		let autoPlayTimer: number | null = null;
		if (autoPlay && images.length > 0) {
			autoPlayTimer = window.setInterval(() => {
				currentIndex = (currentIndex + 1) % images.length;
			}, autoPlayInterval);
		}

		return () => {
			if (autoPlayTimer) {
				clearInterval(autoPlayTimer);
			}
		};
	});

	// Handle fullscreen overflow and keyboard
	$effect(() => {
		if (isFullscreen) {
			window.addEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'hidden';
		} else {
			window.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'auto';
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'auto';
		};
	});

	function nextImage() {
		if (images.length === 0) return;
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prevImage() {
		if (images.length === 0) return;
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	function goToImage(index: number) {
		currentIndex = index;
	}

	function openFullscreen(index: number) {
		currentIndex = index;
		isFullscreen = true;
	}

	function closeFullscreen() {
		isFullscreen = false;
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (isFullscreen) {
			if (e.key === 'ArrowRight') nextImage();
			else if (e.key === 'ArrowLeft') prevImage();
			else if (e.key === 'Escape') closeFullscreen();
		}
	}

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
		get currentIndex() {
			return currentIndex;
		},
		get isFullscreen() {
			return isFullscreen;
		},
		get showThumbnails() {
			return showThumbnails;
		},
		get showCaptions() {
			return showCaptions;
		},
		get containerClass() {
			return containerClass;
		},
		get restProps() {
			return restProps;
		},
		get icons() {
			return TOKEN_MEDIA_ICON;
		},
		nextImage,
		prevImage,
		goToImage,
		openFullscreen,
		closeFullscreen
	};
}

export default createImageGalleryState;
