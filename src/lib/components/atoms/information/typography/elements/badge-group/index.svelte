<script lang="ts">
	import Badge from '../badge/index.svelte';
	import type { BadgeGroupProps } from '$stylist/design-system';
	import { createBadgeGroupState } from '$stylist/design-system/models/information/badge-group.svelte';

	let props: BadgeGroupProps = $props();

	const state = createBadgeGroupState(props);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				badges: _badges,
				maxVisible: _maxVisible,
				showOverflow: _showOverflow,
				badgeClass: _badgeClass,
				overflowClass: _overflowClass,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.containerClasses} {...restProps}>
	{#each state.visibleBadges as badge (badge.id)}
		<Badge
			variant={badge.variant}
			size={badge.size}
			class={state.badgeClass}
			onclick={() => !badge.disabled && badge.onClick && badge.onClick()}
			role="button"
			tabindex={0}
			onkeydown={(e) =>
				(e.key === 'Enter' || e.key === ' ') && !badge.disabled && badge.onClick && badge.onClick()}
		>
			{() => badge.label}
		</Badge>
	{/each}

	{#if state.showOverflow && state.overflowCount > 0}
		<span class={state.overflowClasses}>
			+{state.overflowCount}
		</span>
	{/if}
</div>
