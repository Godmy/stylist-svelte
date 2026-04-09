<script lang="ts">
	import { Icon as BaseIcon } from '$stylist'; const Loader2 = 'loader-2';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { IconButtonProps } from '$stylist/control/interface/component/button/other';
import { InteractionStyleManager } from '$stylist/interaction/class/style-manager/interaction';
import { createButtonState } from '$stylist/control/function/state/button';
import { createBasePreset } from '$stylist/interaction/preset/base';
import { TOKEN_SIZE } from '$stylist/layout/const/enum/size';

	/**
	 * IconButton component - A button that primarily displays an icon
	 * Uses the same props as Button for consistency (SOLID - Liskov Substitution)
	 *
	 * @param variant - Visual style of the button
	 * @param size - Size of the button
	 * @param disabled - Whether the button is disabled
	 * @param loading - Whether the button is in a loading state
	 * @param icon - The icon component to display in the button
	 * @param ariaLabel - Accessible label for the button
	 * @param class - Additional CSS classes
	 * @returns An accessible, styled icon button element
	 */
	let props: IconButtonProps & HTMLButtonAttributes = $props();

	// Extract rest props manually to avoid $$restProps in runes mode
	let {
		variant,
		size,
		disabled,
		loading,
		block,
		loadingLabel,
		children,
		icon,
		class: classProp,
		...restProps
	} = props;

	// Use centralized state management
	let state = createButtonState(
		createBasePreset(InteractionStyleManager.getInteractiveVariants(), TOKEN_SIZE, {
			variant: 'secondary',
			size: 'md'
		}),
		{
			...props,
			class: `${props.class ?? ''} icon-button`.trim()
		} as any
	);
</script>

<button {...restProps} type={props.type ?? 'button'} class={state.classes} {...state.attrs}>
	{#if state.loading}
		<BaseIcon name={Loader2} class={state.loaderClasses} aria-hidden="true" />
		<span class="sr-only">{props.loadingLabel ?? 'Loading...'}</span>
	{:else if props.icon !== undefined && props.icon !== null}
		{#if typeof props.icon === 'string'}
			<BaseIcon name={props.icon} />
		{:else}
			{@render props.icon?.()}
		{/if}
	{:else if props.children}
		{@render props.children?.()}
	{/if}
</button>















