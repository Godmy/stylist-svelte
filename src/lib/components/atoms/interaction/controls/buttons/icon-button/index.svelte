<script lang="ts">
	import { Loader2 } from 'lucide-svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { IconButtonProps } from '$stylist/design-system/contracts';
	import { INTERACTIVE_VARIANTS } from '$stylist/design-system/classes/interaction';
	import { createState } from '$stylist/design-system/models/interaction/icon-button.svelte';
	import { createBasePreset } from '$stylist/design-system/runtime/preset';
	import { COMPACT_SIZE_SCALE } from '$stylist/design-system/tokens/architecture/sizes';

	/**
	 * IconButton component - A button that primarily displays an icon
	 * Uses the same props as Button for consistency (SOLID - Liskov Substitution)
	 *
	 * @param variant - Visual style of the button
	 * @param size - Size of the button
	 * @param disabled - Whether the button is disabled
	 * @param loading - Whether the button is in a loading state
	 * @param icon - The icon component to display in the button
	 * @param ariaLabel - Accessible label for the button
	 * @param class - Additional CSS classes
	 * @returns An accessible, styled icon button element
	 */
	let props: IconButtonProps & HTMLButtonAttributes = $props();

	// Extract rest props manually to avoid $$restProps in runes mode
	let {
		variant,
		size,
		disabled,
		loading,
		block,
		loadingLabel,
		children,
		icon,
		class: classProp,
		...restProps
	} = props;

	// Use centralized state management
	let state = createState(
		createBasePreset(INTERACTIVE_VARIANTS, COMPACT_SIZE_SCALE, {
			variant: 'secondary',
			size: 'md'
		}),
		{
			...props,
			class: `${props.class ?? ''} icon-button`.trim()
		} as any
	);
</script>

<button {...restProps} type={props.type ?? 'button'} class={state.classes} {...state.attrs}>
	{#if state.loading}
		<Loader2 class={state.loaderClasses} aria-hidden="true" />
		<span class="sr-only">{props.loadingLabel ?? 'Loading...'}</span>
	{:else if props.icon !== undefined && props.icon !== null}
		{@const Icon = props.icon}
		<Icon />
	{:else if props.children}
		{@render props.children?.()}
	{/if}
</button>





