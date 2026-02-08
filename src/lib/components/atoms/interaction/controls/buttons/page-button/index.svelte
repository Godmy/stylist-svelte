<script lang="ts">
	import { Loader2 } from 'lucide-svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { PageButtonProps } from '$stylist/design-system/attributes';
	import { PAGE_BUTTON_PRESET } from '$stylist/design-system/presets';
	import { createState } from '../state.svelte';

	type ButtonAttributes = Omit<HTMLButtonAttributes, 'children' | 'class' | 'disabled'>;

	export type IPageButtonProps = PageButtonProps &
		ButtonAttributes & {
			page: number;
			isActive?: boolean;
		};

	/**
	 * PageButton component - A button for pagination
	 * Uses the same props as Button for consistency (SOLID - Liskov Substitution)
	 */
	let props: PageButtonProps & ButtonAttributes = $props();

	// For active pages, we use primary variant to highlight the current page
	let actualVariant = $derived(props.isActive ? 'primary' : props.variant);
	let actualDisabled = $derived(props.disabled || props.isActive);

	// Use centralized state management with adjusted props
	let state = createState(PAGE_BUTTON_PRESET, {
		...props,
		variant: actualVariant,
		disabled: actualDisabled,
		class: `${props.class ?? ''} page-button`.trim()
	});
</script>

<button
	{...$$restProps}
	type={props.type ?? 'button'}
	class={state.classes}
	{...state.attrs}
	aria-current={props.isActive ? 'page' : undefined}
>
	{#if state.loading}
		<Loader2 class={state.loaderClasses} aria-hidden="true" />
		<span class="sr-only">{props.loadingLabel ?? 'Loading...'}</span>
	{:else if props.children}
		{@render props.children()}
	{:else}
		{props.page}
	{/if}
</button>
