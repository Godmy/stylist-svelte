<script lang="ts">
	import createBadgeGroupState from '$stylist/information/function/state/badge-group/index.svelte';
	import type { RecipeBadgeGroup } from '$stylist/information/interface/recipe/badge-group';
	import Badge from '$stylist/information/component/atom/badge/index.svelte';

	let props: RecipeBadgeGroup = $props();

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
			onkeydown={(event: KeyboardEvent) =>
				(event.key === 'Enter' || event.key === ' ') &&
				!badge.disabled &&
				badge.onClick &&
				badge.onClick()}
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

<style>
	.badge-group {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.5rem;
	}
	.badge-group__overflow {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		background-color: var(--color-neutral-100, var(--color-background-secondary));
		color: var(--color-neutral-800, var(--color-text-primary));
		padding: 0.125rem 0.625rem;
		font-size: 0.75rem;
		font-weight: 500;
	}
</style>
