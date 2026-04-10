<script lang="ts">
	import { Icon as BaseIcon } from '$stylist'; const Loader2 = 'loader-2';
import type { PageButtonProps } from '$stylist/control/interface/component/button/other';
import { createPageButtonState } from '$stylist/control/function/state/page-button';

	/**
	 * PageButton component - A button for pagination
	 * Uses the same props as Button for consistency (SOLID - Liskov Substitution)
	 */
	let props: PageButtonProps = $props();
	const controlState = createPageButtonState({
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
	class={controlState.classes}
	disabled={controlState.disabled}
	aria-busy={controlState.loading ? true : undefined}
	aria-live={controlState.loading ? 'polite' : undefined}
	aria-current={props.isActive ? 'page' : undefined}
>
	{#if controlState.loading}
		<BaseIcon name={Loader2} class={controlState.loaderClasses} aria-hidden="true" />
		<span class="sr-only">{props.loadingLabel ?? 'Loading...'}</span>
	{:else if props.children}
		{@render props.children?.()}
	{:else}
		{props.page}
	{/if}
</button>















