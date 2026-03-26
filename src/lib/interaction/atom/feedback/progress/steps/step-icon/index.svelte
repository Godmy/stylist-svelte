<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
	import { Icon as BaseIcon } from '$stylist';
const Check = 'check';
const X = 'x';

	import type { Snippet } from 'svelte';

	import type { IStepIconProps } from '$stylist';
	import { mergeClasses } from '$stylist/information/function/classes';
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
	}: IStepIconProps & InteractionHTMLAttributes<HTMLSpanElement> = $props();

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
		<BaseIcon name={Check} size={content.size} />
	{:else if content.type === 'icon' && content.icon === 'X'}
		<BaseIcon name={X} size={content.size} />
	{:else if content.type === 'number' && content.value !== undefined}
		{content.value}
	{/if}
</span>







