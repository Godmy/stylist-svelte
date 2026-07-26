<script lang="ts">
	import type { SeparatorProps } from '$stylist/layout/interface/recipe/separator';
	import createSeparatorState from '$stylist/layout/function/state/separator/index.svelte';

	let props: SeparatorProps = $props();
	const state = createSeparatorState(props);

	const restProps = $derived(
		(() => {
			const { class: _class, orientation: _orientation, decorative: _decorative, ...rest } = props;
			return rest;
		})()
	);
</script>

<hr
	class={[
		'layout-separator',
		state.orientation === 'vertical' ? 'layout-separator--vertical' : undefined,
		props.class
	]
		.filter(Boolean)
		.join(' ')}
	aria-orientation={state.orientation}
	role={state.decorative ? 'presentation' : 'separator'}
	{...restProps}
/>

<style>
	.layout-separator {
		border: 0;
		border-top: 1px solid var(--color-border-secondary);
		width: 100%;
		margin: 0;
	}

	.layout-separator--vertical {
		border-top: 0;
		border-left: 1px solid var(--color-border-secondary);
		height: 100%;
		width: auto;
	}
</style>
