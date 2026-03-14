<script lang="ts">
	import { createInputAddonState } from '$stylist/design-system/utils/model-helpers/input-state';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
	import type { InputVariant } from '$stylist/design-system/tokens/interaction/variants';

	type InputAddonProps = {
		position?: 'left' | 'right';
		variant?: InputVariant;
		size?: ComponentSize;
		class?: string;
		children?: import('svelte').Snippet;
	};

	let {
		position = 'left',
		variant = 'default',
		size = 'md',
		class: className = '',
		children,
		...restProps
	}: InputAddonProps & HTMLAttributes<HTMLDivElement> = $props();

	const inputAddonState = $derived(
		createInputAddonState({
			variant: variant satisfies InputVariant,
			size,
			class: className
		})
	);

	let classes = $derived(
		[
			inputAddonState.classes,
			position === 'left'
				? 'rounded-l-md border-r border-r-transparent'
				: 'rounded-r-md border-l border-l-transparent'
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={classes} {...restProps}>
	{@render children?.()}
</div>




