import { ProductCarouselStyleManager } from '$stylist/commerce/class/style-manager/product-carousel';
import type { ProductCarouselProps } from '../productcarouselprops';

export function createProductCarouselState(props: ProductCarouselProps) {
	let currentIndex = $state(0);

	const containerClass = $derived(ProductCarouselStyleManager.getContainerClass(props.class ?? ''));

	return {
		get currentIndex() { return currentIndex; },
		get containerClass() { return containerClass; },
		nextSlide() {
			const len = props.products?.length ?? 0;
			if (len > 0) currentIndex = (currentIndex + 1) % len;
		},
		prevSlide() {
			const len = props.products?.length ?? 0;
			if (len > 0) currentIndex = (currentIndex - 1 + len) % len;
		},
		goTo(index: number) {
			currentIndex = index;
		}
	};
}

export default createProductCarouselState;
