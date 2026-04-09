import { MediaStyleManager } from '$stylist/media/class/style-manager/media';
import type { FaviconContract } from '$stylist/media/interface/component/favicon/contract';


export function createFaviconState(props: FaviconContract) {
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
