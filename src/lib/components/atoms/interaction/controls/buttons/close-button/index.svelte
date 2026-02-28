<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/components/atoms';
const X = 'x';
const Loader2 = 'loader-2';

	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonElementProps } from '$stylist/design-system/contracts';
	import { INTERACTIVE_VARIANTS } from '$stylist/design-system/styles/interaction/interaction';
import { createCloseButtonState } from '$stylist/design-system/models/interaction/button.svelte';
	import { createBasePreset } from '$stylist/design-system/runtime/preset';
	import { COMPONENT_SIZE } from '$stylist/design-system/tokens/architecture/component-size';

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
	let state = createCloseButtonState(
		createBasePreset(INTERACTIVE_VARIANTS, COMPONENT_SIZE, {
			variant: 'ghost',
			size: 'sm'
		}),
		props as any
	);

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
		<BaseIcon name={Loader2} class={state.loaderClasses} aria-hidden="true" />
		<span class="sr-only">{props.loadingLabel ?? 'Closing...'}</span>
	{:else}
		<BaseIcon name={X} class="h-4 w-4" />
	{/if}
</button>









