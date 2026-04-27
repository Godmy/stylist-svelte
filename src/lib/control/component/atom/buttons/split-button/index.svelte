<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
import type { SlotButtonElement as ButtonElementProps } from '$stylist/control/interface/slot/button-element';
import { createSplitButtonState } from '$stylist/control/function/state/split-button';
	import type { SplitButtonButtonAttributes } from '$stylist/control/type/struct/split-button-button-attributes';

	const ChevronDown = 'chevron-down';

	export interface ISplitButtonItem {
		label: string;
		onClick: () => void;
		disabled?: boolean;
	}

	export type ISplitButtonElementProps = ButtonElementProps &
		SplitButtonButtonAttributes & {
			items: ISplitButtonItem[];
			primaryAction: () => void;
			primaryLabel?: string;
		};

	/**
	 * SplitButton component - A button with a primary action and a dropdown menu for additional actions
	 * Uses the same props as Button for consistency (SOLID - Liskov Substitution)
	 *
	 * @param variant - Visual style of the button
	 * @param size - Size of the button
	 * @param disabled - Whether the button is disabled
	 * @param loading - Whether the button is in loading state
	 * @param items - Array of items for the dropdown menu
	 * @param primaryAction - Function to execute when the primary button is clicked
	 * @param primaryLabel - Label for the primary button
	 * @param class - Additional CSS classes
	 * @returns A split button with primary action and dropdown menu
	 */
	let props: ISplitButtonElementProps = $props();
	const state = createSplitButtonState(
		{
			...props,
			class: `${props.class ?? ''} split-button__button`.trim()
		} as any
	);

	// Extract div-specific attributes to avoid type conflicts
	let divAttributes = $derived.by(() => {
		const allProps = props as Record<string, any>;
		const divCompatibleProps: Record<string, any> = {};
		
		// List of attributes that are compatible with div elements
		const divAllowedAttrs = [
			'id', 'class', 'style', 'title', 'role', 'tabindex', 'hidden',
			'data-*', 'aria-*' // wildcard patterns would be handled separately
		];
		
		// Copy only the div-compatible attributes
		for (const [key, value] of Object.entries(allProps)) {
			// Include standard div attributes and data/aria attributes
			if (
				key.startsWith('data-') || 
				key.startsWith('aria-') || 
				![
					'variant', 'size', 'disabled', 'loading', 'block', 'loadingLabel', 'children',
					'items', 'primaryAction', 'primaryLabel', 'type', 'ariaLabel',
					'onclick', 'onfocus', 'onblur', 'onkeydown', 'onkeyup', 'onmousedown', 'onmouseup',
					'onmouseenter', 'onmouseleave', 'onsubmit', 'onreset'
				].includes(key)
			) {
				divCompatibleProps[key] = value;
			}
		}
		
		return divCompatibleProps;
	});
	const restProps = $derived(divAttributes);
</script>

<div {...restProps} class={String(state.wrapperClasses ?? '')} id={state.buttonId}>
	<button
		type={props.type ?? 'button'}
		disabled={typeof props.disabled === 'boolean' ? props.disabled : undefined}
		aria-busy={typeof props.loading === 'boolean' ? props.loading : undefined}
		aria-live={typeof props.loading === 'boolean' && props.loading ? 'polite' : undefined}
		class={String(state.primaryButtonClasses ?? '')}
		aria-label={typeof props.ariaLabel === 'string' ? props.ariaLabel : props.primaryLabel || undefined}
		onclick={props.primaryAction}
	>
		{#if props.children}
			{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
		{:else}
			{props.primaryLabel ?? 'Action'}
		{/if}
	</button>
	<button
		type={props.type ?? 'button'}
		disabled={(typeof props.disabled === 'boolean' ? props.disabled : false) || (typeof props.loading === 'boolean' ? props.loading : false)}
		class={state.toggleButtonClasses}
		onclick={state.toggleDropdown}
		aria-haspopup="true"
		aria-expanded={state.isOpen}
		aria-label="Show more options"
	>
					<BaseIcon name={ChevronDown} class="h-4 w-4" aria-hidden="true" />
	</button>

	{#if state.isOpen}
		<div class={state.menuClasses} role="menu" aria-orientation="vertical" tabindex="-1">
			<div class="flex flex-col gap-1 p-1" role="none">
				{#each props.items as item, i}
					<button
						class={`${state.menuItemBaseClasses} ${item.disabled ? state.menuItemDisabledClasses : ''}`.trim()}
						onclick={() => state.handleItemClick(item.onClick)}
						disabled={item.disabled}
						role="menuitem"
					>
						{item.label}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
















