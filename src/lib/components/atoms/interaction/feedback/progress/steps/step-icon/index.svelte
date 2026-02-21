<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { Check, X } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	import type { IStepIconProps } from '$stylist/design-system/props';
	import { mergeClasses } from '$stylist/utils/classes';
	/**
	 * StepIcon component - Represents the icon for a step in a progress indicator
	 *
	 * Following SOLID principles:
	 * - Single Responsibility: Only handles component rendering
	 * - Open/Closed: Extendable through properties but closed for modification
	 * - Liskov Substitution: Can be substituted with other icon components
	 * - Interface Segregation: Small focused interface
	 * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
	 *
	 * @param status - Status of the step icon ('pending' | 'active' | 'completed' | 'error')
	 * @param size - Size of the step icon ('sm' | 'md' | 'lg')
	 * @param stepNumber - Step number to display when no icon is specified
	 * @param iconName - Name of the icon to display
	 * @param children - Snippet content for the icon (if not using default number or icon)
	 * @returns An accessible, styled step icon element
	 */
	let {
		status = 'pending',
		size = 'md',
		stepNumber,
		iconName,
		class: className = '',
		children,
		...restProps
	}: IStepIconProps & HTMLAttributes<HTMLSpanElement> = $props();

	const iconSize = $derived(size === 'sm' ? 14 : size === 'lg' ? 22 : 18);
	let classes = $derived(
		mergeClasses('step-icon', `status-${status}`, `size-${size}`, className)
	);
	let content = $derived(
		(() => {
			if (status === 'completed') {
				return { type: 'icon', icon: 'Check', size: iconSize };
			}
			if (status === 'error') {
				return { type: 'icon', icon: 'X', size: iconSize };
			}
			return { type: 'number', value: stepNumber };
		})()
	);
</script>

<span {...restProps} class={classes}>
	{#if children}
		{@render children?.()}
	{:else if content.type === 'icon' && content.icon === 'Check'}
		<Check size={content.size} />
	{:else if content.type === 'icon' && content.icon === 'X'}
		<X size={content.size} />
	{:else if content.type === 'number' && content.value !== undefined}
		{content.value}
	{/if}
</span>



