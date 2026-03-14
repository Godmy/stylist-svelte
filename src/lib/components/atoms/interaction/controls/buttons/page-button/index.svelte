<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/components/atoms';
const Loader2 = 'loader-2';

	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { PageButtonProps } from '$stylist/design-system/contracts';
	import { INTERACTIVE_VARIANTS } from '$stylist/design-system/styles/interaction/interaction';
import { createButtonState } from '../../../../../../design-system/models/interaction/button.svelte';
	import { createBasePreset } from '$stylist/design-system/runtime/preset';
	import { COMPONENT_SIZE } from '$stylist/design-system/tokens/architecture/component-size';

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
		page,
		isActive,
		...restProps
	} = props;

	// Use centralized state management with adjusted props
	let state = $derived(
		createButtonState(
			createBasePreset(INTERACTIVE_VARIANTS, COMPONENT_SIZE, {
				variant: 'outline',
				size: 'md'
			}),
			{
				...props,
				variant: actualVariant,
				disabled: actualDisabled,
				class: `${props.class ?? ''} page-button`.trim()
			} as any
		)
	);
</script>

<button
	{...restProps}
	type={props.type ?? 'button'}
	class={state.classes}
	{...state.attrs}
	aria-current={props.isActive ? 'page' : undefined}
>
	{#if state.loading}
		<BaseIcon name={Loader2} class={state.loaderClasses} aria-hidden="true" />
		<span class="sr-only">{props.loadingLabel ?? 'Loading...'}</span>
	{:else if props.children}
		{@render props.children?.()}
	{:else}
		{props.page}
	{/if}
</button>












