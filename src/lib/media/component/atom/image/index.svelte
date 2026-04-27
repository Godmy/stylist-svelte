<script lang="ts">
	import type { ImageProps } from '$stylist/media/type/struct/image';
	import { createImageState } from '$stylist/media/function/state/image';

	let props: ImageProps = $props();
	const state = createImageState(props);
</script>

<div class={state.containerClass}>
	{#if state.content && !state.isLoaded && !state.hasError}
		<div class={state.wrapperClass}>
			{@render state.content()}
		</div>
	{/if}

	<img
		{...state.restProps}
		src={state.imageSource}
		alt={props.alt ?? ''}
		loading={state.loadingProp}
		width={state.width}
		height={state.height}
		class={state.imageClasses}
		onerror={() => state.handleError()}
		onload={() => state.handleLoad()}
	/>
</div>
