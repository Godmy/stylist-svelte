<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { INotificationBadgeProps } from '$stylist/design-system/props';
	import { NotificationBadgeStyleManager } from '$stylist/design-system/styles/interaction/feedback';

	/**
	 * NotificationBadge component - A badge component to display notifications count or status
	 *
	 * Following SOLID principles:
	 * - Single Responsibility: Only handles component rendering and state
	 * - Open/Closed: Extendable through properties but closed for modification
	 * - Liskov Substitution: Can be substituted with other badge components
	 * - Interface Segregation: Small focused interface
	 * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
	 *
	 * @param count - Number to display on the badge
	 * @param maxCount - Maximum count to display before showing '+'
	 * @param variant - Visual variant of the badge ('default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'number' | 'dot')
	 * @param position - Position of the badge relative to its parent
	 * @param showZero - Whether to show the badge when count is 0
	 * @param badgeClass - Additional CSS classes for the badge element
	 * @param children - Child elements to wrap with the badge
	 * @returns A styled, accessible notification badge element
	 */
	let {
		count = 0,
		maxCount = 99,
		variant = 'error',
		position = 'top-right',
		showZero = false,
		class: className = '',
		badgeClass = '',
		children,
		...restProps
	}: INotificationBadgeProps = $props();

	// Determine if we should show just a dot (when variant is 'dot')
	const showDot = variant === 'dot';

	// Determine badge content
	const badgeContent = (() => {
		if (showDot) {
			return '';
		} else if (count > maxCount) {
			return `${maxCount}+`;
		} else {
			return count.toString();
		}
	})();

	// Get CSS classes using the style manager
	let containerClasses = $derived(NotificationBadgeStyleManager.getContainerClasses(className));
	let badgeClasses = $derived(
		NotificationBadgeStyleManager.getBadgeClasses(showDot, variant, position, badgeClass)
	);
</script>

{#if count > 0 || showZero || showDot}
	<div class={containerClasses} {...restProps}>
		{#if children}
			{@render children?.()}
		{/if}

		<span class={badgeClasses}>
			{#if !showDot && (count > 0 || showZero)}
				{badgeContent}
			{/if}
		</span>
	</div>
{:else}
	<div class={`inline-block ${className}`} {...restProps}>
		{#if children}
			{@render children?.()}
		{/if}
	</div>
{/if}



