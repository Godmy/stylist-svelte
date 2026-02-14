<script lang="ts">
	import { X, Loader2 } from 'lucide-svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonElementProps } from '$stylist/design-system/props';
	import { createState, CLOSE_BUTTON_PRESET } from '$stylist/design-system/models/close-button.svelte';

	/**
	 * CloseButton component - A standardized close button (X icon)
	 *
	 * @param variant - Visual style of the button
	 * @param size - Size of the button
	 * @param disabled - Whether the button is disabled
	 * @param loading - Whether the button is in a loading state
	 * @param ariaLabel - Accessible label (defaults to "Close")
	 * @param class - Additional CSS classes
	 * @returns A standardized close button with X icon
	 */
	let props: ButtonElementProps & HTMLButtonAttributes = $props();

	// Use centralized state management
	let state = createState(CLOSE_BUTTON_PRESET, props as any);

	// Extract rest props manually to avoid $$restProps in runes mode
	let {
		variant,
		size,
		disabled,
		loading,
		block,
		loadingLabel,
		children,
		class: classProp,
		...restProps
	} = props;
</script>

<button {...restProps} type={props.type ?? 'button'} class={state.classes} {...state.attrs}>
	{#if state.loading}
		<Loader2 class={state.loaderClasses} aria-hidden="true" />
		<span class="sr-only">{props.loadingLabel ?? 'Closing...'}</span>
	{:else}
		<X class="h-4 w-4" />
	{/if}
</button>





