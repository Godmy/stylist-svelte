<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/components/atoms';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { ButtonElementProps } from '$stylist/design-system/contracts/interaction/button';
	import { InteractionStyleManager } from '$stylist/design-system/styles/interaction/interaction';
	import { createButtonState } from '../../../../../../design-system/models/interaction/button.svelte';
	import { createBasePreset } from '$stylist/design-system/runtime/preset';
	import { COMPONENT_SIZE } from '$stylist/design-system/tokens/architecture/component-size';

	const ChevronDown = 'chevron-down';

	type ButtonAttributes = Omit<HTMLButtonAttributes, 'children' | 'class' | 'disabled'>;

	export interface ISplitButtonItem {
		label: string;
		onClick: () => void;
		disabled?: boolean;
	}

	export type ISplitButtonElementProps = ButtonElementProps &
		ButtonAttributes & {
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

	// Use centralized state management for base button properties
	let buttonState = createButtonState(
		createBasePreset(InteractionStyleManager.getInteractiveVariants(), COMPONENT_SIZE, {
			variant: 'primary',
			size: 'md'
		}),
		{
			...props,
			class: `${props.class ?? ''} split-button__button`.trim()
		} as any
	);

	const baseButtonClasses = $derived(
		[buttonState.classes, 'split-button__button'].filter(Boolean).join(' ')
	);

	const primaryButtonClasses = $derived(`${baseButtonClasses} rounded-r-none border-r-0`.trim());
	const toggleButtonClasses = $derived(`${baseButtonClasses} rounded-l-none border-l-0`.trim());
	const wrapperClasses = $derived(
		`relative inline-flex items-center rounded-md overflow-hidden ${props.class ?? ''}`.trim()
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

	let isOpen = $state(false);
	let buttonId = `split-button-${Math.random().toString(36).substr(2, 9)}`;

	// Handle clicks outside to close dropdown
	$effect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: Event) => {
			if (!event.composedPath().some((el) => el instanceof Element && el.id === buttonId)) {
				isOpen = false;
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});

	const toggleDropdown = () => {
		if (!props.disabled) {
			isOpen = !isOpen;
		}
	};

	const closeDropdown = () => {
		isOpen = false;
	};

	const menuClasses = $derived(
		[
			'split-button-menu',
			'absolute z-[var(--z-index-docked)] mt-1 w-48 rounded-md',
			'border border-[var(--color-border-primary)]',
			'bg-[var(--color-background-primary)] text-[var(--color-text-primary)]',
			'shadow-[0_10px_15px_-3px_color-mix(in srgb, var(--color-text-primary) 20%, transparent),0_4px_6px_-2px_color-mix(in srgb, var(--color-text-primary) 12%, transparent)]',
			'outline-none'
		].join(' ')
	);

	const menuItemBaseClasses =
		'split-button-menu__item w-full px-4 py-2 text-sm text-left rounded-md bg-transparent text-[inherit] transition-colors duration-[var(--duration-150)] focus-visible:outline-none hover:bg-[var(--color-secondary-100)] focus-visible:bg-[var(--color-secondary-100)]';

	const menuItemDisabledClasses =
		'split-button-menu__item--disabled opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none';
</script>

<div {...restProps} class={wrapperClasses} id={buttonId}>
	<button
		type={props.type ?? 'button'}
		disabled={props.disabled}
		aria-busy={props.loading}
		aria-live={props.loading ? 'polite' : undefined}
		class={primaryButtonClasses}
		aria-label={props.ariaLabel || props.primaryLabel || undefined}
		onclick={props.primaryAction}
	>
		{#if props.children}
			{@render props.children?.()}
		{:else}
			{props.primaryLabel ?? 'Action'}
		{/if}
	</button>
	<button
		type={props.type ?? 'button'}
		disabled={props.disabled || props.loading}
		class={toggleButtonClasses}
		onclick={toggleDropdown}
		aria-haspopup="true"
		aria-expanded={isOpen}
		aria-label="Show more options"
	>
					<BaseIcon name={ChevronDown} class="h-4 w-4" aria-hidden="true" />
	</button>

	{#if isOpen}
		<div class={menuClasses} role="menu" aria-orientation="vertical" tabindex="-1">
			<div class="flex flex-col gap-1 p-1" role="none">
				{#each props.items as item, i}
					<button
						class={`${menuItemBaseClasses} ${item.disabled ? menuItemDisabledClasses : ''}`.trim()}
						onclick={() => {
							item.onClick();
							closeDropdown();
						}}
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












