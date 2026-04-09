<script lang="ts">
	import { Icon as BaseIcon } from '$stylist'; const X = 'x'; const Loader2 = 'loader-2';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { ButtonElementProps } from '$stylist/control/interface/component/button/other';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { createButtonState } from '$stylist/control/function/state/button';
import { createBasePreset } from '$stylist/interaction/preset/base';
import { TOKEN_SIZE } from '$stylist/layout/const/enum/size';

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
	let state = createButtonState(
		createBasePreset(InteractionStyleManager.getInteractiveVariants(), TOKEN_SIZE, {
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















