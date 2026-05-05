<script lang="ts">
	import { createButtonFactoryInput } from '$stylist/interaction/factory/button';
	import { Icon as BaseIcon } from '$stylist/media';
	const Loader2 = 'loader-2';
import type { HTMLButtonAttributes } from 'svelte/elements';
import type { SlotIconButton as IconButtonProps } from '$stylist/control/interface/slot/icon-button';
import { createIconButtonState } from '$stylist/control/function/state/icon-button';

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
	const state = createIconButtonState(createButtonFactoryInput(props as any));

	const restProps = $derived.by(() => {
		const {
			variant: _variant,
			size: _size,
			disabled: _disabled,
			loading: _loading,
			block: _block,
			loadingLabel: _loadingLabel,
			children: _children,
			icon: _icon,
			class: _class,
			...rest
		} = props;
		return rest;
	});
</script>

<button {...restProps} type={props.type ?? 'button'} class={state.classes} {...state.attrs}>
	{#if state.loading}
		<BaseIcon name={Loader2} class={state.loaderClasses} aria-hidden="true" />
		<span class="sr-only">{props.loadingLabel ?? 'Loading...'}</span>
	{:else if props.icon !== undefined && props.icon !== null}
		{#if typeof props.icon === 'string'}
			<BaseIcon name={props.icon} />
		{:else}
			{@render props.icon()}
		{/if}
	{:else if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{/if}
</button>















