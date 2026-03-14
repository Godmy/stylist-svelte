import { MediaStyleManager } from '$stylist/design-system/styles/information/media';
import type { FaviconProps } from '../../contracts/information/image';


export function createFaviconState(props: FaviconProps) {
	const size = $derived(props.size ?? 16);
	const url = $derived(props.url);
	const faviconUrl = $derived(MediaStyleManager.getFaviconUrl(url));
	const baseClasses = $derived(MediaStyleManager.getFaviconImageClasses(props.class));
	const sizeStyle = $derived(MediaStyleManager.getFaviconStyle(size));

	// Define individual classes for different elements
	const imageClasses = $derived(baseClasses);
	const fallbackClasses = $derived(MediaStyleManager.getFaviconFallbackClasses(baseClasses));

	return {
		get size() {
			return size;
		},
		get faviconUrl() {
			return faviconUrl;
		},
		get sizeStyle() {
			return sizeStyle;
		},
		get classes() {
			return {
				image: imageClasses,
				fallback: fallbackClasses
			};
		}
	};
}

export default createFaviconState;














