import { MediaStyleManager } from '$stylist/media/class/style-manager/media';
import type { FaviconProps } from '$stylist/media/type/struct/favicon';

export function createFaviconState(props: FaviconProps) {
	let error = $state(props.error ?? false);

	$effect(() => {
		error = props.error ?? false;
	});

	const size = $derived(props.size ?? 16);
	const url = $derived(props.url);
	const faviconUrl = $derived(MediaStyleManager.getFaviconUrl(url));
	const baseClasses = $derived(MediaStyleManager.getFaviconImageClasses(props.class));
	const sizeStyle = $derived(MediaStyleManager.getFaviconStyle(size));

	// Define individual classes for different elements
	const imageClasses = $derived(baseClasses);
	const fallbackClasses = $derived(MediaStyleManager.getFaviconFallbackClasses(baseClasses));

	const restProps = $derived.by(() => {
		const { error: _error, onError: _onError, content: _content, ...rest } = props;
		return rest;
	});

	function handleError() {
		error = true;
		props.onError?.();
	}

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
		get error() {
			return error;
		},
		get classes() {
			return {
				image: imageClasses,
				fallback: fallbackClasses
			};
		},
		get restProps() {
			return restProps;
		},
		handleError
	};
}

export default createFaviconState;
