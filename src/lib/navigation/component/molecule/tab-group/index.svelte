<script lang="ts">
	import { createTabGroupState } from '$stylist/navigation/function/state/tab-group/index.svelte';
	import type { RecipeTabGroup } from '$stylist/navigation/interface/recipe/tab-group';

	let props: RecipeTabGroup = $props();
	const state = createTabGroupState(props);

	let tabs = $derived(props.tabs ?? []);
	let restProps = $derived.by(() => {
		const {
			tabs: tabItems,
			activeTab,
			variant,
			class: className,
			tabListClass,
			tabClass,
			activeTabClass,
			inactiveTabClass,
			panelClass,
			onValueInput,
			onValueChange,
			onChange,
			...rest
		} = props;
		return rest;
	});
</script>

<div class={state.wrapperClasses} {...restProps}>
	<div class={state.tabListClasses} data-variant={props.variant ?? 'rectangle'}>
		{#each tabs as tab}
			<button
				type="button"
				class={[
					'c-tab-group__tab',
					props.tabClass,
					state.currentTab === tab.id ? props.activeTabClass : props.inactiveTabClass
				]
					.filter(Boolean)
					.join(' ')}
				data-active={state.currentTab === tab.id || undefined}
				data-disabled={tab.disabled || undefined}
				data-variant={props.variant ?? 'rectangle'}
				onclick={() => state.changeTab(tab.id)}
				disabled={tab.disabled}
				aria-selected={state.currentTab === tab.id}
				role="tab"
			>
				{tab.title}
			</button>
		{/each}
	</div>

	<div class={state.panelClasses}>
		{#each tabs as tab}
			{#if state.currentTab === tab.id}
				<div class="c-tab-group__panel" role="tabpanel" aria-labelledby={`tab-${tab.id}`}>
					{@render tab.content()}
				</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.c-tab-group {
		width: 100%;
	}

	.c-tab-group__list {
		display: flex;
	}

	.c-tab-group__list[data-variant='rectangle'] {
		border-bottom: 1px solid var(--color-border-primary);
	}

	.c-tab-group__tab {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		cursor: pointer;
		border: none;
		background: transparent;
		transition:
			color var(--duration-120, 120ms),
			border-color var(--duration-120, 120ms);
	}

	.c-tab-group__tab:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: -2px;
	}

	.c-tab-group__list[data-variant='rectangle'] .c-tab-group__tab {
		border-bottom: 2px solid transparent;
		color: var(--color-text-secondary);
		border-radius: 0.5rem 0.5rem 0 0;
	}

	.c-tab-group__list[data-variant='rectangle'] .c-tab-group__tab:hover {
		color: var(--color-text-primary);
		border-bottom-color: var(--color-border-secondary);
	}

	.c-tab-group__list[data-variant='rectangle'] .c-tab-group__tab[data-active] {
		border-bottom-color: var(--color-primary-500);
		color: var(--color-primary-600);
	}

	.c-tab-group__list[data-variant='square'] .c-tab-group__tab {
		border: 1px solid var(--color-border-primary);
		color: var(--color-text-secondary);
	}

	.c-tab-group__list[data-variant='square'] .c-tab-group__tab[data-active] {
		border-color: var(--color-primary-500);
		background: var(--color-primary-50);
		color: var(--color-primary-600);
	}

	.c-tab-group__list[data-variant='square'] .c-tab-group__tab:hover:not([data-active]) {
		background: var(--color-secondary-50);
	}

	.c-tab-group__list[data-variant='pill'] .c-tab-group__tab {
		border-radius: 9999px;
		color: var(--color-text-secondary);
	}

	.c-tab-group__list[data-variant='pill'] .c-tab-group__tab[data-active] {
		background: var(--color-primary-500);
		color: var(--color-text-inverse);
	}

	.c-tab-group__list[data-variant='pill'] .c-tab-group__tab:hover:not([data-active]) {
		background: var(--color-secondary-100);
	}

	.c-tab-group__tab[data-disabled] {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
		pointer-events: none;
	}

	.c-tab-group__panels {
		margin-top: 1rem;
	}

	.c-tab-group__panel {
		padding: 1rem;
	}
</style>
