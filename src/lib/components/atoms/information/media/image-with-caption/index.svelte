<script lang="ts">
	import type { ImageWithCaptionProps } from '$stylist/design-system';
	import { createImageWithCaptionState } from '$stylist/design-system/models/image-with-caption.svelte';

	let props: ImageWithCaptionProps = $props();
	const state = createImageWithCaptionState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				src: _src,
				alt: _alt,
				caption: _caption,
				width: _width,
				height: _height,
				imageClass: _imageClass,
				captionClass: _captionClass,
				rounded: _rounded,
				bordered: _bordered,
				shadow: _shadow,
				loading: _loading,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.hostClasses} {...restProps}>
	<img
		src={props.src}
		alt={props.alt ?? 'Image'}
		width={props.width ?? '100%'}
		height={props.height ?? 'auto'}
		loading={props.loading ?? 'lazy'}
		class={state.imageClasses}
	/>
	{#if props.caption}
		<div class={state.captionClasses}>
			{props.caption}
		</div>
	{/if}
</div>
