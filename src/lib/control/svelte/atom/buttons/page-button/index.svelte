<script lang="ts">
	import { Icon as BaseIcon } from '$stylist'; const Loader2 = 'loader-2';
import type { SlotPageButton as PageButtonProps } from '$stylist/control/interface/slot/page-button';
import { createPageButtonState } from '$stylist/control/function/state/page-button';

	/**
	 * PageButton component - A button for pagination
	 * Uses the same props as Button for consistency (SOLID - Liskov Substitution)
	 */
	let props: PageButtonProps = $props();
	const state = createPageButtonState({
		...props,
		isActive: props.isActive
	} as any);

	// Extract rest props manually to avoid $$restProps in runes mode
	let restButtonProps = $derived.by(() => {
		const {
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
		return restProps;
	});
</script>

<button
	{...restButtonProps}
	type={props.type ?? 'button'}
	class={state.classes}
	disabled={state.disabled}
	aria-busy={state.loading ? true : undefined}
	aria-live={state.loading ? 'polite' : undefined}
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















