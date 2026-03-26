<script lang="ts">
	import type { BackgroundProps } from '$stylist/information/interface/background';
	import { createBackgroundState } from '$stylist/information/state/background';

	let props: BackgroundProps = $props();
	const state = createBackgroundState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				background,
				backgroundColor,
				backgroundImage,
				backgroundPosition,
				backgroundSize,
				backgroundRepeat,
				gradient,
				opacity,
				variant,
				...rest
			} = props;
			return rest;
		})()
	);

	const inlineStyle = $derived(
		Object.entries(state.styles as unknown as Record<string, string | number>)
			.map(([key, value]) => `${key}: ${value};`)
			.join(' ')
	);
</script>

<div class={state.classes} style={inlineStyle} {...restProps}>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>
