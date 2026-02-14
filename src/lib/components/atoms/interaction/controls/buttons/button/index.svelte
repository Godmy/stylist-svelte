<script lang="ts">
	import { Loader2 } from 'lucide-svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonElementProps } from '$stylist/design-system/props';
	import { createState, BUTTON_PRESET } from '$stylist/design-system/models/button.svelte';

	/**
	 * Button component - A flexible button component with various styles and states
	 *
	 * @param variant - Visual style of the button ('primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link')
	 * @param size - Size of the button ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the button is disabled
	 * @param loading - Whether the button is in a loading state
	 * @param block - Whether the button should span the full width of its container
	 * @param content - Snippet content for the button (if not using default text content)
	 * @returns An accessible, styled button element
	 */

	let props: ButtonElementProps & HTMLButtonAttributes = $props();

	// Use centralized state management
	let state = createState(BUTTON_PRESET, props as any);

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
		<span class="sr-only">{props.loadingLabel ?? 'Loading...'}</span>
	{/if}

	{#if props.children}
		{@render props.children()}
	{:else if state.loading}
		{props.loadingLabel ?? 'Loading...'}
	{/if}
</button>





