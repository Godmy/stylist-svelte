<script lang="ts">
	import { Icon as BaseIcon } from '$stylist'; const X = 'x'; const Loader2 = 'loader-2';
import type { ButtonElementProps } from '$stylist/control/interface/component/button/other';
import { createCloseButtonState } from '$stylist/control/function/state/close-button';

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
	let props: ButtonElementProps = $props();

	// Use centralized state management
	const controlState = createCloseButtonState(props);

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
>
	{#if controlState.loading}
		<BaseIcon name={Loader2} class={controlState.loaderClasses} aria-hidden="true" />
		<span class="sr-only">{props.loadingLabel ?? 'Closing...'}</span>
	{:else}
		<BaseIcon name={X} class="h-4 w-4" />
	{/if}
</button>















