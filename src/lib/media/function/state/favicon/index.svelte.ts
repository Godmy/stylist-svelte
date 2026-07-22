import type { RecipeFavicon } from '$stylist/media/interface/recipe/favicon';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createFaviconState(props: RecipeFavicon) {
	let error = $state(props.error ?? false);

	$effect(() => {
		error = props.error ?? false;
	});

	const size = $derived(props.size ?? 16);
	const url = $derived(props.url);
	const faviconUrl = $derived(url);
	const sizeStyle = $derived(`width: ${size}px; height: ${size}px;`);

	// Define individual classes for different elements
	const imageClasses = $derived(mergeClassNames('favicon__favicon-image', props.class ?? ''));
	const fallbackClasses = $derived(
		mergeClassNames('favicon__favicon-fallback', props.class ?? '')
	);

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
