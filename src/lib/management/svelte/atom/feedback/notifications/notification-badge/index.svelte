<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { INotificationBadgeProps } from '$stylist/notification/interface/component/notification/other';
	import { NotificationBadgeStyleManager } from '$stylist';

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
	 * @param marker - Badge marker kind ('dot' | 'number' | 'letter' | 'check' | 'x')
	 * @param appearance - Visual appearance of the badge
	 * @param position - Position of the badge relative to its parent
	 * @param showZero - Whether to show the badge when count is 0
	 * @param badgeClass - Additional CSS classes for the badge element
	 * @param children - Child elements to wrap with the badge
	 * @returns A styled, accessible notification badge element
	 */
	let {
		count = 0,
		maxCount = 99,
		marker = 'number',
		appearance = 'danger',
		position = 'top-end',
		showZero = false,
		class: className = '',
		badgeClass = '',
		children,
		...restProps
	}: INotificationBadgeProps = $props();

	const showDot = marker === 'dot';

	// Determine badge content
	const badgeContent = (() => {
		if (showDot) {
			return '';
		} else if (marker === 'check') {
			return '✓';
		} else if (marker === 'x') {
			return '×';
		} else if (count > maxCount) {
			return `${maxCount}+`;
		} else {
			return count.toString();
		}
	})();

	// Get CSS classes using the style manager
	let containerClasses = $derived(NotificationBadgeStyleManager.getContainerClasses(className));
	let badgeClasses = $derived(
		NotificationBadgeStyleManager.getBadgeClasses(marker, appearance, position, badgeClass)
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






