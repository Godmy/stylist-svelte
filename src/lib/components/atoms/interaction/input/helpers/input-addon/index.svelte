<script lang="ts">
	import { createInputAddonState, INPUT_FIELD_PRESET } from '$stylist/design-system/models/input-addon.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { CompactSize } from '$stylist/design-system/tokens/sizes';
	import type { InputAddonVariant } from '$stylist/design-system/props';

	/**
	 * InputAddon component - Prefix or suffix for an input field (icon, text)
	 *
	 * @param position - Position ('left' | 'right')
	 * @param variant - Style variant ('solid' | 'ghost')
	 * @param children - Content to display in the addon
	 * @param class - Additional CSS classes
	 * @returns Wrapper to add content to an input field
	 */

	type InputAddonProps = {
		position?: 'left' | 'right';
		variant?: InputAddonVariant;
		size?: CompactSize;
		class?: string;
		children?: import('svelte').Snippet;
	};

	let {
		position = 'left',
		variant = 'default',
		size = INPUT_FIELD_PRESET.defaults.size,
		class: className = '',
		children,
		...restProps
	}: InputAddonProps & HTMLAttributes<HTMLDivElement> = $props();

	const inputAddonState = $derived(createInputAddonState({
		variant: variant satisfies InputAddonVariant,
		size,
		class: className
	}));

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





