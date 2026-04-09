<script lang="ts">
	import { Icon as BaseIcon } from '$stylist'; const Loader2 = 'loader-2';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { PageButtonProps } from '$stylist/control/interface/component/button/other';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { createButtonState } from '$stylist/control/function/state/button';
import { createBasePreset } from '$stylist/interaction/preset/base';
import { TOKEN_SIZE } from '$stylist/layout/const/enum/size';

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
			createBasePreset(InteractionStyleManager.getInteractiveVariants(), TOKEN_SIZE, {
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















