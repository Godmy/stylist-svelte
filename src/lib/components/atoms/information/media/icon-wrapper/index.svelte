<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { IconWrapperProps } from '$stylist/design-system';
	import { createIconWrapperState } from '$stylist/design-system/models/information/icon-wrapper.svelte';

	type Props = IconWrapperProps & HTMLAttributes<HTMLDivElement>;

	let {
		class: className,
		content,
		size,
		variant,
		shape,
		color,
		disabled,
		...restProps
	}: Props = $props();

	const state = createIconWrapperState({ size, variant, shape, color, disabled, class: className } as any);
</script>

<div class={state.classes} {...restProps}>
	{#if content}
		{@render content()}
	{/if}
</div>
